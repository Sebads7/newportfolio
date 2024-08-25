"use client";

import { useEffect, useRef, useState } from "react";
import { CiMail } from "react-icons/ci";
import { MdPhoneIphone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NAV_LINKS } from "../constants/index";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import useScreenSizes from "./hooks/useScreenSizes";
import { AnimatePresence, motion } from "framer-motion";

const NavBar: React.FC = ({}) => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string>("");
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle mobile menu
  const handleMenuToggle = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Handle click outside to close the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isStickyNav = () => {
    if (window.scrollY > 60) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjust as needed to trigger earlier

      // Loop through each section to determine which one is in view
      NAV_LINKS.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // Check if the current scroll position is within this section's bounds
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setCurrentPath(link.id); // Update the current section
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", isStickyNav);
    return () => {
      window.removeEventListener("scroll", isStickyNav);
    };
  }, []);

  const { isMobile } = useScreenSizes();

  // Conditional check to avoid applying animations before the state is set
  if (isMobile === null) {
    return null;
  }

  return (
    <div className={`absolute w-full  z-50 `}>
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
        className={`justify-center items-center flex  w-full md:h-20  transition-all duration-100 ease-in-out  bg-black/70   lg:bg-black/50 ${isSticky ? ` !bg-black fixed top-0` : ""} 
        }`}
      >
        {/* HOVER EFFECT */}
        <div
          className={`absolute  translate-y-10 left-1/2 transform -translate-x-1/2 h-[1px]  rounded-sm transition-all z-20 duration-300 delay-75 ease-in-out  ${isSticky ? "md:w-full md:bg-blue-200" : "md:w-0 md:bg-blue-200"}`}
        ></div>
        {/* END OF DIV */}
        <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 sm:flex sm:flex-col w-full md:px-16 sm:space-y-4 md:space-y-0 ">
          {/* NAME TYPEWRITER EFFECT */}
          <div className="flex items-center justify-center  h-full xs:py-1 md:py-0  lg:pl-2 ">
            <h2 className="xs:text-lg lg:text-2xl font-semibold text-white">
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
          <nav className=" justify-center items-center col-span-2  text-white xs:hidden md:flex ">
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

      {/* MOBILE NAV */}
      {isMobile && (
        <div className={`fixed `}>
          {/* Mobile Menu Button */}
          <motion.div
            className={`mobile-button mt-4 flex justify-center items-center ml-4  w-[4rem] h-full py-3  mr-2    `}
            onClick={handleMenuToggle}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              title="Open Mobile Menu"
              className={`text-black focus:outline-none `}
            >
              <svg
                className="w-6 h-6"
                fill=""
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      )}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
            ref={menuRef}
            className={`l   py-5 mt-16   ${isMobileMenuOpen ? "flex" : "opacity-100"}`}
          >
            <ul className="fixed flex flex-col justify-center  rounded-r-[3rem] border-[#rgba(8,112,184)]  py-16 bg-black/95 shadow-[5px_1px_5px_1px_rgba(8,112,184)]">
              {NAV_LINKS.map((link) => (
                <li key={link.key} className="py-2">
                  <Link
                    href={link.to}
                    className={`flex justify-center space-y-6  relative py-2 px-3   ${
                      currentPath === link.id
                        ? " !bg-white !text-black    transition-all ease-in-out "
                        : "text-white"
                    }`}
                    onClick={() => setCurrentPath(link.to)}
                    onMouseEnter={() => setActiveIndex(link.key)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
