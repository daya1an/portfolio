import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import GlowCard from "./gaming-ui/GlowCard";
import { projectsData } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

const Projects: React.FC = () => {
  return (
    <SectionContainer id="projects" title="// PROJECT INVENTORY" subtitle="Featured builds & side quests">
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <GlowCard
              glowColor={i % 2 === 0 ? "blue" : "green"}
              className="h-full flex flex-col"
            >
              {project.featured && (
                <span className="inline-block w-fit px-2 py-0.5 text-[10px] font-display tracking-widest uppercase border border-secondary/50 text-secondary rounded mb-4">
                  Featured
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-muted text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-xs font-mono text-primary hover:text-glow-blue transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
