"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedDividerProps {
  className?: string;
}

export default function AnimatedDivider({ className = "" }: AnimatedDividerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`h-1 w-full rounded-full bg-gradient-to-r from-transparent via-accent-electric to-transparent ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.8,
              ease: "easeInOut",
            }
      }
      style={{ originX: 0 }}
    />
  );
}
