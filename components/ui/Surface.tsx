import { cn } from "@/lib/utils";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
} from "react";

export type SurfaceVariant = "plain" | "raised" | "tinted" | "glow" | "inset";

type SurfaceOwnProps<T extends ElementType> = {
  as?: T;
  variant?: SurfaceVariant;
  cornerGraphic?: ReactNode;
  cornerGraphicClassName?: string;
};

type SurfaceProps<T extends ElementType> = SurfaceOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof SurfaceOwnProps<T>>;

const base = cn(
  "relative overflow-hidden border border-gray-200",
  "focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-accent-electric/15"
);

const variantClassName: Record<SurfaceVariant, string> = {
  plain: "bg-white",
  tinted: "bg-gray-50",
  inset: cn("bg-gray-50", "ring-1 ring-white/60"),
  raised: cn(
    "bg-white shadow-card",
    "transition-shadow duration-fast",
    "hover:shadow-card-hover",
    "hover:border-gray-300"
  ),
  glow: cn(
    "bg-white shadow-card ring-1 ring-accent-electric/10",
    "transition-shadow duration-fast",
    "hover:shadow-card-hover",
    "hover:border-gray-300",
    "hover:ring-accent-electric/20"
  ),
};

export default function Surface<T extends ElementType = "div">(
  props: SurfaceProps<T>
): ReactElement {
  const {
    as,
    variant = "plain",
    className,
    cornerGraphic,
    cornerGraphicClassName,
    children,
    ...rest
  } = props;

  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cn("rounded-2xl", base, variantClassName[variant], className)}
      {...(rest as ComponentPropsWithoutRef<T>)}
    >
      {cornerGraphic ? (
        <div
          className={cn(
            "pointer-events-none absolute right-4 top-4 text-accent-electric opacity-60",
            cornerGraphicClassName
          )}
        >
          {cornerGraphic}
        </div>
      ) : null}

      {children}
    </Component>
  );
}
