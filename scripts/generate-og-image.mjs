import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const logoPath = path.join(ROOT, "public", "logo.png");

const outPng = path.join(ROOT, "public", "og-image.png");
const outSvg = path.join(ROOT, "public", "og-image.svg");

const WIDTH = 1200;
const HEIGHT = 630;

const COLORS = {
  background: "#ffffff",
  text: "#111827",
  muted: "#6b7280",
  accent: "#007CFF", // matches --accent: 0,124,255
  border: "#e5e7eb",
};

function buildSvg({ logoBase64, logoSize }) {
  const logoX = Math.round((WIDTH - logoSize) / 2);
  const logoY = 190;
  const titleY = logoY + logoSize + 58;
  const subY = titleY + 34;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${COLORS.accent}" stop-opacity="0.12" />
      <stop offset="0.5" stop-color="${COLORS.accent}" stop-opacity="0.28" />
      <stop offset="1" stop-color="${COLORS.accent}" stop-opacity="0.12" />
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="${COLORS.background}" />
  <rect x="0" y="0" width="${WIDTH}" height="6" fill="url(#accent)" />
  <line x1="0" y1="6" x2="${WIDTH}" y2="6" stroke="${COLORS.border}" stroke-width="1" />

  <image x="${logoX}" y="${logoY}" width="${logoSize}" height="${logoSize}" href="${logoBase64}" />

  <text x="${WIDTH / 2}" y="${titleY}" text-anchor="middle" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="56" font-weight="600" fill="${COLORS.text}">
    BlackLake
  </text>
  <text x="${WIDTH / 2}" y="${subY}" text-anchor="middle" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="26" font-weight="500" fill="${COLORS.muted}">
    Clarity. Speed. Control.
  </text>
</svg>`;
}

function buildOverlaySvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${COLORS.accent}" stop-opacity="0.12" />
      <stop offset="0.5" stop-color="${COLORS.accent}" stop-opacity="0.28" />
      <stop offset="1" stop-color="${COLORS.accent}" stop-opacity="0.12" />
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="${WIDTH}" height="6" fill="url(#accent)" />
  <line x1="0" y1="6" x2="${WIDTH}" y2="6" stroke="${COLORS.border}" stroke-width="1" />
</svg>`;
}

function buildTextSvg({ logoSize }) {
  const logoY = 190;
  const titleY = logoY + logoSize + 58;
  const subY = titleY + 34;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <text x="${WIDTH / 2}" y="${titleY}" text-anchor="middle" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="56" font-weight="600" fill="${COLORS.text}">
    BlackLake
  </text>
  <text x="${WIDTH / 2}" y="${subY}" text-anchor="middle" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="26" font-weight="500" fill="${COLORS.muted}">
    Clarity. Speed. Control.
  </text>
</svg>`;
}

async function main() {
  await fs.mkdir(path.dirname(outPng), { recursive: true });

  const logoBuffer = await fs.readFile(logoPath);
  const logoSize = 280;
  const logoX = Math.round((WIDTH - logoSize) / 2);
  const logoY = 190;

  const overlaySvg = buildOverlaySvg();
  const textSvg = buildTextSvg({ logoSize });

  const resizedLogo = await sharp(logoBuffer)
    .resize(logoSize, logoSize, { fit: "cover" })
    .png()
    .toBuffer();

  // Generate PNG via compositing (social crawlers are more consistent with PNG than SVG)
  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: COLORS.background,
    },
  })
    .composite([
      { input: Buffer.from(overlaySvg), top: 0, left: 0 },
      { input: resizedLogo, top: logoY, left: logoX },
      { input: Buffer.from(textSvg), top: 0, left: 0 },
    ])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outPng);

  // Write fallback SVG (kept, but not primary). Use a normal URL so the SVG stays small.
  const svg = buildSvg({ logoBase64: "/logo.png", logoSize });
  await fs.writeFile(outSvg, svg);

  const pngStat = await fs.stat(outPng);
  const svgStat = await fs.stat(outSvg);
  console.log(`Wrote public/og-image.png (${pngStat.size} bytes)`);
  console.log(`Wrote public/og-image.svg (${svgStat.size} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
