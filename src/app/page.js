import Skills from "./components/Skills";
import ProjectsPreview from "./components/ProjectsPreview";

export default function Home() {
  return (
    <main>
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Jared</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          I’m a full-stack developer who builds clean, performant apps using
          React, Node.js, and JavaScript.
        </p>
      </section>

      <Skills />

      <ProjectsPreview />
    </main>
  );
}
