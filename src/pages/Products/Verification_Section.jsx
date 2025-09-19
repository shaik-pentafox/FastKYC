import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconCircleCheck,
  IconId,
  IconUserCheck,
  IconMapPin,
  IconIdBadge2,
  IconHandClick,
  IconPlaneInflight,
  IconLink,
  IconLayoutGrid,
  IconUserScan,
  IconTextScan2,
  IconPasswordFingerprint,
} from "@tabler/icons-react";

//actual icons
const iconMap = {
  LayoutGrid: <IconLayoutGrid size={18} stroke={1.5} />,
  Finger: <IconPasswordFingerprint size={18} stroke={1.5} />,
  Id: <IconId size={18} stroke={1.5} />,
  Check: <IconUserCheck size={18} stroke={1.5} />,
  MapPin: <IconMapPin size={18} stroke={1.5} />,
  Badge2: <IconIdBadge2 size={18} stroke={1.5} />,
  HandClick: <IconHandClick size={18} stroke={1.5} />,
  PlaneInflight: <IconPlaneInflight size={18} stroke={1.5} />,
  Link: <IconLink size={18} stroke={1.5} />,
  UserScan: <IconUserScan size={18} stroke={1.5} />,
  TextScan: <IconTextScan2 size={18} stroke={1.5} />,
};

