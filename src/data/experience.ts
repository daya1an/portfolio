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
      "Mainframe system of record for Ford Engineering and Service Parts data; serving as subject-matter expert for its modernization.",
    highlights: [
      "Own REST APIs serving 15+ downstream applications, applying spec-driven design, concurrency controls, and query optimization to achieve low latency.",

      "Introduced a React SPA with Redux state management on shared APIs for real-time vehicle-part validation, adopted by 25+ Ford teams.",

      "Optimized the Global Parts Lookup API with concurrent processing and adaptive multithreading for bulk retrieval, increasing throughput by 60%.",

      "Built batch-processing microservices for ETL workflows, processing 1M+ records daily with audit files in Google Cloud Storage and SFTP integrations.",

      "Resolved critical defects in Python ETL scripts, improving data quality by 15% for mainframe-to-BigQuery transformations that feed downstream APIs.",

      "Automated GCP infrastructure provisioning across IAM, Cloud Storage, Cloud Run, Scheduler, databases, and BigQuery with Terraform, reducing manual effort.",

      "Resolved Tekton pipeline failures and migrated CI/CD workflows to GitHub Actions with SAST scans, cutting deployment time by 50% and improving security.",
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
    title: "E-Commerce Application",
    company: "Infrastructure Management and System Design Support",
    period: "2025Q3 – Present",
    description:
      "E-commerce platform for browsing Ford vehicles and associated parts; provided architecture, design, and technical guidance for scalable AWS migration.",
    highlights: [
      "Owned AWS EKS and database platforms, using Dynatrace for load and performance testing, monitoring, and incident resolution to maintain availability.",

      "Led high-level design reviews using AI-driven analysis, proof-of-concepts, and feasibility studies to validate AWS approaches and reduce implementation risk.",

      "Defined API, batch-processing, and Angular design standards for scalable AWS applications, reducing defects by 20% and onboarding time by 30%.",

      "Migrated on-premises SQL Server workloads to Amazon RDS, transitioned enterprise data sources, and automated AWS infrastructure provisioning with Terraform.",

      "Configured weekly Amazon RDS maintenance to update statistics, rebuild indexes, and run integrity checks, preventing downtime and preserving data integrity.",

      "Provided architecture and technical guidance to vendor teams, aligning migration delivery with enterprise standards and scalable engineering practices.",
    ],
    tech: [
      "Angular",
      "JavaScript",
      "Spring Boot",
      "Terraform",
      "MS SQL Server",
      "AWS EKS",
      "Amazon RDS",
      "DB Migration",
      "Dynatrace",
    ],
    level: 4,
  },
  {
    title: "Global Brand Protection System",
    company: "Legacy Application Modernization",
    period: "2025Q4 – 2026Q1",
    description:
      "Trademark-compliance platform for exemption requests, proposals, and approvals; modernized its UI, APIs, data handling, and security controls.",
    highlights: [
      "Functioned as a Forward Deployed Engineer, partnering with product owners and end users to translate business workflows into production CRM features.",

      "Modernized the legacy UI with component-based React architecture, reusable components, hooks, Context API, HOCs, Axios, and React Router.",

      "Developed data-intensive React components, tree views, and enterprise data tables with optimized rendering, search, and filtering for large datasets.",

      "Introduced a file-management microfrontend supporting Excel import/export and 8+ file formats, backed by a Google Cloud Storage-integrated microservice.",

      "Developed scalable APIs using SOLID principles, design patterns, object-oriented programming, and domain-driven design for modular, maintainable code.",

      "Improved API reliability with Redis-based distributed caching, pagination, rate limiting, and query tuning, minimizing over-fetching and database load.",

      "Built an AI chatbot using Google's Gemini LLM, retrieval-augmented generation, and pgvector to deliver context-aware answers from requests and design guides.",

      "Developed a RAG-based classification engine that summarizes inbound requests and enables automated approval, rejection, or flag-for-review decisions.",

      "Implemented AES-GCM encryption for PII/SPII and remediated 100+ SAST/DAST-identified vulnerabilities aligned with OWASP guidance.",

      "Improved release quality through unit, integration, end-to-end, and cross-browser testing with Jest, Playwright, JMeter, and JUnit, achieving 75% code coverage.",
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
    title: "Global Catalogue Application",
    company: "Platform Modernization and Enhancements",
    period: "2025Q1 – 2025Q3",
    description:
      "Inventory management system that catalogs Parts Control data and distributes it to downstream systems; enhanced through UI, API, security, and CI/CD improvements.",
    highlights: [
      "Built Angular components from Figma designs, delivering dynamic tables, tree views, and modals that improved user experience over legacy systems.",

      "Used enterprise-approved AI tooling (OpenCode) to implement lazy loading, route guards, and navigation enhancements, accelerating feature delivery.",

      "Applied RxJS-based reactive form validation, debounced input handling, and state-management patterns to improve UI responsiveness and data accuracy.",

      "Streamlined file upload and download workflows through AJAX-based client API communication, improving responsiveness and user experience.",

      "Built resilient microservices using service-discovery, sidecar, and saga patterns, ensuring reliable database transactions with Spring Data JPA.",

      "Developed Kafka-based microservices and data aggregation services, enabling reliable asynchronous messaging and scalable, decoupled architectures.",

      "Implemented Spring Security authentication and authorization with OAuth 2.0 via Entra ID, caching JWKS for JWT validation to reduce latency by 65%.",

      "Implemented inter-service REST communication across 15+ microservices using RestTemplate, with centralized dependency versioning through Gradle BOM.",

      "Architected a DAM solution using Google Cloud Storage and signed URLs to overcome gateway payload-size limits and securely deliver large digital assets.",
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
    company: "Cloud Migration, Microservices Modernization & Performance Optimization",
    period: "2024Q1 – 2026Q3",
    description:
      "Global platform for creating and managing engineering and service-parts packaging specifications; modernized infrastructure, microservices, and batch operations.",
    highlights: [
      "Deployed a WebSphere Liberty application and 10+ Spring Boot microservices on OpenShift CaaS, enabling scalable deployments across environments.",

      "Consolidated four region-specific batch jobs into one configurable multi-region microservice with PL/SQL integrations, reducing maintenance overhead.",

      "Developed a Spring MVC microservice using Thymeleaf to render dynamic PackSpec reports from database records, with PDF and Excel export.",

      "Optimized batch-processing microservices through partitioning, multithreaded execution, and chunk tuning to improve throughput for downstream applications.",

      "Orchestrated Kubernetes workloads with Pods, Deployments, Services, Secrets, NetworkPolicies, Prometheus, CronJobs, alerts, and HPA.",

      "Integrated Dynatrace and Splunk sidecars to monitor CPU, memory, and runtime metrics during load and performance testing, reducing outages.",

      "Led knowledge-transfer sessions for 10+ engineers on OpenShift, covering CronJobs, SSL/DNS, Prometheus rules, and alerts with supporting documentation.",
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
