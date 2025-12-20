"use client";

import { CaseStudy } from "@/lib/case-studies";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const outcomes = caseStudy.results.slice(0, 5);

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
              {caseStudy.title}
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600">
              {caseStudy.description}
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <dt className="text-gray-500">Industry</dt>
                <dd className="mt-1 font-semibold text-gray-900">{caseStudy.industry}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Timeline</dt>
                <dd className="mt-1 font-semibold text-gray-900">{caseStudy.timeline}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Team size</dt>
                <dd className="mt-1 font-semibold text-gray-900">{caseStudy.teamSize}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className={`h-56 rounded-xl bg-gradient-to-br ${caseStudy.gradient}`} />
            <div className="mt-6 text-sm text-gray-600 leading-relaxed">
              <div className="font-semibold text-gray-900">At a glance</div>
              <div className="mt-2">
                A real project described with constraints, tradeoffs, and what was delivered.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="text-lg font-semibold text-gray-900">Outcomes</h2>
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">First-order signals</div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {outcomes.map((result) => (
              <div key={result.metric} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">{result.value}</div>
                <div className="mt-2 text-sm font-semibold text-gray-900">{result.metric}</div>
                {result.description ? (
                  <div className="mt-2 text-sm text-gray-600 leading-relaxed">{result.description}</div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Context</h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">{caseStudy.narrative.context}</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Constraint</h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">{caseStudy.narrative.constraint}</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Intervention</h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">{caseStudy.narrative.intervention}</p>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Key decisions</h3>
              <ul className="mt-4 space-y-3">
                {caseStudy.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-electric flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Measured outcome</h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">{caseStudy.narrative.measuredOutcome}</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Why it matters</h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">{caseStudy.narrative.whyItMatters}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Implementation</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Practical technology choices that matched the constraints.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {caseStudy.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {caseStudy.testimonial && (
        <section className="max-w-3xl mx-auto px-6 py-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <blockquote className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-6 text-sm text-gray-600">
              <div className="font-semibold text-gray-900">{caseStudy.testimonial.author}</div>
              <div>{caseStudy.testimonial.role}</div>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Discuss a similar system
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            If this resembles your constraints, share a short description of what you run today and what needs to change.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
