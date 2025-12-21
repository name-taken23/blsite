"use client";

import { forwardRef } from "react";

interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "ref"> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full min-h-[160px] px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 transition-all duration-200 resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:border-gray-300 ${className}`}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;