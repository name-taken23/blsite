import fs from "node:fs/promises";
import path from "node:path";
import * as ts from "typescript";

const ROOT = process.cwd();

const TARGET_DIRS = ["app", "components", "content", "lib", "public"]; // relative to ROOT

const EXCLUDED_REL_FILES = new Set([
  "lib/tokens.ts",
  "lib/motion.ts",
  "lib/utils.ts",
]);

const CODE_EXTS = new Set([".ts", ".tsx"]);
const TEXT_EXTS = new Set([".md", ".mdx", ".txt", ".xml", ".svg"]);

/**
 * @typedef {{
 *  file: string;
 *  line: number;
 *  col: number;
 *  text: string;
 *  kind: string;
 * }} CopyEntry
 */

const ALLOWED_ATTRS = new Set(["alt", "title", "aria-label", "aria-describedby", "placeholder"]);
const DISALLOWED_ATTRS = new Set([
  "className",
  "class",
  "id",
  "key",
  "style",
  "href",
  "src",
  "sizes",
  "rel",
  "target",
  "type",
  "name",
  "value",
  "method",
  "action",
  "as",
  "loading",
  "decoding",
]);

const ALLOWED_PROP_KEYS = new Set([
  "title",
  "subtitle",
  "heading",
  "label",
  "value",
  "copy",
  "description",
  "quote",
  "author",
  "role",
  "company",
  "impact",
  "industry",
  "timeline",
  "client",
  "metric",
  "results",
  "tags",
  "kicker",
  "cta",
  "text",
  "name",
  "summary",
]);

