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
  /** If true, shows a tiny schematic sparkline. */
  sparkline?: OutcomeSparkline;
  /** Accessible label override. */
  ariaLabel?: string;
};

function OutcomeSparklineSvg({ variant }: { variant: Exclude<OutcomeSparkline, "none"> }): ReactElement {
  const dByVariant: Record<Exclude<OutcomeSparkline, "none">, string> = {
    flat: "M 2 10 L 10 10 L 18 10 L 26 10 L 34 10",
    down: "M 2 6 L 10 9 L 18 8 L 26 12 L 34 14",
    up: "M 2 14 L 10 11 L 18 12 L 26 8 L 34 6",
  };

  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 36 16" className="h-4 w-9">
      <path
        d={dByVariant[variant]}
        className="stroke-gray-300 dark:stroke-gray-600"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        opacity="0.95"
      />
      <path
        d={dByVariant[variant]}
        className="text-accent-electric"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        opacity="0.18"
      />
    </svg>
  );
}

/**
 * OutcomeStrip
 * A compact, “artifact-like” before/after indicator for proof cards.
 * No chart libs; tiny, token-colored SVG.
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
        "rounded-lg border border-gray-200 bg-white/60",
        "dark:border-gray-700 dark:bg-bg-panel/60",
        "px-3 py-2",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className="text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-300 truncate">
              {label}
            </div>
            {pillar ? (
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {pillar}
              </span>
            ) : null}
          </div>

          <div className="mt-2 flex items-center gap-3">
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Before</div>
              <div className={cn("text-xs font-semibold", hasBefore ? "text-gray-800 dark:text-gray-100" : "text-gray-400 dark:text-gray-500")}>{hasBefore ? before : "—"}</div>
            </div>

            <div className="flex items-center" aria-hidden="true">
              <span className="relative h-1.5 w-16 sm:w-20 rounded-full bg-gray-200/70 dark:bg-gray-700/70">
                <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gray-400 dark:bg-gray-500" />
                <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent-electric/60" />
                <span className="absolute inset-y-0 left-0 right-0 rounded-full bg-accent-electric/10" />
              </span>
            </div>

            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">After</div>
              <div className={cn("text-xs font-semibold", hasAfter ? "text-gray-800 dark:text-gray-100" : "text-gray-400 dark:text-gray-500")}>{hasAfter ? after : "—"}</div>
            </div>
          </div>
        </div>

        {sparkline !== "none" ? (
          <div className="shrink-0" aria-hidden="true">
            <OutcomeSparklineSvg variant={sparkline} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
