/**
 * SEO & Metadata Utilities
 * 
 * Centralized SEO configuration for consistent metadata across all pages.
 * Ensures proper Open Graph, Twitter Cards, and schema markup.
 */

import { Metadata } from "next";

// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  name: "BlackLake",
  title: "BlackLake — Clarity. Speed. Control.",
  description:
    "Founder-led production modernisation. A paid, structured Blueprint defines constraints, risks, and a scoped plan before changes land in production.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://useblacklake.com",
  ogImage: "/og-image.svg", // 1200x630px
  twitterHandle: "", // Optional
  author: "BlackLake",
  keywords: [
    "cloud architecture",
    "applied AI",
    "machine learning",
    "LLM evaluation",
    "RAG",
    "retrieval",
    "AI agents",
    "full-stack development",
    "GCP architecture",
    "AWS architecture",
    "React development",
    "Next.js development",
    "enterprise software",
    "bespoke engineering",
  ],
};

// ============================================
// METADATA GENERATOR
// ============================================

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}

/**
 * Generate consistent metadata for any page
 * @param options - Page-specific metadata options
 * @returns Next.js Metadata object
 * 
 * @example
 * export const metadata = generateMetadata({
 *   title: "Cloud Architecture Services",
 *   description: "Enterprise cloud infrastructure that scales",
 *   path: "/services",
 * });
 */
export function generateMetadata(options: GenerateMetadataOptions = {}): Metadata {
  const {
    title,
    description = siteConfig.description,
    path = "",
    ogImage = siteConfig.ogImage,
    noIndex = false,
    keywords = siteConfig.keywords,
  } = options;

  const fullTitle = title 
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  const canonical = `${siteConfig.url}${path}`;
  const ogImageUrl = ogImage.startsWith("http") 
    ? ogImage 
    : `${siteConfig.url}${ogImage}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    
    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },

    // Open Graph
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: siteConfig.twitterHandle,
    },

    // Alternate languages (add if needed)
    // alternates: {
    //   canonical,
    //   languages: {
    //     'en-US': canonical,
    //   },
    // },
  };
}

// ============================================
// PAGE-SPECIFIC METADATA
// ============================================

export const pageMetadata = {
  home: generateMetadata({
    // Uses default title and description from siteConfig
  }),

  about: generateMetadata({
    title: "About",
    description:
      "How BlackLake approaches production change: explicit constraints, controlled rollout, and clear ownership.",
    path: "/about",
  }),

  services: generateMetadata({
    title: "Services",
    description:
      "Modernisation for production systems. Start with the BlackLake Blueprint: a paid, structured assessment that defines constraints, risks, and a scoped plan.",
    path: "/services",
  }),

  work: generateMetadata({
    title: "Case Studies",
    description:
      "Selected work written with context, constraints, interventions, measured outcomes, and why it matters across applied AI, cloud/data platforms, and reliability/performance work.",
    path: "/work",
  }),

  contact: generateMetadata({
    title: "Contact",
    description: "Start with a Blueprint. A paid, structured first step for organisations running production systems.",
    path: "/contact",
  }),
};

// ============================================
// JSON-LD SCHEMA MARKUP
// ============================================

/**
 * Generate Organization schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Inquiries",
      email: "hello@useblacklake.com", // Update with real email
    },
    sameAs: [
      // Add social media profiles when available
      // "https://twitter.com/blacklake",
      // "https://linkedin.com/company/blacklake",
      // "https://github.com/blacklake",
    ],
  };
}

/**
 * Generate Service schema
 */
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    url: service.url,
  };
}

/**
 * Generate Breadcrumb schema
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

// ============================================
// VALIDATION HELPERS
// ============================================

/**
 * Validate heading hierarchy in development
 * Call this in page components during development to ensure proper structure
 */
export function validateHeadingHierarchy(headings: string[]): void {
  if (process.env.NODE_ENV !== "development") return;

  const levels = headings.map(h => parseInt(h.replace("h", "")));
  
  // Check for single H1
  const h1Count = levels.filter(l => l === 1).length;
  if (h1Count === 0) {
    console.warn("⚠️ SEO Warning: No H1 found on page");
  } else if (h1Count > 1) {
    console.warn("⚠️ SEO Warning: Multiple H1s found on page");
  }

  // Check for skipped levels
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] - levels[i - 1] > 1) {
      console.warn(
        `⚠️ SEO Warning: Heading level skipped from H${levels[i - 1]} to H${levels[i]}`
      );
    }
  }
}

/**
 * Check if text meets minimum description length
 */
export function isDescriptionValid(text: string): boolean {
  const MIN_LENGTH = 50;
  const MAX_LENGTH = 160;
  return text.length >= MIN_LENGTH && text.length <= MAX_LENGTH;
}
