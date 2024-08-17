//Navigation
export const NAV_LINKS = [
  { to: "/#home", key: "home", label: "Home", id: "home" },
  { to: "/#projects", key: "projects", label: "Projects", id: "projects" },
  { to: "/#skills", key: "skills", label: "Skills", id: "skills" },
  { to: "/#resume", key: "resume ", label: "Resume ", id: "resume" },
  { to: "/#contact", key: "contact", label: "Contact", id: "contact" },
];

export const PROJECTS_DATA = [
  {
    title: "Dynamic Construction Company Website",
    description:
      "Modern and responsive page designed for a construction company, showcasing their services, completed projects, and company values. The website features smooth animations, intuitive navigation, and a professional layout.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer-Motion",
      "Node.js",
      "Express",
    ],
    imageUrl: "/images/construction-site.png",
    liveLink: "https://abjremodeling.netlify.app/",
    repoLink: "https://github.com/Sebads7/construction-site",
  },
  {
    title: "Frontend-Mentor-Crowd-Funding main page",
    description: "This was my first challenge, developing a landing page.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/crowdfunding.png",
    liveLink:
      "https://sebads7.github.io/Frontend-Mentor-crowdfunding-product-page-main/",
    repoLink:
      "https://github.com/Sebads7/Frontend-Mentor-crowdfunding-product-page-main",
  },
  {
    title: "Interactive Card Landing Page",
    description: "A brief description of Project Two.",
    technologies: ["Vue", "Bootstrap", "Express"],
    imageUrl: "/images/interactive-card.png",
    liveLink: "https://sebads7.github.io/Interactive-card-details-form/",
    repoLink: "https://github.com/Sebads7/Interactive-card-details-form",
  },
];

// SKILL PAGE DATA
export const skills = [
  { skillName: "HTML", percentage: 90, icon: "html", color: "#E34F26" }, // HTML color
  { skillName: "CSS", percentage: 95, icon: "css", color: "#1572B6" }, // CSS color
  { skillName: "Tailwind", percentage: 85, icon: "tailwind", color: "#06B6D4" }, // Tailwind color
  { skillName: "Git", percentage: 80, icon: "git", color: "#F05032" }, // Git color
  {
    skillName: "JavaScript",
    percentage: 80,
    icon: "javascript",
    color: "#F6FB7A",
  }, // JavaScript color
  { skillName: "React", percentage: 75, icon: "react", color: "#61DAFB" }, // React color
  {
    skillName: "TypeScript",
    percentage: 70,
    icon: "typescript",
    color: "#3178C6",
  }, // TypeScript color
  { skillName: "Node.js", percentage: 70, icon: "node.js", color: "#339933" }, // Node.js color
  { skillName: "MongoDB", percentage: 70, icon: "mongodb", color: "#47A248" }, // MongoDB color
  { skillName: "Express", percentage: 70, icon: "express", color: "#808080" }, // Express color
  { skillName: "SQL", percentage: 70, icon: "sql", color: "#336791" }, // SQL color
  { skillName: "Python", percentage: 60, icon: "python", color: "#3776AB" }, // Python color
  { skillName: "Java", percentage: 60, icon: "java", color: "#007396" }, // Java color
];
