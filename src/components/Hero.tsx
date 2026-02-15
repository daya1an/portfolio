import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profileData } from "../data/profile";
import NeonButton from "./gaming-ui/NeonButton";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = profileData.greeting;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--neon-blue)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-blue)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-wider">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-4">
            <span className="text-foreground">{profileData.name.split(" ")[0]}</span>
            <br />
            <span className="text-gradient-neon">{profileData.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="font-display text-sm md:text-base text-muted-foreground tracking-widest uppercase mb-6">
            {profileData.role}
          </p>
          <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8">
            {profileData.tagline}
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <NeonButton variant="primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects
            </NeonButton>
            <NeonButton variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me
            </NeonButton>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 glow-pulse" />
            <div className="absolute -inset-2 rounded-full border border-primary/10 animate-spin" style={{ animationDuration: "20s" }} />
            {/* Avatar placeholder */}
            <div className="absolute inset-2 rounded-full bg-muted flex items-center justify-center overflow-hidden border border-border">
              <span className="font-display text-5xl md:text-6xl font-bold text-gradient-neon">
                {profileData.name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-mono mb-2">SCROLL</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
