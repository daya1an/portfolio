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
    title: "Parts Control Application",
    company: "New App Development",
    period: "2026Q2 – Present",
    description:
      "Base - Mainframe application, birth place of Ford Engineering and Service Parts Details. Functioning as SME for the Modernized Part of this Application.",
    highlights: [
      "Own APIs serving 15+ downstream applications, applying Spec-Driven Design, concurrency controls, and query optimization to deliver low-latency platform services.",

      "Introduced a React-based SPA consuming shared APIs, enabling real-time vehicle-part validation and driving adoption across multiple Ford engineering teams.",

      "Optimized the Global Parts Lookup API through concurrent processing and adaptive multithreading for bulk retrieval, increasing throughput by 60%.",

      "Built batch-processing microservices supporting ETL workflows, processing 1M+ records daily with GCS-backed auditability and reliable SFTP integrations.",

      "Resolved critical defects in Python ETL pipelines, improving data quality by 15% for mainframe-to-BigQuery transformations powering downstream APIs.",

      "Automated GCP infrastructure provisioning across IAM, Cloud Run, Storage, Scheduler, Databases, and BigQuery using Terraform, reducing operational effort.",

      "Resolved Tekton pipeline failures, migrated CI/CD workflows to GitHub Actions, integrated SAST scans, and reduced deployment time by 50%.",
    ],
    tech: [
      "React",
      "Redux",
      "TypeScript",
      "Spring Boot",
      "REST API",
      "IBM DB2",
      "BigQuery",
      "GCP",
      "Batch Processing",
      "Tekton",
      "GitHub Actions",
    ],
    level: 5,
  },
  {
    title: "Ecommerce Catalog",
    company: "COTS Application - Infrastructure Migration",
    period: "2025Q3 – Present",
    description:
      "An Ecommerce Site that allows users to browse ford vehicles and its associated part details. Enabling successful migration by providing architecture, design, and technical guidance to vendor teams, ensuring alignment with enterprise standards and scalable migration practices.",
    highlights: [
      "Owned container and database platforms, leveraging Dynatrace for performance testing, monitoring, and incident resolution to ensure platform availability.",

      "Led architecture reviews using AI-assisted analysis, proof-of-concepts, and feasibility assessments, reducing implementation risks by 40%.",

      "Defined low-level design standards for APIs, batch-processing systems, and Angular applications, reducing defects by 20% and onboarding time by 30%.",

      "Migrated Microsoft SQL Server workloads to GCP Cloud SQL, reconfigured data sources, managed DDL/DML changes, and maintained Terraform automation.",

      "Implemented automated database maintenance workflows for statistics updates, index rebuilds, and integrity validation, preventing downtime and performance issues.",

      "Mentored junior engineers on seller-platform architecture, API design, distributed caching, business workflows, and engineering best practices.",
    ],
    tech: [
      "Angular",
      "JavaScript",
      "Spring Boot",
      "Terraform",
      "MS SQL Server",
      "Entra Id",
      "GCP",
      "DB Migration",
      "OpenShift",
      "Dynatrace",
    ],
    level: 4,
  },
  {
    title: "Global Brand Protection System",
    company: "Legacy Application Modernization",
    period: "2025Q4 – 2026Q1",
    description:
      "An application used to seek Exemptions approvals and track Trademark compliance, which connects Global Analysts and Supervisors, to raise Requests, Proposals, and Approvals. Modernized this legacy application by rebuilding UI, optimizing data handling, enforcing security standards, and delivering resilient APIs with enterprise compliance.",
    highlights: [
      "Partnered directly with product owners and end users as a Forward Deployed Engineer, translating requirements into scalable production-ready features.",

      "Modernized a legacy application using a component-based React architecture with reusable components, hooks, Context API, HOCs, Axios, and React Router.",

      "Developed data-intensive React components, tree views, and enterprise data tables with optimized rendering, search, and filtering for large datasets.",

      "Introduced a file-management microfrontend supporting Excel import/export and 8+ file formats, backed by a GCS-integrated microservice.",

      "Developed scalable APIs using SOLID principles, DDD, OOP, and design patterns, enabling modular architecture and faster feature delivery.",

      "Improved API reliability through Redis caching, pagination, rate limiting, and query optimization, reducing over-fetching and database load.",

      "Built an AI-powered chatbot using Ford's Gemini-backed LLM API, RAG, and pgVector, delivering contextual answers from requests, proposals, and design guides.",

      "Implemented AES-GCM encryption for PII/SPII data and remediated 100+ OWASP vulnerabilities, achieving compliance through SAST and DAST validation.",

      "Improved release quality through unit, integration, E2E, and cross-browser testing with JUnit, Jest, and Playwright, achieving 75% code coverage.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "REST API",
      "Redis",
      "PostgreSQL",
      "GCP",
      "ADFS",
      "Tekton",
    ],
    level: 3,
  },
  {
    title: "Global Catalog",
    company: "Enhancement Project",
    period: "2025Q1 – 2025Q3",
    description:
      "An Inventory Management System that retrieves part details from Parts Control, allows users to catalog them, and distributes the information to multiple downstream systems. Enhanced application's modules by delivering new features, building resilient APIs, strengthening authentication, and streamlining CI/CD for performance and security.",
    highlights: [
      "Developed Angular components from Figma designs, delivering interactive tables, tree views, and modals that enhanced usability over legacy applications.",

      "Leveraged enterprise AI tooling to implement lazy loading, route guards, and navigation enhancements, accelerating development and feature delivery.",

      "Applied RxJS-based reactive validation, debounced inputs, and state-management patterns to improve UI responsiveness and data accuracy.",

      "Built resilient microservices leveraging Service Discovery, Sidecar, and Saga patterns with Spring Data JPA, ensuring reliability and transactional consistency.",

      "Developed Kafka-based microservices and aggregation services, enabling scalable asynchronous messaging and decoupled distributed-system communication.",

      "Implemented OAuth 2.0 authentication with Entra ID and JWKS caching for JWT validation, reducing authorization latency by 65% across services.",

      "Enabled inter-service communication across 15+ microservices using RestTemplate and centralized dependency management through Gradle BOM versioning.",

      "Architected a DAM solution using GCS buckets and signed URLs to bypass Apigee transfer limits, enabling secure access to large digital assets.",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "PrimeNG",
      "Spring Boot",
      "REST API",
      "PostgreSQL",
      "GCP",
      "Entra ID",
      "Pub/Sub",
      "Redis",
      "GitHub Actions",
    ],
    level: 2,
  },
  {
    title: "Global Service Parts Packaging System",
    company: "Legacy Application - Infrastructure Migration",
    period: "2024Q1 – 2026Q3",
    description:
      "Global Application for creating and managing packaging and logistics specifications of Engineering and Service Parts. Modernized legacy infrastructure by upgrading codebase, migrating workloads to OpenShift, strengthening API security, and optimizing batch operations with enterprise standards.",
    highlights: [
      "Migrated a WAS Liberty application and 10+ microservices from PCF to OpenShift, simplifying Kubernetes workload orchestration in a distributed environment.",

      "Consolidated region-specific batch workloads into a configurable multi-region microservice with PL/SQL integrations, reducing maintenance effort by 3x.",

      "Developed a Spring Boot and Thymeleaf reporting service enabling dynamic PackSpec generation, on-demand rendering, and downloadable business reports.",

      "Optimized batch-processing microservices through partitioning, multithreaded execution, and chunk tuning, increasing throughput for downstream applications.",

      "Orchestrated Kubernetes workloads using Deployments, Services, Secrets, NetworkPolicies, CronJobs, HPA, Prometheus, and alerting mechanisms.",

      "Integrated Dynatrace and Splunk sidecars for runtime observability, monitoring infrastructure and application metrics to reduce production outages.",

      "Led knowledge-transfer sessions for 10+ engineers on OpenShift, covering CronJobs, SSL/DNS, Prometheus alerts, and operational best practices.",
    ],
    tech: [
      "Java",
      "Struts",
      "JSF",
      "WAS Liberty",
      "Spring Boot",
      "MS SQL Server",
      "IBM DB2",
      "AWS",
      "Red Hat OpenShift",
      "ADFS",
      "JFrog",
      "Tekton",
      "Batch Processing",
    ],
    level: 1,
  },
];
