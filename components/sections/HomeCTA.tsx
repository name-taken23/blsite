"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn, slideUp, scaleInSpring } from "@/lib/motion";
import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import { Calendar, MessageSquare } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
      
      {/* Animated mesh gradient overlays - optimized */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-electric/5 to-transparent"
        style={{ willChange: "opacity" }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/5 to-transparent"
        style={{ willChange: "opacity" }}
        animate={{
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={scaleInSpring}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-electric/10 backdrop-blur-sm rounded-full text-accent-electric border border-accent-electric/20"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">Q1 2025 Availability</span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={slideUp} className="space-y-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Have a Complex Problem?
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-accent-electric to-gray-900 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-shift">
                Let's Talk Architecture
              </span>
            </h2>
            <AnimatedDivider className="mx-auto w-24" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto"
          >
            I work best with clients who have a clear technical challenge 
            and need senior engineering execution. No scope creep, no surprises—just 
            clean code that ships on time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center pt-4"
          >
            <MagneticButton href="/contact">
              Start a Conversation
            </MagneticButton>

            <Link href="/work">
              <motion.button
                className="px-8 py-4 bg-white border border-gray-200 text-gray-900 font-semibold rounded-lg hover:border-accent-electric hover:text-accent-electric hover:shadow-lg transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Selected Work
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.6 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-accent-electric" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>No commitment required</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
