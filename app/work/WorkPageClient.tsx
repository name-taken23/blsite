"use client";

import PageShell from "@/components/layout/PageShell";
import MagneticButton from "@/components/ui/MagneticButton";
import Section from "@/components/ui/Section";
import Surface from "@/components/ui/Surface";
import OutcomeTile from "@/components/ui/OutcomeTile";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";
import TopologyLines from "@/components/graphics/TopologyLines";
import ArtifactTile from "@/components/case-studies/ArtifactTile";

export default function WorkPageClient() {
  const caseStudies = getAllCaseStudies();

  const pickTopResults = (results: Array<{ metric: string; value: string; description: string }>) =>
    results.slice(0, 3);

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
  const hasFeatured = Boolean(featured);

  return (
    <PageShell>
      <Section variant="plain" spacing="pageHeader" containerClassName="pb-8 md:pb-10">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Examples with context"
            subtitle="Case studies are written to preserve confidentiality: industry + system descriptors, constraints first, and outcomes stated conservatively."
            size="lg"
            as="h1"
          />
          <p className="mt-4 text-sm text-gray-600">
            Examples reflect founder-led production work across engagements; identifiers removed.
          </p>
        </div>
      </Section>

      <div className="border-t border-line-2" />

      {/* FEATURED SPOTLIGHT */}
      <Section variant="framed" containerClassName="py-14 md:py-16">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Featured"
            title="Latest Case Study"
            size="md"
          />
        </div>

        <div className="mt-8 relative">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-5">
            <TopologyLines className="h-full w-full" />
          </div>

          <div className="relative z-10">
            {hasFeatured ? (
              <ArtifactTile
                caseStudy={featured}
                variant="spotlight"
                rightSlot={
                  <div className="grid gap-4 bg-surface-3 rounded-xl p-2 border border-line-2">
                    {pickTopResults(featured.results).map((result) => (
                      <OutcomeTile
                        key={`${featured.slug}::${result.metric}`}
                        value={result.value}
                        metric={result.metric}
                        context={result.description}
                        surfaceVariant="raised"
                        ornament="rail"
                        className="p-6"
                      />
                    ))}
                  </div>
                }
              />
            ) : null}
          </div>
        </div>
      </Section>

      {/* MORE PROJECTS */}
      <Section variant="tinted" containerClassName="py-14 md:py-16">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Archive" title="Additional work" size="md" />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {rest.map((caseStudy) => (
            <ArtifactTile key={caseStudy.slug} caseStudy={caseStudy} />
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
              <Link href="/services" className="underline hover:text-accent-electric">See how services run</Link>, 
              share your context, and we’ll suggest a practical next step.
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
