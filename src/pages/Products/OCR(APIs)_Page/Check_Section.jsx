import React, { useState,useEffect,useRef } from "react";
import {
  IconCircleCheck,
  IconLayoutGrid,
  IconTextScan2,
  IconUserScan,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap = {
  LayoutGrid: <IconLayoutGrid size={18} />,
  UserScan: <IconUserScan size={18} />,
  TextScan: <IconTextScan2 size={18} />,
};

const sectionVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.3, 
    },
  }),
};

const pointVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

// 🔹 Main Component
function Check_Section({ data }) {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = data[0].tabs;
  const sections = data.slice(1);
  const activeSection =
    activeTab === "All" ? null : sections.find((s) => s.title === activeTab);

  const scrollRef = useRef(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const updateFades = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    if (scrollLeft <= 0) {
      setShowLeftFade(false);
      setShowRightFade(scrollWidth > clientWidth);
    }
    else if (scrollLeft + clientWidth >= scrollWidth - 1) {
      setShowLeftFade(true);
      setShowRightFade(false);
    }
    else {
      setShowLeftFade(true);
      setShowRightFade(true);
    }
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    updateFades();

    scrollEl.addEventListener("scroll", updateFades);
    window.addEventListener("resize", updateFades);

    return () => {
      scrollEl.removeEventListener("scroll", updateFades);
      window.removeEventListener("resize", updateFades);
    };
  }, []);

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-[#FFF2F2] rounded-lg p-6 sm:p-8">
          {/* Tabs (Desktop) */}
           <div className="relative hidden md:flex items-center bg-white rounded-[12px] p-4">
              {showLeftFade && (
                <div className="absolute left-0 top-0 h-full w-10 pointer-events-none bg-gradient-to-r from-red-100 to-transparent rounded-l-[12px] z-10" />
              )}
              <button
                onClick={() => setActiveTab("All")}
                className={`relative z-20 flex items-center gap-2 px-4 py-2 rounded-[8px] text-[16px] font-bold transition cursor-pointer mr-2 ${activeTab === "All"
                  ? "bg-[#F44336] text-white shadow"
                  : "text-[#F44336] hover:bg-red-100"
                  }`}
              >
                {iconMap.LayoutGrid}
                All
              </button>
              <div
                ref={scrollRef}
                className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scroll-smooth flex-1 relative"
                style={{ scrollbarWidth: "none" }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-[8px] text-[16px] font-bold transition cursor-pointer ${activeTab === tab.key
                      ? "bg-[#F44336] text-white shadow"
                      : "text-[#F44336] hover:bg-red-100"
                      }`}
                  >
                    {iconMap[tab.icon]}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Right Fade */}
              {showRightFade && (
                <div className="absolute right-0 top-0 h-full w-10 pointer-events-none bg-gradient-to-l from-red-100 to-transparent rounded-r-[12px]" />
              )}
            </div>

          {/* Sections */}
          <div className="relative -mt-6 md:mt-8">
            <AnimatePresence mode="wait">
              {/* Mobile → Always show all */}
              <div className="block md:hidden">
                {sections.map((section, index) => (
                  <SectionBlock key={section.id} section={section} index={index} />
                ))}
              </div>

              {/* Desktop → Filtered or all */}
              <div className="hidden md:block">
                {activeTab === "All" ? (
                  sections.map((section, index) => (
                    <SectionBlock key={section.id} section={section} index={index} />
                  ))
                ) : (
                  activeSection && <SectionBlock section={activeSection} index={0} />
                )}
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// 🔹 Section Block
function SectionBlock({ section, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      key={section.id}
      className={`w-full ${index === 0 ? "pt-8 sm:pt-10 pb-0" : "py-12 sm:py-16"}`}
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center px-4 sm:px-6 md:px-12 lg:px-3">
        {!isEven ? (
          <>
            {/* Image Left */}
            <div className="flex justify-center items-end order-2 md:order-1 overflow-hidden">
              <img src={section.image} alt={section.title} className="max-w-full h-auto" />
            </div>
            {/* Content Right */}
            <div className="order-1 md:order-2">
              <SectionContent section={section} />
            </div>
          </>
        ) : (
          <>
            {/* Content Left */}
            <div className="order-1">
              <SectionContent section={section} />
            </div>
            {/* Image Right */}
            <div className="flex justify-center items-end order-2 overflow-hidden">
              <img src={section.image} alt={section.title} className="max-w-full h-auto" />
            </div>
          </>
        )}
      </div>
    </motion.section>
  );
}

// 🔹 Section Content
function SectionContent({ section }) {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161C2D] leading-tight mb-4">
        {section.title}{" "}
        {section.subtitle && (
          <span className="block text-lg sm:text-xl lg:text-[24px] text-[#F44336] font-bold mt-2">
            {section.subtitle}
          </span>
        )}
      </h2>

      <p className="text-base sm:text-lg lg:text-xl text-[#616161] font-medium mb-6">
        {section.description}
      </p>

      <ul className="space-y-3">
        {section.points.map((point, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-3"
            variants={pointVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
          >
            <IconCircleCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#F44336] mt-1" />
            <span className="text-base sm:text-lg lg:text-xl text-[#616161] font-medium">
              {point}
            </span>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

export default Check_Section;
