"use client";

import type { ReactElement } from "react";
import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SystemMapMotif } from "./SystemMapMotif";
import { visualOpacity, visualStroke } from "./visualTokens";
import { pathDrawVariants, pulseVariants, useMotionSettings } from "@/lib/motion-framer";

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
 * Hero-grade system map diagram with understated in-view motion.
 * - Path draw triggers once on viewport entry.
 * - Node pulse is subtle and stops after a few seconds.
 * - Respects prefers-reduced-motion (renders static).
 */
export function SystemMapHero({
  className,
  decorative = true,
  title = "System map diagram",
  description = "Schematic diagram showing Signal, Constraints, and Deliverable as connected clusters.",
}: SystemMapHeroProps): ReactElement {
  const motionSettings = useMotionSettings();
  const a11yId = useId();
  const titleId = `system-map-title-${a11yId}`;
  const descId = `system-map-desc-${a11yId}`;

  const draw = pathDrawVariants(motionSettings, { duration: 0.4 });
  const pulse = pulseVariants(motionSettings, { duration: 0.3, repeat: 2 });

  return (
    <div
      className={cn("relative h-full w-full", className)}
      data-system-map-hero={motionSettings.reduced ? "reduced" : "full"}
    >
      <SystemMapMotif
        className="absolute inset-0 h-full w-full"
        decorative={true}
        framed
        grid
      />

      {motionSettings.reduced ? (
        <svg
          aria-hidden={decorative ? true : undefined}
          role={decorative ? undefined : "img"}
          aria-labelledby={decorative ? undefined : titleId}
          aria-describedby={decorative ? undefined : descId}
          viewBox="0 0 420 180"
          className="absolute inset-0 h-full w-full"
          focusable="false"
        >
          {decorative ? null : (
            <>
              <title id={titleId}>{title}</title>
              <desc id={descId}>{description}</desc>
            </>
          )}
          {/* SIGNAL cluster */}
          <g
            className="stroke-gray-300 dark:stroke-gray-600"
            strokeWidth={visualStroke.thin}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            opacity={0.9}
          >
            <path d="M 46 96 C 60 84, 72 108, 86 96 S 112 108, 126 96 S 152 84, 166 96" />
            <path d="M 66 120 L 66 104" />
          </g>

          {/* CONSTRAINTS cluster */}
          <g
            className="stroke-gray-300 dark:stroke-gray-600"
            strokeWidth={visualStroke.hairline}
            fill="none"
            vectorEffect="non-scaling-stroke"
            opacity={0.85}
          >
            <rect x="196" y="118" width="60" height="34" rx="10" />
            <path d="M 206 129 h 20" />
            <path d="M 206 139 h 32" />
            <path d="M 206 149 h 14" />
          </g>

          <g className="text-accent-electric" stroke="currentColor" strokeWidth={visualStroke.accent} fill="none" vectorEffect="non-scaling-stroke" opacity={visualOpacity.accent}>
            <path d="M 166 96 L 206 126" />
            <path d="M 256 126 L 290 82" />
          </g>

          {/* DELIVERABLE cluster */}
          <g
            className="stroke-gray-300 dark:stroke-gray-600"
            strokeWidth={visualStroke.thin}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            opacity={0.9}
          >
            <path d="M 306 110 h 58 a 10 10 0 0 1 10 10 v 24 a 10 10 0 0 1 -10 10 h -58 a 10 10 0 0 1 -10 -10 v -24 a 10 10 0 0 1 10 -10 z" />
            <path d="M 312 128 h 34" />
            <path d="M 312 140 h 28" />
            <path d="M 314 152 l 6 6 l 12 -14" />
          </g>

          <g className="text-accent-electric" opacity={visualOpacity.accentStrong}>
            <circle cx="142" cy="56" r="2.8" fill="currentColor" />
            <circle cx="226" cy="96" r="2.8" fill="currentColor" />
            <circle cx="314" cy="44" r="2.8" fill="currentColor" />
          </g>

          {/* Labels */}
          <g className="fill-gray-600 dark:fill-gray-300" opacity={0.95}>
            <text x="46" y="150" fontSize="11" fontWeight="700" letterSpacing="0.1em">
              SIGNAL
            </text>
            <text x="196" y="166" fontSize="11" fontWeight="700" letterSpacing="0.1em">
              CONSTRAINTS
            </text>
            <text x="306" y="100" fontSize="11" fontWeight="700" letterSpacing="0.1em">
              DELIVERABLE
            </text>
          </g>

          <g className="text-accent-electric" opacity={0.3}>
            <circle cx="40" cy="146" r="2" fill="currentColor" />
            <circle cx="190" cy="162" r="2" fill="currentColor" />
            <circle cx="300" cy="96" r="2" fill="currentColor" />
          </g>
        </svg>
      ) : (
        <motion.svg
          aria-hidden={decorative ? true : undefined}
          role={decorative ? undefined : "img"}
          aria-labelledby={decorative ? undefined : titleId}
          aria-describedby={decorative ? undefined : descId}
          viewBox="0 0 420 180"
          className="absolute inset-0 h-full w-full"
          focusable="false"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.55 }}
        >
          {decorative ? null : (
            <>
              <title id={titleId}>{title}</title>
              <desc id={descId}>{description}</desc>
            </>
          )}
          {/* SIGNAL cluster */}
          <g
            className="stroke-gray-300 dark:stroke-gray-600"
            strokeWidth={visualStroke.thin}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            opacity={0.9}
          >
            <motion.path
              variants={draw}
              custom={0}
              d="M 46 96 C 60 84, 72 108, 86 96 S 112 108, 126 96 S 152 84, 166 96"
            />
            <motion.path variants={draw} custom={0.05} d="M 66 120 L 66 104" />
          </g>

          {/* CONSTRAINTS cluster: a tight schematic block */}
          <g
            className="stroke-gray-300 dark:stroke-gray-600"
            strokeWidth={visualStroke.hairline}
            fill="none"
            vectorEffect="non-scaling-stroke"
            opacity={0.85}
          >
            <motion.rect variants={draw} custom={0.1} x="196" y="118" width="60" height="34" rx="10" />
            <motion.path variants={draw} custom={0.12} d="M 206 129 h 20" />
            <motion.path variants={draw} custom={0.14} d="M 206 139 h 32" />
            <motion.path variants={draw} custom={0.16} d="M 206 149 h 14" />
          </g>

          <g className="text-accent-electric" stroke="currentColor" strokeWidth={visualStroke.accent} fill="none" vectorEffect="non-scaling-stroke" opacity={visualOpacity.accent}>
            <motion.path variants={draw} custom={0.2} d="M 166 96 L 206 126" />
            <motion.path variants={draw} custom={0.25} d="M 256 126 L 290 82" />
          </g>

          {/* DELIVERABLE cluster: document + check */}
          <g
            className="stroke-gray-300 dark:stroke-gray-600"
            strokeWidth={visualStroke.thin}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            opacity={0.9}
          >
            <motion.path variants={draw} custom={0.3} d="M 306 110 h 58 a 10 10 0 0 1 10 10 v 24 a 10 10 0 0 1 -10 10 h -58 a 10 10 0 0 1 -10 -10 v -24 a 10 10 0 0 1 10 -10 z" />
            <motion.path variants={draw} custom={0.34} d="M 312 128 h 34" />
            <motion.path variants={draw} custom={0.36} d="M 312 140 h 28" />
            <motion.path variants={draw} custom={0.4} d="M 314 152 l 6 6 l 12 -14" />
          </g>

          <g className="text-accent-electric" opacity={visualOpacity.accentStrong}>
            <motion.circle variants={pulse} custom={0} cx="142" cy="56" r="2.8" fill="currentColor" />
            <motion.circle variants={pulse} custom={0.12} cx="226" cy="96" r="2.8" fill="currentColor" />
            <motion.circle variants={pulse} custom={0.24} cx="314" cy="44" r="2.8" fill="currentColor" />
          </g>

          {/* Labels */}
          <g className="fill-gray-600 dark:fill-gray-300" opacity={0.95}>
            <text x="46" y="150" fontSize="11" fontWeight="700" letterSpacing="0.1em">
              SIGNAL
            </text>
            <text x="196" y="166" fontSize="11" fontWeight="700" letterSpacing="0.1em">
              CONSTRAINTS
            </text>
            <text x="306" y="100" fontSize="11" fontWeight="700" letterSpacing="0.1em">
              DELIVERABLE
            </text>
          </g>

          <g className="text-accent-electric" opacity={0.3}>
            <circle cx="40" cy="146" r="2" fill="currentColor" />
            <circle cx="190" cy="162" r="2" fill="currentColor" />
            <circle cx="300" cy="96" r="2" fill="currentColor" />
          </g>
        </motion.svg>
      )}
    </div>
  );
}
