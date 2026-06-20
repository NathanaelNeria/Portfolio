"use client";

import { ArrowRight } from "lucide-react";
import { services } from "../lib/data";
import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Services() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 25], { clamp: false });

  return (
    <motion.section 
      id="services" 
      className="px-6 py-24 md:py-32 bg-gradient-to-b from-glow-blue/5 via-transparent to-glow-purple/5"
      style={{ backgroundPositionY: y }}
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-foreground/50 mb-4 uppercase tracking-wider">
            What I can help with
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-foreground">
            Services
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.label} delay={index * 0.1}>
              <div className="group p-6 md:p-8 border border-glow-cyan/20 rounded-2xl bg-card-bg backdrop-blur-md hover:border-glow-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(service.tech) ? service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-glow-cyan bg-cyan-950/50 border border-glow-cyan/60 px-2 py-1 rounded-full hover:bg-glow-cyan/10 hover:text-foreground hover:border-glow-cyan/50 hover:scale-105 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    )) : (
                      <span className="text-xs font-mono text-glow-cyan bg-cyan-950/50 border border-glow-cyan/60 px-2 py-1 rounded-full">
                        {service.tech}
                      </span>
                    )}
                  </div>
                  <div className="text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight size={20} />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {service.label}
                </h3>
                <p className="text-foreground/50 leading-relaxed flex-1">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  Get Started
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
