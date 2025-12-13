"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { FileText, Database, Share2, MessageSquare } from "lucide-react";

const layers = [
  {
    label: "Ingestion & Embedding",
    items: ["Proprietary Data Sources", "Data Cleaning & Chunking", "Vector Embeddings"],
    color: "bg-gray-200",
    textColor: "text-gray-700",
    icon: FileText,
  },
  {
    label: "Vector Storage & Indexing",
    items: ["Vector Databases", "Metadata Indexing", "Semantic Search Index"],
    color: "bg-gray-300",
    textColor: "text-gray-800",
    icon: Database,
  },
  {
    label: "Retrieval & Ranking",
    items: ["Semantic Querying", "Contextual Retrieval", "Re-ranking for Relevance"],
    color: "bg-accent-electric/20",
    textColor: "text-accent-electric",
    icon: Share2,
  },
  {
    label: "Generation & Synthesis",
    items: ["LLM-Powered Generation", "Synthesized Responses", "Source-Cited Answers"],
    color: "bg-accent-electric",
    textColor: "text-white",
    icon: MessageSquare,
  },
];

export default function RagArchitecture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section ref={ref} className="section-padding-lg bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Retrieval-Augmented Generation (RAG)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            We build sophisticated RAG pipelines that ground Large Language Models in your proprietary data, ensuring accurate, context-aware, and trustworthy responses.
          </motion.p>
        </div>

        {/* Diagram Container */}
        <div className="relative max-w-5xl mx-auto">
          {!isInView && <div className="h-[500px]" />}
          {isInView && (
            <>
              {/* Desktop: Funnel Visualization */}
              <div className="hidden md:block">
                <div className="flex flex-col items-center gap-2">
                  {layers.map((layer, index) => {
                    const widths = ["100%", "88%", "76%", "64%"];
                    const delay = index * 0.2;

                    return (
                      <motion.div
                        key={layer.label}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full flex flex-col items-center"
                      >
                        <div
                          className={`${layer.color} rounded-xl relative overflow-hidden shadow-sm`}
                          style={{ width: widths[index] }}
                        >
                          {!shouldReduceMotion && index < layers.length - 1 && (
                             <motion.div
                              className="absolute inset-0 overflow-hidden pointer-events-none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{delay: delay + 0.5}}
                            >
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1 h-1 bg-accent-electric/70 rounded-full"
                                  style={{ left: `${15 + i * 18}%` }}
                                  animate={{
                                    y: ["-4px", "110%"],
                                    opacity: [0, 1, 0],
                                  }}
                                  transition={{
                                    duration: 1.5 + Math.random(),
                                    delay: i * 0.3,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                />
                              ))}
                            </motion.div>
                          )}

                          <div className="relative z-10 px-6 py-5 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                index === layers.length - 1 ? "bg-white/20" : "bg-white/60"
                              }`}>
                                <layer.icon className={`w-5 h-5 ${layer.textColor}`} />
                              </div>
                              <div className={`text-base font-semibold ${layer.textColor}`}>
                                {layer.label}
                              </div>
                            </div>
                            <div className="flex gap-2 flex-wrap justify-end">
                              {layer.items.map((item) => (
                                <span
                                  key={item}
                                  className={`text-xs px-3 py-1 rounded-full ${
                                    index === layers.length - 1 ? "bg-white/20" : "bg-white/60"
                                  }`}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {index < layers.length - 1 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{delay: delay + 0.3}}
                            className="text-gray-400 text-lg my-1"
                          >
                            ↓
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile: Vertical flow */}
              <div className="md:hidden space-y-4">
                {layers.map((layer, index) => (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`${layer.color} rounded-xl p-4`}>
                      <div className="flex items-center gap-3 mb-2">
                        <layer.icon className={`w-5 h-5 ${layer.textColor}`} />
                        <div className={`text-base font-bold ${layer.textColor}`}>
                          {layer.label}
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {layer.items.map((item) => (
                          <span
                            key={item}
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              index === layers.length - 1 ? "bg-white/20 text-white" : "bg-white/60 text-gray-700"
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                     {index < layers.length - 1 && (
                      <div className="flex justify-center py-2 text-gray-300">↓</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
