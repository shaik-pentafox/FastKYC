import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import Logo from "../../assets/Images/FastKYC_logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-[#121212] z-50 px-6 min-[800px]:px-20 py-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img src={Logo} alt="FastKYC Logo" className="h-10" />

        {/* Desktop Nav */}
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
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product 2</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product 3</li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden min-[800px]:flex items-center gap-6">
          <Link to="/Login" className="border border-red-600 text-red-600 px-4 py-1 rounded-md text-md font-normal">
            Sign in
          </Link>
          <Link to="/Book_demo" className="bg-red-600 text-white px-4 py-1 rounded-md text-md font-normal">
            Book a demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="min-[800px]:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IconX size={28} className="text-white" /> : <IconMenu2 size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black text-white z-50 flex flex-col justify-center items-center gap-8">
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white">
            <IconX size={28} />
          </button>
          <ul className="flex flex-col gap-6 text-2xl font-medium text-center">
            <li className="cursor-pointer">Why FastKYC</li>
            <li className="cursor-pointer">Products</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
