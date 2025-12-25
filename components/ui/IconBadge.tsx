import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { ICON_SIZES } from "./iconSystem";

type IconBadgeSize = "sm" | "md";
type IconBadgeTone = "neutral" | "tinted";

const sizeClassName: Record<IconBadgeSize, { container: string; icon: string; text: string }> = {
  sm: {
    container: "px-3 py-1 text-xs",
    icon: ICON_SIZES.sm,
    text: "text-ink-2",
  },
  md: {
    container: "px-3.5 py-1.5 text-sm",
    icon: ICON_SIZES.md,
    text: "text-ink-2",
  },
};

const toneClassName: Record<IconBadgeTone, string> = {
  neutral: "bg-surface-2",
  tinted: "bg-surface-3",
};

/**
 * IconBadge - Badge component with optional icon.
 * 
 * Behavior:
 * - If icon is provided: icon is shown, NO accent dot
 * - If no icon: accent dot is shown for visual identity
 * 
 * Icons are sized automatically by IconBadge - do NOT pass className to the icon.
 * 
 * @example
 * <IconBadge label="System map" /> // Shows dot
 * <IconBadge icon={Clock} label="2 weeks" /> // Shows icon, no dot
 */
export default function IconBadge(props: {
  /** Lucide icon component (will be sized automatically) */
  icon?: LucideIcon;
  label: string;
  size?: IconBadgeSize;
  tone?: IconBadgeTone;
  className?: string;
}): ReactElement {
  const { icon: Icon, label, size = "sm", tone = "neutral", className } = props;

  // Show dot only when no icon is provided
  const showDot = !Icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line-2 font-semibold",
        "whitespace-nowrap",
        toneClassName[tone],
        sizeClassName[size].container,
        sizeClassName[size].text,
        className
      )}
    >
      {showDot ? (
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-electric/60" />
      ) : null}
      {Icon ? (
        <Icon className={cn(sizeClassName[size].icon, "text-ink-2")} aria-hidden="true" />
      ) : null}
      <span>{label}</span>
    </span>
  );
}
