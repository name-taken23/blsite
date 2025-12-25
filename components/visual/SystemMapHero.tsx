"use client";

import type { ReactElement } from "react";
import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  visualOpacity,
  visualStroke,
  visualStrokeColor,
  visualTextColor,
} from "./visualTokens";
import {
  pathDrawVariants,
  pulseVariants,
  useMotionSettings,
} from "@/lib/motion-framer";

export type SystemMapHeroProps = {
  /** Tailwind className applied to the outer wrapper. */
  className?: string;
  /** When false, renders a <title> for accessibility. */
  decorative?: boolean;
  /** Accessible title (used when decorative=false). */
  title?: string;
  /** Accessible description (used when decorative=false). */
  description?: string;
};

/**
 * SystemMapHero
 * A professional system architecture diagram showing the flow from
 * chaotic inputs → constraint analysis → structured deliverable.
 *
 * Visual narrative:
 * 1. LEFT: Multiple incoming signals (data streams, events, requests)
 * 2. CENTER: Constraint processor (the "brain" that analyzes)
 * 3. RIGHT: Clean deliverable output (structured, validated)
 */
export function SystemMapHero({
  className,
  decorative = true,
  title = "System architecture diagram",
  description = "Diagram showing signals flowing through constraint analysis to produce a structured deliverable.",
}: SystemMapHeroProps): ReactElement {
  const motionSettings = useMotionSettings();
  const a11yId = useId();
  const titleId = `system-map-title-${a11yId}`;
  const descId = `system-map-desc-${a11yId}`;

  const draw = pathDrawVariants(motionSettings, { duration: 0.5 });
  const pulse = pulseVariants(motionSettings, { duration: 0.35, repeat: 2 });

  // Common SVG content shared between static and animated versions
  const renderDiagram = (animated: boolean) => {
    const Path = animated ? motion.path : "path";
    const Circle = animated ? motion.circle : "circle";
    const Line = animated ? motion.line : "line";

    const drawProps = (delay: number) =>
      animated ? { variants: draw, custom: delay } : {};
    const pulseProps = (delay: number) =>
      animated ? { variants: pulse, custom: delay } : {};

    return (
      <>
        {/* BACKGROUND GRID - Subtle blueprint aesthetic */}
        <g
          className={visualStrokeColor.muted}
          strokeWidth={0.5}
          opacity={0.35}
          vectorEffect="non-scaling-stroke"
        >
          {/* Vertical grid lines */}
          {[60, 120, 180, 240, 300, 360, 420, 480, 540].map((x) => (
            <line key={`v-${x}`} x1={x} y1={20} x2={x} y2={260} />
          ))}
          {/* Horizontal grid lines */}
          {[60, 100, 140, 180, 220].map((y) => (
            <line key={`h-${y}`} x1={20} y1={y} x2={580} y2={y} />
          ))}
        </g>

        {/* SECTION LABELS - Clear zone identification */}
        <g className={visualTextColor.secondary} fontSize="9" fontWeight="600" letterSpacing="0.12em">
          <text x="85" y="38">INPUTS</text>
          <text x="265" y="38">ANALYSIS</text>
          <text x="460" y="38">OUTPUT</text>
        </g>

        {/* LEFT ZONE: INPUT SIGNALS - Three distinct data streams */}
        
        {/* Signal source nodes */}
        <g
          className={cn("fill-white", visualStrokeColor.strong)}
          strokeWidth={visualStroke.thin}
          vectorEffect="non-scaling-stroke"
        >
          <Circle {...drawProps(0)} cx="50" cy="80" r="12" />
          <Circle {...drawProps(0.02)} cx="50" cy="140" r="12" />
          <Circle {...drawProps(0.04)} cx="50" cy="200" r="12" />
        </g>

        {/* Signal icons inside nodes */}
        <g
          className={visualStrokeColor.strong}
          strokeWidth={1.5}
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        >
          {/* Top node: data/database icon */}
          <Path {...drawProps(0.06)} d="M 44 77 h 12 M 44 80 h 12 M 44 83 h 12" />
          {/* Middle node: event/lightning icon */}
          <Path {...drawProps(0.08)} d="M 52 134 l -4 6 h 4 l -4 6" />
          {/* Bottom node: API/brackets icon */}
          <Path {...drawProps(0.1)} d="M 46 196 l -2 4 l 2 4 M 54 196 l 2 4 l -2 4" />
        </g>

        {/* Signal flow lines from sources to convergence */}
        <g
          className={visualStrokeColor.strong}
          strokeWidth={visualStroke.thin}
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        >
          <Path {...drawProps(0.12)} d="M 62 80 Q 100 80, 130 105" />
          <Path {...drawProps(0.14)} d="M 62 140 L 130 140" />
          <Path {...drawProps(0.16)} d="M 62 200 Q 100 200, 130 175" />
        </g>

        {/* Convergence point */}
        <g className="fill-white" stroke="none">
          <Circle {...drawProps(0.18)} cx="145" cy="140" r="8" className={cn("fill-white", visualStrokeColor.frame)} strokeWidth={visualStroke.thin} />
        </g>

        {/* CENTER ZONE: CONSTRAINT PROCESSOR - Hexagonal shape */}
        
        {/* Main processor hexagon */}
        <g
          className={cn("fill-surface-3", visualStrokeColor.strong)}
          strokeWidth={visualStroke.thin}
          vectorEffect="non-scaling-stroke"
        >
          <Path
            {...drawProps(0.22)}
            d="M 230 100 L 270 80 L 330 80 L 370 100 L 370 180 L 330 200 L 270 200 L 230 180 Z"
            className="fill-white"
          />
        </g>

        {/* Inner processor detail - circuit-like pattern */}
        <g
          className={visualStrokeColor.frame}
          strokeWidth={1}
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity={0.7}
        >
          {/* Horizontal analysis lines */}
          <Path {...drawProps(0.26)} d="M 250 120 h 100" />
          <Path {...drawProps(0.28)} d="M 250 140 h 100" />
          <Path {...drawProps(0.30)} d="M 250 160 h 100" />
          
          {/* Vertical connectors */}
          <Path {...drawProps(0.32)} d="M 280 110 v 70" />
          <Path {...drawProps(0.34)} d="M 320 110 v 70" />
        </g>

        {/* Constraint indicators inside processor */}
        <g className="fill-accent-electric" opacity={visualOpacity.accentStrong}>
          <Circle {...pulseProps(0)} cx="280" cy="120" r="4" />
          <Circle {...pulseProps(0.1)} cx="320" cy="140" r="4" />
          <Circle {...pulseProps(0.2)} cx="280" cy="160" r="4" />
        </g>

        {/* Processor label */}
        <g className={visualTextColor.label} fontSize="10" fontWeight="700" letterSpacing="0.08em">
          <text x="300" y="230" textAnchor="middle">CONSTRAINTS</text>
        </g>

        {/* Flow line: convergence → processor */}
        <g
          className="text-accent-electric"
          stroke="currentColor"
          strokeWidth={visualStroke.accent}
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity={visualOpacity.accent}
        >
          <Path {...drawProps(0.2)} d="M 153 140 L 228 140" />
          {/* Arrow head */}
          <Path {...drawProps(0.21)} d="M 218 135 L 228 140 L 218 145" />
        </g>

        {/* RIGHT ZONE: DELIVERABLE OUTPUT */}
        
        {/* Flow line: processor → deliverable */}
        <g
          className="text-accent-electric"
          stroke="currentColor"
          strokeWidth={visualStroke.accent}
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity={visualOpacity.accent}
        >
          <Path {...drawProps(0.4)} d="M 372 140 L 440 140" />
          <Path {...drawProps(0.41)} d="M 430 135 L 440 140 L 430 145" />
        </g>

        {/* Deliverable document shape */}
        <g
          className={cn("fill-white", visualStrokeColor.strong)}
          strokeWidth={visualStroke.thin}
          vectorEffect="non-scaling-stroke"
        >
          {/* Document with folded corner */}
          <Path
            {...drawProps(0.44)}
            d="M 455 80 L 545 80 L 545 200 L 455 200 L 455 80 M 525 80 L 545 100 L 525 100 Z"
          />
        </g>

        {/* Document content lines */}
        <g
          className={visualStrokeColor.frame}
          strokeWidth={1.5}
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        >
          <Line {...drawProps(0.48)} x1="470" y1="120" x2="530" y2="120" />
          <Line {...drawProps(0.50)} x1="470" y1="135" x2="520" y2="135" />
          <Line {...drawProps(0.52)} x1="470" y1="150" x2="525" y2="150" />
          <Line {...drawProps(0.54)} x1="470" y1="165" x2="510" y2="165" />
        </g>

        {/* Checkmark indicating validated output */}
        <g
          className="text-accent-electric"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        >
          <Path {...drawProps(0.58)} d="M 475 182 l 6 6 l 14 -14" />
        </g>

        {/* Output success indicator */}
        <g className="fill-accent-electric" opacity={visualOpacity.accentStrong}>
          <Circle {...pulseProps(0.3)} cx="540" cy="85" r="5" />
        </g>

        {/* Deliverable label */}
        <g className={visualTextColor.label} fontSize="10" fontWeight="700" letterSpacing="0.08em">
          <text x="500" y="230" textAnchor="middle">BLUEPRINT</text>
        </g>

        {/* ACCENT DOTS - Visual rhythm markers */}
        <g className="fill-accent-electric" opacity={0.5}>
          <circle cx="95" cy="105" r="2" />
          <circle cx="95" cy="175" r="2" />
          <circle cx="400" cy="110" r="2" />
          <circle cx="400" cy="170" r="2" />
        </g>
      </>
    );
  };

  const svgProps = {
    viewBox: "0 0 600 280",
    className: "h-full w-full",
    focusable: "false" as const,
    "aria-hidden": decorative ? true : undefined,
    role: decorative ? undefined : ("img" as const),
    "aria-labelledby": decorative ? undefined : titleId,
    "aria-describedby": decorative ? undefined : descId,
  };

  const a11yContent = decorative ? null : (
    <>
      <title id={titleId}>{title}</title>
      <desc id={descId}>{description}</desc>
    </>
  );

  return (
    <div className={cn("relative h-full w-full", className)}>
      {motionSettings.reduced ? (
        <svg {...svgProps}>
          {a11yContent}
          {renderDiagram(false)}
        </svg>
      ) : (
        <motion.svg
          {...svgProps}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {a11yContent}
          {renderDiagram(true)}
        </motion.svg>
      )}
    </div>
  );
}
