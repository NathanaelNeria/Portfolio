"use client";

import { ArrowRight, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSectionParallax } from "../lib/useParallax";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/nathanaelneria", icon: <Image src="/GitHub_Invertocat_White.png" alt="GitHub" width={18} height={18} style={{ width: 'auto', height: 'auto' }} /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nathanael-neria-2539b4117", icon: <Image src="/linkedin.png" alt="LinkedIn" width={18} height={18} /> },
  { name: "Email", href: "mailto:nathanaelneria@gmail.com", icon: <Mail size={18} /> },
];

export default function Contact() {
  const { ref, y } = useSectionParallax<HTMLElement>([-30, 30]);

  return (
    <section id="contact" ref={ref} className="px-6 py-24 md:py-32">
      <motion.div className="max-w-5xl mx-auto" style={{ y }}>
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-foreground/50 mb-4 uppercase tracking-wider">
              Let&apos;s collaborate
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8">
              Let&apos;s work together
            </h2>
            <p className="text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto">
              I am currently open to job opportunities and freelance projects. Reach
              out and let&apos;s build something great.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col items-center gap-6">
            <a
              href="mailto:nathanaelneria@gmail.com"
              className="group px-10 py-4 bg-glow-orange text-white rounded-full font-medium text-lg hover:bg-glow-orange/90 hover:scale-[1.02] transition-all flex items-center gap-3 shadow-lg shadow-glow-orange/25"
            >
              Get In Touch
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name === "Email" ? undefined : "_blank"}
                  rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-glow-purple/20 rounded-full text-foreground hover:bg-glow-purple/10 hover:border-glow-purple/40 hover:text-accent transition-all"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </motion.div>
    </section>
  );
}
