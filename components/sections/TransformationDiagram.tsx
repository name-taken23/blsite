"use client";

import { motion } from "framer-motion";
import { Search, BrainCircuit, Rocket, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";

const steps = [
  {
    icon: Search,
    number: "01",
    label: "Discovery & Strategy",
    description: "We work with you to identify high-impact opportunities and create a roadmap for success.",
  },
  {
    icon: BrainCircuit,
    number: "02",
    label: "Prototyping & Development",
    description: "Our engineers build and refine your AI models, integrating them with your existing systems.",
  },
  {
    icon: Rocket,
    number: "03",
    label: "Deployment & Scaling",
    description: "We deploy your AI solution to production, ensuring it's scalable, reliable, and performant.",
  },
];

export default function TransformationDiagram() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-electric/10 rounded-full text-accent-electric text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              Our Process
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-900"
            >
              From Idea to Impact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto"
            >
              Our proven process ensures we deliver AI solutions that drive real business value.
            </motion.p>
          </div>

          {/* Desktop Flow */}
          <div className="hidden md:block max-w-5xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-3 gap-8 relative z-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="relative"
                  >
                    {/* Card */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent-electric/30 transition-all duration-300 group h-full">
                      {/* Icon container */}
                      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-accent-electric/30 transition-colors duration-300">
                        <step.icon className="w-7 h-7 text-gray-900 group-hover:text-accent-electric transition-colors duration-300" />
                      </div>
                      
                      {/* Step number */}
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                        Phase {step.number}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.label}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow connector (not on last item) */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 hidden lg:block">
                        <div className="w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm">
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Results bar */}
            <motion.div
              variants={fadeIn}
              className="mt-12 bg-gray-900 rounded-2xl p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-bold">The Result</div>
                  <div className="text-gray-400 text-sm">A measurable business advantage, powered by AI.</div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4-8</div>
                  <div className="text-xs text-gray-400">Weeks to MVP</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10x</div>
                  <div className="text-xs text-gray-400">Potential ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-gray-400">Future-Proof</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Flow (Vertical) */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <step.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Phase {step.number}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {step.label}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vertical connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-5 h-5 text-gray-300 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Mobile results */}
            <motion.div
              variants={fadeIn}
              className="bg-gray-900 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                <div className="text-white font-bold">Measurable Business Advantage</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-white">4-8w</div>
                  <div className="text-xs text-gray-400">MVP</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">10x</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">100%</div>
                  <div className="text-xs text-gray-400">Future-Proof</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
