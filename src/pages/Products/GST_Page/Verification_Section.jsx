import React from "react";
import { IconCircleCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Verification_Section({ data }) {
  return (
    <section className="w-full bg-[#FFFFFF] py-18">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-20">
        
        {/* Left Side - Text */}
        <motion.div
          className="flex flex-col order-1 md:order-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-[40px] font-bold text-[#161C2D] mb-4"
          >
            {data.title}{" "}
            {data.subtitle && (
              <span className="text-[20px] text-[#F44336]">{data.subtitle}</span>
            )}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[#616161] font-medium text-[20px] mb-6"
          >
            {data.description}
          </motion.p>

          <ul className="space-y-3">
            {data.points.map((point, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-2"
              >
                <IconCircleCheck className="w-6 h-6 text-[#F44336] mt-0.5" />
                <span className="text-[#616161] text-[20px] font-medium">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="flex justify-center order-2 md:order-2"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={data.image}
            alt={data.title}
            className="max-w-full h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Verification_Section;
