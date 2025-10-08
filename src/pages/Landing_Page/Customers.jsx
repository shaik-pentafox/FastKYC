import React from "react";
import { motion } from "framer-motion";

function Customers({ data }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <section className="relative py-16 bg-gray-100 overflow-hidden">
      <img
        src={data.image2}
        alt="Border Decoration"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            className="order-1 md:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-[#E20303] font-medium text-[24px] mb-2"
              variants={featureVariants}
              custom={0}
            >
              {data.sectionTitle}
            </motion.p>

            <motion.h2
              className="text-3xl md:text-[32px] font-medium mb-6 text-[#212121]"
              variants={featureVariants}
              custom={1}
            >
              {data.sectionSubtitle}
            </motion.h2>

            <motion.div
              className="md:hidden mb-6 flex justify-center text-[#333333]"
              variants={featureVariants}
              custom={2}
            >
              <img
                src={data.image}
                alt="Growth"
                className="max-w-full max-h-[350px] object-contain rounded-lg"
              />
            </motion.div>

            {data.features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start mb-4 gap-3"
                variants={featureVariants}
                custom={index + 3}
              >
                <div className="flex-shrink-0 mt-1.5 w-5 h-5 rounded-full border-2 border-black bg-black flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="text-base text-gray-800">
                  <span className="text-[#E20303] font-medium text-[20px]">
                    {feature.highlight}
                  </span>{" "}
                  <span className="text-[#424242]">
                    {feature.text}
                    <br />
                    {feature.text2}
                  </span>
                </p>
              </motion.div>
            ))}

            <motion.p
              className="text-[#424242] mb-2 font-medium text-[16px]"
              variants={featureVariants}
              custom={5}
            >
              {data.testimonial.quote}
            </motion.p>
            <motion.p
              className="text-[#E20303] text-[16px] font-medium"
              variants={featureVariants}
              custom={6}
            >
              {data.testimonial.author}
            </motion.p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="hidden md:flex justify-center items-center order-2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={data.image}
              alt="Growth"
              className="max-w-full max-h-[450px] object-contain rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Customers;
