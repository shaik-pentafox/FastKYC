import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus, IconMinus } from "@tabler/icons-react";

function FAQ({data}) {
  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-[48px] font-bold mb-8 text-left">
          Frequently asked questions (FAQs)
        </h2>

        {/* FAQ List */}
        <div className="space-y-4 sm:space-y-6 md:space-y-12">
          {data.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 font-medium text-lg sm:text-xl md:text-[20px]"
            >
              {/* Question*/}
              <button
                className="w-full flex justify-between items-center text-left text-gray-800 hover:text-red-500 transition-colors cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1 pr-4">{item.question}</span>
                <span className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 bg-white text-red-500 transition-all cursor-pointer">
                  {openIndexes.includes(index) ? (
                    <IconMinus size={20} />
                  ) : (
                    <IconPlus size={20} />
                  )}
                </span>
              </button>

              {/* Answer with animation */}
              <AnimatePresence initial={false}>
                {openIndexes.includes(index) && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 text-gray-700 text-base sm:text-lg md:text-[18px] leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
