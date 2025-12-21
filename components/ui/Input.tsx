"use client";

import { forwardRef } from "react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "ref"> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full h-12 px-4 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:border-gray-300 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;