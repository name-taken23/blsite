import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type SectionVariant = "plain" | "tinted" | "framed";
type SectionSpacing = "default" | "tight" | "pageHeader" | "flush";

type SectionProps<T extends ElementType> = {
  as?: T;
  variant?: SectionVariant;
  spacing?: SectionSpacing;
  containerClassName?: string;
  cornerGraphic?: ReactNode;
  cornerGraphicClassName?: string;
} & Omit<HTMLAttributes<HTMLElement>, "as">;

export default function Section<T extends ElementType = "section">({
  as,
  variant = "plain",
  spacing = "default",
  className,
  containerClassName,
  cornerGraphic,
  cornerGraphicClassName,
  children,
  ...props
}: SectionProps<T>) {
  const Component = (as ?? "section") as ElementType;

  const backgroundClassName =
    variant === "tinted" ? "bg-gray-50" : "bg-white";

  const hasSeparator = variant === "tinted";

  const spacingClassName: Record<SectionSpacing, string> = {
    default: "py-16 md:py-20",
    tight: "py-12 md:py-16",
    pageHeader: "pt-12 pb-10 md:pt-16 md:pb-12",
    flush: "py-0",
  };

  return (
    <Component
      className={cn(
        backgroundClassName,
        variant === "tinted" && "relative",
        className
      )}
      {...props}
    >
      {hasSeparator ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-line-2" />
      ) : null}

      {variant === "framed" && cornerGraphic ? (
        <div
          className={cn(
            "pointer-events-none absolute right-6 top-6 h-10 w-10 text-accent-electric/30 opacity-50",
            cornerGraphicClassName
          )}
        >
          {cornerGraphic}
        </div>
      ) : null}

      <div
        className={cn(
          "max-w-7xl mx-auto px-6",
          spacingClassName[spacing],
          containerClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
}
