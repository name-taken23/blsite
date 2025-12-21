import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { pageMetadata, getOrganizationSchema, siteConfig } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

// Use centralized SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...pageMetadata.home,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          dmSans.variable,
          "min-h-screen bg-bg-white text-gray-800 antialiased"
        )}
      >
        <ThemeProvider>
          {children}
          
          {/* Structured Data - Organization Schema */}
          <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getOrganizationSchema()),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}