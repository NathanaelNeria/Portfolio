"use client";

import { skills } from "../lib/data";
import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Skills() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 30], { clamp: false });

  return (
    <motion.section 
      className="py-16 border-y border-glow-cyan/10 bg-gradient-to-r from-glow-cyan/5 via-transparent to-glow-blue/5"
      style={{ backgroundPositionY: y }}
    >
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
                className="px-4 py-2 bg-cyan-950/50 text-glow-cyan border border-glow-cyan/60 rounded-full hover:bg-glow-cyan/10 hover:text-foreground hover:border-glow-cyan/50 hover:scale-105 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </motion.section>
  );
}
