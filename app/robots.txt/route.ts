import { NextResponse } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://useblacklake.com";

export function GET() {
  const sitemapUrl = `${siteUrl}/sitemap.xml`;
  const content = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\nHost: ${siteUrl}`;
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
