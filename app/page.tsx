import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-12 selection:bg-primary/30">
      <nav className="py-8 flex justify-between items-center border-b border-border/50">
        <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
          John Doe / <span className="text-muted-foreground">Eng</span>
        </span>
        <div className="flex gap-6 text-sm text-muted-foreground font-mono">
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>
      
      <Hero />
      <Experience />
      <Projects />
      <Skills />       
      <Contact />
      
      <footer className="py-12 mt-12 border-t border-border/50 flex justify-between items-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} — Built with Next.js & Tailwind.</p>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </div>
      </footer>
    </main>
  );
}
