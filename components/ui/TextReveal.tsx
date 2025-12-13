"use client";

import { motion, Variants } from "framer-motion";

const wordVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "circOut",
    },
  },
};

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

export default function TextReveal({ text, className = "", wordClassName = "" }: TextRevealProps) {
  // Break the headline into words so each word can animate in sequence.
  const words = text.trim().split(" ");

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className={`text-4xl font-display uppercase tracking-tight text-gray-900 md:text-[3.5rem] ${wordClassName}`}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
