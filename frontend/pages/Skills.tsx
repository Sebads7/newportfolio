"use client";

import React, { useEffect, useRef } from "react";
import { skills } from "@/constants";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { motion, useAnimation, useInView } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiPython,
} from "react-icons/si";

// Map skill icon strings to actual React icon components
const iconMap: { [key: string]: React.ElementType } = {
  html: FaHtml5,
  css: FaCss3Alt,
  tailwind: SiTailwindcss,
  git: FaGitAlt,
  javascript: FaJsSquare,
  react: FaReact,
  typescript: SiTypescript,
  "node.js": FaNodeJs,
  mongodb: SiMongodb,
  express: SiExpress,
  sql: FaDatabase,
  python: SiPython,
  java: FaJava,
};

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, , mainControls]);

  return (
    <div className="bg-black" id="skills" ref={containerRef}>
      {/* TITLE */}
      <ContainerScroll
        title={
          <div className="flex justify-center items-center flex-col  w-auto mx-auto ">
            <h1
              className="
              page-title
              text-white
          "
            >
              My Skills
            </h1>

            <h3 className=" skills-sub-title">Technologies</h3>
          </div>
        }
      >
        {/* SKILLS GRID */}
        <motion.div
          className="flex
          justify-center 
          items-center  
          xs:bg-gray-100
          md:bg-gray-100/95
            xs:rounded-tl-[5rem] 
          xs:rounded-br-[5rem]  
          md:rounded-tl-[10rem] 
          md:rounded-br-[10rem]  
          border-2 
          border-spacing-2 
          border-white  
          py-5 
          shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] "
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.4, 0.7, 0.4, 1.01],
          }}
        >
          <motion.div className="  grid xs:grid-cols-3  sm:grid-cols-4  md:grid-cols-5 lg:gap-x-14 sm:px-6 xs:gap-x-4  w-auto ">
            {skills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon];

              const strokeDasharray = 251.2; // Circumference of the circle (2 * Math.PI * r)
              const initialDashoffset = strokeDasharray; // 100% dashoffset, the full circumference
              const finalDashoffset =
                strokeDasharray - (strokeDasharray * skill.percentage) / 100; // Calculate based on percentage

              return (
                <motion.div key={skill.skillName} className=" text-black ">
                  <motion.div className="flex flex-col justify-center items-center xs:pt-2 lg:pt-5">
                    {/* BACKGROUND  CIRCLE */}
                    <motion.svg
                      className="xs:w-[4.5rem] xs:h-[4.5rem] sm:w-[5rem] sm:h-[5rem]  md:w-20 md:h-20 lg:w-28 lg:h-28   "
                      viewBox="0 0 100 100"
                    >
                      <circle
                        className="text-[#c4c9d2]  stroke-current"
                        strokeWidth="13"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                      ></circle>
                      <motion.circle
                        className={` text-[#3a6077] -rotate-90  origin-center stroke-current `}
                        strokeWidth="10"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray={strokeDasharray}
                        animate={mainControls}
                        initial="hidden"
                        variants={{
                          hidden: { strokeDashoffset: initialDashoffset },
                          visible: { strokeDashoffset: finalDashoffset },
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeOut",
                          delay: 0.5,
                        }}
                        strokeLinecap="round"
                      ></motion.circle>

                      <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        className="font-bold fill-current xs:text-sm md:text-base  lg:text-lg text-[#304463]"
                      >
                        {skill.percentage}%
                      </text>
                    </motion.svg>
                    <div className="flex justify-center items-center gap-2 xs:pb-2  lg:pb-5">
                      {IconComponent && (
                        <IconComponent
                          className="xs:text-base md:text-2xl lg:text-3xl"
                          style={{ color: skill.color }}
                        />
                      )}
                      <p className="xs:text-sm md:text-base lg:text-lg font-bold ">
                        {skill.skillName}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </ContainerScroll>
    </div>
  );
};

export default Skills;
