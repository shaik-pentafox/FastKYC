import { useState, useRef, useEffect } from "react";
import {
  IconCpu,
  IconShield,
  IconStar,
  IconX,
  IconMenu2,
  IconChevronRight,
  IconChevronLeft,
  IconReceiptTax,
  IconCloudLock,
  IconBuildingBank,
  IconScan,
  IconId,
  IconMessage,
  IconBrandWhatsapp
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useBodyScrollLock from "../../ui/useBodyScrollLock";
import Footer from "../Footer";

const iconMap = {
  cpu: IconCpu,
  shield: IconShield,
  star: IconStar,
  Tax: <IconReceiptTax size={28} stroke={1.5} />,
  Lock: <IconCloudLock size={28} stroke={1.5} />,
  Bank: <IconBuildingBank size={28} stroke={1.5} />,
  Scan: <IconScan size={28} stroke={1.5} />,
  Id: <IconId size={28} stroke={1.5} />,
  Message: <IconMessage size={28} stroke={1.5} />,
  Whatsapp: <IconBrandWhatsapp size={28} stroke={1.5} />
};

export default function BookDemo({ data, footerData }) {
  const [submit, setSubmit] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSticky, setIsSticky] = useState(false);
  const controls = useAnimation();
  const dropdownRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const { hero, form } = data;

  const hcaptchaRef = useRef(null);
  //Navbar scroll behavior
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

  //Lock body scroll when sidebar open  
  useBodyScrollLock(menuOpen);

  // Handle input change
  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    form.fields.forEach((field) => {
      const value = formData[field.id] ? formData[field.id].trim() : "";

      if (!value) {
        newErrors[field.id] = `${field.label} is required`;
      } else if (field.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[field.id] = "Enter a valid email address";
        }
      } else if (field.id === "phone") {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) {
          newErrors[field.id] = "Phone number must be 10 digits";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (!captchaValue) {
      toast.error("Please complete the reCAPTCHA!");
      return;
    }

    console.log("Form submitted:", formData);
    toast.success(form.successMessage || "Form submitted successfully!");

    setFormData({});
    setErrors({});
    setCaptchaValue(null);
    if (hcaptchaRef.current) hcaptchaRef.current.resetCaptcha();
  };

  const isFormComplete =
    Object.values(formData).every((val) => val.trim() !== "") && captchaValue;

  useEffect(() => {
    if (submit) {
      const timer = setTimeout(() => {
        setSubmit(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submit]);
  return (
    <>
      <div className="min-h-screen w-full py-6 overflow-x-hidden bg-gradient-to-b from-white via-white to-red-100">

        <header
          className={`w-full top-0 z-[100] fixed transition-transform duration-300 transform
    ${isSticky ? "bg-white shadow-md py-6" : "bg-transparent py-12"}
    ${showNavbar ? "translate-y-0" : "-translate-y-full"}
  `}
        >
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
              {/* Products Dropdown */}
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

                      {data.products_nav.map((p, i) => (
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
                      {data.solution_nav.map((s, i) => {
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

              <a href="https://pentafox.in/" target="_blank" rel="noopener noreferrer">
                <span className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer">
                  Company
                </span>
              </a>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden min-[800px]:flex items-center gap-6">
              <Link
                style={{ visibility: "hidden" }}
                to="/book-demo"
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
              className="fixed inset-0 bg-white z-[200] flex flex-col w-full h-full"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center p-6 border-b shrink-0">
                <Link to="/">
                  <img src={data.logo} alt="FastKYC Logo" className="h-9" />
                </Link>
                <button onClick={() => setMenuOpen(false)}>
                  <IconX size={28} className="text-gray-600 cursor-pointer" />
                </button>
              </div>

              {/* Main Menu */}
              <div className="flex-1 overflow-y-auto">
                {/* Root menu */}
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

                {/* Products Submenu */}
                {submenu === "products" && (
                  <div className="flex flex-col p-6 h-full">
                    {/* Back Button */}
                    <button
                      className="flex items-center gap-2 text-gray-600 mb-6 cursor-pointer shrink-0"
                      onClick={() => setSubmenu(null)}
                    >
                      <IconChevronLeft size={20} />
                    </button>

                    {/* Heading */}
                    <h3 className="text-[#F44336] font-medium text-lg mb-4 shrink-0">
                      Products
                    </h3>

                    {/* Scrollable product items */}
                    <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                      <div className="flex flex-col gap-5">
                        {data.products_nav.map((p, i) => (
                          <div
                            key={i}
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: { transition: { staggerChildren: 0.2, delayChildren: i * 0.2 } },
                            }}
                          >
                            <Link
                              to={p.link}
                              className="flex items-center gap-4 cursor-pointer"
                              onClick={() => setMenuOpen(false)}
                            >
                              <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl bg-[#FFF5F5] text-[#F44336]">
                                {iconMap[p.icon]}
                              </div>

                              <motion.div
                                variants={{
                                  hidden: { opacity: 0, x: 20 },
                                  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                                }}
                              >
                                <h2 className="font-medium text-[#212121]">{p.title}</h2>
                                <p className="text-[#616161] font-medium">{p.desc}</p>
                              </motion.div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Solution Submenu */}
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
                    <h3 className="text-[#F44336] font-medium text-lg mb-4 shrink-0">
                      Solution
                    </h3>

                    {/* Scrollable solution items */}
                    <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                      <div className="flex flex-col gap-5">
                        {data.solution_nav.map((s, i) => {
                          const content = (
                            <div className="flex items-center gap-4 cursor-pointer">
                              <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl bg-[#FFF5F5] text-[#F44336]">
                                {s.icon ? iconMap[s.icon] : s.image && <img src={s.image} alt={s.title} className="w-6 h-6 object-contain" />}
                              </div>

                              <div
                                variants={{
                                  hidden: { opacity: 0, x: 20 },
                                  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                                }}
                              >
                                <h2 className="font-medium text-[#212121]">{s.title}</h2>
                                <p className="text-[#616161] font-medium">{s.desc}</p>
                              </div>
                            </div>
                          );

                          return (
                            <div
                              key={i}
                              initial="hidden"
                              animate="visible"
                              variants={{
                                visible: { transition: { staggerChildren: 0.2, delayChildren: i * 0.2 } },
                              }}
                              onClick={() => setMenuOpen(false)}
                            >
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


        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-34">
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
                        <Icon className="w-6 h-6 text-red-600" strokeWidth={1.5} />
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

            {/* Mobile Bank Logos Carousel */}
            <div
              className="
          block lg:hidden relative overflow-hidden py-6 order-1
          w-screen max-w-none
          ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
        "
            >
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

            {/* Right Form */}
            <div className="flex flex-col justify-center h-full order-1 lg:order-2">
              {submit && (
                <div className="flex justify-center mb-4">
                  <p className="text-[18px] font-medium text-[#1E1E1E]">
                    {form.successMessage}
                  </p>
                </div>
              )}
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg w-full flex flex-col justify-center">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {form.fields.map((field) => (
                    <div key={field.id} className="flex flex-col">
                      <label
                        htmlFor={field.id}
                        className="text-[#424242] text-[12px] font-medium mb-1"
                      >
                        {field.label}{" "}
                        {field.required && <span className="text-[#E20303]"> *</span>}
                      </label>
                      {field.id === "phone" ? (
                        <div className="flex flex-col gap-2 w-full">
                          <div className="flex gap-2">
                            <select
                              className="border border-[#00000033] rounded-lg p-3 text-gray-900 bg-white focus:outline-none focus:border-red-500"
                              onChange={(e) => handleChange("countryCode", e.target.value)}
                            >
                              {form.countryOptions.map((c, i) => (
                                <option key={i}>{c}</option>
                              ))}
                            </select>
                            <input
                              id={field.id}
                              type="tel"
                              maxLength={10}
                              placeholder={field.placeholder}
                              className="w-full p-3 rounded-lg text-[#808080] bg-white border border-[#00000033] focus:outline-none focus:border-red-500"
                              value={formData[field.id] || ""}
                              onChange={(e) => handleChange(field.id, e.target.value.replace(/\D/g, ""))} // ✅ only numbers
                            />
                          </div>

                          {errors[field.id] && (
                            <span className="text-red-500 text-xs">{errors[field.id]}</span>
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2 w-full">
                          <input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full p-3 rounded-lg text-[#808080] bg-white border border-[#00000033] focus:outline-none focus:border-red-500"
                            value={formData[field.id] || ""}
                            onChange={(e) => handleChange(field.id, e.target.value)}
                          />

                          {errors[field.id] && (
                            <span className="text-red-500 text-xs">{errors[field.id]}</span>
                          )}
                        </div>
                      )}

                    </div>
                  ))}
                  <div className="flex justify-start w-full">
                    <div className="transform scale-[0.70] sm:scale-[0.85] md:scale-100 origin-left">
                      <HCaptcha
                        ref={hcaptchaRef}
                        sitekey={import.meta.env.VITE_SITE_KEY}
                        onVerify={(token) => setCaptchaValue(token)}
                        onExpire={() => setCaptchaValue(null)}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={
                      !(
                        Object.values(formData).every((val) => val.trim() !== "") &&
                        captchaValue
                      )
                    }
                    className="text-[16px] w-full bg-[#F44336] hover:bg-red-700 transition text-white font-bold p-3 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {form.submit.label}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>


        {/* Desktop Bank Logos Carousel */}
        <div className="hidden lg:block relative w-full overflow-hidden py-20">

          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10
    bg-gradient-to-r from-red-100 via-red-100 to-transparent
    [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]
    [mask-repeat:no-repeat] [mask-size:100%_100%]"
          />

          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10
    bg-gradient-to-l from-red-100 via-red-100 to-transparent
    [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]
    [mask-repeat:no-repeat] [mask-size:100%_100%]"
          />


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
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
