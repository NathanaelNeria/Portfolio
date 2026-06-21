"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import profilePicture from "../../public/Profile Picture 2.jpeg";
import { useGlobalParallax } from "../lib/useParallax";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const contentY = useGlobalParallax([0, -60]);
  const imageY = useGlobalParallax([0, -60]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: !prefersReducedMotion ? 0.12 : 0,
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
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
    >
      <motion.div
        className="max-w-4xl w-full text-center"
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ y: contentY }}
      >
        <motion.div className="mb-8 flex justify-center" style={{ y: imageY }}>
          <motion.div variants={item} className="relative">
            <div className="w-72 h-72 md:w-88 md:h-88 rounded-full bg-gradient-to-br from-glow-purple/30 via-glow-orange/20 to-glow-cyan/30 border border-glow-purple/20 flex items-center justify-center overflow-hidden">
              <Image
                src={profilePicture}
                alt="Profile"
                width={448}
                height={448}
                quality={100}
                priority
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white bg-clip-text text-transparent tracking-tight"
        >
          Nathanael Neria
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-foreground/70 mb-6 font-medium"
        >
          Frontend Developer
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg text-foreground/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Junior Frontend Developer with a background in Presales. <br/>
          I build functional, production-ready web applications, focused on delivering real business value.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 bg-glow-orange text-white rounded-full font-medium hover:bg-glow-orange/90 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          >
            View My Work
            <ArrowDown size={18} />
          </button>
          
        </motion.div>
      </motion.div>
    </section>
  );
}
