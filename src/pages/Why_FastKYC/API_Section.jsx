import React from "react";

function API_Section({ data }) {
  return (
    <>
      {/* Section 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1E1E1E] leading-relaxed mb-10 text-left lg:w-2/3">
            {data.section1.heading}
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-[28px] md:text-[40px] font-bold text-[#161C2D] mb-4 leading-snug">
                {data.section1.left.title}
              </h2>
              <p className="text-[18px] md:text-[24px] text-[#161C2D] mb-6 font-bold leading-relaxed">
                {data.section1.left.subtitle}
              </p>
              <p className="text-[#424242] text-[16px] md:text-[20px] font-medium leading-relaxed mb-6">
                {data.section1.left.description}
              </p>
              <button
                className={`cursor-pointer flex items-center font-medium text-base md:text-lg lg:text-xl ${data.section1.left.buttonColor} border ${data.section1.left.buttonColor.split(" ")[1]} rounded-lg px-6 md:px-8 lg:px-10 py-2 hover:bg-red-50 transition`}
              >
                {data.section1.left.buttonText}
                <span className="ml-2 text-2xl md:text-3xl font-medium leading-none">
                  {data.section1.left.buttonArrow}
                </span>
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={data.section1.rightImage}
                alt="API Documentation"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={data.section2.leftImage}
                alt="API Docs Screenshot"
                className="max-w-full h-auto"
              />
            </div>

            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-[28px] md:text-[40px] font-bold text-[#161C2D]">
                {data.section2.heading}
              </h2>
              <p className="text-[18px] md:text-[24px] font-bold text-[#161C2D]">
                {data.section2.subtitle}
              </p>
              <p className="text-[#424242] text-[16px] md:text-[20px] font-medium leading-relaxed">
                {data.section2.description}
              </p>

              <button className={`cursor-pointer flex items-center font-bold text-base md:text-lg ${data.section2.buttonColor} border ${data.section2.buttonColor.split(" ")[1]} rounded-lg px-6 py-2 hover:bg-red-50 transition`}>
                {data.section2.buttonText}
                <span className="ml-2 text-2xl font-bold leading-none">
                  {data.section2.buttonArrow}
                </span>
              </button>

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                {data.section2.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#FFEEEE] p-4 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFF5F5] mb-3">
                        {feature.iconType === "image" ? (
                          <img src={feature.icon} className="w-8 h-8" alt={feature.title} />
                        ) : (
                          <feature.icon size={28} color={feature.iconColor} />
                        )}
                      </div>
                      <h4 className="font-bold text-[16px] text-[#1E1E1E]">{feature.title}</h4>
                      <p className="text-[16px] font-medium text-[#424242] mt-1">{feature.description}</p>
                      {feature.linkText && (
                        <a href="#" className="text-[16px] font-medium mt-3 inline-block" style={{ color: feature.linkColor }}>
                          {feature.linkText}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-[28px] md:text-[40px] font-bold text-[#161C2D]">
                {data.section3.heading}
              </h2>
              <p className="text-[18px] md:text-[24px] font-bold text-[#161C2D]">
                {data.section3.subtitle}
              </p>
              <p className="text-[#424242] text-[16px] md:text-[20px] font-medium leading-relaxed">
                {data.section3.description}
              </p>

              <button className={`cursor-pointer flex items-center font-bold text-base md:text-lg ${data.section3.buttonColor} border ${data.section3.buttonColor.split(" ")[1]} rounded-lg px-6 py-2 hover:bg-red-50 transition`}>
                {data.section3.buttonText}
                <span className="ml-2 text-2xl font-bold leading-none">
                  {data.section3.buttonArrow}
                </span>
              </button>

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                {data.section3.features.map((feature, idx) => (
                  <div key={idx} className="rounded-2xl bg-[#FFEEEE] p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFF5F5] mb-3">
                        <feature.icon size={28} color={feature.iconColor} />
                      </div>
                      <h4 className="font-bold text-[16px] text-[#1E1E1E]">{feature.title}</h4>
                      <p className="text-[16px] text-[#424242] font-medium mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={data.section3.rightImage}
                alt="Dev Console Screenshot"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default API_Section;