function normalizeRenderedText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function looksLikeTailwindOrToken(text) {
  // Heuristic: strings that are overwhelmingly token-ish (no spaces, lots of dashes/slashes/colons)
  if (text.includes(" ")) return false;
  if (text.length < 4) return false;
  if (/^\.{0,2}\//.test(text)) return true; // paths like ./foo
  if (/^[a-z0-9_@./:-]+$/i.test(text) && (text.includes("-") || text.includes(":") || text.includes("/"))) {
    return true;
  }
  return false;
}

function isProbablyUserFacingString(text) {
  const t = text.trim();
  if (!t) return false;
  if (looksLikeTailwindOrToken(t)) return false;
  // If it has spaces or typical punctuation, it’s likely copy.
  if (/[\s]/.test(t)) return true;
  if (/[“”"'!?.,—–:;]/.test(t)) return true;
  // Short tokens can still be user-facing (e.g., AI, NDA, Work)
  if (t.length <= 3) return true;
  // Longer single-word tokens: include if it contains letters and is not obviously a token
  if (/[A-Za-z]/.test(t)) return true;
  return false;
}

function getLineCol(sourceFile, node) {
  const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
  return { line: line + 1, col: character + 1 };
}

/**
 * @param {ts.SourceFile} sourceFile
 * @param {ts.Node} node
 * @returns {string | null}
 */
function extractStaticText(node, sourceFile) {
  if (ts.isStringLiteral(node)) return node.text;
  if (ts.isNoSubstitutionTemplateLiteral(node)) return node.text;

  if (ts.isTemplateExpression(node)) {
    // Only accept templates without expressions; TemplateExpression always has spans.
    return null;
  }

  if (ts.isJsxText(node)) {
    const raw = node.getText(sourceFile);
    const norm = normalizeRenderedText(raw);
    return norm || null;
  }

  return null;
}

/**
 * @param {ts.SourceFile} sourceFile
 * @returns {CopyEntry[]}
 */
function extractFromSourceFile(sourceFile) {
  /** @type {CopyEntry[]} */
  const entries = [];

  /**
   * @param {ts.Node} node
   */
  function visit(node) {
    // 1) Plain JSX text nodes
    if (ts.isJsxText(node)) {
      const text = extractStaticText(node, sourceFile);
      if (text && isProbablyUserFacingString(text)) {
        const { line, col } = getLineCol(sourceFile, node);
        entries.push({ file: sourceFile.fileName, line, col, text, kind: "jsx-text" });
      }
    }

    // 2) JSX expressions that are string literals: <span>{"Hello"}</span>
    if (ts.isJsxExpression(node) && node.expression) {
      const expr = node.expression;
      if (ts.isStringLiteral(expr) || ts.isNoSubstitutionTemplateLiteral(expr)) {
        const text = extractStaticText(expr, sourceFile);
        if (text && isProbablyUserFacingString(text)) {
          const { line, col } = getLineCol(sourceFile, expr);
          entries.push({ file: sourceFile.fileName, line, col, text, kind: "jsx-expression" });
        }
      }
    }

    // 3) JSX attributes for accessibility / visible prompts
    if (ts.isJsxAttribute(node)) {
      const attrName = node.name.getText(sourceFile);
      if (DISALLOWED_ATTRS.has(attrName)) {
        // skip
      } else if (ALLOWED_ATTRS.has(attrName)) {
        const init = node.initializer;
        if (init && ts.isStringLiteral(init)) {
          const text = init.text;
          if (text && isProbablyUserFacingString(text)) {
            const { line, col } = getLineCol(sourceFile, init);
            entries.push({ file: sourceFile.fileName, line, col, text, kind: `attr:${attrName}` });
          }
        } else if (init && ts.isJsxExpression(init) && init.expression) {
          const expr = init.expression;
          if (ts.isStringLiteral(expr) || ts.isNoSubstitutionTemplateLiteral(expr)) {
            const text = extractStaticText(expr, sourceFile);
            if (text && isProbablyUserFacingString(text)) {
              const { line, col } = getLineCol(sourceFile, expr);
              entries.push({ file: sourceFile.fileName, line, col, text, kind: `attr:${attrName}` });
            }
          }
        }
      }
    }

    // 4) Object-literal copy fields (SEO, content, data exports)
    if (ts.isPropertyAssignment(node)) {
      const name = node.name;
      let key = null;
      if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
        key = name.text ?? name.getText(sourceFile);
      }
      if (key && ALLOWED_PROP_KEYS.has(String(key))) {
        const init = node.initializer;
        if (ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init)) {
          const text = extractStaticText(init, sourceFile);
          if (text && isProbablyUserFacingString(text)) {
            const { line, col } = getLineCol(sourceFile, init);
            entries.push({ file: sourceFile.fileName, line, col, text, kind: `prop:${key}` });
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  // Deduplicate exact same entry (can happen with traversals in some TS shapes)
  const seen = new Set();
  return entries.filter((e) => {
    const k = `${e.file}:${e.line}:${e.col}:${e.kind}:${e.text}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

async function* walkDir(dirAbs) {
  const dirents = await fs.readdir(dirAbs, { withFileTypes: true });
  for (const dirent of dirents) {
    const full = path.join(dirAbs, dirent.name);
    if (dirent.isDirectory()) {
      if (dirent.name === "node_modules" || dirent.name === ".next" || dirent.name === ".git") continue;
      yield* walkDir(full);
    } else if (dirent.isFile()) {
      yield full;
    }
  }
}

function toRel(p) {
  return path.relative(ROOT, p);
}

async function collectTargetFiles() {
  /** @type {string[]} */
  const files = [];
  for (const d of TARGET_DIRS) {
    const abs = path.join(ROOT, d);
    try {
      const stat = await fs.stat(abs);
      if (!stat.isDirectory()) continue;
    } catch {
      continue;
    }

    for await (const f of walkDir(abs)) {
      const ext = path.extname(f);
      if (CODE_EXTS.has(ext) || TEXT_EXTS.has(ext)) files.push(f);
    }
  }
  return files.sort();
}

function parseTsFile(filePath, code) {
  const ext = path.extname(filePath);
  const scriptKind = ext === ".tsx" ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
  return ts.createSourceFile(filePath, code, ts.ScriptTarget.Latest, true, scriptKind);
}

/**
 * @param {string} fileAbs
 * @returns {Promise<CopyEntry[]>}
 */
async function extractFromFile(fileAbs) {
  const rel = toRel(fileAbs);

  if (EXCLUDED_REL_FILES.has(rel)) return [];

  const ext = path.extname(fileAbs);
  const raw = await fs.readFile(fileAbs, "utf8");

  if (CODE_EXTS.has(ext)) {
    const sf = parseTsFile(rel, raw);
    return extractFromSourceFile(sf).map((e) => ({ ...e, file: rel }));
  }

  if (ext === ".svg") {
    // Extract <text> nodes and aria-label/title elements.
    /** @type {CopyEntry[]} */
    const out = [];
    const textMatches = [...raw.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/gi)];
    for (const m of textMatches) {
      const text = normalizeRenderedText(m[1].replace(/<[^>]+>/g, " "));
      if (text && isProbablyUserFacingString(text)) {
        out.push({ file: rel, line: 1, col: 1, text, kind: "svg-text" });
      }
    }
    const titleMatches = [...raw.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
    for (const m of titleMatches) {
      const text = normalizeRenderedText(m[1]);
      if (text && isProbablyUserFacingString(text)) {
        out.push({ file: rel, line: 1, col: 1, text, kind: "svg-title" });
      }
    }
    const ariaMatches = [...raw.matchAll(/aria-label\s*=\s*"([^"]+)"/gi)];
    for (const m of ariaMatches) {
      const text = normalizeRenderedText(m[1]);
      if (text && isProbablyUserFacingString(text)) {
        out.push({ file: rel, line: 1, col: 1, text, kind: "svg-aria-label" });
      }
    }
    return out;
  }

  // For other non-code files in targets, include their full content only if they appear to be actual site-facing copy.
  // (Avoid dumping large non-site docs; in our case, targets are limited to app/components/content/lib/public.)
  if (TEXT_EXTS.has(ext)) {
    const text = raw.trim();
    if (!text) return [];
    // For xml/txt/md content in these dirs, include as a single entry.
    return [{ file: rel, line: 1, col: 1, text, kind: `file:${ext.slice(1)}` }];
  }

  return [];
}

function formatMarkdown(entries) {
  const escapeControlChars = (s) =>
    s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, (ch) => {
      const code = ch.codePointAt(0) ?? 0;
      return `\\u${code.toString(16).padStart(4, "0")}`;
    });

  /** @type {Map<string, CopyEntry[]>} */
  const byFile = new Map();
  for (const e of entries) {
    if (!byFile.has(e.file)) byFile.set(e.file, []);
    byFile.get(e.file).push(e);
  }

  const files = [...byFile.keys()].sort();

  let md = "# Website Copy Inventory\n\n";
  md += "Generated by `scripts/extract-copy.mjs`.\n\n";
  md += "This attempts to capture user-facing copy from JSX text nodes, selected JSX attributes (alt/title/aria-label/placeholder), and common content fields in data objects.\n\n";

  for (const f of files) {
    const list = byFile.get(f) ?? [];
    if (!list.length) continue;

    md += `## ${f}\n\n`;
    for (const e of list) {
      const loc = `${e.line}:${e.col}`;
      const safe = escapeControlChars(e.text.replace(/\r\n/g, "\n"));
      md += `- (${loc}) [${e.kind}] ${safe}\n`;
    }
    md += "\n";
  }

  return md;
}

async function main() {
  const files = await collectTargetFiles();
  /** @type {CopyEntry[]} */
  const all = [];

  for (const f of files) {
    // Skip generated/irrelevant routes in public if any; keep conservative.
    const entries = await extractFromFile(f);
    all.push(...entries);
  }

  // Global de-dupe: same file/line/col/text
  const seen = new Set();
  const deduped = all.filter((e) => {
    const k = `${e.file}:${e.line}:${e.col}:${e.text}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  const md = formatMarkdown(deduped);
  const outPath = path.join(ROOT, "WEBSITE-COPY.md");
  await fs.writeFile(outPath, md, "utf8");

  // eslint-disable-next-line no-console
  console.log(`Wrote ${deduped.length} entries to ${path.relative(ROOT, outPath)}`);
}

await main();
