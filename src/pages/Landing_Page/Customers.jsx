import React from "react";
import Logo from "../../assets/Images/Growth.png";
import border from "../../assets/Images/icons/border.png";

function Customers() {
  return (
    <section className="relative py-16 bg-gray-100">
      {/* Border Image */}
      <img
        src={border}
        alt="Border Decoration"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <div className="order-1 md:order-1">
            <p className="text-red-600 font-medium text-xl mb-2">Customer stories</p>
            <h2 className="text-3xl md:text-3xl font-normal mb-6">
              Bold Visions That Shape Digital Futures
            </h2>

            <div className="md:hidden mb-6 flex justify-center">
              <img
                src={Logo}
                alt="Growth"
                className="max-w-full max-h-[350px] object-contain rounded-lg"
              />
            </div>

            {/* Feature 1 */}
            <div className="flex items-start mb-4 gap-3">
              <div className="flex-shrink-0 mt-1.5 w-5 h-5 rounded-full border-2 border-black bg-black flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <p className="text-base text-gray-800">
                <span className="text-red-600 font-medium text-lg">98%</span> Reduction in fraudulent applications with real-time verification
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start mb-4 gap-3">
              <div className="flex-shrink-0 mt-1.5 w-5 h-5 rounded-full border-2 border-black bg-black flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <p className="text-base text-gray-800">
                <span className="text-red-600 font-medium text-lg">5000+</span> Customer identities verified every day through our APIs
              </p>
            </div>

            <p className="text-gray-500 mb-2 text-base">
              "With Pentafox FastKYC, we were able to onboard customers instantly while staying compliant. The APIs are seamless, reliable, and give us the confidence to scale securely."
            </p>
            <p className="text-red-600 text-sm font-medium">
              — A Leading Fintech Partner
            </p>
          </div>

          {/* Right Side - Image for desktop only */}
          <div className="hidden md:flex justify-center items-center order-2">
            <img
              src={Logo}
              alt="Growth"
              className="max-w-full max-h-[450px] object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers;
