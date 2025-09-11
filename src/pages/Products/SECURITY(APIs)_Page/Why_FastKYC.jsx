import React from "react";
import { motion } from "framer-motion";

function Why_FastKYC({ data }) {

  const dataVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  // Icon variant
  const iconVariant = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Text variant
  const textVariant = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="bg-gradient-to-r from-[#FFD8D8] to-[#ffffff] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h3 className="text-[#F44336] font-medium text-[24px] mb-2">{data.heading}</h3>
        <h2 className="text-2xl md:text-[32px] font-medium text-[#1E1E1E] mb-4">
          {data.subheading}
        </h2>
        <p className="text-[#424242] max-w-3xl text-[16px] font-medium mb-10">
          {data.description}
        </p>

        {/* datas Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={dataVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.features.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row md:items-start gap-4"
              variants={dataVariant}
            >
              {/* Icon */}
              <motion.div variants={iconVariant} className="flex-shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
              </motion.div>

              {/* Text */}
              <motion.div variants={textVariant} className="flex flex-col ml-1">
                <h4 className="text-[20px] md:text-[24px] font-medium text-[#1E1E1E]">
                  {item.title}
                </h4>
                <p className="text-[#424242] text-[16px] font-medium mt-2">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}

export default Why_FastKYC;
