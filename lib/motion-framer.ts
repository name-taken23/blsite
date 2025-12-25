"use client";

import { useReducedMotion, type Transition, type Variants } from "framer-motion";

export const motionTokens = {
  // Keep default transitions in the 150–400ms band.
  durationFast: 0.2,
  durationNormal: 0.3,
  durationSlow: 0.4,
  easeStandard: [0.4, 0, 0.2, 1] as const,
} as const;

export function useMotionSettings(): { reduced: boolean; enabled: boolean } {
  const reducedRaw = useReducedMotion();
  const reduced = reducedRaw ?? false;
  return { reduced, enabled: !reduced };
}

export function fadeSlideInVariants(options?: {
  y?: number;
  duration?: number;
}): Variants {
  const y = options?.y ?? 8;
  const duration = options?.duration ?? motionTokens.durationNormal;

  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: motionTokens.easeStandard,
      },
    },
  };
}

export function pathDrawVariants(settings: { reduced: boolean }, options?: { duration?: number }): Variants {
  const duration = options?.duration ?? motionTokens.durationSlow;

  return {
    hidden: { pathLength: settings.reduced ? 1 : 0, opacity: settings.reduced ? 1 : 0 },
    visible: (delay: number = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: settings.reduced
        ? ({ duration: 0 } as Transition)
        : ({ duration, ease: motionTokens.easeStandard, delay } as Transition),
    }),
  };
}

export function pulseVariants(settings: { reduced: boolean }, options?: { duration?: number; repeat?: number }): Variants {
  const duration = options?.duration ?? motionTokens.durationNormal;
  const repeat = options?.repeat ?? 2;

  return {
    hidden: { scale: 1, opacity: 1 },
    visible: (delay: number = 0) => ({
      scale: settings.reduced ? 1 : [1, 1.12, 1],
      opacity: settings.reduced ? 1 : [1, 0.92, 1],
      transition: settings.reduced
        ? ({ duration: 0 } as Transition)
        : ({
            duration,
            ease: motionTokens.easeStandard,
            repeat,
            repeatType: "mirror",
            delay,
          } as Transition),
    }),
  };
}
