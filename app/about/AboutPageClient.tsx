import PageShell from "@/components/layout/PageShell";
import { CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Section from "@/components/ui/Section";

const principles = [
  {
    title: "Start with constraints",
    description:
      "Define what cannot break (budgets, SLAs, contracts, compliance). Design work so those constraints are testable and monitored.",
  },
  {
    title: "Measure before changing",
    description:
      "Baseline latency, cost, failure modes, and operator load. Changes ship behind guardrails with an explicit rollback path.",
  },
  {
    title: "Prefer boring interfaces",
    description:
      "Stabilise boundaries and data contracts so teams can iterate without cascading coordination or brittle integration.",
  },
  {
    title: "Make operations a first-class deliverable",
    description:
      "Runbooks, alerts, and ownership are part of delivery. If it cannot be operated, it is not finished.",
  },
];

const credibility = [
  "Reduced a production analytics pipeline critical path from tens of minutes to low single-digit minutes, improving time-to-data predictability.",
  "Engineered event-processing paths around a single-digit millisecond latency budget with controlled degradation under load.",
  "Shipped an interactive constrained-generation product with seconds-level latency and fewer obvious baseline failures.",
  "Delivered changes that reduce operator load by making behaviour observable and diagnosable.",
];

const goodFit = [
  "You have a production system where change is risky because behaviour is poorly measured or poorly understood.",
  "Latency, cost, and reliability budgets exist, but they are not enforced in delivery (no baselines, guardrails, or rollback).",
  "A data pipeline feeds downstream decisions and refresh cycles, and missed windows create business impact.",
  "You need to ship AI-enabled functionality with explicit constraints, evaluation, and known failure modes.",
  "Ownership is unclear across teams, and progress is blocked by handoffs rather than technical complexity.",
];

export default function AboutPageClient() {
  return (
    <PageShell>
      <Section variant="plain">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700">
            Operating philosophy
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Modernise production systems with clarity, control, and ownership.
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            BlackLake approaches production change as risk management. Constraints are made explicit, budgets are measured, and delivery is structured so
            changes can be rolled out safely and reversed quickly.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            The objective is controlled progress: clearer behaviour, lower operational load, and systems that remain changeable without trading
            reliability for throughput.
          </p>
        </div>
      </Section>

      <Section variant="tinted">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">Principles</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Practical delivery rules</h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{principle.title}</div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="plain">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">Credibility</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Founder delivery, compressed</h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Examples are described with industry + system descriptors to preserve confidentiality.
          </p>
        </div>

        <div className="mt-10 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <ul className="space-y-4">
            {credibility.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-electric flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section variant="tinted">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">Fit</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">When BlackLake is a good fit</h2>
        </div>

        <div className="mt-10 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <ul className="space-y-4">
            {goodFit.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-electric flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section variant="framed">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Start with a Blueprint</h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
              The BlackLake Blueprint is a paid, structured first step. It defines constraints, risks, success measures, and a delivery sequence you can
              operate.
            </p>
            <div className="mt-8">
              <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
