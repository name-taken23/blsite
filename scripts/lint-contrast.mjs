#!/usr/bin/env node

/**
 * lint-contrast.mjs
 * 
 * Regression guard for contrast-related classnames.
 * Fails CI when forbidden patterns appear in production UI.
 * 
 * Usage:
 *   node scripts/lint-contrast.mjs
 *   npm run lint:contrast
 * 
 * Whitelisting:
 *   Add `// contrast-ok: <reason>` on the same line or preceding line
 *   to suppress a specific violation. Use sparingly for truly decorative elements.
 * 
 * Example whitelist:
 *   <path className="stroke-gray-200" /> // contrast-ok: decorative grid background
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

const SCAN_DIRS = ["app", "components"];
const EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"];

/**
 * Forbidden patterns and their explanations.
 * Each pattern is a regex that matches the problematic classname usage.
 */
const FORBIDDEN_PATTERNS = [
  {
    pattern: /\btext-gray-400\b/,
    message: "text-gray-400 is too faint for light mode. Use text-ink-3 or text-ink-4 tokens.",
    id: "text-gray-400",
  },
  {
    pattern: /\bstroke-gray-200\b/,
    message: "stroke-gray-200 is too faint for meaningful visuals. Use visualStrokeColor tokens or add // contrast-ok: decorative",
    id: "stroke-gray-200",
  },
  {
    pattern: /\bbg-white\/60\b/,
    message: "bg-white/60 reduces contrast on reading surfaces. Use bg-surface-tint or bg-surface-2.",
    id: "bg-white/60",
  },
  {
    pattern: /\bbg-gray-\d+\/50\b/,
    message: "bg-gray-*/50 reduces contrast on reading surfaces. Use solid surface tokens.",
    id: "bg-gray-*/50",
  },
  {
    pattern: /\bbg-gray-\d+\/60\b/,
    message: "bg-gray-*/60 reduces contrast on reading surfaces. Use solid surface tokens.",
    id: "bg-gray-*/60",
  },
  {
    pattern: /\bborder-gray-200\/50\b/,
    message: "border-gray-200/50 is too faint for structural borders. Use border-line-2.",
    id: "border-gray-200/50",
  },
  {
    pattern: /\bborder-gray-100\b/,
    message: "border-gray-100 is too faint. Use border-line-2 for decorative or border-line-1 for structural.",
    id: "border-gray-100",
  },
];

/**
 * Whitelist marker - lines containing this are exempt from checks
 */
const WHITELIST_MARKER = "contrast-ok:";

/**
 * Context patterns that indicate decorative usage (reduces severity)
 */
const DECORATIVE_CONTEXT = [
  /aria-hidden\s*=\s*["']?true/i,
  /decorative\s*[:=]/i,
  /\bopacity\s*[:=]\s*visualOpacity\.grid\b/,
];

/**
 * Recursively get all files in a directory with matching extensions
 */
function getFiles(dir, files = []) {
  try {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip node_modules and hidden directories
        if (!entry.startsWith(".") && entry !== "node_modules") {
          getFiles(fullPath, files);
        }
      } else if (EXTENSIONS.some((ext) => entry.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch {
    // Directory doesn't exist, skip
  }
  return files;
}

/**
 * Check if a line or its context indicates decorative usage
 */
function isDecorativeContext(lines, lineIndex) {
  const contextRange = 3; // Check 3 lines before and after
  const start = Math.max(0, lineIndex - contextRange);
  const end = Math.min(lines.length - 1, lineIndex + contextRange);
  
  for (let i = start; i <= end; i++) {
    const line = lines[i];
    if (DECORATIVE_CONTEXT.some((pattern) => pattern.test(line))) {
      return true;
    }
  }
  return false;
}

/**
 * Check a single file for violations
 */
function checkFile(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const violations = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const prevLine = i > 0 ? lines[i - 1] : "";

    // Skip whitelisted lines
    if (line.includes(WHITELIST_MARKER) || prevLine.includes(WHITELIST_MARKER)) {
      continue;
    }

    for (const { pattern, message, id } of FORBIDDEN_PATTERNS) {
      if (pattern.test(line)) {
        const isDecorative = isDecorativeContext(lines, i);
        
        violations.push({
          file: filePath,
          line: i + 1,
          column: line.search(pattern) + 1,
          message,
          id,
          isDecorative,
          snippet: line.trim().slice(0, 100),
        });
      }
    }
  }

  return violations;
}

/**
 * Main execution
 */
function main() {
  console.log("🔍 Scanning for contrast violations...\n");

  const allFiles = [];
  for (const dir of SCAN_DIRS) {
    getFiles(dir, allFiles);
  }

  console.log(`   Scanning ${allFiles.length} files in ${SCAN_DIRS.join(", ")}/\n`);

  const allViolations = [];
  for (const file of allFiles) {
    const violations = checkFile(file);
    allViolations.push(...violations);
  }

  // Separate hard violations from decorative warnings
  const hardViolations = allViolations.filter((v) => !v.isDecorative);
  const decorativeWarnings = allViolations.filter((v) => v.isDecorative);

  // Report decorative warnings (non-blocking)
  if (decorativeWarnings.length > 0) {
    console.log("⚠️  Decorative context warnings (non-blocking):\n");
    for (const v of decorativeWarnings) {
      const relPath = relative(process.cwd(), v.file);
      console.log(`   ${relPath}:${v.line}`);
      console.log(`   └─ ${v.id}: ${v.message}`);
      console.log(`      Snippet: ${v.snippet}\n`);
    }
  }

  // Report hard violations (blocking)
  if (hardViolations.length > 0) {
    console.log("❌ Contrast violations found:\n");
    for (const v of hardViolations) {
      const relPath = relative(process.cwd(), v.file);
      console.log(`   ${relPath}:${v.line}:${v.column}`);
      console.log(`   └─ ${v.id}: ${v.message}`);
      console.log(`      Snippet: ${v.snippet}\n`);
    }

    console.log("─".repeat(60));
    console.log(`\n❌ Found ${hardViolations.length} contrast violation(s).\n`);
    console.log("To fix:");
    console.log("  1. Replace forbidden patterns with semantic tokens (ink-*, line-*, surface-*)");
    console.log("  2. If truly decorative, add: // contrast-ok: <reason>");
    console.log("\nSee BLACKLAKE-DESIGN-SYSTEM.md for token reference.\n");
    
    process.exit(1);
  }

  console.log("✅ No contrast violations found.\n");
  
  if (decorativeWarnings.length > 0) {
    console.log(`   (${decorativeWarnings.length} decorative warnings - review if intentional)\n`);
  }

  process.exit(0);
}

main();
