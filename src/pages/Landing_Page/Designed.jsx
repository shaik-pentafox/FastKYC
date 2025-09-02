import React from "react";
import { motion } from "framer-motion";

function Designed({data}) {
  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.5 },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-white to-red-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <motion.div
            className="flex flex-col justify-center"
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-[#E20303] text-[24px] font-medium mb-2"
              variants={textItemVariants}
            >
              {data.sectionTitle}
            </motion.h3>

            <motion.h2
              className="text-3xl md:text-[32px] font-medium text-[#1E1E1E] mb-4"
              variants={textItemVariants}
            >
              {data.heading.split(".")[0]}.
              <br />
              {data.heading.split(".")[1]}
            </motion.h2>

            <motion.p
              className="text-[#333333] text-[16px] font-medium md:text-[16px]"
              variants={textItemVariants}
            >
              {data.description}
            </motion.p>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="flex justify-start items-start"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={data.image}
              alt="Developer integration illustration"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Designed;
