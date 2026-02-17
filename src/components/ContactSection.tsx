import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Connect</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Interested in collaboration or have a project in mind? Let's build something reliable together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://linkedin.com/in/afrizal-ilza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:glow-border transition-all duration-300"
          >
            <Linkedin className="w-4 h-4 text-primary" />
            LinkedIn
          </a>
          <a
            href="https://github.com/afrizal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:glow-border transition-all duration-300"
          >
            <Github className="w-4 h-4 text-primary" />
            GitHub
          </a>
          <a
            href="mailto:contact@afrizal.dev"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:glow-border transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-primary" />
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
