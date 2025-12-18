"use client";

import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-gray-700">
            Clarity. Speed. Control.
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Modernise production systems.
            <span className="block text-gray-700">Reduce risk and waste. Keep control.</span>
          </h1>

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
      </div>
    </section>
  );
}
