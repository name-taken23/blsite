"use client";

import { motion } from "framer-motion";
import SmartCard from "@/components/ui/SmartCard";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import { fadeIn, staggerContainer, slideUp, scaleInSpring } from "@/lib/motion";
import { Zap, Layers, Sparkles, Cpu } from "lucide-react";

const features = [
  {
    title: "AI-Powered Solutions",
    copy: "Harness the power of artificial intelligence to automate and optimize your business processes.",
    icon: Sparkles,
    gradient: "from-gray-900 to-accent-electric",
  },
  {
    title: "Rapid Development",
    copy: "Lightning-fast delivery without compromising quality. Ship your product in record time.",
    icon: Zap,
    gradient: "from-black to-blue-600",
  },
  {
    title: "Scalable Architecture",
    copy: "Built to grow with your business. Handle millions of users with ease and reliability.",
    icon: Layers,
    gradient: "from-gray-800 to-blue-500",
  },
  {
    title: "Modern Tech Stack",
    copy: "Cutting-edge technologies and frameworks for maximum performance and efficiency.",
    icon: Cpu,
    gradient: "from-gray-900 to-blue-400",
  },
];

export default function FeatureGrid() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-accent-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto max-w-5xl text-center mb-16">
          <motion.p
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.4em] text-accent-electric mb-4"
          >
            Advanced Capabilities
          </motion.p>
          <motion.h2
            variants={slideUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Built for <span className="text-gradient">Excellence</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto"
          >
            Engineered solutions that combine innovation with precision to deliver exceptional results.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleInSpring}
            >
              <SmartCard className="group relative overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                {/* Icon with gradient */}
                <motion.div
                  className="w-14 h-14 rounded-xl bg-white border border-gray-100 p-3 mb-6 shadow-sm flex items-center justify-center"
                  whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(0, 124, 255, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-8 h-8 text-gray-900 group-hover:text-accent-electric transition-colors duration-300" />
                </motion.div>

                <AnimatedDivider className="mb-4" />
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-accent-electric transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.copy}
                </p>
              </SmartCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


