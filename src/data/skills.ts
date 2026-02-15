export interface Skill {
  name: string;
  icon: string;
  level?: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillsData: { categories: SkillCategory[] } = {
  categories: [
    {
      name: "Languages",
      skills: [
        { name: "Java", icon: "auto", level: 95 },
        { name: "Python", icon: "auto", level: 85 },
        { name: "TypeScript", icon: "auto", level: 88 },
        { name: "JavaScript", icon: "auto", level: 90 },
        { name: "SQL", icon: "auto", level: 90 },
        { name: "C/C++", icon: "auto", level: 75 },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "auto", level: 88 },
        { name: "Angular", icon: "auto", level: 85 },
        { name: "Redux", icon: "auto", level: 82 },
        { name: "HTML5", icon: "auto", level: 95 },
        { name: "CSS3", icon: "auto", level: 90 },
      ],
    },
    {
      name: "Backend & Frameworks",
      skills: [
        { name: "Spring Boot", icon: "auto", level: 95 },
        { name: "Node.js", icon: "auto", level: 80 },
        { name: "Hibernate", icon: "auto", level: 88 },
        { name: "GraphQL", icon: "auto", level: 75 },
      ],
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "GCP", icon: "auto", level: 85 },
        { name: "AWS", icon: "auto", level: 75 },
        { name: "Docker", icon: "auto", level: 85 },
        { name: "Kubernetes", icon: "auto", level: 78 },
        { name: "Terraform", icon: "auto", level: 75 },
        { name: "Jenkins", icon: "auto", level: 80 },
        { name: "GitHub Actions", icon: "auto", level: 82 },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "auto", level: 88 },
        { name: "MongoDB", icon: "auto", level: 82 },
        { name: "Redis", icon: "auto", level: 80 },
        { name: "MySQL", icon: "auto", level: 85 },
        { name: "Oracle", icon: "auto", level: 78 },
      ],
    },
    {
      name: "Tools & Middleware",
      skills: [
        { name: "Kafka", icon: "auto", level: 82 },
        { name: "Git", icon: "auto", level: 92 },
        { name: "Jira", icon: "auto", level: 80 },
        { name: "Elasticsearch", icon: "auto", level: 75 },
      ],
    },
    {
      name: "AI / ML",
      skills: [
        { name: "Spring AI", icon: "auto", level: 80 },
        { name: "LangChain", icon: "auto", level: 75 },
        { name: "Scikit-Learn", icon: "auto", level: 70 },
      ],
    },
  ],
};

const deviconMap: Record<string, string> = {
  "Java": "java",
  "Python": "python",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "SQL": "azuresqldatabase",
  "C/C++": "cplusplus",
  "React": "react",
  "Angular": "angularjs",
  "Redux": "redux",
  "HTML5": "html5",
  "CSS3": "css3",
  "Spring Boot": "spring",
  "Node.js": "nodejs",
  "Hibernate": "hibernate",
  "GraphQL": "graphql",
  "GCP": "googlecloud",
  "AWS": "amazonwebservices",
  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "Terraform": "terraform",
  "Jenkins": "jenkins",
  "GitHub Actions": "githubactions",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Redis": "redis",
  "MySQL": "mysql",
  "Oracle": "oracle",
  "Kafka": "apachekafka",
  "Git": "git",
  "Jira": "jira",
  "Elasticsearch": "elasticsearch",
  "Spring AI": "spring",
  "LangChain": "",
  "Scikit-Learn": "scikitlearn",
};

export function getIconUrl(skill: Skill): string {
  if (skill.icon !== "auto") return skill.icon;
  const key = deviconMap[skill.name];
  if (!key) return "";
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${key}/${key}-original.svg`;
}
