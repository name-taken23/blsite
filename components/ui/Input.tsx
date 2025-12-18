"use client";

import { forwardRef } from "react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "ref"> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-electric/25 focus:border-transparent transition-all duration-200 bg-white ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;