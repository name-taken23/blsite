import { cn } from "@/lib/utils";

/**
 * Site motion language
 * - Keep durations in the 150–400ms band by default.
 * - Always include `motion-reduce:*` guards for non-essential motion.
 */
export const motionDurations = {
  fast: "duration-fast", // 200ms (tailwind token)
  normal: "duration-normal", // 300ms
  slow: "duration-slow", // 500ms (avoid for most interactions)
} as const;

export const motionEasings = {
  standard: "ease-out",
} as const;

export const motionClasses = {
  /**
   * Premium hover/focus for clickable tiles.
   * - Lift is subtle.
   * - Border shift is subtle.
   * - Motion is removed under reduced-motion.
   */
  interactiveTile: cn(
    "transition-all",
    motionDurations.fast,
    motionEasings.standard,
    "hover:-translate-y-1",
    "motion-reduce:transition-none motion-reduce:transform-none"
  ),

  /** Like interactiveTile but tuned for smaller cards. */
  interactiveCard: cn(
    "transition-all",
    motionDurations.fast,
    motionEasings.standard,
    "hover:-translate-y-0.5",
    "motion-reduce:transition-none motion-reduce:transform-none"
  ),

  /** Focus ring treatment (no motion required, but kept consistent). */
  focusRing: cn(
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric/40",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-surface-2"
  ),
} as const;
