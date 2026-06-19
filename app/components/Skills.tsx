export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Javascript", "React Native"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "REST APIs"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma"] },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-card-bg border border-border rounded-lg p-6 hover:bg-card-hover transition-all hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4 text-accent">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-zinc-400 hover:text-foreground transition-colors">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
