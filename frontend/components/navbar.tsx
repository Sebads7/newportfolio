"use client";

import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { MdPhoneIphone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";

const links = [
  {
    id: 0,
    name: "Home",
    href: "home",
  },
  {
    id: 1,
    name: "Projects",
    href: "projects",
  },
  {
    id: 2,
    name: "Resume",
    href: "resume",
  },
  {
    id: 3,
    name: "Contact",
    href: "contact",
  },
];

const NavTop = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <>
      <div className="flex items-center w-full  bg-[#eee] p-3 z-[999] relative">
        <div className="flex justify-between w-full px-[10rem]">
          <div className="flex items-center  gap-3">
            <CiMail />
            <a className="pr-5" href="mailto:ds.sebastian@outlook.com">
              ds.sebastian@outlook.com
            </a>

            <MdPhoneIphone />
            <a href="">54 + (263) 476-1074</a>
          </div>

          <div className="flex items-center gap-3">
            <FaLinkedin className="fill-blue-600" />
            <a
              className="pr-5"
              href="https://www.linkedin.com/in/sebastian-joel-di-salvatore-a6565175/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>

            <FaGithub />
            <a href="https://github.com/Sebads7" target="_blank" rel="noopener">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div
        id="main-nav"
        className="fixed justify-center items-center flex z-10 bg-white w-full h-24 border border-b-2 "
      >
        <div className="grid grid-cols-3 w-full px-16  ">
          <div className="flex items-center h-full pl-2   ">
            <h2 className="text-2xl font-semibold">
              Sebastian <span className="text-blue-500">Di Salvatore</span>
            </h2>
          </div>

          <nav className="flex  justify-center  items-center  ">
            <ul className="flex items-center gap-10 text-lg cursor-pointer">
              {links.map((link, index) => (
                <li key={index} className="relative w-full h-full px-5 py-1 ">
                  <Link
                    href="home"
                    className="relative"
                    onMouseEnter={() => setActiveIndex(link.id)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {link.name}
                    <div
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[3px] rounded-sm transition-all duration-300 delay-75 ease-in-out ${
                        activeIndex === link.id
                          ? "w-full bg-blue-400"
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

export default NavTop;
