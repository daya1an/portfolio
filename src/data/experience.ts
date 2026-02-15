export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  level: number; // game level metaphor
}

export const experienceData: Experience[] = [
  {
    title: "Senior Full Stack Engineer",
    company: "TechCorp Global",
    period: "2023 — Present",
    description: "Leading development of AI-powered SaaS platform serving 100K+ users. Architecting microservices and mentoring junior developers.",
    tech: ["React", "TypeScript", "Python", "AWS", "PostgreSQL"],
    level: 5,
  },
  {
    title: "Full Stack Developer",
    company: "InnovateLab",
    period: "2021 — 2023",
    description: "Built real-time collaboration tools and data visualization dashboards. Reduced API response times by 60%.",
    tech: ["Next.js", "Node.js", "MongoDB", "Docker", "GraphQL"],
    level: 4,
  },
  {
    title: "Frontend Developer",
    company: "DigitalWave Agency",
    period: "2020 — 2021",
    description: "Developed responsive web applications for enterprise clients. Implemented design systems and component libraries.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    level: 3,
  },
  {
    title: "Junior Developer",
    company: "StartupX",
    period: "2019 — 2020",
    description: "Built MVP features for an e-commerce platform. First exposure to agile development and CI/CD pipelines.",
    tech: ["JavaScript", "Node.js", "Express", "MySQL"],
    level: 2,
  },
];
