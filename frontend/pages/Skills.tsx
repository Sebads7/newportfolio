import React from "react";
import { skills } from "@/constants";
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
  return (
    <section className="  bg-black/50 w-full h-auto  py-24" id="skills">
      <div className="flex flex-col  ml-10 bg-gray-200/85 rounded-s-full py-24">
        {/* TITLE */}
        <div className=" text-center mb-20">
          <h1 className="text-4xl font-bold   text-black">My Skills</h1>
        </div>
        {/* SKILLS GRID */}
        <div className="w-full flex justify-center items-center">
          <div className=" w-3/4 grid grid-cols-5  p-5  ">
            {skills.map((skill) => {
              const IconComponent = iconMap[skill.icon]; // Get the icon component from the iconMap
              return (
                <div key={skill.skillName} className="pb-10 text-black  ">
                  <div className="flex flex-col justify-center items-center">
                    {/* BACKGROUND  CIRCLE */}
                    <svg className="w-28 h-28 " viewBox="0 0 100 100">
                      <circle
                        className="text-gray-300/55  stroke-current"
                        strokeWidth="13"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                      ></circle>
                      <circle
                        className={` text-[#304463] -rotate-90  origin-center stroke-current progress-circle hover:progress-circle ${skill.color}`}
                        style={
                          {
                            "--skill-percentage": skill.percentage,
                          } as React.CSSProperties
                        }
                        strokeWidth="10"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray={`251.2`}
                        strokeDashoffset={`calc(251.2px - (251.2px * ${skill.percentage} ) / 100)`}
                        strokeLinecap="round"
                      ></circle>

                      <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="20"
                        fill="black"
                      >
                        {skill.percentage}%
                      </text>
                    </svg>
                    <div className="flex justify-center items-center gap-2  p-2">
                      {IconComponent && (
                        <IconComponent
                          className="text-3xl"
                          style={{ color: skill.color }}
                        />
                      )}
                      <p className=" text-xl font-bold ">{skill.skillName}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
