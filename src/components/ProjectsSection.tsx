import { motion } from "framer-motion";
import { ExternalLink, Github, FlaskConical, Wallet } from "lucide-react";

const projects = [
  {
    title: "SyahriahManage",
    subtitle: "Finance Management System",
    summary: "Financial administration system for educational institutions focused on data transparency.",
    solution:
      "Engineered complex financial workflows, including automated arrears tracking and a multi-layered access control system (RBAC).",
    impact:
      "Digitized 100% of manual financial reporting into an audit-ready digital system with automated PDF/Excel exports.",
    tags: ["Laravel", "Vue.js", "PostgreSQL", "RBAC", "PDF/Excel Export"],
    icon: FlaskConical,
    github: "https://github.com/ustadzCoding-dev/syahriahManage",
  },
  {
    title: "NexusQA",
    subtitle: "Multi Project Testing Hub",
    summary: "Integrated testing management platform for streamlined development cycles.",
    solution:
      "Developed an API for ingesting automated test results from Maestro Runner and implemented an Auto Defect feature.",
    impact:
      "Eliminated the latency between failure detection and reporting, significantly accelerating hotfix cycles for engineering teams.",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "Automation", "QA"],
    icon: Wallet,
    github: "https://github.com/ustadzCoding-dev/nexus-qa",
  },
  {
    title: "SmartShrink AI",
    subtitle: "AI Powered File Compressor",
    summary: "Intelligent AI-based file optimization platform.",
    solution:
      "Implemented a multi-format compression engine (PDF, Image, Video) featuring an AI Selector to automatically determine the most efficient optimization method.",
    impact:
      "Optimized server storage capacity while maintaining high visual file integrity and data privacy through a specialized \"Sensitive Mode.\"",
    tags: ["AI Selector", "PDF", "Image", "Video", "Privacy"],
    icon: FlaskConical,
    github: "https://github.com/ustadzCoding-dev/smartShrinkAI",
  },
  {
    title: "CertiFind",
    subtitle: "Free Certification Discovery Platform",
    summary: "Full-stack platform for discovering and bookmarking trusted free certifications.",
    solution:
      "Built a searchable certification catalog with multi-criteria filtering and a personalized bookmarking system integrated with SMTP email notifications.",
    impact:
      "Delivered a complete end-to-end user experience and a robust Admin Dashboard for user management and platform analytics, deployed via Railway and Netlify.",
    tags: ["Full Stack", "SMTP", "Admin Dashboard", "Railway", "Netlify"],
    icon: Wallet,
    github: "https://github.com/ustadzCoding-dev/certi-find",
  },
  {
    title: "Musabaqoh Management System",
    subtitle: "Competition Management",
    summary: "Competition management application for institutional environments.",
    solution:
      "Developed centralized participant management and real-time scoring modules for various competition branches.",
    impact:
      "Ensured high data accuracy and reduced score recapitulation time from hours to seconds.",
    tags: ["Real-time Scoring", "Management", "Institutional"],
    icon: FlaskConical,
    github: "https://github.com/ustadzCoding-dev/musabaqohNuras",
  },
  {
    title: "Capstone Project Management System",
    subtitle: "Student Collaboration Platform",
    summary: "Integrated collaboration platform for student project lifecycles.",
    solution:
      "Served as Project Manager overseeing MVP delivery, FE-BE integration, and production environment hardening.",
    impact:
      "Established a centralized document repository and milestone tracking system that minimized communication risks during the development process.",
    tags: ["Project Management", "Integration", "Milestones"],
    icon: Wallet,
    github: "https://github.com/ustadzCoding-dev/A25-CS246",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-xl border border-border bg-card p-8 hover:glow-border transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <project.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{project.title}</h3>
                  <p className="text-xs text-muted-foreground font-mono">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {project.summary}
              </p>

              <div className="space-y-3 mb-6">
                <div>
                  <div className="text-xs font-mono text-muted-foreground mb-1">Solution</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground mb-1">Impact</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
