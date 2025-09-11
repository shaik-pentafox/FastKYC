import { useState } from "react";
import { IconArrowRight, IconEye, IconEyeOff } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/Images/FastKYC_logo.png";
import icon1 from "../../assets/Images/icons/Log_icon1.png";
import icon2 from "../../assets/Images/icons/Log_icon2.png";
import icon3 from "../../assets/Images/icons/Log_icon3.png";
import icon4 from "../../assets/Images/icons/Log_icon4.png";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email";
      }
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login Success:", formData);
      navigate("#");
    }
  };

  const isFormComplete = formData.email.trim() && formData.password.trim();

  const rightFeatures = [
    { icon: icon1, text: "PAN, Aadhaar, Passport, DL & Voter ID Verification" },
    { icon: icon2, text: "Bank & GST Verification in Real-Time" },
    { icon: icon3, text: "Aadhaar Masking & Document Watermarking for Security" },
    { icon: icon4, text: "Seamless OCR to Extract Data from Government IDs" },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start w-full lg:w-1/2 px-6 md:px-12 lg:px-20 py-10 bg-white">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/">
            <img src={Logo} alt="FastKYC Logo" className="w-40 md:w-48" />
          </Link>
        </div>

        <h2 className="text-2xl md:text-[32px] font-semibold text-[#000000] mb-2">
          Log in
        </h2>
        <p className="text-[#333333] mb-6 font-medium text-base md:text-[20px]">
          Enter Your Credentials
        </p>

        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-[#888888] mb-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-4 py-3 border border-[#E4E4E4] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-[#444444] text-sm md:text-[14px] font-medium"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-[#888888] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="************"
                className="w-full px-4 py-3 border border-[#E4E4E4] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-[#444444] text-sm md:text-[14px] font-medium"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IconEye size={20} /> : <IconEyeOff size={20} />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormComplete}
            className="w-full bg-[#000000] hover:bg-[#E20303] text-[#FFFFFF] font-medium py-3 rounded-md flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Login
            <IconArrowRight />
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#1B0A0A] to-[#3E1B1B] text-[#E20303] 
  p-8 md:p-12 flex flex-col justify-center gap-6 
  rounded-t-[30px] lg:rounded-[20px] 
  mt-3 mr-3 mb-3">
        <h2 className="text-2xl md:text-[26px] font-medium text-[#FFFFFF] mb-1">
          Fast, Secure & Compliant Verification
        </h2>
        <p className="text-sm md:text-[16px] lg:text-[16px] font-medium text-[#B9B9B9] -mt-2 md:-mt-[18px]">
          Onboard users in minutes with trusted KYC, bank, GST <br/>
          and compliance APIs
        </p>

        <div className="flex flex-col gap-5 mt-1">
          {rightFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="relative flex items-center">
                <img
                  src={feature.icon}
                  alt={`icon-${index}`}
                  className="w-10 h-10  transition-transform duration-300 group-hover:scale-125"
                />
              </div>
              <p className="text-sm md:text-[14px] text-[#FFFFFF] font-normal">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p className="mt-8 font-medium text-xl md:text-[20px] mb-3">
            Seamless KYC. Fraud-proof. Compliant.
          </p>
          <p className="font-medium text-sm md:text-[16px] text-[#B9B9B9]">
            Verification made simple — accurate, secure, and always compliant.
          </p>
        </div>
      </div>
    </div>
  );
}
