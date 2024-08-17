"use client";

import React from "react";
import Image from "next/image";
import { PROJECTS_DATA } from "../constants/index";

const Projects = () => {
  return (
    <section
      className="flex py-24  w-full h-auto   relative  dark:bg-black bg-white   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] "
      id="projects"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container  mx-auto p-6 z-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-10">My Projects</h1>
          <p className="text-lg text-gray-600">
            Explore the projects I&apos;ve worked on, including details on the
            technologies used and links to live demos and code repositories.
          </p>
        </div>

        {/* PROJECTS INFO */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  ">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-tl-3xl shadow-lg border-2 overflow-hidden hover:scale-105 transition duration-500 ease-in-out"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-60 object-cover "
              />
              <div className="p-6 ">
                <h2 className="text-2xl font-semibold mb-5 h-[3rem]">
                  {project.title}
                </h2>
                <p className=" mb-8 h-[7rem]">{project.description}</p>
                <div className="flex items-start flex-wrap gap-2 mb-5 h-[4rem]">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-blue-300 transition duration-300 ease-in-out"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex   gap-4">
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
