"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Distributed Task Scheduler",
    summary: "High-performance job processing queue for asynchronous workloads.",
    problem: "Existing job queues faced race conditions under high concurrency.",
    solution: "Implemented a Redis-backed locking mechanism with worker pooling.",
    tech: ["Next.js", "Redis", "TypeScript", "Prisma"],
    github: "#",
    live: "#"
  },
  {
    title: "Analytics Dashboard UI",
    summary: "Real-time telemetry dashboard for internal metrics tracking.",
    problem: "Client-side rendering caused massive performance lag on large datasets.",
    solution: "Decoupled global state and implemented virtualized rendering.",
    tech: ["React", "Zustand", "Tailwind", "Recharts"],
    github: "#",
    live: "#"
  }
];

export function Projects() {
  return (
    <section className="py-24 border-t border-border">
       <div className="flex flex-col md:flex-row gap-12">
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest md:w-1/4 pt-2">
          Selected Work
        </h2>
        <div className="md:w-3/4 grid grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                    <div className="flex gap-3 text-muted-foreground">
                      <a href={project.github} className="hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
                      <a href={project.live} className="hover:text-primary transition-colors"><ExternalLink className="h-5 w-5" /></a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2">{project.summary}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-background p-4 rounded-md border border-border">
                      <span className="font-semibold block mb-1 text-foreground">Problem:</span>
                      <span className="text-muted-foreground">{project.problem}</span>
                    </div>
                    <div className="bg-background p-4 rounded-md border border-border">
                      <span className="font-semibold block mb-1 text-foreground">Solution:</span>
                      <span className="text-muted-foreground">{project.solution}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground border-border hover:bg-secondary/80 font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
