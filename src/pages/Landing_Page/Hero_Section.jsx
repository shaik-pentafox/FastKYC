import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Hero_Section({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonText, setButtonText] = useState(data.cta.textDesktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setButtonText(data.cta.textMobile);
      else setButtonText(data.cta.textDesktop);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.3, delayChildren: 0.5 } } };
  const fadeUp = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } };
  const card1 = { hidden: { opacity: 0, x: -80, y: 100 }, show: { opacity: 1, x: 0, y: 0, transition: { delay: 1, duration: 2.5, ease: "easeOut" } } };
  const card2 = { hidden: { opacity: 0, x: -40, y: 100 }, show: { opacity: 1, x: 0, y: 0, transition: { delay: 1.5, duration: 2.5, ease: "easeOut" } } };
  const card3 = { hidden: { opacity: 0, x: 60, y: 100 }, show: { opacity: 1, x: 0, y: 0, transition: { delay: 2, duration: 2.5, ease: "easeOut" } } };

  return (
    <div className="min-h-screen w-full py-6 relative z-50 overflow-x-hidden">
      {/* Navbar */}
      <header className="py-6 relative z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          <img src={data.image} alt="FastKYC Logo" className="h-10" />
          <nav className="hidden min-[800px]:flex items-center gap-8 ml-10">
            <span className="text-black text-[16px] font-medium cursor-pointer">Why FastKYC</span>
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-black text-[16px] font-medium">Products</span>
                <IconChevronDown size={16} className="text-black" />
              </div>
            </div>
          </nav>

          <div className="hidden min-[800px]:flex items-center gap-6">
            <Link to="/Login" className="border border-red-600 text-red-600 px-5 py-2 rounded-md text-[16px] font-normal">Sign in</Link>
            <Link to={data.cta.link} className="bg-red-600 text-white px-5 py-2 rounded-md text-[16px] font-normal">{data.cta.textMobile}</Link>
          </div>

          <div className="min-[800px]:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <IconX size={28} className="text-white cursor-pointer" /> : <IconMenu2 size={28} className="text-black cursor-pointer" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-black text-white z-50 flex flex-col justify-center items-center gap-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white">
                <IconX size={28} className="cursor-pointer" />
              </button>
              <ul className="flex flex-col gap-6 text-2xl font-medium text-center">
                <li className="cursor-pointer">Why FastKYC</li>
                <li className="cursor-pointer">Products</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <motion.section className="text-center text-black relative overflow-hidden pt-12" variants={container} initial="hidden" animate="show">

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-14 bg-gradient-to-b from-red-100 to-white overflow-hidden"> 

          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white/100 to-white/0 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white/100 to-white/0 pointer-events-none"></div>

          <motion.div variants={fadeUp} className="flex flex-wrap min-[800px]:flex-nowrap justify-center gap-3 mb-6">
            {data.buttons.map((btn, i) => (
              <button key={i} className="border border-gray-450 text-[#333333] text-[14px] font-normal px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm">
                {btn}
              </button>
            ))}
          </motion.div>

          <motion.h1 variants={fadeUp} className="relative text-4xl min-[800px]:text-[48px] font-medium leading-tight mb-6 text-center">
            {data.heading.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </motion.h1>

          <motion.p variants={fadeUp} className="relative text-[#424242] text-[18px] max-w-2xl mx-auto mb-6 text-center font-medium">
            {data.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative z-10"
          >
            <Link
              to={data.cta.link}
              className="w-full text-center bg-red-600 text-white font-normal px-8 py-3 rounded-md text-[16px] hover:bg-red-500 transition cursor-pointer block"
            >
              {buttonText}
            </Link>
          </motion.div>

        </div>

        <div className="relative h-[600px] mt-[-180px] hidden min-[800px]:block">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative h-full">
            {[data.cards[0]].map((card, i) => (
              <motion.div key={i} variants={card1} className="absolute left-38 top-[15%] w-72 bg-white/90 backdrop-blur-md text-black border border-gray-200 shadow-lg rounded-3xl p-4 py-2 flex items-center gap-4 cursor-pointer">
                <motion.img src={card.img} alt={card.title} className="h-13" initial={{ scale: 0.8, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1, duration: 1.8 }} />
                <div>
                  <p className="text-[16px] font-normal text-start">{card.title}</p>
                  <p className="text-[18px] font-bold mt-1 text-start">{card.value}</p>
                </div>
              </motion.div>
            ))}
            {[data.cards[1]].map((card, i) => (
              <motion.div key={i} variants={card2} className="absolute left-20 top-[36%] w-72 bg-white/90 backdrop-blur-md text-black border border-gray-200 shadow-lg rounded-3xl p-4 flex items-center gap-4 cursor-pointer">
                <motion.img src={card.img} alt={card.title} className="h-13" initial={{ scale: 0.8, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1.3, duration: 1.8 }} />
                <div>
                  <p className="text-[16px] font-medium text-start">{card.title}</p>
                  <p className="text-[18px] font-bold mt-1 text-start">{card.value}</p>
                </div>
              </motion.div>
            ))}
            {[data.cards[2]].map((card, i) => (
              <motion.div key={i} variants={card3} className="absolute right-10 w-64 bg-white/90 backdrop-blur-md text-black border border-gray-200 shadow-lg rounded-3xl p-5 cursor-pointer">
                <div className="flex justify-between items-center mb-3">
                  <motion.img src={card.img} alt="status" className="h-8" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.1, type: "spring", damping: 22, stiffness: 40 }} />
                  <p className="font-medium text-[18px]">{card.subTitle}</p>
                </div>
                <hr className="border-gray-300 mb-3" />
                <div className="flex -space-x-3 mb-3">
                  {card.avatars.map((i) => (
                    <motion.img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/40?img=${i}`} alt={`user-${i}`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2 + i * 0.7, type: "spring", damping: 22, stiffness: 40 }} />
                  ))}
                </div>
                <p className="font-medium text-start text-[16px]">{card.title}</p>
                <p className="font-bold text-start text-[18px] mt-1">{card.value}</p>
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

        {/* Bank Logos */}
        <motion.div className="overflow-hidden w-full py-6 relative mt-10 min-[800px]:mt-[-262px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1.5 }}>
          <motion.div className="flex gap-12 w-max" animate={{ x: ["0%", "-30%"] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-12">
                {data.banks.map((logo, idx) => (
                  <motion.img key={`${i}-${idx}`} src={logo} alt={`Bank ${idx + 1}`} className="h-8 w-auto object-contain hover:grayscale-0 transition" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} />
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Hero_Section;
