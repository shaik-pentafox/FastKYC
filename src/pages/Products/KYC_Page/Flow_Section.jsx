import React from "react";
import {
  IconLock,
  IconPuzzle,
  IconAdjustmentsHorizontal,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const iconMap = {
  lock: <IconLock className="w-8 h-8 text-[#F44336]" />,
  puzzle: <IconPuzzle className="w-8 h-8 text-[#F44336]" />,
  adjustments: <IconAdjustmentsHorizontal className="w-8 h-8 text-[#F44336]" />,
};

const containerVariant = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};


function Flow_Section({ data }) {
  return (
    <section className="w-full bg-gradient-to-r from-[#FFD8D8] to-[#FFFFFF] py-16">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left px-6 md:px-12 lg:px-20"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariant}
            className="flex flex-col items-start"
          >
           
            <div className="bg-[#FFF5F5] p-3 rounded-2xl mb-4">
              {iconMap[item.icon]}
            </div>

            <h3 className="text-[24px] font-medium mb-2 text-[#1E1E1E]">
              {item.title}
            </h3>
            <p className="text-[#424242] text-[16px] font-medium leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Flow_Section;
