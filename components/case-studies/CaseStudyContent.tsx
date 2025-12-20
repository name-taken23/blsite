"use client";

import { CaseStudy } from "@/lib/case-studies";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import OutcomeTile from "@/components/ui/OutcomeTile";
import Surface from "@/components/ui/Surface";
import OutcomeDelta from "@/components/graphics/OutcomeDelta";
import TopologyLines from "@/components/graphics/TopologyLines";

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
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">{title}</h2>
        <div className="mt-4">{children}</div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-gray-700"
                >
                  {tag}
                </span>
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

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className={`h-56 rounded-xl bg-gradient-to-br ${caseStudy.gradient}`} />
            <div className="mt-6 text-sm text-gray-600 leading-relaxed">
              <div className="font-semibold text-gray-900">At a glance</div>
              <div className="mt-2">
                A real project described with constraints, tradeoffs, and what was delivered.
              </div>
            </div>
          </div>
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
                  <ul className="mt-4 space-y-3">
                    {caseStudy.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent-electric flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-gray-700"
                    >
                      {tech}
                    </span>
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
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Discuss a similar system
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            If this resembles your constraints, share a short description of what you run today and what needs to change.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
