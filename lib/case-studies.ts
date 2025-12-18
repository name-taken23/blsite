// Case Study Data Structure
export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  image: string;
  tags: string[];
  timeline: string;
  teamSize: string;
  challenge: string;
  solution: string;
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
    title: "BigQuery Pipeline Optimization",
    client: "PredictX (via ECS)",
    industry: "Predictive Analytics",
    description: "A BigQuery-based daily market data pipeline was delaying model refreshes. The constraints were time-to-data, cost, and operational predictability. The work reduced processing time from tens of minutes to a few minutes by changing query structure and pipeline design.",
    image: "/case-studies/bigquery.jpg",
    gradient: "from-blue-600 to-cyan-400",
    tags: ["BigQuery", "GCP", "Data Engineering", "Python"],
    timeline: "3 months",
    teamSize: "Solo engineer",
    challenge: "Context: a production analytics pipeline ingesting and transforming daily market data for time-sensitive downstream models. Constraint: predictable time-to-data without runaway BigQuery scan cost. Risk: late or stale data feeding model refreshes, plus brittle jobs that were hard to diagnose. What was failing: long runtimes driven by complex nested queries and weak partitioning/clustering.",
    solution: "Architectural changes: reshaped the pipeline into staged transforms with incremental processing, and aligned partitioning/clustering to access patterns. Reduced expensive scans by replacing deeply nested queries with materialised intermediate steps. Added Pub/Sub-based ingestion and Python orchestration to make runs observable and easier to operate.",
    results: [
      {
        metric: "Processing Time",
        value: "Minutes-level",
        description: "Reduced runtime from tens of minutes to a few minutes"
      },
      {
        metric: "Data Volume",
        value: "Daily ingestion",
        description: "Stable processing of a daily market dataset"
      },
      {
        metric: "Cost Reduction",
        value: "Lower spend",
        description: "Reduced unnecessary BigQuery compute and scan cost"
      },
      {
        metric: "Latency",
        value: "Fresher data",
        description: "Shorter time-to-data for downstream model refresh"
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
    title: "V2X 5G Network Integration",
    client: "Telecommunications R&D Project",
    industry: "Telecommunications",
    description: "Built the data processing layer for a Vehicle-to-Everything (V2X) system on 5G infrastructure. The constraints were tight latency budgets, reliability, and predictable behaviour under load.",
    image: "/case-studies/v2x.jpg",
    gradient: "from-emerald-500 to-teal-400",
    tags: ["5G", "Real-Time Systems", "V2X", "IoT"],
    timeline: "6 months",
    teamSize: "Part of 4-person team",
    challenge: "Context: safety-adjacent V2X communication where processing delays can change system behaviour. Constraint: single-digit millisecond latency budgets on critical paths, with high event volume and many concurrent connections. Risk: unpredictable processing times and cascading back-pressure. What was at stake: reliability under load and controlled degradation when the system is stressed.",
    solution: "Architectural changes: a multi-layer design that keeps time-critical decisions at the edge and pushes aggregation to cloud paths. Used Kafka to separate ingestion from downstream processing and Redis for low-latency state. Implemented custom modules for the most latency-sensitive operations and designed for redundancy and graceful degradation.",
    results: [
      {
        metric: "Latency",
        value: "Single-digit ms target",
        description: "Designed around tight latency budgets on critical paths"
      },
      {
        metric: "Connections",
        value: "At scale",
        description: "Designed to support large numbers of concurrent connections"
      },
      {
        metric: "Uptime",
        value: "High availability",
        description: "Redundancy and graceful degradation for critical paths"
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
    title: "AI Recipe Generation Platform",
    client: "Food Tech Startup",
    industry: "Consumer Technology",
    description: "Built a full-stack recipe generation product with retrieval and structured constraints. The constraints were output quality, dietary correctness, and interactive latency for a consumer UX.",
    image: "/case-studies/recipe.jpg",
    gradient: "from-purple-600 to-pink-500",
    tags: ["RAG", "Vertex AI", "React Native", "Full-Stack"],
    timeline: "4 months",
    teamSize: "Solo engineer",
    challenge: "Context: a consumer product where outputs must be usable, repeatable, and safe for dietary restrictions. Constraint: seconds-level response for interactive use, without sacrificing correctness. Risk: plausible but wrong recipes, inconsistent instructions, and user trust erosion. What was failing: baseline prompting produced errors and variability that were hard to explain.",
    solution: "Architectural changes: added retrieval against a curated corpus and enforced structured constraints around substitutions and dietary restrictions. Built the product end-to-end (generation, saving, and nutrition analysis) so behaviour could be tested and iterated in real flows, not demos.",
    results: [
      {
        metric: "Recipe Quality",
        value: "Improved",
        description: "Reduced obvious errors compared to baseline prompting"
      },
      {
        metric: "Generation Time",
        value: "Seconds-level",
        description: "Fast generation for an interactive UX"
      },
      {
        metric: "Nutrition",
        value: "Validated",
        description: "Nutrition analysis computed from structured ingredient data"
      },
      {
        metric: "Recipes Generated",
        value: "In production",
        description: "Generation and save flows integrated end-to-end"
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
