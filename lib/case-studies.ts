// Case Study Data Structure
export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  description: string;
  summaryContext?: string;
  summaryOutcome?: string;
  whatChanged?: string[];
  image: string;
  tags: string[];
  timeline: string;
  teamSize: string;
  narrative: {
    context: string;
    constraint: string;
    intervention: string;
    measuredOutcome: string;
    whyItMatters: string;
  };
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  keyFeatures: string[];
  gradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "bigquery-optimization",
    title: "Daily market data pipeline modernisation",
    industry: "Predictive analytics platform",
    description:
      "A production analytics pipeline was delaying downstream refresh cycles and driving unpredictable warehouse spend. Work focused on time-to-data and operational predictability without breaking data contracts.",
    summaryContext: "Predictable time-to-data without higher scan cost or broken data contracts.",
    summaryOutcome: "Critical path reduced from hundreds of minutes to low-thousands of seconds.",
    whatChanged: [
      "Reshaped transforms into staged, materialised steps",
      "Introduced incremental processing with aligned partitioning/clustering",
      "Added idempotent ingestion and observability for reliable runs",
    ],
    image: "/og-image.png",
    gradient: "from-blue-600 to-cyan-400",
    tags: ["BigQuery", "GCP", "Data Engineering", "Python"],
    timeline: "3 months",
    teamSize: "Solo engineer",
    narrative: {
      context:
        "A production analytics pipeline ingested and transformed daily market data for time-sensitive downstream models.",
      constraint:
        "Time-to-data had to become predictable without increasing scan cost or breaking downstream data contracts and refresh schedules.",
      intervention:
        "Reshaped the pipeline into staged transforms with incremental processing, aligned partitioning/clustering to access patterns, and replaced deeply nested queries with materialised intermediate steps. Added idempotent ingestion and orchestration so runs were observable and diagnosable.",
      measuredOutcome:
        "Batch exports moved from a multi-hundred-minute window to low-thousands of seconds on the critical path. On-demand slices became seconds-level, and the system ran with fewer wasted scans through incremental processing and staged transforms.",
      whyItMatters:
        "Fresher model inputs, fewer missed refresh windows, and more predictable cloud spend—without increasing operator burden.",
    },
    results: [
      {
        metric: "Pipeline runtime",
        value: "Hundreds of minutes → low-thousands of seconds",
        description: "Reduced the batch export critical path into a predictable window"
      },
      {
        metric: "Interactive pulls",
        value: "Seconds-level",
        description: "On-demand slices returned fast enough for interactive investigation"
      },
      {
        metric: "Warehouse scan cost",
        value: "Lower and more stable",
        description: "Less unnecessary scan/compute through incremental processing and query restructuring"
      },
      {
        metric: "Time-to-data predictability",
        value: "More predictable",
        description: "More consistent refresh timing for downstream consumers"
      }
    ],
    technologies: ["BigQuery", "Python", "Pub/Sub", "Cloud Functions", "Terraform", "dbt", "Airflow"],
    keyFeatures: [
      "Partitioning and clustering aligned to access patterns",
      "Staged transforms to replace deeply nested queries",
      "Incremental processing to reduce scan cost",
      "Pub/Sub ingestion with idempotent handling",
      "Orchestration designed for retries and visibility",
      "Monitoring and alerting for operational control"
    ]
  },
  {
    slug: "v2x-network-system",
    title: "Low-latency event processing for V2X on 5G",
    industry: "Telecommunications systems",
    description:
      "Designed and implemented the data processing layer for a V2X system on 5G infrastructure. The work focused on tight latency budgets and predictable behaviour under load.",
    summaryContext: "Single-digit millisecond budget with predictable behaviour under saturation.",
    summaryOutcome: "Latency held to a hard budget with controlled degradation under load.",
    whatChanged: [
      "Split edge/cloud so time-critical decisions stayed close to ingress",
      "Decoupled ingestion from processing via event streaming",
      "Designed explicit overload behaviours to prevent cascading back-pressure",
    ],
    image: "/og-image.png",
    gradient: "from-emerald-500 to-teal-400",
    tags: ["5G", "Real-Time Systems", "V2X", "IoT"],
    timeline: "6 months",
    teamSize: "Part of 4-person team",
    narrative: {
      context:
        "A V2X system required low-latency processing where delays change behaviour and failure modes have operational impact.",
      constraint:
        "Critical paths could not exceed a single-digit millisecond latency budget, and the system had to remain predictable under saturation rather than cascading into back-pressure.",
      intervention:
        "Implemented an edge/cloud split so time-critical decisions stayed close to ingress, decoupled ingestion from processing via event streaming, and designed low-latency state access. Added redundancy on critical paths and explicit degradation behaviours for overload scenarios.",
      measuredOutcome:
        "Latency-sensitive paths were engineered around a single-digit millisecond budget, with failure modes constrained to controlled degradation under load.",
      whyItMatters:
        "Predictable performance reduces operational risk: teams can set hard budgets, reason about saturation, and avoid brittle behaviour at peak load.",
    },
    results: [
      {
        metric: "Critical-path latency budget",
        value: "Single-digit milliseconds",
        description: "Engineered around a hard budget on time-sensitive paths"
      },
      {
        metric: "Connections",
        value: "At scale",
        description: "Designed to support large numbers of concurrent connections"
      },
      {
        metric: "Degradation behaviour",
        value: "Controlled",
        description: "Explicit overload handling to prevent cascading back-pressure"
      },
      {
        metric: "Throughput",
        value: "High throughput",
        description: "Event pipeline tuned for sustained load"
      }
    ],
    technologies: ["Kafka", "Redis", "C++", "Python", "5G NR", "Docker", "Kubernetes", "Prometheus"],
    keyFeatures: [
      "Edge-first processing for tight latency budgets",
      "Event streaming to decouple ingestion and processing",
      "State management designed for low-latency access",
      "Redundancy on critical paths",
      "Graceful degradation under load",
      "Monitoring to detect drift and saturation"
    ]
  },
  {
    slug: "ai-recipe-platform",
    title: "Interactive constrained-generation product",
    industry: "Applied AI product",
    description:
      "Built an interactive generation product where outputs needed to be repeatable, constrained, and safe for defined rules. Work focused on reducing obvious failure modes while keeping interactive latency.",
    summaryContext: "Seconds-level UX with strict rule adherence and testable behaviour.",
    summaryOutcome: "Maintained seconds-level generation while reducing baseline failure cases.",
    whatChanged: [
      "Added retrieval against a curated corpus to ground outputs",
      "Enforced structured constraints for substitutions and restrictions",
      "Built end-to-end flows so behaviour was testable in real journeys",
    ],
    image: "/og-image.png",
    gradient: "from-purple-600 to-pink-500",
    tags: ["RAG", "Vertex AI", "React Native", "Full-Stack"],
    timeline: "4 months",
    teamSize: "Solo engineer",
    narrative: {
      context:
        "An interactive generation workflow needed outputs that users could follow reliably, not one-off responses.",
      constraint:
        "Responses had to remain seconds-level for an interactive UX, while adhering to explicit rules (e.g. substitutions and restriction handling) that could not be violated.",
      intervention:
        "Added retrieval against a curated corpus and enforced structured constraints around allowed substitutions and restrictions. Built end-to-end flows (generation, saving, and analysis) so behaviour could be tested in real user journeys rather than demos.",
      measuredOutcome:
        "Reduced obvious baseline failure cases and maintained seconds-level generation, with outputs constrained by explicit rules and supported by structured downstream analysis.",
      whyItMatters:
        "Constrained, testable behaviour makes AI features operable: teams can set limits, detect regressions, and ship iterative improvements without silent drift.",
    },
    results: [
      {
        metric: "Baseline failure rate",
        value: "Reduced",
        description: "Fewer obvious errors compared to baseline prompting"
      },
      {
        metric: "Interactive latency",
        value: "Seconds-level",
        description: "Maintained response time suitable for interactive use"
      },
      {
        metric: "Constraint adherence",
        value: "Enforced",
        description: "Outputs constrained by explicit rules and structured fields"
      },
      {
        metric: "End-to-end workflow",
        value: "In production",
        description: "Generation and save flows integrated for real usage"
      }
    ],
    technologies: ["Vertex AI", "LangChain", "React Native", "Next.js", "PostgreSQL", "Pinecone", "GCP", "Expo"],
    keyFeatures: [
      "Retrieval against a curated recipe corpus",
      "Structured constraints for substitutions",
      "Dietary restriction handling (allergies, preferences)",
      "Nutrition analysis from structured ingredients",
      "Mobile app for real user flows",
      "Saved recipes with repeatable generation"
    ]
  }
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(limit: number = 3): CaseStudy[] {
  return caseStudies.slice(0, limit);
}

