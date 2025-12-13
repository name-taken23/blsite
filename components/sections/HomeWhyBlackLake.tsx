"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideUp, scaleInSpring } from "@/lib/motion";
import MetricStack from "@/components/ui/MetricStack";
import TechDivider from "@/components/ui/TechDivider";
import { MessageSquare, Zap, Shield } from "lucide-react";

// Real achievements from actual projects
const metrics = [
  { value: "20x", label: "Query Performance Gain" },
  { value: "1M+", label: "Records Processed Daily" },
  { value: "5G", label: "Network Infrastructure" },
  { value: "100%", label: "Senior Attention" },
];

// Studio advantages - honest positioning
const advantages = [
  {
    icon: MessageSquare,
    title: "Direct Access",
    description: "You work directly with the engineer building your system. No project managers, no handoffs, no translation layers.",
  },
  {
    icon: Zap,
    title: "Senior Impact",
    description: "Every hour is productive. No ramp-up time, no learning on your dime. We bring 4+ years of production experience to day one.",
  },
  {
    icon: Shield,
    title: "Security-First",
    description: "Built-in best practices from day one. Proper auth, encryption, and audit logging—not bolted on as an afterthought.",
  },
];

export default function HomeWhyBlackLake() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background decoration - optimized */}
      <motion.div
        className="absolute top-40 left-10 w-96 h-96 bg-accent-electric/8 rounded-full blur-3xl"
        style={{ willChange: "opacity" }}
        animate={{
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeIn}
            className="text-sm font-semibold uppercase tracking-[0.4em] text-accent-electric mb-4"
          >
            The Studio Advantage
          </motion.p>
          <motion.h2
            variants={slideUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-900"
          >
            Why <span className="text-gradient">BlackLake</span>
          </motion.h2>
          <TechDivider className="mb-8" />
          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Boutique means focused. You get senior engineering talent without 
            agency overhead or offshore handoffs.
          </motion.p>
        </motion.div>

        {/* Real Metrics */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <MetricStack metrics={metrics} />
        </motion.div>

        {/* Studio Advantages Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={scaleInSpring}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-accent-electric/30 hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-white border border-gray-100 rounded-xl flex items-center justify-center mb-6 shadow-sm"
                  whileHover={{ scale: 1.1, y: -2, borderColor: "rgba(0, 124, 255, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <advantage.icon className="w-8 h-8 text-gray-900 group-hover:text-accent-electric transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent-electric transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
                
                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-electric to-transparent rounded-b-2xl shadow-[0_-2px_10px_rgba(0,124,255,0.3)]"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: "circOut" }}
                  style={{ originX: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
