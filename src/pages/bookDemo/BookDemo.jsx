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
import { motion, AnimatePresence } from "framer-motion";

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
    <>
    <div className="min-h-screen w-full py-6 overflow-x-hidden bg-gradient-to-b from-white via-white to-red-100 overflow-hidden">
      {/* Header */}

      <header className="py-6 relative z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          <img src={data.logo} alt="FastKYC Logo" className="h-10 object-contain" />

          <nav className="hidden min-[800px]:flex items-center gap-8 ml-10">
            <span className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer">Why FastKYC</span>
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-[#1E1E1E] font-medium text-[16px]">Products</span>
                <IconChevronDown size={16} className="text-black" />
              </div>
            </div>
            <span className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer">Resources</span>
            <a href="https://pentafox.in/" rel="noopener noreferrer">
              <span className="text-[#1E1E1E] text-[16px] font-medium cursor-pointer">Company</span>
            </a>
          </nav>

          <div className="hidden min-[800px]:flex items-center gap-6">
            <Link style={{ visibility: "hidden" }} to="/Book_demo" className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium border border-white/20 hover:bg-white/10">Book a demo</Link>
            <Link to="/Login" className="border border-[#F44336] text-[#F44336] px-5 py-2 rounded-md text-[16px] font-medium hover:bg-[#F44336] hover:text-white transition">Sign in</Link>
          </div>

          <div className="min-[800px]:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <></> : <IconMenu2 size={28} className="text-black cursor-pointer" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-white text-[#1E1E1E] z-50 flex flex-col justify-center items-center gap-8 md:hidden"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-[#F44336] rounded-full border border-[#F44336] p-2"
              >
                <IconX size={28} className="cursor-pointer" />
              </button>

              <ul className="flex flex-col gap-6 text-2xl font-medium text-center">
                <li className="cursor-pointer">Why FastKYC</li>
                <li className="cursor-pointer">Products</li>
                <li className="cursor-pointer">Resources</li>
                <li className="cursor-pointer">
                  <a href="https://pentafox.in/" className="text-[#1E1E1E] text-2xl font-medium">
                    Company
                  </a>
                </li>
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
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-6 leading-snug text-[#1E1E1E]">{hero.title}</h1>

            <ul className="space-y-4 mb-10">
              {hero.features.map((feature) => {
                const Icon = iconMap[feature.icon];
                return (
                  <li key={feature.id} className="flex items-center gap-3 justify-start">
                    <span className="bg-[#FFF5F5] backdrop-blur-md p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-red-600" />
                    </span>
                    <span className="font-medium text-[18px] text-[#424242]">{feature.text}</span>
                  </li>
                );
              })}
            </ul>

            <div className="flex justify-center lg:justify-start gap-8 text-center mt-auto">
              {hero.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-[32px] sm:text-[42px] font-semibold text-[#1E1E1E]">{stat.value}</p>
                  <p className="text-[#1E1E1E] text-[14px] sm:text-[16px] font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              lg:hidden relative overflow-hidden py-6 order-1
              w-screen max-w-none
              ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
            "
          >

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
                <h3 className="text-[18px] fon-medium text-[#1E1E1E]">{form.successMessage}</h3>
              </div>
            )}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg w-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-6 text-left text-[#424242]">{form.title}</h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmit(true); }}>
                {form.fields.map((field) => (
                  <div key={field.id} className="flex flex-col">
                    <label htmlFor={field.id} className="text-[#424242] text-[12px] font-medium mb-1">{field.label}</label>
                    {field.id === "phone" ? (
                      <div className="flex gap-2">
                        <select className="border border-[#00000033] rounded-lg p-3 text-gray-900 bg-white focus:outline-none focus:border-red-500">
                          {form.countryOptions.map((c, i) => <option key={i}>{c}</option>)}
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
                <button type="submit" className="text-[16px] w-full bg-[#F44336] hover:bg-red-700 transition text-white font-bold p-3 rounded-lg cursor-pointer">{form.submit.label}</button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden lg:block relative w-full overflow-hidden py-6">
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
    
   
    </>
  );
}
