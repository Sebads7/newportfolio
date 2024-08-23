"use client";

import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { MdPhoneIphone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NAV_LINKS } from "../constants/index";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

// interface NavBarProps {
//   loading: boolean;
// }

const NavBar: React.FC = ({}) => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  const [currentPath, setCurrentPath] = useState<string>("");

  const isStickyNav = () => {
    if (window.scrollY > 60) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isStickyNav);
    return () => {
      window.removeEventListener("scroll", isStickyNav);
    };
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentPath(`${entry.target.id}`);
            console.log(entry.target.id);
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={`absolute w-full top-0 z-50 `}>
      {/* TOP BAR */}
      <div
        className={` bg-gray-100 xs:p-[6px] md:p-3  transition-all duration-100 ease-in-out ${isSticky ? "hidden" : ""}`}
      >
        <div className="flex  sm:justify-between sm:px-2  w-full   lg:px-20">
          <div className="flex items-start gap-3  xs:hidden sm:flex">
            {/* EMAIL */}
            <div className="flex justify-center items-center gap-1">
              <CiMail />
              <a className="pr-5" href="mailto:ds.sebastian@outlook.com">
                disalvatore.sebastian@gmail.com
              </a>
            </div>
            {/* PHONE */}
            <div className="flex justify-center items-center gap-1">
              <MdPhoneIphone />
              <a href="tel:+542634761074" className="pointer-events-none">
                +54 (263) 476-1074
              </a>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="flex xs:mx-auto sm:mx-0 xs:gap-24 sm:gap-10 md:gap-3">
            {/* LINKEDIN */}
            <div className="flex justify-center items-center gap-1">
              <FaLinkedin className="fill-blue-600" />
              <a
                className="lg:pr-5"
                href="https://www.linkedin.com/in/sebastian-joel-di-salvatore-a6565175/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            </div>
            {/* GITHUB */}
            <div className="flex justify-center items-center gap-1">
              <FaGithub />
              <a
                href="https://github.com/Sebads7"
                target="_blank"
                rel="noopener"
                aria-label="Github profile"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* NAV AND TYPEWRITER */}
      <div
        className={`justify-center items-center flex  w-full h-20 transition-all duration-100 ease-in-out  bg-black/70   lg:bg-black/50 ${isSticky ? ` !bg-black fixed top-0` : ""} 
        }`}
      >
        {/* HOVER EFFECT */}
        <div
          className={`absolute  translate-y-10 left-1/2 transform -translate-x-1/2 h-[1px] rounded-sm transition-all z-20 duration-300 delay-75 ease-in-out  ${isSticky ? "w-full bg-blue-200" : "w-0 bg-blue-200"}`}
        ></div>
        {/* END OF DIV */}
        <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 sm:flex sm:flex-col w-full md:px-16 sm:space-y-4 md:space-y-0">
          {/* NAME TYPEWRITER EFFECT */}
          <div className="flex items-center justify-center  h-full  lg:pl-2 ">
            <h2 className="xs:text-lg xs:pt-2 md:pt-0 lg:text-2xl font-semibold text-white">
              <Typewriter
                words={["SEBASTIAN DI SALVATORE", "FULL-STACK DEVELOPER"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={1500}
              />
            </h2>
          </div>
          {/* NAVIGATION */}
          <nav className="flex justify-center items-center col-span-2  text-white ">
            <ul className="flex items-center xs:gap-1 sm:gap-7  md:gap-3 xs:text-base md:text-lg ">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.key}
                  className="relative w-full h-full cursor-pointer xs:pb-3 md:pb-0"
                >
                  <Link
                    href={link.to}
                    className={`flex relative xs:px-2  md:px-5 xs:py-[2px] md:py-1 rounded-lg ${
                      currentPath === link.id
                        ? "sm:border-[.1px] xs:text-[#2b3963]  sm:bg-blue-50 lg:hover:scale-[1.05] transition-all ease-in-out text-black"
                        : ""
                    }`}
                    onClick={() => setCurrentPath(link.to)}
                    onMouseEnter={() => setActiveIndex(link.key)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {link.label}
                    <div
                      className={`absolute -bottom-0 left-1/2 transform -translate-x-1/2 h-[3px] rounded-sm transition-all duration-300 delay-75 ease-in-out xs:hidden ${currentPath !== link.id ? "lg:block" : ""}  ${
                        currentPath === link.to
                          ? "w-0 bg-transparent"
                          : activeIndex === link.id
                            ? "w-3/5 bg-blue-200"
                            : "w-0 bg-blue-200"
                      }`}
                    ></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
