import React from "react";
import { motion } from "framer-motion";

function Designed({ data }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
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
    <section className="py-16 bg-gradient-to-b from-white via-white to-red-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-[#E20303] text-[24px] font-medium mb-2"
              variants={itemVariants}
            >
              {data.sectionTitle}
            </motion.h3>

            <motion.h2
              className="text-3xl md:text-[32px] font-medium text-[#1E1E1E] mb-4"
              variants={itemVariants}
            >
              {data.heading.split(".")[0]}.
              <br />
              {data.heading.split(".")[1]}
            </motion.h2>

            <ul className="space-y-3 mb-8">
              {data.description.map((line, index) => (
                <motion.li
                  key={index}
                  className="text-[#333333] text-[16px] font-medium md:text-[16px] flex items-start gap-2"
                  variants={itemVariants}
                >
                  <span className="text-[#333333]">•</span>
                  {line}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* {data.bottomSections && (
              <div className="grid md:grid-cols-2 gap-6">
                {data.bottomSections.map((section, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col"
                    variants={itemVariants}
                  >
                    <h3 className="text-[20px] font-medium text-[#000000] mb-2">
                      {section.title}
                    </h3>
                    <p className="text-[#424242] text-[16px] font-medium mb-3">
                      {section.description}
                    </p>
                    <a
                      href={section.referenceLink}
                      className="inline-flex items-center gap-2 text-[#F44336] text-[20px] font-medium"
                    >
                      <span className="leading-none">{section.referenceText}</span>
                      <IconChevronRight size={22} stroke={2} className="align-middle mt-1" />
                    </a>

                  </motion.div>
                ))}
              </div>
            )} */}

          {/* Right side: Image */}
          <motion.div
            className="flex justify-center items-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={data.image}
              alt="Illustration"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Designed;
