"use client";

import { forwardRef } from "react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "ref"> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full h-12 px-4 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-electric/25 focus:border-gray-300 transition-all duration-200 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;