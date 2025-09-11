import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { IconMenu2, IconX, IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import icon from "../../assets/Images/Why_FastKYC/Star1.png";
import icon2 from "../../assets/Images/Why_FastKYC/Star2.png";
import icon3 from "../../assets/Images/Why_FastKYC/Star3.png";
import icon4 from "../../assets/Images/Why_FastKYC/Star4.png";
import icon5 from "../../assets/Images/Why_FastKYC/Star5.png";

function FastKYC_HeadSection({ data }) {
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
    <>
      <div className="min-h-screen w-full py-6 relative z-50 overflow-x-hidden bg-white">
       
        <motion.section
          className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-38 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Decorative Stars */}
          <img src={icon} alt="star" className="absolute top-10  w-7 h-7 left-156" />
          <img src={icon2} alt="star" className="absolute top-20 right-20 w-8 h-8 " />
          <img src={icon3} alt="star" className="absolute bottom-16 left-24 w-7 h-7" />
          <img src={icon4} alt="star" className="absolute top-1/2 left-3 w-7 h-7" />
          <img src={icon5} alt="star" className="absolute bottom-10 right-10 w-12 h-12" />

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
      </div>
    </>
  );
}

export default FastKYC_HeadSection;
