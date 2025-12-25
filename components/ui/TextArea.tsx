"use client";

import { forwardRef } from "react";

interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "ref"> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full min-h-[160px] px-4 py-3 border border-line-1 rounded-lg bg-surface-2 text-ink-1 placeholder:text-ink-4 transition-all duration-200 resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-2 focus-visible:border-accent-electric ${className}`}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;