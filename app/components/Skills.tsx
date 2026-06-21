"use client";

import { skills } from "../lib/data";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import Image from "next/image";
import { useGlobalParallax } from "../lib/useParallax";
export default function Skills() {
  const bgY = useGlobalParallax([0, -60]);
  const contentY = useGlobalParallax([0, -60]);

  // Tambahin logo untuk setiap skills yang ada

  return (
    <motion.section
      className="relative py-16 border-y border-glow-cyan/10"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-glow-cyan/5 via-transparent to-glow-orange/5"
        style={{ y: bgY }}
        aria-hidden="true"
      />
      <motion.div className="relative z-10 max-w-5xl mx-auto px-6" style={{ y: contentY }}>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
            Skills & Technologies
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-12 justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="flex flex-col items-center gap-2 hover-zoom cursor-default"
              >
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
                {skill.name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </motion.div>
    </motion.section>
  );
}
