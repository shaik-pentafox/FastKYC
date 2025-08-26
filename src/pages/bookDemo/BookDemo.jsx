import { IconClock, IconCpu, IconShield, IconStar } from "@tabler/icons-react";
import Logo from "../../assets/Images/Logo.png";
import Banks from "../../assets/Images/Banks.png";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BookDemo() {

    const [submit, setSubmit] = useState(false);

    return (
        <div className="bg-black">
            <div className="bg-black text-white min-h-screen px-6 md:px-16 py-12">
                <header className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-2">
                        <img src={Logo} alt="FastKYC" className="h-8" />
                        <span className="text-red-600 text-xl font-bold">FastKYC</span>
                    </div>
                    <nav className="flex gap-8 items-center text-gray-300">
                        <a href="#" className="hover:text-white text-red-600">Home</a>
                        <div className="relative group">
                            <button className="hover:text-white flex items-center gap-1">
                                Discover
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                        </div>
                        <a href="#" className="hover:text-white">Pricing</a>
                        <button className="border border-red-600 px-4 py-2 rounded-lg text-red-500 hover:bg-red-600 hover:text-white transition">
                            Sign in
                        </button>
                    </nav>
                </header>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Seamless verification with faster approvals, stronger security, and full compliance
                        </h1>
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3">
                                <span className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                                    <IconCpu className="w-6 h-6 text-red-600" />
                                </span>
                                <span>AI-driven onboarding in seconds</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                                    <IconShield className="w-6 h-6 text-red-600" />
                                </span>
                                <span>Fraud detection that blocks synthetic IDs</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                                    <IconStar className="w-6 h-6 text-red-600" />
                                </span>
                                <span>Trusted by fintech, banks & marketplaces</span>
                            </li>
                        </ul>

                        <div className="flex gap-8 text-center">
                            <div>
                                <p className="text-3xl font-bold">500+</p>
                                <p className="text-gray-400 text-sm">Identities verified</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">96%</p>
                                <p className="text-gray-400 text-sm">Auto-approval rate</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">60%</p>
                                <p className="text-gray-400 text-sm">Reduction in drop-offs</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {submit && (
                            <div className="flex justify-center">
                                <h3 className="text-md text-white">Thanks for booking. We’ll reach out soon</h3>
                            </div>
                        )}
                        <div className="bg-white/20 p-8 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-semibold mb-6">Sign up</h2>
                            <form className="space-y-4" onSubmit={() => setSubmit(true)}>
                                <div className="flex flex-col">
                                    <label htmlFor="fullName" className="text-white text-sm mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full p-3 rounded-lg text-white bg-transparent border border-white/71 focus:outline-none focus:border-red-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="companyName" className="text-white text-sm mb-1">
                                        Company Name *
                                    </label>
                                    <input
                                        id="companyName"
                                        type="text"
                                        placeholder="Enter company name"
                                        className="w-full p-3 rounded-lg text-white border border-white/71 focus:outline-none focus:border-red-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-white text-sm mb-1">
                                        Email *
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter working email address"
                                        className="w-full p-3 rounded-lg text-white border border-white/71 focus:outline-none focus:border-red-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-white text-sm mb-1">
                                        Phone number *
                                    </label>
                                    <div className="flex gap-2">
                                        <select className="border border-white/71 rounded-lg p-3 text-white focus:outline-none">
                                            <option>India (+91)</option>
                                        </select>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="Enter phone number"
                                            className="w-full p-3 rounded-lg text-white border border-white/71 focus:outline-none focus:border-red-500"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold p-3 rounded-lg"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden w-full relative bg-black">
                <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-red-700/70 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-red-700/70 to-transparent pointer-events-none"></div>

                <motion.div
                    className="flex w-[200%]"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                    <img
                        src={Banks}
                        alt="Banks"
                        className="w-1/2 object-cover"
                    />
                    <img
                        src={Banks}
                        alt="Banks"
                        className="w-1/2 object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
}
