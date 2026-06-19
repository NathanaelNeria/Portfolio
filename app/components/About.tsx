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
    <section className="px-6 py-24 md:py-32 bg-card-bg/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="w-full aspect-square max-w-xs md:max-w-md mx-auto rounded-full bg-gradient-to-br from-card-hover to-border border border-border flex items-center justify-center overflow-hidden">
              <Image
                src={profilePicture}
                alt="Profile"
                width={448}
                height={448}
                quality={100}
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
                I am learning frontend development and have built several web projects to improve my skills.
                I focus on creating simple, clean, and user-friendly interfaces, while continuing to learn about responsive design and modern web practices.
              </p>
              <p className="text-lg text-foreground/60 leading-relaxed mb-8">
                I enjoy turning ideas into real applications and am always looking for ways to improve.
                Open to opportunities and freelance work.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name === "Email" ? undefined : "_blank"}
                    rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm text-foreground hover:bg-card-hover hover:text-accent transition-all"
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
