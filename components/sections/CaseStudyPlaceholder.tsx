"use client";

import { motion } from "framer-motion";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import SmartCard from "@/components/ui/SmartCard";
import TextReveal from "@/components/ui/TextReveal";
import { fadeIn, staggerContainer, slideUp } from "@/lib/motion";

const caseStudies = [
  {
    results: [
      "Result placeholder",
      "Result placeholder",
      "Result placeholder",
    ],
    tags: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    results: [
      "Result placeholder",
      "Result placeholder",
      "Result placeholder",
    ],
    tags: ["Tag 1", "Tag 2", "Tag 3"],
  },
];

export default function CaseStudyPlaceholder() {
  return (
    <section className="py-20 md:py-32">
      <div className="text-center">
        <motion.p
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.6em] text-gray-500"
        >
          Case Studies
        </motion.p>
        <motion.div
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-4 flex flex-col gap-3"
        >
          <TextReveal text="Headline Placeholder" />
          <AnimatedDivider className="mx-auto w-24" />
        </motion.div>
        <p className="mt-6 text-base text-gray-600">
          Section description lorem ipsum placeholder.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-12 grid gap-8 md:grid-cols-2"
      >
        {caseStudies.map((study, index) => (
          <SmartCard key={index} className="space-y-4">
            <div className="h-12 w-32 rounded-full bg-accent-electric/20 text-center text-xs font-semibold uppercase tracking-[0.4em] text-accent-electric">
              Logo Placeholder
            </div>
            <TextReveal text="Case Study Placeholder" className="text-2xl md:text-3xl" />
            <AnimatedDivider />
            <ul className="space-y-2 text-sm text-gray-600">
              {study.results.map((result, resultIndex) => (
                <motion.li key={resultIndex} variants={fadeIn} className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 rounded-full bg-accent-electric" />
                  {result}
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.4em] text-accent-electric">
              {study.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="rounded-full border border-accent-electric/40 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </SmartCard>
        ))}
      </motion.div>
    </section>
  );
}
