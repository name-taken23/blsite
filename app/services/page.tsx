import PageShell from "@/components/layout/PageShell";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/seo";
import Script from "next/script";
import MagneticButton from "@/components/ui/MagneticButton";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import List from "@/components/ui/List";
import FeatureIcon from "@/components/ui/FeatureIcon";
import AppIcon from "@/components/ui/AppIcon";
import { getServiceSchema } from "@/lib/seo";
import BlueprintGrid from "@/components/graphics/BlueprintGrid";
import Section from "@/components/ui/Section";
import Surface from "@/components/ui/Surface";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBadge from "@/components/ui/IconBadge";
import Stepper from "@/components/ui/Stepper";
import Link from "next/link";
import { services } from "./data";
import { Clock, FileText, Shield, Map as MapIcon, ArrowRight } from "lucide-react";

export const metadata: Metadata = pageMetadata.services;

export default function ServicesPage() {
  const canonical = new URL("/services", siteConfig.url).toString();
  const logoUrl = new URL("/logo.png", siteConfig.url).toString();

  const servicesDescription =
    "BlackLake takes ownership of modernisation across systems, intelligence, and product. Work starts with the BlackLake Blueprint: a paid, structured assessment that produces a scoped plan, risks, and a sequence of changes you can operate.";

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "BlackLake Blueprint",
    description: servicesDescription,
    url: canonical,
    provider: {
      "@type": "Organization",
      name: "BlackLake",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Place", name: "Remote" },
    ],
    serviceType: ["Blueprint", "Build", "Calibrate"],
  };

  const blueprintGroups = {
    map: [
      "Current-state system map (boundaries + data contracts)",
      "Baseline metrics (latency, cost, failure modes)",
      "Option paths (stabilise vs modernise vs rebuild)",
    ],
    risk: [
      "Risk register (technical + operational)",
      "Guardrails + rollback strategy",
      "What to measure next (checklist)",
    ],
    plan: [
      "Recommended plan (sequencing + milestones)",
      "Ownership + operating model notes",
      "Decision points + next-step handoff",
    ],
  };

  return (
    <PageShell>
      <Script
        id="services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* HEADER */}
      <Section variant="plain" containerClassName="pt-24 pb-0 md:pt-32">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Services"
            title="Production modernisation, delivered with control."
            subtitle="BlackLake takes ownership of modernisation across systems, intelligence, and product. Everything starts with The Blueprint."
            size="lg"
            as="h1"
          />
        </div>
      </Section>

      {/* THE BLUEPRINT - UNIFIED SECTION */}
      <Section variant="plain">
        <Surface variant="raised" className="relative overflow-hidden p-8 md:p-12">
          {/* Subtle Grid Background */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.12]">
            <BlueprintGrid className="h-full w-full" />
          </div>

          <div className="relative">
            {/* Blueprint Header */}
            <div className="max-w-3xl">
              <Chip label="Step 1" tone="tinted" size="sm" className="mb-4" />
              <SectionHeading
                title="The Blueprint"
                subtitle={
                  <>
                    A fixed-price technical assessment that delivers a system map, risk register, and sequenced modernisation plan.
                    See it in action: <Link href="/case-studies/v2x-network-system" className="underline hover:text-accent-electric">V2X Data System</Link>.
                  </>
                }
                size="lg"
                as="h2"
              />

              <div className="mt-6 flex flex-wrap gap-2">
                <IconBadge icon={Clock} label="Fixed price, 1-2 weeks" />
                <IconBadge icon={Shield} label="Fully indemnified" />
              </div>
            </div>

            {/* Deliverables Grid */}
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <Surface variant="inset" className="p-6">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
                  <AppIcon icon={MapIcon} size="sm" className="text-accent-electric" />
                  Map & Baseline
                </div>
                <List items={blueprintGroups.map} variant="dot" className="mt-4 text-sm" />
              </Surface>

              <Surface variant="inset" className="p-6">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
                  <AppIcon icon={Shield} size="sm" className="text-accent-electric" />
                  Risk & Guardrails
                </div>
                <List items={blueprintGroups.risk} variant="dot" className="mt-4 text-sm" />
              </Surface>

              <Surface variant="inset" className="p-6">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
                  <AppIcon icon={FileText} size="sm" className="text-accent-electric" />
                  Plan & Model
                </div>
                <List items={blueprintGroups.plan} variant="dot" className="mt-4 text-sm" />
              </Surface>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center md:justify-start">
              <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
            </div>
          </div>
        </Surface>
      </Section>

      {/* HOW WORK RUNS (STEPPER) */}
      <Section variant="tinted">
        <div className="max-w-3xl">
          <SectionHeading
            title="How work runs"
            subtitle="Blueprint → Build → Calibrate. Explicit constraints, controlled change, and clear ownership."
            size="lg"
            as="h2"
          />
        </div>

        <Surface variant="raised" className="mt-10 p-8 md:p-12">
            <Stepper
              steps={[
                {
                  title: "Blueprint",
                  description: "Define constraints, map the system, and produce a scoped plan with risks and guardrails.",
                },
                {
                  title: "Build",
                  description: "Implement in controlled slices with baselines, rollout controls, and clear ownership.",
                },
                {
                  title: "Calibrate",
                  description: "Measure behaviour, tighten cost and reliability, and hand over runbooks.",
                },
              ]}
              className="max-w-3xl"
            />
        </Surface>
      </Section>

      {/* SERVICES GRID */}
      <Section variant="plain">
        <div className="max-w-3xl">
          <SectionHeading 
            eyebrow="Capabilities" 
            title="Systems. Intelligence. Product." 
            subtitle="I intervene where the stack meets the business logic."
            size="lg" 
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Surface key={service.title} variant="raised" className="p-8 flex flex-col h-full">
              <FeatureIcon icon={service.icon} tone="neutral" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-sm font-medium text-gray-900">{service.problem}</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-grow">{service.description}</p>

              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Focus Areas</div>
                <div className="flex flex-wrap gap-2">
                   {service.features.slice(0,4).map(f => (
                     <Chip key={f} label={f} size="sm" tone="tinted" />
                   ))}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Button href={service.caseStudy} variant="tertiary" size="sm" className="px-0 group">
                  Related case study
                  <AppIcon icon={ArrowRight} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Surface>
          ))}
        </div>
      </Section>
      
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServiceSchema()),
        }}
      />
    </PageShell>
  );
}