export type ProofMetric = {
  value: string;
  metric: string;
  context: string;
  caseStudySlug: string;
};

export function getProofMetrics(limit: number = 4): ProofMetric[] {
  const weakValues = new Set(
    [
      "reduced",
      "improved",
      "controlled",
      "enforced",
      "at scale",
      "high throughput",
      "in production",
    ].map((v) => v.toLowerCase())
  );

  const normalize = (s: string) => s.trim().replace(/\s+/g, " ");

  const isStrongValue = (value: string): boolean => {
    const v = normalize(value).toLowerCase();
    if (!v) return false;
    if (weakValues.has(v)) return false;

    // Prefer values that are quantifiable or bounded.
    if (/[0-9]/.test(v)) return true;
    if (v.includes("→") || v.includes("->") || v.includes(" to ")) return true;
    if (v.includes("%") || v.includes("x")) return true;
    if (/(ms|millisecond|s|sec|second|min|minute|hour|day|week|month)/.test(v)) return true;
    if (v.includes("single-digit") || v.includes("seconds-level")) return true;

    // Otherwise require a bit more specificity than a single adjective.
    return v.length >= 12;
  };

  const scoreResult = (r: { metric: string; value: string }): number => {
    const value = normalize(r.value);
    if (!value) return -Infinity;
    const v = value.toLowerCase();

    let score = 0;
    if (isStrongValue(value)) score += 10;

    if (/[0-9]/.test(v)) score += 4;
    if (v.includes("→") || v.includes("->")) score += 3;
    if (v.includes("%") || /\b\d+(\.\d+)?x\b/.test(v)) score += 3;
    if (/(latency|runtime|cost|failure|error|time-to-data|predictability)/i.test(r.metric)) score += 2;

    if (weakValues.has(v)) score -= 10;

    return score;
  };

  const preferredMetricsBySlug: Partial<Record<CaseStudy["slug"], string[]>> = {
    "bigquery-optimization": ["Pipeline runtime", "Warehouse scan cost"],
    "v2x-network-system": ["Critical-path latency budget"],
    "ai-recipe-platform": ["Interactive latency", "Baseline failure rate"],
  };

  const pickBestResultForStudy = (study: CaseStudy) => {
    const preferred = preferredMetricsBySlug[study.slug] ?? [];

    for (const metricName of preferred) {
      const candidate = study.results.find((r) => r.metric === metricName);
      if (candidate && isStrongValue(candidate.value)) return candidate;
    }

    const strong = study.results
      .filter((r) => isStrongValue(r.value))
      .sort((a, b) => scoreResult(b) - scoreResult(a));

    if (strong[0]) return strong[0];

    // As a last resort, pick the best-scoring non-empty result.
    return study.results
      .filter((r) => normalize(r.value).length > 0)
      .sort((a, b) => scoreResult(b) - scoreResult(a))[0];
  };

  const picked: ProofMetric[] = [];
  const usedSlugs = new Set<string>();

  const max = Math.max(0, limit);
  for (const study of getAllCaseStudies()) {
    if (picked.length >= max) break;
    if (usedSlugs.has(study.slug)) continue;

    const result = pickBestResultForStudy(study);
    if (!result) continue;

    const value = normalize(result.value);
    const metric = normalize(result.metric);
    if (!value || !metric) continue;
    if (!isStrongValue(value)) continue;

    usedSlugs.add(study.slug);
    picked.push({
      value,
      metric,
      context: normalize(result.description),
      caseStudySlug: study.slug,
    });
  }

  return picked;
}
