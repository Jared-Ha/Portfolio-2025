import Link from "next/link";

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  tech,
  techIcons,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col">
      <Link href={`/projects/${slug}`}>
        <img
          src={image}
          alt={title}
          className="rounded mb-4 hover:opacity-90 transition"
        />
      </Link>
      <h3 className="text-xl font-semibold mb-1">
        <Link href={`/projects/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>{" "}
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <div
            key={t}
            className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"
          >
            {techIcons[t] && (
              <img src={techIcons[t]} alt={t} className="h-4 w-4" />
            )}
            <span className="text-xs">{t}</span>
          </div>
        ))}
      </div>
      <Link
        href={`/projects/${slug}`}
        className="mt-auto text-blue-600 underline text-sm"
      >
        View project →
      </Link>
    </div>
  );
}
