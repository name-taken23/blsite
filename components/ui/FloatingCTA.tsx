"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function FloatingCTA() {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-accent-electric text-white shadow-lg hover:shadow-xl flex items-center justify-center group"
      style={{ opacity, scale }}
      whileHover={{ scale: 1.1, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-accent-electric"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}
