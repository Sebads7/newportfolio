"use client";

import AnimatedDots from "@/components/AnimatedDots";
import React, { useState } from "react";
import Navbar from "@/components/NavBar";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section
      className={`flex flex-col  justify-center items-center w-full   pb-10 ${loading ? "bg-black " : "bg-black/50 transition ease-in-out "} `}
      id="nav-home"
    >
      <Navbar loading={loading} />

      <AnimatedDots onLoad={() => setLoading(false)} />

      <div
        className="flex 
      flex-col
      justify-center 
      items-center 
      xs:h-[25rem] 
      md:h-[40rem] 
      lg:h-[60rem]  
      w-full "
      >
        {!loading && (
          <div
            className="flex 
          flex-col 
          lg:justify-start 
          lg:pt-52 
          xs:justify-center 
          items-center 
          h-full "
          >
            {/* INTRO TEXT */}
            <div className="xs:mb-8 md:mb-14 xs:w-3/5 md:w-full">
              <h1
                className="xs:text-4xl 
              md:text-5xl 
              lg:text-7xl 
              font-bold  
              md:pb-4 
              text-white 
              word 
              animate-blur-in animate-delay-[.5s]  "
              >
                Hi,
              </h1>
              <p
                className=" text-white 
              
              xs:text-3xl 
              md:text-4xl 
              lg:text-6xl 
              font-light 
              xs:space-x-2
              md:space-x-3 "
              >
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
                lg:-translate-x-0
               xs:-translate-x-1
                word 
                animate-blur-in 
                animate-delay-[1.9s]"
                >
                  Portfolio.
                </span>
              </p>
            </div>
            {/* BUTTON */}
            <div className=" animate-blur-zoom-in  word  animate-delay-[2.5s]">
              <h2 className="xs:pb-2 md:pb-5 text-white xs:text-sm md:text-lg lg:text-xl">
                I&apos;m glad you are here!
              </h2>
              <span
                className="flex 
              items-center 
              justify-center 
              w-full h-10 
              border-[1px]  
              tracking-wide 
              text-blue-100  
              md:bg-black/70  
              rounded-md 
              transition-all  
              ease-in-out  
              delay-75  
              button-hero-effect
              md:uppercase  
              xs:text-xs
              md:text-sm 
              lg:text-base   "
              >
                <a href="#projects ">View Projects</a>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
