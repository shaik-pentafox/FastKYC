import React from "react";
import { IconHeart, IconHourglass, IconWorld } from "@tabler/icons-react";
import { motion } from "framer-motion";

const iconMap = {
  "Hourglass":<IconHourglass size={24} />,
  "Heart":<IconHeart size={24} /> ,
  "World":<IconWorld size={24} />,
};
function Business_Section({data}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3, ease: "easeOut" },
    },
  };

  const topToBottom = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const bottomToTop = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 mb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Left Text */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.p
              variants={topToBottom}
              className="text-[#F44336] font-medium text-[24px]"
            >
              {data.headingSmall}
            </motion.p>
            <motion.h2
              variants={topToBottom}
              className="text-3xl md:text-[32px] font-bold leading-snug text-[#212121]"
            >
              {data.headingMain}
            </motion.h2>
            <motion.p
              variants={topToBottom}
              className="text-[#616161] text-[20px] font-medium"
            >
              {data.description}
            </motion.p>
          </motion.div>

          {/* Right Feature Cards*/}
          <motion.div
            className="space-y-6 mt-6 lg:mt-0"
            variants={containerVariants}
          >
            {data.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={iconMap[feature.icon]}
                title={feature.title}
                description={feature.description}
                variants={bottomToTop}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ✅ Feature Card 
const FeatureCard = ({ icon, title, description, variants }) => (
  <motion.div
    className="flex items-start bg-red-50 p-6 rounded-lg shadow-sm will-change-transform"
    variants={variants}
    whileHover={{
      scale: 1.03,
      transition: { duration: 0.25, ease: "easeOut" },
    }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-[#F44336] flex items-center justify-center rounded-md">
      {icon}
    </div>
    <div className="ml-4">
      <p className="text-black-900 font-medium text-[16px] leading-snug">
        {title}
      </p>
      <p className="text-[#424242] font-medium text-[16px] leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export default Business_Section;
