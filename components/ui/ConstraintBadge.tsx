import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { ConstraintIcon, type ConstraintKind } from "@/components/visual/ConstraintIcon";

export type ConstraintMeterStyle = "bar" | "none";
export type ConstraintBadgeSize = "sm" | "md";

export type ConstraintBadgeProps = {
  /** Blueprint constraint icon kind. */
  kind: ConstraintKind;
  /** Visible label text. */
  label: string;
  /** Optional value emitted when selected (defaults to label). */
  value?: string;
  /** Priority/intensity in [0..100]. If provided, a meter may render. */
  intensity?: number;
  /** Meter style. Defaults to "bar" when intensity is provided. */
  meter?: ConstraintMeterStyle;
  /** Visual size. */
  size?: ConstraintBadgeSize;
  /** Render as toggleable button when provided. */
  onSelect?: (value: string) => void;
  /** Whether the badge is selected (used when interactive). */
  selected?: boolean;
  /** Tailwind className applied to the root element. */
  className?: string;
  /** Accessible label override. */
  ariaLabel?: string;
};

const clamp100 = (value: number) => Math.max(0, Math.min(100, value));

/**
 * ConstraintBadge
 * Schematic badge with blueprint icon + label + optional priority meter.
 * - If `onSelect` is provided, renders as a keyboard-focusable toggle button.
 */
export default function ConstraintBadge(props: ConstraintBadgeProps): ReactElement {
  const {
    kind,
    label,
    value,
    intensity,
    meter,
    size = "sm",
    onSelect,
    selected = false,
    className,
    ariaLabel,
  } = props;

  const resolvedValue = value ?? label;
  const hasIntensity = typeof intensity === "number" && Number.isFinite(intensity);
  const resolvedMeter: ConstraintMeterStyle = meter ?? (hasIntensity ? "bar" : "none");
  const safeIntensity = hasIntensity ? clamp100(intensity) : undefined;

  const Root: "button" | "span" = onSelect ? "button" : "span";

  const sizeClasses: Record<ConstraintBadgeSize, { container: string; icon: string; label: string; meter: string }> = {
    sm: { container: "px-3 py-1.5 text-xs", icon: "text-gray-600 dark:text-gray-300", label: "", meter: "w-14" },
    md: { container: "px-3.5 py-2 text-sm", icon: "text-gray-600 dark:text-gray-300", label: "", meter: "w-16" },
  };

  const rootLabel = ariaLabel ?? (hasIntensity ? `${label}, intensity ${safeIntensity} out of 100` : label);

  return (
    <Root
      {...(onSelect
        ? {
            type: "button" as const,
            onClick: () => onSelect(resolvedValue),
            "aria-pressed": selected,
          }
        : {})}
      aria-label={rootLabel}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border font-semibold",
        "border-gray-200 bg-white text-gray-800",
        "dark:border-gray-700 dark:bg-bg-panel dark:text-gray-100",
        "transition-colors",
        onSelect &&
          "hover:border-accent-electric/50 hover:text-gray-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-bg-panel",
        selected && "border-accent-electric/60 bg-accent-electric/5",
        sizeClasses[size].container,
        className
      )}
    >
      <ConstraintIcon kind={kind} className={cn(sizeClasses[size].icon)} size={size === "sm" ? 18 : 20} />

      <span className={cn("whitespace-nowrap", sizeClasses[size].label)}>{label}</span>

      {resolvedMeter === "bar" && hasIntensity ? (
        <span className="ml-1 flex items-center gap-2">
          <span className="sr-only">{`Intensity ${safeIntensity} out of 100`}</span>
          <span
            aria-hidden="true"
            className={cn(
              "relative h-1 rounded-full",
              "bg-gray-200/70 dark:bg-gray-700/70",
              sizeClasses[size].meter
            )}
          >
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-accent-electric/60"
              style={{ width: `${safeIntensity}%` }}
            />
          </span>
        </span>
      ) : null}
    </Root>
  );
}
