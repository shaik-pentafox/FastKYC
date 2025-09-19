import React from "react";
import { IconPhone } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Contact_Section({ data, type = "cards" }) {
  // -------- TYPE 1: Left content + right cards --------
  if (type === "cards") {
    return (
      <section className="w-full bg-[#F7F7F7] py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start px-6 md:px-12 lg:px-20">

          {/* ✅ Left Section */}
          <div>
            <h2 className="text-2xl md:text-[24px] font-bold leading-snug mb-4">
              Ready to{" "}
              <span className="text-[#F44336]">{data.main.highlight}</span> as
              Unlock Instant Verification
            </h2>

            <p className="text-[#616161] font-medium text-[16px] mb-6">
              {data.main.description}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {data.main.buttons.map((btn, index) => (
                <Link
                  key={index}
                  to={btn.link}
                  className={`flex items-center justify-center gap-2 px-5 py-2 rounded-[10px] font-medium transition text-[16px] h-10 ${btn.type === "primary"
                    ? "bg-[#F44336] text-white hover:bg-red-700"
                    : "border border-[#F44336] text-[#F44336] hover:bg-red-100"
                    }`}
                >
                  {btn.icon && <IconPhone size={18} stroke={1.5}/>}
                  {btn.text}
                </Link>
              ))}
            </div>
          </div>

          {/* ✅ Cards Section */}
          {data.features.map((card, idx) => (
            <div key={idx}>
              <h3 className="text-[24px] font-bold mb-2 text-[#212121]">
                {card.title}
              </h3>
              <p className="text-[#616161] text-[16px] font-medium leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // -------- TYPE 2: Left content + right image --------
  if (type === "image") {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-[#FFEEEE] rounded-[30px] p-8 md:p-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* ✅ Left Section */}
              <div className="text-left">
                <h2 className="text-3xl sm:text-4xl md:text-[32px] font-bold mb-4">
                  {data.title} <span className="text-[#E20303]">{data.highlight}</span>
                </h2>

                <p className="text-[#616161] text-base md:text-[16px] font-medium mb-6">
                  {data.description}
                </p>

                {/* ✅ Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {data.buttons?.map((btn, index) => (
                    <a
                      key={index}
                      href={btn.link}
                      className={`flex items-center justify-center gap-2 px-6 py-2 rounded-[10px] text-[16px] font-medium transition h-10 ${btn.type === "primary"
                        ? "bg-[#F44336] text-white hover:bg-red-700"
                        : "border border-[#F44336] text-[#F44336] hover:bg-red-100"
                        }`}
                    >
                      {btn.icon && <IconPhone size={18} stroke={1.5}/>}
                      {btn.text}
                    </a>
                  ))}
                </div>
              </div>

              {/* ✅ Right Section */}
              <div className="relative flex justify-center items-center w-full">
                <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg">
                  <img
                    src={data.image}
                    alt="Integration"
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

  return null;
}

export default Contact_Section;
