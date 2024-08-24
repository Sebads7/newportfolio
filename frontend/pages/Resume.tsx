"use client";

import React from "react";
import { data_resume } from "../constants/index";
import useInViewAnimation from "@/components/hooks/useInView";
import { motion } from "framer-motion";
import useScreenSizes from "@/components/hooks/useScreenSizes";

// Define TypeScript interfaces for the data if not already defined

const Resume: React.FC = () => {
  const resumePDF = "/Resume-SebastianDS.pdf";

  const { isMobile, isLgScreen } = useScreenSizes();

  const { ref: refEducation, mainControls: controlsEducation } =
    useInViewAnimation();
  const { ref: refExperience, mainControls: controlsExperience } =
    useInViewAnimation();
  const { ref: refLanguages, mainControls: controlsLanguages } =
    useInViewAnimation();
  const { ref: refCourses, mainControls: controlsCourses } =
    useInViewAnimation();

  // Conditional check to avoid applying animations before the state is set
  if (isMobile === null || isLgScreen === null) {
    return null;
  }

  return (
    <div
      className="py-24 w-full h-full 
      relative  
       !bg-white
       !dark:bg-dot-white/[0.2] 
       !bg-dot-black/[0.2] "
      id="resume"
    >
      <div>
        <h1 className="xs:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-10">
          Resume
        </h1>
      </div>

      <div className="container  grid lg:grid-cols-2 place-items-center xs:max-w-full lg:mx-auto p-6 bg-slate-50/60 shadow-lg">
        {/* LEFT SECTION */}
        <section className="lg:w-4/5 xs:w-full h-full  ">
          {/* Education Section */}
          <motion.div
            ref={refEducation}
            className="lg:p-6 md:h-[26.2rem] mx-7 z-[1]"
            animate={controlsEducation}
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
            <h2 className="edu">Education</h2>
            {data_resume.education.map((edu, index) => (
              <div
                key={index}
                className="mb-4 flex flex-col text-center bg-[#F1F1F1] p-3 rounded-lg"
              >
                <h3 className="deg">{edu.degree}</h3>
                <p className="lg:text-lg">{edu.institution}</p>
                <p className="lg:text-lg">{edu.location}</p>
                <p className="date">{edu.dates}</p>
              </div>
            ))}
          </motion.div>
          <hr className="resume-hr xs:mb-5 md:mb-3 md:mt-0 xs:mt-7 z-0" />
          {/* Experience Section */}
          <motion.div
            className="lg:p-6 mx-7 z-[1]"
            ref={refExperience}
            animate={controlsExperience}
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
              delay: isLgScreen ? 1.5 : 0.5,
              ease: [0.4, 0.7, 0.4, 1.01],
            }}
          >
            <h2 className="edu">Experience</h2>
            <div>
              {data_resume.experience.map((exp, index) => (
                <div
                  key={index}
                  className="lg:text-justify md:pr-10 mb-4 flex flex-col bg-[#F1F1F1] p-3 rounded-lg"
                >
                  <h3 className="deg text-center">{exp.title}</h3>
                  <p className="lg:text-lg text-center">
                    {exp.company} {exp.location}
                  </p>
                  <p className="date text-center">{exp.dates}</p>
                  <ul className="list-disc pl-5 mt-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* RIGHT SECTION */}
        <section className="lg:w-4/5  xs:w-full  h-full">
          {/* Courses & Certificates Section */}
          <hr className="resume-hr xs:block lg:hidden mt-4 mb-3 z-0" />
          <motion.div
            ref={refCourses}
            className="lg:px-6 lg:py-2 mx-7 z-[1]"
            animate={controlsCourses}
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
              delay: isLgScreen ? 1.5 : 0.5,
              ease: [0.4, 0.7, 0.4, 1.01],
            }}
          >
            <h2 className="edu xs:pt-4 mg:pt-0">Courses & Certificates</h2>
            <div>
              {data_resume.courses_certifications.map((cert, index) => (
                <div
                  key={index}
                  className="mb-4 text-center flex flex-col bg-[#F1F1F1] p-3 rounded-lg"
                >
                  <h3 className="deg">{cert.title}</h3>
                  <p className="lg:text-lg">
                    {cert.institution} — {cert.location}
                  </p>
                  <p className="date">{cert.dates}</p>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Language Section */}
          <hr className="resume-hr mt-8 mb-7 z-0 " />
          <motion.div
            ref={refLanguages}
            className="flex flex-col justify-center items-center lg:p-6 mx-7 z-[1]"
            animate={controlsLanguages}
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
              delay: isLgScreen ? 2.3 : 0.5,
              ease: [0.4, 0.7, 0.4, 1.01],
            }}
          >
            <h2 className="edu">Languages</h2>
            <div className="w-full lg:pt-10">
              {data_resume.languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 pr-16 bg-[#F1F1F1] p-5 rounded-lg mt-3"
                >
                  <p className="lg:text-lg font-semibold">
                    {lang.name} <span>{lang.level}</span>
                  </p>
                  <div className="w-full bg-gray-300 rounded-full h-4">
                    <div
                      className="bg-[#243248] h-full rounded-full"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
      {/* Download Button */}
      <div className="p-6 border-t border-gray-200 text-center">
        <a
          href={resumePDF}
          download="Sebastian-Resume.pdf"
          className="bg-[#2b3963] hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] text-white py-2 px-4 rounded hover:bg-[#44599b]"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
