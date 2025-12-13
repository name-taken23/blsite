"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { useState } from "react";
import Link from "next/link";

export default function VideoExplainer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            >
              See RAG in <span className="text-gradient">Action</span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Watch how we deploy intelligent systems that understand your proprietary data
            </motion.p>
          </div>

          <motion.div variants={fadeIn} className="max-w-4xl mx-auto">
            {/* Video Container */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              {!isPlaying ? (
                // Placeholder with Play Button
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Background Image Placeholder */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-electric/20 via-transparent to-blue-500/20" />
                  
                  {/* Animated Glow */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-electric/30 blur-[100px] rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Thumbnail Text */}
                  <div className="absolute top-8 left-8 right-8">
                    <div className="text-white text-2xl md:text-3xl font-bold mb-2">
                      Deploy RAG Systems in 2 Weeks
                    </div>
                    <div className="text-gray-300 text-sm md:text-base">
                      From data ingestion to production-ready AI
                    </div>
                  </div>

                  {/* Play Button */}
                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 w-24 h-24 bg-accent-electric rounded-full flex items-center justify-center shadow-2xl shadow-accent-electric/50 group hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" fill="white" />
                  </motion.button>

                  {/* Duration Badge */}
                  <div className="absolute bottom-8 right-8 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-gray-700">
                    60 seconds
                  </div>
                </div>
              ) : (
                // Video Player (you can replace this with actual video embed)
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="text-center text-white p-8">
                    <div className="text-2xl font-bold mb-4">Video Coming Soon</div>
                    <p className="text-gray-400 mb-6">
                      We&apos;re creating a comprehensive demo showcasing our RAG deployment process.
                    </p>
                    <Link href="/contact">
                      <button className="bg-accent-electric hover:bg-accent-electric/90 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 mx-auto transition-all">
                        Schedule a Live Demo
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                  {/* Actual video embed would go here:
                  <iframe
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  /> */}
                </div>
              )}
            </div>

            {/* Video Highlights */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            >
              {[
                { time: "0:00-0:20", label: "Data Pipeline Setup", desc: "Connecting to your sources" },
                { time: "0:20-0:40", label: "Vector Embeddings", desc: "Semantic search configuration" },
                { time: "0:40-1:00", label: "LLM Integration", desc: "GPT-4 with your data" },
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-accent-electric/30 transition-colors"
                >
                  <div className="text-xs font-mono text-accent-electric mb-2">{highlight.time}</div>
                  <div className="font-bold text-gray-900 text-sm mb-1">{highlight.label}</div>
                  <div className="text-xs text-gray-600">{highlight.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
