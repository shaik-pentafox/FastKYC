import React from "react";
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Footer({ data }) {
  return (
    <footer className="bg-[#121212] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-18 items-start">
          {data.menus
            .filter((menu) => menu.description)
            .map((menu, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <Link to="/">
                  <img
                    src={menu.title}
                    alt="FastKYC Logo"
                    className="w-40 object-contain cursor-pointer"
                  />
                </Link>
                <div className="flex flex-col gap-4">
                  <p className="text-[#ADADAD] text-[14px] leading-relaxed font-medium">
                    {menu.description}
                  </p>
                </div>
              </div>
            ))}

          {/* Footer Menus */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {data.menus
              .filter((menu) => !menu.description)
              .map((menu, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <h3 className="text-[#F44336] font-bold text-[18px]">
                    {menu.title}
                  </h3>
                  <ul className="space-y-3">
                    {menu.links.map((item, i) => (
                      <li key={i}>
                        {/* Check external or http(s) link */}
                        {item.external || item.path.startsWith("http") ? (
                          <a
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FFFFFF] hover:text-white transition-all duration-200 hover:translate-x-1 inline-block text-[16px] font-medium"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            to={item.path}
                            className="text-[#FFFFFF] hover:text-white transition-all duration-200 hover:translate-x-1 inline-block text-[16px] font-medium"
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-gray-700 text-gray-400 text-sm gap-6">
          <p className="text-center md:text-left"></p>

          <div className="flex gap-8">
            {data.socialLinks.map((social, i) => (
              <a
                key={i}
                // href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-white hover:text-white transition-all cursor-pointer"
              >
                {social.icon === "linkedin" && <IconBrandLinkedin size={18} stroke={1.5}/>}
                {social.icon === "facebook" && <IconBrandFacebook size={18} stroke={1.5}/>}
                {social.icon === "twitter" && <IconBrandTwitter size={18} stroke={1.5}/>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
