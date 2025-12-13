import { Code2, Brain, Cloud, Database, Layers, TrendingUp } from "lucide-react";

export const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture & Infrastructure",
    description: "Scalable cloud-native systems on GCP and AWS. We optimize BigQuery pipelines achieving 20x speedups, migrate legacy systems to modern Cloud Run deployments, and architect serverless systems processing millions of records daily.",
    features: ["GCP & AWS", "BigQuery Optimization", "Cloud Run & Functions", "Infrastructure as Code"],
    caseStudy: "/case-studies/bigquery-optimization",
    highlight: "20x performance improvement",
  },
  {
    icon: Brain,
    title: "Applied AI & Machine Learning",
    description: "Production-ready AI systems using RAG pipelines, Vertex AI, and LangChain. We build intelligent platforms—from recipe generation engines to document retrieval systems and LLM-powered automation—all deployed at scale.",
    features: ["RAG Pipelines", "Vertex AI", "LangChain", "Vector Databases"],
    caseStudy: "/case-studies/ai-recipe-platform",
    highlight: "50K+ verified recipe corpus",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "End-to-end application development with React, React Native, Next.js, and TypeScript. We deliver production systems with clean architecture, type safety, and rigorous testing—from mobile apps to enterprise web platforms.",
    features: ["React & Next.js", "React Native", "TypeScript", "REST & GraphQL APIs"],
    caseStudy: "/case-studies/ai-recipe-platform",
    highlight: "Cross-platform mobile + web",
  },
  {
    icon: Database,
    title: "Data Engineering & Pipelines",
    description: "High-performance data pipelines and ETL systems built on BigQuery, Pub/Sub, Kafka, and real-time streaming architectures. Our systems process 1M+ records daily with sub-3s latency and enterprise-grade reliability.",
    features: ["BigQuery & Pub/Sub", "Kafka Streams", "ETL Pipelines", "Real-Time Processing"],
    caseStudy: "/case-studies/bigquery-optimization",
    highlight: "1M+ records processed daily",
  },
  {
    icon: Code2,
    title: "Real-Time & Distributed Systems",
    description: "Low-latency, event-driven architectures for mission-critical applications. We engineer systems like V2X 5G networks with sub-8ms latency, handling 10K+ concurrent connections with 99.99% uptime guarantees.",
    features: ["Event-Driven Architecture", "5G & IoT", "Kafka", "Redis & Caching"],
    caseStudy: "/case-studies/v2x-network-system",
    highlight: "Sub-8ms latency achieved",
  },
  {
    icon: TrendingUp,
    title: "Technical Consulting & Architecture",
    description: "Strategic engineering guidance for complex technical challenges. We provide architecture reviews, technology evaluations, performance optimization strategies, and hands-on implementation support from discovery to deployment.",
    features: ["Architecture Review", "Performance Tuning", "Tech Stack Selection", "Hands-on Implementation"],
    caseStudy: "/work",
    highlight: "Enterprise-grade expertise",
  },
];
