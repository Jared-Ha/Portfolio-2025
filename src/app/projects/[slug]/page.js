"use client";

import projects from "@/data/projects";
import techIcons from "@/data/techIcons";
import ProjectImageSlider from "@/app/components/ProjectImageSlider";

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <p>Project not found</p>;

  const allImages = [project.mainImage, ...(project.gallery || [])];

  return (
    <section className="py-12 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-sm text-gray-500 mb-6">2 min read</p>

      {/* Image Slider */}
      <ProjectImageSlider images={allImages} />

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-sm"
          >
            {techIcons[tech] && (
              <img src={techIcons[tech]} alt={tech} className="h-4 w-4" />
            )}
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-6 whitespace-pre-line">
        {project.longDesc}
      </p>

      {/* Gallery (optional: if you still want static thumbs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {project.gallery.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${project.title} screenshot ${index + 1}`}
            className="rounded"
          />
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex gap-4">
        {project.liveLink && (
          <a
            href={project.liveLink}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
        )}
        {project.repoLink && (
          <a
            href={project.repoLink}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </section>
  );
}
