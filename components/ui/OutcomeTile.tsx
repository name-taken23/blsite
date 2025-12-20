import Link from "next/link";
import type { ReactNode } from "react";
import OutcomeDelta from "@/components/graphics/OutcomeDelta";
import Surface, { type SurfaceVariant } from "@/components/ui/Surface";
import { cn } from "@/lib/utils";

function SparkDots(props: { className?: string }) {
  const { className } = props;

  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g className="fill-gray-300" opacity="0.75">
        {Array.from({ length: 4 }).flatMap((_, row) =>
          Array.from({ length: 4 }).map((__, col) => {
            const cx = 10 + col * 14;
            const cy = 10 + row * 14;
            return <circle key={`${row}-${col}`} cx={cx} cy={cy} r="1.6" />;
          })
        )}
      </g>
      <g className="fill-accent-electric" opacity="0.35">
        <circle cx="54" cy="10" r="1.6" />
        <circle cx="40" cy="38" r="1.6" />
      </g>
    </svg>
  );
}

export default function OutcomeTile(props: {
  value: string;
  metric: string;
  context: string;
  href?: string;
  icon?: ReactNode;
  surfaceVariant?: SurfaceVariant;
  className?: string;
}) {
  const {
    value,
    metric,
    context,
    href,
    icon = <OutcomeDelta />,
    surfaceVariant = "raised",
    className,
  } = props;

  const content = (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-electric/30" />

      <div aria-hidden="true" className="pointer-events-none absolute right-4 top-4 text-accent-electric opacity-70">
        {icon}
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 opacity-[0.22]">
        <SparkDots className="h-12 w-12" />
      </div>

      <div className="text-2xl md:text-3xl font-semibold text-gray-900 leading-none">{value}</div>
      <div className="mt-2 text-sm font-semibold text-gray-900">{metric}</div>
      <div className="mt-2 text-sm text-gray-600 leading-relaxed">{context}</div>
    </>
  );

  if (href) {
    return (
      <Surface
        as={Link}
        href={href}
        variant={surfaceVariant}
        className={cn(
          "group p-6 transition-colors",
          "hover:border-gray-300",
          className
        )}
      >
        {content}
      </Surface>
    );
  }

  return (
    <Surface variant={surfaceVariant} className={cn("p-6", className)}>
      {content}
    </Surface>
  );
}
