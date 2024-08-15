"use client";

import AnimatedDots from "@/components/AnimatedDots";
import React, { useState } from "react";
import Navbar from "@/components/NavBar";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className={`flex flex-col  justify-center items-center w-full   pb-10 ${loading ? "bg-black" : "bg-black/50"} `}
      id="home"
    >
      <Navbar loading={loading} />
      <AnimatedDots onLoad={() => setLoading(false)} />

      <div className=" flex flex-col justify-center items-center h-[50rem]  w-full  ">
        <div className="mb-14">
          <h1 className="text-7xl font-bold  pb-8 text-white opacity-0 animate-fade-in-down animate-delay-[2s] ">
            Hi,
          </h1>
          <p className=" text-white text-6xl font-light opacity-0   animate-fade-in-right animate-delay-[3s]">
            Welcome to my
            <span className="text-blue-100 font-extrabold"> Portfolio.</span>
          </p>
        </div>

        <div className="animate-zoom-in opacity-0  animate-delay-[4s]">
          <h2 className="pb-5 text-white text-xl">
            I&apos;m glad you are here!
          </h2>
          <span
            className="flex items-center justify-center w-full h-10  border-[1px]  tracking-wide text-blue-100 border-blue-800 bg-black/70  rounded-md 
             transition-all  ease-in-out  delay-75   hover:scale-105  hover:bg-blue-900  hover:text-white "
          >
            <a href="#projects ">VIEW PROJECTS</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
