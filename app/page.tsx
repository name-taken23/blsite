import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import { services } from "./services/data";
import { getAllCaseStudies, getProofMetrics } from "@/lib/case-studies";
import OutcomeDelta from "@/components/graphics/OutcomeDelta";
import Section from "@/components/ui/Section";
import Surface from "@/components/ui/Surface";
import OutcomeTile from "@/components/ui/OutcomeTile";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Home() {
  const caseStudies = getAllCaseStudies().slice(0, 3);
  const proof = getProofMetrics(4);

  return (
    <PageShell>
      <Hero />

      <Section variant="framed" cornerGraphic={<OutcomeDelta />}>
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Proof"
            title="Outcomes, stated conservatively"
            subtitle="Quantified signals from case studies, described without client identifiers."
            size="lg"
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {proof.map((item) => (
            <OutcomeTile
              key={`${item.caseStudySlug}-${item.metric}`}
              href={`/case-studies/${item.caseStudySlug}`}
              value={item.value}
              metric={item.metric}
              context={item.context}
              icon={<OutcomeDelta />}
            />
          ))}
        </div>
      </Section>

      <Section variant="tinted">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Pillars"
            title="Systems. Intelligence. Product."
            subtitle="Work is scoped around what actually blocks production change: brittle systems, unclear behaviour, and tools that don’t match operators."
            size="lg"
          />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <Surface key={service.title} variant="raised" className="p-6">
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
            </Surface>
          ))}
        </div>
      </Section>

      <Section variant="plain">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Examples with context"
            subtitle="Each case study follows the same structure: context, constraint, intervention, measured outcome, and why it matters."
            size="lg"
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <Surface
              key={caseStudy.slug}
              as={Link}
              href={`/case-studies/${caseStudy.slug}`}
              variant="raised"
              className="p-6 transition-colors"
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
            </Surface>
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
      </Section>

      <Section variant="tinted">
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
            <Surface key={step.title} variant="raised" className="p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{step.title}</div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{step.body}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section variant="framed">
        <Surface variant="inset" className="p-8 md:p-10">
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
        </Surface>
      </Section>
    </PageShell>
  );
}