"use client";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Hi, I&apos;m <span className="text-accent">Nathanael Neria</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-8">
          A passionate developer building modern web experiences
        </p>
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-12">
          I specialize in creating clean, efficient, and user-friendly applications. 
          Currently open to job opportunities and freelance projects.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-accent text-background rounded-full font-medium hover:bg-accent-hover transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border border-border text-foreground rounded-full font-medium hover:bg-card-hover transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
