import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const MeetOurCofounder = () => {
  return (
    <motion.section
      className="bg-gray-100 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="flex justify-start">
            <img
              src="/Priyanka-kansal.jpeg" // replace with Priyanka's image
              alt="Priyanka Kansal"
              className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md object-cover"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">MEET OUR CO FOUNDER</h2>
            <p className="text-gray-700 mb-5">
              Priyanka Kansal, the Co-founder of PRISH Accounting and Auditing, embodies our values and vision
              with a strong commitment to excellence in the finance and compliance industry.
            </p>
            <p className="text-gray-700 mb-5">
              Priyanka's leadership seamlessly blends regulatory precision with modern strategic insights.
              Her approach is deeply client-focused and innovation-driven, ensuring services are not only
              compliant but also empowering to businesses.
            </p>
            <div className="flex gap-5 mt-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/priyanka-kansal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
             
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default MeetOurCofounder;
