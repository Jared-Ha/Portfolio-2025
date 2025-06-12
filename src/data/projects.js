const projects = [
  {
    slug: "curateflow",
    title: "CurateFlow",
    shortDesc:
      "MVP React web app integrating museum APIs with search/filter features.",
    longDesc: `Built a fully responsive MVP using React, integrating data from two major museum APIs. Implemented dynamic search, filtering, and conditional rendering. Applied Agile principles and used GitHub for source control.`,
    mainImage: "https://picsum.photos/seed/curateflow-main/800/600",
    gallery: [
      "https://picsum.photos/seed/curateflow-1/400/300",
      "https://picsum.photos/seed/curateflow-2/400/300",
    ],
    tech: ["React", "REST API", "GitHub", "Agile"],
    liveLink: "",
    repoLink: "",
  },
  {
    slug: "wildsight",
    title: "Wildsight",
    shortDesc:
      "Cross-platform mobile app to identify and record plants and wildlife.",
    longDesc: `Co-developed a React Native mobile app using Expo and TypeScript. Connected a custom REST API with Node.js, Express, and PostgreSQL. Integrated PlantNet and iNaturalist APIs for AI-powered identification. Built heatmaps with Google Maps. Delivered via Scrum using TDD.`,
    mainImage: "https://picsum.photos/seed/wildsight-main/800/600",
    gallery: [
      "https://picsum.photos/seed/wildsight-1/400/300",
      "https://picsum.photos/seed/wildsight-2/400/300",
    ],
    tech: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Supabase",
      "Google Maps",
    ],
    liveLink: "",
    repoLink: "",
  },
  {
    slug: "nc-news",
    title: "NC News",
    shortDesc:
      "Full-stack news article app with interactive frontend and REST API.",
    longDesc: `Built a responsive frontend in React with a Node.js/Express/PostgreSQL backend. Created RESTful API endpoints for articles, comments, and users. Included filtering, sorting, and TDD with Jest and Supertest.`,
    mainImage: "https://picsum.photos/seed/ncnews-main/800/600",
    gallery: [
      "https://picsum.photos/seed/ncnews-1/400/300",
      "https://picsum.photos/seed/ncnews-2/400/300",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Jest", "Supertest"],
    liveLink: "",
    repoLink: "",
  },
  {
    slug: "tailored-tutors",
    title: "Tailored Tutors Site Rebuild",
    shortDesc:
      "Commercial rebuild of an EdTech site using custom WordPress theme.",
    longDesc: `Rebuilt a production site using a custom WordPress theme (HTML, CSS, JS, PHP). Translated Figma designs into responsive, accessible pages. Implemented SEO and conversion-focused practices. Worked closely with UX, content, and marketing teams.`,
    mainImage: "https://picsum.photos/seed/tailored-main/800/600",
    gallery: [
      "https://picsum.photos/seed/tailored-1/400/300",
      "https://picsum.photos/seed/tailored-2/400/300",
    ],
    tech: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
    liveLink: "https://tailoredtutors.co.uk",
    repoLink: "",
  },
];

export default projects;
