"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Database, Layers } from "lucide-react";

const pillars = [
  {
    Icon: Sparkles,
    title: "Precision Engineering",
    text: "We build resilient, maintainable systems that reliably deliver intelligent behaviour in production.",
  },
  {
    Icon: Database,
    title: "Scalable Data Platforms",
    text: "Data architectures that power real-time insights and long-term model performance.",
  },
  {
    Icon: Layers,
    title: "Platform Modernization",
    text: "Migrate, modernize and integrate systems to unlock new automation and intelligence.",
  },
];

export default function ValuePillars() {
  const shouldReduce = useReducedMotion();
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-xl text-accent-electric font-semibold">Our approach</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What makes our services different</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: shouldReduce ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: shouldReduce ? 0 : 0.6 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="w-14 h-14 rounded-lg bg-accent-electric/10 text-accent-electric flex items-center justify-center mb-4">
                  <p.Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>

                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-br pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
