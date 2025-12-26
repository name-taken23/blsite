export interface FaqItem {
  question: string;
  answer: string;
}

export const servicesFaq: FaqItem[] = [
  {
    question: "Why publish price ranges instead of fixed quotes?",
    answer:
      "Fixed quotes before understanding constraints are guesses. The ranges reflect real variance: a straightforward Blueprint in a well-documented system costs less than one spanning five legacy services with no tests. After the intake call, you get an exact number.",
  },
  {
    question: "Do we have to start with a Blueprint?",
    answer:
      "Not always. If you already have a clear system map, documented constraints, and a sequenced plan, we can move straight to Build. Most teams find the Blueprint valuable because it surfaces risks and scope gaps before delivery starts—but it's not mandatory.",
  },
  {
    question: "What access do you need to start?",
    answer:
      "For Blueprint: read access to repos, architecture docs, and 2–3 hours with the team who owns the system. For Build: a dev environment, CI access, and a path to staging. We never require production credentials upfront—access is scoped to what the current phase needs.",
  },
  {
    question: "How do you control risk in production?",
    answer:
      "Every change ships with a rollback path. We use feature flags, canary deploys, and staged rollouts. Baselines are measured before changes land so regressions show up in metrics, not incident calls. Guardrails and circuit breakers are part of the delivery, not afterthoughts.",
  },
  {
    question: "What does a Build sprint look like?",
    answer:
      "Two to four weeks of focused delivery. Each sprint starts with a baseline and ends with measurable change in production. You get daily async updates, a mid-sprint check-in, and a demo at the end. Handover includes runbooks and ownership notes—not just merged code.",
  },
  {
    question: "What does Calibrate include, and when do you exit?",
    answer:
      "Calibrate covers reliability work (SLOs, alert quality), cost and performance budgets, and operational tightening (runbooks, incident patterns). Exit happens when your team can run the operating rhythm without us—usually 3–6 months, depending on complexity and internal capacity.",
  },
  {
    question: "Can we pause or change scope mid-engagement?",
    answer:
      "Yes. Blueprint is fixed-scope, but Build sprints can be paused or redirected between sprints. Calibrate is month-to-month. If priorities shift, we adjust—no long-term lock-in.",
  },
];

/**
 * Generate FAQPage JSON-LD schema from the FAQ array
 */
export function getFaqPageSchema(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
