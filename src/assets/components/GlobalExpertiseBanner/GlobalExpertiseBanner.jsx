import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const InteractiveBanner = () => {
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
    hidden: { opacity: 0, y: 30 },
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
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[url('/1GLOBALexperties.webp')] bg-cover bg-center opacity-20" />

      {/* Diagonal Shape */}
      <div className="absolute top-0 right-0 w-[250px] md:w-[300px] h-full bg-white opacity-20 transform rotate-[30deg] translate-x-[50%]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16 text-white">
        <motion.div
          className="max-w-2xl space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // 👈 plays every time you scroll
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            variants={itemVariants}
          >
            Global Expertise. Local Insight.
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl"
            variants={itemVariants}
          >
            At Prish Auditors, we blend international standards with deep local
            knowledge to help businesses navigate complex audit, compliance, and
            financial challenges with clarity and confidence.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link to="/contact">
              <button className="px-6 py-3 bg-white text-[rgb(22,60,79)] rounded-full font-semibold hover:bg-gray-100 transition">
                GET IN TOUCH
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveBanner;
