"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeIn, staggerContainer } from "@/lib/motion";

const metrics = [
  { value: 4, suffix: "+", label: "Years Engineering", description: "Enterprise & startup experience" },
  { value: 20, suffix: "x", label: "Performance Gains", description: "BigQuery exports: 15min → 30sec" },
  { value: 1, suffix: "M+", label: "Records Processed", description: "Data migration & pipelines" },
  { value: 5, suffix: "G", label: "Network Experience", description: "Real-time V2X systems" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count % 1 === 0 ? count : count.toFixed(1)}{suffix}
    </span>
  );
}

export default function MetricsGrid() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      
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
            Real Experience
          </motion.p>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
          >
            Battle-Tested Skills
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 text-center group hover:shadow-lg hover:border-accent-electric/20 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-accent-electric/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
