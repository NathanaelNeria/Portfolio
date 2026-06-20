"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="bg-background/70 backdrop-blur-md border-b border-glow-cyan/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-semibold text-foreground hover:text-accent transition-colors"
          >
            Nathanael Neria
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-foreground/80 hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 bg-gradient-to-r from-glow-purple to-glow-blue text-white rounded-full text-sm font-medium hover:from-glow-purple/90 hover:to-glow-blue/90 hover:scale-[1.02] transition-all shadow-md shadow-glow-purple/20"
            >
              Get In Touch
            </button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-glow-purple/10 bg-background/95 backdrop-blur-md">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-foreground/80 hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="px-5 py-2.5 bg-gradient-to-r from-glow-purple to-glow-blue text-white rounded-full text-sm font-medium hover:from-glow-purple/90 hover:to-glow-blue/90 transition-colors shadow-md shadow-glow-purple/20"
              >
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
