import ContactForm from "@/components/ContactForm";
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";

const Contact = () => {
  return (
    <section className="contact-section z-[2]  " id="contact">
      <div className="contact-container z-[2] ">
        <h1 className=" text-black  text-center -tracking-tight xs:text-2xl md:text-4xl lg:text-5xl  font-bold mt-10">
          Contact
        </h1>
        <div className="grid sx:grid-cols-1 lg:grid-cols-2 h-full  w-full">
          {/* LEFT SIDE */}
          <section className="flex w-full h-full  text-black xs:pt-5 md:pt-10">
            <div className="w-full  h-full lg:pt-24 ">
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
            </div>

            {/* VERTICAL LINE */}
            <div className="flex justify-end transform xs:hidden lg:flex">
              <div className=" w-[2rem] py-20">
                <div className="contact-vertical-line"></div>
              </div>
            </div>

            {/* END VERTICAL LINE */}
          </section>

          {/* RIGHT SIDE */}
          <section className="w-full h-full xs:pt-3 md:pt-5  lg:pt-20 text-black ">
            <header className="w-full  justify-center items-center flex flex-col pb-10">
              <h2 className="font-bold tracking-tight xs:text-xl md:text-2xl lg:text-4xl mb-2">
                Get in Touch
              </h2>
              <p className="text-center xs:px-3 xs:text-sm md:text-lg  lg:text-xl font-light tracking-tight">
                I’m here to help with your project or answer any questions.
              </p>
            </header>
            <div className=" lg:px-10  ">
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;
