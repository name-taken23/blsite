"use client";

import { CaseStudy } from "@/lib/case-studies";
import { ArrowLeft } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import List from "@/components/ui/List";
import AppIcon from "@/components/ui/AppIcon";
import OutcomeTile from "@/components/ui/OutcomeTile";
import Surface from "@/components/ui/Surface";
import SectionHeading from "@/components/ui/SectionHeading";
import OutcomeDelta from "@/components/graphics/OutcomeDelta";
import TopologyLines from "@/components/graphics/TopologyLines";
import BrandMark from "@/components/brand/BrandMark";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const outcomeStrip = caseStudy.results.slice(0, 3);

  const sections = [
    { id: "context", label: "Context" },
    { id: "constraint", label: "Constraint" },
    { id: "intervention", label: "Intervention" },
    { id: "outcomes", label: "Outcomes" },
    { id: "why-it-matters", label: "Why it matters" },
    { id: "implementation", label: "Implementation" },
  ] as const;

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  };

  const ReportSection = (props: { id: string; title: string; children: React.ReactNode }) => {
    const { id, title, children } = props;

    return (
      <div id={id} className="relative scroll-mt-28 pt-10">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gray-200" />
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-6 text-accent-electric opacity-[0.18]">
          <OutcomeDelta />
        </div>
        <SectionHeading title={title} size="md" />
        <div className="mt-4">{children}</div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="mb-8">
          <Button
            href="/work"
            variant="tertiary"
            size="sm"
            className="gap-2 px-0"
          >
            <AppIcon icon={ArrowLeft} size="sm" />
            Back to Work
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag) => (
                <Chip key={tag} label={tag} size="sm" />
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
              {caseStudy.title}
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600">
              {caseStudy.description}
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <dt className="text-gray-500">Industry</dt>
                <dd className="mt-1 font-semibold text-gray-900">{caseStudy.industry}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Timeline</dt>
                <dd className="mt-1 font-semibold text-gray-900">{caseStudy.timeline}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Team size</dt>
                <dd className="mt-1 font-semibold text-gray-900">{caseStudy.teamSize}</dd>
              </div>
            </dl>
          </div>

          <Surface variant="tinted" className="p-6">
            <div className="relative h-56 rounded-xl bg-gray-100 overflow-hidden">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08]">
                <TopologyLines className="h-full w-full" />
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute right-4 bottom-4 opacity-10">
                <BrandMark variant="mark" size="md" />
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-600 leading-relaxed">
              <div className="font-semibold text-gray-900">At a glance</div>
              <div className="mt-2">
                A real project described with constraints, tradeoffs, and what was delivered.
              </div>
            </div>
          </Surface>
        </div>

        {outcomeStrip.length ? (
          <Surface variant="inset" className="mt-10 p-6">
            <div className="flex items-baseline justify-between gap-6">
              <h2 className="text-sm font-semibold text-gray-900">Executive skim</h2>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Outcome strip</div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {outcomeStrip.map((result) => (
                <OutcomeTile
                  key={result.metric}
                  value={result.value}
                  metric={result.metric}
                  context={result.description ?? ""}
                  surfaceVariant="plain"
                  ornament="rail"
                  className="p-5 w-full sm:flex-1 sm:min-w-[240px]"
                />
              ))}
            </div>
          </Surface>
        ) : null}
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">On this page</div>
              <nav className="mt-4">
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className="w-full text-left text-sm font-semibold text-gray-700 hover:text-accent-electric transition-colors"
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 h-10 w-full opacity-[0.18]">
                <TopologyLines className="h-full w-full" />
              </div>
            </div>
          </aside>

          <div className="max-w-3xl">
            <div className="space-y-10">
              <ReportSection id="context" title="Context">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">{caseStudy.narrative.context}</p>
              </ReportSection>

              <ReportSection id="constraint" title="Constraint">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">{caseStudy.narrative.constraint}</p>
              </ReportSection>

              <ReportSection id="intervention" title="Intervention">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">{caseStudy.narrative.intervention}</p>

                <Surface variant="inset" className="mt-8 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Key decisions</h3>
                  <List items={caseStudy.keyFeatures} variant="check" className="mt-4" itemClassName="text-gray-700" />
                </Surface>
              </ReportSection>

              <ReportSection id="outcomes" title="Outcomes">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">{caseStudy.narrative.measuredOutcome}</p>
              </ReportSection>

              <ReportSection id="why-it-matters" title="Why it matters">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">{caseStudy.narrative.whyItMatters}</p>
              </ReportSection>

              <ReportSection id="implementation" title="Implementation">
                <p className="text-gray-600 leading-relaxed">
                  Practical technology choices that matched the constraints.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech) => (
                    <Chip key={tech} label={tech} size="sm" />
                  ))}
                </div>
              </ReportSection>
            </div>
          </div>
        </div>
      </section>

      {caseStudy.testimonial && (
        <section className="max-w-3xl mx-auto px-6 py-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <blockquote className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-6 text-sm text-gray-600">
              <div className="font-semibold text-gray-900">{caseStudy.testimonial.author}</div>
              <div>{caseStudy.testimonial.role}</div>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              title="Discuss a similar system"
              subtitle="If this resembles your constraints, share a short description of what you run today and what needs to change."
              size="md"
              align="center"
            />
          </div>
          <div className="mt-8 flex justify-center">
            <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
