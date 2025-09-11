import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { IconMenu2, IconX, IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { CheckIcon } from "@mantine/core";

function OCR_HeadSection({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const [isSticky, setIsSticky] = useState(false);
  const controls = useAnimation();
  const dropdownRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;


      if (currentScrollY > 50) {
        setIsSticky(true);

        if (currentScrollY > lastScrollY.current) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      } else {
        setIsSticky(false);
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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
  // Variants
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
      <header
        className={`w-full top-0 z-[100] fixed transition-transform duration-300 transform
    ${isSticky && showNavbar ? "bg-white py-6" : "bg-transparent py-12 shadow-none"}
    ${showNavbar ? "translate-y-0" : "-translate-y-full"}
  `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src={data.header.logo} alt="FastKYC Logo" className="h-10" />
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden min-[800px]:flex items-center gap-8 ml-10 relative">
            {data.header.nav.map((item, idx) =>
              item.dropdown ? (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer text-[#1E1E1E] text-[16px] font-medium">
                    {item.label}
                  </div>

                  {/* Products dropdown */}
                  <AnimatePresence>
                    {openDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-3/4 -translate-x-1/2 mt-[5.5px]
                                w-[712px] bg-white shadow-lg rounded-[20px] p-6 
                                grid grid-cols-2 gap-5 z-50 border border-[#F44336]"
                      >
                        {data.products_nav.map((p, i) => (
                          <div
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
                              <div
                                variants={{
                                  hidden: { opacity: 0, y: 20 },
                                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                                }}
                              >
                                <h2 className="font-medium text-[#212121]">{p.title}</h2>
                                <p className="text-[#616161] font-medium">{p.desc}</p>
                              </div>
                            </Link>
                          </div>
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
                  target="_blank"
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
                    ? "h-10 flex items-center justify-center bg-[#F44336] text-white px-5 rounded-[8px] text-[16px] font-medium hover:bg-red-700 transition"
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
      </header>

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
              <Link to='/'>
                <img src={data.header.logo} alt="FastKYC Logo" className="h-9" />
              </Link>
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
                  <IconChevronLeft size={20} />
                </button>
                <h3 className="text-[#F44336] font-medium text-lg mb-4">
                  Products
                </h3>
                <div className="flex flex-col gap-5">
                  {data.products_nav.map((p, i) => (
                    <div
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

                        <div
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                          }}
                        >
                          <h2 className="font-medium text-[#212121]">{p.title}</h2>
                          <p className="text-[#616161] font-medium">{p.desc}</p>
                        </div>
                      </Link>
                    </div>
                  ))}

                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-38 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Content */}
        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.h1
            className="text-4xl md:text-[48px] font-bold text-[#1E1E1E] leading-tight"
            variants={itemVariants}
          >
            {data.hero.title}
          </motion.h1>
          <motion.p
            className="text-[#616161] font-medium text-[20px] max-w-lg"
            variants={itemVariants}
          >
            {data.hero.description}
          </motion.p>
          <motion.p
            className="text-[#616161] font-medium text-[20px] max-w-lg"
            variants={itemVariants}
          >
            {data.hero.subtext}
          </motion.p>
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-[24px] text-[#212121] mb-3">
              {data.hero.includes_title}
            </h3>
            <ul className="space-y-3 list-none">
              {data.hero.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-[#616161] text-[20px] font-medium"
                >
                  <span className="flex items-center justify-center w-6 h-6">
                    <CheckIcon className="w-3 h-3 text-red-600" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="flex flex-wrap gap-4 pt-4 h-10" variants={itemVariants}>
            {data.hero.buttons.map((btn, i) => (
              <Link key={i} to={btn.link} className={btn.style}>
                {btn.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
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
      <section className="w-full py-10 -mt-25">
        <motion.div
          className="overflow-hidden w-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

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

export default OCR_HeadSection;
