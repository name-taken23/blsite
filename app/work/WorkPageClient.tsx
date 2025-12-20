"use client";

import PageShell from "@/components/layout/PageShell";
import MagneticButton from "@/components/ui/MagneticButton";
import { Clock } from "lucide-react";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";
import TopologyLines from "@/components/graphics/TopologyLines";

export default function WorkPageClient() {
  const caseStudies = getAllCaseStudies();

  const pickTopResults = (results: Array<{ metric: string; value: string; description: string }>) =>
    results.slice(0, 2);

  if (!caseStudies.length) {
    return (
      <PageShell>
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Selected work</h1>
            <p className="mt-4 text-gray-600">No case studies are available yet.</p>
          </div>
        </section>
      </PageShell>
    );
  }

  const featured = caseStudies[0];
  const rest = caseStudies.slice(1);

  return (
    <PageShell>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700">
              Selected case studies
            </div>

            <div className="mt-6 h-10 w-full opacity-60">
              <TopologyLines className="h-full w-full" />
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Selected work</h1>
            <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
              Case studies are written to preserve confidentiality: industry + system descriptors, constraints first, and outcomes stated conservatively.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100" />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">Featured</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">{featured.title}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{featured.description}</p>
          </div>

          <Link
            href={`/case-studies/${featured.slug}`}
            id={featured.slug}
            className="mt-8 block rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-colors"
          >
            <div className="p-6 md:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {pickTopResults(featured.results).map((result) => (
                  <div
                    key={`${featured.slug}::${result.metric}`}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-4"
                  >
                    <div className="text-xl md:text-2xl font-semibold text-gray-900">{result.value}</div>
                    <div className="mt-1 text-xs font-semibold text-gray-700">{result.metric}</div>
                    <div className="mt-1 text-xs text-gray-600 leading-relaxed">{result.description}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-700">
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1">{featured.industry}</span>
                <span className="inline-flex items-center gap-1 text-gray-600">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.timeline}
                </span>
              </div>

              <h3 className="mt-6 text-xl md:text-2xl font-semibold tracking-tight text-gray-900">{featured.title}</h3>
              <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">{featured.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featured.technologies.slice(0, 8).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">More projects</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Additional work</h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {rest.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                id={caseStudy.slug}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-300 transition-colors"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {pickTopResults(caseStudy.results).map((result) => (
                    <div
                      key={`${caseStudy.slug}::${result.metric}`}
                      className="rounded-xl border border-gray-200 bg-gray-50 p-4"
                    >
                      <div className="text-lg font-semibold text-gray-900">{result.value}</div>
                      <div className="mt-1 text-xs font-semibold text-gray-700">{result.metric}</div>
                      <div className="mt-1 text-xs text-gray-600 leading-relaxed">{result.description}</div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-xs font-semibold text-gray-600">
                  {caseStudy.industry}
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {caseStudy.timeline}
                  </span>
                </p>

                <h3 className="mt-3 text-lg font-semibold text-gray-900">{caseStudy.title}</h3>
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Discuss a similar system</h2>
              <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                BlackLake works best with teams tackling complex technical problems. Share your context and constraints, and I’ll suggest a practical next step.
              </p>
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
          </div>
        </div>
      </section>
    </PageShell>
  );
}
