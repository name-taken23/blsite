"use client";

import PageShell from "@/components/layout/PageShell";
import MagneticButton from "@/components/ui/MagneticButton";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import Section from "@/components/ui/Section";
import Surface from "@/components/ui/Surface";
import OutcomeTile from "@/components/ui/OutcomeTile";
import SectionHeading from "@/components/ui/SectionHeading";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";
import TopologyLines from "@/components/graphics/TopologyLines";
import AppIcon from "@/components/ui/AppIcon";

export default function WorkPageClient() {
  const caseStudies = getAllCaseStudies();

  const pickTopResults = (results: Array<{ metric: string; value: string; description: string }>) =>
    results.slice(0, 2);

  if (!caseStudies.length) {
    return (
      <PageShell>
        <Section variant="plain" containerClassName="pt-20 pb-16 md:pt-28 md:pb-20">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Selected work</h1>
          <p className="mt-4 text-gray-600">No case studies are available yet.</p>
        </Section>
      </PageShell>
    );
  }

  const featured = caseStudies[0];
  const rest = caseStudies.slice(1);

  return (
    <PageShell>
      <Section variant="plain" containerClassName="pt-24 pb-8 md:pt-32">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Examples with context"
            subtitle="Case studies are written to preserve confidentiality: industry + system descriptors, constraints first, and outcomes stated conservatively."
            size="lg"
            as="h1"
          />
        </div>
      </Section>

      <div className="border-t border-gray-100" />

      {/* FEATURED SPOTLIGHT */}
      <Section variant="framed" containerClassName="py-14 md:py-16">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Featured"
            title="Latest Case Study"
            size="md"
          />
        </div>

        <Surface id={featured.slug} variant="glow" className="mt-8 p-8 md:p-12 relative overflow-hidden">
           <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]">
              <TopologyLines className="h-full w-full" />
           </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="flex flex-col h-full">
              <Chip label="Confidential case study" tone="tinted" className="self-start mb-6" />

              <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
                <Link
                  href={`/case-studies/${featured.slug}`}
                  className="hover:text-accent-electric transition-colors"
                >
                  {featured.title}
                </Link>
              </h3>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed flex-grow">{featured.description}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Chip label={featured.industry} />
                <Chip icon={Clock} label={featured.timeline} />
              </div>

              <div className="mt-8">
                 <Button
                    href={`/case-studies/${featured.slug}`}
                    variant="primary"
                    size="lg"
                  >
                    Read case study
                  </Button>
              </div>
            </div>

            <div className="grid gap-4 bg-gray-50/50 rounded-xl p-2 border border-blue-50/50">
              {pickTopResults(featured.results).map((result) => (
                <OutcomeTile
                  key={`${featured.slug}::${result.metric}`}
                  value={result.value}
                  metric={result.metric}
                  context={result.description}
                  surfaceVariant="raised" // Popping out
                  ornament="rail"
                  className="p-6"
                />
              ))}
            </div>
          </div>
        </Surface>
      </Section>

      {/* MORE PROJECTS */}
      <Section variant="tinted" containerClassName="py-14 md:py-16">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Archive" title="Additional work" size="md" />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((caseStudy) => (
            <Surface key={caseStudy.slug} id={caseStudy.slug} variant="raised" className="p-8 flex flex-col group">
              {caseStudy.results[0] ? (
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="text-3xl font-bold text-accent-electric tracking-tight">
                    {caseStudy.results[0].value}
                  </div>
                  <div className="text-sm font-medium text-gray-900 mt-1">
                    {caseStudy.results[0].metric}
                  </div>
                </div>
              ) : null}

              <div className="mb-4">
                 <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                    {caseStudy.industry}
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 group-hover:text-accent-electric transition-colors">
                  <Link href={`/case-studies/${caseStudy.slug}`}>
                    {caseStudy.title}
                  </Link>
                </h3>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-6">{caseStudy.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {caseStudy.tags.slice(0, 3).map((tag) => (
                  <Chip key={tag} label={tag} size="sm" tone="tinted" />
                ))}
              </div>
              
              <div className="mt-8">
                <Button 
                   href={`/case-studies/${caseStudy.slug}`} 
                   variant="tertiary" 
                   size="sm" 
                   className="px-0 group-hover:text-accent-electric"
                >
                  Read case study <AppIcon icon={ArrowRight} className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Surface>
          ))}
        </div>
      </Section>

      <Section variant="framed">
        <Surface variant="inset" className="p-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900">
              Discuss a similar system
            </h2>
            <p className="mt-4 text-gray-600">
              BlackLake works best with teams tackling complex technical problems. 
              <Link href="/services" className="underline hover:text-accent-electric">Read about the Blueprint</Link>, 
              share your context, and I’ll suggest a practical next step.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
            </div>
          </div>
        </Surface>
      </Section>
    </PageShell>
  );
}
