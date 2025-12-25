import Link from "next/link";
import type { ReactNode } from "react";
import OutcomeDelta from "@/components/graphics/OutcomeDelta";
import Surface, { type SurfaceVariant } from "@/components/ui/Surface";
import { cn } from "@/lib/utils";
import OutcomeStrip, { type OutcomeStripProps } from "@/components/ui/OutcomeStrip";
import { motionClasses } from "@/lib/motion";

type OutcomeTileOrnament = "none" | "rail" | "full";

export default function OutcomeTile(props: {
  value: string;
  metric: string;
  context: string;
  href?: string;
  icon?: ReactNode;
  surfaceVariant?: SurfaceVariant;
  /** Ornamentation level: none, rail (accent line only), or full (rail + corner icon) */
  ornament?: OutcomeTileOrnament;
  /** Optional measured-outcome strip (supports scanning without overpowering copy). */
  strip?: OutcomeStripProps;
  className?: string;
}) {
  const {
    value,
    metric,
    context,
    href,
    icon = <OutcomeDelta />,
    surfaceVariant = "raised",
    ornament = "none",
    strip,
    className,
  } = props;

  const content = (
    <div className="flex flex-col h-full">
      {/* Accent rail - shown for rail and full */}
      {ornament !== "none" ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-electric/20" />
      ) : null}

      {/* Corner icon - shown only for full ornament */}
      {ornament === "full" ? (
        <div aria-hidden="true" className="pointer-events-none absolute right-4 top-4 text-accent-electric/40 opacity-50">
          {icon}
        </div>
      ) : null}

      {/* Main metric - prominent display */}
      <div className="mb-4">
        <div className="text-3xl md:text-4xl font-bold text-ink-1 leading-none tracking-tight">
          {value}
        </div>
        <div className="mt-2 text-sm font-semibold text-ink-2 uppercase tracking-wide">
          {metric}
        </div>
      </div>

      {/* Context description */}
      <p className="text-sm text-ink-3 leading-relaxed flex-grow">
        {context}
      </p>

      {/* Transformation diagram strip - at bottom */}
      {strip ? (
        <div className="mt-4 pt-4 border-t border-line-2">
          <OutcomeStrip {...strip} />
        </div>
      ) : null}

      {/* Link indicator for clickable tiles */}
      {href ? (
        <div className="mt-4 flex items-center text-xs font-medium text-accent-electric opacity-0 group-hover:opacity-100 transition-opacity">
          <span>View case study</span>
          <svg className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h6M7 4l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Surface
        as={Link}
        href={href}
        variant={surfaceVariant}
        className={cn(
          "group relative p-6",
          motionClasses.interactiveCard,
          motionClasses.focusRing,
          "hover:border-accent-electric/30 hover:shadow-lg hover:shadow-accent-electric/5",
          "transition-all duration-200",
          className
        )}
      >
        {content}
      </Surface>
    );
  }

  return (
    <Surface variant={surfaceVariant} className={cn("relative p-6", className)}>
      {content}
    </Surface>
  );
}
