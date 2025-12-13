"use client";

import { motion } from "framer-motion";

export default function IntelligenceCycle() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-sm text-accent-electric font-semibold">System Flow</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Perceive → Reason → Act → Optimise</h2>
        </div>

        <div className="flex items-center justify-center">
          <svg viewBox="0 0 600 260" className="w-full max-w-4xl">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#00A3FF" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>

            <motion.path
              d="M60 130 C160 40, 440 40, 540 130"
              fill="transparent"
              stroke="url(#g1)"
              strokeWidth={6}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.6 }}
            />

            <g>
              <motion.circle cx="60" cy="130" r="34" className="fill-white stroke-gray-100" />
              <text x="60" y="136" textAnchor="middle" className="text-xs fill-gray-700 font-semibold">Perceive</text>

              <motion.circle cx="200" cy="60" r="34" className="fill-white stroke-gray-100" />
              <text x="200" y="66" textAnchor="middle" className="text-xs fill-gray-700 font-semibold">Reason</text>

              <motion.circle cx="400" cy="60" r="34" className="fill-white stroke-gray-100" />
              <text x="400" y="66" textAnchor="middle" className="text-xs fill-gray-700 font-semibold">Act</text>

              <motion.circle cx="540" cy="130" r="34" className="fill-white stroke-gray-100" />
              <text x="540" y="136" textAnchor="middle" className="text-xs fill-gray-700 font-semibold">Optimise</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
