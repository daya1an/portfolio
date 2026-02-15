import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { skillsData, getIconUrl } from "../data/skills";

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <SectionContainer id="skills" title="// SKILL LOADOUT" subtitle="Technology arsenal & proficiency">
      <div className="space-y-12">
        {skillsData.categories.map((category, catIdx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1, duration: 0.4 }}
          >
            <h3
              className="font-display text-sm tracking-widest uppercase mb-6 cursor-default transition-colors duration-300 flex items-center gap-3"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <span className={`transition-colors duration-300 ${
                hoveredCategory === category.name ? "text-primary text-glow-blue" : "text-muted-foreground"
              }`}>
                {category.name}
              </span>
              <span className="flex-1 h-px bg-border" />
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {category.skills.map((skill, skillIdx) => {
                const iconUrl = getIconUrl(skill);
                const isHovered = hoveredSkill === `${category.name}-${skill.name}`;
                const isCategoryHovered = hoveredCategory === category.name;
                const showLabel = isHovered || isCategoryHovered;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIdx * 0.05, duration: 0.3 }}
                    className="flex flex-col items-center gap-2"
                    onMouseEnter={() => setHoveredSkill(`${category.name}-${skill.name}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className={`relative w-14 h-14 md:w-16 md:h-16 rounded-lg border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        showLabel
                          ? "border-primary/50 bg-primary/10 shadow-[0_0_20px_hsl(var(--neon-blue)/0.2)] scale-110"
                          : "border-border bg-card hover:border-primary/30"
                      }`}
                    >
                      {iconUrl ? (
                        <img
                          src={iconUrl}
                          alt={skill.name}
                          className="w-8 h-8 md:w-9 md:h-9"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                          }}
                        />
                      ) : null}
                      <span className={`font-display text-xs font-bold text-primary ${iconUrl ? "hidden" : ""}`}>
                        {skill.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>

                    <span
                      className={`text-xs font-mono text-center transition-all duration-300 ${
                        showLabel
                          ? "opacity-100 text-primary text-glow-blue"
                          : "opacity-50 text-muted-foreground"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Skills;
