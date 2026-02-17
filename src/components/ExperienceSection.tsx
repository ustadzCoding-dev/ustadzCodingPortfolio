import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const education = {
  school: "Nahdlatul Ulama Islamic University Jepara",
  program: "Information Technology",
  degree: "Bachelor of Computer Science",
  gpa: "3.84",
  location: "Jepara, Central Java, Indonesia",
  period: "Sep 2023 — Present",
  highlights: [
    "Academic Excellence: Maintained a high cumulative GPA of 3.87, consistently achieving \"A\" grades in core technical subjects including Advanced Web Programming, Advanced Database Systems, Software Engineering, and Data Structures & Algorithms.",
    "Industry-Standard Training: Selected for the intensive Front-End & Back-End with AI Cohort by Dicoding Indonesia, qualifying for 20 credit equivalents (SKS) through project-based learning and industry standard evaluations.",
    "Relevant Coursework: Advanced Web Programming, Software Engineering, Object-Oriented Programming, Mobile Programming, Structured Programming, Advanced Database Systems, Data Structures & Algorithms, System Analysis & Design, and Information Systems Architecture.",
    "Technical Implementation: Successfully applied theoretical knowledge to develop various production ready applications, leveraging frameworks such as Laravel, Node.js, and Vue.js.",
  ],
};

const experiences = [
  {
    role: "Quality Assurance & Full Stack Support",
    company: "PT Digicraft Syakeera Ventures — Surakarta, Central Java, Indonesia",
    period: "Jan 2026 — Present",
    highlights: [
      "Perform manual testing for GERCEPin features (login, transactions, dashboard, etc.) on the web and mobile.",
      "Create simple test cases and bug reports using tools such as Google Sheets or Jira.",
      "Test usability and compatibility on various devices/browsers for optimal user experience.",
      "Assist in the implementation of small features (form validation, API integration, UI fixes) using the team's framework (React/Vue + Node.js/PHP).",
      "Debug and fix minor bugs based on QA reports or user feedback.",
      "Update code documentation and API endpoints for easy team maintenance.",
    ],
  },
  {
    role: "Team Lead & Full Stack Developer",
    company: "Asah led by Dicoding (MSIB) — Bandung, West Java, Indonesia",
    period: "Nov 2025 — Dec 2025",
    highlights: [
      "Led delivery to a production-ready release (v1.0.1) by planning the MVP, coordinating FE–BE integration, and enforcing release quality gates.",
      "Implemented authentication + RBAC (JWT, email verification, Google OAuth) to separate access across student/admin/mentor roles.",
      "Built a complex team lifecycle (composition validation, invitations accept/reject, edit-before-approval) to standardize team formation.",
      "Developed a document repository (uploads/external links, categories, metadata) with role-based access.",
      "Owned deployment & hardening: environment configuration, external service integrations, rate limiting fixes, and replica set support.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-14 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center glow-border">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-mono text-primary mb-1">{exp.period}</p>
                <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Academics</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <p className="text-xs font-mono text-primary mb-1">{education.period}</p>
            <h3 className="text-lg font-bold text-foreground">{education.school}</h3>
            <p className="text-sm text-muted-foreground">{education.program}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {education.degree} • {education.gpa}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{education.location}</p>

            <ul className="space-y-2 mt-5">
              {education.highlights.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
