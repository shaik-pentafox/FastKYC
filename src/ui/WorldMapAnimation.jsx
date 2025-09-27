import { motion } from "framer-motion";
import { IconMapPinFilled } from "@tabler/icons-react"; 
import SMS_Delivery from "../assets/Images/Productsverify_assets/World.png";

const locations = [
  { id: 4, name: "India", style: { top: "36%", left: "64%" } },
  { id: 1, name: "USA", style: { top: "31%", left: "13%" } },
  { id: 2, name: "Spain", style: { top: "2%", left: "28%" } },
  { id: 3, name: "Africa", style: { top: "48%", left: "49%" } },
  { id: 5, name: "Philippines", style: { top: "45%", left: "74%" } },
  { id: 6, name: "Singapore", style: { top: "60%", left: "84%" } },
];

// Parent animation for stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4, delayChildren: 0.2 },
  },
};

// Pin animation
const pinVariants = {
  hidden: { opacity: 0, scale: 0.5, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Label animation
const labelVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function WorldMapAnimation() {
  return (
    <motion.div
      className="relative w-full flex justify-center items-center px-2 sm:px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative w-full max-w-[900px] aspect-[16/9]">
        {/* World Map */}
        <img
          src={SMS_Delivery}
          alt="World Map"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Pins + Labels */}
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="absolute flex flex-col items-center"
            style={loc.style}
          >
            <motion.div variants={pinVariants}>
              <IconMapPinFilled className="text-[#F43B35] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.div>

            <motion.div
              variants={labelVariants}
              className="mt-1 px-2 sm:px-3 py-0.5 sm:py-1 bg-[#F43B35] text-white rounded-full shadow-md text-[8px] sm:text-[10px] md:text-[10px] font-medium whitespace-nowrap"
            >
              {loc.name}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
