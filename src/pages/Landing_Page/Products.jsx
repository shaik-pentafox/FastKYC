import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBolt, IconShieldCheck, IconGlobe } from "@tabler/icons-react";

// Product images
import Product1 from "../../assets/Images/Product_assets/Product1.png";
import Product2 from "../../assets/Images/Product_assets/Product2.png";
import Product3 from "../../assets/Images/Product_assets/Product3.png";
import Product4 from "../../assets/Images/Product_assets/Product4.png";
import Product5 from "../../assets/Images/Product_assets/Product5.png";

// Sections data
const productSections = [
  {
    id: 1,
    title: "Customer KYC APIs",
    description:
      "Simplify onboarding with powerful KYC checks that confirm identity, address, and authenticity in real time.",
    list: [
      "PAN Verification & PAN–Aadhaar Link",
      "Name & Address Match",
      "Driving License, Voter ID, Passport Verification",
      "Liveliness Check & Face Match",
    ],
    image: Product1,
  },
  {
    id: 2,
    title: "Banking APIs",
    description:
      "Instantly verify customer bank accounts and prevent failed transactions. Our APIs ensure accurate account validation, enabling secure, smooth, and trustworthy payments.",
    list: ["Bank Account Verification"],
    image: Product2,
  },
  {
    id: 3,
    title: "GST & Business Verification APIs",
    description:
      "Verify GST-registered businesses and their compliance status without manual effort. Ensure you only work with genuine, tax-compliant entities.",
    list: ["GST Verification (No PAN Input)"],
    image: Product3,
  },
  {
    id: 4,
    title: "OCR APIs",
    description:
      "Extract data from government IDs and documents instantly with advanced OCR technology. Save time, eliminate manual entry errors, and accelerate digital onboarding.",
    list: [
      "OCR for PAN, Passport, Driving License, Voter ID, Vehicle RC",
      "Aadhaar OCR",
    ],
    image: Product4,
  },
  {
    id: 5,
    title: "Security & Compliance APIs",
    description:
      "Safeguard sensitive data with in-built compliance tools. Enhance document integrity, protect customer identity, and meet regulatory requirements with ease.",
    list: ["Aadhaar Masking", "Watermark"],
    image: Product5,
  },
];

function Products() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef([]);

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer to detect which section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { root: null, threshold: 0.6 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Products Section */}
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-20 mb-24">
        <div className="flex flex-col md:flex-row gap-x-12">
          {/* Left side */}
          <div className="flex-1 space-y-24">
            {productSections.map((section, index) => (
              <SectionBlock
                key={section.id}
                section={section}
                ref={(el) => (sectionRefs.current[index] = el)}
                isActive={activeSection === index}
                showHeader={index === 0}
                isMobile={isMobile}
              />
            ))}
          </div>

          {/* Right side - Sticky image */}
          {!isMobile && (
            <div className="flex-1 relative">
              <div className="sticky top-0 h-screen flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSection}
                    src={productSections[activeSection].image}
                    alt={productSections[activeSection].title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md max-h-[80vh] object-contain rounded-lg"
                  />
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FastKYC section */}
      <div className="container mx-auto py-16 px-6 md:px-20 mb-24 mt-[-45px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-red-600 font-medium text-2xl">Why choose FastKYC?</p>
            <h2 className="text-3xl md:text-3xl font-normal leading-snug">
              The core of identity & compliance <br /> for growing businesses
            </h2>
            <p className="text-gray-500 text-lg font-normal">
              FastKYC makes onboarding effortless. We combine speed, trust, and compliance to help
              businesses onboard customers instantly while staying fully secure. No delays, no risks—just smarter verification.
            </p>

            <div className="flex flex-wrap justify-between mt-6 gap-6">
              <div className="text-center flex-1 min-w-[120px]">
                <h3 className="text-4xl font-bold">500+</h3>
                <p className="text-gray-500 text-base">Identities verified</p>
              </div>
              <div className="text-center flex-1 min-w-[120px]">
                <h3 className="text-4xl font-bold">96%</h3>
                <p className="text-gray-500 text-base">Auto-approval rate</p>
              </div>
              <div className="text-center flex-1 min-w-[120px]">
                <h3 className="text-4xl font-bold">60%</h3>
                <p className="text-gray-500 text-base">Reduction in drop-offs</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 mt-6 lg:mt-0">
            <FeatureCard
              icon={<IconBolt size={24} />}
              title="Faster Approvals"
              description="Cut verification times from days to minutes."
            />
            <FeatureCard
              icon={<IconShieldCheck size={24} />}
              title="Trusted Security"
              description="Protect your business with AI-powered fraud detection."
            />
            <FeatureCard
              icon={<IconGlobe size={24} />}
              title="Global Compliance"
              description="Stay ahead with KYC, AML, GDPR, and more."
            />
          </div>
        </div>
      </div>
    </>
  );
}

// SectionBlock with mobile dynamic image
const SectionBlock = React.forwardRef(({ section, isActive, showHeader, isMobile }, ref) => {
  return (
    <div
      ref={ref}
      className={`min-h-[90vh] flex flex-col justify-center py-10 transition-all duration-500 ${
        isActive ? "opacity-100 translate-y-0" : "opacity-60 translate-y-5"
      }`}
    >
      {showHeader && (
        <div className="mb-8">
          <p className="text-red-600 text-xl mb-2">Products</p>
          <h2 className="text-3xl md:text-3xl font-medium text-gray-900">
            Powerful APIs for fast, secure, and reliable customer onboarding
          </h2>
        </div>
      )}

      {/* Mobile - show image only if active */}
      {isMobile && (
        <div className="mb-6 flex justify-center">
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.img
                key={section.id}
                src={section.image}
                alt={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-sm object-contain rounded-lg"
              />
            )}
          </AnimatePresence>
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-semibold mb-3">{section.title}</h2>
      <p className="text-gray-500 text-base mb-6">{section.description}</p>

      <p className="font-bold mb-2">Includes:</p>
      <ul className="list-none space-y-2">
        {section.list.map((item, i) => (
          <li key={i} className="flex items-center text-gray-700 text-base" style={{color:"gray"}}>
            <span className="inline-block w-5 h-5 mr-2 text-green-600">✔</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

SectionBlock.displayName = "SectionBlock";

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start bg-red-50 p-6 rounded-lg shadow-sm">
    <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-md">
      {icon}
    </div>
    <div className="ml-4">
      <p className="text-purple-900 font-semibold text-lg leading-snug">{title}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default Products;
