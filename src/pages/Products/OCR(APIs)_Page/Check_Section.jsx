import React from "react";
import { IconCircleCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

// Animations

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function Check_Section({ data }) {
    return (
        <>
            {data.map((section, index) => (
                <section
                    key={section.id}
                    className={`w-full ${index === 0 ? "bg-[#F7F7F7] pt-18 pb-0" : "py-18"}`}
                >
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-18 items-center px-6 md:px-12 lg:px-20">
                        {section.id === 2 ? (
                            <>
                                {/* Image Left*/}
                                <motion.div
                                    className="flex justify-center items-end order-2 md:order-1 overflow-hidden"
                                    variants={fadeDown}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="max-w-full h-auto"
                                    />
                                </motion.div>

                                {/* Content Right*/}
                                <motion.div
                                    className="order-1 md:order-2"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <h2 className="text-3xl md:text-[40px] font-bold text-[#161C2D] leading-tight mb-4">
                                        {section.title}{" "}
                                        {section.subtitle && (
                                            <span className="block text-[20px] text-[#F44336] font-medium mt-2">
                                                {section.subtitle}
                                            </span>
                                        )}
                                    </h2>

                                    <p className="text-[#616161] font-medium text-[20px] mb-6">
                                        {section.description}
                                    </p>

                                    <ul className="space-y-4">
                                        {section.points.map((point, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-3"
                                                variants={fadeUp}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.3 }}
                                                transition={{ delay: i * 0.2 }}
                                            >
                                                <IconCircleCheck className="w-6 h-6 text-[#F44336] mt-1" />
                                                <span className="text-[#616161] text-[20px] font-medium">
                                                    {point}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </>
                        ) : (
                            <>
                                {/* Content Left */}
                                <motion.div
                                    className="order-1"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <h2 className="text-3xl md:text-[40px] font-bold text-[#161C2D] leading-tight mb-4">
                                        {section.title}{" "}
                                        {section.subtitle && (
                                            <span className="block text-[20px] text-[#F44336] font-medium mt-2">
                                                {section.subtitle}
                                            </span>
                                        )}
                                    </h2>

                                    <p className="text-[#616161] font-medium text-[20px] mb-6">
                                        {section.description}
                                    </p>

                                    <ul className="space-y-3">
                                        {section.points.map((point, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-2"
                                                variants={fadeUp}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.3 }}
                                                transition={{ delay: i * 0.2 }}
                                            >
                                                <IconCircleCheck className="w-6 h-6 text-[#F44336] mt-0.5" />
                                                <span className="text-[#616161] text-[20px] font-medium">
                                                    {point}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Image Right */}
                                <motion.div
                                    className="flex justify-center items-end order-2 overflow-hidden"
                                    variants={fadeDown}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="max-w-full h-auto "
                                    />
                                </motion.div>
                            </>
                        )}
                    </div>
                </section>
            ))}
        </>
    );
}

export default Check_Section;
