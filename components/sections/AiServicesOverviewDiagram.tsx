"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Code2, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    label: "AI Engineering",
    description: "Building the core intelligence of your applications.",
  },
  {
    icon: Cloud,
    label: "Cloud Modernization",
    description: "Optimizing your infrastructure for AI workloads.",
  },
  {
    icon: Code2,
    label: "Intelligent Apps",
    description: "Creating AI-powered user experiences.",
  },
];

export default function AiServicesOverviewDiagram() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            A Holistic Approach to AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            We combine expertise in AI engineering, cloud infrastructure, and application development to deliver end-to-end solutions.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:grid grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center p-8 bg-white rounded-2xl border border-gray-200"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gray-100 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-accent-electric" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.label}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="md:hidden space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gray-100 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent-electric" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{service.label}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
