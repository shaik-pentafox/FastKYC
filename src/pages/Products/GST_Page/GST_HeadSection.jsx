import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconChevronDown,
  IconMenu2,
  IconX,
  IconChevronRight,
  IconChevronLeft,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function GST_HeadSection({ data, products_nav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close sidebar automatically when width ≥ 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setSubmenu(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    if (openDropdown) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

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
      {/* Navbar */}
      <header className="py-6 relative z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          <Link to="/">
            <img src={data.header.logo} alt="FastKYC Logo" className="h-10" />
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden min-[800px]:flex items-center gap-8 ml-10 relative">
            {data.header.nav.map((item, idx) =>
              item.dropdown ? (
                // Dropdown item
                <div
                  key={idx}
                  className="relative"
                  ref={dropdownRef}
                >
                  <div
                    className="flex items-center gap-1 cursor-pointer text-[#1E1E1E] text-[16px] font-medium"
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    {item.label}
                    <IconChevronDown size={16} />
                  </div>

                  {/* Products dropdown */}
                  <AnimatePresence>
                    {openDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-[35px] left-1/2 -translate-x-1/2 mt-2 
                        w-[712px] bg-white shadow-lg rounded-[20px] p-6 
                        grid grid-cols-2 gap-5 z-50 border border-[#F44336]"
                      >
                        <h3 className="col-span-2 text-[#F44336] font-medium text-[18px] p-2">
                          Products
                        </h3>
                        {products_nav.map((p, i) => (
                          <motion.div
                            key={i}
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: {
                                transition: {
                                  staggerChildren: 0.25,
                                  delayChildren: i * 0.4,
                                },
                              },
                            }}
                          >
                            <Link
                              to={p.link}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                              onClick={() => setOpenDropdown(false)}
                            >
                              <motion.img
                                src={p.icon}
                                alt={p.title}
                                className="w-12 h-12"
                                variants={{
                                  hidden: { opacity: 0, y: 30 },
                                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                                }}
                              />

                              <motion.div
                                variants={{
                                  hidden: { opacity: 0, y: 20 },
                                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                                }}
                              >
                                <p className="text-[16px] font-medium text-[#F44336]">{p.title}</p>
                                <p className="text-[18px] text-[#212121] font-medium">{p.desc}</p>
                              </motion.div>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.external ? (
                <a
                  key={idx}
                  href={item.link}
                  rel="noopener noreferrer"
                  className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={item.link}
                  className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden min-[800px]:flex items-center gap-6">
            {data.header.actions.map((btn, i) => (
              <Link
                key={i}
                to={btn.link}
                className={
                  btn.primary
                    ? "h-10 flex items-center justify-center bg-[#F44336] text-white px-5 rounded-[8px] text-[16px] font-medium hover:opacity-90 transition"
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

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-[200] flex flex-col w-full"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center p-6 border-b">
                <img src={data.header.logo} alt="FastKYC Logo" className="h-9" />
                <button onClick={() => setMenuOpen(false)}>
                  <IconX size={28} className="text-gray-600 cursor-pointer" />
                </button>
              </div>

              {/* Main Menu (Mobile) */}
              {submenu === null && (
                <div className="flex flex-col gap-6 p-6 text-lg font-medium">
                  {data.header.nav.map((item, idx) =>
                    item.dropdown ? (
                      <span
                        key={idx}
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setSubmenu("products")}
                      >
                        {item.label} <IconChevronRight size={20} />
                      </span>
                    ) : item.external ? (
                      <a
                        key={idx}
                        href={item.link}
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={idx}
                        to={item.link}
                        className="cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              )}

              {/* Products Submenu (Mobile) */}
              {submenu === "products" && (
                <div className="flex flex-col p-6">
                  <button
                    className="flex items-center gap-2 text-gray-600 mb-6 cursor-pointer"
                    onClick={() => setSubmenu(null)}
                  >
                    <IconChevronLeft size={20} /> Back
                  </button>
                  <h3 className="text-[#F44336] font-medium text-lg mb-4">
                    Products
                  </h3>
                  <div className="flex flex-col gap-5">
                    {products_nav.map((p, i) => (
                      <motion.div
                        key={i}
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: { staggerChildren: 0.2, delayChildren: i * 0.4 },
                          },
                        }}
                      >
                        <Link
                          to={p.link}
                          className="flex items-center gap-4 cursor-pointer"
                          onClick={() => setMenuOpen(false)}
                        >
                          <motion.img
                            src={p.icon}
                            alt={p.title}
                            className="w-12 h-12"
                            variants={{
                              hidden: { opacity: 0, x: 20 },
                              visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                            }}
                          />

                          <motion.div
                            variants={{
                              hidden: { opacity: 0, x: 20 },
                              visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                            }}
                          >
                            <p className="font-medium text-[#F44336]">{p.title}</p>
                            <p className="font-medium text-[#212121] text-[18px]">{p.desc}</p>
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
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
        {/* Left */}
        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.h1
            className="text-4xl md:text-[48px] font-bold text-[#1E1E1E] leading-tight"
            variants={itemVariants}
          >
            {data.hero.heading}
          </motion.h1>

          <motion.p
            className="text-[#616161] font-medium text-[20px] max-w-lg"
            variants={itemVariants}
          >
            {data.hero.subtext}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4 h-10"
            variants={itemVariants}
          >
            {data.hero.buttons.map((btn, i) => (
              <Link key={i} to={btn.link} className={btn.style}>
                {btn.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={data.hero.image?.src}
            alt={data.hero.image?.alt}
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
              x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-12">
                {data.hero.companiesLogos?.map((logo, idx) => (
                  <motion.img
                    key={`${i}-${idx}`}
                    src={logo}
                    alt={`Bank ${idx + 1}`}
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

export default GST_HeadSection;
