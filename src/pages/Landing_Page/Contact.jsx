import React from "react";
import { IconPhone, IconMail } from "@tabler/icons-react";
import Book from "../../assets/Images/Book.png";

export default function Contact() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 px-6 py-12 md:px-12">
      <div className="bg-red-100 rounded-[30px] p-10 md:p-16 w-full max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Book your demo{" "}
              <span className="text-red-600">today!</span>
            </h2>
            <p className="text-gray-600 text-md md:text-md mb-6">
              Experience seamless identity verification with a personalized demo.
              Our experts will walk you through our AI-powered KYC solutions,
              fraud prevention tools, and compliance features tailored to your
              business needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 border border-red-600 text-red-600 px-4 py-2 rounded-md text-sm font-light hover:bg-red-50 transition cursor-pointer">
                <IconPhone size={18} />
                Contact us
              </button>
              <button className="flex items-center gap-2 border border-red-600 text-red-600 px-4 py-2 rounded-md text-sm font-light hover:bg-red-50 transition cursor-pointer">
                <IconMail size={18} />
                Email us
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative flex justify-center items-center w-full">
            <div className="absolute -top-6 md:-top-7 -right-1 md:-right-2 w-[88%] md:w-[90%] h-[95%] md:h-[95%] bg-gray-400/20 rounded-[30px] md:rounded-[38px] md: z-0"></div>

            <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md">
              <img
                src={Book}
                alt="Demo meeting"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
         </div> 
      </div>
    </section>
  );
}
