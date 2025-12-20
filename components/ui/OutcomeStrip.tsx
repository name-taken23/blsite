import type { ReactElement } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Surface from "@/components/ui/Surface";

export type OutcomeStripItem = {
  value: string;
  metric: string;
  href?: string;
};

export default function OutcomeStrip(props: {
  items: OutcomeStripItem[];
  className?: string;
}): ReactElement | null {
  const { items, className } = props;

  if (!items.length) return null;

  return (
    <div className={cn("grid gap-3 sm:grid-cols-3", className)}>
      {items.slice(0, 3).map((item) => (
        <Surface key={`${item.value}-${item.metric}`} variant="inset" className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xl font-semibold tracking-tight text-gray-900">{item.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                {item.metric}
              </div>
            </div>
            {item.href ? (
              <Link
                href={item.href}
                className="text-xs font-semibold text-gray-700 hover:text-accent-electric transition-colors"
                aria-label={`View case study for ${item.metric}`}
              >
                View
              </Link>
            ) : null}
          </div>
        </Surface>
      ))}
    </div>
  );
}
