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
import BlueprintGrid from "@/components/graphics/BlueprintGrid";
import Section from "@/components/ui/Section";
import Surface from "@/components/ui/Surface";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBadge from "@/components/ui/IconBadge";
import { services } from "./data";
import { Clock, FileText, Shield, Map as MapIcon, Wrench, Gauge } from "lucide-react";

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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "How work runs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Blueprint",
            description:
              "A paid assessment that produces scope, risks, a delivery sequence, and a plan you can operate.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Build",
            description:
              "Implementation with baselines, guardrails, and rollout controls. No surprises in production.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Calibrate",
            description:
              "Measure behaviour, tighten reliability and cost, and hand over runbooks and ownership.",
          },
        },
      ],
    },
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

      <Section variant="plain">
        <div className="max-w-3xl">
          <Chip label="Services" tone="neutral" />
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Production modernisation,
            <span className="block text-gray-700">delivered with control.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            BlackLake takes ownership of modernisation across systems, intelligence, and product. Work starts with the BlackLake Blueprint: a paid, structured assessment that produces a scoped plan, risks, and a sequence of changes you can operate.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
            <Button href="/work" variant="secondary" size="lg">
              View selected work
            </Button>
          </div>
        </div>
      </Section>

      <Section variant="plain" containerClassName="pt-0">
        <Surface variant="raised" className="relative overflow-hidden p-6 md:p-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.18]">
            <BlueprintGrid className="h-full w-full" />
          </div>

          <div className="relative">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="max-w-xl">
                <SectionHeading
                  eyebrow="Blueprint"
                  title="A scoped plan you can execute."
                  subtitle="A paid, structured assessment that produces scope, risks, success measures, and a delivery sequence your team can operate."
                  size="lg"
                />

                <div className="mt-8 flex flex-wrap items-center gap-2">
                  <IconBadge icon={Clock} label="Typically 1-2 weeks" />
                  <IconBadge label="System map" />
                  <IconBadge label="Risk register" />
                  <IconBadge label="Guardrails" />
                  <IconBadge label="Sequenced plan" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    <AppIcon icon={MapIcon} size="sm" />
                    Map
                  </div>
                  <List items={blueprintGroups.map} variant="dot" className="mt-3" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    <AppIcon icon={Shield} size="sm" />
                    Risk
                  </div>
                  <List items={blueprintGroups.risk} variant="dot" className="mt-3" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    <AppIcon icon={FileText} size="sm" />
                    Plan
                  </div>
                  <List items={blueprintGroups.plan} variant="dot" className="mt-3" />
                </div>
              </div>
            </div>
          </div>
        </Surface>
      </Section>

      <Section variant="tinted">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Deliverables"
            title="Blueprint outputs, grouped for speed."
            subtitle="Each Blueprint ends with artifacts you can share internally: a system map, a risk view with guardrails, and a delivery plan with a clear operating model."
            size="lg"
          />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <Surface variant="inset" className="p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">System map</div>
            <List items={blueprintGroups.map} variant="dot" className="mt-4" />
          </Surface>

          <Surface variant="inset" className="p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Risk & guardrails</div>
            <List items={blueprintGroups.risk} variant="dot" className="mt-4" />
          </Surface>

          <Surface variant="inset" className="p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Delivery plan & operating model
            </div>
            <List items={blueprintGroups.plan} variant="dot" className="mt-4" />
          </Surface>
        </div>
      </Section>

      <Section variant="tinted">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Pillars" title="What I deliver" size="lg" />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <Surface key={service.title} variant="raised" className="p-6">
              <FeatureIcon icon={service.icon} tone="neutral" />
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-sm font-semibold text-gray-700">{service.problem}</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{service.description}</p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Focus</p>
                <List items={service.features} variant="dot" className="mt-3" />
              </div>

              <Surface variant="inset" className="mt-6 rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Outcome</p>
                <p className="mt-2 text-sm font-semibold text-gray-900">{service.outcome}</p>
                <p className="mt-2 text-sm text-gray-600">{service.why}</p>
              </Surface>

              <div className="mt-6">
                <Button href={service.caseStudy} variant="secondary" size="md">
                  View related case study
                </Button>
              </div>
            </Surface>
          ))}
        </div>
      </Section>

      <Section variant="plain">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Process"
            title="How work runs"
            subtitle="A simple loop: define the constraints, ship controlled change, and keep the system measurable."
            size="lg"
          />
        </div>

        <Surface variant="raised" className="mt-10 p-6 md:p-8">
          <div className="relative">
            <div aria-hidden="true" className="hidden md:block absolute left-10 right-10 top-8 h-px bg-gray-200" />

            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative">
                <FeatureIcon icon={MapIcon} tone="accent" size="lg" className="relative z-10" />
                <div className="mt-4 text-sm font-semibold text-gray-900">Blueprint</div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Define constraints, map the system, and produce a scoped plan with risks and guardrails.
                </p>
              </div>

              <div className="relative">
                <FeatureIcon icon={Wrench} tone="accent" size="lg" className="relative z-10" />
                <div className="mt-4 text-sm font-semibold text-gray-900">Build</div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Implement in controlled slices with baselines, rollout controls, and clear ownership.
                </p>
              </div>

              <div className="relative">
                <FeatureIcon icon={Gauge} tone="accent" size="lg" className="relative z-10" />
                <div className="mt-4 text-sm font-semibold text-gray-900">Calibrate</div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Measure behaviour, tighten cost and reliability, and hand over runbooks and guardrails.
                </p>
              </div>
            </div>
          </div>
        </Surface>
      </Section>

      <Section variant="framed">
        <Surface variant="inset" className="p-8 md:p-10">
          <div className="max-w-3xl">
            <SectionHeading
              title="Start with a Blueprint"
              subtitle="Share context, constraints, and what must change. I’ll reply with whether it’s a fit and what the Blueprint would cover."
              size="lg"
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
              <Button href="/work" variant="secondary" size="lg">
                View selected work
              </Button>
            </div>
          </div>
        </Surface>
      </Section>
    </PageShell>
  );
}
