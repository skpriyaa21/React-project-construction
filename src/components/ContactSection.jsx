import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import contactbg from "../assets/Images/contactbg.jpg";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
  FaEnvelopeOpen,
  FaInstagram,
} from "react-icons/fa";
const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hzpex0i", // 🔹 Replace with your EmailJS service ID
        "template_d8cxxta", // 🔹 Replace with your EmailJS template ID
        form.current,
        "1OI1ZkwCN1euiaFCf" // 🔹 Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus({
            message: "Message sent successfully!",
            type: "success",
          });
          e.target.reset(); // Clear form
          setTimeout(() => setStatus({ message: "", type: "" }), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus({
            message: "Failed to send message. Please try again later.",
            type: "error",
          });
          setTimeout(() => setStatus({ message: "", type: "" }), 3000);
        }
      );
  };
  return (
    <section
      id="contact"
      className="relative py-16 text-white bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${contactbg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.75)] backdrop-blur-[1px]" />

      {/* Heading (slightly overlapping, compact spacing) */}
      <motion.div
        className="relative z-30 text-center px-6 mb-12"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="uppercase text-[#FFD700] tracking-[4px] text-xs mb-2">
          CONTACT US
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#FFD700] drop-shadow-md">
          Reach out for a new project or just
          <br className="hidden md:block" /> say hello
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[rgba(255,255,255,0.05)] p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold tracking-wide mb-6">
              SEND US A MESSAGE
            </h3>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-600 focus:border-green-400 p-3 mb-5 outline-none text-white transition"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-600 focus:border-green-400 p-3 mb-5 outline-none text-white transition"
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Subject"
              className="w-full bg-transparent border-b border-gray-600 focus:border-green-400 p-3 mb-5 outline-none text-white transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full bg-transparent border-b border-gray-600 focus:border-green-400 p-3 mb-5 outline-none text-white transition resize-none"
              required
            />
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />
            <button className="w-full bg-[#FFD700] hover:bg-green-600 text-black font-semibold py-3 rounded-md transition">
              SUBMIT
            </button>
            {/* Success / Error Message */}
            {status.message && (
              <div
                className={`mt-4 p-3 rounded-md text-center text-sm font-medium ${
                  status.type === "success"
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {status.message}
              </div>
            )}
          </motion.form>

          {/* Right - Contact Info */}
          <motion.div
            className="bg-[rgba(255,255,255,0.05)] p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold tracking-wide mb-6">
              CONTACT INFO
            </h3>
            <div className="mb-5">
              <h4 className="text-[#FFD700] font-semibold mb-1">
                Where to Find Us
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                84/1 Palai Rd,Oppt.Govt Medical College,
                <br />
                (1st Floor)Tuticorin, Tamil Nadu
                <br />
                India
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-[#FFD700] font-semibold mb-1">Email Us At</h4>
              <p className="text-gray-300 text-sm">
                arconstruction.tuticorin@gmail.com
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-[#FFD700] font-semibold mb-1">Call Us At</h4>
              <p className="text-gray-300 text-sm leading-relaxed flex flex-col gap-1 items-center">
                <span className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#FFD700]" />
                  (+91) 97900 43257
                </span>
                <span className="flex items-center gap-2">
                  <FaWhatsapp className="text-[#FFD700]" />
                  (+91) 86819 88427
                </span>
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-5 mt-6 text-gray-400 justify-start">
              <a
                href="mailto:arconstruction.tuticorin@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition text-lg"
              >
                <FaEnvelopeOpen className="hover:text-[#FFD700] transition text-lg cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/ar_construction69"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition text-lg"
              >
                <FaInstagram className="hover:text-[#FFD700] transition text-lg cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition text-lg"
              >
                <FaYoutube className="hover:text-[#FFD700] transition text-lg cursor-pointer" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.button
        onClick={() => window.open("https://wa.me/918681988427", "_blank")}
        className="fixed bottom-6 left-6 w-12 h-12 z-50 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition duration-300"
        aria-label="Chat with us on WhatsApp"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaWhatsapp className="text-3xl leading-none" />
      </motion.button>
    </section>
  );
};
export default ContactSection;
