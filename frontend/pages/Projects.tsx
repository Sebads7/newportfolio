"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA } from "../constants/index";
import useInViewAnimation from "@/components/hooks/useInView";
import { motion } from "framer-motion";
import useScreenSizes from "@/components/hooks/useScreenSizes";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { isMobile, isLgScreen, isXsScreen } = useScreenSizes();

  const { ref, mainControls } = useInViewAnimation();

  // Conditional check to avoid applying animations before the state is set
  if (isMobile === null || isLgScreen === null || isXsScreen === null) {
    return null;
  }

  const showNextItem = () => {
    setActiveIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  const showPrevItem = () => {
    setActiveIndex(
      (prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length,
    );
  };

  return (
    <section
      className="flex py-24   w-full h-full relative    !bg-white !dark:bg-dot-white/[0.2]  !bg-dot-black/[0.2] "
      id="projects"
      ref={ref}
    >
      <div className=" pointer-events-none inset-0 flex items-center justify-center project-div-bg "></div>
      <div
        className="md:container 
      xs:max-w-full 
      md:mx-auto 
      md:p-6 
      z-20 "
      >
        <motion.div className="text-center xs:px-5 md:px-0 ">
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
        </motion.div>

        {/* PROJECTS INFO */}
        <div className="relative w-full h-[50rem]  ">
          {/* Buttons */}
          <motion.div
            className=" flex-wrap  sm:justify-center gap-4 mt-10 mx-auto xs:px-5  md:px-14 flex  "
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.5,
              },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.4, 0.7, 0.4, 1.01],
            }}
          >
            {PROJECTS_DATA.filter((_, index) =>
              isXsScreen ? index === activeIndex : true,
            ).map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`py-2 
                  px-4 
                 
                  xs:text-base
                  xs:w-full      
                  sm:w-auto
                  xs:bg-[#2c4253]
                 
                  sm:rounded-md 
                  text-white 
                  project-button-fx   ${
                    activeIndex === index
                      ? "sm:bg-[#2b3963] cursor-default"
                      : "sm:bg-[#B4B4B8] md:hover:bg-[#a5a5b4] "
                  }`}
              >
                {project.title}
              </button>
            ))}
          </motion.div>

          {/* Projects */}
          <motion.div
            className="relative md:pt-10 lg:pt-16  flex flex-row justify-center items-center h-full  xs:-space-y-36 md:space-x-48 "
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                x: isLgScreen ? 100 : 0,
                y: isMobile ? 100 : 0,
              },
              visible: { opacity: 1, x: 0, y: 0 },
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.4, 0.7, 0.4, 1.01],
            }}
          >
            {isXsScreen && (
              <div
                className="  absolute space-x-52 px-2 rounded-full  
               py-2   z-50 top-64   "
              >
                <button
                  className="duration-200 right-0 -rotate-90 p-2  active:scale-100 bg-white rounded-full "
                  title="Go Back"
                  onClick={showPrevItem}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    className="stroke-[#447aa3] rotate-90"
                  >
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      d="M11 6L5 12M5 12L11 18M5 12H19"
                    ></path>
                  </svg>
                </button>

                <button
                  className="duration-200 -rotate-90 p-2  active:scale-100 bg-white rounded-full "
                  title="Go Back"
                  onClick={showNextItem}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    className="stroke-[#447aa3] -rotate-90"
                  >
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      d="M11 6L5 12M5 12L11 18M5 12H19"
                    ></path>
                  </svg>
                </button>
              </div>
            )}

            {PROJECTS_DATA.map((project, index) => (
              <div
                key={index}
                className={`project-card   xs:w-11/12 sm:w-[65vw] lg:w-[50rem] h-[40rem]  absolute   md:-translate-x-10   ${index === activeIndex ? "z-20 project-card-shadow " : "z-10 scale-90 shadow-lg"} `}
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
                  xs:text-transparent
                  sm:text-black
                  h-[3rem]"
                  >
                    {project.title}
                  </h2>
                  <p className=" mb-8 h-auto text-center xs:text-sm md:text-base">
                    {project.description}
                  </p>
                  {/* TECHNOLOGIES */}
                  <div className="flex items-start justify-center flex-wrap mb-5 gap-2 h-[4rem] ">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
