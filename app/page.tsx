import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import { services } from "./services/data";
import { getAllCaseStudies, getProofMetrics } from "@/lib/case-studies";

export default function Home() {
  const caseStudies = getAllCaseStudies().slice(0, 3);
  const proof = getProofMetrics(4);

  return (
    <PageShell>
      <Hero />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">Proof</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Outcomes, stated conservatively
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Quantified signals from case studies, described without client identifiers.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {proof.map((item) => (
              <Link
                key={`${item.caseStudySlug}-${item.metric}`}
                href={`/work#${item.caseStudySlug}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-300 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-semibold text-gray-900">{item.value}</div>
                <div className="mt-2 text-sm font-semibold text-gray-900">{item.metric}</div>
                <div className="mt-2 text-sm text-gray-600 leading-relaxed">{item.context}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100" />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">Pillars</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Systems. Intelligence. Product.
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Work is scoped around what actually blocks production change: brittle systems, unclear behaviour, and tools that don’t match operators.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
                  <service.icon className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{service.description}</p>
                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-gray-900 hover:text-accent-electric transition-colors"
                >
                  See how it works
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">Selected work</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Examples with context</h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Each case study follows the same structure: context, constraint, intervention, measured outcome, and why it matters.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-300 transition-colors"
              >
                <p className="text-xs font-semibold text-gray-600">
                  {caseStudy.industry}
                  <span className="mx-2 text-gray-300">•</span>
                  {caseStudy.timeline}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{caseStudy.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{caseStudy.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {caseStudy.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-900 hover:border-gray-300 transition-colors"
            >
              View selected work
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">Process</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Blueprint → Build → Calibrate</h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Modernisation work stays safe when constraints and rollback are explicit.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Blueprint",
                body: "A paid assessment that produces scope, risks, and a delivery sequence you can run.",
              },
              {
                title: "Build",
                body: "Ship changes with baselines, guardrails, and controlled rollout.",
              },
              {
                title: "Calibrate",
                body: "Measure behaviour, tighten the system, and hand over runbooks and ownership.",
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
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                Start with a Blueprint
              </h2>
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