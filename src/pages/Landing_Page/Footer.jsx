import React from "react";
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";
import Logo from "../../assets/Images/FastKYC_logo.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Mobile: Logo always top */}
        <div className="flex justify-center md:hidden">
          <img src={Logo} alt="FastKYC Logo" className="w-32 object-contain" />
        </div>

        {/* Top Section: Links + Subscribe */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* Products */}
            <div>
              <h3 className="text-red-500 font-normal text-lg mb-4">Products</h3>
              <ul className="space-y-3">
                {["Fast KYC", "ID verification", "Face authentication"].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block text-md"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-red-500 font-normal text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                {["Blogs", "Customer"].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block text-md"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy & Security */}
            <div>
              <h3 className="text-red-500 font-normal text-lg mb-4">Privacy & Security</h3>
              <ul className="space-y-3">
                {["Terms and conditions", "Privacy policy", "Security"].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block text-md"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subscribe (only show on md and above) */}
          <div className="hidden md:block flex-1 max-w-sm mx-auto md:mx-0">
            <h3 className="text-red-500 font-normal text-lg mb-4 text-center md:text-left">Subscribe</h3>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <div className="relative w-full max-w-xs">
                <IconMail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-white text-black focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
              <button className="w-full max-w-xs bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">
                Subscribe now
              </button>
            </div>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-12 text-gray-400 sm:hidden">
          <a href="#" className="hover:text-[#0A66C2] transform hover:-translate-y-1 transition-all">
            <IconBrandLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-[#1877F2] transform hover:-translate-y-1 transition-all">
            <IconBrandFacebook size={24} />
          </a>
          <a href="#" className="hover:text-[#1DA1F2] transform hover:-translate-y-1 transition-all">
            <IconBrandTwitter size={24} />
          </a>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4 text-center">
          <div className="hidden md:flex justify-start">
            <img src={Logo} alt="FastKYC Logo" className="w-32 object-contain" />
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            {["Terms", "Privacy", "Cookies"].map((item, i) => (
              <a key={i} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Social right (desktop) */}
          <div className="hidden md:flex gap-12">
            <a href="#" className="hover:text-[#0A66C2] transform hover:-translate-y-1 transition-all">
              <IconBrandLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-[#1877F2] transform hover:-translate-y-1 transition-all">
              <IconBrandFacebook size={24} />
            </a>
            <a href="#" className="hover:text-[#1DA1F2] transform hover:-translate-y-1 transition-all">
              <IconBrandTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-center md:hidden">
          &copy; {new Date().getFullYear()} FastKYC.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
