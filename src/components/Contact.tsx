import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { contactData } from "../data/social";
import { Send } from "lucide-react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    formData.append("access_key", "5266a37d-e055-4664-82dc-06af15183f2b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        formElement.reset();
      } else {
        throw new Error(data?.message || "Unable to send message");
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <SectionContainer id="contact" title="Contact" subtitle={contactData.subheading}>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-xl mx-auto space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors duration-200"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your message..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          rows={5}
          className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors duration-200 resize-none"
        />
        <button
          type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-foreground text-background rounded-md hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={14} />
            {loading ? "Sending..." : contactData.ctaText}
        </button>
          {status === "success" && (
            <div className="text-green-500 text-center text-sm font-medium">
              ✓ Message sent successfully!
            </div>
          )}
          {status === "error" && (
            <div className="text-red-500 text-center text-sm font-medium">
              ✗ Failed to send message. Please try again.
            </div>
          )}
      </motion.form>
    </SectionContainer>
  );
};

export default Contact;
