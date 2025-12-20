"use client";

import { forwardRef } from "react";

interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "ref"> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full min-h-[160px] px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-electric/25 focus:border-gray-300 transition-all duration-200 resize-none ${className}`}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;