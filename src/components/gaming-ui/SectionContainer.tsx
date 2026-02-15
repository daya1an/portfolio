import React from "react";
import { motion } from "framer-motion";

interface SectionContainerProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  title,
  subtitle,
  children,
  className = "",
}) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-4 md:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient-neon mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground text-lg">{subtitle}</p>
            )}
            <div className="mt-4 h-0.5 w-20 bg-primary rounded-full" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
