"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA } from "../constants/index";
import useInViewAnimation from "@/components/hooks/useInView";
import { motion } from "framer-motion";
import useScreenSizes from "@/components/hooks/useScreenSizes";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isScaled, setIsScaled] = useState(false);

  const isFirstIndex = activeIndex === 0;
  const isInRange = activeIndex >= 1 && activeIndex <= PROJECTS_DATA.length - 1;

  const handleToggleScale = React.useCallback(() => {
    setIsScaled((prev) => !prev);
  }, []);

  const { IsTablet, isMobile, isLarge } = useScreenSizes();

  const { ref, mainControls } = useInViewAnimation();

  // Conditional check to avoid applying animations before the state is set
  if (IsTablet === null || isLarge === null || isMobile === null) {
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
      className="flex py-24   w-full sm:h-[150vh] relative    !bg-white !dark:bg-dot-white/[0.2]  !bg-dot-black/[0.2] "
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
        <div className="text-center xs:px-5 md:px-0 ">
          <h1
            className=" page-title
          xs:mb-5 
          md:mb-10"
          >
            My Projects
          </h1>
          <motion.p
            className="md:text-lg xs:mb-5 sm:mb-0 text-gray-600"
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          >
            Explore the projects I&apos;ve worked on, including details on the
            technologies used and links to live demos and code repositories.
          </motion.p>
        </div>

        {/* PROJECTS INFO */}
        <div className="relative flex justify-center flex-col w-full xs:h-[42rem] sm:h-[50rem] ">
          {/* Buttons */}

          <motion.div
            className="xs:hidden sm:flex flex-wrap  sm:justify-center gap-4 mt-10 mx-auto xs:px-5  md:px-14  z-10"
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          >
            {PROJECTS_DATA.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`py-2 px-4 xs:text-base xs:w-full sm:w-auto sm:rounded-md 
        text-white 
        project-button-fx   ${
          activeIndex === index
            ? "bg-[#395376] cursor-default"
            : "bg-[#B4B4B8] hover:bg-[#6c7892] "
        }`}
              >
                {project.title}
              </button>
            ))}
          </motion.div>

          {/* Projects */}
          <motion.div
            className="relative  sm:pt-28 lg:pt-16   flex flex-row justify-center items-center  h-full   md:space-x-48 xs:space-x-14 sm:space-x-28 -translate-x-2  "
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                y: 100,
              },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.4, 0.7, 0.4, 1.01],
            }}
          >
            {PROJECTS_DATA.map((project, index) => (
              <div
                key={index}
                className={`project-card  xs:h-[40rem]   xs:-translate-y-5  sm:-translate-y-0 xs:w-full sm:w-[65vw] lg:w-[50rem]  absolute  
                  ${isScaled && isFirstIndex ? "xs:translate-x-[1px] " : isScaled && isInRange ? "xs:translate-x-[-27px] sm:translate-x-0 " : "xs:translate-x-[-10px] sm:translate-x-0"} 
                  ${isScaled && index === activeIndex ? "xs:scale-[.95] xs:translate-y-5 blur-none " : "xs:scale-75   xs:blur-[0.4px] sm:blur-none "}  
                  ${index === activeIndex ? "z-20 project-card-shadow   sm:scale-90 sm:hover:translate-y-0  sm:translate-y-0 sm:hover:scale-100 md:scale-100 " : "z-10  sm:scale-[.8] md:scale-90 xs:scale-[.7]   shadow-lg"} `}
                onClick={handleToggleScale}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="w-full h-60 object-cover border-b-2 border-gray-300 "
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
                        className=" hover:underline text-blue-500"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {isMobile && (
            <motion.div
              className={`-translate-y-20 px-2 rounded-full mx-auto transition-all duration-300 ease-in-out py-2 bg-black/50 shadow-lg border scale-[.6] hover:scale-[.7]  ${!isScaled ? "z-50" : "z-0"}`}
            >
              <div className="flex justify-center items-center space-x-10">
                <button
                  className=" right-0 -rotate-90 p-2 active:scale-110"
                  title="Go Back"
                  onClick={showPrevItem}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    className="stroke-white rotate-90"
                  >
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M11 6L5 12M5 12L11 18M5 12H19"
                    ></path>
                  </svg>
                </button>

                <p className="text-white text-lg font-bold px-6 py-2 rounded-md">
                  {activeIndex + 1} of {PROJECTS_DATA.length}
                </p>

                <button
                  className=" -rotate-90 p-2 active:scale-110 "
                  title="Go Back"
                  onClick={showNextItem}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    className="stroke-white -rotate-90"
                  >
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M11 6L5 12M5 12L11 18M5 12H19"
                    ></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
