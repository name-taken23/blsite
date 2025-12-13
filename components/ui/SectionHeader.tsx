"use client";

import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = ""
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-16 ${centered ? "text-center" : ""} ${className}`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2
        variants={slideUp}
        className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeIn}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}