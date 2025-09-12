import React from "react";

function Compliance_Section({ data }) {
  return (
    <section className="w-full bg-white py-10">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-10">
        <p className="text-[#F44336] text-xl sm:text-2xl md:text-[24px] font-medium">
          {data.heading}
        </p>
        <h2 className="text-2xl sm:text-[28px] md:text-[32px] text-[#212121] font-medium mt-2 leading-snug">
          {data.subheading}
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 auto-rows-fr">
        {data.features.map((feature) => (
          <div
            key={feature.id}
            className={`rounded-[23px] p-6 md:p-8 flex flex-col justify-between h-full 
              ${feature.colSpan === 2 ? "md:col-span-2" : ""}`}
            style={{
              backgroundColor: feature.backgroundColor,
              backgroundImage: `url(${feature.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Heading */}
            <h3
              className={`font-bold text-lg md:text-[26px] ${feature.headingAlign}`}
              style={{ color: feature.headingColor }}
            >
              {feature.heading}
            </h3>

            {feature.descriptionLines ? (
              <div className={`${feature.descAlign}`}>
                {feature.descriptionLines.map((line, idx) => (
                  <p
                    key={idx}
                    className={`${line.size} ${line.weight}`}
                    style={{ color: feature.descriptionColor }}
                  >
                    {line.text}
                  </p>
                ))}
              </div>
            ) : (
              <p
                className={`text-lg md:text-[26px] font-bold ${feature.descAlign}`}
                style={{ color: feature.descriptionColor }}
              >
                {feature.description.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Compliance_Section;
