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
    description: "A Spring Boot REST API using Spring AI with Gemini-2.5 Flash model, delivering multiple configurable AI use cases with enterprise-grade reliability.",
    tech: ["Spring Boot", "Spring AI", "Gemini", "Redis", "Resilience4j", "Prometheus"],
    featured: true,
    githubUrl: "https://github.com/daya1an",
  },
  {
    title: "Microservices Platform",
    description: "Distributed microservices architecture with API Gateway, Circuit Breaker, and Saga patterns for high-throughput enterprise systems at Ford.",
    tech: ["Spring Boot", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
    featured: true,
  },
  {
    title: "Cloud-Native Deployment Pipeline",
    description: "End-to-end CI/CD pipeline with Terraform IaC, Jenkins/Tekton, and GCP services including Cloud Run, BigQuery, and Pub/Sub.",
    tech: ["GCP", "Terraform", "Jenkins", "Docker", "OpenShift"],
    featured: false,
  },
  {
    title: "Real-Time Search Engine",
    description: "High-performance search feature using Elasticsearch with custom analyzers and aggregations for bulk data retrieval across microservices.",
    tech: ["Elasticsearch", "Spring Boot", "React", "TypeScript"],
    featured: true,
  },
];
