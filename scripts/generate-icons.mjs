import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const INPUT_LOGO = path.join(ROOT, "public", "logo.png");

const OUT_APP_ICON = path.join(ROOT, "app", "icon.png");
const OUT_APP_APPLE = path.join(ROOT, "app", "apple-icon.png");
const OUT_PUBLIC_FAVICON = path.join(ROOT, "public", "favicon.ico");

function encodeIcoPng(images) {
  // ICO with PNG payloads
  // https://en.wikipedia.org/wiki/ICO_(file_format)
  const count = images.length;
  const headerSize = 6;
  const entrySize = 16;

  const entries = [];
  let offset = headerSize + count * entrySize;

  for (const { size, png } of images) {
    const widthByte = size === 256 ? 0 : size;
    const heightByte = size === 256 ? 0 : size;
    const bytesInRes = png.length;

    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(widthByte, 0);
    entry.writeUInt8(heightByte, 1);
    entry.writeUInt8(0, 2); // colorCount
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(0, 4); // planes
    entry.writeUInt16LE(0, 6); // bitCount
    entry.writeUInt32LE(bytesInRes, 8);
    entry.writeUInt32LE(offset, 12);

    entries.push(entry);
    offset += bytesInRes;
  }

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4);

  return Buffer.concat([header, ...entries, ...images.map((i) => i.png)]);
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function main() {
  await Promise.all([ensureDir(OUT_APP_ICON), ensureDir(OUT_APP_APPLE), ensureDir(OUT_PUBLIC_FAVICON)]);

  const base = sharp(INPUT_LOGO);

  // Required App Router icons
  await base
    .clone()
    .resize(512, 512, { fit: "cover" })
    .png()
    .toFile(OUT_APP_ICON);

  await base
    .clone()
    .resize(180, 180, { fit: "cover" })
    .png()
    .toFile(OUT_APP_APPLE);

  // Favicon (.ico) with embedded PNG sizes
  const faviconSizes = [16, 32, 48];
  const faviconImages = [];
  for (const size of faviconSizes) {
    const png = await base
      .clone()
      .resize(size, size, { fit: "cover" })
      .png()
      .toBuffer();
    faviconImages.push({ size, png });
  }

  const ico = encodeIcoPng(faviconImages);
  await fs.writeFile(OUT_PUBLIC_FAVICON, ico);

  const statIco = await fs.stat(OUT_PUBLIC_FAVICON);
  console.log(`Wrote ${path.relative(ROOT, OUT_APP_ICON)}`);
  console.log(`Wrote ${path.relative(ROOT, OUT_APP_APPLE)}`);
  console.log(`Wrote ${path.relative(ROOT, OUT_PUBLIC_FAVICON)} (${statIco.size} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
