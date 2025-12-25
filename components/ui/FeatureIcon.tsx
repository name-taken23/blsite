import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { ICON_SIZES } from "./iconSystem";

type FeatureIconTone = "neutral" | "tinted" | "accent";
type FeatureIconSize = "sm" | "md" | "lg";

interface FeatureIconProps {
  /** The Lucide icon component to render */
  icon: LucideIcon;
  /** Visual tone of the container */
  tone?: FeatureIconTone;
  /** Size of the container */
  size?: FeatureIconSize;
  /** Additional className for customization */
  className?: string;
}

const sizeClasses: Record<FeatureIconSize, { container: string; icon: string }> = {
  sm: {
    container: "h-8 w-8 rounded-lg",
    icon: ICON_SIZES.sm,
  },
  md: {
    container: "h-10 w-10 rounded-xl",
    icon: ICON_SIZES.md,
  },
  lg: {
    container: "h-12 w-12 rounded-2xl",
    icon: ICON_SIZES.md,
  },
};

const toneClasses: Record<FeatureIconTone, { container: string; icon: string }> = {
  neutral: {
    container: "bg-surface-3 border border-line-2",
    icon: "text-ink-2",
  },
  tinted: {
    container: "bg-surface-3",
    icon: "text-ink-2",
  },
  accent: {
    container: "bg-surface-2 border border-line-2",
    icon: "text-accent-electric",
  },
};

/**
 * FeatureIcon - Consistent icon container for feature cards and blocks.
 * 
 * Provides a standardized rounded container with an icon inside.
 * Ensures visual consistency across service cards, process steps, etc.
 * 
 * @example
 * <FeatureIcon icon={Cloud} tone="neutral" />
 * <FeatureIcon icon={Brain} tone="accent" size="lg" />
 */
export default function FeatureIcon({
  icon: Icon,
  tone = "neutral",
  size = "md",
  className,
}: FeatureIconProps): ReactElement {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        sizeClasses[size].container,
        toneClasses[tone].container,
        className
      )}
    >
      <Icon className={cn(sizeClasses[size].icon, toneClasses[tone].icon)} aria-hidden="true" />
    </div>
  );
}
