"use client";

import { skills } from "../lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section className="py-16 border-y border-border bg-card-bg/20">
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
                className="px-4 py-2 bg-card-bg border border-border rounded-full text-foreground/70 hover:bg-card-hover hover:text-foreground hover:scale-105 transition-all cursor-default"
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
