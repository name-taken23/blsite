import { NextResponse } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://useblacklake.com";

export function GET() {
  const normalizedSiteUrl = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
  const sitemapUrl = new URL("sitemap.xml", normalizedSiteUrl).toString();
  const host = new URL(normalizedSiteUrl).hostname;
  const content = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\nHost: ${host}`;
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
