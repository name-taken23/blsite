import type { Metadata } from "next";
import { Suspense } from "react";
import { pageMetadata } from "@/lib/seo";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = pageMetadata.contact;

function ContactFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-ink-3">Loading...</div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactFallback />}>
      <ContactPageClient />
    </Suspense>
  );
}
