import type { ReactElement, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/lib/case-studies";
import Surface from "@/components/ui/Surface";
import Chip from "@/components/ui/Chip";
import ConstraintBadge from "@/components/ui/ConstraintBadge";
import { ArtifactTileBackground } from "@/components/visual/ArtifactTileBackground";
import { getConstraintBadgesForStudy, makeRefIdFromSlug } from "./artifactUtils";
import { motionClasses } from "@/lib/motion";

type ArtifactTileVariant = "grid" | "spotlight";

type ArtifactTileProps = {
  caseStudy: CaseStudy;
  variant?: ArtifactTileVariant;
  href?: string;
  className?: string;
  rightSlot?: ReactNode;
};

const backgroundVariants = ["signal", "matrix", "ripple"] as const;

function backgroundVariantFromSlug(slug: string): (typeof backgroundVariants)[number] {
  const hash = Array.from(slug).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return backgroundVariants[Math.abs(hash) % backgroundVariants.length];
}

export default function ArtifactTile(props: ArtifactTileProps): ReactElement {
  const { caseStudy, variant = "grid", href, className, rightSlot } = props;

  const resolvedHref = href ?? `/case-studies/${caseStudy.slug}`;
  const refId = makeRefIdFromSlug(caseStudy.slug);
  const constraints = getConstraintBadgesForStudy(caseStudy, 4);
  const stack = (caseStudy.technologies?.length ? caseStudy.technologies : caseStudy.tags).slice(0, 4);

  const tileBase = cn(
    "group block h-full",
    motionClasses.focusRing
  );

  const surfaceBase = cn(
    "h-full",
    "bg-surface-2",
    "border border-line-2",
    "shadow-card hover:shadow-card-hover",
    "hover:border-line-1"
  );

  const thumbnail = (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-xl",
        "border border-line-2",
        "bg-surface-3",
        variant === "spotlight" ? "h-20 w-28" : "h-14 w-20"
      )}
    >
      <div className="absolute inset-0 opacity-50">
        <ArtifactTileBackground
          className="h-full w-full"
          density="subtle"
          variant={backgroundVariantFromSlug(caseStudy.slug)}
        />
      </div>
    </div>
  );

  if (variant === "spotlight") {
    return (
      <Surface
        as={Link}
        href={resolvedHref}
        variant="plain"
        className={cn(tileBase, motionClasses.interactiveTile, surfaceBase, "p-8 md:p-12", className)}
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold tracking-widest text-ink-3 font-mono">
                  {refId}
                </div>
                <div className="mt-3 text-sm font-semibold uppercase tracking-normal text-ink-3">
                  {caseStudy.industry}
                </div>
              </div>
              {thumbnail}
            </div>

            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-ink-1 group-hover:text-accent-electric transition-colors duration-fast">
              {caseStudy.title}
            </h3>

            <p className="mt-4 text-lg text-ink-2 leading-relaxed flex-grow">
              {caseStudy.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {constraints.map((c) => (
                <ConstraintBadge key={c.kind} kind={c.kind} label={c.label} />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {stack.map((tag) => (
                <Chip key={tag} label={tag} size="sm" tone="tinted" />
              ))}
            </div>

            <div className="mt-6 text-sm font-semibold text-ink-1">
              <span className="text-ink-3">Outcome:</span> {caseStudy.results[0]?.value ?? ""}
            </div>
          </div>

          <div>{rightSlot}</div>
        </div>
      </Surface>
    );
  }

  return (
    <Surface
      as={Link}
      href={resolvedHref}
      variant="plain"
      className={cn(tileBase, motionClasses.interactiveTile, surfaceBase, "p-7 flex flex-col", className)}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold tracking-widest text-ink-3 font-mono">
            {refId}
          </div>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink-1 group-hover:text-accent-electric transition-colors duration-fast">
            {caseStudy.title}
          </h3>
        </div>
        {thumbnail}
      </div>

      <p className="mt-4 text-sm text-ink-2 line-clamp-2">
        {caseStudy.summaryContext ?? caseStudy.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {constraints.slice(0, 3).map((c) => (
          <ConstraintBadge key={c.kind} kind={c.kind} label={c.label} />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((tag) => (
          <Chip key={tag} label={tag} size="sm" tone="tinted" />
        ))}
      </div>

      <div className="mt-auto pt-6">
        <div className="text-sm text-ink-2">
          <span className="text-ink-3">Outcome:</span> {caseStudy.summaryOutcome ?? caseStudy.results[0]?.value ?? ""}
        </div>
      </div>
    </Surface>
  );
}
