"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface SmartCardProps {
  children: ReactNode;
  className?: string;
}

export default function SmartCard({ children, className = "" }: SmartCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-white rounded-xl p-6 shadow-card border border-gray-100 hover:border-accent-electric/30 hover:shadow-card-hover transition-all duration-300 ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] rounded-b-xl shadow-[0_-2px_10px_rgba(0,124,255,0.3)]"
        style={{
          background: "linear-gradient(90deg, transparent, #007CFF, transparent)",
          originX: 0.5,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "circOut" }}
      />
    </motion.div>
  );
}
