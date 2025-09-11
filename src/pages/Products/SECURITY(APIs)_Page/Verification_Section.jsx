import React from "react";
import { IconCircleCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.25, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Verification_Section({ data }) {
  return (
    <>
      {data.map((item, index) => {
        const isEven = index % 2 === 1; 

        return (
          <section
            key={item.id}
            className={`w-full py-18 ${isEven ? "bg-[#F7F7F7]" : "bg-[#FFFFFF]"}`}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-18 items-center px-6 md:px-12 lg:px-20">
              
              {/* Text Content */}
              <motion.div
                className={`
                  flex flex-col
                  ${isEven ? "md:order-2" : "md:order-1"}
                  order-1
                `}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-[40px] font-bold text-[#161C2D] leading-tight mb-4"
                >
                  {item.title}{" "}
                  {item.subtitle && (
                    <span className="text-[20px] text-[#F44336]">{item.subtitle}</span>
                  )}
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-[#616161] font-medium text-[20px] mb-6"
                >
                  {item.description}
                </motion.p>
                <ul className="space-y-4">
                  {item.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-3"
                    >
                      <IconCircleCheck className="w-6 h-6 text-[#F44336] mt-1" />
                      <span className="text-[#616161] text-[20px] font-medium">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Image */}
              <motion.div
                className={`
                  flex justify-center
                  ${isEven ? "md:order-1" : "md:order-2"}
                  order-2
                `}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="max-w-full h-auto"
                />
              </motion.div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default Verification_Section;
