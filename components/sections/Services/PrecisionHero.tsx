"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import Link from "next/link";

export default function PrecisionHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -40]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-accent-electric/8 rounded-full blur-[120px]"
          style={shouldReduce ? {} : { y, opacity }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-blue-600/6 rounded-full blur-[100px]"
          style={shouldReduce ? {} : { y: useTransform(scrollY, [0, 400], [0, 20]) }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto"
        >
          {/* Eyebrow with availability */}
          <motion.div
            variants={fadeIn}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-electric">
              Professional Software Engineering
            </span>
            <span className="px-3 py-1 bg-green-50 border border-green-200 rounded-full text-xs font-medium text-green-700 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Available Q1 2025
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeIn}
            className="text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]"
          >
            Enterprise-Grade Engineering
            <span className="block mt-3 bg-gradient-to-r from-accent-electric via-blue-500 to-accent-electric bg-clip-text text-transparent bg-[length:200%_100%]">
              Without the Enterprise Overhead
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeIn}
            className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Senior-level expertise in cloud architecture, applied AI, and full-stack development. 
            We build production systems that scale—from data pipelines processing millions of records 
            to real-time 5G infrastructure and beyond.
          </motion.p>

          {/* Trust indicators - enhanced */}
          <motion.div
            variants={fadeIn}
            className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-accent-electric/10 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-accent-electric" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Production Ready</div>
                <div className="text-sm text-gray-600">Battle-tested code, not prototypes</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-accent-electric/10 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-accent-electric" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Proven Results</div>
                <div className="text-sm text-gray-600">20x speedups, 1M+ daily records</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-accent-electric/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-accent-electric" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Direct Access</div>
                <div className="text-sm text-gray-600">Work directly with senior engineers</div>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton href="/contact">
              Discuss Your Project
            </MagneticButton>
            
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-6 py-4 text-gray-700 font-semibold hover:text-accent-electric transition-colors"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
