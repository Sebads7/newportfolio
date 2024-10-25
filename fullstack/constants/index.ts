//Navigation
export const NAV_LINKS = [
  { key: "home", label: "Home", id: "home" },
  { key: "projects", label: "Projects", id: "projects" },
  { key: "skills", label: "Skills", id: "skills" },
  { key: "resume", label: "Resume", id: "resume" },
  { key: "contact", label: "Contact", id: "contact" },
];
// PROJECTS PAGE DATA
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
    imageUrl: "/images/atlanta-website-compressed.gif",
    liveLink: "https://abjremodeling.netlify.app/",
    repoLink: "https://github.com/Sebads7/construction-site",
  },
  {
    title: "Frontend-Mentor-Ecommerce Product Page",
    description:
      "A responsive e-commerce product page where users can view product details, add items to the cart, and manage their cart. Built with Next.js, Tailwind CSS, and MongoDB for dynamic interactions and backend integration.",
    technologies: ["Next.JS", "Tailwind", "TypeScript", "Node.JS", "MongoDB"],
    imageUrl: "/images/ecommerce-challenge.png",
    liveLink: "https://ecommerce-challenge-full.vercel.app/",
    repoLink: "https://github.com/Sebads7/ecommerce-challenge",
  },
  {
    title: "Insurezella Challenge",
    description:
      "Challenge features responsive design: fully responsive for mobile, tablet, and desktop screens. Web app is built for High Performance: Built with modern tools like Vite and React to ensure smooth user experience.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Framer-Motion",
    ],
    imageUrl: "/images/isurella.png",
    liveLink: "https://challenge-insurezella.vercel.app/",
    repoLink: "https://github.com/Sebads7/Challenge-Insurezella",
  },
  {
    title: "Password Strength Checker Challenge",
    description:
      "Simple password strength checker. The password strength checker is built with React  to ensure smooth user experience.",
    technologies: ["React", "CSS", "JavaScript"],
    imageUrl: "/images/password-checker.gif",
    liveLink: "https://password-checker-challange.vercel.app/",
    repoLink: "https://github.com/Sebads7/password-strength-checker",
  },
  {
    title: "Country Info with Flags Challenge",
    description:
      "Country Info App Overview The Country Info App is a full-stack application built with Vite+React, TypeScript, Tailwind CSS, Node.js, and Express. The app provides information about countries by fetching data from third-party APIs. ",
    technologies: [
      "React",
      "Vite ",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "Express",
    ],
    imageUrl: "/images/countries.gif",
    liveLink: "https://countries-assesment.vercel.app/",
    repoLink: "https://github.com/Sebads7/assesment-project",
  },
  {
    title: "Frontend-Mentor-Crowd-Funding main page",
    description:
      "As one of my first projects, I built a responsive crowdfunding product page where users can make pledges, track progress bar, and see the number of backers increase. The page includes a bookmark toggle, hover states for interactivity, and optimal layouts across devices.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/crowdfunding.webp",
    liveLink:
      "https://sebads7.github.io/Frontend-Mentor-crowdfunding-product-page-main/",
    repoLink:
      "https://github.com/Sebads7/Frontend-Mentor-crowdfunding-product-page-main",
  },
  {
    title: "Interactive Card Landing Page",
    description:
      "In this project, I developed a responsive card details entry page as part of a front-end challenge. The challenge required implementing a form that captures user card information, including card number, name, expiration date, and CVV.",
    technologies: ["HTML", "Bootstrap", "CSS", "JavaScript"],
    imageUrl: "/images/interactive-card.webp",
    liveLink: "https://sebads7.github.io/Interactive-card-details-form/",
    repoLink: "https://github.com/Sebads7/Interactive-card-details-form",
  },
  {
    title: "Trillo Hotel Booking Landing Page",
    description:
      " A modern and responsive landing page for a hotel booking platform, featuring a grid layout, custom checkboxes, and radio buttons. The page includes a sidebar for looking at hotels,flights, car rental, and a map section for location details.",
    technologies: ["HTML", "Bootstrap", "SASS"],
    imageUrl: "/images/trillo-project.webp",
    liveLink: "https://sebads7.github.io/trillo-project-advanced-css-sass/",
    repoLink: "https://github.com/Sebads7/trillo-project-advanced-css-sass",
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
  { skillName: "React", percentage: 80, icon: "react", color: "#61DAFB" }, // React color
  {
    skillName: "TypeScript",
    percentage: 80,
    icon: "typescript",
    color: "#3178C6",
  }, // TypeScript color
  { skillName: "Node.js", percentage: 80, icon: "node.js", color: "#339933" }, // Node.js color
  { skillName: "MongoDB", percentage: 70, icon: "mongodb", color: "#47A248" }, // MongoDB color
  { skillName: "Express", percentage: 70, icon: "express", color: "#808080" }, // Express color
  { skillName: "SQL", percentage: 70, icon: "sql", color: "#336791" }, // SQL color
  { skillName: "Python", percentage: 50, icon: "python", color: "#3776AB" }, // Python color
  { skillName: "Java", percentage: 50, icon: "java", color: "#007396" }, // Java color
];

export const data_resume = {
  education: [
    {
      degree: "Associate of Science in Computer Science",
      institution: "University of The People (online)",
      location: "Pasadena, CA, USA",
      dates: "2022-2024",
    },
    {
      degree: "GED- High School Diploma",
      institution: "Gwinnett Technical College",
      location: "Lawrenceville, GA, USA",
      dates: "2016-2018",
    },
  ],
  experience: [
    {
      title: "Freelance Full-Stack Developer",
      dates: "2023 - Present",
      responsibilities: [
        "Engaged in freelance projects to pursue a career transition into programming.",
      ],
    },
    {
      title: "Business Owner- PaintSmart ",
      company: "Home Remodeling Company in",
      location: "Atlanta, GA",
      dates: "2015 - 2018",
      responsibilities: [
        "Prepared precise cost estimates for construction projects, ensuring adherence to budgets.",
        "Managed company website, marketing efforts, and maintained client relationships",
        "Performed carpentry, painting, kitchen and bathroom remodeling, and other construction tasks",
      ],
    },
  ],
  courses_certifications: [
    {
      title: "Front-End Engineer ",
      institution: "Codecademy",
      location: "Online",
      dates: "2023",
    },
    {
      title: "Full-Stack Web Development",
      institution: "Udemy",
      location: "Online",
      dates: "2022",
    },
    {
      title: "Advanced CSS and Sass",
      institution: "Udemy",
      location: "Online",
      dates: "2023",
    },
  ],
  languages: [
    {
      name: "Spanish",
      level: "(Native)",
      percentage: 100,
    },
    {
      name: "English",
      level: "(Bilingual C2)",
      percentage: 90,
    },
  ],
};
