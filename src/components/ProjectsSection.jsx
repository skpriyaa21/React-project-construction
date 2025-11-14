import React from "react";
import { motion } from "framer-motion";
import Project1 from "../assets/Images/InteriorConvo2.jpeg";
import Project2 from "../assets/Images/DesignShowing.jpeg";
import Project3 from "../assets/Images/Site-1.jpeg";
import Project4 from "../assets/Images/Interior.jpeg";
import Project5 from "../assets/Images/conversationwithclient.jpeg";

/* Unsplash images for placeholders */
const projects = [
  {
    img: Project3,
    title: "Retro Refurb",
  },
  {
    img: Project2,
    title: "Office Complex",
  },
  {
    img: Project1,
    title: "SmartSpace Designs",
  },
  {
    img: Project4,
    title: "Renovation",
  },
  {
    img: Project5,
    title: "Interior Fit-out",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Animated Subheading Section */}
        <motion.div
          className="max-w-6xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-[#FFD700] tracking-[0.25em] uppercase text-sm md:text-base mb-3 font-bold">
            Recent Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002349]">
            We love what we do, check out <br />
            some of our latest works
          </h2>
        </motion.div>
        {/* Project Cards */}
        <motion.div
          className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide snap-x snap-mandatory"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {projects.map((p, idx) => (
            <motion.figure
              key={idx}
              className="flex-shrink-0 w-3/4 md:w-80 lg:w-96 snap-center rounded-xl overflow-hidden shadow-lg bg-gray-100 transition-all duration-500"
              initial={{ opacity: 0, y: 60 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 30px #0d0f8d33",
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-[420px] overflow-hidden rounded-xl flex items-center justify-center bg-gray-100">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover rounded-xl"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <figcaption className="p-3 bg-white">
                <div className="text-sm text-gray-600">{p.title}</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
