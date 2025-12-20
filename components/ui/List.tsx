import type { ReactElement } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ICON_SIZES } from "./iconSystem";

type ListVariant = "dot" | "check" | "none";
type ListDensity = "compact" | "normal";

interface ListProps {
  /** Array of text items to render */
  items: string[];
  /** Visual style of the list marker */
  variant?: ListVariant;
  /** Spacing density */
  density?: ListDensity;
  /** Additional className for the list container */
  className?: string;
  /** Additional className for list items */
  itemClassName?: string;
}

const densityClasses: Record<ListDensity, string> = {
  compact: "space-y-1.5",
  normal: "space-y-2",
};

const itemTextClasses: Record<ListDensity, string> = {
  compact: "text-sm text-gray-600",
  normal: "text-sm text-gray-600 leading-relaxed",
};

/**
 * List - Unified bullet list component.
 * 
 * Variants:
 * - dot: Simple gray dot marker
 * - check: Checkmark icon (accent color)
 * - none: No marker, just text items
 * 
 * @example
 * <List items={["Item 1", "Item 2"]} variant="dot" />
 * <List items={["Feature 1", "Feature 2"]} variant="check" />
 * <List items={["Line 1", "Line 2"]} variant="none" density="compact" />
 */
export default function List({
  items,
  variant = "dot",
  density = "normal",
  className,
  itemClassName,
}: ListProps): ReactElement {
  return (
    <ul className={cn(densityClasses[density], className)}>
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className={cn(
            "flex gap-2",
            variant === "none" && "block",
            itemTextClasses[density],
            itemClassName
          )}
        >
          {variant === "dot" ? (
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300"
              aria-hidden="true"
            />
          ) : null}
          {variant === "check" ? (
            <Check
              className={cn(ICON_SIZES.sm, "shrink-0 mt-0.5 text-accent-electric")}
              aria-hidden="true"
            />
          ) : null}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
