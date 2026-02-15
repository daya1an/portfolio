import React from "react";
import { socialData } from "../data/social";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-xs tracking-widest text-muted-foreground">
            GG // {socialData.gamerTag}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socialData.links.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={link.platform}
              >
                {Icon && <Icon size={18} />}
              </a>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} // ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
