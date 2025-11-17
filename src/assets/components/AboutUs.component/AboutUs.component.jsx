import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left: Image with motion */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/who-we-are.jpeg"
              alt="Who We Are"
              className="rounded-lg shadow-lg w-full object-cover max-h-[530px]"
            />
          </motion.div>

          {/* Right: Text with motion */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest font-medium text-black mb-2">
              ABOUT PRISH!
            </h3>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-5 leading-snug">
              One Stop Solution for all your Accounting and Business Needs
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Welcome to PRISH Accounting and Auditing, your trusted partner in navigating the complexities of financial management and compliance. We deliver tailored solutions across Accounting, Auditing & Assurance, Taxation, Mergers & Acquisitions, Management Consultancy, and Company Formation services.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              At PRISH Accounting and Auditing, we understand the pivotal role financial integrity plays in the success of your endeavors. Our team of professionals brings forth a wealth of experience and a commitment to excellence, ensuring that your financial objectives are not only met but exceeded.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Our experienced team ensures your financial goals are exceeded with a deep commitment to excellence and integrity. Whether you're a startup or an established business, our services are customized to fit your unique journey.
            </p>

            {/* Button */}
            <div className="inline-block mt-4">
              <Link
                to="/about"
                className="bg-black text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base"
              >
                Know More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
