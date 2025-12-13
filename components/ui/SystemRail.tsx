"use client";

import { motion } from "framer-motion";

interface SystemRailProps {
  className?: string;
}

export default function SystemRail({ className = "" }: SystemRailProps) {
  return (
    <div className={`fixed left-0 top-0 h-full w-px bg-gray-300/50 z-50 hidden md:block ${className}`}>
      {/* Traveling energy pulse */}
      <motion.div
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-accent-electric to-transparent"
        initial={{ opacity: 0 }}
        animate={{
          y: ["-100%", "100vh"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Secondary faster pulse */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
        initial={{ opacity: 0 }}
        animate={{
          y: ["-100%", "100vh"],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5,
        }}
      />
    </div>
  );
}