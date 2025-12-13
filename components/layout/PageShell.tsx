"use client";

import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import SystemRail from "@/components/ui/SystemRail";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingCTA from "@/components/ui/FloatingCTA";
import CustomCursor from "@/components/ui/CustomCursor";
import { pageTransition } from "@/lib/motion";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Custom cursor effect */}
      <CustomCursor />
      
      {/* Floating scroll to top button */}
      <FloatingCTA />
      
      {/* Thin rail adds ambient electric depth behind every page layout. */}
      <SystemRail className="pointer-events-none" />
      
      <Header />
      
      <motion.main
        className="flex-1 pt-20"
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.main>
      
      <Footer />
    </>
  );
}

