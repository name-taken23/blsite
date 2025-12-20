import Image from "next/image";
import logo from "@/public/logo.png";

export type BrandMarkVariant = "mark" | "lockup" | "wordmark";
export type BrandMarkSize = "sm" | "md" | "lg";
export type BrandMarkTheme = "auto";

const MARK_PX: Record<BrandMarkSize, number> = {
  sm: 20,
  md: 28,
  lg: 40,
};

const WORDMARK_CLASS: Record<BrandMarkSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const GAP_CLASS: Record<BrandMarkSize, string> = {
  sm: "gap-2",
  md: "gap-2.5",
  lg: "gap-3",
};

export default function BrandMark(props: {
  variant: BrandMarkVariant;
  size: BrandMarkSize;
  theme?: BrandMarkTheme;
}) {
  const { variant, size } = props;

  const mark = (
    <span className="relative inline-flex" aria-hidden={variant !== "mark" ? true : undefined}>
      <span className="group relative inline-flex">
        <Image
          src={logo}
          alt="BlackLake"
          width={MARK_PX[size]}
          height={MARK_PX[size]}
          className="h-auto w-auto select-none"
          priority={false}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 45%, rgba(255,255,255,0) 100%)",
          }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-1 rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 ring-1 ring-accent-electric/20"
        />
      </span>
    </span>
  );

  const wordmark = (
    <span
      className={[
        "inline-flex items-center text-gray-900",
        "font-semibold tracking-[0.22em] uppercase",
        "leading-none",
        WORDMARK_CLASS[size],
      ].join(" ")}
    >
      BLACKLAKE
    </span>
  );

  if (variant === "mark") return mark;
  if (variant === "wordmark") return wordmark;

  return (
    <span
      className={[
        "inline-flex items-center",
        GAP_CLASS[size],
        "transition-colors duration-200",
      ].join(" ")}
    >
      {mark}
      {wordmark}
    </span>
  );
}
