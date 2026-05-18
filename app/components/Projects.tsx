export default function Projects() {
  const projects = [
    {
      title: "POS & Inventory Management System",
      description: "Web App built for a local business to manage their point of sale and inventory.",
      tech: ["React", "Tailwind", "Firebase", "Javascript"],
    },
    // {
    //   title: "Project Two",
    //   description: "Full-stack application with Node.js backend and PostgreSQL database. Includes user authentication and real-time updates.",
    //   tech: ["Node.js", "Express", "PostgreSQL"],
    // },
    // {
    //   title: "Project Three",
    //   description: "E-commerce platform with shopping cart functionality and payment integration. Optimized for performance and SEO.",
    //   tech: ["Next.js", "Stripe", "Prisma"],
    // },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card-bg border border-border rounded-lg p-6 hover:bg-card-hover transition-all hover:scale-105 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
              <p className="text-zinc-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-border text-zinc-300 text-sm rounded-full hover:bg-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
