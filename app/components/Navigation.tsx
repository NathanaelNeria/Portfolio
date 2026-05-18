"use client";

export default function Navigation() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-foreground">Portfolio</div>
        <div className="flex gap-8">
          <button
            onClick={() => scrollTo("about")}
            className="text-foreground hover:text-accent-hover transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("skills")}
            className="text-foreground hover:text-accent-hover transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="text-foreground hover:text-accent-hover transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="text-foreground hover:text-accent-hover transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
