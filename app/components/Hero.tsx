"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
    >
      <motion.div
        className="max-w-4xl w-full text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-card-hover to-border border border-border flex items-center justify-center overflow-hidden">
              <span className="text-5xl md:text-6xl font-semibold text-foreground/80">
                NN
              </span>
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background rounded-full text-xs font-medium flex items-center gap-1.5 shadow-lg">
              <Sparkles size={12} />
              Available for work
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground tracking-tight"
        >
          Nathanael Neria
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-foreground/70 mb-6 font-medium"
        >
          Web Developer & Frontend Engineer
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg text-foreground/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft clean, modern, and accessible web experiences. Passionate about
          design systems, smooth interactions, and turning ideas into performant
          digital products.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 bg-foreground text-background rounded-full font-medium hover:bg-accent-hover hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowDown size={18} />
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 border border-border text-foreground rounded-full font-medium hover:bg-card-hover hover:scale-[1.02] transition-all"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
