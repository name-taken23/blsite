import { cn } from "@/lib/utils";

type OutcomeDeltaProps = {
  className?: string;
};

export default function OutcomeDelta({ className }: OutcomeDeltaProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", className)}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 7v10" />
        <path d="M5 7h4" />
        <path d="M5 17h4" />

        <path d="M10 14l6-6" />
        <path d="M13.5 8H16v2.5" />
      </g>
    </svg>
  );
}
