"use client";

import AnimatedDots from "@/components/AnimatedDots";
import React, { useState } from "react";
import Navbar from "@/components/NavBar";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={`flex flex-col  justify-center items-center w-full   pb-10 ${loading ? "bg-black " : "bg-black/50 transition ease-in-out "} `}
      id="home"
    >
      <Navbar loading={loading} />

      <AnimatedDots onLoad={() => setLoading(false)} />

      <div
        className={`flex flex-col justify-center items-center h-[60rem]  w-full  `}
      >
        {!loading && (
          <div className="flex flex-col justify-center items-center -translate-y-28  ">
            <div className="mb-14">
              <h1 className="text-7xl font-bold  pb-8 text-white word animate-blur-in animate-delay-[.5s]  ">
                Hi,
              </h1>
              <p className=" text-white text-6xl font-light space-x-3 ">
                <span className="word animate-blur-in animate-delay-[1s]">
                  Welcome
                </span>
                <span className="word animate-blur-in animate-delay-[1.3s]">
                  to
                </span>
                <span className="word animate-blur-in animate-delay-[1.6s]">
                  my
                </span>
                <span
                  className="text-blue-100 
                font-extrabold 
                word 
                animate-blur-in 
                animate-delay-[1.9s]"
                >
                  Portfolio.
                </span>
              </p>
            </div>

            <div className=" animate-blur-zoom-in  word  animate-delay-[2.5s]">
              <h2 className="pb-5 text-white text-xl">
                I&apos;m glad you are here!
              </h2>
              <span
                className="flex items-center justify-center w-full h-10  border-[1px]  tracking-wide text-blue-100 border-blue-800 bg-black/70  rounded-md 
      transition-all  ease-in-out  delay-75   hover:scale-105  hover:bg-blue-900 shadow-[0_20px_50px_rgba(2,_122,_44,_0.4)] hover:text-white "
              >
                <a href="#projects ">VIEW PROJECTS</a>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
