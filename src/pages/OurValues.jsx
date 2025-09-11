import React from "react";
import { motion } from "framer-motion";

const VisionMissionValues = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty and transparency in all our actions.",
    },
    {
      title: "Excellence",
      description:
        "We strive for the best in everything we do, delivering quality and value to our clients.",
    },
    {
      title: "Innovation",
      description:
        "We embrace change and encourage creativity to deliver forward-thinking solutions.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and partnerships to achieve greater outcomes.",
    },
  ];

  return (
    <div
      className="relative py-12 px-4 sm:px-6 lg:px-20 bg-cover bg-center mt-5 bg-no-repeat"
      style={{ backgroundImage: "url('/11OurValues.jpg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto text-center text-white">
        {/* ===== Vision & Mission ===== */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 text-center mb-6 bg-white/80 px-4 sm:px-6 py-2 sm:py-3 inline-block rounded-lg shadow-lg"
        >
          VISION & MISSION
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white bg-opacity-95 shadow-md rounded-2xl p-5 sm:p-6 text-gray-800"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              To be the most trusted and innovative provider of auditing and
              consulting services, empowering businesses to achieve sustainable
              growth and compliance.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white bg-opacity-95 shadow-md rounded-2xl p-5 sm:p-6 text-gray-800"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Our mission is to provide exceptional auditing and advisory
              services that help organizations build transparency, enhance
              efficiency, and achieve their long-term goals with integrity.
            </p>
          </motion.div>
        </div>

        {/* ===== Our Values ===== */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 text-center mb-6 bg-white/80 px-4 sm:px-6 py-2 sm:py-3 inline-block rounded-lg shadow-lg"
        >
          OUR VALUES
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white bg-opacity-95 shadow-md rounded-2xl p-5 sm:p-6 text-gray-800"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValues;
