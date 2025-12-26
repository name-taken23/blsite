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
import { Clock, FileText, Shield, Wrench, Gauge } from "lucide-react";
import { services } from "./data";
import { servicesFaq, getFaqPageSchema } from "@/content/servicesFaq";

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
            subtitle="For teams running real systems who need to move faster without breaking what works. The engagement runs as a sequence: Blueprint → Build → Calibrate."
            size="lg"
            as="h1"
          />

          <p className="mt-6 text-base text-ink-2 leading-relaxed">
            Most of the work sits across cloud architecture, data pipelines, and platform reliability—tightening observability, improving cost optimisation, and adding automation where it reduces toil. Where it fits, that includes AI integration: connecting models to production systems with the same constraints and rollback controls as everything else.
          </p>
        </div>
      </SectionShell>

      {/* PACKAGES */}
      <SectionShell
        variant="tinted"
        backplate="grid"
        backplateOpacity={0.03}
      >
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Packages"
            title="Clear scope, published pricing"
            subtitle="Three engagement types, each with defined outputs and ownership transfer. Pick the shape that fits your constraint."
            size="lg"
            as="h2"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Blueprint */}
          <Surface variant="raised" className="flex flex-col p-6 md:p-8">
            <div className="flex items-center gap-3">
              <IconBadge icon={FileText} label="Blueprint" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-ink-3">Blueprint</div>
                <div className="text-sm font-medium text-ink-2">Fixed-scope discovery</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-2xl font-semibold text-ink-1">£7,500–£15,000</div>
              <div className="mt-1 text-sm text-ink-3">1–2 weeks</div>
            </div>

            <p className="mt-4 text-sm text-ink-2">
              <span className="font-medium text-ink-1">What you get:</span> A system map, documented baselines, and a sequenced plan with guardrails—before any build work starts.
            </p>

            <List
              className="mt-4 flex-1 text-sm"
              variant="check"
              items={[
                "System map",
                "Baseline metrics",
                "Risk register + guardrails",
                "Sequenced plan",
                "Handover notes",
              ]}
            />

            <p className="mt-4 text-xs text-ink-3 italic">
              Not a fit for greenfield MVPs with no production signals yet.
            </p>

            <div className="mt-6">
              <Button href="/contact?intent=blueprint" variant="primary" className="w-full justify-center">
                Start Blueprint
              </Button>
            </div>
          </Surface>

          {/* Build */}
          <Surface variant="raised" className="flex flex-col p-6 md:p-8 ring-2 ring-accent-electric/20">
            <div className="flex items-center gap-3">
              <IconBadge icon={Wrench} label="Build" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-ink-3">Build</div>
                <div className="text-sm font-medium text-ink-2">Implementation sprint</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-2xl font-semibold text-ink-1">£18,000–£35,000</div>
              <div className="mt-1 text-sm text-ink-3">per sprint · 2–4 weeks</div>
            </div>

            <p className="mt-4 text-sm text-ink-2">
              <span className="font-medium text-ink-1">What you get:</span> Production changes with baselines, rollback paths, and runbooks—shipped in controlled slices.
            </p>

            <List
              className="mt-4 flex-1 text-sm"
              variant="check"
              items={[
                "Baselines first",
                "Controlled rollouts",
                "Rollback paths",
                "Runbooks",
                "Measurable change",
              ]}
            />

            <p className="mt-4 text-xs text-ink-3 italic">
              Not a fit if constraints and scope aren&apos;t clear—start with Blueprint.
            </p>

            <div className="mt-6">
              <MagneticButton href="/contact?intent=build" className="w-full justify-center">
                Start Build
              </MagneticButton>
            </div>
          </Surface>

          {/* Calibrate */}
          <Surface variant="raised" className="flex flex-col p-6 md:p-8">
            <div className="flex items-center gap-3">
              <IconBadge icon={Gauge} label="Calibrate" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-ink-3">Calibrate</div>
                <div className="text-sm font-medium text-ink-2">Stewardship retainer</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-2xl font-semibold text-ink-1">£4,000–£12,000</div>
              <div className="mt-1 text-sm text-ink-3">per month</div>
            </div>

            <p className="mt-4 text-sm text-ink-2">
              <span className="font-medium text-ink-1">What you get:</span> SLOs, cost budgets, regression controls, and an operating rhythm your team owns.
            </p>

            <List
              className="mt-4 flex-1 text-sm"
              variant="check"
              items={[
                "SLOs + alerts",
                "Performance + cost budgets",
                "Regression controls",
                "Operating rhythm",
                "Exit to internal ownership",
              ]}
            />

            <p className="mt-4 text-xs text-ink-3 italic">
              Not a fit for systems still mid-build or without stable baselines.
            </p>

            <div className="mt-6">
              <Button href="/contact?intent=calibrate" variant="primary" className="w-full justify-center">
                Start Calibrate
              </Button>
            </div>
          </Surface>
        </div>

        <p className="mt-8 text-center text-xs text-ink-3">
          Final scope set after a short intake call. Price varies by environments, compliance, access constraints, and on-call needs.
        </p>
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

      {/* CAPABILITIES */}
      <SectionShell
        variant="plain"
        backplate="radial"
        backplateOpacity={0.03}
        separatorText="operational baselines"
        separatorAlign="start"
      >
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Capabilities"
            title="Focused delivery across cloud, AI, and full-stack."
            subtitle="Each capability is built around measurable baselines, guardrails, and explicit trade-offs that keep production operable."
            size="lg"
            as="h2"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Surface
              key={service.id}
              id={service.id}
              variant="raised"
              className="flex h-full flex-col p-6 md:p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-3">
                <IconBadge icon={service.icon} label="Capability" />
                <div className="text-xs font-semibold uppercase tracking-wide text-ink-3">
                  Capability
                </div>
              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink-1">
                {service.title}
              </h3>

              <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-3">
                Problem
              </div>
              <p className="mt-2 text-sm text-ink-2 leading-relaxed">{service.problem}</p>

              <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-3">
                What changes
              </div>
              <p className="mt-2 text-sm text-ink-2 leading-relaxed">{service.description}</p>

              <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-3">
                Key features
              </div>
              <List items={service.features} variant="dot" className="mt-2 text-sm" />

              <div className="mt-6">
                <Button href={service.caseStudy} variant="tertiary" size="sm" className="px-0">
                  View related case study
                </Button>
              </div>
            </Surface>
          ))}
        </div>
      </SectionShell>

      {/* FAQ */}
      <SectionShell
        variant="tinted"
        backplate="grid"
        backplateOpacity={0.03}
        separatorText="common questions"
        separatorAlign="center"
      >
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we get asked"
            subtitle="Straight answers on scope, access, pricing, and how the work runs."
            size="lg"
            as="h2"
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {servicesFaq.map((faq, index) => (
            <Surface key={index} variant="inset" className="p-6">
              <h3 className="text-base font-semibold text-ink-1">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                {faq.answer}
              </p>
            </Surface>
          ))}
        </div>
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqPageSchema(servicesFaq)),
        }}
      />
    </PageShell>
  );
}
