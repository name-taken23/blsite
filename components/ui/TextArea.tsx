"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface TextAreaProps extends Omit<HTMLMotionProps<"textarea">, "ref"> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <motion.textarea
        ref={ref}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-electric focus:border-transparent transition-all duration-200 bg-white resize-none ${className}`}
        whileFocus={{ scale: 1.02 }}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;