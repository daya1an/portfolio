import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { achievementsData } from "../data/achievements";
import { Trophy, Medal, Star, Award, BookOpen } from "lucide-react";

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  star: Star,
  certificate: BookOpen,
  award: Award,
};

const Achievements: React.FC = () => {
  return (
    <SectionContainer id="achievements" title="// ACHIEVEMENTS" subtitle="Unlocked badges & certifications">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievementsData.map((ach, i) => {
          const Icon = iconMap[ach.icon];
          return (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="border border-border rounded-lg p-5 bg-card flex items-start gap-4 hover:border-secondary/40 hover:shadow-[0_0_20px_hsl(var(--neon-green)/0.1)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center shrink-0 group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-300">
                <Icon size={18} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                  {ach.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-1">{ach.description}</p>
                <span className="text-[10px] font-mono text-muted-foreground">{ach.year}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Achievements;
