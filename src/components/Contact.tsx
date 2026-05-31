import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { contactData } from "../data/social";
import { Send } from "lucide-react";
import { Button } from "primereact/button";
import emailjs from "emailjs-com";

// Initialize EmailJS (get your Public Key from emailjs.com)
emailjs.init("YOUR_PUBLIC_KEY_HERE");

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const templateParams = {
      to_email: "dayalands2210@gmail.com",
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      reply_to: form.email,
    };

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID_HERE",
        "YOUR_TEMPLATE_ID_HERE",
        templateParams
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    } finally {
      setLoading(false);
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
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors duration-200"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full bg-transparent border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors duration-200"
          />
        </div>
        <textarea
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
