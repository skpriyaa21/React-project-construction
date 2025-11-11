import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMenu } from "./MenuContext";
import {
  FaHandshake,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

export default function HeroSection() {
  const { isOpen } = useMenu();
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center overflow-hidden bg-[#002349] text-white"
    >
      {/* ===== Background with Parallax ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1900&q=80')",
          transform: `translateY(${offsetY * 0.35}px)`,
          filter: "brightness(0.75)",
        }}
      />

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-[rgba(0,35,73,0.4)]" />

      {/* ===== Text Content ===== */}
      <motion.div
        className="relative z-10 px-8 md:px-20 max-w-4xl text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-[#FFD700] uppercase tracking-[4px] text-sm mb-4 font-medium">
          Welcome to AR Construction & Properties
        </p>

        <h2
          className="text-xl sm:text-2xl md:text-4xl font-extralight leading-snug text-white mb-6 break-words whitespace-normal"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          We are a creative team transforming ideas into{" "}
          <span className="text-[#FFD700] font-light">enduring landmarks</span>{" "}
          — crafting dreams with{" "}
          <span className="text-[#FFD700] font-light">concrete and steel.</span>
        </h2>

        <h2
          className="flex flex-wrap items-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-4xl font-light text-white mb-8 leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <FaHandshake className="text-[#FFD700] text-3xl md:text-4xl" />
          Build on <span className="text-[#FFD700] font-medium">Trust</span>,
          Focused on <span className="text-[#FFD700] font-medium">Quality</span>
        </h2>

        <p className="text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed">
          From dream homes to landmark commercial projects — we craft excellence
          with precision, passion, and integrity.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#FFD700] text-[#002349] font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition"
          >
            Explore Projects
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white/40 px-6 py-3 rounded-md text-white hover:bg-white/10 transition"
          >
            Get a Quote
          </button>
        </div>
      </motion.div>

      {/* ===== Right Vertical Social Icons (CSS tooltip - reliable) ===== */}
      {!isOpen && (
        <div className="absolute right-4 sm:right-8 top-[47%] transform -translate-y-1/2 flex flex-col items-center gap-6 z-50">
          {[
            { icon: <FaInstagram />, label: "Instagram" },
            { icon: <FaYoutube />, label: "YouTube" },
            { icon: <FaEnvelope />, label: "Mail" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative group flex flex-col items-center cursor-pointer"
              onClick={(e) => e.preventDefault()}
              style={{ overflow: "visible" }} // ensure tooltip isn't clipped
            >
              {/* Icon Circle */}
              <button
                type="button"
                className="w-12 h-12 sm:w-10 sm:h-10 rounded-full border-2 border-white flex items-center justify-center text-white
                   transition-all duration-300 transform group-hover:scale-110
                   hover:border-[#FFD700] hover:text-[#FFD700]"
              >
                {item.icon}
              </button>

              {/* Tooltip (CSS-driven fade + slide from right -> left) */}
              <span
                className="absolute right-14 top-1/2 -translate-y-1/2 text-sm sm:text-sm text -[#FFD700] font-medium
             opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
             transition-all duration-700 ease-in-out whitespace-nowrap pointer-events-none origin-right"
                style={{ willChange: "transform, opacity" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* ===== Scroll Down (Bottom Right with Bounce) ===== */}
      <motion.div
        className="absolute bottom-8 right-8 flex items-center space-x-2 text-white z-10 cursor-pointer"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <FaChevronDown className="text-[#FFD700] text-lg" />
        <span className="tracking-widest text-sm font-semibold text-white">
          SCROLL DOWN
        </span>
      </motion.div>
    </section>
  );
}
