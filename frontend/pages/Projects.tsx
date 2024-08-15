"use client";

import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveLink?: string;
  repoLink?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Dynamic Construction Company Website",
    description:
      "A modern and responsive landing page designed for a construction company, showcasing their services, completed projects, and company values. The website features smooth animations, intuitive navigation, and a professional layout that reflects the company’s commitment to quality and craftsmanship.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer-Motion",
      "Node.js",
      "Express",
    ],
    imageUrl: "/images/construction site.png",
    liveLink: "https://abjremodeling.netlify.app/",
    repoLink: "https://github.com/Sebads7/construction-site",
  },
  {
    title: "Frontend-Mentor-Crowd-Funding main page",
    description: "A brief description of Project Two.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/crowdfunding.png",
    liveLink:
      "https://sebads7.github.io/Frontend-Mentor-crowdfunding-product-page-main/",
    repoLink:
      "https://github.com/Sebads7/Frontend-Mentor-crowdfunding-product-page-main",
  },
  {
    title: "Project Three",
    description: "A brief description of Project Two.",
    technologies: ["Vue", "Bootstrap", "Express"],
    imageUrl: "/path/to/image2.jpg",
    liveLink: "https://example.com/project-two",
    repoLink: "https://github.com/example/project-two",
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section
      className="flex py-24  w-full h-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-gray-200 "
      id="projects"
    >
      <div className="container  mx-auto p-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-10">My Projects</h1>
          <p className="text-lg text-gray-600">
            Explore the projects I&apos;ve worked on, including details on the
            technologies used and links to live demos and code repositories.
          </p>
        </div>

        {/* PROJECTS INFO */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 ">
                <h2 className="text-2xl font-semibold mb-5">{project.title}</h2>
                <p className=" mb-8">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Live Site
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
