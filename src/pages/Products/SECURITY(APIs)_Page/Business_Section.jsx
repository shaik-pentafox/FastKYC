import React, { useState } from "react";
import {
  IconDatabase,
  IconUser,
  IconAlertTriangle,
  IconChevronRight,
  IconFileOff
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap = {
  Database: <IconDatabase className="h-6 w-6 sm:h-7 sm:w-7 text-[#FF725E]" />,
  FileOff: <IconFileOff className="h-6 w-6 sm:h-7 sm:w-7 text-[#FF725E]" />,
  User: <IconUser className="h-6 w-6 sm:h-7 sm:w-7 text-[#FF725E]" />,
  Triangle: <IconAlertTriangle className="h-6 w-6 sm:h-7 sm:w-7 text-[#FF725E]" />,

};

function BusinessSection({data}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-18">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 px-6 md:px-12 lg:px-20">
        {/* ✅ Left Section*/}
        <div className="flex-1">
          <p className="text-[#F44336] font-medium text-xl sm:text-2xl md:text-[24px] mb-2">
            {data.heading}
          </p>
          <p className="text-[#616161] font-medium text-base sm:text-lg md:text-[20px]">
            {data.description}
          </p>
        </div>

        {/* ✅ Right Features*/}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          {data.features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col border-b border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200"
            >
              {/* Header */}
              <div
                className="flex justify-between items-center py-4 px-3 sm:px-4"
                onClick={() => toggleFeature(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-[#FFF2F2] rounded-md flex items-center justify-center">
                     {iconMap[feature.icon]}
                  </div>
                  <span className="font-semibold text-[16px] sm:text-[18px] text-[#000000]">
                    {feature.title}
                  </span>
                </div>
                <IconChevronRight
                  className={`h-5 w-5 sm:h-6 sm:w-6 text-[#000000] transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : "rotate-0"
                  }`}
                />
              </div>

              {/* Expandable */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 sm:px-4 pb-4 text-[#616161] text-sm sm:text-base">
                      {feature.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessSection;
