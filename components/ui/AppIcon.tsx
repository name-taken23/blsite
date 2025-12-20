import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { ICON_SIZES, type IconSize } from "./iconSystem";

interface AppIconProps {
  /** The Lucide icon component to render */
  icon: LucideIcon;
  /** Size of the icon: sm (16px) or md (20px) */
  size?: IconSize;
  /** Additional className for customization (color, etc.) */
  className?: string;
  /** Accessible label for the icon */
  "aria-label"?: string;
}

/**
 * AppIcon - Standardized icon wrapper component.
 * Ensures all icons across the site use consistent sizing.
 * 
 * @example
 * <AppIcon icon={Clock} size="sm" className="text-gray-600" />
 * <AppIcon icon={Gauge} size="md" className="text-accent-electric" />
 */
export default function AppIcon({
  icon: Icon,
  size = "sm",
  className,
  "aria-label": ariaLabel,
}: AppIconProps): ReactElement {
  return (
    <Icon
      className={cn(ICON_SIZES[size], className)}
      aria-hidden={!ariaLabel}
      aria-label={ariaLabel}
    />
  );
}
