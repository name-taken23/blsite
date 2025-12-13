"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroCanvas from "@/components/interactive/HeroCanvas";
import MagneticButton from "@/components/ui/MagneticButton";
import TextReveal from "@/components/ui/TextReveal";
import { slideUp, fadeIn, pulse } from "@/lib/motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-end pb-40 md:pb-64 overflow-hidden bg-white">
      
      {/* Map Background - Constrained to top area */}
      <div className="absolute inset-x-0 top-0 h-[75vh] opacity-100">
        <HeroCanvas />
      </div>
      
      {/* Strong gradient floor to ensure text readability */}
      <div className="absolute inset-x-0 bottom-0 h-[60vh] bg-gradient-to-t from-white via-white via-40% to-transparent z-0 pointer-events-none" />

      {/* Top gradient for header protection */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-0 pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        
        {/* Main headline */}
        <motion.div
          variants={slideUp}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <TextReveal 
            text="BLACKLAKE" 
            className="justify-center"
            wordClassName="bg-gradient-to-r from-gray-900 via-accent-electric to-gray-900 bg-clip-text text-transparent bg-[length:200%_100%] font-bold"
          />
          <motion.h2
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="mt-6 text-xl md:text-2xl font-medium text-gray-900 tracking-tight"
          >
            Engineered for Complexity.{" "}
            <span className="text-gradient font-semibold">Scaled for Performance.</span>
          </motion.h2>
        </motion.div>
        
        {/* Description */}
        <motion.p
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mb-12 leading-relaxed"
        >
          A boutique engineering studio specializing in cloud architecture, 
          applied AI systems, and full-stack development. We build the systems 
          that power complex operations.
        </motion.p>
        
        {/* CTA buttons */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <MagneticButton href="/work">
            View Selected Work
          </MagneticButton>
          
          <Link href="/contact">
            <motion.button
              className="px-8 py-4 bg-white text-gray-800 font-medium rounded-lg shadow-lg hover:shadow-xl border border-gray-200 hover:border-accent-electric transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Check Availability
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-0 right-0 mx-auto w-fit z-20 flex flex-col items-center gap-2 text-gray-600 hover:text-accent-electric transition-colors group"
        variants={pulse}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}
