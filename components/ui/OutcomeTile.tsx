import Link from "next/link";
import type { ReactNode } from "react";
import OutcomeDelta from "@/components/graphics/OutcomeDelta";
import Surface, { type SurfaceVariant } from "@/components/ui/Surface";
import { cn } from "@/lib/utils";
import OutcomeStrip, { type OutcomeStripProps } from "@/components/ui/OutcomeStrip";
import { motionClasses } from "@/lib/motion";

type OutcomeTileOrnament = "none" | "rail" | "full";

export default function OutcomeTile(props: {
  value: string;
  metric: string;
  context: string;
  href?: string;
  icon?: ReactNode;
  surfaceVariant?: SurfaceVariant;
  /** Ornamentation level: none, rail (accent line only), or full (rail + corner icon) */
  ornament?: OutcomeTileOrnament;
  /** Optional measured-outcome strip (supports scanning without overpowering copy). */
  strip?: OutcomeStripProps;
  className?: string;
}) {
  const {
    value,
    metric,
    context,
    href,
    icon = <OutcomeDelta />,
    surfaceVariant = "raised",
    ornament = "none",
    strip,
    className,
  } = props;

  const content = (
    <>
      {/* Accent rail - shown for rail and full */}
      {ornament !== "none" ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-electric/20" />
      ) : null}

      {/* Corner icon - shown only for full ornament */}
      {ornament === "full" ? (
        <div aria-hidden="true" className="pointer-events-none absolute right-4 top-4 text-accent-electric/40 opacity-50">
          {icon}
        </div>
      ) : null}

      {strip ? (
        <div className="mb-4">
          <OutcomeStrip {...strip} />
        </div>
      ) : null}

      <div className="text-2xl md:text-3xl font-semibold text-gray-900 leading-none">{value}</div>
      <div className="mt-2 text-sm font-semibold text-gray-900">{metric}</div>
      <div className="mt-2 text-sm text-gray-600 leading-relaxed">{context}</div>
    </>
  );

  if (href) {
    return (
      <Surface
        as={Link}
        href={href}
        variant={surfaceVariant}
        className={cn(
          "group p-6",
          motionClasses.interactiveCard,
          motionClasses.focusRing,
          "hover:border-gray-300",
          className
        )}
      >
        {content}
      </Surface>
    );
  }

  return (
    <Surface variant={surfaceVariant} className={cn("p-6", className)}>
      {content}
    </Surface>
  );
}
