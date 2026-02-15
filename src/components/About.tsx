import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { profileData } from "../data/profile";

const About: React.FC = () => {
  return (
    <SectionContainer id="about" title="// ABOUT ME" subtitle="Player biography & stats">
      <div className="grid md:grid-cols-5 gap-8 md:gap-12">
        {/* Bio */}
        <div className="md:col-span-3 space-y-4">
          {profileData.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-muted-foreground leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Stats */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {profileData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="border border-border rounded-lg p-4 text-center bg-card hover:border-primary/40 transition-colors duration-300"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
