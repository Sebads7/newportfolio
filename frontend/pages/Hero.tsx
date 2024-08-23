"use client";

import React, { useState } from "react";
import Navbar from "../components/NavBar";
import ParticleComponent from "../components/AnimatedBackGround";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section
      className={`flex flex-col  justify-center items-center w-full md:pt-24 lg:h-[60rem] xs:h-[43rem]   pb-10 `}
      id="home"
    >
      <div className="-z-0">
        <ParticleComponent onLoad={() => setLoading(false)} />
      </div>

      {!loading && (
        <div className="z-10 container-div flex flex-col justify-center  items-center  text-color animate-fade-in-right animate-delay-75 opacity-0 ">
          <div className="flex flex-col lg:justify-start  justify-center items-center h-full ">
            {/* INTRO TEXT */}
            <div className="xs:mb-3 md:mb-10 xs:w-3/5 2xl:w-full ">
              <h1 className="xs:text-4xl md:text-5xl lg:text-7xl  font-medium  md:pb-4  word    animate-blur-in animate-delay-[1s] ">
                Hi,
              </h1>
              <p className=" xs:text-3xl md:text-4xl  lg:text-6xl font-medium xs:space-x-2 md:space-x-3">
                <span className="word animate-blur-in animate-delay-[1.7s] text-color ">
                  Welcome
                </span>
                <span className="word animate-blur-in animate-delay-[2.4s] text-color  ">
                  to
                </span>
                <span className="word animate-blur-in animate-delay-[3.1s] text-color xs:-translate-x-1">
                  my
                </span>

                <span className="  text-color font-[900] lg:-translate-x-0  word  animate-blur-in animate-delay-[3.8s] ">
                  Portfolio
                </span>
              </p>
            </div>
            {/* BUTTON */}
            <div className=" animate-zoom-in opacity-0  animate-delay-[5s] z-[3]">
              <h2 className="xs:pb-2 md:pb-5  xs:text-sm md:text-lg lg:text-xl text-color">
                I&apos;m glad you are here!
              </h2>
              <span className="flex items-center justify-center xs:w-[90%] mx-auto md:w-full xs:h-8 md:h-10 tracking-wide  button-hero-effect xs:text-xs md:text-sm  lg:text-base   ">
                <a href="#projects ">View Projects</a>
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
