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
    title: "Backend & Microservices",
    company: "Ford Motor Company",
    period: "Jul 2023 — Present",
    description:
      "Architecting high-throughput, distributed microservices and event-driven systems for enterprise applications.",
    highlights: [
      "Migrated REST endpoints to GraphQL over BigQuery, serving 25+ downstream applications at sub-200ms p99 latency.",
      "Built Kafka APIs with WebFlux and Virtual Threads for real-time data propagation in business-critical workflows.",
      "Developed asynchronous microservices powering weekly batch jobs processing 10M+ records.",
      "Optimized PL/SQL stored procedures, reducing ETL job execution time by 35% and eliminating data reconciliation errors.",
      "Remediated 50+ OWASP vulnerabilities using SonarQube, Cycode, and 42Crunch for enterprise-grade security compliance.",
    ],
    tech: [
      "Java 17+",
      "Spring Boot",
      "GraphQL",
      "Kafka",
      "PostgreSQL",
      "MongoDB",
      "Batch Processing",
    ],
    level: 5,
  },
  {
    title: "Cloud Architecture & DevOps",
    company: "Ford Motor Company",
    period: "Jul 2023 — Present",
    description:
      "Provisioning cloud infrastructure, securing API gateways, and establishing seamless CI/CD pipelines.",
    highlights: [
      "Provisioned CI/CD pipelines with GitHub Actions & Tekton and deployed applications in GCP Cloud Run, managed by Terraform IaC.",
      "Migrated Legacy applications's Message Queues from RabbitMQ & IBM MQ to GCP Pub/Sub and Apache Kafka, improving scalability and eliminating single-broker bottlenecks.",
      "Managed from PCF to Red Hat OpenShift deployments and CronJobs, optimizing cost while ensuring Kyverno policy compliance.",
      "Architected secure API access via Apigee API Gateway and solved file transfer limitations using GCS signed URLs.",
    ],
    tech: [
      "GCP",
      "OpenShift",
      "Terraform",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Apigee",
    ],
    level: 3,
  },
  {
    title: "Frontend Development",
    company: "Ford Motor Company",
    period: "Jul 2023 — Present",
    description:
      "Building responsive, highly performant web applications with modern frontend frameworks and robust testing.",
    highlights: [
      "Built responsive Redux-powered dashboards with Tailwind CSS, achieving 90%+ test coverage via Jest.",
      "Developed performant React data tables with virtualized rendering to handle 10K+ row datasets without pagination overhead.",
      "Created Angular UI components incorporating lazy loading, breadcrumb navigation, and authorization strategies.",
    ],
    tech: ["React", "Angular", "Redux", "Tailwind CSS", "TypeScript", "Jest"],
    level: 4,
  },
  {
    title: "B.E. Information Science & Engineering",
    company: "Kumaraguru College of Technology",
    period: "2019 — 2023",
    description: "",
    highlights: [
      "Graduated with First Class with Distinction, recognition of outstanding performance.",
      "Awarded the Mahatma Gandhi Merit Scholarship for four consecutive years in demonstrating consistent academic excellence.",
      "Developed a Blood Donors & Blood Banks Tracking Application as a final-year project, which was successfully published at the 2023 2nd ICAECA Conference.",
    ],
    tech: [
      "Java",
      "Python",
      "Data Structures",
      "Algorithms",
      "OOPs",
      "DBMS",
      "MERN Stack",
      "Tableau",
      "Machine Learning",
    ],
    level: 1,
  },
  {
    title: "Observability & Security",
    company: "Ford Motor Company",
    period: "Jul 2023 — Present",
    description:
      "Embedding production-grade observability, secret management, and policy enforcement across enterprise Kubernetes workloads.",
    highlights: [
      "Integrated Splunk and Dynatrace via sidecar containers for real-time log aggregation and APM across OpenShift deployments.",
      "Provisioned GCP Secret Manager via Python-based init containers, eliminating hardcoded credential risks.",
      "Enforced Kyverno admission policies across all OpenShift CronJob and batch deployments to ensure cluster compliance.",
      "Authored enterprise Kubernetes docs covering CronJob scheduling, SSL/DNS mapping, and alerting rules.",
      "Configured ADFS and Entra ID-based authentication flows with Redis-backed JWT caching for stateless and high-performance authentication.",
      "Established Apigee API Gateway for SAP and Mainframe-consumed APIs with rate limiting and security policy enforcement.",
    ],
    tech: [
      "Splunk",
      "Dynatrace",
      "Kyverno",
      "GCP Secret Manager",
      "Kubernetes",
      "ADFS",
      "Entra ID",
      "Apigee",
      "Redis",
    ],
    level: 3,
  },
];