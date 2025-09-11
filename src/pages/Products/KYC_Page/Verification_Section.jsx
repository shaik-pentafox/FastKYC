import React from "react";
import { IconCircleCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

function Verification_Section({ data }) {
  return (
    <>
      {data.map((item) => {
        const isOdd = item.id % 2 !== 0;

        const contentParentVariants = {
          hidden: { opacity: 0, y: isOdd ? -40 : 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              staggerChildren: 0.2,
            },
          },
        };

        const contentChildVariants = {
          hidden: { opacity: 0, y: isOdd ? -20 : 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          },
        };

        const imageVariants = {
          hidden: { opacity: 0, y: isOdd ? 40 : -40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
          },
        };

        return (
          <section
            key={item.id}
            className="w-full py-18"
            style={{ backgroundColor: item.bg }} 
          >
            <div
              className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-18 items-center px-6 md:px-12 lg:px-20 ${
                !isOdd ? "rounded-2xl p-10" : ""
              }`}
            >
              <motion.div
                className={`order-1 md:order-${isOdd ? "1" : "2"}`}
                variants={contentParentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <motion.h2
                  className="text-3xl md:text-[40px] font-bold text-[#161C2D] mb-4"
                  variants={contentChildVariants}
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  className="text-[#616161] font-medium text-[20px] mb-6"
                  variants={contentChildVariants}
                >
                  {item.description}
                </motion.p>

                <motion.ul className="space-y-3">
                  {item.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      variants={contentChildVariants}
                    >
                      <IconCircleCheck className="w-6 h-6 text-[#F44336] mt-0.5" />
                      <span className="text-[#616161] text-[20px] font-medium">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                className={`flex justify-center order-2 md:order-${
                  isOdd ? "2" : "1"
                }`}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
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
