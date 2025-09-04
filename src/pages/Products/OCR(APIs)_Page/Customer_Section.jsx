import React from "react";
import {
  IconHeart,
  IconCurrencyRupee,
  IconBriefcase,
  IconCreditCard,
  IconFileCertificate,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const iconMap = {
  Heart: <IconHeart size={32} stroke={1.5} className="text-red-500" />,
  CurrencyRupee: <IconCurrencyRupee size={32} stroke={1.5} className="text-red-500" />,
  Briefcase: <IconBriefcase size={32} stroke={1.5} className="text-red-500" />,
  CreditCard: <IconCreditCard size={32} stroke={1.5} className="text-red-500" />,
  FileCertificat: <IconFileCertificate size={32} stroke={1.5} className="text-red-500" />,
};

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

function Customer_Section({ data }) {
  return (
    <section className="bg-[#F7F7F7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-start">
        {/* Heading */}
        <h2 className="text-3xl md:text-[40px] font-bold text-[#000000] mb-10">
          {data.heading}
        </h2>

        {/* Features Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="flex flex-col items-start p-6 border border-[#FF6A65] rounded-xl shadow-sm hover:shadow-md transition bg-[#FFFFFF]"
            >
              {iconMap[item.icon]}
              <h3 className="mt-4 text-[24px] font-medium text-[#FF725E]">{item.title}</h3>
              <p className="mt-2 text-[16px] font-medium text-[#000000]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Customer_Section;
