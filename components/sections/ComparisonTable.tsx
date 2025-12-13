"use client";

import { Check, X } from "lucide-react";

const comparisons = [
  {
    category: "Speed to Production",
    blacklake: "2-4 weeks",
    inhouse: "6-12 months",
    advantage: "blacklake",
  },
  {
    category: "Cost (First 6 months)",
    blacklake: "$80K-150K",
    inhouse: "$300K-500K",
    advantage: "blacklake",
  },
  {
    category: "Expertise Access",
    blacklake: "10+ AI engineers",
    inhouse: "1-2 junior devs",
    advantage: "blacklake",
  },
  {
    category: "Risk of Failure",
    blacklake: "Low (proven frameworks)",
    inhouse: "High (learning curve)",
    advantage: "blacklake",
  },
];

export default function ComparisonTable({ embedded = false }: { embedded?: boolean }) {
  const content = (
    <>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-900">
          Why <span className="text-gradient">BlackLake</span> vs In-House?
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
          Building AI in-house is expensive, slow, and risky. Here&apos;s how we compare.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-1"></div>
          <div className="text-center bg-accent-electric text-white font-bold py-4 rounded-t-2xl">
            BlackLake
          </div>
          <div className="text-center bg-gray-300 text-gray-700 font-bold py-4 rounded-t-2xl">
            In-House Team
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-2">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-accent-electric/30 transition-colors"
            >
              <div className="font-semibold text-gray-900 text-sm md:text-base">
                {item.category}
              </div>
              <div className="text-center bg-blue-50 rounded-lg p-3 border border-accent-electric/20">
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-900">{item.blacklake}</span>
                </div>
              </div>
              <div className="text-center bg-gray-100 rounded-lg p-3 border border-gray-300">
                <div className="flex items-center justify-center gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item.inhouse}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-accent-electric/5 to-blue-50 border border-accent-electric/20 rounded-2xl p-8">
          <p className="text-lg text-gray-700 mb-4">
            <strong className="text-gray-900">Save 70% on costs</strong> and launch <strong className="text-gray-900">10x faster</strong>
          </p>
          <p className="text-sm text-gray-600">
            Stop hiring. Stop training. Start shipping AI in weeks, not months.
          </p>
        </div>
      </div>
    </>
  );

  if (embedded) {
    return (
      <div className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          {content}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {content}
      </div>
    </section>
  );
}
