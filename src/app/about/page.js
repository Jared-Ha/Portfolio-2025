import Link from "next/link";

export default function About() {
  const topTech = [
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "WordPress", icon: "/icons/wordpress.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css-3.svg" },
  ];

  return (
    <section className="max-w-5xl mx-auto py-20 space-y-24">
      {/* 1. Intro / Story */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="/images/jared-dog-2.jpg"
          alt="Jared with his dog"
          className="sm:w-48 md:w-56 lg:w-64 aspect-square rounded-2xl object-cover shadow-md"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-700 leading-relaxed">
            I’m a full-stack developer with a background in e-commerce and
            project delivery. After a decade managing online businesses, I
            shifted into software development to focus on building tools that
            simplify complex processes. I love creating clean, performant web
            apps and collaborating across design and product teams.
          </p>
        </div>
      </div>

      {/* 2. What I Do */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">What I Do</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Build modern front-ends with React and Next.js</li>
          <li>Develop custom WordPress themes and PHP-based backends</li>
          <li>Design and connect RESTful APIs using Node.js and Express</li>
          <li>Optimise performance, accessibility, and SEO</li>
          <li>Use Agile workflows to deliver stable, maintainable code</li>
        </ul>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 mt-10">
          {topTech.map((item) => (
            <div
              key={item.name}
              className="relative flex flex-col items-center text-center group"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="h-16 w-auto max-w-[4rem] object-contain mb-2 transform transition-transform duration-200 group-hover:scale-110"
              />
              <span className="absolute bottom-[-1.5rem] text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. How I Work */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">How I Work</h2>
        <p className="text-gray-700 leading-relaxed">
          My approach is collaborative and pragmatic. I like clean code,
          meaningful design, and tools that make development efficient. I’m
          comfortable working independently or in teams using GitHub, Agile
          sprints, and CI/CD workflows.
        </p>
      </div>

      {/* 4. Experience Snapshot */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="font-bold">Recent Work</h3>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <Link
                  href="/portfolio/tailored-tutors"
                  className="text-blue-600 hover:underline"
                >
                  Tailored Tutors
                </Link>{" "}
                – full rebuild of a national EdTech website
              </li>
              <li>
                <Link
                  href="/portfolio/curateflow"
                  className="text-blue-600 hover:underline"
                >
                  CurateFlow
                </Link>{" "}
                – React MVP integrating museum APIs
              </li>
              <li>
                <Link
                  href="/portfolio/wildsight"
                  className="text-blue-600 hover:underline"
                >
                  WildSight
                </Link>{" "}
                – React Native cross-platform app
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Earlier Experience</h3>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>10+ years in e-commerce, automation, and data analysis</li>
              <li>Leadership, project management, and digital marketing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. Beyond Code */}
      <div className="bg-gray-50 pt-8 pb-8 pr-3 pl-3 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-6">Beyond Code</h2>
        <p className="text-gray-700 leading-relaxed">
          When I’m not coding, I’m usually exploring Cornwall’s coasts with my
          family and our dog, completing DIY projects and woodworking, and
          soaking up self-development books.
        </p>
      </div>

      {/* 6. Call to Action */}
      <div className="text-center">
        <p className="text-gray-700 mb-6">
          Interested in working together or seeing my full experience?
        </p>
        <div className="flex justify-center gap-6">
          <Link
            href="/files/jared-harrison-dev-cv.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View CV
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
