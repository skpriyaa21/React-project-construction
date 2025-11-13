import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTools, FaRegEye, FaClock, FaShieldAlt } from "react-icons/fa";
import Image from "../assets/Images/Trust.jpeg";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
export default function AboutSection() {
  const coreValues = [
    { icon: <FaTools />, label: "Craftsmanship" },
    { icon: <FaRegEye />, label: "Transparency" },
    { icon: <FaClock />, label: "Timely Delivery" },
    { icon: <FaShieldAlt />, label: "Durability" },
  ];
  const isMobile = useMediaQuery("(max-width: 640px)");
  const radius = isMobile ? 100 : 130;

  return (
    <section id="about" className="py-16 bg-white px-6">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#002349] text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          className="text-gray-700 text-lg font-semibold leading-relaxed space-y-8 flex flex-col items-center text-center md:items-center md:text-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Paragraph */}
          <p className="text-center md:text-left max-w-xl px-2">
            AR Construction & Properties combines traditional craftsmanship with
            modern engineering and design. We focus on durable builds,
            transparent processes, and timely delivery.You dream it.We build it
            better than you imagined. We measure success in square feet of
            satisfaction.
          </p>

          {/* Centered Circle */}
          <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px]  flex justify-center items-center mx-auto">
            {/* Center Label */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute text-center"
            >
              <motion.div
                className="absolute text-center z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-2xl font-bold text-[#002349]">Values</h3>
              </motion.div>

              {/* <h3 className="text-2xl font-bold text-[#002349]">Values</h3> */}
            </motion.div>

            {/* Circular Icons */}
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
                  <div className="text-2xl sm:text-3xl text-[#FFD700] mb-1 animate-pulse">
                    {value.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#002349]">
                    {value.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={Image}
            alt="About AR Construction"
            className="rounded-lg shadow-lg w-full max-w-md object-cover transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}

// import React from "react";
// import { motion } from "framer-motion";
// import { FaTools, FaRegEye, FaClock, FaShieldAlt } from "react-icons/fa";
// import Image from "../assets/Images/Trust.jpeg";

// export default function AboutSection() {
//   const coreValues = [
//     { icon: <FaTools />, label: "Craftsmanship" },
//     { icon: <FaRegEye />, label: "Transparency" },
//     { icon: <FaClock />, label: "Timely Delivery" },
//     { icon: <FaShieldAlt />, label: "Durability" },
//   ];

//   return (
//     <section id="about" className="py-16 bg-white px-6">
//       {/* Section Title */}
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold text-[#002349] text-center mb-8"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >
//         About Us
//       </motion.h2>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Left Column: Text + Circular Values */}
//         <motion.div
//           className="text-gray-700 text-lg font-semibold leading-relaxed text-left space-y-8"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <p>
//             AR Construction & Properties combines traditional craftsmanship with
//             modern engineering and design. We focus on durable builds,
//             transparent processes, and timely delivery.
//           </p>

//           {/* Circular Core Values */}
//           <div className="relative w-[300px] h-[300px] mx-auto">
//             {/* Center Text */}
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//             >
//               <h3 className="text-2xl font-bold text-[#002349]">Values</h3>
//             </motion.div>

//             {/* Icons Around Circle */}
//             {coreValues.map((value, i) => {
//               const angle = (i / coreValues.length) * 2 * Math.PI - Math.PI / 2;
//               const radius = 110; // controls spacing from center
//               const x = radius * Math.cos(angle);
//               const y = radius * Math.sin(angle);

//               return (
//                 <motion.div
//                   key={i}
//                   className="absolute flex flex-col items-center text-center"
//                   style={{
//                     top: `calc(50% + ${y}px)`,
//                     left: `calc(50% + ${x}px)`,
//                     transform: "translate(-50%, -50%)",
//                   }}
//                   initial={{ opacity: 0, scale: 0.5 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.6, delay: i * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="text-3xl text-[#FFD700] mb-1 animate-pulse">
//                     {value.icon}
//                   </div>
//                   <span className="text-sm font-semibold text-[#002349]">
//                     {value.label}
//                   </span>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* Right Column: Image */}
//         <motion.div
//           className="w-full flex justify-center"
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <img
//             src={Image}
//             alt="About AR Construction"
//             className="rounded-lg shadow-lg w-full max-w-md object-cover transition-transform duration-300"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
