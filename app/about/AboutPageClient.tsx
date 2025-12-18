import PageShell from "@/components/layout/PageShell";
import {
  Cloud,
  Brain,
  Layers,
  MapPin,
  Briefcase,
  Calendar,
  Code2,
  Database,
  Cpu,
  GitBranch,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const expertise = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Design and operate GCP (BigQuery, Pub/Sub, Cloud Functions, Vertex AI) and AWS estates. Infrastructure-as-code with Terraform.",
    tools: ["GCP", "AWS", "Terraform", "Docker", "K8s"],
  },
  {
    icon: Brain,
    title: "Applied AI",
    description:
      "Retrieval (RAG), evaluation, and automation in production. Measured quality, monitored behaviour, and controlled data access.",
    tools: ["Vertex AI", "LangChain", "Pinecone", "OpenAI"],
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "React, React Native, Next.js, TypeScript. Event-driven systems with Kafka. Mobile and web, shipped and maintained.",
    tools: ["React", "Next.js", "TypeScript", "Kafka"],
  },
];

const techStack = [
  { icon: Code2, name: "TypeScript", category: "Language" },
  { icon: Database, name: "BigQuery", category: "Data" },
  { icon: Cpu, name: "Vertex AI", category: "ML" },
  { icon: GitBranch, name: "Terraform", category: "IaC" },
  { icon: Terminal, name: "Python", category: "Language" },
  { icon: Cloud, name: "GCP", category: "Cloud" },
];

const experience = [
  {
    role: "Founder",
    company: "BlackLake",
    period: "2024 – Present",
    description:
      "Founder-led delivery of production modernisation: automation and intelligence where it reduces operational load, backed by platform work that holds under real constraints.",
    highlights: [
      "Founder-led delivery",
      "Clear ownership",
      "End-to-end accountability",
    ],
    current: true,
  },
  {
    role: "Software Engineer",
    company: "Predictive analytics platform (via ECS)",
    period: "2021 – 2024",
    description:
      "Improved a production analytics platform by reducing warehouse cost and latency, and making pipeline behaviour easier to measure and operate.",
    highlights: ["BigQuery optimisation", "Pipeline reliability", "Cost visibility"],
    current: false,
  },
  {
    role: "Software Engineer",
    company: "Telecommunications R&D",
    period: "2020 – 2021",
    description:
      "Built systems with tight latency budgets and reliability constraints, where predictability mattered more than feature velocity.",
    highlights: ["Latency budgets", "Operational constraints", "Performance testing"],
    current: false,
  },
];

const values = [
  {
    title: "Direct Communication",
    description:
      "You work directly with me. No account layers. No handoffs.",
  },
  {
    title: "Production Focus",
    description:
      "I design for operability. If a prototype helps, it is used to reduce risk. The deliverable is production change.",
  },
  {
    title: "Honest Assessment",
    description:
      "I will say when an approach will not hold, and what I would do instead. Clear expectations from day one.",
  },
];

export default function AboutPageClient() {
  return (
    <PageShell>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                London, UK
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                James Reed
              </h1>
              <p className="mt-3 text-lg text-gray-600">Founder, BlackLake</p>

              <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                BlackLake exists to modernise production systems without ambiguity. I take direct ownership of the work: define the constraints, make the trade-offs explicit, and deliver changes you can operate. Quality, latency, cost, and security are treated as requirements.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-accent-electric px-8 py-4 text-sm font-semibold text-white hover:bg-accent-electricDark transition-colors"
                >
                  Start with a Blueprint
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-900 hover:border-gray-300 transition-colors"
                >
                  View selected work
                </Link>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-gray-200 bg-white">
                <div className="px-6 py-5 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">Working stack</p>
                  <p className="mt-1 text-sm text-gray-600">Tools I ship and operate with.</p>
                </div>
                <div className="p-6 grid grid-cols-2 gap-3">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50">
                        <tech.icon className="w-4.5 h-4.5 text-gray-700" />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-gray-900">{tech.name}</div>
                        <div className="text-xs text-gray-500">{tech.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100" />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">The Approach</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Why founder-led delivery
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <CheckCircle2 className="w-4 h-4 text-accent-electric" />
                  {value.title}
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed">
              “Most delivery risk comes from unclear ownership and handoffs. BlackLake keeps ownership with one engineer and a clear interface to the work.”
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">Background</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Experience</h2>
          </div>

          <div className="mt-10 space-y-4">
            {experience.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`rounded-2xl border bg-white p-6 md:p-8 ${exp.current ? "border-accent-electric/30" : "border-gray-200"}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      {exp.current && (
                        <span className="rounded-full bg-accent-electric px-2 py-0.5 text-xs font-semibold text-white">Current</span>
                      )}
                      <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-gray-900">{exp.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-gray-700">{exp.company}</p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
                    <Briefcase className="w-5 h-5 text-gray-600" />
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-600 leading-relaxed">{exp.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-accent-electric uppercase">Capabilities</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Core expertise</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {expertise.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
                  <item.icon className="w-5 h-5 text-gray-700" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                Build with control
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                If you are modernising production systems, start with the BlackLake Blueprint. Send a short note with context, constraints, and what must change.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-accent-electric px-8 py-4 text-sm font-semibold text-white hover:bg-accent-electricDark transition-colors"
                >
                  Start with a Blueprint
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-900 hover:border-gray-300 transition-colors"
                >
                  View selected work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
