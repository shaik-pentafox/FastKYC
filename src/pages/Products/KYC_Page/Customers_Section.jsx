import React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@mantine/core";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, ease: "easeOut" },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 80, scale: 0.9 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

function Customers_Section({ data }) {
  return (
    <section className="py-12 mb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ✅ Left Side */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 order-1 flex flex-col justify-center"
          >
            <motion.div variants={itemVariant} className="mb-6">
              <p className="text-[#F44336] text-[24px] font-medium mb-2">
                {data.subtitle}
              </p>
              <h2 className="w-full max-w-2xl text-[32px] font-bold text-[#161C2D]">
                {data.title}
              </h2>
            </motion.div>

            {/* ✅ Mobile Image */}
            <motion.div
              variants={itemVariant}
              className="md:hidden flex justify-center"
            >
              <img
                src={data.image?.src}
                alt={data.image?.alt || "KYC Verification"}
                className="w-full max-w-md object-contain drop-shadow-lg"
              />
            </motion.div>

            <motion.p
              variants={itemVariant}
              className="text-[#616161] text-[20px] font-medium"
            >
              {data.description}
            </motion.p>

            <motion.div variants={listContainer}>
              <motion.h3
                variants={itemVariant}
                className="font-bold text-[22px] md:text-[24px] text-[#212121] mb-3"
              >
                {data.whyItMattersTitle}
              </motion.h3>

              <motion.ul
                variants={listContainer}
                className="space-y-3 list-none"
              >
                {data.whyItMattersPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariant}
                    className="flex items-center gap-3 text-[#616161] text-[20px] font-medium"
                  >
                    <span className="flex items-center justify-center w-6 h-6">
                      <CheckIcon stroke={2} color="#F44336" className="w-3 h-3" />
                    </span>
                    {point}
                  </motion.li>
                ))}

               
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* ✅ Desktop Image */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="hidden md:flex items-center justify-center order-2"
          >
            <img
              src={data.image?.src}
              alt={data.image?.alt || "Customer Verification"}
              className="w-full max-w-lg object-contain drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Customers_Section;
