"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA } from "../constants/index";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className="flex py-24  w-full h-[80rem]  relative  dark:bg-black bg-white   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] "
      id="projects"
    >
      <div className=" pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container  mx-auto p-6 z-20">
        <div className="text-center ">
          <h1 className="text-5xl font-bold mb-10">My Projects</h1>
          <p className="text-lg text-gray-600">
            Explore the projects I&apos;ve worked on, including details on the
            technologies used and links to live demos and code repositories.
          </p>
        </div>

        {/* PROJECTS INFO */}
        <div className="relative w-full h-[50rem] ">
          {/* Buttons */}
          <div className="flex flex-wrap justify-center  gap-4 mt-10">
            {PROJECTS_DATA.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`py-2 px-4 rounded-md text-white transition duration-300 ease-in-out hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] ${
                  activeIndex === index
                    ? "bg-[#2b3963] cursor-default"
                    : "bg-[#B4B4B8] hover:bg-[#a5a5b4] "
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
          <div className=" flex flex-row justify-center items-center h-full  relative space-x-48  ">
            {PROJECTS_DATA.map((project, index) => (
              <div
                key={index}
                className={`bg-gray-100 w-[50rem] h-[40rem]  border-2 absolute   -translate-x-10 transition duration-500 ease-in-out ${index === activeIndex ? "z-20 shadow-[0_10px_50px_rgba(8,_112,_154,_0.3)] " : "z-10 scale-90 shadow-lg"} `}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6 ">
                  <h2 className="text-2xl text-center font-semibold mb-5 h-[3rem]">
                    {project.title}
                  </h2>
                  <p className=" mb-8 h-[7rem] text-center">
                    {project.description}
                  </p>
                  <div className="flex items-start justify-center flex-wrap gap-2 mb-5 h-[4rem]">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-blue-300 transition duration-300 ease-in-out"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center   gap-4">
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
      </div>
    </section>
  );
};

export default Projects;
