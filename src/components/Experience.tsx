import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { experienceData } from "../data/experience";

const Experience: React.FC = () => {
  return (
    <SectionContainer id="experience" title="// CAREER LOG" subtitle="Level progression & quest history">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Level badge */}
              <div className="absolute left-0 md:left-4 top-0 w-8 h-8 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                <span className="font-display text-xs font-bold text-primary">
                  {exp.level}
                </span>
              </div>

              <div className="border border-border rounded-lg p-5 md:p-6 bg-card hover:border-primary/30 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <h3 className="font-display text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-primary/80 font-display text-xs tracking-wider uppercase mb-3">
                  {exp.company}
                </p>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {exp.description}
                </p>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="text-muted-foreground text-xs leading-relaxed flex gap-2">
                        <span className="text-primary mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-mono rounded border border-border text-muted-foreground bg-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Experience;
