import React from "react";
import Design from "../../assets/Images/Design.png";

function Designed() {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-black to-red-900">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-red-600 text-lg font-normal mb-2">
              Designed for developers
            </h3>
            <h2 className="text-3xl md:text-3xl font-normal text-white mb-4">
              Integrate in minutes.<br /> Scale with confidence
            </h2>
            <p className="text-gray-200 text-md md:text-md">
              We take care of the complex KYC, compliance, and verification
              frameworks so your team can focus on building amazing products.
              With our REST APIs, clear documentation, and developer-first
              approach, you can go from sandbox to production in hours — and
              scale securely to millions of verifications.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-start items-start">
            <img
              src={Design}
              alt="Developer integration illustration"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Designed;
