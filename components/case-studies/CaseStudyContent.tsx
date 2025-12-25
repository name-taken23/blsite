"use client";

import { CaseStudy } from "@/lib/case-studies";
import MagneticButton from "@/components/ui/MagneticButton";
import Chip from "@/components/ui/Chip";
import List from "@/components/ui/List";
import SectionHeading from "@/components/ui/SectionHeading";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
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
      <div id={id} className="relative scroll-mt-28">
        <SectionHeading title={title} size="md" />
        <div className="mt-6">{children}</div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
          <aside className="hidden lg:block h-full">
            <div className="sticky top-28">
              <div className="text-sm font-semibold uppercase tracking-normal text-ink-3 mb-4 pl-3">
                On this page
              </div>
              <nav className="relative">
                 <div className="absolute left-0 top-0 bottom-0 w-px bg-line-2" />
                 <ul className="space-y-4">
                  {sections.map((section) => (
                    <li key={section.id} className="relative pl-3">
                      <button
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className="text-sm font-medium text-ink-2 hover:text-accent-electric transition-colors text-left"
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <div className="max-w-3xl">
            <div className="space-y-16">
              <ReportSection id="context" title="Context">
                <p className="text-base md:text-lg leading-relaxed text-ink-2">{caseStudy.narrative.context}</p>
              </ReportSection>

              <ReportSection id="constraint" title="Constraint">
                <p className="text-base md:text-lg leading-relaxed text-ink-2">{caseStudy.narrative.constraint}</p>
              </ReportSection>

              <ReportSection id="intervention" title="Intervention">
                <p className="text-base md:text-lg leading-relaxed text-ink-2">{caseStudy.narrative.intervention}</p>

                <div className="mt-8 bg-surface-3 rounded-xl p-6">
                  <h3 className="text-base font-semibold text-ink-1">Key decisions</h3>
                  <List
                    items={caseStudy.keyFeatures}
                    variant="check"
                    className="mt-4"
                    itemClassName="text-ink-2"
                  />
                </div>
              </ReportSection>

              <ReportSection id="outcomes" title="Outcomes">
                <p className="text-base md:text-lg leading-relaxed text-ink-2">{caseStudy.narrative.measuredOutcome}</p>
              </ReportSection>

              <ReportSection id="why-it-matters" title="Why it matters">
                <p className="text-base md:text-lg leading-relaxed text-ink-2">{caseStudy.narrative.whyItMatters}</p>
              </ReportSection>

              <ReportSection id="implementation" title="Implementation">
                <p className="text-ink-2 leading-relaxed">
                  Practical technology choices that matched the constraints.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech) => (
                    <Chip key={tech} label={tech} size="sm" tone="neutral" />
                  ))}
                </div>
              </ReportSection>
            </div>
          </div>
        </div>
      </section>

      {caseStudy.testimonial && (
        <section className="max-w-3xl mx-auto px-6 py-16">
          <div className="rounded-xl bg-surface-3 p-8 md:p-10">
            <blockquote className="text-lg md:text-xl font-medium text-ink-1 leading-relaxed">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-6 text-sm text-ink-2">
              <div className="font-semibold text-ink-1">{caseStudy.testimonial.author}</div>
              <div>{caseStudy.testimonial.role}</div>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-xl bg-surface-3 p-10 md:p-12 text-center">
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
