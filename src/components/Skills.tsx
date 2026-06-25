import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { skillsData, getIconUrl } from "../data/skills";
import { Divider } from "primereact/divider";

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <SectionContainer id="skills" title="Technical Skills" subtitle="Technologies & tools I work with. (Touch/Hover for details)">
      <div className="space-y-10">
        {skillsData.categories.map((category, catIdx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.06, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3
              className="text-xs tracking-widest uppercase mb-5 cursor-default transition-colors duration-300 font-semibold flex items-center gap-3"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <span className={`transition-colors duration-300 ${
                hoveredCategory === category.name ? "text-foreground" : "text-muted-foreground"
              }`}>
                {category.name}
              </span>
              <span className="flex-1 h-px bg-border" />
            </h3>

            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4">
              {category.skills.map((skill) => {
                const iconUrl = getIconUrl(skill);
                const isHovered = hoveredSkill === `${category.name}-${skill.name}`;
                const isCategoryHovered = hoveredCategory === category.name;
                const showLabel = isHovered || isCategoryHovered;

                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2"
                    onMouseEnter={() => setHoveredSkill(`${category.name}-${skill.name}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className={`relative w-12 h-12 md:w-14 md:h-14 rounded-lg border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        showLabel
                          ? "border-foreground/20 bg-muted scale-105"
                          : "border-border bg-card hover:border-foreground/10 hover:bg-muted/50"
                      }`}
                    >
                      {iconUrl ? (
                        <img
                          src={iconUrl}
                          alt={skill.name}
                          className={`w-7 h-7 md:w-8 md:h-8 transition-all duration-300 ${
                            showLabel ? "opacity-100" : "opacity-60 grayscale"
                          }`}
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                          }}
                        />
                      ) : null}
                      <span className={`text-xs font-semibold text-muted-foreground ${iconUrl ? "hidden" : ""}`}>
                        {skill.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] text-center transition-all duration-300 font-medium ${
                        showLabel ? "opacity-100 text-foreground" : "opacity-0 text-muted-foreground"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
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
