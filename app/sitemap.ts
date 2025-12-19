import { getAllCaseStudies } from "@/lib/case-studies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://useblacklake.com";
const pages = ["", "about", "services", "work", "contact"];

export default function sitemap() {
  const lastModified = new Date().toISOString();
  const baseUrl = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;

  const staticEntries = pages.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified,
  }));

  const caseStudyEntries = getAllCaseStudies().map((caseStudy) => ({
    url: new URL(`case-studies/${caseStudy.slug}`, baseUrl).toString(),
    lastModified,
  }));

  return [...staticEntries, ...caseStudyEntries];
}
