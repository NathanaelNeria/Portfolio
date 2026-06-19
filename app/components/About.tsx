"use client";

import { Code2, Briefcase, Mail } from "lucide-react";
import { socialLinks } from "../lib/data";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Code2 size={20} />,
  LinkedIn: <Briefcase size={20} />,
  Email: <Mail size={20} />,
};

export default function About() {
  return (
    <section className="px-6 py-24 md:py-32 bg-card-bg/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="w-full aspect-square max-w-md mx-auto rounded-full bg-gradient-to-br from-card-hover to-border border border-border flex items-center justify-center overflow-hidden">
              <span className="text-8xl md:text-9xl font-semibold text-foreground/80">
                NN
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              <p className="text-sm font-mono text-foreground/50 mb-4 uppercase tracking-wider">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Meet Nathanael
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed mb-6">
                I am a frontend-focused web developer with a strong eye for design and
                user experience. I enjoy building clean, performant, and accessible
                interfaces that solve real problems.
              </p>
              <p className="text-lg text-foreground/60 leading-relaxed mb-8">
                My approach combines attention to detail with pragmatic engineering —
                from component systems and animations to responsive layouts and Core
                Web Vitals.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name === "Email" ? undefined : "_blank"}
                    rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm text-foreground hover:bg-card-hover hover:text-accent transition-all"
                  >
                    {iconMap[link.name]}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
