const projects = [
  {
    slug: "tailored-tutors",
    title: "Tailored Tutors Site Rebuild",
    shortDesc:
      "Commercial rebuild of an EdTech site using custom WordPress theme.",
    longDesc: `Rebuilt a production site using a custom WordPress theme (HTML, CSS, JS, PHP). Translated Figma designs into responsive, accessible pages. Implemented SEO and conversion-focused practices. Worked closely with UX, content, and marketing teams.`,
    mainImage: "/images/projects/TT-site-home-hero.png",
    gallery: [
      "/images/projects/TT-site-parents.png",
      "/images/projects/TT-site-pricing-block.png",
      "/images/projects/TT-site-whats-included-block.png",
      "/images/projects/TT-site-review-carousel.png",
      "/images/projects/TT-site-mobile-parents.png",
      "/images/projects/TT-site-mobile-bio-home.png",
      "/images/projects/TT-site-review-carousel.png",
      "/images/projects/TT-site-tutor-block.png",
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
    mainMedia: "/images/projects/WildSight-project-presentation.mp4",
    gallery: [
      "/images/projects/Wildsight-mobile-home.png",
      "/images/projects/Wildsight-mobile-heatmap.png",
      "/images/projects/Wildsight-mobile-camera.png",
      "/images/projects/Wildsight-mobile-camera-choose-organ.png",
      "/images/projects/Wildsight-mobile-ai-identification.png",
      "/images/projects/Wildsight-mobile-user-sighting-plantnet.png",
      "/images/projects/Wildsight-mobile-user-sightings-mywildlife.png",
      "/images/projects/Wildsight-mobile-user-sightings-mywildlife-favourites.png",
      "/images/projects/Wildsight-mobile-individual-marker.png",
      "/images/projects/Wildsight-mobile-markers.png",
      "/images/projects/Wildsight-mobile-photo-taken.png",
      "/images/projects/Wildsight-mobile-loading.png",
      "/images/projects/Wildsight-mobile-inaturalist-sighting.png",
      "/images/projects/Wildsight-square-tech-stack.png",
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
    mainImage: "/images/projects/Curateflow-home.png",
    gallery: [
      "/images/projects/Curateflow-results.png",
      "/images/projects/Curateflow-categories.png",
      "/images/projects/Curateflow-results-monet.png",
      "/images/projects/Curateflow-mobile.png",
    ],
    tech: ["React", "REST API", "GitHub", "Agile"],
    liveLink: "https://curate-flow.netlify.app/",
    repoLink: "https://github.com/Jared-Ha/art-exhibition-curation",
  },
];

export default projects;