function Verification_Section({ data, type = "normal" }) {
  const [activeTab, setActiveTab] = useState("All");

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

  // useEffect(() => {
  //   const el = scrollRef.current;
  //   if (!el) return;

  //   const handleWheel = (e) => {
  //     if (el.matches(":hover")) {
  //       if (e.deltaY !== 0) {
  //         e.preventDefault();
  //         el.scrollLeft += e.deltaY;
  //       }
  //     }
  //   };

  //   el.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => el.removeEventListener("wheel", handleWheel);
  // }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (!el.matches(":hover")) return;
      if (e.deltaY === 0) return;
      e.preventDefault();
      const delta = e.deltaY > 0 ? Math.min(e.deltaY, 20) : Math.max(e.deltaY, -20);
      const scrollSpeed = 2;
      el.scrollLeft += delta * scrollSpeed;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
  };

  // ----- NORMAL -----
  if (type === "normal") {
    return (
      <section className="w-full bg-[#FFFFFF] py-18">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-20">
          {/* Text */}
          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-[40px] font-bold text-[#161C2D] mb-4"
            >
              {data.title}
              {data.subheading && (
                <span className="text-[20px] text-[#F44336] font-bold ml-2">
                  {data.subheading}
                </span>
              )}
              {data.subtitle && (
                <span className="block text-[20px] text-[#F44336] font-bold mt-2">
                  {data.subtitle}
                </span>
              )}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#616161] font-medium text-[20px] mb-6"
            >
              {data.description}
            </motion.p>

            <ul className="space-y-3">
              {data.points?.map((point, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-2"
                >
                  <IconCircleCheck className="w-6 h-6 text-[#F44336] mt-0.5" />
                  <span className="text-[#616161] text-[20px] font-medium">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={data.image} alt={data.title} className="max-w-full h-auto" />
          </motion.div>
        </div>
      </section>
    );
  }

  // ----- ALTERNATING -----
  if (type === "alternating") {
    return (
      <>
        {data.map((item) => {
          const isOdd = item.id % 2 !== 0;
          const contentParentVariants = {
            hidden: { opacity: 0, y: isOdd ? -40 : 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
          };
          const contentChildVariants = { hidden: { opacity: 0, y: isOdd ? -20 : 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
          const imageVariants = { hidden: { opacity: 0, y: isOdd ? 40 : -40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } } };

          return (
            <section key={item.id} className="w-full py-18" style={{ backgroundColor: item.bg }}>
              <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-18 items-center px-6 md:px-12 lg:px-20 ${!isOdd ? "rounded-2xl p-10" : ""}`}>
                {/* Text */}
                <motion.div
                  className={`order-1 md:order-${isOdd ? "1" : "2"}`}
                  variants={contentParentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <motion.h2 className="text-3xl md:text-[40px] font-bold text-[#161C2D] mb-4" variants={contentChildVariants}>
                    {item.title}
                    {item.subheading && <span className="text-[20px] text-[#F44336] font-bold">{item.subheading}</span>}
                    {item.subtitle && <span className="block text-[20px] text-[#F44336] font-bold mt-2">{item.subtitle}</span>}
                  </motion.h2>
                  <motion.p className="text-[#616161] font-medium text-[20px] mb-6" variants={contentChildVariants}>
                    {item.description}
                  </motion.p>
                  <motion.ul className="space-y-3">
                    {item.features?.map((feature, index) => (
                      <motion.li key={index} className="flex items-start gap-2" variants={contentChildVariants}>
                        <IconCircleCheck className="w-6 h-6 text-[#F44336] mt-0.5" />
                        <span className="text-[#616161] text-[20px] font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                {/* Image */}
                <motion.div
                  className={`flex justify-center order-2 md:order-${isOdd ? "2" : "1"}`}
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <img src={item.image} alt={item.alt || item.title} className="max-w-full h-auto" />
                </motion.div>
              </div>
            </section>
          );
        })}
      </>
    );
  }

  // ----- TABS -----
  if (type === "tabs") {
    const tabs = data[0].tabs;
    const sections = data.slice(1);
    const activeSection =
      activeTab === "All" ? null : sections.find((s) => s.title === activeTab);

    return (
      <section className="w-full py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-[#FFF2F2] rounded-[12px] p-8" >
            {/* Tabs*/}
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
                className="flex items-center gap-1 overflow-x-auto whitespace-nowrap scroll-smooth flex-1 relative"
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

              {showRightFade && (
                <div className="absolute right-0 top-0 h-full w-10 pointer-events-none bg-gradient-to-l from-red-100 to-transparent rounded-r-[12px]" />
              )}
            </div>

            {/* Sections */}
            <div className="relative -mt-8 lg:-mt-4">
              <AnimatePresence mode="wait">
                {/* 🔹 On mobile */}
                <div className="block md:hidden">
                  {sections.map((item, index) => {
                    const containerVariants = {
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.2 } },
                    };

                    const itemVariants = {
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    };

                    return (
                      <section key={item.id} className="w-full py-10">
                        <div className="grid grid-cols-1 gap-6">
                          {/* Text with staggered animation */}
                          <motion.div
                            className="order-1"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                          >
                            <motion.h2
                              variants={itemVariants}
                              className="text-2xl font-bold text-[#161C2D] mb-4"
                            >
                              {item.title}
                            </motion.h2>

                            <motion.p
                              variants={itemVariants}
                              className="text-[#616161] font-medium text-base mb-6"
                            >
                              {item.description}
                            </motion.p>

                            <motion.ul className="space-y-3">
                              {item.features?.map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  variants={itemVariants}
                                  className="flex items-start gap-2 text-[#616161] text-base font-medium"
                                >
                                  <IconCircleCheck className="w-5 h-5 text-[#F44336] mt-0.5" />
                                  {feature}
                                </motion.li>
                              ))}
                            </motion.ul>
                          </motion.div>

                          {/* Image after text */}
                          <motion.div
                            className="order-2 flex justify-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true, amount: 0.3 }}
                          >
                            <img
                              src={item.image}
                              alt={item.alt || item.title}
                              className="max-w-full h-auto"
                            />
                          </motion.div>
                        </div>
                      </section>
                    );
                  })}
                </div>


                {/* 🔹 On desktop*/}
                <div className="hidden md:block">
                  {activeTab === "All" ? (
                    <motion.div
                      key="all"
                      variants={fadeVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {sections.map((item, index) => {
                        const isOdd = index % 2 === 0;

                        const containerVariants = {
                          hidden: {},
                          visible: { transition: { staggerChildren: 0.25 } },
                        };

                        const itemVariants = {
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                        };

                        return (
                          <section key={item.id} className="w-full py-14">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                              {/* Text with staggered animation */}
                              <motion.div
                                className={`order-1 md:order-${isOdd ? "1" : "2"}`}
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                              >
                                <motion.h2
                                  variants={itemVariants}
                                  className="text-3xl md:text-[40px] font-bold text-[#161C2D] mb-4"
                                >
                                  {item.title}
                                </motion.h2>

                                <motion.p
                                  variants={itemVariants}
                                  className="text-[#616161] font-medium text-[20px] mb-6"
                                >
                                  {item.description}
                                </motion.p>

                                <motion.ul className="space-y-3">
                                  {item.features?.map((feature, idx) => (
                                    <motion.li
                                      key={idx}
                                      variants={itemVariants}
                                      className="flex items-start gap-2 text-[#616161] text-[20px] font-medium"
                                    >
                                      <IconCircleCheck className="w-6 h-6 text-[#F44336] mt-0.5" />
                                      {feature}
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              </motion.div>

                              <motion.div
                                className={`flex justify-center order-2 md:order-${isOdd ? "2" : "1"}`}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true, amount: 0.3 }}
                              >
                                <img
                                  src={item.image}
                                  alt={item.alt || item.title}
                                  className="max-w-full h-auto"
                                />
                              </motion.div>
                            </div>
                          </section>
                        );
                      })}
                    </motion.div>
                  ) : (
                    activeSection && (
                      <motion.section
                        key={activeSection.id}
                        variants={fadeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="w-full py-14"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                          {/* Text with staggered animation */}
                          <motion.div
                            className="order-1 md:col-start-1 md:order-1"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                          >
                            <motion.h2
                              variants={itemVariants}
                              className="text-3xl md:text-[40px] font-bold text-[#161C2D] mb-4"
                            >
                              {activeSection.title}
                            </motion.h2>

                            <motion.p
                              variants={itemVariants}
                              className="text-[#616161] font-medium text-[20px] mb-6"
                            >
                              {activeSection.description}
                            </motion.p>

                            <motion.ul className="space-y-3">
                              {activeSection.features?.map((feature, idx) => (
                                <motion.li
                                  key={idx}
                                  variants={itemVariants}
                                  className="flex items-start gap-2 text-[#616161] text-[20px] font-medium"
                                >
                                  <IconCircleCheck className="w-6 h-6 text-[#F44336] mt-0.5" />
                                  {feature}
                                </motion.li>
                              ))}
                            </motion.ul>
                          </motion.div>

                          {/* Image after text */}
                          <motion.div
                            className="flex justify-center order-2 md:col-start-2 md:order-2"
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true, amount: 0.3 }}
                          >
                            <img
                              src={activeSection.image}
                              alt={activeSection.alt || activeSection.title}
                              className="max-w-full h-auto"
                            />
                          </motion.div>
                        </div>
                      </motion.section>
                    )
                  )}
                </div>

              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default Verification_Section;
