import type { ReactElement } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";
import AppIcon from "@/components/ui/AppIcon";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";
import Chip from "@/components/ui/Chip";
import ConstraintBadge from "@/components/ui/ConstraintBadge";
import { CaseStudyDiagram } from "@/components/visual/CaseStudyDiagram";
import SystemSketchModal from "@/components/case-studies/SystemSketchModal";
import {
  getConstraintBadgesForStudy,
  makeRefIdFromSlug,
  pickExecutiveSkimMetrics,
} from "./artifactUtils";

export default function CaseStudyArtifactHeader(props: { caseStudy: CaseStudy }): ReactElement {
  const { caseStudy } = props;

  const refId = makeRefIdFromSlug(caseStudy.slug);
  const constraints = getConstraintBadgesForStudy(caseStudy, 4);
  const skim = pickExecutiveSkimMetrics(caseStudy.results, 3);

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-10">
      <div className="mb-8">
        <Button href="/work" variant="tertiary" size="sm" className="gap-2 px-0">
          <AppIcon icon={ArrowLeft} size="sm" />
          Back to Work
        </Button>
      </div>

      <Surface variant="inset" className="p-0 overflow-visible">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT: identity + constraints */}
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <div className="font-mono text-xs tracking-widest text-ink-3">
                    {refId}
                  </div>
                  <div className="h-4 w-px bg-line-2" aria-hidden="true" />
                  <div className="text-xs font-semibold uppercase tracking-wide text-ink-3">
                    Project artifact
                  </div>
                </div>

                <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-ink-1">
                  {caseStudy.title}
                </h1>

                <p className="mt-5 text-base md:text-lg leading-relaxed text-ink-2">
                  {caseStudy.description}
                </p>
              </div>

              <div className="hidden md:block w-40">
                <CaseStudyDiagram slug={caseStudy.slug} className="h-auto w-full" framed={true} />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {constraints.map((c) => (
                <ConstraintBadge key={c.kind} kind={c.kind} label={c.label} />
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {caseStudy.tags.slice(0, 5).map((tag) => (
                <Chip key={tag} label={tag} size="sm" tone="tinted" />
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-line-2 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-ink-3">Industry</div>
                <div className="mt-1 font-semibold text-ink-1">{caseStudy.industry}</div>
              </div>
              <div>
                <div className="text-ink-3">Timeline</div>
                <div className="mt-1 font-semibold text-ink-1">{caseStudy.timeline}</div>
              </div>
              <div className="hidden sm:block">
                <div className="text-ink-3">Delivery model</div>
                <div className="mt-1 font-semibold text-ink-1">Founder-led</div>
              </div>
            </div>
          </div>

          {/* RIGHT: executive skim panel */}
          <div className="border-t lg:border-t-0 lg:border-l border-line-2 bg-surface-tint p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-ink-3">
                  Executive skim
                </div>
                <div className="mt-1 text-sm font-semibold text-ink-1">Three measured signals</div>
              </div>

              <Link
                href="#outcomes"
                className="text-sm font-semibold text-accent-electric hover:text-accent-electricDark transition-colors"
              >
                Jump to outcomes
              </Link>
            </div>

            <div className="mt-6 grid gap-3">
              {skim.map((item) => (
                <div
                  key={item.metric}
                  className="rounded-xl border border-line-2 bg-surface-2 p-4"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-ink-3">
                      {item.metric}
                    </div>
                    <div className="text-sm font-semibold text-ink-1">
                      {item.value}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-ink-2 leading-relaxed line-clamp-2">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-line-2">
              <div className="text-xs font-semibold uppercase tracking-wide text-ink-3">
                System sketch
              </div>
              <SystemSketchModal slug={caseStudy.slug} className="mt-3" />
            </div>
          </div>
        </div>
      </Surface>
    </section>
  );
}
