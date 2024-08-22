"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA } from "../constants/index";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      className="flex
       py-24  
       w-full 
       h-[80rem]  
       relative  
       !bg-white
       !dark:bg-dot-white/[0.2] 
       !bg-dot-black/[0.2] 
       "
      id="projects"
    >
      <div className=" pointer-events-none inset-0 flex items-center justify-center project-div-bg "></div>
      <div
        className="md:container 
      xs:max-w-full 
      md:mx-auto 
      md:p-6 
      z-20 "
      >
        <div className="text-center xs:px-5 md:px-0 ">
          <h1
            className=" page-title
          xs:mb-5 
          md:mb-10"
          >
            My Projects
          </h1>
          <p className="md:text-lg text-gray-600">
            Explore the projects I&apos;ve worked on, including details on the
            technologies used and links to live demos and code repositories.
          </p>
        </div>

        {/* PROJECTS INFO */}
        <div className="relative w-full h-[50rem]  ">
          {/* Buttons */}
          <div
            className="flex 
          flex-wrap 
          justify-center 
          w-full 
          xs:px-5 
          md:px-14  
          gap-4 
          mt-10"
          >
            {PROJECTS_DATA.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`py-2 
                  px-4 
                  xs:text-sm
                  md:text-base
                  xs:w-full    
                      
                  lg:w-auto
                  rounded-md 
                  text-white 
                  project-button-fx   ${
                    activeIndex === index
                      ? "bg-[#2b3963] cursor-default"
                      : "bg-[#B4B4B8] hover:bg-[#a5a5b4] "
                  }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="relative flex flex-row justify-center items-center h-full  xs:space-y-32 md:space-x-48   ">
            {PROJECTS_DATA.map((project, index) => (
              <div
                key={index}
                className={`project-card  xs:w-11/12 sm:w-[65vw] lg:w-[50rem] h-[40rem]  absolute   md:-translate-x-10   ${index === activeIndex ? "z-20 project-card-shadow " : "z-10 scale-90 shadow-lg"} `}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6 ">
                  <h2
                    className="xs:text-lg 
                  md:text-xl 
                  lg:text-2xl 
                  text-center 
                  font-semibold 
                  mb-5 
                  h-[3rem]"
                  >
                    {project.title}
                  </h2>
                  <p className=" mb-8 h-[7rem] text-center xs:text-sm md:text-base">
                    {project.description}
                  </p>
                  {/* TECHNOLOGIES */}
                  <div className="flex items-start justify-center flex-wrap gap-2 mb-7 h-[4rem] ">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-gray-800 
                        px-3 
                        py-1 
                        rounded-full 
                        xs:text-xs 
                        md:text-sm 
                        hover:bg-blue-300 
                        transition 
                        duration-300 
                        ease-in-out"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* LINKS */}
                  <div className="flex justify-center  gap-4 xs:text-sm md:text-base">
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
