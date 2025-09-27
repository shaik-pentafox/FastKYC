import React from "react";
import { motion } from "framer-motion";
import { IconCircleFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function PayIntegrate({ data, align = "left" }) {
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
      transition: { duration: 0.5, ease: "easeInOut" },
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
        <div
          className={`flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 ${align === "right" ? "md:flex-row-reverse" : ""
            }`}
        >
          {/* ✅ Image Side */}
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
              className="max-w-full h-auto"
            />
          </motion.div>

          {/* ✅ Content Side */}
          <motion.div
            className="md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-3xl lg:text-5xl font-bold text-[#161C2D] mb-4 leading-snug"
              variants={textItemVariants}
            >
              {data.heading}
            </motion.h2>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-[#424242] mb-6 font-medium leading-relaxed"
              variants={textItemVariants}
            >
              {data.description}
            </motion.p>


            <motion.ul
              className="space-y-3 list-none"
              variants={containerVariants}
            >
              {data?.features?.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 text-[#616161] text-[20px] font-medium"
                  variants={textItemVariants}
                >
                  <span className="flex items-center justify-center w-6 h-6">
                    <IconCircleFilled className="w-2 h-2 text-[#616161]" />
                  </span>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="pt-4" variants={textItemVariants}>
               <Link to="/fast-kyc">
              <button className="cursor-pointer flex items-center font-medium text-sm md:text-base lg:text-lg text-[#E20303] border border-[#E20303] rounded-[6px] px-3 md:px-4 lg:px-5 py-2 hover:bg-red-50 transition">
                {data.buttonText}
                <span className="ml-2 mb-0.5 text-lg md:text-xl font-bold leading-none">
                  {data.buttonIcon}
                </span>
              </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PayIntegrate;
