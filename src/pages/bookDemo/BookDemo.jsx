import { useState } from "react";
import {
  IconCpu,
  IconShield,
  IconStar,
  IconX,
  IconMenu2,
  IconChevronDown,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion ,AnimatePresence} from "framer-motion";

const iconMap = {
  cpu: IconCpu,
  shield: IconShield,
  star: IconStar
};

export default function BookDemo({ data }) {
  const [submit, setSubmit] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { hero, form, logo } = data; 

  return (
    <div className="bg-black text-white min-h-screen w-full py-6 overflow-x-hidden">
      {/* Header */}
      <header className="py-6 relative z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          <img src={data.logo} alt="FastKYC Logo" className="h-10 object-contain" />

          <nav className="hidden min-[800px]:flex items-center gap-8 ml-10">
            <span className="text-white text-[16px] font-medium cursor-pointer">Why FastKYC</span>
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-white font-medium text-[16px]">Products</span>
                <IconChevronDown size={16} className="text-white" />
              </div>
            </div>
          </nav>

          <div className="hidden min-[800px]:flex items-center gap-6">
            <Link style={{ visibility: "hidden" }} to="/Book_demo" className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium border border-white/20 hover:bg-white/10">Book a demo</Link>
            <Link to="/Login" className="border border-red-600 text-red-600 px-5 py-2 rounded-md text-[16px] font-normal hover:bg-red-600 hover:text-white transition">Sign in</Link>
          </div>

          <div className="min-[800px]:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <IconX size={28} className="text-white cursor-pointer" /> : <IconMenu2 size={28} className="text-white cursor-pointer" />}
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="flex flex-col justify-center h-full order-1 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-6 leading-snug">{hero.title}</h1>

            <ul className="space-y-4 mb-10">
              {hero.features.map((feature) => {
                const Icon = iconMap[feature.icon];
                return (
                  <li key={feature.id} className="flex items-center gap-3 justify-start">
                    <span className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-red-600" />
                    </span>
                    <span className="font-medium text-[18px]">{feature.text}</span>
                  </li>
                );
              })}
            </ul>

            <div className="flex justify-center lg:justify-start gap-8 text-center mt-auto">
              {hero.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-[32px] sm:text-[42px] font-semibold">{stat.value}</p>
                  <p className="text-gray-400 text-[14px] sm:text-[16px] font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              lg:hidden relative bg-black overflow-hidden py-6 order-1
              w-screen max-w-none
              ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
            "
          >
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-red-700 to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-red-700 to-transparent z-20" />
            <div className="absolute left-0 top-0 w-full h-8 
                  bg-gradient-to-b from-black to-transparent 
                  pointer-events-none z-20" />
            <div className="absolute left-0 bottom-0 w-full h-8 
                  bg-gradient-to-t from-black to-transparent 
                  pointer-events-none z-20" />
            <motion.div className="flex gap-12 w-max" animate={{ x: ["0%", "-30%"] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-12">
                  {hero.banks.map((logo, idx) => (
                    <motion.img key={`${i}-${idx}`} src={logo} alt={`Bank ${idx + 1}`} className="h-8 w-auto object-contain hover:grayscale-0 transition" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} />
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Form */}
          <div className="flex flex-col justify-center h-full order-1 lg:order-2">
            {submit && (
              <div className="flex justify-center mb-4">
                <h3 className="text-md text-green-400">{form.successMessage}</h3>
              </div>
            )}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg w-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">{form.title}</h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmit(true); }}>
                {form.fields.map((field) => (
                  <div key={field.id} className="flex flex-col">
                    <label htmlFor={field.id} className="text-white text-sm mb-1">{field.label}</label>
                    {field.id === "phone" ? (
                      <div className="flex gap-2">
                        <select className="border border-white/40 rounded-lg p-3 text-white bg-transparent focus:outline-none">
                          {form.countryOptions.map((c, i) => <option key={i}>{c}</option>)}
                        </select>
                        <input id={field.id} type={field.type} placeholder={field.placeholder} className="w-full p-3 rounded-lg text-white bg-transparent border border-white/40 focus:outline-none focus:border-red-500" />
                      </div>
                    ) : (
                      <input id={field.id} type={field.type} placeholder={field.placeholder} className="w-full p-3 rounded-lg text-white bg-transparent border border-white/40 focus:outline-none focus:border-red-500" />
                    )}
                  </div>
                ))}
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold p-3 rounded-lg">{form.submit.label}</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden lg:block relative w-full bg-black overflow-hidden py-6">
        <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-red-700 to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-red-700 to-transparent pointer-events-none z-20" />
        <div className="absolute left-0 top-0 w-full h-8 
                  bg-gradient-to-b from-black to-transparent 
                  pointer-events-none z-20" />
        <div className="absolute left-0 bottom-0 w-full h-8 
                  bg-gradient-to-t from-black to-transparent 
                  pointer-events-none z-20" />
        <motion.div className="flex gap-12 w-max" animate={{ x: ["0%", "-30%"] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-12">
              {hero.banks.map((logo, idx) => (
                <motion.img key={`${i}-${idx}`} src={logo} alt={`Bank ${idx + 1}`} className="h-8 w-auto object-contain hover:grayscale-0 transition" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
