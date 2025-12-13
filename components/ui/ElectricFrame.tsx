"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ElectricFrameProps {
  children: ReactNode;
  className?: string;
}

export default function ElectricFrame({ children, className = "" }: ElectricFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-accent-electric"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(0, 124, 255, 0)",
            "0 0 0 4px rgba(0, 124, 255, 0.55)",
            "0 0 0 0 rgba(0, 124, 255, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative bg-white rounded-lg p-6 border border-gray-200">
        {children}
      </div>
    </div>
  );
}