"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, Zap, Users, Shield } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";

const results = [
  {
    icon: TrendingUp,
    metric: "3x Faster",
    label: "Performance Gains",
    description: "Average speed improvement across systems",
  },
  {
    icon: Zap,
    metric: "4-8 Weeks",
    label: "Rapid Delivery",
    description: "From concept to production-ready systems",
  },
  {
    icon: Users,
    metric: "10M+",
    label: "Users Scaled",
    description: "AI systems serving millions daily",
  },
  {
    icon: Shield,
    metric: "100%",
    label: "SOC2 Compliant",
    description: "Enterprise-grade security by design",
  },
];

export default function ResultsShowcase() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" aria-hidden="true" />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-electric/10 blur-[120px] rounded-full"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={shouldReduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white"
            >
              Proven Results
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Real metrics from systems we&apos;ve deployed
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-accent-electric/50 transition-all duration-300 hover:bg-gray-800/70">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-accent-electric/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-electric/20 transition-colors">
                    <result.icon className="w-7 h-7 text-accent-electric" />
                  </div>

                  {/* Metric */}
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                    {result.metric}
                  </div>

                  {/* Label */}
                  <div className="text-accent-electric font-bold mb-3 text-lg">
                    {result.label}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
