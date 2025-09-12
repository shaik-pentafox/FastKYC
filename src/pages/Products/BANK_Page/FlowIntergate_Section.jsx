import React from "react";
import { IconPhone } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import PayIntegrate from "../../PayIntegrate"

function FlowIntergate_Section({ data ,pay_integrate }) {
  return (
    <>
      <section className="w-full bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start py-16 px-6 md:px-12 lg:px-20">
          {/* Left Section */}
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
              {data.main.buttons.map((btn, idx) => {
                if (btn.external) {
                  return (
                    <a
                      key={idx}
                      href={btn.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${btn.type === "primary"
                        ? "bg-[#F44336] text-white hover:bg-red-700"
                        : "flex items-center justify-center gap-2 border border-[#F44336] text-[#F44336] hover:bg-red-100"
                        } px-5 py-2 rounded-[10px] font-medium transition text-[16px] h-10 cursor-pointer`}
                    >
                      {btn.icon && <IconPhone size={18} />}
                      {btn.text}
                    </a>
                  );
                }
                return (
                  <Link
                    key={idx}
                    to={btn.link}
                    className={`${btn.type === "primary"
                      ? "bg-[#F44336] text-white hover:bg-red-700"
                      : "flex items-center justify-center gap-2 border border-[#F44336] text-[#F44336] hover:bg-red-100"
                      } px-5 py-2 rounded-[10px] font-medium transition text-[16px] h-10 cursor-pointer`}
                  >
                    {btn.icon && <IconPhone size={18} />}
                    {btn.text}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Features */}
          {data.features.map((feature, idx) => (
            <div key={idx}>
              <h3 className="text-[24px] font-bold mb-2 text-[#212121]">
                {feature.title}
              </h3>
              <p className="text-[#616161] text-[16px] font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PayIntegrate Section */}
    <PayIntegrate data={pay_integrate} align="right"/>
    </>
  );
}

export default FlowIntergate_Section;
