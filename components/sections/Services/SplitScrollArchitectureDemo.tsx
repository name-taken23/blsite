"use client";

import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SplitScrollArchitectureDemo() {
  const ref = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const steps = [
    "Data ingestion & normalization",
    "Model orchestration & evaluation",
    "Application integration & serving",
    "Monitoring, drift detection & ops",
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-sm text-accent-electric font-semibold">How it fits together</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Architecture demo</h2>

            <ol className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-accent-electric/10 text-accent-electric flex items-center justify-center font-semibold">{i + 1}</div>
                  <div>
                    <h4 className="font-semibold">{s}</h4>
                    <p className="text-sm text-gray-600">Short explanation of this stage and why it matters for production intelligence.</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative">
            <motion.div style={{ x }} className="w-full h-80 bg-gradient-to-br from-sky-50 to-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center">
              <div className="text-sm text-gray-600 max-w-xs text-center">Interactive diagram placeholder — transitions with scroll to show different layers.</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
