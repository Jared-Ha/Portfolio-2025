import projects from "@/data/projects";
import techIcons from "@/data/techIcons";
import ProjectCard from "./ProjectCard";

export default function ProjectsPreview() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            description={project.shortDesc}
            image={project.mainImage}
            tech={project.tech}
            techIcons={techIcons}
          />
        ))}
      </div>
    </section>
  );
}
