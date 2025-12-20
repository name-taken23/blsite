"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import List from "@/components/ui/List";
import SignalWave from "@/components/graphics/SignalWave";
import Section from "@/components/ui/Section";
import BrandMark from "@/components/brand/BrandMark";
import HeroBackdrop from "@/components/graphics/HeroBackdrop";
import TopologyLines from "@/components/graphics/TopologyLines";
import Surface from "@/components/ui/Surface";
import IconBadge from "@/components/ui/IconBadge";
import { Coins, Gauge, Shield } from "lucide-react";

export default function Hero() {
  return (
    <Section variant="plain" containerClassName="relative py-16 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <HeroBackdrop className="absolute inset-0 h-full w-full opacity-[0.10]" />
        <div className="absolute -right-24 -top-16 w-[44rem] opacity-[0.07] hidden sm:block">
          <TopologyLines className="h-full w-full" />
        </div>
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
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-8 opacity-[0.035] sm:opacity-[0.05]"
            >
              <div className="scale-[2.25] sm:scale-[2.75] origin-top-right">
                <BrandMark variant="mark" size="lg" />
              </div>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Modernise production systems.
              <span className="block text-gray-700">Reduce risk and waste. Keep control.</span>
            </h1>
          </div>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">For leaders accountable for production change.</span>{" "}
            BlackLake takes ownership of modernisation across software, data, and automation.
            Work starts with the <span className="font-semibold text-gray-800">BlackLake Blueprint</span>: a paid, structured assessment that produces a scoped plan, risks, and a sequence of changes you can operate.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
            <Button href="/work" variant="secondary" size="lg">
              View selected work
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

        <Surface
          variant="tinted"
          className="group p-6 lg:mt-2 transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">System snapshot</div>

          <div className="mt-5 grid gap-3">
            {/* Panel A */}
            <Surface
              variant="plain"
              className="rounded-xl p-4 transition-colors duration-200 group-hover:border-gray-300"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Signal</div>
              <div className="mt-3 h-28">
                <SignalWave className="h-full w-full" />
              </div>
            </Surface>

            {/* Panel B */}
            <Surface
              variant="plain"
              className="rounded-xl p-4 transition-colors duration-200 group-hover:border-gray-300"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Constraints</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <IconBadge icon={Gauge} label="Latency budget" tone="tinted" />
                <IconBadge icon={Coins} label="Cost ceiling" tone="tinted" />
                <IconBadge icon={Shield} label="Change risk" tone="tinted" />
              </div>
            </Surface>

            {/* Panel C */}
            <Surface
              variant="plain"
              className="rounded-xl p-4 transition-colors duration-200 group-hover:border-gray-300"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Deliverable</div>
              <List
                items={[
                  "Scoped plan and delivery sequence",
                  "Risks, guardrails, and rollback path",
                ]}
                variant="none"
                density="compact"
                className="mt-3"
              />
            </Surface>
          </div>
        </Surface>
      </div>
    </Section>
  );
}
