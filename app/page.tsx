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
import { ArrowRight, FileText, Settings2 } from "lucide-react";
import AppIcon from "@/components/ui/AppIcon";
import BlueprintGrid from "@/components/graphics/BlueprintGrid";

export default function Home() {
  const caseStudies = getAllCaseStudies().slice(0, 3);
  const proof = getProofMetrics(4);

  return (
    <PageShell>
      <Hero />

      {/* PROOF SECTION */}
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
              surfaceVariant="raised" 
            />
          ))}
        </div>
      </Section>

      {/* PILLARS SECTION */}
      <Section variant="tinted">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Pillars"
            title="Systems. Intelligence. Product."
            subtitle="Work is scoped around what actually blocks production change: brittle systems, unclear behaviour, and tools that don’t match operators."
            size="lg"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Surface key={service.title} variant="raised" className="p-8 flex flex-col h-full">
              <FeatureIcon icon={service.icon} tone="neutral" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900 tracking-tight">{service.title}</h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed flex-grow">{service.description}</p>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <Button
                  href="/services"
                  variant="tertiary"
                  size="sm"
                  className="px-0 group"
                >
                  See how it works
                  <AppIcon icon={ArrowRight} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Surface>
          ))}
        </div>
      </Section>

      {/* PATTERN BREAK: BLUEPRINT PANEL */}
      <Section variant="plain">
        <Surface variant="glow" className="relative overflow-hidden p-8 md:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]">
             <BlueprintGrid className="h-full w-full" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <SectionHeading
              eyebrow="The Engagement Model"
              title="Start with a Blueprint"
              subtitle="Before committing to build, we run a short, paid assessment. You get a system map, a risk register, and a sequenced delivery plan. I get to know the constraints before writing code."
              size="lg"
            />
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <AppIcon icon={FileText} className="text-accent-electric" />
                <span>Scoped Plan</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <AppIcon icon={Settings2} className="text-accent-electric" />
                <span>Risk & Guardrails</span>
              </div>
            </div>

            <div className="mt-10">
              <MagneticButton href="/services">
                Explore the Blueprint
              </MagneticButton>
            </div>
          </div>
        </Surface>
      </Section>

      {/* SELECTED WORK (TEASER) */}
      <Section variant="tinted">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Examples with context"
            subtitle="Real projects described with constraints, tradeoffs, and outcomes."
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
              className="group p-6 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {caseStudy.industry}
                </p>
                <Chip label={caseStudy.timeline} size="sm" tone="neutral" />
              </div>
              
              <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-accent-electric transition-colors">
                {caseStudy.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                {caseStudy.description}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {caseStudy.tags.slice(0, 2).map((tag) => (
                  <Chip key={tag} label={tag} size="sm" tone="tinted" />
                ))}
              </div>
            </Surface>
          ))}
        </div>

        <div className="mt-10 text-center md:text-left">
          <Button href="/work" variant="secondary" size="lg">
            View all case studies
          </Button>
        </div>
      </Section>

      {/* PROCESS */}
      <Section variant="plain">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Process"
            title="Blueprint → Build → Calibrate"
            subtitle="Modernisation work stays safe when constraints and rollback are explicit."
            size="lg"
          />
        </div>

        <Surface variant="inset" className="mt-10 p-6 md:p-10">
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
            className="max-w-2xl"
          />
        </Surface>
      </Section>

      {/* CTA CONVERSION PANEL */}
      <Section variant="framed" containerClassName="pt-0 pb-20">
        <Surface variant="raised" className="p-8 md:p-12 text-center md:text-left">
          <div className="max-w-3xl">
            <SectionHeading
                title="Ready to modernize?"
                subtitle="Share context, constraints, and what must change. I’ll reply with whether it’s a fit and what the Blueprint would cover."
                size="lg"
                align="left"
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
              <Button href="/work" variant="secondary">
                View selected work
              </Button>
            </div>
          </div>
        </Surface>
      </Section>
    </PageShell>
  );
}