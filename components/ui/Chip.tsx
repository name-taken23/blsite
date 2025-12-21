import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { ICON_SIZES } from "./iconSystem";

type ChipSize = "sm" | "md";
type ChipTone = "neutral" | "tinted" | "outline";

interface ChipProps {
  /** The text label for the chip */
  label: string;
  /** Size of the chip */
  size?: ChipSize;
  /** Visual tone/style of the chip */
  tone?: ChipTone;
  /** Optional Lucide icon component (will be sized automatically) */
  icon?: LucideIcon;
  /** Additional className */
  className?: string;
}

const sizeClasses: Record<ChipSize, { container: string; text: string }> = {
  sm: {
    container: "px-2.5 py-0.5",
    text: "text-xs",
  },
  md: {
    container: "px-3 py-1",
    text: "text-sm",
  },
};

const toneClasses: Record<ChipTone, string> = {
  neutral: "border-gray-200 bg-white text-gray-600 font-medium",
  tinted: "border-transparent bg-gray-100/50 text-gray-700 font-medium",
  outline: "border-gray-300 bg-transparent text-gray-600 font-medium",
};

/**
 * Chip - Unified tag/badge component for metadata display.
 * 
 * Use cases:
 * - Tags (case study tags, technologies)
 * - Meta chips ("Confidential case study", industry, timeline)
 * - Status indicators
 * 
 * Icons are automatically sized based on chip size.
 * 
 * @example
 * <Chip label="TypeScript" />
 * <Chip label="6 weeks" icon={Clock} size="sm" />
 * <Chip label="Confidential case study" tone="tinted" />
 */
export default function Chip({
  label,
  size = "sm",
  tone = "neutral",
  icon: Icon,
  className,
}: ChipProps): ReactElement {
  // Icons in chips are always sm (16px) for visual consistency
  const iconClass = ICON_SIZES.sm;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-semibold whitespace-nowrap",
        sizeClasses[size].container,
        sizeClasses[size].text,
        toneClasses[tone],
        className
      )}
    >
      {Icon ? (
        <Icon className={cn(iconClass, "text-gray-500")} aria-hidden="true" />
      ) : null}
      <span>{label}</span>
    </span>
  );
}
