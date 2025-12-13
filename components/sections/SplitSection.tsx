"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import TextReveal from "@/components/ui/TextReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideInRight, slideInLeft } from "@/lib/motion";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";

export default function SplitSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const benefits = [
    "Rapid Model Fine-tuning",
    "Enterprise RAG Pipelines",
    "MLOps & Monitoring",
    "SOC2 Compliant Data Handling",
  ];

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-gray-50/50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Image side with parallax */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative h-[500px] group"
          >
            {/* Main card */}
            <motion.div
              style={{ y }}
              className="relative h-full rounded-3xl bg-gradient-to-br from-gray-900/5 via-accent-electric/10 to-gray-900/5 shadow-2xl overflow-hidden"
            >
              {/* Glass layer */}
              <div className="absolute inset-4 rounded-2xl border border-white/40 bg-white/30 backdrop-blur-xl" />
              
              {/* Animated gradient overlay - subtle */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-electric/10 to-blue-900/10"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating orbs - optimized */}
              <motion.div
                className="absolute top-10 left-10 w-20 h-20 bg-accent-electric/30 rounded-full blur-xl"
                style={{ willChange: "transform" }}
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 right-10 w-32 h-32 bg-blue-900/20 rounded-full blur-xl"
                style={{ willChange: "transform" }}
                animate={{
                  y: [8, -8, 8],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              {/* Content placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <motion.div
                    className="text-6xl font-bold text-gradient"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    10M+
                  </motion.div>
                  <div className="text-sm uppercase tracking-[0.4em] text-accent-electric font-semibold">
                    Predictions Served
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-gradient mb-1">98%</div>
              <div className="text-xs text-gray-600 font-medium">Client Satisfaction</div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Transform Your <span className="text-gradient">Data</span> Into Intelligence
              </h2>
            </motion.div>
            
            <AnimatedDivider />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              We partner with forward-thinking enterprises to build autonomous agents and predictive systems that drive real business value. Our elite engineering team delivers solutions that exceed expectations.
            </motion.p>

            {/* Benefits list */}
            <motion.div
              className="space-y-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4,
                  },
                },
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-accent-electric/10 flex items-center justify-center group-hover:bg-accent-electric/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-accent-electric" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <MagneticButton>
                Start Your Project
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

