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
      name: "Programming Languages",
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
      name: "Backend",
      skills: [
        { name: "Spring Framework", icon: "auto", level: 80 },
        { name: "Spring Boot", icon: "auto", level: 95 },
        { name: "Spring Batch", icon: "auto", level: 88 },
        { name: "Spring Data", icon: "auto", level: 88 },
        { name: "Spring Security", icon: "auto", level: 80 },
        { name: "Spring GraphQL", icon: "auto", level: 75 },
        { name: "RestFUL API", icon: "auto", level: 80 },
        { name: "GraphQL", icon: "auto", level: 75 },

      ],
    },
    {

      name: "Cloud and Other Platforms",
      skills: [
        { name: "GCP", icon: "auto", level: 85 },
        { name: "AWS", icon: "auto", level: 75 },
        { name: "Kubernetes", icon: "auto", level: 78 },
        { name: "OpenShift", icon: "auto", level: 78 },
        { name: "Kafka", icon: "auto", level: 82 },
        { name: "Redis", icon: "auto", level: 80 },
        { name: "Databricks", icon: "auto", level: 80 },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "auto", level: 88 },
        { name: "Microsoft SQL Server", icon: "auto", level: 85 },        
        { name: "Oracle", icon: "auto", level: 78 },
        { name: "MySQL", icon: "auto", level: 85 },
        { name: "MongoDB", icon: "auto", level: 82 },
        { name: "BigQuery", icon: "auto", level: 80 },
      ],
    },
    {
      name: "DevSecOps and Tools",
      skills: [
        { name: "GitHub", icon: "auto", level: 92 },
        { name: "Jira", icon: "auto", level: 80 },
        { name: "Docker", icon: "auto", level: 85 },        
        { name: "Splunk", icon: "auto", level: 80 },
        { name: "Dynatrace", icon: "auto", level: 80 },
        { name: "Terraform", icon: "auto", level: 75 },
        { name: "Jenkins", icon: "auto", level: 80 },
        { name: "GitHub Actions", icon: "auto", level: 82 }
      ],
    },
    {
      name: "AI Tools, Models and Frameworks",
      skills: [
        { name: "OpenAI", icon: "auto", level: 85 },
        { name: "Google Gemini", icon: "auto", level: 80 },
        { name: "Claude", icon: "auto", level: 80 },
        { name: "Spring AI", icon: "auto", level: 80 },
        { name: "LangChain", icon: "auto", level: 75 },
        { name: "LangGraph", icon: "auto", level: 75 },
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

  "Spring Framework": "springframework",
  "Spring Boot": "springboot",
  "Spring AI": "springai",
  "Spring Batch": "springbatch",
  "Spring Data": "springdata",
  "Spring Security": "springsecurity",
  "Spring GraphQL": "springgraphql",
  "RestFUL API": "restapi",
  "GraphQL": "graphql",

  "GCP": "googlecloud",
  "AWS": "aws",
  "Kubernetes": "kubernetes",
  "OpenShift": "openshift",
  "Kafka": "kafka",
  "Redis": "redis",
  "Databricks": "databricks",

  "PostgreSQL": "postgresql",
  "Microsoft SQL Server": "ssms2025",
  "Oracle": "oracle",
  "MySQL": "mysql",
  "MongoDB": "mongodb",
  "BigQuery": "bigquery",

  "GitHub": "github",
  "Jira": "jira",
  "Docker": "docker",
  "Splunk": "splunk",
  "Dynatrace": "dynatrace",
  "Terraform": "terraform",
  "Jenkins": "jenkins",
  "GitHub Actions": "githubactions",  
  
  "OpenAI": "chatgpt",
  "Google Gemini": "gemini",
  "Claude": "claude",
  "LangChain": "langchain",
  "LangGraph": "langgraph",
  "Scikit-Learn": "scikitlearn",
};

export function getIconUrl(skill: Skill): string {
  if (skill.icon !== "auto") return skill.icon;
  const key = deviconMap[skill.name];
  if (!key) return "";
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${key}/${key}-original.svg`;
}
