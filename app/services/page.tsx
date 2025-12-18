import PageShell from "@/components/layout/PageShell";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import { services } from "./data";

export const metadata: Metadata = pageMetadata.services;

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700">
              Services
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Production modernisation,
              <span className="block text-gray-700">delivered with control.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
              BlackLake takes ownership of modernisation across systems, intelligence, and product.
              Work starts with the BlackLake Blueprint: a paid, structured assessment that produces a scoped plan, risks, and a sequence of changes you can operate.
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
        </div>
      </section>

      <div className="border-t border-gray-100" />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
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
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
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
        </div>
      </section>
    </PageShell>
  );
}
