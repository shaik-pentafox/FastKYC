import React from "react";
import {
  IconUserSearch,
  IconQrcode,
  IconId,
  IconUserCheck,
  IconMapPin,
  IconIdBadge2,
  IconHandClick,
  IconPlaneInflight,
  IconLink,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const iconMap = {
  Id: <IconId size={32} stroke={1.5} className="text-red-500" />,
  Check: <IconUserCheck size={32} stroke={1.5} className="text-red-500" />,
  MapPin: <IconMapPin size={32} stroke={1.5} className="text-red-500" />,
  Badge2: <IconIdBadge2 size={32} stroke={1.5} className="text-red-500" />,
  HandClick: <IconHandClick size={32} stroke={1.5} className="text-red-500" />,
  PlaneInflight: <IconPlaneInflight size={32} stroke={1.5} className="text-red-500" />,
  Link: <IconLink size={32} stroke={1.5} className="text-red-500" />,
  UserSearch: <IconUserSearch size={32} stroke={1.5} className="text-red-500" />,
  QRScan: <IconQrcode size={32} stroke={1.5} className="text-red-500" />,
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

function Offer_Section({ data }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-start">
        <h2 className="text-3xl md:text-[32px] font-medium text-[#212121] mb-10">
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
              className="flex flex-col items-start p-6 border border-[#FF725E] rounded-xl shadow-sm hover:shadow-md transition bg-[#FFFFFF]"
            >
              {iconMap[item.icon]}
              <h3 className="mt-4 text-[18px] font-bold text-[#1E1E1E]">{item.title}</h3>
              <p className="mt-2 text-[16px] font-medium text-[#424242]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Offer_Section;
