"use client";

import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { MdPhoneIphone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NAV_LINKS } from "../constants/index";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

interface NavBarProps {
  loading: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ loading }) => {
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
            setCurrentPath(`/#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 },
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
    <div className={`block w-full top-0 z-50 `}>
      {/* TOP BAR */}
      <div
        className={` bg-gray-100 p-3  transition-all duration-100 ease-in-out ${isSticky ? "hidden" : ""}`}
      >
        <div className="flex justify-between w-full px-20">
          <div className="flex items-center gap-3">
            <CiMail />
            <a className="pr-5" href="mailto:ds.sebastian@outlook.com">
              ds.sebastian@outlook.com
            </a>
            <MdPhoneIphone />
            <a href="tel:+542634761074" className="pointer-events-none">
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
        className={`justify-center items-center flex w-full h-20 transition-all duration-100 ease-in-out delay-150 ${
          loading ? "bg-black" : "bg-black/50"
        } ${isSticky ? `border-b-[.03px] border-white !bg-black fixed top-0` : ""} 
        }`}
      >
        <div className="grid grid-cols-3 w-full px-16">
          {/* NAME TYPEWRITER EFFECT */}
          <div className="flex items-center h-full pl-2">
            <h2 className="text-2xl font-semibold text-white">
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
          <nav className="flex justify-center items-center col-span-2 text-white">
            <ul className="flex items-center gap-5 text-lg font-thin">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.key}
                  className="relative w-full h-full cursor-pointer"
                >
                  <Link
                    href={link.to}
                    className={`flex relative px-5 py-1 rounded-lg ${
                      currentPath === link.to
                        ? "border-[.1px] bg-blue-50 hover:scale-[1.05] transition-all ease-in-out text-black"
                        : ""
                    }`}
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
