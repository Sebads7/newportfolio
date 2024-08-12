import React from "react";

const Hero = () => {
  return (
    <div
      className="flex  justify-center w-full h-[60rem] py-10  bg-black "
      key="home"
    >
      <div className=" flex flex-col items-center pt-32 w-full ">
        <h1 className="flex flex-col text-6xl font-bold pb-20 text-white">
          Hi,
          <span className="text-5xl font-light pt-5">
            Welcome to my
            <span className="text-blue-200 font-extrabold"> Portfolio.</span>
          </span>
        </h1>
        <div>
          <h2 className="pb-5 text-white text-xl">
            I&apos;m glad you are here!
          </h2>
          <span
            className="flex items-center justify-center w-full h-10  border-[1px]  tracking-wide text-blue-200 border-blue-800  rounded-md 
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
