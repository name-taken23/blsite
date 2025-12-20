import PageShell from "@/components/layout/PageShell";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/seo";
import Link from "next/link";
import Script from "next/script";
import MagneticButton from "@/components/ui/MagneticButton";
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
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700">
            Services
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Production modernisation,
            <span className="block text-gray-700">delivered with control.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            BlackLake takes ownership of modernisation across systems, intelligence, and product. Work starts with the BlackLake Blueprint: a paid, structured assessment that produces a scoped plan, risks, and a sequence of changes you can operate.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-900 hover:border-gray-300 transition-colors"
            >
              View selected work
            </Link>
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
                  <IconBadge icon={<Clock className="h-full w-full" />} label="Typically 1-2 weeks" />
                  <IconBadge label="System map" />
                  <IconBadge label="Risk register" />
                  <IconBadge label="Guardrails" />
                  <IconBadge label="Sequenced plan" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    <MapIcon className="h-4 w-4" />
                    Map
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    {blueprintGroups.map.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    <Shield className="h-4 w-4" />
                    Risk
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    {blueprintGroups.risk.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    <FileText className="h-4 w-4" />
                    Plan
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    {blueprintGroups.plan.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {blueprintGroups.map.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Surface>

          <Surface variant="inset" className="p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Risk & guardrails</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {blueprintGroups.risk.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Surface>

          <Surface variant="inset" className="p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Delivery plan & operating model
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {blueprintGroups.plan.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
                <service.icon className="w-5 h-5 text-gray-700" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-sm font-semibold text-gray-700">{service.problem}</p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{service.description}</p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Focus</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Surface variant="inset" className="mt-6 rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Outcome</p>
                <p className="mt-2 text-sm font-semibold text-gray-900">{service.outcome}</p>
                <p className="mt-2 text-sm text-gray-600">{service.why}</p>
              </Surface>

              <div className="mt-6 flex flex-col gap-2">
                <Link
                  href={service.caseStudy}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:border-gray-300 transition-colors"
                >
                  View related case study
                </Link>
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
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white">
                  <MapIcon className="h-5 w-5 text-accent-electric" />
                </div>
                <div className="mt-4 text-sm font-semibold text-gray-900">Blueprint</div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Define constraints, map the system, and produce a scoped plan with risks and guardrails.
                </p>
              </div>

              <div className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white">
                  <Wrench className="h-5 w-5 text-accent-electric" />
                </div>
                <div className="mt-4 text-sm font-semibold text-gray-900">Build</div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Implement in controlled slices with baselines, rollout controls, and clear ownership.
                </p>
              </div>

              <div className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white">
                  <Gauge className="h-5 w-5 text-accent-electric" />
                </div>
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
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-900 hover:border-gray-300 transition-colors"
              >
                View selected work
              </Link>
            </div>
          </div>
        </Surface>
      </Section>
    </PageShell>
  );
}
