"use client";

import React, { useEffect, useRef, useState } from "react";
import { skills } from "@/constants";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { motion } from "framer-motion";

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
import useInViewAnimation from "@/components/hooks/useInView";
import useScreenSizes from "@/components/hooks/useScreenSizes";

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
  const { ref, mainControls } = useInViewAnimation();

  const { isMobile, isLgScreen } = useScreenSizes();

  // Conditional check to avoid applying animations before the state is set
  if (isMobile === null || isLgScreen === null) {
    return null;
  }

  return (
    <div
      className="flex flex-col w-full h-full z-10 py-16 bg-black"
      id="skills"
    >
      <div className="flex justify-center items-center flex-col h-full  w-auto mx-auto py-10 ">
        <h1 className=" page-title  text-white z-10 pb-2">My Skills</h1>
        <h3 className=" skills-sub-title">Technologies</h3>
      </div>
      <div className=" flex justify-center items-center py-10 w-full lg:px-12">
        <motion.div
          ref={ref}
          className="xs:rounded-tl-[5rem]  xs:rounded-br-[5rem] xs:w-full  lg:w-4/5  md:rounded-tl-[10rem]  md:rounded-b[10rem]"
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0.9,
              x: 100,
              y: 100,
              filter: "blur(1px)",
              transform:
                "perspective(800px) rotateY(25deg) scale(0.7) rotateX(10deg)",
            },
            visible: {
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0)",
              transform: isLgScreen
                ? "perspective(700px) rotateY(-15deg) translateY(-50px) rotateX(10deg) scale(.8)"
                : "perspective(800px) rotateY(0deg) scale(.9)  rotateX(0deg)",
            },
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          whileHover={{
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0)",
            transform:
              "perspective(800px) rotateY(0deg) scale(.9)  rotateX(0deg)",
            transition: {
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            className="flex justify-center  items-center  w-full xs:bg-gray-100 md:bg-gray-100/95    border-2  border-spacing-2  border-white    py-5  xs:rounded-tl-[5rem]  xs:rounded-br-[5rem]   md:rounded-tl-[10rem]  md:rounded-br-[10rem]
          shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] "
            // animate={mainControls}
            // initial="hidden"
            // variants={{
            //   hidden: {
            //     opacity: 0,
            //     x: isLgScreen ? 100 : 0,
            //     y: isMobile ? 100 : 0,
            //   },
            //   visible: { opacity: 1, x: 0, y: 0 },
            // }}
            // transition={{
            //   duration: 1,
            //   delay: 0.5,
            //   ease: [0.4, 0.7, 0.4, 1.01],
            // }}
          >
            <motion.div className="  grid xs:grid-cols-3  sm:grid-cols-4  md:grid-cols-5 lg:gap-x-10 sm:px-6 xs:gap-x-4  ">
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
                            delay: 1.5,
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
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
