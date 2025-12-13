"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Calculate which section is active based on scroll position
      const sectionIndex = Math.floor(latest * 6);
      setActiveSection(Math.min(sectionIndex, 5));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const sections = ["Hero", "Architecture", "Services", "Process", "FAQ", "CTA"];

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-electric origin-left z-50"
        style={{ scaleX }}
      />
    </>
  );
}
