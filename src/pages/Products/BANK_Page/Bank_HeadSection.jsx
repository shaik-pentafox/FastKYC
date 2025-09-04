import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Hero_Section({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen w-full py-6 relative z-50 overflow-x-hidden bg-white">
      {/* Header */}
      <header className="py-6 relative z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          <img src={data.header.logo} alt="FastKYC Logo" className="h-10" />

          {/* Desktop Nav */}
          <nav className="hidden min-[800px]:flex items-center gap-8 ml-10">
            {data.header.nav.map((item, idx) => (
              <div key={idx} className="relative group">
                {item.link.startsWith("http") ? (
                  <a
                    href={item.link}
                    rel="noopener noreferrer"
                    className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer flex items-center gap-1"
                  >
                    {item.label}
                    {item.dropdown && <IconChevronDown size={16} />}
                  </a>
                ) : (
                  <span className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer flex items-center gap-1">
                    {item.label}
                    {item.dropdown && <IconChevronDown size={16} />}
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}

          <div className="hidden min-[800px]:flex items-center gap-6">
            {data.header.actions.map((btn, i) => (
              <Link
                key={i}
                to={btn.link}
                className={
                  btn.primary
                    ? "border border-[#F44336] h-10 flex items-center justify-center bg-[#F44336] text-white px-5 rounded-[8px] text-[16px] font-medium hover:opacity-90 transition"
                    : "h-10 flex items-center justify-center border border-[#F44336] px-5 rounded-[8px] text-[16px] font-medium text-[#F44336] hover:bg-[#F44336] hover:text-white transition"
                }
              >
                {btn.text}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="min-[800px]:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <IconX size={28} className="text-black cursor-pointer" />
              ) : (
                <IconMenu2 size={28} className="text-black cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-white text-[#1E1E1E] z-50 flex flex-col justify-center items-center gap-8 md:hidden"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-[#F44336] rounded-full border border-[#F44336] p-2"
              >
                <IconX size={28} className="cursor-pointer" />
              </button>

              <ul className="flex flex-col gap-6 text-2xl font-medium text-center">
                {data.header.nav.map((item, idx) => (
                  <li key={idx} className="cursor-pointer">
                    {item.link.startsWith("http") ? (
                      <a href={item.link} className="text-[#1E1E1E]">
                        {item.label}
                      </a>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.h1
            className="text-4xl md:text-[48px] font-bold text-[#1E1E1E] leading-tight"
            variants={itemVariants}
          >
            {data.hero.heading}
          </motion.h1>

          <motion.div
            className="flex flex-col items-center gap-4 max-w-lg text-left"
            variants={itemVariants}
          >
            <p className="text-[#616161] font-medium text-[20px]">{data.hero.description}</p>
            <p className="text-[#616161] font-medium text-[20px]">{data.hero.description2}</p>
          </motion.div>
          <motion.div className="flex flex-wrap gap-4 pt-4 h-10" variants={itemVariants}>
            {data.hero.buttons.map((btn, i) => (
              <Link key={i} to={btn.link} className={btn.style}>
                {btn.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={data.hero.image}
            alt="KYC Verification"
            className="w-full max-w-lg object-contain drop-shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* Company Logos */}
      <section className="w-full py-10">
        <motion.div
          className="overflow-hidden w-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-30%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-12">
                {data.companiesLogos.map((logo, idx) => (
                  <motion.img
                    key={`${i}-${idx}`}
                    src={logo}
                    alt={`Company ${idx + 1}`}
                    className="h-8 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero_Section;
