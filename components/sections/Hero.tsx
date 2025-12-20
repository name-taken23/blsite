"use client";

import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
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

          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-gray-700">
            Clarity. Speed. Control.
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
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-900 hover:border-gray-300 transition-colors"
            >
              View selected work
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-2 text-sm text-gray-600">
            <div>Founder-led delivery</div>
            <div>Baselines, guardrails, controlled rollout</div>
            <div>Work shown with context</div>
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
                <IconBadge icon={<Gauge className="h-full w-full" />} label="Latency budget" tone="tinted" />
                <IconBadge icon={<Coins className="h-full w-full" />} label="Cost ceiling" tone="tinted" />
                <IconBadge icon={<Shield className="h-full w-full" />} label="Change risk" tone="tinted" />
              </div>
            </Surface>

            {/* Panel C */}
            <Surface
              variant="plain"
              className="rounded-xl p-4 transition-colors duration-200 group-hover:border-gray-300"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Deliverable</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 leading-relaxed">
                <li>Scoped plan and delivery sequence</li>
                <li>Risks, guardrails, and rollback path</li>
              </ul>
            </Surface>
          </div>
        </Surface>
      </div>
    </Section>
  );
}
