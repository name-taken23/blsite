"use client";

import { motion, useInView } from "framer-motion";
import { Brain, Database, Cloud, Zap, Cpu, Search, ArrowRight } from "lucide-react";
import { useRef } from "react";

const agentCycle = [
  { label: "Perceive", icon: Search, description: "Agents observe and ingest data from their environment." },
  { label: "Reason", icon: Brain, description: "Agents process information and decide on the best course of action." },
  { label: "Act", icon: Zap, description: "Agents execute actions and interact with other systems and users." },
];

const components = [
  { label: "LLM Core", icon: Brain },
  { label: "Long-Term Memory", icon: Database },
  { label: "Tools & APIs", icon: Cloud },
  { label: "Task Executor", icon: Cpu },
];

export default function AgentArchitectureDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding-lg bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Autonomous Agent Architecture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We architect autonomous agents that can perceive, reason, and act to solve complex problems and automate workflows.
          </motion.p>
        </div>

        {/* Diagram */}
        <div className="max-w-4xl mx-auto">
          {!isInView && <div className="h-[400px]" />}
          {isInView && (
            <div className="relative">
              {/* Agent Cycle Flow */}
              <div className="grid md:grid-cols-3 gap-8">
                {agentCycle.map((step, index) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-accent-electric" />
                    </div>
                    <div className="mt-3 font-semibold text-lg">{step.label}</div>
                    <p className="text-gray-400 text-sm mt-1">{step.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Connecting Lines to Core Components */}
              <div className="mt-16 relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                  {components.map((comp, index) => (
                    <motion.div
                      key={comp.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.15 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
                        <comp.icon className="w-7 h-7 text-emerald-400" />
                      </div>
                      <div className="mt-2 text-sm text-gray-300">{comp.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-12 text-sm text-gray-500 uppercase tracking-widest"
              >
                Core Agent Components
              </motion.p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
