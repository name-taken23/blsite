"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends Omit<HTMLMotionProps<"section">, "ref"> {
  size?: "sm" | "md" | "lg";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className = "", size = "md", ...props }, ref) => {
    const sizes = {
      sm: "py-12 md:py-16",
      md: "py-20 md:py-32",
      lg: "py-24 md:py-40",
    };

    return (
      <motion.section
        ref={ref}
        className={cn("w-full", sizes[size], className)}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";

export default Section;