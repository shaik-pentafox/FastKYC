import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { CheckIcon } from "@mantine/core";
import { IconHourglass, IconHeart, IconWorld } from "@tabler/icons-react";

function Products({ sections = [], whyChoose = {}, features = [] }) {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [counterInView, setCounterInView] = useState(false);
  const sectionRefs = useRef([]);
  const counterRef = useRef(null);

const iconMap = {
  Hourglass: <IconHourglass size={24} />,
  Heart: <IconHeart size={24} />,
  World: <IconWorld size={24} />
};
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    sectionRefs.current.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // ✅ Counter Animation
  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCounterInView(true);
        });
      },
      { root: null, threshold: 0.3 }
    );
    if (counterRef.current) counterObserver.observe(counterRef.current);
    return () => counterObserver.disconnect();
  }, []);

  // ✅ Animations
  const topToBottom = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const containerVariants = { 
    hidden: {}, 
    visible: { transition: { staggerChildren: 0.3, ease: "easeOut" } } 
  };

  const bottomToTop = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      {/* ---------------- PRODUCTS SECTION ---------------- */}
      <section className="py-12 mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row gap-x-12">
          {/* Left Side */}
          <div className="flex-1 space-y-24">
            {sections.map((section, index) => (
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

          {/* Right Side Image */}
          {!isMobile && (
            <div className="flex-1 relative">
              <div className="sticky top-0 h-screen flex items-center justify-center">
                <div className="relative w-full max-w-md h-[80vh]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSection}
                      src={sections[activeSection].image}
                      alt={sections[activeSection].title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full object-contain rounded-lg"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------------- WHY CHOOSE SECTION ---------------- */}
      <section className="py-16 mb-24 mt-[-125px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.3 }} 
            variants={containerVariants}
          >
            {/* Left: Heading + Counters */}
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.p variants={topToBottom} className="text-red-600 font-medium text-[24px]">
                {whyChoose.heading}
              </motion.p>
              <motion.h2 variants={topToBottom} className="text-3xl md:text-[32px] font-medium leading-snug">
                {whyChoose.subheading}
              </motion.h2>
              <motion.p variants={topToBottom} className="text-gray-500 text-[20px] font-medium">
                {whyChoose.description}
              </motion.p>

              <motion.div className="flex flex-wrap justify-between mt-6 gap-6" ref={counterRef} variants={topToBottom}>
                {whyChoose.counters.map((counter, index) => (
                  <motion.div key={index} className="text-center min-w-[120px]" variants={topToBottom}>
                    <h3 className="text-[42px] font-bold text-black-600">
                      {counterInView ? <CountUp end={counter.end} duration={2} suffix={counter.suffix || ""} /> : 0}
                    </h3>
                    <p className="text-gray-500 text-[16px] font-medium">{counter.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Feature Cards */}
            <motion.div className="space-y-6 mt-6 lg:mt-0" variants={containerVariants}>
              {whyChoose.featureCards.map((card,index) => (
                <FeatureCard
                  key={index}
                  icon={iconMap[card.icon]}
                  title={card.title}
                  description={card.description}
                  variants={bottomToTop}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// ---------------- SECTION BLOCK ----------------
const SectionBlock = React.forwardRef(({ section, isActive, showHeader, isMobile }, ref) => {
  return (
    <motion.div
      ref={ref}
      className="flex flex-col justify-center py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.6 }}
      transition={{ duration: 0.6 }}
    >
      {showHeader && (
        <div className="mb-8">
          <p className="text-[#E20303] text-[24px] font-medium mb-2">Products</p>
          <h2 className="text-[32px] font-medium text-gray-900">
            Powerful APIs for fast, secure and reliable customer onboarding
          </h2>
        </div>
      )}

      {isMobile && (
        <div className="flex justify-center items-center mb-6">
          <motion.img
            key={section.id}
            src={section.image}
            alt={section.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm object-contain rounded-lg"
          />
        </div>
      )}

      <div className="flex items-center gap-4 mb-3">
        <img src={section.icon} alt={section.title} className="w-14 h-14 flex-shrink-0" />
        <h2 className="text-3xl md:text-[40px] font-bold">{section.title}</h2>
      </div>

      <p className="text-gray-500 text-[20px] font-medium mb-6">{section.description}</p>

      <p className="font-bold text-[24px] mb-2">Includes:</p>
      <ul className="list-none space-y-2">
        {section.list.map((item, i) => (
          <li key={i} className="flex items-center text-gray-700 text-[20px] font-medium">
            <CheckIcon className="w-3 h-3 mr-4 text-red-600" />
            {item}
          </li>
        ))}
      </ul>

      <div className="py-6">
        <button className="cursor-pointer flex items-center justify-center font-medium text-[20px] text-red-600 border border-red-600 rounded-[8px] px-7 py-1 hover:bg-red-50 transition">
          Know more
          <span className="ml-2 mb-1 text-[28px] font-medium leading-none">→</span>
        </button>
      </div>
    </motion.div>
  );
});
SectionBlock.displayName = "SectionBlock";

// ---------------- FEATURE CARD ----------------
const FeatureCard = ({ icon, title, description, variants }) => (
  <motion.div
    className="flex items-start bg-red-50 p-6 rounded-lg shadow-sm will-change-transform"
    variants={variants}
    whileHover={{ scale: 1.03, transition: { duration: 0.25, ease: "easeOut" } }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-md">
      {icon}
    </div>
    <div className="ml-4">
      <p className="text-black-900 font-medium text-[16px] leading-snug">{title}</p>
      <p className="text-gray-500 font-medium text-[16px] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default Products;
