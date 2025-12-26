"use client";

import { useEffect, useId, useState, type ReactElement } from "react";
import { X } from "lucide-react";
import { CaseStudyDiagram } from "@/components/visual/CaseStudyDiagram";
import AppIcon from "@/components/ui/AppIcon";
import { cn } from "@/lib/utils";

type SystemSketchModalProps = {
  slug: string;
  className?: string;
};

export default function SystemSketchModal({ slug, className }: SystemSketchModalProps): ReactElement {
  const [open, setOpen] = useState(false);
  const labelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full cursor-zoom-in"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={labelId}
      >
        <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-surface-2 opacity-0 shadow-card transition-opacity duration-fast group-hover:opacity-90" />
        <div className="relative z-10">
          <div className="md:hidden">
            <CaseStudyDiagram slug={slug} className="h-20 w-full" framed={true} />
          </div>
          <div className="hidden md:block">
            <CaseStudyDiagram slug={slug} className="h-24 w-full" framed={true} />
          </div>
        </div>
        <span className="sr-only">Open system sketch</span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[min(92vw,820px)] rounded-2xl border border-line-1 bg-surface-2 p-6 shadow-card"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <div id={labelId} className="text-xs font-semibold uppercase tracking-wide text-ink-3">
                System sketch
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-line-2 bg-surface-3 p-2 text-ink-3 transition-colors hover:border-line-1 hover:text-ink-1"
              >
                <AppIcon icon={X} size="sm" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="mt-4">
              <CaseStudyDiagram slug={slug} className="h-auto w-full" framed={true} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
