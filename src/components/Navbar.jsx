import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "./MenuContext";
import ARLogo from "../assets/Images/check.png";
import {
  FaBars,
  FaTimes,
  FaInfoCircle,
  FaHammer,
  FaPhoneAlt,
  FaHome,
} from "react-icons/fa";

export default function Navbar() {
  const { isOpen, setIsOpen } = useMenu();

  return (
    //bg-[#002349]
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#002349] shadow-md">
      {/* <div className="flex justify-between items-center px-8 py-4"> */}
      <div className="flex flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        {/* ===== LEFT: Logo and Name ===== */}
        <div className="flex items-center gap-2 flex-shrink min-w-0">
          <img
            src={ARLogo}
            alt="AR Construction"
            className="h-10 sm:h12 md:h-14 lg:h-18 w-auto drop-shadow-lg "
          />
          <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-[#FFD700] tracking-wide whitespace-normal break-words leading-tight">
            AR Construction & Properties
          </h1>
        </div>

        {/* ===== RIGHT: MENU Button ===== */}
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          className="bg-transparent px-2 py-1 sm:px-5 sm:py-2  flex items-center gap-2 sm:gap-3 cursor-pointer border border-[#FFD700]/50 rounded-md ml-auto sm:ml-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            // Only the X icon (no text)
            <FaTimes className="text-[#FFD700] text-lg sm:text-xl leading-none" />
          ) : (
            <>
              <span className="text-[#FFD700] font-semibold tracking-[2px] text-xs sm:text-sm leading-none">
                MENU
              </span>
              <FaBars className="text-[#FFD700] text-base sm:text-lg leading-none" />
            </>
          )}
        </motion.div>
      </div>

      {/* ===== Slide-In Side Menu ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[50vw] sm:w-64  bg-white text-[#002349] border-l-4 border-[#FFD700] shadow-[0_0_20px_rgba(0,0,0,0.1)] backdrop-blur-md shadow-lg flex flex-col items-start justify-center px-8 space-y-8 text-xl font-medium z-50 rounded-l-2xl"
          >
            {/* ===== Menu Links ===== */}
            <motion.a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#FFD700] flex items-center gap-3 transition duration-300"
            >
              <FaHome className="text-[#FFD700]" />
              Home
            </motion.a>
            <motion.a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#FFD700] flex items-center gap-3 transition duration-300"
            >
              <FaInfoCircle className="text-[#FFD700]" />
              About
            </motion.a>

            <motion.a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#FFD700] flex items-center gap-3 transition duration-300"
            >
              <FaHammer className="text-[#FFD700]" />
              Projects
            </motion.a>

            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#FFD700] flex items-center gap-3 transition duration-300"
            >
              <FaPhoneAlt className="text-[#FFD700]" />
              Contact
            </motion.a>

            {/* ===== Close Button ===== */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-[#FFD700] text-[#002349] font-semibold px-3 py-1.5 rounded-md flex items-center gap-2 shadow hover:bg-[#e6c200] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTimes className="text-[#002349]" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
