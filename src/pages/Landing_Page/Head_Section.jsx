import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  IconChevronRight,
  IconChevronLeft,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { Link} from "react-router-dom";

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

function Head_Section({ data, products_nav }) {
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
      setButtonText(
        window.innerWidth < 768 ? data.cta.textMobile : data.cta.textDesktop
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeedFactor((prev) => Math.min(prev + 0.01, 5));
    }, 100);
    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen w-full py-6 relative z-50 overflow-x-hidden">
      <img src={data.bg_image} alt="Border Decoration" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      <header
        className={`w-full top-0 z-[100] fixed transition-transform duration-300 transform
    ${isSticky && showNavbar ? "bg-white py-6" : "bg-transparent py-12 shadow-none"}
    ${showNavbar ? "translate-y-0" : "-translate-y-full"}
  `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src={data.image} alt="FastKYC Logo" className="h-10 cursor-pointer" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden min-[800px]:flex items-center gap-8 ml-10 relative">
            <span className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer">
              Why FastKYC
            </span>

            {/* Desktop Products Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
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
                    className="absolute left-3/4 -translate-x-1/2 mt-[5.5px]
           w-[712px] bg-white shadow-lg rounded-[20px] p-6 
           grid grid-cols-2 gap-5 z-50 border border-[#F44336]"
                  >
                    {products_nav.map((p, i) => (
                      <div
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
                          />

                          <div
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                            }}
                          >
                            {/* <p className="text-[17px] font-medium text-[#212121]">{p.title}</p>
                            <p className="text-[16px] text-[#616161] font-medium">{p.desc}</p> */}
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


            <span className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer">
              Resources
            </span>

            <a href="https://pentafox.in/" target="_blank" rel="noopener noreferrer">
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
            className="fixed inset-0 bg-white z-[200] flex flex-col w-full"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center p-6 border-b">
              <Link to="/">
                <img src={data.image} alt="FastKYC Logo" className="h-9 cursor-pointer" />
              </Link>

              <button onClick={() => setMenuOpen(false)}>
                <IconX size={28} className="text-gray-600 cursor-pointer" />
              </button>
            </div>

            {/* Main Menu (Mobile) */}
            {submenu === null && (
              <div className="flex flex-col gap-6 p-6 text-lg font-medium">
                <span className="cursor-pointer">Why FastKYC</span>
                <span
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setSubmenu("products")}
                >
                  Products <IconChevronRight size={20} />
                </span>
                <span className="cursor-pointer">Resources</span>
                <a href="https://pentafox.in/" rel="noopener noreferrer">
                  <span className="cursor-pointer">Company</span>
                </a>
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
                  {products_nav.map((p, i) => (
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
        className="text-center text-black relative overflow-hidden pt-32"
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
                  d="M10 250 H150 H250 V200 V50 Q250 20, 280 20 H345"
                  color="#E20303"
                  className="top-[196px]"
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
                  className="mt-[83px] left-[636px]"
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
                  className="top-[124px] left-[1036px]"
                />
              </motion.div>
            </div>
          )}


          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(239,68,68,0.3)_0%,_transparent_78%)] pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white/100 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white/100 to-transparent pointer-events-none"></div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 / speedFactor }}
            className="flex flex-wrap min-[800px]:flex-nowrap justify-center gap-3 mb-6"
          >
            {data.buttons.map((btn, i) => (
              <button
                key={i}
                className="border border-[#00000066] text-black text-[14px] font-bold px-5 py-2 rounded-full  backdrop-blur-sm transition-transform duration-300 "
              >
                {btn}
              </button>
            ))}
          </motion.div>

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
              className="w-full text-center bg-[#F44336] text-white font-medium px-10 py-2 rounded-[8px] text-[16px] hover:bg-red-700 transition block h-10"
            >
              {buttonText}
            </Link>
          </motion.div>

          {/* Cards */}
          <div className="relative h-[600px] mt-[-130px] hidden min-[800px]:block">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative h-full">
              {[data.cards[0]].map((card, i) => (
                <motion.div key={i} variants={card1} className="absolute top-[15%] w-72 bg-white/90 backdrop-blur-md text-black border border-[#00000033] shadow-lg rounded-3xl p-4 py-2 flex items-center gap-4 cursor-pointer">
                  <motion.img src={card.img} alt={card.title} className="h-13" initial={{ scale: 0.8, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1, duration: 1.8 }} />
                  <div>
                    <p className="text-[16px] font-normal text-start">{card.title}</p>
                    <p className="text-[18px] font-bold mt-1 text-start text-[#333333]">{card.value}</p>
                  </div>
                </motion.div>
              ))}
              {[data.cards[1]].map((card, i) => (
                <motion.div key={i} variants={card2} className="absolute left-[3px] top-[36%] w-72 bg-white/90 backdrop-blur-md text-black border border-gray-200 shadow-lg rounded-3xl p-4 flex items-center gap-4 cursor-pointer">
                  <motion.img src={card.img} alt={card.title} className="h-13" initial={{ scale: 0.8, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1.3, duration: 1.8 }} />
                  <div>
                    <p className="text-[16px] font-medium text-start text-[#1E1E1E]">{card.title}</p>
                    <p className="text-[18px] font-bold mt-1 text-start text-[#333333]">{card.value}</p>
                  </div>
                </motion.div>
              ))}
              {[data.cards[2]].map((card, i) => (
                <motion.div key={i} variants={card3} className="absolute mt-[21px] right-[-40px] w-64 bg-white/90 backdrop-blur-md text-black border border-gray-200 shadow-lg rounded-3xl p-5 cursor-pointer">
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
                  <p className="font-bold text-start text-[18px] mt-1 text-[#333333]">{card.value}</p>
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