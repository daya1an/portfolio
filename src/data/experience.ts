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
      "Batch Processing ",
    ], //
    level: 5,
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
    tech: ["React", "Angular", "Redux", "Tailwind CSS", "TypeScript", "Jest"], //
    level: 4,
  },
  {
    title: "Cloud Architecture & DevOps",
    company: "Ford Motor Company",
    period: "Jul 2023 — Present",
    description:
      "Provisioning cloud infrastructure, securing API gateways, and establishing seamless CI/CD pipelines.",
    highlights: [
      "Provisioned CI/CD pipelines with GitHub Actions and deployed applications in GCP Cloud Run, managed by Terraform IaC.",
      "Migrated batch jobs from RabbitMQ to GCP Pub/Sub, improving scalability and eliminating single-broker bottlenecks.",
      "Managed Red Hat OpenShift deployments and CronJobs, optimizing cost while ensuring Kyverno policy compliance.",
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
    ], //
    level: 3,
  },
  {
    title: "AI Integration & Data Engineering",
    company: "Independent Projects",
    period: "2023 — Present",
    description:
      "Designing AI-driven financial ledger solutions and scalable data lakehouses for modern enterprise backends.",
    highlights: [
      "Engineered an AI-driven financial ledger using Spring AI, integrating Apache Kafka for real-time payment event streaming.",
      "Built a RAG pipeline utilizing Gemini and MongoDB Atlas vector data to automate LLM-based invoice processing and decision-making.",
      "Designed an E-Commerce Data Lakehouse on Databricks using a Medallion architecture for multi-hop data transformation.",
      "Modeled denormalized dimensional data to power interactive business dashboards and real-time analytics.",
    ],
    tech: [
      "Spring AI",
      "RAG",
      "Gemini",
      "Databricks",
      "Kafka",
      "MongoDB Atlas",
    ], //
    level: 2,
  },
  {
    title: "B.E. Information Science & Engineering",
    company: "Kumaraguru College of Technology",
    period: "2019 — 2023",
    description:"",
    highlights: [
      "Graduated with First Class with Distinction, recognition of outstanding performance.",
      "Awarded the Mahatma Gandhi Merit Scholarship for four consecutive years in demonstrating consistent academic excellence.",
      "Developed a Blood Donors & Blood Banks Tracking Application as a final‑year project, which was successfully published at the 2023 2nd ICAECA Conference."
    ],
    tech: ["Java", "Python", "Data Structures", "Algorithms", "OOPs", "DBMS", "MERN Stack", "Tableau", "Machine Learning"], //
    level: 1,
  },
];
