import type { Metadata } from "next";
import Script from "next/script";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://useblacklake.com";
const metadataBase = new URL(siteUrl);

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BlackLake",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BlackLake",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${siteUrl}/contact`,
    name: "BlackLake Contact Placeholder",
    description: "Section description lorem ipsum placeholder.",
  },
];

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "BlackLake — Headline Placeholder",
    template: "%s | BlackLake",
  },
  description: "Section description lorem ipsum placeholder.",
  alternates: {
    canonical: metadataBase.toString(),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "BlackLake — Headline Placeholder",
    description: "Section description lorem ipsum placeholder.",
    url: metadataBase.toString(),
    siteName: "BlackLake",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlackLake — Headline Placeholder",
    description: "Section description lorem ipsum placeholder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          dmSans.variable,
          "min-h-screen bg-bg-white text-gray-800 antialiased"
        )}
      >
        <ThemeProvider>
          {children}
          <Script id="blacklake-schema" strategy="afterInteractive">
            {JSON.stringify(structuredData)}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}