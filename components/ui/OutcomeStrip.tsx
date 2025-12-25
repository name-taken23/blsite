import { cn } from "@/lib/utils";
import type { ReactElement } from "react";

export type OutcomePillar = "clarity" | "speed" | "control";
export type OutcomeSparkline = "none" | "flat" | "down" | "up";

export type OutcomeStripProps = {
  className?: string;
  /** Label designed for scanning (e.g., "runtime window tightened"). */
  label: string;
  /** Optional narrative pillar tag (kept subtle). */
  pillar?: OutcomePillar;
  /** Before value (optional). */
  before?: string;
  /** After value (optional). */
  after?: string;
  /** Direction indicator for the transformation. */
  sparkline?: OutcomeSparkline;
  /** Accessible label override. */
  ariaLabel?: string;
};

/** Schematic diagram showing transformation from before → after state */
function TransformDiagram({ direction }: { direction: OutcomeSparkline }): ReactElement {
  const isReduction = direction === "down";
  const isGrowth = direction === "up";
  
  // Bar heights based on direction
  const beforeHeight = isReduction ? 20 : isGrowth ? 12 : 16;
  const afterHeight = isReduction ? 12 : isGrowth ? 20 : 16;
  const beforeY = 16 - beforeHeight / 2;
  const afterY = 16 - afterHeight / 2;
  
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 100 32"
      className="h-8 w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Subtle center guide line */}
      <line
        x1="0" y1="16" x2="100" y2="16"
        className="stroke-gray-200"
        strokeWidth="1"
        strokeDasharray="2 4"
        opacity="0.6"
      />
      
      {/* Before state bar */}
      <g>
        <rect
          x="6"
          y={beforeY}
          width="14"
          height={beforeHeight}
          rx="2"
          className="fill-gray-100 stroke-gray-300"
          strokeWidth="1"
        />
        {/* Inner detail line */}
        <line
          x1="13" y1={beforeY + 3} x2="13" y2={beforeY + beforeHeight - 3}
          className="stroke-gray-300"
          strokeWidth="1"
          strokeDasharray="1 2"
        />
      </g>
      
      {/* Transformation flow arrow */}
      <g className="text-accent-electric">
        {/* Flow line with nodes */}
        <path
          d="M 26 16 L 74 16"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 2"
          opacity="0.4"
        />
        {/* Start node */}
        <circle cx="26" cy="16" r="2" fill="currentColor" opacity="0.3" />
        {/* Center processing node */}
        <g transform="translate(50, 16)">
          <circle r="6" className="fill-accent-electric/10 stroke-accent-electric" strokeWidth="1" />
          <circle r="2.5" fill="currentColor" opacity="0.9" />
        </g>
        {/* Arrow head */}
        <path
          d="M 70 13 L 76 16 L 70 19"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
      </g>
      
      {/* After state bar - emphasized */}
      <g>
        <rect
          x="80"
          y={afterY}
          width="14"
          height={afterHeight}
          rx="2"
          className="fill-accent-electric/15 stroke-accent-electric"
          strokeWidth="1.5"
        />
        {/* Inner accent line */}
        <line
          x1="87" y1={afterY + 3} x2="87" y2={afterY + afterHeight - 3}
          className="stroke-accent-electric"
          strokeWidth="1"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

/** Pillar indicator icon */
function PillarIcon({ pillar }: { pillar: OutcomePillar }): ReactElement {
  const paths: Record<OutcomePillar, ReactElement> = {
    clarity: (
      <>
        <circle cx="6" cy="6" r="4" className="stroke-current" strokeWidth="1.5" fill="none" />
        <circle cx="6" cy="6" r="1.5" className="fill-current" />
      </>
    ),
    speed: (
      <path d="M2 9 L6 5 L10 9 M6 5 L6 11" className="stroke-current" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    control: (
      <>
        <rect x="2" y="3" width="8" height="6" rx="1" className="stroke-current" strokeWidth="1.5" fill="none" />
        <line x1="6" y1="9" x2="6" y2="11" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  };
  
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3 text-ink-3">
      {paths[pillar]}
    </svg>
  );
}

/**
 * OutcomeStrip
 * A compact, schematic-style before/after indicator for proof cards.
 * Clean blueprint aesthetic with clear transformation visualization.
 */
export default function OutcomeStrip({
  className,
  label,
  pillar,
  before,
  after,
  sparkline = "none",
  ariaLabel,
}: OutcomeStripProps): ReactElement {
  const hasBefore = Boolean(before && before.trim().length);
  const hasAfter = Boolean(after && after.trim().length);

  const a11y = ariaLabel ??
    `${label}${pillar ? ` (${pillar})` : ""}${hasBefore ? `, before ${before}` : ""}${hasAfter ? `, after ${after}` : ""}`;

  return (
    <div
      aria-label={a11y}
      role="group"
      className={cn(
        "rounded-lg border border-line-2",
        "bg-gradient-to-b from-surface-1 to-surface-2/50",
        "p-3",
        className
      )}
    >
      {/* Header: label + pillar */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-[11px] font-semibold tracking-wide text-ink-2 uppercase truncate">
          {label}
        </span>
        {pillar ? (
          <span className="flex items-center gap-1 shrink-0">
            <PillarIcon pillar={pillar} />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-3">
              {pillar}
            </span>
          </span>
        ) : null}
      </div>

      {/* Values row with diagram */}
      <div className="flex items-center gap-2">
        {/* Before */}
        <div className="text-center shrink-0 min-w-[2.5rem]">
          <div className="text-[9px] font-medium uppercase tracking-wider text-ink-4 mb-0.5">
            Before
          </div>
          <div className={cn(
            "text-xs font-bold tabular-nums leading-tight",
            hasBefore ? "text-ink-2" : "text-ink-4"
          )}>
            {hasBefore ? before : "—"}
          </div>
        </div>

        {/* Diagram */}
        <div className="flex-1 min-w-0">
          <TransformDiagram direction={sparkline} />
        </div>

        {/* After - emphasized */}
        <div className="text-center shrink-0 min-w-[2.5rem]">
          <div className="text-[9px] font-medium uppercase tracking-wider text-ink-4 mb-0.5">
            After
          </div>
          <div className={cn(
            "text-xs font-bold tabular-nums leading-tight",
            hasAfter ? "text-accent-electric" : "text-ink-4"
          )}>
            {hasAfter ? after : "—"}
          </div>
        </div>
      </div>
    </div>
  );
}
