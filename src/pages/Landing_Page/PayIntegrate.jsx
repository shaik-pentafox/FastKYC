import React from "react";
import { motion } from "framer-motion";

function PayIntegrate({data}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.4 },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* ✅ Left Side*/}
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={data.image}
              alt="API Documentation"
              className="rounded-xl border border-red-100 shadow-md max-w-full h-auto"
            />
          </motion.div>

          {/* ✅ Right Side*/}
          <motion.div
            className="md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-snug"
              variants={textItemVariants}
            >
              {data.heading}
            </motion.h2>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 font-medium leading-relaxed"
              variants={textItemVariants}
            >
              {data.description}
            </motion.p>

            <motion.div className="pt-4" variants={textItemVariants}>
              <button className="cursor-pointer flex items-center font-medium text-base md:text-lg lg:text-xl text-red-600 border border-red-600 rounded-lg px-6 md:px-8 lg:px-10 py-2 hover:bg-red-50 transition">
                {data.buttonText}
                <span className="ml-2 mb-1 text-2xl md:text-3xl font-bold leading-none">
                  {data.buttonIcon}
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PayIntegrate;
