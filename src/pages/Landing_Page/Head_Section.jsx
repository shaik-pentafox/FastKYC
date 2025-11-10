import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  IconChevronRight,
  IconChevronLeft,
  IconMenu2,
  IconX,
  IconReceiptTax,
  IconCloudLock,
  IconBuildingBank,
  IconScan,
  IconId,
  IconMessage,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

import { Link, useLocation } from "react-router-dom";
import TypingWord from "../../ui/TypingWorld";
import useBodyScrollLock from "../../ui/useBodyScrollLock";

const iconMap = {
  Tax: <IconReceiptTax size={28} stroke={1.5} />,
  Lock: <IconCloudLock size={28} stroke={1.5} />,
  Bank: <IconBuildingBank size={28} stroke={1.5} />,
  Scan: <IconScan size={28} stroke={1.5} />,
  Id: <IconId size={28} stroke={1.5} />,
  Message: <IconMessage size={28} stroke={1.5} />,
  Whatsapp: <IconBrandWhatsapp size={28} stroke={1.5} />
};

const RunnerPath = ({ d, duration = 6, offset = 0, className, color = "#E20303" }) => {
  const segmentLength = 180;

  return (
    <motion.svg
      className={`absolute left-0 w-full h-full pointer-events-none ${className || ""}`}
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`lineGradient-${color}-${offset}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.path
        d={d}
        stroke={`url(#lineGradient-${color}-${offset})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={`${segmentLength} ${segmentLength}`}
        animate={{
          strokeDashoffset: [0, -2 * segmentLength],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: offset,
        }}
      />
    </motion.svg>
  );
};

function Head_Section({ data, products_nav, solution_nav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [buttonText, setButtonText] = useState(data.cta.textDesktop);
  const [speedFactor, setSpeedFactor] = useState(1);
  const [showPaths, setShowPaths] = useState(true);

  const [isSticky, setIsSticky] = useState(false);
  const controls = useAnimation();
  const dropdownRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  //Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(false);
    setShowNavbar(true);
  }, [location.pathname]);

  //Navbar scroll behavior
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

  //Resize → update button text
  useEffect(() => {
    const handleResize = () => {
      setButtonText(
        window.innerWidth < 768 ? data.cta.textMobile : data.cta.textDesktop
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

  //Resize → close menu on desktop
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

  //Increase animation speed
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeedFactor((prev) => Math.min(prev + 0.01, 5));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  //Lock body scroll on sidebar open  
  useBodyScrollLock(menuOpen);

  //Resize → update text & close menu (duplicate)
  useEffect(() => {
    const handleResize = () => {
      setButtonText(window.innerWidth < 768 ? data.cta.textMobile : data.cta.textDesktop);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setSubmenu(null);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

  //Close dropdown on outside click  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 / speedFactor, delayChildren: 0.2 / speedFactor },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 / speedFactor, ease: "easeOut" } },
  };

  const card1 = {
    hidden: { opacity: 0, x: -80, y: 100 },
    show: { opacity: 1, x: 0, y: 0, transition: { delay: 0.1 / speedFactor, duration: 1.2 / speedFactor, ease: "easeOut" } },
  };
  const card2 = {
    hidden: { opacity: 0, x: -40, y: 100 },
    show: { opacity: 1, x: 0, y: 0, transition: { delay: 0.2 / speedFactor, duration: 1.2 / speedFactor, ease: "easeOut" } },
  };
  const card3 = {
    hidden: { opacity: 0, x: 60, y: 100 },
    show: { opacity: 1, x: 0, y: 0, transition: { delay: 0.3 / speedFactor, duration: 1.2 / speedFactor, ease: "easeOut" } },
  };

  return (
    <div className="min-h-auto w-full py-6 relative z-50 overflow-x-hidden bg-white">
      <img
        src={data.bg_image}
        alt="Border Decoration"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <header
        className={`w-full top-0 z-[100] fixed transition-transform duration-300 transform
        ${isSticky && showNavbar ? "bg-white py-6 shadow-md" : "bg-transparent py-12 shadow-none"}
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Logo */}
          <img
            src={data.image}
            alt="FastKYC Logo"
            className="h-10 cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />

          {/* Desktop Nav */}
          <nav className="hidden min-[800px]:flex items-center gap-8 ml-10 relative">
            {/* Desktop Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              {/* Header Item */}
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-[#1E1E1E] text-[16px] font-medium">
                  Products
                </span>
              </div>

              <AnimatePresence>
                {openDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 
                   w-[712px] bg-white shadow-lg rounded-[20px] p-6 
                   grid grid-cols-2 gap-5 z-50 border border-[#F44336]"
                  >
                    {products_nav.map((p, i) => (
                      <Link
                        key={i}
                        to={p.link}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                        onClick={() => setOpenDropdown(false)}
                      >
                        <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl bg-[#F44336]/10 text-[#F44336]">
                          {iconMap[p.icon]}
                        </div>
                        <div>
                          <h2 className="font-medium text-[#212121]">{p.title}</h2>
                          <p className="text-[#616161] font-medium">{p.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Solution Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSubmenu("solution")}
              onMouseLeave={() => setSubmenu(null)}
            >
              {/* Header Item */}
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-[#1E1E1E] text-[16px] font-medium">
                  Solution
                </span>
              </div>

              <AnimatePresence>
                {submenu === "solution" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2
                   w-[712px] bg-white shadow-lg rounded-[20px] p-6 
                   grid grid-cols-2 gap-5 z-50 border border-[#F44336]"
                  >
                    {solution_nav.map((s, i) => {
                      const content = (
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl bg-[#F44336]/10 text-[#F44336]">
                            {s.icon ? iconMap[s.icon] : s.image && (
                              <img src={s.image} alt={s.title} className="w-6 h-6" />
                            )}
                          </div>
                          <div>
                            <h2 className="font-medium text-[#212121]">{s.title}</h2>
                            <p className="text-[#616161] font-medium">{s.desc}</p>
                          </div>
                        </div>
                      );

                      return (
                        <div key={i}>
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <span className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer">
              <Link to="/resources">Resources</Link>
            </span>

            <a
              href="https://pentafox.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer">
                Company
              </span>
            </a>
          </nav>


          {/* Desktop Buttons */}
          <div className="hidden min-[800px]:flex items-center gap-6">
            <Link
              to="/login"
              className="h-10 flex items-center justify-center border border-[#F44336] px-5 rounded-[8px] text-[16px] font-medium text-[#F44336] hover:bg-[#F44336] hover:text-white transition"
            >
              Sign in
            </Link>
            <Link
              to={data.cta.link}
              className="h-10 flex items-center justify-center bg-[#F44336] text-white px-5 rounded-[8px] text-[16px] font-medium hover:bg-red-700 transition"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="min-[800px]:hidden">
            <button
              onClick={() => {
                setMenuOpen(true);
                setSubmenu(null);
              }}
            >
              <IconMenu2 size={28} className="text-black cursor-pointer" />
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
            {/* Top Bar (fixed) */}
            <div className="flex justify-between items-center p-6 border-b shrink-0">
              <img
                src={data.image}
                alt="FastKYC Logo"
                className="h-9 cursor-pointer"
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
              <button onClick={() => setMenuOpen(false)}>
                <IconX size={28} className="text-gray-600 cursor-pointer" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {submenu === null && (
                <div className="flex flex-col gap-6 p-6 text-lg font-medium">
                  <span
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setSubmenu("products")}
                  >
                    Products <IconChevronRight size={20} />
                  </span>

                  <span
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setSubmenu("solution")}
                  >
                    Solution <IconChevronRight size={20} />
                  </span>

                  <span className="cursor-pointer">
                    <Link to="/resources">Resources</Link>
                  </span>

                  <a href="https://pentafox.in/" rel="noopener noreferrer">
                    <span className="cursor-pointer">Company</span>
                  </a>
                </div>
              )}

              {/* Products Menu */}
              {submenu === "products" && (
                <div className="flex flex-col p-6 h-full">
                  <button
                    className="flex items-center gap-2 text-gray-600 mb-6 cursor-pointer shrink-0"
                    onClick={() => setSubmenu(null)}
                  >
                    <IconChevronLeft size={20} />
                  </button>

                  <h3 className="text-[#F44336] font-medium text-lg mb-4 shrink-0">
                    Products
                  </h3>

                  <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                    <div className="flex flex-col gap-5">
                      {products_nav.map((p, i) => (
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

              {/* Solution Menu */}
              {submenu === "solution" && (
                <div className="flex flex-col p-6 h-full">
                  <button
                    className="flex items-center gap-2 text-gray-600 mb-6 cursor-pointer shrink-0"
                    onClick={() => setSubmenu(null)}
                  >
                    <IconChevronLeft size={20} />
                  </button>

                  <h3 className="text-[#F44336] font-medium text-lg mb-4 shrink-0">
                    Solution
                  </h3>

                  <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                    <div className="flex flex-col gap-5">
                      {solution_nav.map((s, i) => {
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

      <motion.section
        className="text-center text-black relative overflow-hidden pt-30 lg:pt-26"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 ">
          {/* Runner Paths */}
          {showPaths && (
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <RunnerPath
                  d="M10 270 H150 H250 V220 V80 Q250 60, 280 60 H345"
                  color="#E20303"
                  className="top-[119px]"
                />

              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                <RunnerPath
                  d="M400 300 V360 Q400 380 420 380 H520 Q540 380 540 400 V440 Q540 460 545"
                  color="#E20303"
                  className="mt-[56px] left-[582px]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <RunnerPath
                  d="M100 300 V100 Q100 50 150 50 H258"
                  color="#E20303"
                  className="top-[124px] left-[986px]"
                />
              </motion.div>
            </div>
          )}


          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(239,68,68,0.3)_0%,_transparent_78%)] pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white/100 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white/100 to-transparent pointer-events-none"></div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 / speedFactor }}
            className="relative text-4xl min-[800px]:text-[48px] font-bold leading-tight mb-6 text-center text-[#1E1E1E]"
          >
            {data.heading.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 / speedFactor }}
            className="relative text-[#424242] text-[18px] max-w-2xl mx-auto mb-6 text-center font-medium"
          >
            {data.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 / speedFactor }}
            className="inline-block relative z-10"
          >
            <Link
              to={data.cta.link}
              className="w-full text-center bg-[#F44336] text-white font-medium px-10 py-2 rounded-[8px] text-[16px] hover:bg-red-700 transition block h-10 mt-2"
            >
              {buttonText}
            </Link>
          </motion.div>

          {/* Cards */}
          <div className="relative h-[600px] mt-[-130px] hidden min-[800px]:block">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative h-full">
              {[data.cards[0]].map((card, i) => (
                <motion.div key={i} variants={card1} className="absolute top-[17%] w-66 bg-white/90 backdrop-blur-md text-black border border-[#00000033] shadow-lg rounded-3xl p-4 py-2 flex items-center gap-4">
                  <motion.img src={card.img} alt={card.title} className="h-12" initial={{ scale: 0.8, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1, duration: 1.8 }} />
                  <div>
                    <p className="text-[16px] font-normal text-start">{card.title}</p>
                    <p className="text-[18px] font-bold mt-1 text-start text-[#333333]">{card.value}</p>
                  </div>
                </motion.div>
              ))}
              {[data.cards[1]].map((card, i) => (
                <motion.div key={i} variants={card2} className="absolute left-[3px] top-[33%] w-72 bg-white/90 backdrop-blur-md text-black border border-gray-200 shadow-lg rounded-3xl p-4 flex items-center gap-4 ">
                  <motion.img src={card.img} alt={card.title} className="h-13" initial={{ scale: 0.8, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1.3, duration: 1.8 }} />
                  <div>
                    <p className="text-[16px] font-medium text-start text-[#1E1E1E]">{card.title}</p>
                    <p className="text-[18px] font-bold mt-1 text-start text-[#333333]">{card.value}</p>
                  </div>
                </motion.div>
              ))}
              {[data.cards[2]].map((card, i) => (
                <motion.div key={i} variants={card3} className="absolute mt-[70px] right-[10px] w-64 bg-white/90 backdrop-blur-md text-black border border-gray-200 shadow-lg rounded-3xl p-5 ">
                  <div className="flex justify-between items-center mb-3">
                    <motion.img src={card.img} alt="status" className="h-8" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.1, type: "spring", damping: 22, stiffness: 40 }} />
                    <p className="font-medium text-[18px] text-[#1E1E1E]">{card.subTitle}</p>
                  </div>
                  <hr className="border-[#DCDCDC] mb-3 " />
                  <div className="flex -space-x-3 mb-3">
                    {card.avatars.map((i) => (
                      <motion.img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/40?img=${i}`} alt={`user-${i}`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2 + i * 0.7, type: "spring", damping: 22, stiffness: 40 }} />
                    ))}
                  </div>
                  <p className="font-medium text-start text-[16px] text-[#1E1E1E]">{card.title}</p>
                  <TypingWord
                    title2={card.title2}
                    title3={card.title3}
                    fixedText="Everywhere"
                    startDelay={2000}
                    speed={100}
                    pauseDelay={1500}
                    className="font-medium text-start text-[16px] text-[#1E1E1E]"
                  />

                  {card.value && (
                    <p className="font-bold text-start text-[18px] mt-1 text-[#333333]">{card.value}</p>
                  )}

                  <motion.div
                    className="w-full bg-gray-300 rounded-full h-2 mt-3 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.3 }}
                  >
                    <motion.div
                      className="bg-red-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${card.progress}%` }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        delay: 2.5
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          className="overflow-hidden w-full py-6 relative mt-10 min-[800px]:mt-[-262px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          {/* Fade overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-30%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-12">
                {data.banks.map((logo, idx) => (
                  <motion.img
                    key={`${i}-${idx}`}
                    src={logo}
                    alt={`Bank ${idx + 1}`}
                    className="h-8 w-auto object-contain hover:scale-105 grayscale-0 transition"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>

      </motion.section>
    </div>

  );
}

export default Head_Section;