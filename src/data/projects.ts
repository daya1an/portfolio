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
    title: "AI Code Reviewer",
    description: "An intelligent code review tool powered by GPT-4 that analyzes pull requests and provides actionable feedback.",
    tech: ["Python", "React", "OpenAI API", "GitHub API"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Live data visualization platform processing 1M+ events/day with sub-second rendering.",
    tech: ["Next.js", "D3.js", "WebSocket", "Redis"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DevOps Pipeline Builder",
    description: "Visual CI/CD pipeline builder with drag-and-drop interface and YAML export.",
    tech: ["React", "TypeScript", "Docker", "Node.js"],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Multiplayer Game Engine",
    description: "Lightweight 2D game engine with WebSocket-based multiplayer support and physics simulation.",
    tech: ["TypeScript", "Canvas API", "WebSocket", "Express"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
];
