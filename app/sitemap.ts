const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://useblacklake.com";
const pages = ["", "about", "services", "work", "contact"];

export default function sitemap() {
  const lastModified = new Date().toISOString();
  return pages.map((path) => ({
    url: `${siteUrl}/${path}`.replace(/\/\/+/, "/"),
    lastModified,
  }));
}
