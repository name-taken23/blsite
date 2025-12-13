"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import TechDivider from "@/components/ui/TechDivider";
import { fadeIn, staggerContainer } from "@/lib/motion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most projects take 4-12 weeks from kickoff to production. Timeline depends on scope, complexity, and integration requirements. We'll provide a clear timeline during our initial consultation.",
  },
  {
    question: "What does it cost?",
    answer: "Projects typically range from $50K-$150K depending on scope. We offer both fixed-price projects and weekly retainers. All engagements include documentation, training, and post-launch support.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer: "We work with both. Startups get rapid MVP development to validate AI features quickly. Enterprises get production-grade systems with compliance and SLAs. Our clients range from seed-stage to Fortune 500.",
  },
  {
    question: "What technology do you use?",
    answer: "We're technology-agnostic and choose the best stack for your needs—React/Next.js for web, Node.js/Python for backends, AWS/Azure/GCP for cloud, and leading AI tools when needed. We work with your existing tech or recommend modern alternatives.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Yes. We integrate with cloud platforms, databases, APIs, CRMs, and legacy systems. We ensure zero downtime during migrations and follow your security requirements.",
  },
  {
    question: "How does BlackLake compare to building in-house?",
    answer: "comparison-table",
    isComparison: true,
  },
];

import ComparisonTable from "@/components/sections/ComparisonTable";

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            >
              Common Questions
            </motion.h2>
            <TechDivider className="mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-accent-electric/30 transition-colors duration-300"
              >
                <button
                  id={`faq-toggle-${index}`}
                  aria-controls={`faq-panel-${index}`}
                  aria-expanded={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-bold text-gray-900 group-hover:text-accent-electric transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    aria-hidden="true"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-accent-electric transition-colors" />
                  </motion.div>
                </button>

                <motion.div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-toggle-${index}`}
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {(faq as any).isComparison ? (
                    <div className="border-t border-gray-100" id={`faq-panel-content-${index}`}>
                      <ComparisonTable embedded />
                    </div>
                  ) : (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4" id={`faq-panel-content-${index}`}>
                      {faq.answer}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
