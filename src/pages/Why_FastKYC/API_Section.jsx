import React from "react";
import { motion } from "framer-motion";

function API_Section({ data }) {
  const ImageWithBack = ({ images, alt }) => {
    if (!images || images.length < 2) return null;

    return (
      <div className="relative flex justify-center w-full aspect-square">
        <img
          src={images[0]}
          alt={`${alt} background`}
          className="absolute inset-0 w-full h-[85.5%] object-cover rounded-3xl"
        />

        <img
          src={images[1]}
          alt={alt}
          className="relative z-10 w-[90%] h-[79.5%] object-contain transition-transform duration-500 ease-in-out hover:scale-105 mt-4"
        />
      </div>
    );
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* Section 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#1E1E1E] leading-relaxed mb-10 text-left lg:w-2/3"
          >
            {data.section1.heading}
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="md:w-1/2 space-y-4">
              {[
                <h2 className="text-2xl md:text-4xl font-bold text-[#161C2D] leading-snug">
                  {data.section1.left.title}
                </h2>,
                <p className="text-lg md:text-2xl text-[#161C2D] font-bold leading-relaxed">
                  {data.section1.left.subtitle}
                </p>,
                <p className="text-base md:text-lg text-[#424242] font-medium leading-relaxed">
                  {data.section1.left.description}
                </p>,
                <button
                  className={`cursor-pointer flex items-center font-medium text-sm md:text-base lg:text-lg 
                    ${data.section1.left.buttonColor} border ${data.section1.left.buttonColor.split(" ")[1]} 
                    rounded-lg px-4 md:px-5 lg:px-6 py-2 hover:bg-red-50 transition`}
                >
                  {data.section1.left.buttonText}
                  <span className="ml-2 text-lg md:text-xl font-bold leading-none">
                    {data.section1.left.buttonArrow}
                  </span>
                </button>,
              ].map((child, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {child}
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <ImageWithBack
                images={data.section1.rightImage}
                alt="API Documentation"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <ImageWithBack
                images={data.section2.leftImage}
                alt="API Docs Screenshot"
              />
            </motion.div>

            <div className="space-y-4 order-1 lg:order-2">
              {[
                <h2 className="text-2xl md:text-4xl font-bold text-[#161C2D]">
                  {data.section2.heading}
                </h2>,
                <p className="text-lg md:text-2xl font-bold text-[#161C2D]">
                  {data.section2.subtitle}
                </p>,
                <p className="text-base md:text-lg text-[#424242] font-medium leading-relaxed">
                  {data.section2.description}
                </p>,
                <button
                  className={`cursor-pointer flex items-center font-bold text-base md:text-lg ${data.section2.buttonColor} border ${data.section2.buttonColor.split(" ")[1]} 
                    rounded-lg px-6 py-2 hover:bg-red-50 transition`}
                >
                  {data.section2.buttonText}
                  <span className="ml-2 text-lg md:text-xl font-bold leading-none">
                    {data.section2.buttonArrow}
                  </span>
                </button>,
              ].map((child, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {child}
                </motion.div>
              ))}

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                {data.section2.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="rounded-2xl bg-[#FFEEEE] p-4 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFF5F5] mb-3">
                        {feature.iconType === "image" ? (
                          <img
                            src={feature.icon}
                            className="w-8 h-8"
                            alt={feature.title}
                          />
                        ) : (
                          <feature.icon
                            size={28}
                            color={feature.iconColor}
                            strokeWidth={1.5}
                          />
                        )}
                      </div>
                      <h4 className="font-bold text-base text-[#1E1E1E]">
                        {feature.title}
                      </h4>
                      <p className="text-base font-medium text-[#424242] mt-1">
                        {feature.description}
                      </p>
                      {feature.linkText && (
                        <a
                          href="#"
                          className="text-base font-medium mt-3 inline-block"
                          style={{ color: feature.linkColor }}
                        >
                          {feature.linkText}
                        </a>
                      )}
                    </div>
                  </motion.div>
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
              {[
                <h2 className="text-2xl md:text-4xl font-bold text-[#161C2D]">
                  {data.section3.heading}
                </h2>,
                <p className="text-lg md:text-2xl font-bold text-[#161C2D]">
                  {data.section3.subtitle}
                </p>,
                <p className="text-base md:text-lg text-[#424242] font-medium leading-relaxed">
                  {data.section3.description}
                </p>,
                <button
                  className={`cursor-pointer flex items-center font-bold text-base md:text-lg ${data.section3.buttonColor} border ${data.section3.buttonColor.split(" ")[1]} 
                    rounded-lg px-6 py-2 hover:bg-red-50 transition`}
                >
                  {data.section3.buttonText}
                  <span className="ml-2 text-lg md:text-xl font-bold leading-none">
                    {data.section3.buttonArrow}
                  </span>
                </button>,
              ].map((child, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {child}
                </motion.div>
              ))}

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                {data.section3.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="rounded-2xl bg-[#FFEEEE] p-6 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFF5F5] mb-3">
                        <feature.icon
                          size={28}
                          color={feature.iconColor}
                          strokeWidth={1.5}
                        />
                      </div>
                      <h4 className="font-bold text-base text-[#1E1E1E]">
                        {feature.title}
                      </h4>
                      <p className="text-base text-[#424242] font-medium mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithBack
                images={data.section3.rightImage}
                alt="Dev Console Screenshot"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default API_Section;
