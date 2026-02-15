import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import NeonButton from "./gaming-ui/NeonButton";
import { contactData } from "../data/social";
import { Send } from "lucide-react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${contactData.email}?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <SectionContainer id="contact" title="// QUICK CONNECT" subtitle={contactData.subheading}>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-xl mx-auto space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
          />
        </div>
        <textarea
          placeholder="Your message..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          rows={5}
          className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body resize-none"
        />
        <NeonButton variant="primary" size="lg" className="w-full flex items-center justify-center gap-2">
          <Send size={16} />
          {contactData.ctaText}
        </NeonButton>
      </motion.form>
    </SectionContainer>
  );
};

export default Contact;
