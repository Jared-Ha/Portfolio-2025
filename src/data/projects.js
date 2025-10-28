const projects = [
  {
    slug: "tailored-tutors",
    title: "Tailored Tutors Full Site Rebuild",
    shortDesc:
      "Commercial rebuild of an EdTech site using custom WordPress theme.",
    longDesc: `Rebuilt a production site using a custom WordPress theme (HTML, CSS, JS, PHP). Translated Figma designs into responsive, accessible pages. Implemented SEO and conversion-focused practices. Worked closely with UX, content, and marketing teams.`,
    mainImage: "/images/projects/TT/TT-site-home-hero.webp",
    gallery: [
      "/images/projects/TT/TT-site-parents.webp",
      "/images/projects/TT/TT-site-pricing-block.webp",
      "/images/projects/TT/TT-site-whats-included-block.webp",
      "/images/projects/TT/TT-site-review-carousel.webp",
      "/images/projects/TT/TT-site-mobile-parents.webp",
      "/images/projects/TT/TT-site-mobile-bio-home.webp",
      "/images/projects/TT/TT-site-mobile-tutor-block.webp",
    ],
    tech: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
    liveLink: "https://tailoredtutors.co.uk",
    repoLink: "",
  },
  {
    slug: "wildsight",
    title: "Wildsight",
    shortDesc:
      "Cross-platform mobile app to identify and record plants and wildlife.",
    longDesc: `Co-developed a React Native mobile app using Expo and TypeScript. 
Connected a custom REST API with Node.js, Express, and PostgreSQL. Integrated 
PlantNet and iNaturalist APIs for AI-powered identification. Built heatmaps 
with Google Maps. Delivered via Scrum using TDD.`,
    mainImage: "/images/projects/Wildsight-mobile-home.webp",
    gallery: [
      "/images/projects/Wildsight-mobile-heatmap.webp",
      "/images/projects/Wildsight-mobile-camera.webp",
      "/images/projects/Wildsight-mobile-ai-identification.webp",
      "/images/projects/Wildsight-mobile-user-sightings-mywildlife.webp",
      "/images/projects/Wildsight-mobile-individual-marker.webp",
      "/images/projects/Wildsight-mobile-inaturalist-sighting.webp",
      "/images/projects/WildSight-project-presentation.mp4",
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
    mainImage: "https://picsum.photos/seed/ncnews-main/960/540",
    gallery: [
      "https://picsum.photos/seed/ncnews-1/960/540",
      "https://picsum.photos/seed/ncnews-2/960/540",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Jest", "Supertest"],
    liveLink: "",
    repoLink: "",
  },
  {
    slug: "curateflow",
    title: "CurateFlow",
    shortDesc:
      "MVP React web app integrating museum APIs with search/filter features.",
    longDesc: `Built a fully responsive MVP using React, integrating data from two major museum APIs. Implemented dynamic search, filtering, and conditional rendering. Applied Agile principles and used GitHub for source control.`,
    mainImage: "/images/projects/Curateflow-home.webp",
    gallery: [
      "/images/projects/Curateflow-results.webp",
      "/images/projects/Curateflow-categories.webp",
      "/images/projects/Curateflow-results-monet.webp",
      "/images/projects/Curateflow-mobile.webp",
    ],
    tech: ["React", "REST API", "GitHub", "Agile"],
    liveLink: "https://curate-flow.netlify.app/",
    repoLink: "https://github.com/Jared-Ha/art-exhibition-curation",
  },
];

export default projects;
