"use client";

import { forwardRef } from "react";

interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "ref"> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-electric focus:border-transparent transition-all duration-200 bg-white resize-none ${className}`}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;