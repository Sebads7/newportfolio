"use client";

import ContactForm from "../components/ContactForm";
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import useInViewAnimation from "@/components/hooks/useInView";
import { motion } from "framer-motion";

const Contact = () => {
  const { ref, mainControls } = useInViewAnimation();

  return (
    <section className="contact-section z-[2] bg-black " id="contact" ref={ref}>
      <motion.div
        className="contact-container z-[2] "
        initial={{ transform: "translateX(1px) translateY(-2px)" }}
        animate={{ transform: "translateX(-1px) translateY(2px)" }}
        transition={{
          repeat: Infinity,

          duration: 5,
          repeatType: "reverse",
          ease: [1, 0, 0, 1],
        }}
      >
        <h1 className=" text-black  text-center -tracking-tight xs:text-2xl md:text-4xl lg:text-5xl  font-bold mt-10">
          Contact
        </h1>
        <motion.div className="grid sx:grid-cols-1 lg:grid-cols-2 h-full  w-full">
          {/* LEFT SIDE */}
          <motion.div className="flex w-full h-full  text-black xs:pt-5 md:pt-10">
            <motion.div
              className="w-full  h-full lg:pt-24 "
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 1,
                },
                visible: { opacity: 1, y: 1 },
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <h2 className="text-center xs:pb-4 lg:pb-7 xs:text-base md:text-lg lg:text-2xl font-light tracking-tight">
                You can reach me directly at:
              </h2>
              <div>
                <div className="w-full flex flex-col justify-center xs:gap-5 lg:gap-10  ">
                  {/* EMAIL */}
                  <div className="flex flex-col  justify-center items-center text-black ">
                    <div className="flex  ">
                      <MdEmail className="contact-icon  " />
                      <p className="contact-icon-desc">Email</p>
                    </div>
                    <p className="contact-icon-text ">
                      disalvatore.sebastian@gmail.com
                    </p>
                  </div>
                  {/* PHONE NUMBER */}
                  <div className="flex flex-col justify-center items-center text-black">
                    <div className="flex">
                      <IoIosPhonePortrait className="contact-icon" />
                      <p className="contact-icon-desc">Phone</p>
                    </div>
                    <p className="contact-icon-text">+54 (263) 476-1074</p>
                  </div>
                </div>
              </div>

              <hr className="contact-hr" />
            </motion.div>

            {/* VERTICAL LINE */}
            <div className="flex justify-end transform xs:hidden lg:flex">
              <div className=" w-[2rem] py-20">
                <div className="contact-vertical-line"></div>
              </div>
            </div>

            {/* END VERTICAL LINE */}
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="w-full h-full xs:pt-3 md:pt-5  lg:pt-20 text-black "
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                scale: 1,
              },
              visible: { opacity: 1, y: 1 },
            }}
            transition={{
              duration: 1,
              delay: 1,
              ease: "easeInOut",
            }}
          >
            <header className="w-full  justify-center items-center flex flex-col pb-10">
              <h2 className="font-bold tracking-tight xs:text-xl md:text-2xl lg:text-4xl mb-2">
                Get in Touch
              </h2>
              <p className="text-center xs:px-3 xs:text-sm md:text-lg  lg:text-xl font-light tracking-tight">
                I’m here to help with your project or answer any questions.
              </p>
            </header>
            <div className=" lg:px-10 xs:pb-5 md:pb-0 ">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
