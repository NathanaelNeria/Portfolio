"use client";

import { Code2, Briefcase, Mail } from "lucide-react";
import { socialLinks } from "../lib/data";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import profilePicture from "../../public/Profile Picture.jpeg";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Code2 size={20} />,
  LinkedIn: <Briefcase size={20} />,
  Email: <Mail size={20} />,
};

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32 bg-gradient-to-r from-glow-cyan/5 via-transparent to-glow-purple/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="w-full aspect-square max-w-xs md:max-w-md mx-auto rounded-full bg-gradient-to-br from-glow-purple/30 via-glow-blue/20 to-glow-cyan/30 border border-glow-purple/20 flex items-center justify-center overflow-hidden">
              <Image
                src={profilePicture}
                alt="Profile"
                width={448}
                height={448}
                quality={100}
                loading="lazy"
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
              I build clean, working web and mobile apps powered by APIs and SDKs.
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
      </div>
    </section>
  );
}
