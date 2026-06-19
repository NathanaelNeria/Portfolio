"use client";

import { skills } from "../lib/data";

export default function Marquee() {
  const items = [...skills, ...skills];

  return (
    <section className="py-8 border-y border-border overflow-hidden group bg-card-bg/30">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="inline-flex items-center mx-8 text-lg md:text-xl font-medium text-foreground/60"
          >
            {skill}
            <span className="ml-8 text-foreground/20">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
