import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconMenu2,
  IconX,
  IconChevronRight,
  IconChevronLeft,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Navbar({ data, products_nav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const [buttonText, setButtonText] = useState(data.cta.textDesktop);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
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


  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setButtonText(
        window.innerWidth < 768 ? data.cta.textMobile : data.cta.textDesktop
      );
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setSubmenu(null);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

  // Handle scroll → detect sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
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

  // Prevent scroll when sidebar open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
  <header
  className={`fixed top-0 w-full z-[100] bg-white shadow-md py-6 transition-transform duration-300 transform
    ${showNavbar ? "translate-y-0" : "-translate-y-full"}
  `}
>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={data.image}
              alt="FastKYC Logo"
              className="h-10 cursor-pointer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden min-[800px]:flex items-center gap-8 ml-10 relative">
            <span className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer">
              Why FastKYC
            </span>

            {/* Products Dropdown */}
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
                    className="absolute top-full left-0 mt-3 
                      w-[712px] bg-white shadow-lg rounded-[20px] p-6 
                      grid grid-cols-2 gap-5 z-50 border border-[#F44336]"
                  >
                    <h3 className="col-span-2 text-[#F44336] font-medium text-[18px] p-2">
                      Products
                    </h3>
                    {products_nav.map((p, i) => (
                      <div key={i}>
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
                          <div>
                            <p className="text-[18px] font-medium text-[#F44336]">
                              {p.title}
                            </p>
                            <p className="text-[18px] text-[#212121] font-medium">
                              {p.desc}
                            </p>
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

            <a href="https://pentafox.in/" rel="noopener noreferrer">
              <span className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer">
                Company
              </span>
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden min-[800px]:flex items-center gap-6">
            <Link
              to="/Login"
              className="h-10 flex items-center justify-center border border-[#F44336] px-5 rounded-[8px] text-[16px] font-medium text-[#F44336] hover:bg-[#F44336] hover:text-white transition"
            >
              Sign in
            </Link>
            <Link
              to={data.cta.link}
              className="h-10 flex items-center justify-center bg-[#F44336] text-white px-5 rounded-[8px] text-[16px] font-medium hover:opacity-90 transition"
            >
              {buttonText}
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

      {/* 👇 Spacer to avoid jump */}
      {isSticky && <div className="h-[72px] md:h-[96px]"></div>}

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
              <img src={data.image} alt="FastKYC Logo" className="h-9" />
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
                    <Link
                      key={i}
                      to={p.link}
                      className="flex items-center gap-4 cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      <motion.img
                        src={p.icon}
                        alt={p.title}
                        className="w-12 h-12"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div>
                        <p className="font-medium text-[#F44336] text-[18px]">
                          {p.title}
                        </p>
                        <p className="font-medium text-[#212121] text-[18px]">
                          {p.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
