import type { ReactElement } from "react";
import { cn } from "@/lib/utils";

export type StepperStep = {
  title: string;
  description: string;
};

export default function Stepper(props: {
  steps: StepperStep[];
  className?: string;
}) : ReactElement {
  const { steps, className } = props;

  return (
    <ol className={cn("space-y-5 list-none p-0 m-0", className)}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <li key={`${step.title}-${index}`} className={cn("relative pl-10", !isLast && "pb-1")}>
            <div className="absolute left-0 top-0">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-line-2 bg-surface-2 text-xs font-semibold text-ink-2">
                {index + 1}
              </div>
              {!isLast ? (
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-7 h-[calc(100%+20px)] w-px -translate-x-1/2 bg-line-2"
                />
              ) : null}
            </div>

            <div className="text-sm font-semibold text-ink-1">{step.title}</div>
            <div className="mt-1 text-sm text-ink-2 leading-relaxed">{step.description}</div>
          </li>
        );
      })}
    </ol>
  );
}
