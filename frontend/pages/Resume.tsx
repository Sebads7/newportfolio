"use client";
import React from "react";
import { RESUME_DATA } from "../constants/index";

const Resume = () => {
  // URL to your existing resume PDF
  const resumePDF = "/Resume-SebastianDS.pdf";
  return (
    <section
      className=" py-24  w-full xs:h-[125rem] lg:h-[85rem]  !dark:bg-black !bg-white !dark:bg-dot-white/[0.2] !bg-dot-black/[0.2] z-10"
      id="nav-resume"
    >
      {/* <div className=" pointer-events-none inset-0 flex items-center justify-center dark:bg-black !bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-10"></div> */}

      <h1 className="xs:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-10 ">
        Resume
      </h1>

      <div className="container grid lg:grid-cols-2 place-items-center xs:max-w-full   lg:mx-auto p-6 bg-slate-50/60 shadow-lg ">
        {/* LEFT SECTION */}
        <div className="lg:w-4/5 xs:w-full ">
          {/* Education Section */}
          <div className="   lg:p-6   md:h-[26.2rem]">
            <h2 className="resume-edu ">Education</h2>
            {RESUME_DATA.education.map((edu, index) => (
              <div
                key={index}
                className="mb-4 flex flex-col text-center bg-[#F1F1F1] p-3 rounded-lg"
              >
                <h3 className="resume-deg">{edu.degree}</h3>
                <p className="lg:text-lg">{edu.institution}</p>
                <p className="lg:text-lg">{edu.location}</p>
                <p className="resume-date">{edu.dates}</p>
              </div>
            ))}
          </div>
          <hr className="resume-hr" />
          {/* Experience Section */}
          <div className="md:p-6   ">
            <h2 className="resume-edu ">Experience</h2>
            <div>
              {RESUME_DATA.experience.map((exp, index) => (
                <div
                  key={index}
                  className=" lg:text-justify md:pr-10 mb-4 flex flex-col bg-[#F1F1F1] p-3 rounded-lg"
                >
                  <h3 className="resume-deg text-center ">{exp.title}</h3>
                  <p className="lg:text-lg text-center">
                    {exp.company} {exp.location}
                  </p>
                  <p className="resume-date text-center">{exp.dates}</p>
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
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-4/5 xs:w-full  h-full">
          {/* Courses & Certificate Section */}
          <hr className="resume-hr xs:hidden block:block" />
          <div className="lg:p-6 ">
            <h2 className="resume-edu ">Courses & Certificates</h2>
            <div>
              {RESUME_DATA.courses_certifications.map((cert, index) => (
                <div
                  key={index}
                  className="mb-4 text-center flex flex-col bg-[#F1F1F1] p-3 rounded-lg "
                >
                  <h3 className="resume-deg">{cert.title}</h3>
                  <p className="lg:text-lg">
                    {cert.institution} — {cert.location}
                  </p>
                  <p className="resume-date">{cert.dates}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Language Section */}
          <hr className="resume-hr" />
          <div className="flex  flex-col  justify-center  items-center lg:p-6  ">
            <h2 className="resume-edu">Languages</h2>
            <div className="w-full lg:pt-10">
              {RESUME_DATA.languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex flex-col   gap-3 pr-16 bg-[#F1F1F1] p-5 rounded-lg mt-3"
                >
                  <p className=" lg:text-lg font-semibold ">
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
          </div>
        </div>
      </div>
      {/* Download Button */}
      <div className="p-6 border-t border-gray-200 text-center">
        <a
          href={resumePDF}
          download="Sebastian-Resume.pdf"
          className="bg-[#2b3963] hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)]  text-white py-2 px-4 rounded hover:bg-[#44599b]"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
