import PageShell from "@/components/layout/PageShell";
import MagneticButton from "@/components/ui/MagneticButton";
import Chip from "@/components/ui/Chip";
import List from "@/components/ui/List";
import Section from "@/components/ui/Section";
import Surface from "@/components/ui/Surface";
import SectionHeading from "@/components/ui/SectionHeading";
import TopologyLines from "@/components/graphics/TopologyLines";
import BrandMark from "@/components/brand/BrandMark";
import LazyMount from "@/components/ui/LazyMount";

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
  "Reduced a production analytics pipeline critical path from hundreds of minutes to low-thousands of seconds, improving time-to-data predictability.",
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
        <div className="max-w-3xl relative">
          {/* Brand moment - subtle watermark */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 opacity-[0.04] hidden lg:block">
            <div className="scale-[2] origin-top-right">
              <BrandMark variant="mark" size="lg" />
            </div>
          </div>

          <Chip label="Operating philosophy" tone="neutral" />

          <div className="mt-6">
            <SectionHeading
              title="Modernise production systems with clarity, control, and ownership."
              subtitle="BlackLake approaches production change as risk management. Constraints are made explicit, budgets are measured, and delivery is structured so changes can be rolled out safely and reversed quickly."
              size="lg"
              as="h1"
            />
          </div>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            The objective is controlled progress: clearer behaviour, lower operational load, and systems that remain changeable without trading
            reliability for throughput.
          </p>
        </div>
      </Section>

      <Section variant="tinted">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Principles" title="Practical delivery rules" size="lg" />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {principles.map((principle) => (
            <Surface key={principle.title} variant="raised" className="p-6">
              <div className="text-sm font-semibold text-gray-900">{principle.title}</div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{principle.description}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section variant="plain">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Credibility"
            title="Founder delivery, compressed"
            subtitle="Examples are described with industry + system descriptors to preserve confidentiality."
            size="lg"
          />
        </div>

        <Surface variant="raised" className="mt-10 max-w-3xl p-6 md:p-8 relative overflow-hidden">
          {/* Subtle motif */}
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 w-32 h-32 opacity-[0.06]">
            <LazyMount className="h-full w-full" placeholder={<div className="h-full w-full" />}>
              <TopologyLines className="h-full w-full" />
            </LazyMount>
          </div>
          <List items={credibility} variant="check" className="relative" itemClassName="text-sm md:text-base text-gray-700 leading-relaxed" />
        </Surface>
      </Section>

      <Section variant="tinted">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Fit" title="When BlackLake is a good fit" size="lg" />
        </div>

        <Surface variant="raised" className="mt-10 max-w-3xl p-6 md:p-8">
          <List items={goodFit} variant="check" className="relative" itemClassName="text-sm md:text-base text-gray-700 leading-relaxed" />
        </Surface>
      </Section>

      <Section variant="framed">
        <Surface variant="inset" className="p-8 md:p-10">
          <div className="max-w-3xl">
            <SectionHeading
              title="Start with a Blueprint"
              subtitle="The BlackLake Blueprint is a paid, structured first step. It defines constraints, risks, success measures, and a delivery sequence you can operate."
              size="lg"
            />
            <div className="mt-8">
              <MagneticButton href="/contact">Start with a Blueprint</MagneticButton>
            </div>
          </div>
        </Surface>
      </Section>
    </PageShell>
  );
}
