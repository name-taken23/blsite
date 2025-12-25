import MagneticButton from "@/components/ui/MagneticButton";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import List from "@/components/ui/List";
import Section from "@/components/ui/Section";
import BrandMark from "@/components/brand/BrandMark";
import HeroBackdrop from "@/components/graphics/HeroBackdrop";
import Surface from "@/components/ui/Surface";
import { SystemMapHero } from "@/components/visual/SystemMapHero";
import ConstraintSet from "@/components/ui/ConstraintSet";

export default function Hero() {
  return (
    <Section variant="plain" containerClassName="relative py-16 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <HeroBackdrop className="absolute inset-0 h-full w-full opacity-[0.04]" />
      </div>

      <div className="relative grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="max-w-3xl">
          <div className="mb-6">
            <BrandMark variant="lockup" size="md" />
          </div>

          <div className="inline-flex">
            <Chip label="Clarity. Speed. Control." tone="neutral" />
          </div>

          <div className="relative">
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-1">
              Modernise production systems.
              <br />
              <span className="text-ink-2">Reduce risk and waste. Keep control.</span>
            </h1>
          </div>

          <p className="mt-6 text-lg text-ink-2 leading-relaxed">
            <span className="font-semibold text-ink-1">For leaders accountable for production change.</span>{" "}
            BlackLake takes ownership of modernisation across software, data, and automation.
            Work starts with the <span className="font-semibold text-ink-1">BlackLake Blueprint</span>: a paid, structured assessment that produces a scoped plan, risks, and a sequence of changes you can operate.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
            <Button href="/work" variant="secondary" size="lg">
              View Work
            </Button>
          </div>

          <div className="mt-10">
            <List
              items={[
                "Founder-led delivery",
                "Baselines, guardrails, controlled rollout",
                "Work shown with context",
              ]}
              variant="none"
              density="compact"
              className="text-sm text-gray-600"
            />
          </div>
        </div>

        <div className="lg:mt-2">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-5">System map</div>

          <Surface variant="inset" className="p-5">
            <div className="h-64 sm:h-72 md:h-80">
              <SystemMapHero
                className="h-full w-full"
                decorative={false}
                title="Blueprint process diagram"
                description="Diagram showing multiple inputs flowing through constraint analysis to produce a validated Blueprint deliverable."
              />
            </div>

            <div className="mt-5 pt-5 border-t border-line-2">
              <p className="text-sm text-ink-2 leading-relaxed">
                Multiple <span className="font-semibold text-gray-800">inputs</span> flow through <span className="font-semibold text-gray-800">constraint analysis</span> to produce a validated <span className="font-semibold text-gray-800">Blueprint</span>.
              </p>

              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-ink-3">Primary constraints</div>
                <ConstraintSet
                  className="mt-3"
                  ariaLabel="Primary constraints"
                  meter="bar"
                  items={[
                    { kind: "latency", label: "Latency", intensity: 70 },
                    { kind: "risk", label: "Risk", intensity: 85 },
                    { kind: "cost", label: "Cost", intensity: 60 },
                  ]}
                />
              </div>
            </div>
          </Surface>
        </div>
      </div>
    </Section>
  );
}
