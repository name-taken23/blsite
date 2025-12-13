"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Search, Beaker, Rocket, RefreshCw } from "lucide-react";

const steps = [
  { 
    icon: Search, 
    title: "Discovery", 
    description: "Deep-dive into your business challenges and technical landscape" 
  },
  { 
    icon: Beaker, 
    title: "Pilot", 
    description: "Build a focused proof-of-concept to validate the approach" 
  },
  { 
    icon: Rocket, 
    title: "Delivery", 
    description: "Ship production-grade systems with rigorous testing" 
  },
  { 
    icon: RefreshCw, 
    title: "Operate & Improve", 
    description: "Continuous monitoring, optimization, and iteration" 
  },
];

export default function ProcessRail() {
  return (
    <section className="section-padding bg-gray-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-electric/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeIn}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-electric mb-4"
          >
            How We Work
          </motion.p>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            From Concept to Production
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-gray-400 max-w-xl mx-auto"
          >
            A battle-tested methodology that ensures we deliver on time, every time.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-gray-700 to-transparent" />
              )}
              
              {/* Step number badge */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent-electric text-xs font-bold flex items-center justify-center">
                {i + 1}
              </div>
              
              {/* Icon */}
              <motion.div
                className="w-20 h-20 mx-auto rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-6 group-hover:border-accent-electric/50 transition-colors"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <step.icon className="w-8 h-8 text-gray-400 group-hover:text-accent-electric transition-colors" />
              </motion.div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent-electric transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
