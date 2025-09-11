import React from "react";
import {
  IconDatabase,
  IconAlertTriangle,
  IconPlus,
  IconShield,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const iconMap = {
  Database: <IconDatabase size={35} stroke={1.5} className="text-red-500" />,
  Warning: <IconAlertTriangle size={35} stroke={1.5} className="text-red-500" />,
  Plus: <IconPlus size={35} stroke={1.5} className="text-red-500" />,
  Shield: <IconShield size={35} stroke={1.5} className="text-red-500" />,
};

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.5 } },
};

const featureVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.4 } },
};

const iconVariant = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const textVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Customer_Section({ data }) {
  return (
    <section className="w-full bg-[#F7F7F7] py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h3 className="text-[#F44336] font-medium text-[24px] mb-2">
          {data.heading}
        </h3>
        <p className="text-[#616161] max-w-3xl text-[20px] font-medium mb-10">
          {data.description}
        </p>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-row items-start gap-4"
              variants={featureVariant}
            >
              {/* Icon */}
              <motion.div variants={iconVariant} className="flex-shrink-0 mt-1">
                {iconMap[feature.icon]}
              </motion.div>

              {/* Text */}
              <motion.div variants={textVariant} className="flex flex-col">
                <h4 className="text-[20px] md:text-[24px] font-medium text-[#1E1E1E]">
                  {feature.title}
                </h4>
                <p className="text-[#424242] text-[16px] font-medium mt-2">
                  {feature.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Customer_Section;
