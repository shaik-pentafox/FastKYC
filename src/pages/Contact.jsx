import React from "react";
import { IconPhone } from "@tabler/icons-react";

export default function Contact({ data }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="bg-[#FFEEEE] rounded-[30px] p-8 md:p-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* ✅ Left Section */}
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl md:text-[32px] font-bold mb-4">
                {data.title}
                <span className="text-[#E20303]">{data.highlight}</span>
              </h2>
              <p className="text-[#616161] text-base sm:text-[16px] md:text-[16px] font-medium mb-6">
                {data.description}
              </p>

              <div className="flex flex-col md:flex-row justify-start gap-4 flex-wrap w-full">
                {data.buttons.map((btn, index) => {
                  const ButtonContent = (
                    <button
                      key={index}
                      className={`h-10 flex items-center justify-center gap-2 px-6 py-2 rounded-[10px] text-[16px] font-bold transition cursor-pointer w-full md:w-auto
          ${btn.type === "primary"
                          ? "border border-[#F44336] bg-[#F44336] text-white hover:bg-red-500"
                          : "border border-[#F44336] text-[#F44336] bg-white hover:bg-red-50"
                        }`}
                    >
                      {btn.icon && <IconPhone size={18} />}
                      {btn.text}
                    </button>
                  );

                  return (
                    <a key={index} href={btn.link} className="w-full md:w-auto">
                      {ButtonContent}
                    </a>
                  );
                })}
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
