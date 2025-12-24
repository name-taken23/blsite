import PageShell from "@/components/layout/PageShell";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/seo";
import Script from "next/script";
import MagneticButton from "@/components/ui/MagneticButton";
import Button from "@/components/ui/Button";
import List from "@/components/ui/List";
import { getServiceSchema } from "@/lib/seo";
import Section from "@/components/ui/Section";
import Surface from "@/components/ui/Surface";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBadge from "@/components/ui/IconBadge";
import { Clock, FileText, Shield } from "lucide-react";

export const metadata: Metadata = pageMetadata.services;

export default function ServicesPage() {
  const canonical = new URL("/services", siteConfig.url).toString();
  const logoUrl = new URL("/logo.png", siteConfig.url).toString();

  const servicesDescription =
    "BlackLake delivers production modernisation via a clear sequence: Blueprint (fixed-scope discovery), Build (delivery), and Calibrate (reliability and optimisation). Work is constraints-first, measured in production signals, and handed over with ownership.";

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

  const blueprintDeliverables = [
    "Current-state system map (boundaries + contracts)",
    "Baseline metrics (latency, cost, failure modes)",
    "Risk register with guardrails + rollback plan",
    "Sequenced delivery plan (milestones + decision points)",
    "Handover notes: ownership, operating model, next steps",
  ];

  const buildDeliverables = [
    "Delivery in controlled slices with measurable baselines",
    "Interfaces hardened: boundaries, contracts, and integration",
    "Rollout controls: canaries, feature flags, rollback paths",
    "Workstreams across systems, intelligence, and operator tooling",
    "Handover that includes runbooks and ownership boundaries",
  ];

  const calibrateDeliverables = [
    "Reliability work: SLOs, alert quality, and failure-mode containment",
    "Performance + cost budgets with ongoing measurement",
    "Operational tightening: runbooks, incident patterns, and drills",
    "Regression controls: checks that prevent silent drift",
    "Exit criteria: internal ownership with clear operating rhythm",
  ];

  return (
    <PageShell>
      <Script
        id="services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* HEADER */}
      <Section variant="plain" spacing="pageHeader" containerClassName="pb-0">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Services"
            title="A structured way to modernise production."
            subtitle="For teams with real systems in production who need clarity, speed, and control. The work runs as a sequence: Blueprint → Build → Calibrate."
            size="lg"
            as="h1"
          />
        </div>
      </Section>

      {/* BLUEPRINT */}
      <Section variant="tinted">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Blueprint"
            title="Fixed-scope discovery"
            subtitle="A paid, time-boxed assessment that makes constraints explicit and produces a plan you can run."
            size="lg"
            as="h2"
          />

          <div className="mt-6 flex flex-wrap gap-2">
            <IconBadge icon={Clock} label="Fixed scope, 1–2 weeks" />
            <IconBadge icon={FileText} label="Written outputs" />
            <IconBadge icon={Shield} label="Guardrails + rollback" />
          </div>
        </div>

        <Surface variant="inset" className="mt-10 p-6 md:p-8">
          <div className="text-sm font-semibold text-gray-900">Deliverables</div>
          <List items={blueprintDeliverables} variant="dot" className="mt-4 text-sm" />
        </Surface>
      </Section>

      {/* BUILD */}
      <Section variant="plain">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Build"
            title="Delivery with controlled change"
            subtitle="Implementation work that ships safely: baselines first, then changes in slices with clear rollback paths."
            size="lg"
            as="h2"
          />
        </div>

        <Surface variant="inset" className="mt-10 p-6 md:p-8">
          <div className="text-sm font-semibold text-gray-900">What it includes</div>
          <List items={buildDeliverables} variant="dot" className="mt-4 text-sm" />
        </Surface>
      </Section>

      {/* CALIBRATE */}
      <Section variant="tinted">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Calibrate"
            title="Reliability, optimisation, ownership"
            subtitle="Keep production stable while tightening performance and cost. The goal is an operating rhythm you own."
            size="lg"
            as="h2"
          />
        </div>

        <Surface variant="inset" className="mt-10 p-6 md:p-8">
          <div className="text-sm font-semibold text-gray-900">What it includes</div>
          <List items={calibrateDeliverables} variant="dot" className="mt-4 text-sm" />
        </Surface>
      </Section>

      {/* ENGAGEMENT / HOW TO START */}
      <Section variant="framed" spacing="tight">
        <Surface variant="raised" className="p-8 md:p-12">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="How to start"
              title="Begin with constraints, not commitments"
              subtitle="Share context and what must change. If it’s a fit, the next step is a Blueprint: a short engagement that produces a scoped plan and guardrails."
              size="lg"
              as="h2"
            />

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
              <Button href="/work" variant="secondary">View Work</Button>
            </div>
          </div>
        </Surface>
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
