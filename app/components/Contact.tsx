"use client";

import { ArrowRight, Mail, Code2, Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/nathanaelneria", icon: <Code2 size={18} /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nathanael-neria-2539b4117", icon: <Briefcase size={18} /> },
  { name: "Email", href: "mailto:nathanaelneria@gmail.com", icon: <Mail size={18} /> },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
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
              className="group px-10 py-4 bg-foreground text-background rounded-full font-medium text-lg hover:bg-accent-hover hover:scale-[1.02] transition-all flex items-center gap-3"
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
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground hover:bg-card-hover hover:text-accent transition-all"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
