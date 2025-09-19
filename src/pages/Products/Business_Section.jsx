import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconDatabase,
  IconUser,
  IconCode,
  IconChevronRight,
  IconNotesOff,
  IconAlertTriangle,
  IconHeart,
  IconHourglass,
  IconWorld,
} from "@tabler/icons-react";

// ✅ Shared Icon Map
const iconMap = {
  Hourglass: <IconHourglass size={24} className="text-[#F44336]" stroke={1.5} />,
  Heart: <IconHeart size={24} className="text-[#F44336]" stroke={1.5}/>,
  World: <IconWorld size={24} className="text-[#F44336]" stroke={1.5}/>,
  Database: <IconDatabase className="h-6 w-6 sm:h-7 sm:w-7 text-[#FF725E]" stroke={1.5} />,
  FileOff: <IconNotesOff className="h-6 w-6 sm:h-7 sm:w-7 text-[#FF725E]" stroke={1.5}/>,
  User: <IconUser className="h-6 w-6 sm:h-7 sm:w-7 text-[#FF725E]" stroke={1.5}/>,
  Triangle: <IconAlertTriangle className="h-6 w-6 sm:h-7 sm:w-7 text-[#FF725E]" stroke={1.5}/>,
  Code: <IconCode className="h-6 w-6 sm:h-7 sm:w-7 text-[#FF725E]" stroke={1.5}/>,
};

// ✅ Reusable Section
function BusinessSection({ data, layout = "cards" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 px-6 md:px-12 lg:px-20">
        {/* ✅ Left Content */}
        <div className="flex-1 space-y-4">
          <p className="text-[#F44336] font-medium text-xl sm:text-2xl md:text-[24px]">
            {data.heading}
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold text-[#212121]">
            {data.subheading}
          </h2>
          <p className="text-[#616161] font-medium text-base sm:text-lg md:text-[20px]">
            {data.description}
          </p>
        </div>

        {/* ✅ Right Side */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Right Side: Cards */}
          {layout === "cards" &&
            data.features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start bg-red-50 p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-[#F44336] flex items-center justify-center rounded-md">
                  {iconMap[feature.icon]}
                </div>
                <div className="ml-4">
                  <p className="text-black font-medium text-[16px] leading-snug">
                    {feature.title}
                  </p>
                  <p className="text-[#424242] font-medium text-[16px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

          {/* Right Side: FAQ */}
          {layout === "faq" &&
            data.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col border-b border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-200"
              >
                {/* Header */}
                <div
                  className="flex justify-between items-center py-4 px-4"
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
                    className={`h-6 w-6 text-[#000000] transform transition-transform duration-300 ${
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
                      <div className="px-4 pb-4 text-[#616161] text-sm sm:text-base">
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
