"use client";

import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function ServicesCTA() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="section-padding-lg bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-electric/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            variants={fadeIn}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-electric mb-6"
          >
            Ready to Build?
          </motion.p>
          
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Let's Engineer Your
            <span className="block text-gradient mt-2">Competitive Advantage</span>
          </motion.h2>
          
          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-600 mb-10 max-w-xl mx-auto"
          >
            Whether you're starting from scratch or scaling existing systems, 
            we'll help you build intelligent infrastructure that delivers.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton href="/contact">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </span>
            </MagneticButton>
            
            <a
              href="/work"
              className="group inline-flex items-center gap-2 px-6 py-4 text-gray-700 font-semibold hover:text-accent-electric transition-colors"
            >
              Explore Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Value prop */}
          <motion.div
            variants={fadeIn}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500">
              Black Lake Engineering — <span className="font-semibold text-gray-700">senior engineers, not salespeople</span>. No layers, no overhead.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
