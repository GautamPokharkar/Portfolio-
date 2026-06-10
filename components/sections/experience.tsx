"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer (Intern)",
    company: "TechCorp Enterprise",
    period: "2023 - Present",
    description: [
      "Architected a reusable UI component library using TypeScript and Tailwind CSS, reducing feature development time across two core squads by 22%.",
      "Optimized complex data fetching layers by implementing stale-while-revalidate (SWR) caching strategies, cutting redundant API overhead by 40%.",
      "Collaborated in a fast-paced agile environment, participating in rigorous code reviews and CI/CD pipeline deployments."
    ]
  }
];

export function Experience() {
  return (
    <section className="py-24 border-t border-border">
      <div className="flex flex-col md:flex-row gap-12">
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest md:w-1/4 pt-2">
          Experience
        </h2>
        <div className="md:w-3/4 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground mt-2 md:mt-0 bg-secondary/50 px-3 py-1 rounded-md border border-border">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3 mt-4 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 text-primary mt-1.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
