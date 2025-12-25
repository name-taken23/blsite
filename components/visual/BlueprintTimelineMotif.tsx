import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { visualOpacity, visualStroke } from "./visualTokens";

export type BlueprintTimelineStep = "blueprint" | "build" | "calibrate";

export type BlueprintTimelineMotifProps = {
  className?: string;
  /** When false, a <title> is rendered for accessibility. */
  decorative?: boolean;
  /** Accessible title (used when decorative=false). */
  title?: string;
  /** Highlight one of the steps. */
  activeStep?: BlueprintTimelineStep;
  /** Show step labels under the line. */
  showLabels?: boolean;
  /** Override the label text. */
  labels?: {
    blueprint?: string;
    build?: string;
    calibrate?: string;
  };
};

/**
 * BlueprintTimelineMotif
 * Blueprint → Build → Calibrate schematic timeline.
 */
export function BlueprintTimelineMotif({
  className,
  decorative = true,
  title = "Blueprint timeline motif",
  activeStep,
  showLabels = true,
  labels,
}: BlueprintTimelineMotifProps): ReactElement {
  const labelBlueprint = labels?.blueprint ?? "Blueprint";
  const labelBuild = labels?.build ?? "Build";
  const labelCalibrate = labels?.calibrate ?? "Calibrate";

  const isActive = (step: BlueprintTimelineStep) => activeStep === step;

  return (
    <svg
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : "img"}
      viewBox="0 0 520 88"
      className={cn("h-full w-full", className)}
      focusable="false"
    >
      {decorative ? null : <title>{title}</title>}

      <g
        className="stroke-gray-300"
        strokeWidth={visualStroke.thin}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        opacity={0.9}
      >
        <path d="M 40 36 H 480" />
        <path d="M 480 36 l -10 -6" />
        <path d="M 480 36 l -10 6" />
      </g>

      <g className="fill-white stroke-gray-300" strokeWidth={visualStroke.hairline} vectorEffect="non-scaling-stroke">
        <circle cx="120" cy="36" r="8" />
        <circle cx="260" cy="36" r="8" />
        <circle cx="400" cy="36" r="8" />
      </g>

      <g className="fill-accent-electric">
        <circle cx="120" cy="36" r={isActive("blueprint") ? 3.4 : 2.6} opacity={isActive("blueprint") ? 0.9 : visualOpacity.accentStrong} />
        <circle cx="260" cy="36" r={isActive("build") ? 3.4 : 2.6} opacity={isActive("build") ? 0.9 : visualOpacity.accentStrong} />
        <circle cx="400" cy="36" r={isActive("calibrate") ? 3.4 : 2.6} opacity={isActive("calibrate") ? 0.9 : visualOpacity.accentStrong} />
      </g>

      {showLabels ? (
        <g className="fill-gray-600" opacity={0.95}>
          <text x="120" y="68" textAnchor="middle" fontSize="12" fontWeight="600">
            {labelBlueprint}
          </text>
          <text x="260" y="68" textAnchor="middle" fontSize="12" fontWeight="600">
            {labelBuild}
          </text>
          <text x="400" y="68" textAnchor="middle" fontSize="12" fontWeight="600">
            {labelCalibrate}
          </text>
        </g>
      ) : null}
    </svg>
  );
}
