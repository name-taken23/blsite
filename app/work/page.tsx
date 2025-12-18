import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = pageMetadata.work;

export default function WorkPage() {
  return <WorkPageClient />;
}
