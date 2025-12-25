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
import SectionShell from "@/components/ui/SectionShell";
import Surface from "@/components/ui/Surface";
import OutcomeTile from "@/components/ui/OutcomeTile";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, FileText, Settings2 } from "lucide-react";
import AppIcon from "@/components/ui/AppIcon";
import BlueprintGrid from "@/components/graphics/BlueprintGrid";
import { ArtifactTileBackground } from "@/components/visual/ArtifactTileBackground";
import { BlueprintTimelineMotif } from "@/components/visual/BlueprintTimelineMotif";
import type { OutcomeStripProps } from "@/components/ui/OutcomeStrip";

function splitBeforeAfter(value: string): { before?: string; after?: string } {
  const normalized = value.replace(/\s+/g, " ").trim();
  const arrow = normalized.includes("→") ? "→" : normalized.includes("->") ? "->" : null;
  if (!arrow) return { after: normalized };
  const [left, right] = normalized.split(arrow).map((part) => part.trim()).filter(Boolean);
  if (!left || !right) return { after: normalized };
  return { before: left, after: right };
}

function proofStrip(metric: string, value: string): OutcomeStripProps {
  const m = metric.toLowerCase();
  const { before, after } = splitBeforeAfter(value);

  if (m.includes("latency")) {
    return {
      label: "latency budget held",
      pillar: "control",
      before,
      after,
      sparkline: "flat",
    };
  }

  if (m.includes("runtime") || m.includes("time")) {
    return {
      label: "runtime window tightened",
      pillar: "speed",
      before,
      after,
      sparkline: "down",
    };
  }

  if (m.includes("cost") || m.includes("scan")) {
    return {
      label: "cost variance reduced",
      pillar: "clarity",
      before,
      after,
      sparkline: "down",
    };
  }

  if (m.includes("failure") || m.includes("error") || m.includes("degradation")) {
    return {
      label: "failure modes constrained",
      pillar: "control",
      before,
      after,
      sparkline: "down",
    };
  }

  return {
    label: "measured outcome",
    pillar: "clarity",
    before,
    after,
    sparkline: "flat",
  };
}

export default function Home() {
  const caseStudies = getAllCaseStudies().slice(0, 3);
  const proof = getProofMetrics(4);

  const proofColsLg = proof.length >= 4 ? "lg:grid-cols-4" : proof.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <PageShell>
      <Hero />

      {/* PROOF SECTION */}
      <SectionShell
        variant="framed"
        cornerGraphic={<OutcomeDelta />}
        backplate="radial"
        backplateOpacity={0.05}
        separatorText="measured change"
        separatorAlign="start"
      >
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Proof"
            title="Outcomes, stated conservatively"
            subtitle="Quantified signals from case studies, described without client identifiers."
            size="lg"
          />
        </div>

        <div className={`mt-10 grid gap-4 md:grid-cols-2 ${proofColsLg}`}>
          {proof.map((item) => (
            <OutcomeTile
              key={`${item.caseStudySlug}-${item.metric}`}
              href={`/case-studies/${item.caseStudySlug}`}
              value={item.value}
              metric={item.metric}
              context={item.context}
              strip={proofStrip(item.metric, item.value)}
              surfaceVariant="inset"
              className="h-full"
            />
          ))}
        </div>
      </SectionShell>

      {/* PILLARS SECTION */}
      <SectionShell variant="tinted" backplate="noise" backplateOpacity={0.04}>
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
              
              <div className="mt-8 pt-8 border-t border-line-2">
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
      </SectionShell>

      {/* PATTERN BREAK: BLUEPRINT PANEL */}
      <SectionShell
        variant="plain"
        separatorText="constraint-first delivery"
        separatorAlign="center"
        backplate="radial"
        backplateOpacity={0.035}
      >
        <Surface variant="glow" className="relative overflow-hidden p-8 md:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-5">
             <BlueprintGrid className="h-full w-full" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <SectionHeading
              eyebrow="The Engagement Model"
              title="Start with a Blueprint"
              subtitle="Before committing to build, we run a short, paid assessment. You get a system map, a risk register, and a sequenced delivery plan. We get to know the constraints before writing code."
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
          </div>
        </Surface>
      </SectionShell>

      {/* SELECTED WORK (TEASER) */}
      <SectionShell variant="tinted" backplate="grid" backplateOpacity={0.035}>
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Examples with context"
            subtitle="Real projects described with constraints, tradeoffs, and outcomes."
            size="lg"
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <Surface
              key={caseStudy.slug}
              as={Link}
              href={`/case-studies/${caseStudy.slug}`}
              variant="raised"
              className="group relative overflow-hidden p-6 transition-all hover:-translate-y-1"
            >
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40">
                <ArtifactTileBackground
                  className="h-full w-full"
                  density="subtle"
                  variant={index % 3 === 0 ? "signal" : index % 3 === 1 ? "matrix" : "ripple"}
                />
              </div>

              <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-3">
                  {caseStudy.industry}
                </p>
                <Chip label={caseStudy.timeline} size="sm" tone="neutral" />
              </div>
              
              <h3 className="mt-4 text-xl font-semibold text-ink-1 group-hover:text-accent-electric transition-colors">
                {caseStudy.title}
              </h3>
              <p className="mt-3 text-sm text-ink-2 leading-relaxed line-clamp-3">
                {caseStudy.description}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {caseStudy.tags.slice(0, 2).map((tag) => (
                  <Chip key={tag} label={tag} size="sm" tone="tinted" />
                ))}
              </div>
              </div>
            </Surface>
          ))}
        </div>

      </SectionShell>

      {/* PROCESS */}
      <SectionShell
        variant="plain"
        backplate="radial"
        backplateOpacity={0.04}
        separatorText="operational clarity"
        separatorAlign="end"
      >
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Process"
            title="Blueprint → Build → Calibrate"
            subtitle="Modernisation work stays safe when constraints and rollback are explicit."
            size="lg"
          />
        </div>

        <Surface variant="inset" className="mt-10 p-6 md:p-10">
          <div aria-hidden="true" className="mb-6 h-10 w-full opacity-80">
            <BlueprintTimelineMotif className="h-full w-full" showLabels={false} />
          </div>
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
      </SectionShell>

      {/* CTA CONVERSION PANEL */}
      <SectionShell variant="framed" spacing="tight" backplate="grid" backplateOpacity={0.03}>
        <Surface variant="raised" className="p-8 md:p-12 text-center md:text-left">
          <div className="max-w-3xl">
            <SectionHeading
                title="Ready to modernise?"
                subtitle="Share context, constraints, and what must change. We'll reply with whether it's a fit and what the Blueprint would cover."
                size="lg"
                align="left"
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
              <Button href="/work" variant="secondary">
                View Work
              </Button>
            </div>
          </div>
        </Surface>
      </SectionShell>
    </PageShell>
  );
}
