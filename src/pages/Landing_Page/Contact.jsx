import React from "react";
import { IconPhone } from "@tabler/icons-react";

export default function Contact({data}) {
  return (
    <section className="py-16 bg-white">
      {/* Consistent*/}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="bg-[#FFEEEE] rounded-[30px] p-8 md:p-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* ✅ Left Section */}
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl md:text-[32px] font-bold mb-4">
                {data.title}
                <span className="text-red-600">{data.highlight}</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-[16px] md:text-[16px] font-medium mb-6">
                {data.description}
              </p>

              <div className="flex flex-row justify-start gap-4 flex-wrap">
                {data.buttons.map((btn, index) => (
                  <button
                    key={index}
                    className={`flex items-center justify-center gap-2 px-6 py-2 rounded-[7.53px] text-[16px] font-bold transition ${btn.type === "primary"
                      ? "border border-red-600 bg-red-600 text-white hover:bg-red-500"
                      : "border border-gray-300 text-red-600 bg-white hover:bg-red-50"
                      }`}
                  >
                    {btn.icon === "phone" && <IconPhone size={18} />}
                    {btn.text}
                  </button>
                ))}
              </div>

            </div>

            {/* ✅ Right Section */}
            <div className="relative flex justify-center items-center w-full">
              <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <img
                  src={data.image}
                  alt="Demo meeting"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
