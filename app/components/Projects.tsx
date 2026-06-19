"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "../lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-foreground/50 mb-4 uppercase tracking-wider">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-foreground">
            Projects
          </h2>
        </ScrollReveal>

        <div className="border-t border-border">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-border py-8 md:py-10 px-4 -mx-4 transition-all hover:bg-card-hover/50 rounded-lg"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-4xl font-semibold text-foreground group-hover:translate-x-2 transition-transform duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-foreground/40 px-2 py-1 border border-border rounded-full">
                        {project.role}
                      </span>
                    </div>
                    {project.description && (
                      <p className="text-sm md:text-base text-foreground/60 mb-3 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs md:text-sm text-foreground/50 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-foreground/50 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 self-center sm:self-auto">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
