"use client";

import { motion } from "framer-motion";

interface TechDividerProps {
  className?: string;
}

export default function TechDivider({ className = "" }: TechDividerProps) {
  return (
    <div className={`relative py-16 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gray-200 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-electric to-transparent opacity-50"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
      <div className="relative flex justify-center">
        <motion.div
          className="w-3 h-3 bg-gradient-to-r from-gray-900 to-accent-electric rounded-full shadow-[0_0_10px_rgba(0,124,255,0.4)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}