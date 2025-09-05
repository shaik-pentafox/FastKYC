import React from "react";
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";

function Footer({data}) {
  return (
    <footer className="bg-[#121212] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-12">
        
        <div className="md:hidden flex justify-center">
          <img src={data.image} alt="FastKYC Logo" className="w-36 object-contain" />
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-12">

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-left md:text-left">
            {data.menus.map((menu, idx) => (
              <div key={idx}>
                <h3 className="text-[#E20303] font-bold text-[20px] mb-4">{menu.title}</h3>
                <ul className="space-y-3">
                  {menu.links.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block text-[16px] font-medium"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden md:flex flex-col flex-1 max-w-sm gap-3">
            <h3 className="text-[#E20303] font-medium text-[20px] mb-4">
              {data.subscribe.title}
            </h3>
            <div className="relative w-full">
              <IconMail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="email"
                placeholder={data.subscribe.placeholder}
                className="w-full pl-10 pr-4 py-2 rounded-md bg-white text-[#878787] focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
            <button className="w-full bg-[#F44336] hover:bg-red-700 text-white py-2 rounded-md font-bold text-[16px] shadow-md hover:shadow-lg transform  transition-all cursor-pointer">
              {data.subscribe.button}
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-12 text-gray-400 sm:hidden">
          {data.socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              className={`hover:text-${
                social.icon === "linkedin"
                  ? "[#0A66C2]"
                  : social.icon === "facebook"
                  ? "[#1877F2]"
                  : "[#1DA1F2]"
              } transform hover:-translate-y-1 transition-all`}
            >
              {social.icon === "linkedin" && <IconBrandLinkedin size={24} />}
              {social.icon === "facebook" && <IconBrandFacebook size={24} />}
              {social.icon === "twitter" && <IconBrandTwitter size={24} />}
            </a>
          ))}
        </div>

        <hr className="border-gray-700 my-0 md:my-6" />

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-gray-400 text-sm gap-4 text-center md:text-left">

          <div className="hidden md:flex justify-start">
            <img src={data.image} alt="FastKYC Logo" className="w-36 object-contain" />
          </div>

          <div className="flex flex-wrap justify-center gap-12">
            {data.bottomLinks.map((item, i) => (
              <a key={i} href="#" className="text-[14px] font-medium hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex gap-8">
            {data.socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                className={`hover:text-${
                  social.icon === "linkedin"
                    ? "[#0A66C2]"
                    : social.icon === "facebook"
                    ? "[#1877F2]"
                    : "[#1DA1F2]"
                } transform hover:-translate-y-1 transition-all`}
              >
                {social.icon === "linkedin" && <IconBrandLinkedin size={24} />}
                {social.icon === "facebook" && <IconBrandFacebook size={24} />}
                {social.icon === "twitter" && <IconBrandTwitter size={24} />}
              </a>
            ))}
          </div>
        </div>

        <p className="text-gray-500 text-center md:hidden">
          &copy; {new Date().getFullYear()} FastKYC.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
