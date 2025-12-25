import PageShell from "@/components/layout/PageShell";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/seo";
import Script from "next/script";
import MagneticButton from "@/components/ui/MagneticButton";
import Button from "@/components/ui/Button";
import List from "@/components/ui/List";
import { getServiceSchema } from "@/lib/seo";
import SectionShell from "@/components/ui/SectionShell";
import Surface from "@/components/ui/Surface";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBadge from "@/components/ui/IconBadge";
import ConstraintSet from "@/components/ui/ConstraintSet";
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
      <SectionShell
        variant="plain"
        spacing="pageHeader"
        containerClassName="pb-0"
        backplate="radial"
        backplateOpacity={0.035}
      >
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Services"
            title="A structured way to modernise production."
            subtitle="For teams with real systems in production who need clarity, speed, and control. The work runs as a sequence: Blueprint → Build → Calibrate."
            size="lg"
            as="h1"
          />
        </div>
      </SectionShell>

      {/* BLUEPRINT */}
      <SectionShell
        variant="tinted"
        backplate="grid"
        backplateOpacity={0.04}
        separatorText="constraint-first delivery"
        separatorAlign="start"
      >
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

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Typical constraints</div>
            <ConstraintSet
              className="mt-3"
              ariaLabel="Typical constraints for Blueprint"
              meter="bar"
              items={[
                { kind: "risk", label: "Risk", intensity: 85 },
                { kind: "reliability", label: "Reliability", intensity: 70 },
                { kind: "compliance", label: "Compliance", intensity: 55 },
              ]}
            />
          </div>
        </div>

        <Surface variant="inset" className="mt-10 p-6 md:p-8">
          <div className="text-sm font-semibold text-ink-1">Deliverables</div>
          <List items={blueprintDeliverables} variant="dot" className="mt-4 text-sm" />
        </Surface>
      </SectionShell>

      {/* BUILD */}
      <SectionShell
        variant="plain"
        backplate="radial"
        backplateOpacity={0.04}
        separatorText="measured change"
        separatorAlign="center"
      >
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Build"
            title="Delivery with controlled change"
            subtitle="Implementation work that ships safely: baselines first, then changes in slices with clear rollback paths."
            size="lg"
            as="h2"
          />

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-ink-3">Typical constraints</div>
            <ConstraintSet
              className="mt-3"
              ariaLabel="Typical constraints for Build"
              meter="bar"
              items={[
                { kind: "reliability", label: "Reliability", intensity: 85 },
                { kind: "security", label: "Security", intensity: 70 },
                { kind: "latency", label: "Latency", intensity: 65 },
              ]}
            />
          </div>
        </div>

        <Surface variant="inset" className="mt-10 p-6 md:p-8">
          <div className="text-sm font-semibold text-ink-1">What it includes</div>
          <List items={buildDeliverables} variant="dot" className="mt-4 text-sm" />
        </Surface>
      </SectionShell>

      {/* CALIBRATE */}
      <SectionShell
        variant="tinted"
        backplate="grid"
        backplateOpacity={0.035}
        separatorText="operational clarity"
        separatorAlign="end"
      >
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Calibrate"
            title="Reliability, optimisation, ownership"
            subtitle="Keep production stable while tightening performance and cost. The goal is an operating rhythm you own."
            size="lg"
            as="h2"
          />

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-ink-3">Typical constraints</div>
            <ConstraintSet
              className="mt-3"
              ariaLabel="Typical constraints for Calibrate"
              meter="bar"
              items={[
                { kind: "cost", label: "Cost", intensity: 80 },
                { kind: "reliability", label: "Reliability", intensity: 75 },
                { kind: "latency", label: "Latency", intensity: 60 },
              ]}
            />
          </div>
        </div>

        <Surface variant="inset" className="mt-10 p-6 md:p-8">
          <div className="text-sm font-semibold text-ink-1">What it includes</div>
          <List items={calibrateDeliverables} variant="dot" className="mt-4 text-sm" />
        </Surface>
      </SectionShell>

      {/* ENGAGEMENT / HOW TO START */}
      <SectionShell variant="framed" spacing="tight" backplate="noise" backplateOpacity={0.03}>
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
      </SectionShell>
      
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
