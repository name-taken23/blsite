import { Variants } from "framer-motion";

// Smooth easing curves for premium feel
export const springConfig = {
  type: "spring",
  stiffness: 260,
  damping: 22,
  mass: 0.6,
};

export const smoothEase = [0.22, 0.61, 0.36, 1];

// Core animations
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

export const slideUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

// Scale animations
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

export const scaleInSpring: Variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: springConfig,
  },
};

// Blur animations
export const blurIn: Variants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

// Stagger containers
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const staggerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

export const staggerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Page transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// Parallax effects
export const parallax: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const parallaxSlow = (depth: number = 20) => ({
  initial: { y: 0 },
  animate: (custom: number) => ({
    y: custom * depth,
    transition: {
      duration: 0,
    },
  }),
});

// Hover animations
export const hoverScale: Variants = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const hoverLift: Variants = {
  initial: { y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
  whileHover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0, 124, 255, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const hoverGlow: Variants = {
  initial: { filter: "brightness(1)" },
  whileHover: {
    filter: "brightness(1.1)",
    transition: {
      duration: 0.3,
    },
  },
};

// Magnetic hover effect
export const magneticHover = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  whileTap: {
    scale: 0.95,
  },
};

// Rotation animations
export const rotateIn: Variants = {
  initial: { opacity: 0, rotate: -10 },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

// 3D perspective animations
export const flip3D: Variants = {
  initial: { opacity: 0, rotateY: 90 },
  animate: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

export const tilt3D = {
  initial: { rotateX: 0, rotateY: 0 },
  whileHover: {
    rotateX: 5,
    rotateY: 5,
    transition: {
      duration: 0.3,
    },
  },
};

// Reveal animations
export const revealFromLeft: Variants = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

export const revealFromBottom: Variants = {
  initial: { clipPath: "inset(100% 0 0 0)" },
  animate: {
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

// Pulse animations
export const pulse: Variants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Shimmer effect
export const shimmer: Variants = {
  initial: { backgroundPosition: "-200% 0" },
  animate: {
    backgroundPosition: "200% 0",
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};