"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services as servicesData } from "@/app/services/data";
import { fadeIn, staggerContainer, scaleInSpring } from "@/lib/motion";
import SmartCard from "@/components/ui/SmartCard";
import TechDivider from "@/components/ui/TechDivider";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPremiumGrid() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
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
            Core Services
          </motion.p>
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            What We Build
          </motion.h2>
          <TechDivider className="mb-6" />
          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Specialized expertise across six core areas—from cloud infrastructure 
            to applied AI. Every solution backed by real production experience and measurable results.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {servicesData.map((service, i) => (
            <motion.div key={service.title} variants={scaleInSpring}>
              <SmartCard className="h-full group hover:shadow-2xl hover:border-accent-electric/20 transition-all duration-500">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-electric/10 to-accent-electric/5 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-8 h-8 text-accent-electric" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent-electric transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Highlight badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-200 mb-3">
                      <CheckCircle2 className="w-3 h-3 text-green-600" />
                      <span className="text-xs font-medium text-green-700">{service.highlight}</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 border border-gray-200 group-hover:bg-accent-electric/5 group-hover:border-accent-electric/20 group-hover:text-accent-electric transition-all"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Case study link */}
                    <Link 
                      href={service.caseStudy}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-electric hover:gap-2.5 transition-all group/link"
                    >
                      <span>View related work</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </SmartCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
