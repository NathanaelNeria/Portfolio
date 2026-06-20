"use client";

import { skills } from "../lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section className="py-16 border-y border-glow-purple/10 bg-gradient-to-r from-glow-purple/5 via-transparent to-glow-blue/5">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
            Skills & Technologies
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card-bg border border-glow-purple/15 rounded-full text-foreground/70 hover:bg-glow-purple/10 hover:text-foreground hover:border-glow-purple/30 hover:scale-105 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
