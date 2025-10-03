import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  IconMenu2,
  IconX,
  IconChevronRight,
  IconChevronLeft,
  IconReceiptTax,
  IconCloudLock,
  IconBuildingBank,
  IconScan,
  IconId,
  IconMessage,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import { CheckIcon } from "@mantine/core";
import useBodyScrollLock from "../../../ui/useBodyScrollLock"

const iconMap = {
  Tax: <IconReceiptTax size={28} stroke={1.5} />,
  Lock: <IconCloudLock size={28} stroke={1.5} />,
  Bank: <IconBuildingBank size={28} stroke={1.5} />,
  Scan: <IconScan size={28} stroke={1.5} />,
  Id: <IconId size={28} stroke={1.5} />,
  Message: <IconMessage size={28} stroke={1.5} />
};

function WaKyc_HeadSection({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const [isSticky, setIsSticky] = useState(false);
  const controls = useAnimation();
  const dropdownRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(false);
    setShowNavbar(true);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsSticky(true);
        setShowNavbar(currentScrollY < lastScrollY.current);
      } else {
        setIsSticky(false);
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


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

  //Lock body scroll when sidebar open  
  useBodyScrollLock(menuOpen);

  // Animation Variants
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
    <div className="min-h-auto w-full py-6 relative z-50 overflow-x-hidden bg-white">
      {/* ✅ Header */}
      <header
        className={`w-full top-0 z-[100] fixed transition-transform duration-300 transform
        ${isSticky && showNavbar ? "bg-white py-6 shadow-md" : "bg-transparent py-12 shadow-none"}
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          <Link to="/">
            <img src={data.header.logo} alt="Bank Logo" className="h-10" />
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden min-[800px]:flex items-center gap-8 ml-10 relative">
            {data.header.nav.map((item, idx) => {
              if (item.dropdown) {
                const dropdownItems =
                  item.label === "Products"
                    ? data.products_nav
                    : item.label === "Solution"
                      ? data.solution_nav
                      : [];

                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {/* Top nav label */}
                    <div className="flex items-center gap-1 cursor-pointer text-[#1E1E1E] text-[16px] font-medium">
                      {item.label}
                    </div>

                    {/* Dropdown menu */}
                    <AnimatePresence>
                      {openDropdown === item.label && dropdownItems.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-lg rounded-[20px] p-6
                  ${item.label === "Products"
                              ? "w-[712px] grid grid-cols-2 gap-5"
                              : "w-[712px] grid grid-cols-2 gap-5"} 
                  z-50 border border-[#F44336]`}
                        >

                          {dropdownItems.map((d, i) => {
                            const content = (
                              <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                                <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl bg-[#F44336]/10 text-[#F44336]">
                                  {d.icon ? (
                                    iconMap[d.icon]
                                  ) : (
                                    d.image && (
                                      <img
                                        src={d.image}
                                        alt={d.title}
                                        className="w-6 h-6 object-contain"
                                      />
                                    )
                                  )}
                                </div>
                                <div>
                                  <h2 className="font-medium text-[#212121]">{d.title}</h2>
                                  <p className="text-[#616161] font-medium">{d.desc}</p>
                                </div>
                              </div>
                            );

                            return (
                              <div key={i}>
                                {d.external ? (
                                  <a href={d.link} target="_blank" rel="noopener noreferrer">
                                    {content}
                                  </a>
                                ) : (
                                  <Link to={d.link}>{content}</Link>
                                )}
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else if (item.external) {
                return (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer"
                  >
                    {item.label}
                  </a>
                );
              } else {
                return (
                  <Link
                    key={idx}
                    to={item.link}
                    className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer"
                  >
                    {item.label}
                  </Link>
                );
              }
            })}
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
            className="fixed inset-0 bg-white z-[200] flex flex-col w-full h-full"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center p-6 border-b shrink-0">
              <Link to="/">
                <img src={data.header.logo} alt="Bank Logo" className="h-9" />
              </Link>
              <button onClick={() => setMenuOpen(false)}>
                <IconX size={28} className="text-gray-600 cursor-pointer" />
              </button>
            </div>

            {/* Main Menu (Mobile) */}
            <div className="flex-1 overflow-y-auto">
              {submenu === null && (
                <div className="flex flex-col gap-6 p-6 text-lg font-medium">
                  {data.header.nav.map((item, idx) =>
                    item.dropdown ? (
                      <span
                        key={idx}
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setSubmenu(item.label.toLowerCase())} // ✅ handles both "products" and "solution"
                      >
                        {item.label} <IconChevronRight size={20} />
                      </span>
                    ) : item.external ? (
                      <a
                        key={idx}
                        href={item.link}
                        target="_blank"
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
                <div className="flex flex-col p-6 h-full">
                  <button
                    className="flex items-center gap-2 text-gray-600 mb-6 cursor-pointer shrink-0"
                    onClick={() => setSubmenu(null)}
                  >
                    <IconChevronLeft size={20} />
                  </button>
                  <h3 className="text-[#F44336] font-medium text-lg mb-4 shrink-0">Products</h3>

                  <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                    <div className="flex flex-col gap-5">
                      {data.products_nav.map((p, i) => (
                        <Link
                          key={i}
                          to={p.link}
                          className="flex items-center gap-4 cursor-pointer"
                          onClick={() => setMenuOpen(false)}
                        >
                          <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl bg-[#FFF5F5] text-[#F44336]">
                            {iconMap[p.icon]}
                          </div>
                          <div>
                            <h2 className="font-medium text-[#212121]">{p.title}</h2>
                            <p className="text-[#616161] font-medium">{p.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Solution Submenu (Mobile) */}
              {submenu === "solution" && (
                <div className="flex flex-col p-6 h-full">
                  {/* Back Button */}
                  <button
                    className="flex items-center gap-2 text-gray-600 mb-6 cursor-pointer shrink-0"
                    onClick={() => setSubmenu(null)}
                  >
                    <IconChevronLeft size={20} />
                  </button>

                  {/* Heading */}
                  <h3 className="text-[#F44336] font-medium text-lg mb-4 shrink-0">Solution</h3>

                  {/* Scrollable solution items */}
                  <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                    <div className="flex flex-col gap-5">
                      {data.solution_nav.map((s, i) => {
                        const content = (
                          <div className="flex items-center gap-4 cursor-pointer">
                            <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl bg-[#FFF5F5] text-[#F44336]">
                              {s.icon
                                ? iconMap[s.icon]
                                : s.image && <img src={s.image} alt={s.title} className="w-6 h-6 object-contain rounded-full" />}
                            </div>
                            <div>
                              <h2 className="font-medium text-[#212121]">{s.title}</h2>
                              <p className="text-[#616161] font-medium">{s.desc}</p>
                            </div>
                          </div>
                        );

                        return (
                          <div key={i} onClick={() => setMenuOpen(false)}>
                            {s.external ? (
                              <a href={s.link} target="_blank" rel="noopener noreferrer">
                                {content}
                              </a>
                            ) : (
                              <Link to={s.link}>{content}</Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-38 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Content */}
        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-[48px] font-bold leading-tight"
            variants={itemVariants}
          >
            <span className="text-[#1E1E1E] font-bold">
              {data.hero.heading_before}
            </span>

            <img
              src={data.hero.image2}
              alt="WhatsApp Icon"
              className="inline-block mx-2 lg:mx-3 w-8 sm:w-10 md:w-[48px] h-auto align-middle"
            />

            <span className="text-[#2AB73F] font-bold">
              {data.hero.heading_after}
            </span>
          </motion.h1>

          <motion.p
            className="text-[#616161] font-medium text-[20px] max-w-lg"
            variants={itemVariants}
          >
            {data.hero.subtext}
          </motion.p>
          <motion.div variants={itemVariants}>
            <ul className="space-y-3 list-none">
              {data.hero.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-[#F44336] text-[20px] font-medium"
                >
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
            alt="Banking Illustration"
            className="w-full max-w-lg object-contain drop-shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* ✅ Company Logos */}
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

export default WaKyc_HeadSection;
