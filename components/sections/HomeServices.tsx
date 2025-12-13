"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleInSpring } from "@/lib/motion";
import SmartCard from "@/components/ui/SmartCard";
import TechDivider from "@/components/ui/TechDivider";
import { Cloud, Brain, Layers } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "GCP, AWS, and multi-cloud infrastructure. BigQuery optimization, Pub/Sub pipelines, and infrastructure-as-code with Terraform. Built for scale, cost-optimized from day one.",
    gradient: "from-gray-900 to-accent-electric",
  },
  {
    icon: Brain,
    title: "Applied AI Systems",
    description: "RAG pipelines with Vertex AI and LangChain. Production-ready ML deployments, not prototypes. Vector databases, embeddings, and intelligent agents that actually work.",
    gradient: "from-black to-blue-600",
  },
  {
    icon: Layers,
    title: "Full-Stack Engineering",
    description: "React, React Native, Next.js frontends backed by robust APIs. Real-time systems with Kafka and WebSockets. TypeScript everywhere, tested thoroughly.",
    gradient: "from-gray-800 to-blue-500",
  },
];

export default function HomeServices() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements - optimized */}
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 bg-accent-electric/5 rounded-full blur-3xl"
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
            Core Expertise
          </motion.p>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-900"
          >
            What We <span className="text-gradient">Build</span>
          </motion.h2>
          <TechDivider className="mb-8" />
          <motion.p
            variants={fadeIn}
            className="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto"
          >
            Focused expertise across three core pillars. Deep knowledge, not superficial coverage.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleInSpring}
            >
              <SmartCard className="text-center group h-full hover:shadow-xl transition-all duration-300">
                {/* Animated icon container */}
                <motion.div
                  className="w-20 h-20 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -5, borderColor: "rgba(0, 124, 255, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-10 h-10 text-gray-900 group-hover:text-accent-electric transition-colors duration-300 relative z-10" />
                  
                  {/* Pulsing background - subtle */}
                  <motion.div
                    className="absolute inset-0 bg-accent-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-accent-electric transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn more link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="text-sm font-semibold text-accent-electric flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Link href="/services">Learn More</Link>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </SmartCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
