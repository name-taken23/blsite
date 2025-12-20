import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type SectionVariant = "plain" | "tinted" | "framed";

type SectionProps<T extends ElementType> = {
  as?: T;
  variant?: SectionVariant;
  containerClassName?: string;
  cornerGraphic?: ReactNode;
  cornerGraphicClassName?: string;
} & Omit<HTMLAttributes<HTMLElement>, "as">;

export default function Section<T extends ElementType = "section">({
  as,
  variant = "plain",
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

  return (
    <Component
      className={cn(
        backgroundClassName,
        variant === "framed" && "relative overflow-hidden",
        className
      )}
      {...props}
    >
      {variant === "framed" ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-electric/30" />
      ) : null}

      {variant === "framed" && cornerGraphic ? (
        <div
          className={cn(
            "pointer-events-none absolute right-6 top-6 h-10 w-10 text-accent-electric opacity-60",
            cornerGraphicClassName
          )}
        >
          {cornerGraphic}
        </div>
      ) : null}

      <div
        className={cn(
          "max-w-7xl mx-auto px-6 py-16 md:py-20",
          containerClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
}
