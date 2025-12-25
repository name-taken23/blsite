import { cn } from "@/lib/utils";

type SignalWaveProps = {
  className?: string;
};

export default function SignalWave({ className }: SignalWaveProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 420 160"
      className={cn("w-full h-full", className)}
    >
      {/* contrast-ok: decorative baseline grid, aria-hidden */}
      <g className="stroke-gray-200" strokeWidth="1" opacity="0.9">
        <path d="M 24 132 H 396" />
        <path d="M 24 36 H 396" opacity="0.55" />
        <path d="M 24 84 H 396" opacity="0.55" />
      </g>

      <g className="text-accent-electric" stroke="currentColor" fill="none">
        <path
          d="M 24 118 C 84 62 140 144 202 82 S 322 38 396 70"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-55 transition-opacity duration-200 group-hover:opacity-80"
        />

        <g className="opacity-55 transition-opacity duration-200 group-hover:opacity-80" strokeWidth="2">
          <circle cx="24" cy="118" r="4" fill="white" />
          <circle cx="202" cy="82" r="4" fill="white" />
          <circle cx="396" cy="70" r="4" fill="white" />
        </g>
      </g>

      <g className="fill-gray-500" opacity="0.45">
        <circle cx="202" cy="132" r="2" />
        <circle cx="316" cy="132" r="2" />
      </g>
    </svg>
  );
}
