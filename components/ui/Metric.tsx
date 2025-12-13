"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

interface MetricProps {
  value: string;
  label: string;
}

export default function Metric({ value, label }: MetricProps) {
  return (
    <motion.div
      variants={fadeIn}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-display font-bold text-accent-electric mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-600 font-medium">
        {label}
      </div>
    </motion.div>
  );
}