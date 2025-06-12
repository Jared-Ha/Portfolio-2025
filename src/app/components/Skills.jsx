export default function Skills() {
  const tech = [
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Tailwind", icon: "/icons/tailwindcss.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "Git", icon: "/icons/git.svg" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {tech.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <img src={item.icon} alt={item.name} className="h-12 mb-2" />
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
