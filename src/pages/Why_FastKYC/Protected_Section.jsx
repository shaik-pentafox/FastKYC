import React from "react";
import { motion } from "framer-motion";
import {
  IconRosetteDiscountCheck,
  IconLockAccess,
  IconShieldLock,
  IconTrash,
  IconUserShield,
  IconAlertTriangle,
} from "@tabler/icons-react";

import Contact from "../Contact";

const iconMap = {
  Check: IconRosetteDiscountCheck,
  Lock: IconLockAccess,
  Shield: IconShieldLock,
  Trash: IconTrash,
  UserShield: IconUserShield,
  Triangle: IconAlertTriangle,
};

function Protected_Section({ data, contact_data }) {
  const slideUp = {
    hidden: { opacity: 0, y: 55 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Heading */}
          <div className="flex-1 text-left ">
            <p className="text-[#F44336] font-medium text-xl sm:text-2xl md:text-[24px] mb-5">
              {data.heading}
            </p>
            <p className="text-[#212121] font-medium text-2xl sm:text-[28px] md:text-[32px] leading-snug lg:w-2/3">
              {data.subheading}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 lg:pt-12">
            {data.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <motion.div
                  key={feature.id}
                  className="rounded-[30px] p-6 lg:p-8 shadow-sm hover:shadow-md transition"
                  style={{ backgroundColor: "#FFEEEE" }}
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                >
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 flex items-center justify-center mb-3">
                      {IconComponent && <IconComponent size={36} color="#E20303" />}
                    </div>
                    <h4 className="font-bold text-lg lg:text-[18px] text-[#1E1E1E]">
                      {feature.title}
                    </h4>
                    <p className="mt-3 font-medium text-base lg:text-[16px] text-[#424242]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact data={contact_data} />
    </>
  );
}

export default Protected_Section;
