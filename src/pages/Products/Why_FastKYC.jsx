import React from "react";
import { motion } from "framer-motion";
import {
  IconCurrencyRupee,
  IconArrowsShuffle,
  IconDatabase,
  IconShield,
  IconCheck,
  IconAlertTriangle,
  IconTrendingUp,
  IconChecklist,
  IconWorld,
  IconMessageCircle,
  IconArrowsMaximize,
  IconShieldLock,
} from "@tabler/icons-react";

const iconMap = {
  Rupees: <IconCurrencyRupee size={28} stroke={1.5} />,
  Shuffle: <IconArrowsShuffle size={28} stroke={1.5} />,
  Database: <IconDatabase size={28} stroke={1.5} />,
  Shield: <IconShield size={28} stroke={1.5} />,
  ShieldLock:<IconShieldLock size={28} stroke={1.5}/>,
  Check: <IconCheck size={28} stroke={1.5} />,
  AlertTriangle: <IconAlertTriangle size={28} stroke={1.5} />,
  TrendingUp:<IconTrendingUp size={28} stroke={1.5} />,
  Checklist:<IconChecklist size={28} stroke={1.5} />,
  World:<IconWorld size={28} stroke={1.5} />,
  Message:<IconMessageCircle size={28} stroke={1.5} />,
  Arrows:<IconArrowsMaximize size={28} stroke={1.5} />,
};

function Why_FastKYC({ data }) {
  const dataVariant = {
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

  return (
    <section className="bg-gradient-to-r from-[#FFD8D8] to-[#FFFFFF] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h3 className="text-[#F44336] font-medium text-[24px] mb-2">
          {data.heading}
        </h3>
        <h2 className="text-2xl md:text-[32px] font-medium text-[#1E1E1E] mb-4">
          {data.subheading}
        </h2>
        <p className="text-[#424242] max-w-3xl text-[16px] font-medium mb-10">
          {data.description}
        </p>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={dataVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.features.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row md:items-start gap-4"
              variants={dataVariant}
            >
              {/* Icon with background box */}
              <motion.div variants={iconVariant} className="flex-shrink-0">
                <div className="w-12 h-12 rounded-[8px] bg-[#FFF5F5] flex items-center justify-center text-[#F44336] shadow-sm">
                  {iconMap[item.icon] || <IconCheck size={28} stroke={2} />}
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                variants={textVariant}
                className="flex flex-col ml-1"
              >
                <h4 className="text-[20px] md:text-[24px] font-medium text-[#1E1E1E]">
                  {item.title}
                </h4>
                <p className="text-[#424242] text-[16px] font-medium mt-2">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Why_FastKYC;
