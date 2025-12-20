import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import FeatureIcon from "@/components/ui/FeatureIcon";
import Stepper from "@/components/ui/Stepper";
import { services } from "./services/data";
import { getAllCaseStudies, getProofMetrics } from "@/lib/case-studies";
import OutcomeDelta from "@/components/graphics/OutcomeDelta";
import Section from "@/components/ui/Section";
import Surface from "@/components/ui/Surface";
import OutcomeTile from "@/components/ui/OutcomeTile";
import SectionHeading from "@/components/ui/SectionHeading";
import OutcomeStrip from "@/components/ui/OutcomeStrip";

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
              <FeatureIcon icon={service.icon} tone="neutral" />
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{service.description}</p>
              <Button
                href="/services"
                variant="tertiary"
                size="sm"
                className="mt-5 px-0"
              >
                See how it works
              </Button>
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

        <OutcomeStrip
          className="mt-10 max-w-4xl"
          items={getProofMetrics(3).map((item) => ({
            value: item.value,
            metric: item.metric,
            href: `/case-studies/${item.caseStudySlug}`,
          }))}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
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
                  <Chip key={tag} label={tag} size="sm" />
                ))}
              </div>
            </Surface>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/work" variant="secondary" size="lg">
            View selected work
          </Button>
        </div>
      </Section>

      <Section variant="tinted">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Process"
            title="Blueprint → Build → Calibrate"
            subtitle="Modernisation work stays safe when constraints and rollback are explicit."
            size="lg"
          />
        </div>

        <Surface variant="raised" className="mt-10 p-6 md:p-8">
          <Stepper
            steps={[
              {
                title: "Blueprint",
                description: "A paid assessment that produces scope, risks, and a delivery sequence you can run.",
              },
              {
                title: "Build",
                description: "Ship changes with baselines, guardrails, and controlled rollout.",
              },
              {
                title: "Calibrate",
                description: "Measure behaviour, tighten the system, and hand over runbooks and ownership.",
              },
            ]}
            className="max-w-xl"
          />
        </Surface>
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