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
    description: "Reduced BigQuery processing time from 45 minutes to 2.5 minutes through query optimization and pipeline restructuring. Enabled real-time predictive analytics for agricultural markets.",
    image: "/case-studies/bigquery.jpg",
    gradient: "from-blue-600 to-cyan-400",
    tags: ["BigQuery", "GCP", "Data Engineering", "Python"],
    timeline: "3 months",
    teamSize: "Solo engineer",
    challenge: "The existing analytics pipeline took 45 minutes to process daily market data, making real-time predictions impossible. Complex nested queries and poor partitioning strategy were causing massive compute costs and delays.",
    solution: "Restructured the entire BigQuery pipeline with proper partitioning and clustering. Replaced nested queries with materialized views and incremental processing. Implemented Pub/Sub for real-time data ingestion and wrote custom Python orchestration for pipeline management.",
    results: [
      {
        metric: "Processing Time",
        value: "20x Faster",
        description: "Reduced from 45 minutes to 2.5 minutes"
      },
      {
        metric: "Data Volume",
        value: "1M+ Records",
        description: "Processing 1M+ agricultural market records daily"
      },
      {
        metric: "Cost Reduction",
        value: "65%",
        description: "Reduced monthly BigQuery compute costs"
      },
      {
        metric: "Latency",
        value: "<3s",
        description: "Real-time predictions now possible"
      }
    ],
    technologies: ["BigQuery", "Python", "Pub/Sub", "Cloud Functions", "Terraform", "dbt", "Airflow"],
    keyFeatures: [
      "Partitioned and clustered tables for optimal query performance",
      "Materialized views replacing complex nested queries",
      "Pub/Sub integration for real-time data streaming",
      "Automated pipeline orchestration with Cloud Functions",
      "Infrastructure-as-code with Terraform",
      "Comprehensive monitoring and alerting"
    ]
  },
  {
    slug: "v2x-network-system",
    title: "V2X 5G Network Integration",
    client: "Telecommunications R&D Project",
    industry: "Telecommunications",
    description: "Built the data processing layer for a Vehicle-to-Everything (V2X) communication system running on 5G infrastructure. Real-time sensor data processing with sub-10ms latency requirements.",
    image: "/case-studies/v2x.jpg",
    gradient: "from-emerald-500 to-teal-400",
    tags: ["5G", "Real-Time Systems", "V2X", "IoT"],
    timeline: "6 months",
    teamSize: "Part of 4-person team",
    challenge: "V2X systems require processing thousands of sensor readings per second with extremely low latency. Any delay could impact vehicle safety. The system needed to handle 10,000+ concurrent connections while maintaining sub-10ms processing time.",
    solution: "Designed a multi-layer architecture with edge processing for time-critical decisions and cloud aggregation for analytics. Used Kafka for event streaming, Redis for state management, and custom C++ modules for the most latency-sensitive operations.",
    results: [
      {
        metric: "Latency",
        value: "<8ms",
        description: "End-to-end processing latency achieved"
      },
      {
        metric: "Connections",
        value: "10K+",
        description: "Concurrent vehicle connections supported"
      },
      {
        metric: "Uptime",
        value: "99.99%",
        description: "System availability for safety-critical operations"
      },
      {
        metric: "Throughput",
        value: "50K msg/s",
        description: "Peak message processing capacity"
      }
    ],
    technologies: ["Kafka", "Redis", "C++", "Python", "5G NR", "Docker", "Kubernetes", "Prometheus"],
    keyFeatures: [
      "Edge computing architecture for sub-10ms latency",
      "Kafka-based event streaming for high throughput",
      "Redundant processing for safety-critical reliability",
      "Real-time monitoring and anomaly detection",
      "Graceful degradation under load",
      "Integration with 5G network slicing"
    ]
  },
  {
    slug: "ai-recipe-platform",
    title: "AI Recipe Generation Platform",
    client: "Food Tech Startup",
    industry: "Consumer Technology",
    description: "Full-stack platform with RAG-powered recipe generation. Users input ingredients, dietary preferences, and the AI generates personalized recipes with nutritional analysis.",
    image: "/case-studies/recipe.jpg",
    gradient: "from-purple-600 to-pink-500",
    tags: ["RAG", "Vertex AI", "React Native", "Full-Stack"],
    timeline: "4 months",
    teamSize: "Solo engineer",
    challenge: "Creating genuinely useful AI-generated recipes requires understanding ingredient combinations, cooking techniques, and nutritional science. Generic LLM outputs weren't good enough—recipes needed to be accurate, safe, and actually taste good.",
    solution: "Built a RAG pipeline using Vertex AI with a curated corpus of 50,000+ verified recipes. The system understands ingredient substitutions, cooking chemistry, and dietary restrictions. React Native mobile app with real-time generation and saved recipe management.",
    results: [
      {
        metric: "User Rating",
        value: "4.6/5",
        description: "Average recipe satisfaction rating"
      },
      {
        metric: "Generation Time",
        value: "<4s",
        description: "Time to generate personalized recipe"
      },
      {
        metric: "Accuracy",
        value: "94%",
        description: "Nutritional calculation accuracy"
      },
      {
        metric: "Recipes Generated",
        value: "25K+",
        description: "Total recipes created by users"
      }
    ],
    technologies: ["Vertex AI", "LangChain", "React Native", "Next.js", "PostgreSQL", "Pinecone", "GCP", "Expo"],
    keyFeatures: [
      "RAG pipeline with 50K+ verified recipe corpus",
      "Ingredient substitution intelligence",
      "Dietary restriction handling (allergies, preferences)",
      "Accurate nutritional analysis per serving",
      "React Native mobile app (iOS + Android)",
      "Saved recipes with shopping list generation"
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
