import type { ReactElement } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingAlign = "left" | "center";
type SectionHeadingSize = "lg" | "md";
type SectionHeadingAs = "h1" | "h2" | "h3";

const alignClassName: Record<SectionHeadingAlign, string> = {
  left: "text-left",
  center: "text-center",
};

const titleClassName: Record<SectionHeadingSize, string> = {
  lg: "text-3xl md:text-4xl font-semibold tracking-tight text-gray-900",
  md: "text-2xl md:text-3xl font-semibold tracking-tight text-gray-900",
};

const subtitleClassName: Record<SectionHeadingSize, string> = {
  lg: "mt-4 text-base md:text-lg text-gray-600 leading-relaxed",
  md: "mt-4 text-base text-gray-600 leading-relaxed",
};

export default function SectionHeading(props: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: SectionHeadingAlign;
  size?: SectionHeadingSize;
  as?: SectionHeadingAs;
}): ReactElement {
  const { eyebrow, title, subtitle, align = "left", size = "lg", as = "h2" } = props;

  const HeadingTag = as;

  return (
    <div className={cn(alignClassName[align])}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">
          {eyebrow}
        </p>
      ) : null}

      <HeadingTag className={cn(eyebrow ? "mt-3" : undefined, titleClassName[size])}>{title}</HeadingTag>

      {subtitle ? <p className={subtitleClassName[size]}>{subtitle}</p> : null}
    </div>
  );
}
