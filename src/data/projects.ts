export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    title: "GenAI REST Service",
    description: "A production-grade Spring Boot REST API integrating Google Gemini 2.5 Flash across seven AI use cases (text generation, summarization, Q&A, translation, code generation, analysis, and chat). Built with Redis caching, MySQL persistence, AOP-based audit logging, Resilience4j circuit breakers, rate limiting, input sanitization, and Prometheus metrics.",
    tech: ["Spring Boot", "Spring AI", "Gemini", "Redis", "Resilience4j", "Prometheus"],
    featured: false,
    githubUrl: "https://github.com/daya1an/spring-genai",
  },
  {
    title: "Ecommerce Medallion Lakehouse",
    description: "An ecommerce data engineering project on Databricks using the Medallion Architecture (Bronze → Silver → Gold). Raw CSV data across brands, products, customers, calendar, and order items is ingested and transformed across layered PySpark notebooks, producing BI-ready Delta tables with derived metrics (FX conversion, region enrichment, coupon flags).",
    tech: ["Python", "Pyspark","SQL", "Databricks", "AWS S3", "Power BI"],
    featured: false,
    githubUrl: "https://github.com/daya1an/ecommerce-medallion-lakehouse"
  },
  {
    title: "🚕 Transit Analytics Platform",
    description: "Engineered a self-service transportation intelligence platform with ReactJS, FastAPI, and Databricks, allowing users to onboard datasets, monitor ingestion status, and track city-wide trip operations in near real time. Integrated 356K+ records from AWS S3 through a scalable Medallion lakehouse architecture. Implemented automated batch ingestion using Auto Loader and Spark Declarative Pipelines, incorporating SCD Type 1 updates, data-quality validations, and Delta Lake optimization. Powered live operational dashboards and API-driven analytics while processing ~1.8K daily records with 63% less code.",
    tech: ["Python", "Pyspark", "SQL", "Databricks", "AWS", "Delta Live Tables", "Delta Lake"],
    featured: true,
    githubUrl: "https://github.com/daya1an/transportation-data-lakehouse"
  },
  {
    title: "Sentiment Ledger",
    description: "An AI-powered invoice or subscription approval system that automates approve/reject/manual-review decisions using RAG-grounded LLM reasoning over financial policies, with full audit trail and Stripe powered idempotent payment execution using Redis SETNX locks. Implemented Kafka to decouple API latency from AI processing, used Redis for distributed locking MongoDB Atlas vector search for RAG so the AI grounds decisions in real policies, Resilience4j circuit breaker to stop hammering a failing payment service, and Prometheus for confidence-scored metrics to support compliance audits.",
    tech: ["Spring Boot", "Spring AI", "Google Gemini", "RAG", "MCP", "Kafka", "MongoDB Atlas", "Stripe"],
    featured: true,
    githubUrl: "https://github.com/daya1an/transit-analytics-platform"
  },
  {
    title: "My Portfolio Website",
    description: "A modern, responsive personal portfolio website built with React, TypeScript, and Vite, delivering a fast and polished frontend experience. The project combines Lovable for rapid design iteration with Tailwind CSS and PrimeReact to create a sleek, professional interface. Its content-driven architecture separates portfolio data from presentation, enabling simple updates and maintenance. Integrated email functionality supports direct contact, while GitHub Actions and Node.js 24.11.0 enable automated deployment and streamlined version-controlled releases.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "PrimeReact", "GitHub Actions", "Node.js"],
    featured: false,
    githubUrl: "https://github.com/daya1an/portfolio"
  },
  {
    title: "Event Announcement System",
    description: "Serverless event notification platform where users subscribe by email and admins publish events that automatically alert all subscribers, removing manual mailing list upkeep. Used Lambda to avoid idle server costs, SNS for native email fan-out instead of a custom notifier, S3 for cheap static hosting, CloudFront for fast HTTPS delivery, and Terraform to make infra reproducible in one command.",
    tech: ["Python", "HTML", "CSS", "JavaScript","Terraform", "AWS – Lambda, SNS, S3, & CloudFront"],
    featured: false,
    githubUrl: "https://github.com/daya1an/event-announcement-system"
  }
];
