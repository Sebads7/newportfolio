"use client";

import AnimatedCircles from "@/components/AnimatedBG/AnimatedCircles";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <section
      className={`flex flex-col  justify-center section-bg items-center  w-full md:pt-24 xs:h-[45rem] md:h-[70rem] md:py-10  pb-10 `}
      id="home"
    >
      <div className="absolute w-full h-full ">
        <AnimatedCircles />
      </div>

      <div className="z-10 container-div flex flex-col justify-center  items-center  text-color animate-fade-in-right animate-delay-75 opacity-0 ">
        <div className="flex flex-col lg:justify-start  justify-center items-center h-full ">
          {/* INTRO TEXT */}
          <div className="xs:mb-3 md:mb-10 px-20 ">
            <h1 className="xs:text-4xl md:text-5xl lg:text-7xl  font-medium  md:pb-4  word    animate-blur-in animate-delay-[1s] ">
              Hi,
            </h1>
            <div className="flex xs:flex-col md:flex-row xs:text-3xl md:text-4xl md:gap-3  lg:text-6xl  ">
              <motion.p
                className=" font-medium xs:space-x-2 md:space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
                <span className=" text-color ">Welcome to my</span>
              </motion.p>
              <motion.p
                className="text-color font-[900]"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                Portfolio
              </motion.p>
            </div>
          </div>
          {/* BUTTON */}
          <motion.div
            className=" z-[3]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 1.8,
            }}
          >
            <h2 className="xs:pb-2 md:pb-5  xs:text-sm md:text-lg lg:text-xl text-color">
              I&apos;m glad you are here!
            </h2>
            <span className="flex items-center justify-center xs:w-[90%] mx-auto md:w-full xs:h-8 md:h-10 tracking-wide  button-hero-effect xs:text-xs md:text-sm  lg:text-base   ">
              <a href="#projects ">View Projects</a>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
