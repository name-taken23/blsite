"use client";

import PageShell from "@/components/layout/PageShell";
import MagneticButton from "@/components/ui/MagneticButton";
import Section from "@/components/ui/Section";
import Surface from "@/components/ui/Surface";
import OutcomeTile from "@/components/ui/OutcomeTile";
import SectionHeading from "@/components/ui/SectionHeading";
import OutcomeStrip from "@/components/ui/OutcomeStrip";
import { Clock } from "lucide-react";
import Link from "next/link";
import { getAllCaseStudies, getProofMetrics } from "@/lib/case-studies";
import TopologyLines from "@/components/graphics/TopologyLines";

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
      <Section variant="plain">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700">
            Selected case studies
          </div>

          <div className="mt-6 h-10 w-full opacity-60">
            <TopologyLines className="h-full w-full" />
          </div>
          <div className="mt-6">
            <SectionHeading
              title="Selected work"
              subtitle="Case studies are written to preserve confidentiality: industry + system descriptors, constraints first, and outcomes stated conservatively."
              size="lg"
              as="h1"
            />
          </div>
        </div>
      </Section>

      <div className="border-t border-gray-100" />

      <Section variant="framed" containerClassName="py-14 md:py-16">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Featured"
            title={featured.title}
            subtitle={featured.description}
            size="md"
          />
        </div>

        <Surface id={featured.slug} variant="raised" className="mt-8 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                Confidential case study
              </span>

              <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                <Link
                  href={`/case-studies/${featured.slug}`}
                  aria-label={`Read case study: ${featured.title}`}
                  className="hover:text-accent-electric transition-colors"
                >
                  {featured.title}
                </Link>
              </h3>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">{featured.description}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-700">
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1">{featured.industry}</span>
                <span className="inline-flex items-center gap-1 text-gray-600">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.timeline}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {featured.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={`/case-studies/${featured.slug}`}
                  aria-label={`Read case study: ${featured.title}`}
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:border-gray-300 transition-colors"
                >
                  Read case study
                </Link>
              </div>
            </div>

            <div className="relative">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08]">
                <TopologyLines className="h-full w-full" />
              </div>

              <div className="relative grid gap-3">
                {pickTopResults(featured.results).map((result) => (
                  <OutcomeTile
                    key={`${featured.slug}::${result.metric}`}
                    value={result.value}
                    metric={result.metric}
                    context={result.description}
                    surfaceVariant="inset"
                    className="p-5"
                  />
                ))}
              </div>
            </div>
          </div>
        </Surface>
      </Section>

      <Section variant="tinted" containerClassName="py-14 md:py-16">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="More projects" title="Additional work" size="md" />
        </div>

        <OutcomeStrip
          className="mt-8 max-w-5xl"
          items={getProofMetrics(3).map((item) => ({
            value: item.value,
            metric: item.metric,
            href: `/case-studies/${item.caseStudySlug}`,
          }))}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {rest.map((caseStudy) => (
            <Surface key={caseStudy.slug} id={caseStudy.slug} variant="raised" className="p-6">
              {caseStudy.results[0] ? (
                <OutcomeTile
                  value={caseStudy.results[0].value}
                  metric={caseStudy.results[0].metric}
                  context={caseStudy.results[0].description}
                  surfaceVariant="inset"
                  className="p-5"
                />
              ) : null}

              <p className="mt-5 text-xs font-semibold text-gray-600">
                {caseStudy.industry}
                <span className="mx-2 text-gray-300">•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {caseStudy.timeline}
                </span>
              </p>

              <div className="mt-3 flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  <Link
                    href={`/case-studies/${caseStudy.slug}`}
                    aria-label={`Read case study: ${caseStudy.title}`}
                    className="hover:text-accent-electric transition-colors"
                  >
                    {caseStudy.title}
                  </Link>
                </h3>
                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  aria-label={`Read case study: ${caseStudy.title}`}
                  className="shrink-0 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 hover:border-gray-300 transition-colors"
                >
                  Read case study
                </Link>
              </div>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">{caseStudy.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {caseStudy.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Surface>
          ))}
        </div>
      </Section>

      <Section variant="framed">
        <Surface variant="inset" className="p-8 md:p-10">
          <div className="max-w-3xl">
            <SectionHeading
              title="Discuss a similar system"
              subtitle="BlackLake works best with teams tackling complex technical problems. Share your context and constraints, and I’ll suggest a practical next step."
              size="lg"
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-900 hover:border-gray-300 transition-colors"
              >
                About BlackLake
              </Link>
            </div>
          </div>
        </Surface>
      </Section>
    </PageShell>
  );
}
