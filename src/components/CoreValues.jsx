import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CoreValues({ coreValues }) {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 640px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const radius = isMobile ? 100 : 150;

  return (
    <div
      className="w-full flex justify-center items-center 
             md:ml-[-40px] ml-[-65px] 
             md:mt-0 mt-[-35px]"
    >
      <div
        className={`relative ${
          isMobile ? "w-[240px] h-[300px]" : "w-[280px] h-[320px]"
        } flex justify-center items-center overflow-visible`}
      >
        {/* Center Text */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <motion.h3
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className={`${
              isMobile ? "text-xl" : "text-2xl"
            } font-bold text-[#002349]`}
          >
            Values
          </motion.h3>
        </motion.div>

        {/* Circular Items */}
        {coreValues.map((value, i) => {
          const angle = (i / coreValues.length) * 2 * Math.PI - Math.PI / 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center text-center cursor-pointer"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.3,
                rotate: 10,
                transition: { duration: 0.6 },
              }}
            >
              <div
                className={`${
                  isMobile ? "text-xl" : "text-2xl sm:text-3xl"
                } text-[#FFD700] mb-1 animate-pulse`}
              >
                {value.icon}
              </div>
              <span
                className={`${
                  isMobile ? "text-xs max-w-[70px]" : "text-sm max-w-[80px]"
                } font-semibold text-[#002349] text-center leading-tight  flex justify-center`}
              >
                {value.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
