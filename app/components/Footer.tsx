"use client";

import { Code2, Briefcase, Mail } from "lucide-react";

const quickLinks = [
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/nathanaelneria", icon: <Code2 size={18} /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nathanael-neria-2539b4117", icon: <Briefcase size={18} /> },
  { name: "Email", href: "mailto:nathanaelneria@gmail.com", icon: <Mail size={18} /> },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="px-6 py-12 border-t border-glow-purple/10 bg-gradient-to-t from-glow-purple/5 to-transparent">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-foreground font-semibold mb-1">Nathanael Neria</p>
          <p className="text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm text-foreground/50 hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === "Email" ? undefined : "_blank"}
              rel={link.name === "Email" ? undefined : "noopener noreferrer"}
              aria-label={link.name}
              className="p-2 border border-glow-purple/20 rounded-full text-foreground/50 hover:text-foreground hover:bg-glow-purple/10 hover:border-glow-purple/40 transition-all"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
