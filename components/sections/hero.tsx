"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="text-muted-foreground font-mono text-sm tracking-tight uppercase mb-6 border border-border inline-block px-3 py-1 rounded-full bg-secondary/50">
          Currently building scalable systems
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-foreground">
          Software Engineer focused on deterministic UIs & robust architectures.
        </h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Engineered production features during my tenure at TechCorp. Specializing in React, TypeScript, and distributed systems. I build software with an emphasis on type safety and performance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="group">
            Explore Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="group bg-transparent border-border hover:bg-secondary">
            <FileText className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
