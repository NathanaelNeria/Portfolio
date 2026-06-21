"use client";

import { Quote } from "lucide-react";
import { testimonials } from "../lib/data";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { useGlobalParallax } from "../lib/useParallax";

export default function Testimonial() {
  const bgY = useGlobalParallax([0, -60]);
  const contentY = useGlobalParallax([0, -60]);

  return (
    <motion.section
      className="relative px-6 py-24 md:py-32"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-glow-cyan/3 via-transparent to-glow-purple/3"
        style={{ y: bgY }}
        aria-hidden="true"
      />
      <motion.div className="relative z-10 max-w-5xl mx-auto" style={{ y: contentY }}>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="p-6 md:p-8 border border-glow-cyan/20 rounded-2xl bg-card-bg backdrop-blur-md hover:border-glow-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all h-full flex flex-col">
                <Quote className="text-glow-cyan/40 mb-4" size={40} />
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/50">{testimonial.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
