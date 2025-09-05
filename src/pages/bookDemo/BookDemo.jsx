import { useState, useRef, useEffect } from "react";
import {
  IconCpu,
  IconShield,
  IconStar,
  IconX,
  IconMenu2,
  IconChevronDown,
  IconChevronRight,
  IconChevronLeft,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Footer";

const iconMap = {
  cpu: IconCpu,
  shield: IconShield,
  star: IconStar,
};

export default function BookDemo({ data, footerData }) {
  const [submit, setSubmit] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const { hero, form } = data;

  // Close dropdown when clicking outside
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

  return (
    <>
      <div className="min-h-screen w-full py-6 overflow-x-hidden bg-gradient-to-b from-white via-white to-red-100">
        {/* Header */}
        <header className="py-6 relative z-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
            <Link to="/">
              <img
                src={data.logo}
                alt="FastKYC Logo"
                className="h-10 object-contain"
              />
            </Link>
            {/* Desktop Nav */}
            <nav className="hidden min-[800px]:flex items-center gap-8 ml-10 relative">
              <span className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer">
                Why FastKYC
              </span>

              {/* Products Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  <span className="text-[#1E1E1E] font-medium text-[16px]">
                    Products
                  </span>
                  <IconChevronDown size={16} className="text-black" />
                </div>

                <AnimatePresence>
                  {openDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-[35px] left-1/2 -translate-x-1/2 mt-2 
                      w-[712px] bg-white shadow-lg rounded-[20px] p-6 
                      grid grid-cols-2 gap-5 z-50 border border-[#F44336]"
                    >
                      <h3 className="col-span-2 text-[#F44336] font-medium text-[18px] p-2">
                        Products
                      </h3>
                      {data.products_nav.map((p, i) => (
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
                style={{ visibility: "hidden" }}
                to="/Book_demo"
                className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium border border-white/20 hover:bg-white/10"
              >
                Book a demo
              </Link>
              <Link
                to="/Login"
                className="border border-[#F44336] text-[#F44336] px-5 py-2 rounded-md text-[16px] font-medium hover:bg-[#F44336] hover:text-white transition"
              >
                Sign in
              </Link>
            </div>

            {/* Mobile Button */}
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
                <img src={data.logo} alt="FastKYC Logo" className="h-9" />
                <button onClick={() => setMenuOpen(false)}>
                  <IconX size={28} className="text-gray-600 cursor-pointer" />
                </button>
              </div>

              {/* Main Menu */}
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

              {/* Products Submenu */}
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
                    {data.products_nav.map((p, i) => (
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

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div className="flex flex-col justify-center h-full order-1 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-6 leading-snug text-[#1E1E1E]">
                {hero.title}
              </h1>

              <ul className="space-y-4 mb-10">
                {hero.features.map((feature) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <li
                      key={feature.id}
                      className="flex items-center gap-3 justify-start"
                    >
                      <span className="bg-[#FFF5F5] backdrop-blur-md p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-red-600" />
                      </span>
                      <span className="font-medium text-[18px] text-[#424242]">
                        {feature.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="flex justify-center lg:justify-start gap-8 text-center mt-auto">
                {hero.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-[32px] sm:text-[42px] font-semibold text-[#1E1E1E]">
                      {stat.value}
                    </p>
                    <p className="text-[#1E1E1E] text-[14px] sm:text-[16px] font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="flex flex-col justify-center h-full order-1 lg:order-2">
              {submit && (
                <div className="flex justify-center mb-4">
                  <h3 className="text-[18px] fon-medium text-[#1E1E1E]">
                    {form.successMessage}
                  </h3>
                </div>
              )}
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg w-full flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-6 text-left text-[#424242]">
                  {form.title}
                </h2>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmit(true);
                  }}
                >
                  {form.fields.map((field) => (
                    <div key={field.id} className="flex flex-col">
                      <label
                        htmlFor={field.id}
                        className="text-[#424242] text-[12px] font-medium mb-1"
                      >
                        {field.label}
                      </label>
                      {field.id === "phone" ? (
                        <div className="flex gap-2">
                          <select className="border border-[#00000033] rounded-lg p-3 text-gray-900 bg-white focus:outline-none focus:border-red-500">
                            {form.countryOptions.map((c, i) => (
                              <option key={i}>{c}</option>
                            ))}
                          </select>
                          <input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full p-3 rounded-lg text-[#808080] bg-white border border-[#00000033] focus:outline-none focus:border-red-500"
                          />
                        </div>
                      ) : (
                        <input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full p-3 rounded-lg text-[#808080] bg-white border border-[#00000033] focus:outline-none focus:border-red-500"
                        />
                      )}
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="text-[16px] w-full bg-[#F44336] hover:bg-red-700 transition text-white font-bold p-3 rounded-lg cursor-pointer"
                  >
                    {form.submit.label}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bank Logos Carousel */}
        <div
          className="
          lg:hidden relative overflow-hidden py-6 order-1
          w-screen max-w-none
          ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
        "
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
                {hero.banks.map((logo, idx) => (
                  <motion.img
                    key={`${i}-${idx}`}
                    src={logo}
                    alt={`Bank ${idx + 1}`}
                    className="h-8 w-auto object-contain hover:grayscale-0 transition"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Bank Logos Carousel */}
        <div className="hidden lg:block relative w-full overflow-hidden py-6">
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-30%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-12">
                {hero.banks.map((logo, idx) => (
                  <motion.img
                    key={`${i}-${idx}`}
                    src={logo}
                    alt={`Bank ${idx + 1}`}
                    className="h-8 w-auto object-contain hover:grayscale-0 transition"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer Place */}
      <Footer data={footerData} />
    </>
  );
}
