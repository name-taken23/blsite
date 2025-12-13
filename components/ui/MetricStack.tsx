"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import Metric from "./Metric";

interface MetricItem {
  value: string;
  label: string;
}

interface MetricStackProps {
  metrics: MetricItem[];
  className?: string;
}

export default function MetricStack({ metrics, className = "" }: MetricStackProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`grid grid-cols-1 sm:grid-cols-3 gap-6 ${className}`}
    >
      {metrics.map((metric, index) => (
        <Metric key={index} {...metric} />
      ))}
    </motion.div>
  );
}