import type { ElementType, HTMLAttributes, ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Section from "@/components/ui/Section";
import AnimatedSeparator from "@/components/ui/AnimatedSeparator";

export type SectionBackplate = "none" | "grid" | "noise" | "radial";

type SectionShellProps<T extends ElementType> = {
  as?: T;
  variant?: "plain" | "tinted" | "framed";
  spacing?: "default" | "tight" | "pageHeader" | "flush";
  containerClassName?: string;
  cornerGraphic?: ReactNode;
  cornerGraphicClassName?: string;

  /** Subtle per-section background treatment (no raster assets). */
  backplate?: SectionBackplate;
  /** Opacity applied to the backplate overlay. */
  backplateOpacity?: number;

  /** Optional annotated separator rendered at the top of the section content. */
  separatorText?: string;
  /** Separator alignment along the rule. */
  separatorAlign?: "start" | "center" | "end";
} & Omit<HTMLAttributes<HTMLElement>, "as">;

function SectionBackplateLayer(props: {
  kind: SectionBackplate;
  opacity: number;
  className?: string;
}): ReactElement | null {
  const { kind, opacity, className } = props;
  if (kind === "none") return null;

  const base = cn(
    "pointer-events-none absolute inset-0",
    "[mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent_70%)]",
    className
  );

  if (kind === "radial") {
    return (
      <div
        aria-hidden="true"
        className={base}
        style={{
          opacity,
          backgroundImage:
            "radial-gradient(900px 650px at 25% 20%, rgba(var(--accent), var(--texture-glow-alpha)), transparent 60%)",
        }}
      />
    );
  }

  if (kind === "noise") {
    return (
      <div
        aria-hidden="true"
        className={base}
        style={{
          opacity,
          backgroundImage:
            "radial-gradient(rgba(var(--texture-grid-rgb), var(--texture-noise-alpha)) 1px, transparent 1px)",
          backgroundSize: "var(--texture-noise-size) var(--texture-noise-size)",
          backgroundPosition: "0 0",
        }}
      />
    );
  }

  // grid
  return (
    <div
      aria-hidden="true"
      className={base}
      style={{
        opacity,
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(var(--texture-grid-rgb), var(--texture-grid-alpha)) 0, rgba(var(--texture-grid-rgb), var(--texture-grid-alpha)) 1px, transparent 1px, transparent var(--texture-grid-size)), repeating-linear-gradient(90deg, rgba(var(--texture-grid-rgb), var(--texture-grid-alpha)) 0, rgba(var(--texture-grid-rgb), var(--texture-grid-alpha)) 1px, transparent 1px, transparent var(--texture-grid-size))",
      }}
    />
  );
}

/**
 * SectionShell
 * Wrapper around `Section` that adds subtle “room” via backplates and optional
 * annotated separators. Uses existing CSS variables/tokens (dark-mode safe).
 */
export default function SectionShell<T extends ElementType = "section">({
  as,
  variant = "plain",
  spacing = "default",
  className,
  containerClassName,
  cornerGraphic,
  cornerGraphicClassName,
  backplate = "none",
  backplateOpacity = 0.045,
  separatorText,
  separatorAlign = "start",
  children,
  ...props
}: SectionShellProps<T>) {
  return (
    <Section
      as={as}
      variant={variant}
      spacing={spacing}
      className={cn("relative overflow-hidden", className)}
      containerClassName={cn("relative", containerClassName)}
      cornerGraphic={cornerGraphic}
      cornerGraphicClassName={cornerGraphicClassName}
      {...props}
    >
      <SectionBackplateLayer kind={backplate} opacity={backplateOpacity} />

      {separatorText ? (
        <div aria-hidden="true" className="mb-12 md:mb-14">
          <AnimatedSeparator text={separatorText} align={separatorAlign} />
        </div>
      ) : null}

      {children}
    </Section>
  );
}
