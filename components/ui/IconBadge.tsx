import type { ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconBadgeSize = "sm" | "md";
type IconBadgeTone = "neutral" | "tinted";

const sizeClassName: Record<IconBadgeSize, { container: string; icon: string; text: string }> = {
  sm: {
    container: "px-3 py-1 text-xs",
    icon: "h-4 w-4",
    text: "text-gray-700",
  },
  md: {
    container: "px-3.5 py-1.5 text-sm",
    icon: "h-[18px] w-[18px]",
    text: "text-gray-700",
  },
};

const toneClassName: Record<IconBadgeTone, string> = {
  neutral: "bg-white",
  tinted: "bg-gray-50",
};

export default function IconBadge(props: {
  icon?: ReactNode;
  label: string;
  size?: IconBadgeSize;
  tone?: IconBadgeTone;
  className?: string;
}) : ReactElement {
  const { icon, label, size = "sm", tone = "neutral", className } = props;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-gray-200 font-semibold",
        "whitespace-nowrap",
        toneClassName[tone],
        sizeClassName[size].container,
        sizeClassName[size].text,
        className
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-electric/60" />
      {icon ? (
        <span aria-hidden="true" className={cn("text-gray-600", sizeClassName[size].icon)}>
          {icon}
        </span>
      ) : null}
      <span>{label}</span>
    </span>
  );
}
