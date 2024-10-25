// src/components/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="relative  text-black md:mt-14 ">
      <div className=" w-full  absolute flex xs:flex-col lg:flex-row xs:justify-center items-center lg:justify-evenly bg-white/95  py-7 ">
        <div className="flex  flex-col ">
          <div className="flex items-center mb-1 ">
            <MdEmail className="" size={15} />
            <p className="">disalvatore.sebastian@gmail.com</p>
          </div>

          {/* PHONE */}
          <div className="flex items-center xs:justify-center ">
            <IoIosPhonePortrait className="" size={15} />
            <p className=" ">+54 (234) 761074</p>
          </div>
        </div>
        {/* LINKS */}
        <div className="mb-4 flex p-3 mt-2 gap-4 bg-gray-200  transition-all delay-100 duration-150 ease-in-out hover:-translate-y-2  hover:scale-[1.02] shadow-footer ">
          {/* LINKEDIN  */}
          <div className="flex justify-center items-center ">
            <FaLinkedin className="fill-blue-600" />
            <a
              href="https://www.linkedin.com/in/sebastiands/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 hover:text-blue-500"
            >
              LinkedIn
            </a>
          </div>
          {/* GITHUB */}
          <div className="flex justify-center items-center ">
            <FaGithub />
            <a
              href="https://github.com/Sebads7"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 hover:text-blue-500 "
            >
              GitHub
            </a>
          </div>
          <div className="flex justify-center items-center  ">
            <FaXTwitter />
            <a
              href="https://x.com/sebasds71"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 hover:text-blue-500"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="">
          <p className="text-gray-800  flex flex-col text-center xs:pt-4 lg:pt-0 ">
            &copy; {new Date().getFullYear()} Designed and Developed by
            <span>Sebastian Di Salvatore. All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
