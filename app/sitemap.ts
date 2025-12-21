import { getAllCaseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/seo";

const pages = ["", "about", "services", "work", "contact"];

export default function sitemap() {
  const lastModified = new Date().toISOString();
  const baseUrl = siteConfig.url.endsWith("/") ? siteConfig.url : `${siteConfig.url}/`;

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
