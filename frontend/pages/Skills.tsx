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
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

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
    <section className="  bg-black/50 w-full pb-20  " id="skills">
      {/* TITLE */}
      <ContainerScroll>
        <div className="flex justify-center items-center bg-gray-100/90 rounded-tl-[10rem] rounded-br-[10rem]  border-2 border-spacing-2 border-white  py-5 mx-32 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
          {/* SKILLS GRID */}
          <div className="  grid grid-cols-5 gap-x-8 ">
            {skills.map((skill) => {
              const IconComponent = iconMap[skill.icon]; // Get the icon component from the iconMap
              return (
                <div key={skill.skillName} className=" text-black  ">
                  <div className="flex flex-col justify-center items-center  pt-5">
                    {/* BACKGROUND  CIRCLE */}

                    <svg className="w-28 h-28   " viewBox="0 0 100 100">
                      <circle
                        className="text-[#c4c9d2]  stroke-current"
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
                        fontSize="17"
                        className="font-bold fill-current text-[#304463]"
                      >
                        {skill.percentage}%
                      </text>
                    </svg>
                    <div className="flex justify-center items-center gap-2  pb-5">
                      {IconComponent && (
                        <IconComponent
                          className="text-3xl"
                          style={{ color: skill.color }}
                        />
                      )}
                      <p className=" text-lg font-bold ">{skill.skillName}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default Skills;
