"use client";

import { Mail } from "lucide-react";
import { socialLinks } from "../lib/data";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePicture from "../../public/Profile Picture.jpeg";
import { useGlobalParallax } from "../lib/useParallax";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Image src="/GitHub_Invertocat_White.png" alt="GitHub" width={20} height={20} style={{ width: 'auto', height: 'auto' }} />,
  LinkedIn: <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />,
  Email: <Mail size={20} />,
};

export default function About() {
  const bgY = useGlobalParallax([0, -60]);
  const contentY = useGlobalParallax([0, -60]);

  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-glow-cyan/5 via-transparent to-glow-purple/5"
        style={{ y: bgY }}
        aria-hidden="true"
      />
      <motion.div className="relative z-10 max-w-5xl mx-auto" style={{ y: contentY }}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="w-full aspect-square max-w-xs md:max-w-md mx-auto rounded-full bg-gradient-to-br from-glow-purple/30 via-glow-orange/20 to-glow-cyan/30 border border-glow-purple/20 flex items-center justify-center overflow-hidden">
              <Image
                src={profilePicture}
                alt="Profile"
                width={448}
                height={448}
                quality={100}
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              <p className="text-sm font-mono text-foreground/50 mb-4 uppercase tracking-wider">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Meet Nathanael
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed mb-6">
              I’m a Junior Frontend Developer with a practical background in tech products.
              I build clean, production-ready web applications and custom dashboards powered by APIs and SDKs.
              </p>
              <p className="text-lg text-foreground/60 leading-relaxed mb-8">
                I focus on building ready-to-use apps with React and Firebase—like the real POS & Inventory system I built that&apos;s currently used by active users.
                Always open to full-time roles and freelance gigs!
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name === "Email" ? undefined : "_blank"}
                    rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-glow-purple/20 rounded-full text-sm text-foreground hover:bg-glow-purple/10 hover:border-glow-purple/40 hover:text-accent transition-all"
                  >
                    {iconMap[link.name]}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </motion.div>
    </section>
  );
}
