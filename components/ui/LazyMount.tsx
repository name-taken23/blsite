"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type LazyMountProps = {
  children: ReactNode;
  className?: string;
  /** Preload slightly before the element enters the viewport. */
  rootMargin?: string;
  /** Rendered until children are mounted. Keep sizing identical to avoid CLS. */
  placeholder?: ReactNode;
};

/**
 * LazyMount
 * Performance checklist:
 * - Placeholder must preserve size (avoid CLS).
 * - Uses IntersectionObserver (no scroll listeners).
 * - Intended for decorative, below-the-fold visuals.
 */
export default function LazyMount({
  children,
  className,
  rootMargin = "200px 0px",
  placeholder = null,
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted, rootMargin]);

  return (
    <div ref={ref} className={cn(className)}>
      {mounted ? children : placeholder}
    </div>
  );
}
