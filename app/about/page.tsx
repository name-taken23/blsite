import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return <AboutPageClient />;
}
