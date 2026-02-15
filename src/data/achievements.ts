export interface Achievement {
  title: string;
  description: string;
  icon: "trophy" | "medal" | "star" | "certificate" | "award";
  year: string;
}

export const achievementsData: Achievement[] = [
  {
    title: "AWS Solutions Architect",
    description: "Professional certification for cloud architecture design",
    icon: "certificate",
    year: "2024",
  },
  {
    title: "Hackathon Winner",
    description: "1st place at Global AI Hackathon 2023",
    icon: "trophy",
    year: "2023",
  },
  {
    title: "Open Source Contributor",
    description: "500+ contributions to major open source projects",
    icon: "star",
    year: "2023",
  },
  {
    title: "Tech Speaker",
    description: "Keynote speaker at ReactConf and NodeSummit",
    icon: "award",
    year: "2022",
  },
  {
    title: "Google Developer Expert",
    description: "Recognized expertise in web technologies",
    icon: "medal",
    year: "2022",
  },
];
