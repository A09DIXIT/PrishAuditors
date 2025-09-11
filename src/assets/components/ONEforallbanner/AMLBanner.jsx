import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AMLBanner = () => {
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setGradientPos({ x, y });
  };

  // ✨ Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full h-[450px] overflow-hidden transition-all duration-200"
      style={{
        background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, rgb(22,60,79), #0f3c5d, #256d85)`,
      }}
    >
      {/* Background People Layer */}
      <div className="absolute inset-0 bg-[url('/1teammeeting.jpg')] bg-cover bg-center opacity-30" />

      {/* Diagonal Shape Overlay */}
      <div className="absolute top-0 right-0 w-[250px] md:w-[300px] h-full bg-white opacity-20 transform rotate-[30deg] translate-x-[50%]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16 text-white">
        <motion.div
          className="max-w-2xl space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"             // 👈 animate when in view
          viewport={{ once: false, amount: 0.3 }} // 👈 replay on scroll up & down
        >
          <motion.h2
            className="text-3xl md:text-5xl font-semibold leading-tight"
            variants={itemVariants}
          >
            Precision. Integrity. Excellence.
          </motion.h2>

          <motion.p className="text-lg md:text-xl" variants={itemVariants}>
            Book a consultation with Prish Auditors to understand regulatory
            requirements, optimize financial processes, and ensure full
            compliance. Trusted advisors in Audit, Risk, and Taxation services
            across India and the UAE.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link to="/contact/dubai">
              <button className="px-6 py-3 bg-white text-[rgb(22,60,79)] rounded-full font-semibold hover:bg-gray-100 transition">
                BOOK YOUR CONSULTATION
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AMLBanner;
