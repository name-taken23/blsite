"use client";

import { motion, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function StickyCtaBar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      // Show after scrolling 800px (past hero)
      setIsVisible(latest > 800);
    });

    return () => unsubscribe();
  }, [scrollY]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <div className="pointer-events-auto bg-gray-900/95 backdrop-blur-lg border border-accent-electric/30 rounded-full shadow-2xl shadow-accent-electric/20 px-8 py-4 flex items-center gap-6">
        <div className="hidden sm:block">
          <div className="text-white font-bold text-sm">Start Your AI Journey</div>
          <div className="text-gray-400 text-xs">Free consultation available</div>
        </div>
        
        <Link href="/contact">
          <button className="bg-accent-electric hover:bg-accent-electric/90 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-electric/30">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
