import ContactForm from "@/components/ContactForm";
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";

const Contact = () => {
  return (
    <section
      className="pt-24 pb-36 flex flex-col  items-center w-full h-full  bg-black/50 text-white "
      id="contact"
    >
      <div className="mt-10 container mx-auto p-6 w-full h-[50rem]  bg-white/90 shadow-[20px_20px_20px_0px_rgba(8,112,184)]">
        <h1 className=" text-black text-center -tracking-tight  text-5xl  font-bold mt-10">
          Contact
        </h1>
        <div className="grid grid-cols-2 h-full">
          <section className="flex w-full h-full   ">
            <div className="w-full h-full pt-44 ">
              <h2 className="text-center text-black   scroll-m-20 border-b pb-7 text-2xl font-light tracking-tight first:mt-0">
                You can reach me directly at:
              </h2>
              <div className="w-full flex flex-col justify-center gap-10  ">
                {/* EMAIL */}
                <div className="flex flex-col justify-center items-center text-black">
                  <div className="flex">
                    <MdEmail className="" size={35} />
                    <p className="scroll-m-20 border-b  pb-2 text-3xl font-semibold tracking-tight ">
                      Email
                    </p>
                  </div>
                  <p>disalvatore.sebastian@gmail.com</p>
                </div>
                {/* PHONE NUMBER */}
                <div className="flex flex-col justify-center items-center text-black">
                  <div className="flex">
                    <IoIosPhonePortrait className="" size={35} />
                    <p className="scroll-m-20 border-b  pb-2 text-3xl font-semibold tracking-tight ">
                      Phone
                    </p>
                  </div>
                  <p>+54 (263) 476-1074</p>
                </div>
              </div>
            </div>

            {/* VERTICAL LINE */}
            <div className="flex justify-end ">
              <div className=" w-[2rem] py-20">
                <div className="flex items-center h-[35rem]  w-[2px] self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
              </div>
            </div>
            {/* END VERTICAL LINE */}
          </section>

          {/* RIGHT SIDE */}
          <section className="w-full h-full  pt-20 text-black ">
            <header className="w-full  justify-center items-center flex flex-col pb-10">
              <h2 className="font-bold tracking-tight lg:text-4xl mb-2">
                Get in Touch
              </h2>
              <p className=" border-2 border-b  text-2xl font-light tracking-tight">
                I’m here to help with your project or answer any questions.
              </p>
            </header>
            <div className=" px-10  ">
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;
