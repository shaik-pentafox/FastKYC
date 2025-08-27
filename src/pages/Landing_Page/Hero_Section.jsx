import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";

// Assets
import Logo from "../../assets/Images/FastKYC_logo.png";
import Premium from "../../assets/Images/icons/Premium_rate.png";
import Security from "../../assets/Images/icons/Discount_icon.png";
import Circle from "../../assets/Images/icons/circle.png";
import bank1 from '../../assets/Images/Bank_assets/bank1.png'
import bank2 from '../../assets/Images/Bank_assets/bank2.png'
import bank3 from '../../assets/Images/Bank_assets/bank3.png'
import bank4 from '../../assets/Images/Bank_assets/bank4.png'
import bank5 from '../../assets/Images/Bank_assets/bank5.png'
import bank6 from '../../assets/Images/Bank_assets/bank6.png'
import bank7 from '../../assets/Images/Bank_assets/bank7.png'
import bank8 from '../../assets/Images/Bank_assets/bank8.png'
function Hero_Section() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#121212] min-h-screen w-full">
      {/* Navbar */}
      <header className="px-6 min-[800px]:px-20 py-6 relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src={Logo} alt="FastKYC Logo" className="h-10" />

          <nav className="hidden min-[800px]:flex items-center gap-8 ml-[54px]">
            <span className="text-white text-sm font-medium cursor-pointer">
              Why FastKYC
            </span>

            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-white text-sm">Products</span>
                <IconChevronDown size={16} className="text-white" />
              </div>

              <div className="absolute hidden group-hover:block bg-white rounded-md shadow-md mt-2 w-40 z-50">
                <ul className="text-sm text-gray-800">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Product 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Product 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Product 3
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="hidden min-[800px]:flex items-center gap-6">
            <button className="border border-red-600 text-red-600 px-4 py-1 rounded-md text-sm font-normal">
              Sign in
            </button>
            <button className="bg-red-600 text-white px-4 py-1 rounded-md text-sm font-normal">
              Book a demo
            </button>
          </div>

          <div className="min-[800px]:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <IconX size={28} className="text-white" />
              ) : (
                <IconMenu2 size={28} className="text-white" />
              )}
            </button>
          </div>
        </div>

       {menuOpen && (
  <div className="fixed inset-0 bg-black text-white z-50 flex flex-col justify-center items-center gap-8">
    <button
      onClick={() => setMenuOpen(false)}
      className="absolute top-6 right-6 text-white"
    >
      <IconX size={28} />
    </button>

    <ul className="flex flex-col gap-6 text-2xl font-medium text-center">
      <li className="cursor-pointer" style={{fontWeight:"500",fontSize:"24"}}>Why FastKYC</li>
      <li className="cursor-pointer" style={{fontWeight:"500",fontSize:"24"}}>Products</li>
    </ul>
  </div>
)}

      </header>

      {/* Hero Section */}
      <section className="text-center text-white relative overflow-hidden mt-12">
        <div className="relative max-w-4xl mx-auto pb-14 px-4">
          <div className="relative z-10">
            <div className="flex flex-wrap min-[800px]:flex-nowrap justify-center gap-3 mb-6">
              <button className="border border-white text-white text-sm font-normal px-4 py-1.5 rounded-full">
                Faster Onboarding
              </button>
              <button className="border border-white text-white text-sm font-normal px-4 py-1.5 rounded-full">
                Stronger Compliance
              </button>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 flex justify-center">
                <div className="w-96 h-72 bg-red-500/40 blur-[100px] rounded-full"></div>
              </div>

              <h1 className="relative text-4xl min-[800px]:text-5xl font-bold leading-tight mb-5 text-center">
                Simplify Compliance. <br /> Maximize Growth.
              </h1>
            </div>

            <div className="relative">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-red-500/40 to-transparent blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-red-500/40 to-transparent blur-2xl"></div>

              <p className="relative text-gray-300 text-md max-w-2xl mx-auto mb-6 text-center">
                Pentafox FastKYC offers an end-to-end tax automation platform that
                helps businesses verify tax IDs, calculate and pay taxes, generate
                e-invoices, process tax documents, reconcile ledgers, and file tax
                returns — all through secure SDKs & APIs.
              </p>
            </div>

            <button className="bg-red-600 text-white font-semibold px-8 py-2 rounded-md relative z-10">
              Get started
            </button>
          </div>
        </div>


        {/* Floating Cards*/}
        <div className="relative h-[600px] mt-[-180px] hidden min-[800px]:block">
          {/* Left Card 1 */}
          <div className="absolute left-[12%] top-[15%] w-72 bg-white/10 text-white border border-white/20 backdrop-blur-lg shadow-lg rounded-3xl p-3 flex items-center gap-4 cursor-pointer transition-transform hover:scale-105">
            <img src={Premium} alt="Premium" className="h-12" />
            <div>
              <p className="text-sm font-normal text-start">
                Instant PAN & Aadhaar Verification
              </p>
              <p className="text-md font-bold mt-1 text-start">99.9% Accuracy</p>
            </div>
          </div>

          {/* Left Card 2 */}
          <div className="absolute left-[5%] top-[36%] w-72 bg-white/10 text-white border border-white/20 backdrop-blur-lg shadow-lg rounded-3xl p-4 flex items-center gap-4 cursor-pointer transition-transform hover:scale-105">
            <img src={Security} alt="Security" className="h-12" />
            <div>
              <p className="text-sm font-normal text-start">
                Successful Verifications
              </p>
              <p className="text-md font-bold mt-1 text-start">
                1.2M+ Completed
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="absolute right-[5%] top-[5%] w-64 bg-white/10 text-white border border-white/20 backdrop-blur-lg shadow-lg rounded-3xl p-5 cursor-pointer transition-transform hover:scale-105">
            <div className="flex justify-between items-center mb-3">
              <img src={Circle} alt="status" className="h-6" />
              <p className="font-normal">FastKYC*</p>
            </div>
            <hr className="border-gray-300/50 mb-3" />

            <div className="flex -space-x-3 mb-3">
              <img
                className="w-8 h-8 rounded-full border-2 border-[#121212]"
                src="https://i.pravatar.cc/40?img=1"
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-[#121212]"
                src="https://i.pravatar.cc/40?img=2"
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-[#121212]"
                src="https://i.pravatar.cc/40?img=3"
                alt=""
              />
            </div>

            <p className="font-normal text-start text-sm">Total Verifications</p>
            <p className="font-bold text-start text-lg mt-1">1.2M+</p>

            <div className="w-full bg-gray-600 rounded-full h-2 mt-3">
              <div className="bg-red-600 h-2 rounded-full w-[70%]"></div>
            </div>
          </div>
        </div>

        {/* Banks Scrolling Logos */}
        <div className="overflow-hidden w-full py-6 relative mt-10 min-[800px]:mt-[-262px]">
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {/* First row */}
            {[bank1, bank2, bank3, bank4, bank5, bank6, bank7, bank8].map(
              (logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Bank ${idx + 1}`}
                  className="h-8 w-auto object-contain grayscale"
                />
              )
            )}
            {[bank1, bank2, bank3, bank4, bank5, bank6, bank7, bank8].map(
              (logo, idx) => (
                <img
                  key={`dup-${idx}`}
                  src={logo}
                  alt={`Bank ${idx + 1}`}
                  className="h-8 w-auto object-contain grayscale"
                />
              )
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero_Section;
