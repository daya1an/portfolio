export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  level: number;
}

export const experienceData: Experience[] = [
  {
    title: "Junior Engineer — Backend & Microservices",
    company: "Ford Motor Company",
    period: "Jul 2023 — Present",
    description: "Building and maintaining distributed microservices for enterprise-scale automotive platforms.",
    highlights: [
      "Implemented Spring Boot microservices with API Gateway, Circuit Breaker, Saga, and Sidecar patterns",
      "Optimized SQL queries reducing latency by 50% on million-record datasets through strategic indexing",
      "Developed concurrent batch-processing services with Kafka/JMS for real-time updates",
      "Implemented JWT/OAuth2 authentication with MS Entra ID and Azure Access Packages",
    ],
    tech: ["Spring Boot", "Java", "Kafka", "Redis", "PostgreSQL", "OAuth2"],
    level: 5,
  },
  {
    title: "Junior Engineer — Frontend Development",
    company: "Ford Motor Company",
    period: "Jul 2023 — Present",
    description: "Building responsive, secure web applications with modern frontend frameworks.",
    highlights: [
      "Built responsive React/Angular pages with Redux and component libraries (Prime, Material-UI)",
      "Remediated OWASP vulnerabilities and implemented unit/integration testing with Jest and RTL",
      "Developed high-performance search features using Elasticsearch with custom analyzers",
    ],
    tech: ["React", "Angular", "Redux", "TypeScript", "Jest"],
    level: 4,
  },
  {
    title: "Junior Engineer — Cloud & DevOps",
    company: "Ford Motor Company",
    period: "Jul 2023 — Present",
    description: "Deploying and managing cloud-native applications with modern DevOps practices.",
    highlights: [
      "Deployed applications on GCP (Cloud Run, Cloud SQL, BigQuery, Pub/Sub) and OpenShift",
      "Provisioned infrastructure using Terraform IaC and built CI/CD pipelines with Jenkins/Tekton",
      "Established observability using Splunk and Dynatrace for distributed logging and alerting",
    ],
    tech: ["GCP", "OpenShift", "Docker", "Terraform", "Jenkins", "Kubernetes"],
    level: 3,
  },
  {
    title: "B.E. Information Science & Engineering",
    company: "Kumaraguru College of Technology",
    period: "2019 — 2023",
    description: "Bachelor of Engineering in Information Science and Engineering, Coimbatore, Tamil Nadu.",
    highlights: [],
    tech: ["Data Structures", "Algorithms", "OOP", "DBMS"],
    level: 1,
  },
];
