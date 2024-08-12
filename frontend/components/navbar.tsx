"use client";

import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { MdPhoneIphone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { NAV_LINKS } from "@/constants";

import Link from "next/link";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>("");

  ////////// Handle scroll event ////////////

  const handleScroll = () => {
    // Check scroll position
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  ////////// End Handle scroll event ////////////

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <>
      <div className="flex items-center w-full  bg-gray-100 p-3 z-10 relative">
        <div className="flex justify-between w-full px-[10rem]">
          <div className="flex items-center  gap-3">
            <CiMail />
            <a className="pr-5" href="mailto:ds.sebastian@outlook.com">
              ds.sebastian@outlook.com
            </a>

            <MdPhoneIphone />
            <a href="tel:+542634761074" className=" pointer-events-none">
              +54 (263) 476-1074
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaLinkedin className="fill-blue-600" />
            <a
              className="pr-5"
              href="https://www.linkedin.com/in/sebastian-joel-di-salvatore-a6565175/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>

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

      <div
        className={`justify-center items-center flex z-10 w-full h-20  transition-all duration-150 ease-in bg-black ${
          isSticky ? "top-0  fixed border-b-[1.5px] border-white " : ""
        }`}
      >
        <div className="grid grid-cols-3 w-full px-16  ">
          {/* MY NAME */}
          <div className="flex items-center h-full pl-2   ">
            <h2 className="text-2xl font-semibold text-white ">
              Sebastian <span className="">Di Salvatore</span>
            </h2>
          </div>

          {/* NAVIGATION */}
          <nav className="  flex justify-center items-center col-span-2 text-white  ">
            <ul className="flex items-center gap-5 text-lg">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.key}
                  className="relative w-full h-full   cursor-pointer "
                >
                  <Link
                    href={link.to}
                    className={`flex relative px-4 py-2 rounded-lg ${currentPath === link.to ? "text-blue-800 " : ""}`}
                    onClick={() => setCurrentPath(link.to)}
                    onMouseEnter={() => setActiveIndex(link.key)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {link.label}
                    <div
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[3px] rounded-sm transition-all duration-300 delay-75 ease-in-out ${
                        currentPath === link.to
                          ? "w-0 bg-transparent"
                          : activeIndex === link.key
                            ? "w-3/4 bg-blue-400"
                            : "w-0 bg-blue-400"
                      }`}
                    ></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
