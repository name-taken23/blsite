"use client";

import { forwardRef } from "react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "ref"> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full h-12 px-4 border border-line-1 rounded-lg bg-surface-2 text-ink-1 placeholder:text-ink-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-2 focus-visible:border-accent-electric ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;