"use client";

import { useState } from "react";
import PageShell from "@/components/layout/PageShell";
import MagneticButton from "@/components/ui/MagneticButton";
import Section from "@/components/ui/Section";
import Surface from "@/components/ui/Surface";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { getAllCaseStudies, type CaseStudy } from "@/lib/case-studies";
import ArtifactTile from "@/components/case-studies/ArtifactTile";
import { cn } from "@/lib/utils";
import { Layers, Brain, Package, ArrowRight } from "lucide-react";
import AppIcon from "@/components/ui/AppIcon";

type Category = "all" | CaseStudy["category"];

const categories: { id: Category; label: string; icon: typeof Layers; description: string }[] = [
  { id: "all", label: "All Work", icon: Layers, description: "Complete portfolio" },
  { id: "systems", label: "Systems", icon: Layers, description: "Infrastructure, event architecture, real-time processing" },
  { id: "intelligence", label: "Intelligence", icon: Brain, description: "Data pipelines, ML systems, analytics platforms" },
  { id: "product", label: "Product", icon: Package, description: "Consumer apps, workflow tools, AI features" },
];

function CategoryFilter({
  selected,
  onChange,
}: {
  selected: Category;
  onChange: (cat: Category) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = selected === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
              "border",
              isActive
                ? "bg-ink-1 text-white border-ink-1"
                : "bg-surface-1 text-ink-2 border-line-2 hover:border-line-1 hover:bg-surface-2"
            )}
          >
            <AppIcon icon={cat.icon} className="h-4 w-4" />
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-ink-1 tabular-nums">{value}</div>
      <div className="mt-1 text-sm text-ink-3 uppercase tracking-wide">{label}</div>
    </div>
  );
}

export default function WorkPageClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const allCaseStudies = getAllCaseStudies();

  const filteredStudies =
    activeCategory === "all"
      ? allCaseStudies
      : allCaseStudies.filter((s) => s.category === activeCategory);

  const currentCategoryInfo = categories.find((c) => c.id === activeCategory);

  if (!allCaseStudies.length) {
    return (
      <PageShell>
        <Section variant="plain" containerClassName="pt-20 pb-16 md:pt-28 md:pb-20">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Selected work</h1>
          <p className="mt-4 text-gray-600">No case studies are available yet.</p>
        </Section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      {/* HERO SECTION */}
      <Section variant="plain" spacing="pageHeader" containerClassName="pb-12">
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow="Case Studies"
            title="Work that changed production systems"
            subtitle="Each engagement started with a specific constraint—latency, cost, reliability, adoption. These are the measurable outcomes."
            size="lg"
            as="h1"
          />
        </div>

        {/* Quick stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-line-2">
          <StatCard value="6" label="Case Studies" />
          <StatCard value="5" label="Industries" />
          <StatCard value="3" label="Expertise Areas" />
          <StatCard value="100%" label="Measured Outcomes" />
        </div>
      </Section>

      {/* CATEGORY FILTER */}
      <Section variant="tinted" containerClassName="py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-ink-1">Filter by expertise</h2>
            {currentCategoryInfo && activeCategory !== "all" && (
              <p className="text-sm text-ink-3 mt-1">{currentCategoryInfo.description}</p>
            )}
          </div>
          <CategoryFilter selected={activeCategory} onChange={setActiveCategory} />
        </div>
      </Section>

      {/* CASE STUDIES GRID */}
      <Section variant="plain" containerClassName="py-16">
        {filteredStudies.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-ink-3">No case studies match this filter.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredStudies.map((caseStudy, index) => (
              <ArtifactTile
                key={caseStudy.slug}
                caseStudy={caseStudy}
                variant={index === 0 && activeCategory === "all" ? "featured" : "grid"}
                className={index === 0 && activeCategory === "all" ? "md:col-span-2 lg:col-span-2" : ""}
              />
            ))}
          </div>
        )}
      </Section>

      {/* APPROACH SECTION */}
      <Section variant="framed" containerClassName="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            eyebrow="Methodology"
            title="How we document outcomes"
            subtitle="Every case study follows the same structure: context, constraint, intervention, measured outcome. No vanity metrics."
            size="md"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3 text-left">
            <Surface variant="inset" className="p-6">
              <div className="text-2xl font-bold text-accent-electric">01</div>
              <h3 className="mt-3 text-lg font-semibold text-ink-1">Constraint-first</h3>
              <p className="mt-2 text-sm text-ink-2">
                We start with the hard limit—latency budget, cost ceiling, compliance requirement. The constraint shapes the solution.
              </p>
            </Surface>

            <Surface variant="inset" className="p-6">
              <div className="text-2xl font-bold text-accent-electric">02</div>
              <h3 className="mt-3 text-lg font-semibold text-ink-1">Measured outcomes</h3>
              <p className="mt-2 text-sm text-ink-2">
                Every claim has a number. &ldquo;Faster&rdquo; becomes &ldquo;4h → 35min&rdquo;. &ldquo;Better&rdquo; becomes &ldquo;+8% availability&rdquo;. No hand-waving.
              </p>
            </Surface>

            <Surface variant="inset" className="p-6">
              <div className="text-2xl font-bold text-accent-electric">03</div>
              <h3 className="mt-3 text-lg font-semibold text-ink-1">Anonymised context</h3>
              <p className="mt-2 text-sm text-ink-2">
                Client identifiers removed. Industry and system type preserved. Enough to understand the problem, nothing that shouldn&apos;t be shared.
              </p>
            </Surface>
          </div>
        </div>
      </Section>

      {/* CTA SECTION */}
      <Section variant="tinted" containerClassName="py-16">
        <Surface variant="raised" className="p-10 md:p-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-ink-1">
              Have a similar constraint?
            </h2>
            <p className="mt-4 text-ink-2 text-lg">
              Share your system context and the hard limits you&apos;re working within.
              We&apos;ll tell you if we can help—and what a realistic outcome looks like.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <MagneticButton href="/contact">
                Start with a Blueprint
              </MagneticButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-ink-1 hover:text-accent-electric transition-colors"
              >
                See how we work
                <AppIcon icon={ArrowRight} className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Surface>
      </Section>
    </PageShell>
  );
}
