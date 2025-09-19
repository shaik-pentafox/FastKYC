import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus, IconMinus } from "@tabler/icons-react";

function FAQ({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-[48px] font-bold mb-8 text-left text-[#161C2D]">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-5 sm:space-y-7 md:space-y-9">
          {data.map((item, index) => (
            <motion.div
              key={index}
              layout
              className="border-b border-gray-200 pb-4 font-medium text-lg sm:text-xl md:text-[20px]"
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center text-left text-gray-800 hover:text-red-500 transition-colors cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1 pr-4">{item.question}</span>
                <span className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 bg-white text-red-500 transition-all">
                  {openIndex === index ? <IconMinus size={20}/> : <IconPlus size={20}/>}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 text-[#424242] text-base sm:text-lg md:text-[18px] leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
