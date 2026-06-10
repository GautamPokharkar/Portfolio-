"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "Go", "SQL", "HTML/CSS"]
  },
  {
    title: "Frontend Architecture",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand", "Radix UI"]
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Prisma ORM", "REST APIs"]
  },
  {
    title: "Tooling & Infrastructure",
    skills: ["Git", "Docker", "AWS (EC2/S3)", "Vercel", "GitHub Actions", "Jest"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="flex flex-col md:flex-row gap-12">
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest md:w-1/4 pt-2">
          Technical Arsenal
        </h2>
        
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-foreground font-semibold mb-4 border-b border-border/50 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-3"></span>
                    {skill}
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
