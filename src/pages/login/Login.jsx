import { useState } from "react";
import { IconArrowRight, IconEye, IconEyeOff } from "@tabler/icons-react";
import Logo from "../../assets/Images/FastKYC_logo.png";
import Laptop from "../../assets/Images/Laptop.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start w-1/2 px-6 md:px-12 lg:px-20 bg-white">
        <div className="flex items-center gap-2 mb-8">
          <img src={Logo} alt="FastKYC Logo" className="w-48" />
        </div>

        <h2 className="text-[32px] font-semibold text-[#000000] mb-2">Log in</h2>
        <p className="text-[#333333] mb-6 font-medium text-[20px]">
          Enter Your Credentials
        </p>

        <form className="w-full max-w-sm space-y-4">
          <div>
            <label className="block text-[12px] font-medium text-[#888888] mb-1">
              Email
            </label>
            <input
              type="text"
              placeholder="User_1"
              className="w-full px-4 py-3 border border-[#E4E4E4] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-[#444444] text-[14px] font-medium"
            />
          </div>

          <div>
            <label className="block text-[12px] font-medium text-[#888888] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="************"
                className="w-full px-4 py-3 border border-[#E4E4E4] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-[#444444] text-[14px] font-medium"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IconEye size={20}/> : <IconEyeOff size={20}  />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#000000] hover:bg-[#E20303] text-[#FFFFFF] font-medium py-3 rounded-md flex items-center justify-center gap-2 text-[18px]"
            onClick={() => navigate("/landing-page")}
          >
            Login
            <span>
              <IconArrowRight />
            </span>
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center items-center text-white p-10 rounded-3xl">
        <img src={Laptop} alt="Laptop" className="mb-6" />
        <h3 className="text-2xl font-bold text-center mb-4">
          Seamless KYC. Fraud-proof. Compliant.
        </h3>
        <p className="text-gray-400 text-center max-w-md">
          AI-powered identity checks for faster, safer onboarding.
        </p>
      </div>
    </div>
  );
}
