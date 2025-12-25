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
import { ArrowUpRight, Layers, Brain, Package } from "lucide-react";
import AppIcon from "@/components/ui/AppIcon";

type ArtifactTileVariant = "grid" | "spotlight" | "featured";

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

const categoryIcons = {
  systems: Layers,
  intelligence: Brain,
  product: Package,
} as const;

const categoryLabels = {
  systems: "Systems",
  intelligence: "Intelligence",
  product: "Product",
} as const;

export default function ArtifactTile(props: ArtifactTileProps): ReactElement {
  const { caseStudy, variant = "grid", href, className, rightSlot } = props;

  const resolvedHref = href ?? `/case-studies/${caseStudy.slug}`;
  const refId = makeRefIdFromSlug(caseStudy.slug);
  const constraints = getConstraintBadgesForStudy(caseStudy, 4);
  const stack = (caseStudy.technologies?.length ? caseStudy.technologies : caseStudy.tags).slice(0, 4);
  const CategoryIcon = categoryIcons[caseStudy.category];

  const tileBase = cn(
    "group block h-full",
    motionClasses.focusRing
  );

  const surfaceBase = cn(
    "h-full",
    "bg-surface-2",
    "border border-line-2",
    "shadow-card hover:shadow-card-hover",
    "hover:border-line-1",
    "transition-all duration-200"
  );

  // Schematic thumbnail
  const thumbnail = (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-lg",
        "border border-line-2",
        "bg-surface-3",
        variant === "featured" ? "h-32 w-full" : variant === "spotlight" ? "h-20 w-28" : "h-16 w-24"
      )}
    >
      <div className="absolute inset-0 opacity-60">
        <ArtifactTileBackground
          className="h-full w-full"
          density="subtle"
          variant={backgroundVariantFromSlug(caseStudy.slug)}
        />
      </div>
      {/* Category icon overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-2 rounded-lg bg-surface-1/80 border border-line-2">
          <AppIcon icon={CategoryIcon} className="h-5 w-5 text-ink-3" />
        </div>
      </div>
    </div>
  );

  // Featured variant - large horizontal card
  if (variant === "featured") {
    return (
      <Surface
        as={Link}
        href={resolvedHref}
        variant="plain"
        className={cn(tileBase, motionClasses.interactiveTile, surfaceBase, "p-0 overflow-hidden", className)}
      >
        <div className="grid md:grid-cols-5 gap-0">
          {/* Left: Thumbnail area */}
          <div className="md:col-span-2 bg-surface-3 p-6 flex flex-col justify-between min-h-[200px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-40">
              <ArtifactTileBackground
                className="h-full w-full"
                density="normal"
                variant={backgroundVariantFromSlug(caseStudy.slug)}
              />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-1/90 border border-line-2">
                <AppIcon icon={CategoryIcon} className="h-4 w-4 text-ink-3" />
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-2">
                  {categoryLabels[caseStudy.category]}
                </span>
              </div>
            </div>
            <div className="relative z-10 mt-auto">
              <div className="text-xs font-mono text-ink-3">{refId}</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="text-sm font-semibold uppercase tracking-wide text-ink-3">
                {caseStudy.industry}
              </div>
              <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <AppIcon icon={ArrowUpRight} className="h-5 w-5 text-accent-electric" />
              </div>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink-1 group-hover:text-accent-electric transition-colors">
              {caseStudy.title}
            </h3>

            <p className="mt-3 text-ink-2 leading-relaxed line-clamp-2">
              {caseStudy.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {constraints.slice(0, 3).map((c) => (
                <ConstraintBadge key={c.kind} kind={c.kind} label={c.label} />
              ))}
            </div>

            <div className="mt-auto pt-6 flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {stack.slice(0, 3).map((tag) => (
                  <Chip key={tag} label={tag} size="sm" tone="tinted" />
                ))}
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs text-ink-3 uppercase tracking-wide">Outcome</div>
                <div className="text-sm font-semibold text-ink-1">
                  {caseStudy.summaryOutcome ?? caseStudy.results[0]?.value}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Surface>
    );
  }

  // Spotlight variant - for homepage/featured sections
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

  // Grid variant - default compact card
  return (
    <Surface
      as={Link}
      href={resolvedHref}
      variant="plain"
      className={cn(tileBase, motionClasses.interactiveTile, surfaceBase, "p-6 flex flex-col", className)}
    >
      {/* Header with category badge and thumbnail */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-surface-3 border border-line-2">
            <AppIcon icon={CategoryIcon} className="h-3.5 w-3.5 text-ink-3" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-3">
              {categoryLabels[caseStudy.category]}
            </span>
          </div>
          <div className="mt-2 text-xs font-mono text-ink-3">{refId}</div>
        </div>
        {thumbnail}
      </div>

      {/* Industry */}
      <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-3">
        {caseStudy.industry}
      </div>

      {/* Title */}
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink-1 group-hover:text-accent-electric transition-colors line-clamp-2">
        {caseStudy.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm text-ink-2 line-clamp-2 flex-grow">
        {caseStudy.summaryContext ?? caseStudy.description}
      </p>

      {/* Constraints */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {constraints.slice(0, 2).map((c) => (
          <ConstraintBadge key={c.kind} kind={c.kind} label={c.label} size="sm" />
        ))}
      </div>

      {/* Footer with outcome */}
      <div className="mt-auto pt-5 border-t border-line-2">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="text-[10px] text-ink-3 uppercase tracking-wide">Outcome</div>
            <div className="text-sm font-semibold text-ink-1 truncate">
              {caseStudy.summaryOutcome ?? caseStudy.results[0]?.value ?? ""}
            </div>
          </div>
          <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <AppIcon icon={ArrowUpRight} className="h-4 w-4 text-accent-electric" />
          </div>
        </div>
      </div>
    </Surface>
  );
}
