"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="flex flex-col md:flex-row gap-12">
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest md:w-1/4 pt-2">
          Contact
        </h2>
        
        <div className="md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Left Side: Messaging & Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Let's build something.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently open for new opportunities. Whether you have a question, a role that aligns with my stack, or just want to discuss software architecture—my inbox is open.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="mailto:hello@example.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors w-fit">
                <Mail className="h-5 w-5 mr-3" /> hello@example.com
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors w-fit">
                <Github className="h-5 w-5 mr-3" /> github.com/yourusername
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors w-fit">
                <Linkedin className="h-5 w-5 mr-3" /> linkedin.com/in/yourusername
              </a>
            </div>

            <Button variant="outline" className="group bg-transparent border-border hover:bg-secondary w-fit">
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase">Name</label>
                  <input 
                    id="name"
                    type="text" 
                    placeholder="Jane Doe"
                    className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 text-foreground"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="jane@company.com"
                    className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 text-foreground"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="How can we work together?"
                  className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 text-foreground resize-none"
                  required
                />
              </div>
              <Button type="submit" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
