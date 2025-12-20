import PageShell from "@/components/layout/PageShell";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/seo";
import Link from "next/link";
import Script from "next/script";
import MagneticButton from "@/components/ui/MagneticButton";
import BlueprintGrid from "@/components/graphics/BlueprintGrid";
import Section from "@/components/ui/Section";
import { services } from "./data";

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

  const blueprintDeliverables = [
    "Current-state system map (boundaries + data contracts)",
    "Baseline metrics (latency, cost, failure modes)",
    "Risk register (technical + operational)",
    "Guardrails and rollback strategy",
    "Option paths (stabilise vs modernise vs rebuild)",
    "Recommended plan with sequencing + milestones",
    "Ownership + operating model notes",
    "\"What to measure next\" checklist",
  ];

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

      <Section variant="tinted">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">Pillars</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">What I deliver</h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-gray-200 bg-white p-6">
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

              <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Outcome</p>
                <p className="mt-2 text-sm font-semibold text-gray-900">{service.outcome}</p>
                <p className="mt-2 text-sm text-gray-600">{service.why}</p>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <Link
                  href={service.caseStudy}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:border-gray-300 transition-colors"
                >
                  View related case study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="plain">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">Process</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">How work runs</h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            A simple loop: define the constraints, ship controlled change, and keep the system measurable.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Blueprint",
              body: "A paid assessment that produces scope, risks, a delivery sequence, and a plan you can operate.",
            },
            {
              title: "Build",
              body: "Implementation with baselines, guardrails, and rollout controls. No surprises in production.",
            },
            {
              title: "Calibrate",
              body: "Measure behaviour, tighten reliability and cost, and hand over runbooks and ownership.",
            },
          ].map((step) => (
            <div key={step.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{step.title}</div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{step.body}</p>

              {step.title === "Blueprint" ? (
                <div className="mt-5">
                  <div className="h-16 w-full opacity-70">
                    <BlueprintGrid className="h-full w-full" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Blueprint deliverables</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    {blueprintDeliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-gray-700">Typically delivered in 1–2 weeks.</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section variant="framed">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Start with a Blueprint</h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
              Share context, constraints, and what must change. I’ll reply with whether it’s a fit and what the Blueprint would cover.
            </p>
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
        </div>
      </Section>
    </PageShell>
  );
}
