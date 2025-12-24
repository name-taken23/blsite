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

/**
 * Canonical host for production.
 * All non-canonical hosts should redirect to this URL.
 */
const CANONICAL_HOST = "https://www.blacklake.systems";

function normalizeSiteUrl(url: string): string {
  const trimmed = url.trim();
  return trimmed.endsWith("/") ? trimmed.slice(0, -1) : trimmed;
}

function resolveSiteUrl(): string {
  // Always use the canonical host for production.
  // Non-canonical hosts will be redirected via next.config.ts.
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return normalizeSiteUrl(explicit);

  // On Vercel preview deployments, use the preview URL for testing.
  // Production deployments should set NEXT_PUBLIC_SITE_URL to the canonical host.
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv === "preview" || vercelEnv === "development") {
    const vercelUrl = process.env.VERCEL_URL;
    if (vercelUrl) return normalizeSiteUrl(`https://${vercelUrl}`);
  }

  // Default to canonical host for production.
  return normalizeSiteUrl(CANONICAL_HOST);
}

export const siteConfig = {
  name: "BlackLake",
  title: "BlackLake — Clarity. Speed. Control.",
  description:
    "Founder-led production modernisation. A paid, structured Blueprint defines constraints, risks, and a scoped plan before changes land in production.",
  url: resolveSiteUrl(),
  ogImage: "/og-image.png", // 1200x630px
  twitterHandle: "", // Optional
  author: "James Reed",
  keywords: [
    "cloud architecture",
    "applied AI",
    "production systems",
    "modernisation",
    "system design",
    "technical strategy",
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
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    
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
      locale: "en_GB",
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
      "BlackLake is run by James Reed. We help engineering teams gain control over production systems through explicit constraints and sequenced delivery.",
    path: "/about",
  }),

  services: generateMetadata({
    title: "Services",
    description:
      "BlackLake Blueprint: A fixed-price technical assessment that delivers a system map, risk register, and sequenced modernisation plan.",
    path: "/services",
  }),

  work: generateMetadata({
    title: "Case Studies",
    description:
      "Real production engineering case studies. Confidential constraints, measured outcomes, and technical interventions across AI and Cloud platforms.",
    path: "/work",
  }),

  contact: generateMetadata({
    title: "Contact",
    description: "Start a BlackLake Blueprint. Share your production context and primary constraint to determine fit.",
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
    founder: {
      "@type": "Person",
      name: siteConfig.author,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Inquiries",
      email: "james@blacklake.systems",
    },
  };
}

/**
 * Generate Service schema
 */
export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Technical Consulting",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Modernisation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "The Blueprint",
            description: "A structured assessment producing a scoped plan and risk register.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Build",
            description: "Implementation of the Blueprint with rollout controls.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Calibrate",
            description: "Ongoing optimisation and ownership handover.",
          },
        },
      ],
    },
  };
}

/**
 * Generate Article schema for Case Studies
 */
export function getArticleSchema(article: {
  title: string;
  description: string;
  image?: string;
  publishedAt: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image ? `${siteConfig.url}${article.image}` : `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${article.path}`,
    },
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

