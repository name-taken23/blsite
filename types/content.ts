/**
 * Content Type Definitions
 * 
 * These schemas define the structure of all content across the site.
 * By centralizing content types, we ensure consistency and make content updates safer.
 */

// ============================================
// HERO CONTENT
// ============================================

export interface HeroContent {
  badge?: {
    text: string;
    variant?: "success" | "info" | "warning";
  };
  headline: string | string[]; // Array for multi-line with different styles
  subheadline: string;
  trustIndicators?: Array<{
    icon?: string;
    text: string;
  }>;
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
}

// ============================================
// SERVICE CONTENT
// ============================================

export interface ServiceItem {
  icon: string; // Icon component name
  title: string;
  problem?: string; // Client pain point
  description: string;
  outcome?: string; // Business result
  highlight: string; // Key metric or achievement
  features: string[]; // Technology/approach tags
  caseStudy: string; // Link to related work
}

export interface ServicesContent {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    trustIndicators?: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  services: ServiceItem[];
  cta: {
    eyebrow: string;
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta?: string;
  };
}

// ============================================
// CASE STUDY CONTENT
// ============================================

export interface CaseStudyContent {
  slug: string;
  title: string;
  description: string;
  client?: string; // Can be "Anonymous" or real name
  industry: string;
  tags: string[];
  thumbnail?: string;
  featured?: boolean;
  problem: string;
  solution: string;
  results: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
  technologies: string[];
  timeline: string;
  teamSize: string;
}

// ============================================
// SECTION CONTENT (REUSABLE)
// ============================================

export interface SectionHeader {
  eyebrow?: string; // Small label above headline
  headline: string;
  subheadline?: string;
  cta?: {
    text: string;
    href: string;
  };
}

export interface FeatureCard {
  icon?: string;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}

// ============================================
// PAGE METADATA
// ============================================

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// ============================================
// NAVIGATION
// ============================================

export interface NavItem {
  label: string;
  href: string;
  badge?: string; // e.g., "New"
  children?: NavItem[]; // For dropdowns
}

// ============================================
// CTA CONTENT
// ============================================

export interface CtaSection {
  eyebrow?: string;
  headline: string;
  description?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  valueProposition?: string; // Small text below CTAs
}
