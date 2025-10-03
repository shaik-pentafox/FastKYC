import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function WaKyc_Onboarding({ data }) {
  const [counterInView, setCounterInView] = useState(false);
  const counterRef = useRef(null);

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-gradient-to-r from-[#FFD8D8] to-[#FFFFFF] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left side*/}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className="text-3xl md:text-[32px] font-medium leading-snug text-[#212121] mb-6"
              variants={itemVariants}
            >
              {data.sectionTitle}
            </motion.h3>

            <motion.p
              className="text-[#424242] text-[20px] font-medium"
              variants={itemVariants}
            >
              {data.description}
            </motion.p>

            {data.counters && (
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
                ref={counterRef}
                variants={containerVariants}
              >
                {data.counters.map((counter, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                  >
                    <h3 className="text-[42px] font-bold text-[#333333]">
                      {counterInView ? (
                        <CountUp
                          end={counter.end}
                          duration={2}
                          suffix={counter.suffix || ""}
                        />
                      ) : (
                        0
                      )}
                    </h3>
                    <p className="text-[#424242] text-[16px] font-medium">
                      {counter.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </motion.div>

          {/* Right side*/}
          <motion.div
            className="flex justify-center items-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={data.image}
              alt="Illustration"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WaKyc_Onboarding;
