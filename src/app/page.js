import Skills from "./components/Skills";
import ProjectsPreview from "./components/ProjectsPreview";

export default function Home() {
  return (
    <main>
      <section className="pt-16 pb-16 md:pt-60 md:pb-30 bg-white">
        {" "}
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl font-bold mb-2">
              Hi, I’m Jared <span>|</span>{" "}
              <span className="text-blue-600">Full-Stack Developer</span>
            </h1>
            <p className="text-lg text-gray-700 mt-2 py-6">
              I’m a full-stack developer who builds clean, performant apps using
              React, Node.js, and JavaScript.{" "}
            </p>
          </div>

          {/* Right: Photo */}
          <div className="flex-shrink-0">
            <img
              src="/images/jared.jpg"
              alt="Jared Harrison"
              className="w-80 h-auto rounded-full object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      <Skills />

      <ProjectsPreview />
    </main>
  );
}
