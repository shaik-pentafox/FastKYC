import { IconArrowRight } from "@tabler/icons-react";
import Logo from "../../assets/Images/Logo.png";
import Laptop from "../../assets/Images/Laptop.png";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex">
            <div className="flex flex-col justify-center items-start w-1/2 px-16 bg-white">
                <div className="flex items-center gap-2 mb-8">
                    <img src={Logo} alt="FastKYC Logo" className="w-10" />
                    <span className="text-black-600 text-xl font-bold">FastKYC</span>
                </div>

                <h2 className="text-2xl font-semibold text-red-600 mb-2">Log in</h2>
                <p className="text-gray-600 mb-6">Enter Your Credentials</p>

                <form className="w-full max-w-sm space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="text"
                            placeholder="User_1"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="************"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            <span className="absolute right-3 top-3 cursor-pointer text-gray-400">
                                👁
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2"
                        onClick={() => navigate("/landing-page")}
                    >
                        Login
                        <span><IconArrowRight /></span>
                    </button>
                </form>
            </div>

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
    )
}