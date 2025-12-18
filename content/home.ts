/**
 * Homepage Content
 * 
 * All copy for the homepage, structured and type-safe.
 * Edit this file to update homepage content without touching components.
 */

import type { HeroContent, SectionHeader, FeatureCard, CtaSection } from "@/types/content";

// ============================================
// HERO SECTION
// ============================================

export const heroContent: HeroContent = {
  badge: {
    text: "For teams operating production systems",
  },
  headline: [
    "Production Systems.",
    "Founder-led delivery.",
    "Clear ownership.",
  ],
  subheadline: "For technical leaders responsible for systems under load. BlackLake helps design, build, and evolve cloud, data, and automation systems with explicit constraints, measurable trade-offs, and operational realism.",
  trustIndicators: [
    {
      text: "Production engineering experience",
    },
    {
      text: "GCP, AWS, React, data/ML",
    },
    {
      text: "Evidence in case studies",
    },
  ],
  cta: {
    primary: {
      text: "Start with a Blueprint",
      href: "/contact",
    },
    secondary: {
      text: "View selected work",
      href: "/work",
    },
  },
};

// ============================================
// WHY BLACKLAKE SECTION
// ============================================

export const whyBlacklakeHeader: SectionHeader = {
  eyebrow: "Why BlackLake",
  headline: "Modernisation for production systems",
  subheadline: "Founder-led delivery focused on clear ownership, explicit constraints, and systems you can operate.",
};

export const studioAdvantages: FeatureCard[] = [
  {
    icon: "Users",
    title: "Direct access to the founder",
    description: "Work directly with the engineer doing the work. Decisions stay close to the code and the constraints.",
  },
  {
    icon: "Zap",
    title: "Work grounded in constraints",
    description: "Outcomes vary by baseline and workload; case studies show context, trade-offs, and what changed.",
  },
  {
    icon: "Shield",
    title: "Quality and control",
    description: "Security-minded delivery with testing, rollouts, and observability. Built so teams can maintain and extend it.",
  },
];

export const metricsData = [
  {
    value: "Perf",
    label: "Latency + cost",
    description: "Measured, baseline-led work",
  },
  {
    value: "Data",
    label: "Pipelines",
    description: "Batch and streaming",
  },
  {
    value: "Ops",
    label: "Reliability",
    description: "Incidents and observability",
  },
  {
    value: "Eng",
    label: "Delivery",
    description: "Clear ownership and handover",
  },
];

// ============================================
// SERVICES PREVIEW
// ============================================

export const servicesHeader: SectionHeader = {
  eyebrow: "What changes",
  headline: "Problems worth fixing",
  subheadline: "Three pillars, grounded in production constraints and case studies.",
  cta: {
    text: "View All Services",
    href: "/services",
  },
};

export const featuredServices: FeatureCard[] = [
  {
    icon: "Cloud",
    title: "Cloud Architecture & Infrastructure",
    description: "Baseline, diagnose, and improve latency, cost, and reliability without making operations harder.",
    link: {
      text: "Learn more",
      href: "/services#cloud",
    },
  },
  {
    icon: "Brain",
    title: "Applied AI & Machine Learning",
    description: "Applied AI systems with evaluation, monitoring, and explicit failure modes.",
    link: {
      text: "Learn more",
      href: "/services#ai",
    },
  },
  {
    icon: "Layers",
    title: "Full-Stack Development",
    description: "Maintainable delivery so teams can iterate without constant regressions.",
    link: {
      text: "Learn more",
      href: "/services#fullstack",
    },
  },
];

// ============================================
// CASE STUDIES PREVIEW
// ============================================

export const caseStudiesHeader: SectionHeader = {
  eyebrow: "Selected Work",
  headline: "Work with context",
  subheadline: "Selected examples across cloud, data, applied AI, and reliability/performance—written with constraints and trade-offs.",
  cta: {
    text: "View selected work",
    href: "/work",
  },
};

// ============================================
// FINAL CTA
// ============================================

export const finalCta: CtaSection = {
  eyebrow: "Next step",
  headline: "Start with a Blueprint",
  description: "Share what you run today, the constraints you’re under, and what needs to change. You’ll get a small, testable path forward.",
  primaryCta: {
    text: "Start with a Blueprint",
    href: "/contact",
  },
  secondaryCta: {
    text: "View selected work",
    href: "/work",
  },
  valueProposition: "BlackLake — founder-led delivery, minimal handoffs.",
};
