"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface InputProps extends Omit<HTMLMotionProps<"input">, "ref"> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <motion.input
        ref={ref}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-electric focus:border-transparent transition-all duration-200 bg-white ${className}`}
        whileFocus={{ scale: 1.02 }}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;