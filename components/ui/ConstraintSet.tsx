import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import type { ConstraintKind } from "@/components/visual/ConstraintIcon";
import ConstraintBadge, { type ConstraintBadgeSize, type ConstraintMeterStyle } from "./ConstraintBadge";

export type ConstraintItem = {
  kind: ConstraintKind;
  label: string;
  /** Optional value used for selection events (defaults to label). */
  value?: string;
  /** Optional intensity in [0..100] for the meter. */
  intensity?: number;
};

export type ConstraintSetProps = {
  items: ConstraintItem[];
  className?: string;
  /** Interactive selection (optional). */
  selectedValue?: string;
  onChange?: (value: string) => void;
  /** Badge size. */
  size?: ConstraintBadgeSize;
  /** Meter style for all badges. */
  meter?: ConstraintMeterStyle;
  /** Accessible label for the set. */
  ariaLabel?: string;
};

/**
 * ConstraintSet
 * Renders a consistent set of constraint badges.
 */
export default function ConstraintSet({
  items,
  className,
  selectedValue,
  onChange,
  size = "sm",
  meter,
  ariaLabel = "Constraints",
}: ConstraintSetProps): ReactElement {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="group" aria-label={ariaLabel}>
      {items.map((item) => {
        const value = item.value ?? item.label;
        return (
          <ConstraintBadge
            key={`${item.kind}-${value}`}
            kind={item.kind}
            label={item.label}
            value={value}
            intensity={item.intensity}
            meter={meter}
            size={size}
            onSelect={onChange}
            selected={selectedValue ? selectedValue === value : false}
          />
        );
      })}
    </div>
  );
}
