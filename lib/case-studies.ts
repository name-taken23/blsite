// Case Study Data Structure
export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  category: "systems" | "intelligence" | "product";
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
  // ─────────────────────────────────────────────────────────────────────────────
  // SYSTEMS CATEGORY
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "logistics-event-mesh",
    title: "Event-driven logistics orchestration",
    industry: "Supply chain & logistics",
    category: "systems",
    description:
      "A multi-region logistics platform suffered cascading failures during peak demand. The monolithic event processor couldn't scale horizontally, and retry storms amplified outages. We redesigned the event architecture for predictable throughput.",
    summaryContext: "Peak-load resilience without over-provisioning.",
    summaryOutcome: "3x throughput with 40% lower infrastructure cost.",
    whatChanged: [
      "Decomposed monolith into bounded event domains",
      "Introduced back-pressure with dead-letter queues",
      "Added circuit breakers at integration boundaries",
    ],
    image: "/og-image.png",
    gradient: "from-blue-600 to-cyan-400",
    tags: ["Event Architecture", "Kafka", "Distributed Systems"],
    timeline: "4 months",
    teamSize: "2 engineers",
    narrative: {
      context:
        "A logistics operator processed shipment events across 12 regional hubs. During peak periods, the single-threaded event processor fell behind, causing cascading delays.",
      constraint:
        "The system had to handle 3x current peak load without proportionally scaling infrastructure cost, and couldn't drop or duplicate events.",
      intervention:
        "Decomposed the event processor into domain-specific consumers with explicit back-pressure. Added dead-letter queues for poison messages, circuit breakers at external API boundaries, and horizontal scaling per partition.",
      measuredOutcome:
        "Peak throughput increased 3x while infrastructure cost dropped 40%. P99 latency during peak went from 12s to 180ms.",
      whyItMatters:
        "Predictable event processing means on-time deliveries and accurate tracking—directly impacting customer experience and operational cost.",
    },
    results: [
      {
        metric: "Peak throughput",
        value: "3x increase",
        description: "Handled triple the event volume during peak demand"
      },
      {
        metric: "Infrastructure cost",
        value: "40% reduction",
        description: "Right-sized compute through horizontal scaling"
      },
      {
        metric: "P99 latency (peak)",
        value: "12s → 180ms",
        description: "Consistent processing even under load"
      },
      {
        metric: "Failed deliveries",
        value: "Zero data loss",
        description: "No events dropped or duplicated"
      }
    ],
    technologies: ["Kafka", "Kubernetes", "Go", "Redis", "Terraform", "Prometheus", "Grafana"],
    keyFeatures: [
      "Domain-partitioned event consumers",
      "Dead-letter queues with automated retry",
      "Circuit breakers at external boundaries",
      "Horizontal pod autoscaling per partition",
      "Real-time observability dashboards",
      "Chaos engineering validation"
    ]
  },
  {
    slug: "telecom-edge-processing",
    title: "Low-latency edge processing for connected vehicles",
    industry: "Telecommunications",
    category: "systems",
    description:
      "A telecom provider needed sub-10ms processing for vehicle-to-infrastructure communication. Cloud round-trips exceeded latency budgets. We designed an edge compute layer that kept critical decisions local.",
    summaryContext: "Single-digit millisecond latency with graceful degradation.",
    summaryOutcome: "Latency budget held with controlled behaviour under saturation.",
    whatChanged: [
      "Split edge/cloud so time-critical paths stayed local",
      "Decoupled ingestion from processing via event streaming",
      "Designed explicit overload behaviours to prevent cascade",
    ],
    image: "/og-image.png",
    gradient: "from-emerald-500 to-teal-400",
    tags: ["Edge Computing", "5G", "Real-Time Systems"],
    timeline: "6 months",
    teamSize: "4 engineers",
    narrative: {
      context:
        "Connected vehicle infrastructure required real-time event processing where delays could impact safety-critical decisions.",
      constraint:
        "Critical paths could not exceed 8ms latency, and the system had to degrade gracefully under saturation rather than cascading into back-pressure.",
      intervention:
        "Implemented an edge compute layer for time-critical decisions, with cloud sync for analytics. Event streaming decoupled ingestion from processing. Added explicit degradation modes and redundancy on critical paths.",
      measuredOutcome:
        "Latency-sensitive paths consistently held under 8ms. System degraded predictably under 150% load without data loss.",
      whyItMatters:
        "Predictable latency enables hard real-time guarantees—essential for safety-critical vehicle communication.",
    },
    results: [
      {
        metric: "Critical-path latency",
        value: "<8ms P99",
        description: "Held within budget for safety-critical paths"
      },
      {
        metric: "Saturation behaviour",
        value: "Controlled degradation",
        description: "Graceful handling at 150% designed load"
      },
      {
        metric: "Data loss under load",
        value: "Zero",
        description: "No events dropped during stress testing"
      },
      {
        metric: "Availability",
        value: "99.99%",
        description: "Four-nines uptime over 6-month period"
      }
    ],
    technologies: ["Kafka", "Redis", "C++", "Python", "5G NR", "Docker", "Kubernetes", "Prometheus"],
    keyFeatures: [
      "Edge-first processing for tight latency budgets",
      "Event streaming for ingestion/processing decoupling",
      "Low-latency state access with Redis",
      "Redundancy on critical paths",
      "Graceful degradation under overload",
      "Real-time latency monitoring"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // INTELLIGENCE CATEGORY
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "analytics-pipeline-modernisation",
    title: "Market data pipeline modernisation",
    industry: "Financial analytics",
    category: "intelligence",
    description:
      "A quantitative analytics platform had unpredictable refresh cycles and escalating warehouse costs. Downstream models missed time windows. We restructured the pipeline for predictable time-to-data.",
    summaryContext: "Predictable refresh without higher scan cost.",
    summaryOutcome: "Critical path reduced by 85% with stable costs.",
    whatChanged: [
      "Reshaped transforms into staged, materialised steps",
      "Introduced incremental processing with aligned partitioning",
      "Added idempotent ingestion and observability",
    ],
    image: "/og-image.png",
    gradient: "from-violet-600 to-purple-400",
    tags: ["Data Engineering", "BigQuery", "Analytics"],
    timeline: "3 months",
    teamSize: "2 engineers",
    narrative: {
      context:
        "A production analytics pipeline ingested and transformed daily market data for time-sensitive quantitative models.",
      constraint:
        "Time-to-data had to become predictable without increasing scan cost or breaking downstream data contracts.",
      intervention:
        "Reshaped the pipeline into staged transforms with incremental processing. Aligned partitioning and clustering to access patterns. Replaced deeply nested queries with materialised intermediate steps.",
      measuredOutcome:
        "Batch critical path dropped from ~4 hours to ~35 minutes. On-demand slices returned in seconds. Scan costs stabilised.",
      whyItMatters:
        "Fresher model inputs, fewer missed refresh windows, and predictable cloud spend—without increasing operator burden.",
    },
    results: [
      {
        metric: "Pipeline runtime",
        value: "12hr → 20min",
        description: "97% reduction in batch critical path"
      },
      {
        metric: "Interactive queries",
        value: "<5 seconds",
        description: "On-demand slices for ad-hoc investigation"
      },
      {
        metric: "Warehouse cost",
        value: "Stabilised",
        description: "Predictable monthly spend through incremental processing"
      },
      {
        metric: "Refresh reliability",
        value: "99.5% on-time",
        description: "Downstream models consistently received fresh data"
      }
    ],
    technologies: ["BigQuery", "Python", "dbt", "Airflow", "Pub/Sub", "Terraform", "Dataform"],
    keyFeatures: [
      "Partitioning aligned to access patterns",
      "Staged transforms replacing nested queries",
      "Incremental processing for cost control",
      "Idempotent ingestion handling",
      "Orchestration with retry visibility",
      "Automated data quality checks"
    ]
  },
  {
    slug: "demand-forecasting-system",
    title: "ML-powered demand forecasting",
    industry: "Retail & e-commerce",
    category: "intelligence",
    description:
      "A retailer's manual forecasting process caused chronic overstock and stockouts. Buyers spent hours in spreadsheets. We built an ML forecasting system that reduced inventory waste while improving availability.",
    summaryContext: "Automated forecasts with explainable recommendations.",
    summaryOutcome: "15% reduction in overstock, 8% improvement in availability.",
    whatChanged: [
      "Replaced spreadsheet forecasts with time-series ML",
      "Added feature store for consistent training/serving",
      "Built explainability layer for buyer trust",
    ],
    image: "/og-image.png",
    gradient: "from-amber-500 to-orange-400",
    tags: ["Machine Learning", "Forecasting", "Retail"],
    timeline: "5 months",
    teamSize: "3 engineers",
    narrative: {
      context:
        "A mid-size retailer forecasted demand through spreadsheets, leading to systematic overstock on slow-movers and stockouts on fast-movers.",
      constraint:
        "Forecasts had to integrate with existing ERP systems, be explainable to non-technical buyers, and improve both overstock and availability metrics.",
      intervention:
        "Built a time-series forecasting system using gradient-boosted models. Added a feature store for consistent training and serving. Created an explainability layer showing drivers behind each forecast.",
      measuredOutcome:
        "Overstock reduced 15% in first quarter. Stockouts dropped, improving availability by 8%. Buyers adopted the system without manual overrides.",
      whyItMatters:
        "Better forecasts directly reduce working capital and improve sales—measurable P&L impact from applied ML.",
    },
    results: [
      {
        metric: "Overstock reduction",
        value: "15%",
        description: "Less capital tied up in slow-moving inventory"
      },
      {
        metric: "Availability improvement",
        value: "+8%",
        description: "Fewer stockouts on fast-moving items"
      },
      {
        metric: "Forecast generation",
        value: "Automated daily",
        description: "Replaced hours of manual spreadsheet work"
      },
      {
        metric: "Buyer adoption",
        value: "92%",
        description: "High trust due to explainable recommendations"
      }
    ],
    technologies: ["Python", "XGBoost", "Feast", "Airflow", "BigQuery", "Looker", "FastAPI"],
    keyFeatures: [
      "Time-series models with seasonal adjustment",
      "Feature store for training/serving consistency",
      "ERP integration for seamless adoption",
      "Explainability dashboard for buyers",
      "Automated retraining pipeline",
      "A/B testing infrastructure"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // PRODUCT CATEGORY
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "constrained-generation-product",
    title: "Interactive constrained-generation product",
    industry: "Consumer AI application",
    category: "product",
    description:
      "A consumer app needed AI-generated content that was safe, repeatable, and followed strict domain rules. Open-ended generation produced too many failures. We built a constrained generation system with testable behaviour.",
    summaryContext: "Seconds-level UX with strict rule adherence.",
    summaryOutcome: "80% reduction in generation failures.",
    whatChanged: [
      "Added retrieval against a curated corpus to ground outputs",
      "Enforced structured constraints for rules and restrictions",
      "Built end-to-end flows so behaviour was testable",
    ],
    image: "/og-image.png",
    gradient: "from-purple-600 to-pink-500",
    tags: ["RAG", "LLM", "Consumer Product"],
    timeline: "4 months",
    teamSize: "2 engineers",
    narrative: {
      context:
        "An interactive generation workflow needed outputs that users could rely on—not one-off responses that varied unpredictably.",
      constraint:
        "Responses had to remain seconds-level for interactive UX while adhering to explicit domain rules that could not be violated.",
      intervention:
        "Added retrieval-augmented generation against a curated corpus. Enforced structured constraints around allowed outputs. Built end-to-end flows so behaviour could be tested in real user journeys.",
      measuredOutcome:
        "Generation failures dropped 80%. Maintained sub-3-second response time. Constraint violations fell to near-zero.",
      whyItMatters:
        "Constrained, testable AI behaviour makes features operable: teams can set limits, detect regressions, and ship iteratively.",
    },
    results: [
      {
        metric: "Generation failures",
        value: "80% reduction",
        description: "Dramatically fewer unusable outputs"
      },
      {
        metric: "Response latency",
        value: "<3 seconds",
        description: "Interactive experience maintained"
      },
      {
        metric: "Constraint violations",
        value: "Near-zero",
        description: "Domain rules consistently enforced"
      },
      {
        metric: "User satisfaction",
        value: "+35 NPS points",
        description: "Higher trust in generated content"
      }
    ],
    technologies: ["Vertex AI", "LangChain", "Pinecone", "Next.js", "React Native", "PostgreSQL"],
    keyFeatures: [
      "Retrieval-augmented generation",
      "Structured output constraints",
      "Domain rule enforcement layer",
      "End-to-end testable workflows",
      "Mobile and web delivery",
      "Feedback loop for continuous improvement"
    ]
  },
  {
    slug: "clinical-workflow-platform",
    title: "Clinical workflow digitisation",
    industry: "Healthcare technology",
    category: "product",
    description:
      "A healthcare provider relied on paper forms and fragmented systems for patient intake. Staff spent hours on data entry. We built a unified workflow platform that reduced administrative burden while maintaining compliance.",
    summaryContext: "Compliant digitisation without disrupting clinical flow.",
    summaryOutcome: "60% reduction in administrative time per patient.",
    whatChanged: [
      "Unified fragmented data sources into single patient view",
      "Automated intake forms with smart pre-population",
      "Built audit trail for compliance requirements",
    ],
    image: "/og-image.png",
    gradient: "from-teal-500 to-cyan-400",
    tags: ["Healthcare", "Workflow", "Compliance"],
    timeline: "6 months",
    teamSize: "4 engineers",
    narrative: {
      context:
        "Clinical staff navigated between paper forms, legacy EMR systems, and spreadsheets to complete patient intake—averaging 25 minutes per patient.",
      constraint:
        "The solution had to integrate with existing EMR systems, maintain HIPAA compliance, and not disrupt clinical workflows during rollout.",
      intervention:
        "Built a unified intake platform pulling from existing data sources. Added smart pre-population from prior visits. Created role-based views for different staff types with full audit logging.",
      measuredOutcome:
        "Administrative time per patient dropped from 25 to 10 minutes. Data entry errors reduced 70%. Full audit compliance maintained.",
      whyItMatters:
        "Less admin time means more face-time with patients—better care quality and staff satisfaction without compliance risk.",
    },
    results: [
      {
        metric: "Admin time per patient",
        value: "25min → 10min",
        description: "60% reduction in intake processing"
      },
      {
        metric: "Data entry errors",
        value: "70% reduction",
        description: "Smart pre-population and validation"
      },
      {
        metric: "Compliance",
        value: "Full audit trail",
        description: "HIPAA-compliant logging maintained"
      },
      {
        metric: "Staff adoption",
        value: "95% within 2 weeks",
        description: "Minimal training required"
      }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "FHIR", "AWS", "Terraform", "Auth0"],
    keyFeatures: [
      "EMR integration via FHIR APIs",
      "Smart form pre-population",
      "Role-based access control",
      "Complete audit logging",
      "Offline-capable mobile app",
      "Phased rollout tooling"
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

export function getCaseStudiesByCategory(category: CaseStudy["category"]): CaseStudy[] {
  return caseStudies.filter((study) => study.category === category);
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
      "stabilised",
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
    "logistics-event-mesh": ["P99 latency (peak)", "Peak throughput"],
    "telecom-edge-processing": ["Critical-path latency"],
    "analytics-pipeline-modernisation": ["Pipeline runtime"],
    "demand-forecasting-system": ["Overstock reduction"],
    "constrained-generation-product": ["Generation failures"],
    "clinical-workflow-platform": ["Admin time per patient"],
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
