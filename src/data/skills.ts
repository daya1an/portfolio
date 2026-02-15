export interface Skill {
  name: string;
  icon: string; // "auto" = resolve from devicon, or manual SVG URL
  level?: number; // 1-100
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillsData: { categories: SkillCategory[] } = {
  categories: [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "auto", level: 95 },
        { name: "TypeScript", icon: "auto", level: 90 },
        { name: "Next.js", icon: "auto", level: 85 },
        { name: "Tailwind CSS", icon: "auto", level: 92 },
        { name: "HTML5", icon: "auto", level: 95 },
        { name: "CSS3", icon: "auto", level: 90 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: "auto", level: 88 },
        { name: "Python", icon: "auto", level: 85 },
        { name: "Express", icon: "auto", level: 85 },
        { name: "GraphQL", icon: "auto", level: 78 },
        { name: "FastAPI", icon: "auto", level: 80 },
      ],
    },
    {
      name: "DevOps",
      skills: [
        { name: "Docker", icon: "auto", level: 82 },
        { name: "AWS", icon: "auto", level: 75 },
        { name: "GitHub Actions", icon: "auto", level: 80 },
        { name: "Kubernetes", icon: "auto", level: 65 },
        { name: "Linux", icon: "auto", level: 80 },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "auto", level: 85 },
        { name: "MongoDB", icon: "auto", level: 82 },
        { name: "Redis", icon: "auto", level: 75 },
        { name: "Firebase", icon: "auto", level: 78 },
      ],
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", icon: "auto", level: 92 },
        { name: "Figma", icon: "auto", level: 70 },
        { name: "VS Code", icon: "auto", level: 95 },
        { name: "Jira", icon: "auto", level: 75 },
      ],
    },
  ],
};

// Map skill names to devicon class names
const deviconMap: Record<string, string> = {
  "React": "react",
  "TypeScript": "typescript",
  "Next.js": "nextjs",
  "Tailwind CSS": "tailwindcss",
  "HTML5": "html5",
  "CSS3": "css3",
  "Node.js": "nodejs",
  "Python": "python",
  "Express": "express",
  "GraphQL": "graphql",
  "FastAPI": "fastapi",
  "Docker": "docker",
  "AWS": "amazonwebservices",
  "GitHub Actions": "githubactions",
  "Kubernetes": "kubernetes",
  "Linux": "linux",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Redis": "redis",
  "Firebase": "firebase",
  "Git": "git",
  "Figma": "figma",
  "VS Code": "vscode",
  "Jira": "jira",
};

export function getIconUrl(skill: Skill): string {
  if (skill.icon !== "auto") return skill.icon;
  const key = deviconMap[skill.name];
  if (!key) return "";
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${key}/${key}-original.svg`;
}
