"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeSlideInVariants, useMotionSettings } from "@/lib/motion-framer";
import { SectionSeparatorMotif } from "@/components/visual/SectionSeparatorMotif";

export default function AnimatedSeparator(props: {
  text: string;
  align?: "start" | "center" | "end";
  className?: string;
}): ReactElement {
  const { text, align = "start", className } = props;
  const motionSettings = useMotionSettings();

  if (motionSettings.reduced) {
    return <SectionSeparatorMotif text={text} align={align} className={cn("h-8 w-full", className)} />;
  }

  return (
    <motion.div
      aria-hidden="true"
      className={cn(className)}
      variants={fadeSlideInVariants({ y: 6, duration: 0.25 })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <SectionSeparatorMotif text={text} align={align} className="h-8 w-full" />
    </motion.div>
  );
}
