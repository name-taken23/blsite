"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

const clients = [
  { name: "Acme Corp", logo: "AC" },
  { name: "TechFlow", logo: "TF" },
  { name: "DataSync", logo: "DS" },
  { name: "CloudBase", logo: "CB" },
  { name: "AIVentures", logo: "AI" },
  { name: "NexGen", logo: "NG" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.p
            variants={fadeIn}
            className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-12"
          >
            Trusted by Forward-Thinking Enterprises
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client) => (
              <motion.div
                key={client.name}
                variants={fadeIn}
                className="flex items-center justify-center group"
              >
                <div className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-accent-electric/30 group-hover:bg-blue-50/50 transition-all duration-300">
                  <span className="text-2xl font-bold text-gray-300 group-hover:text-accent-electric transition-colors">
                    {client.logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
