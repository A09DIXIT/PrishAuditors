import React from "react";
import { motion } from "framer-motion";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const WhyChooseUs = () => {
  return (
    <section className="bg-white mt-0 mb-10 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse gap-10 md:gap-16 items-center">
        {/* Right: Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src="/1WCU.jpg"
            alt="Why Choose PRISH"
            className="w-full h-auto rounded-xl shadow-lg object-cover max-h-[300px] sm:max-h-[400px]"
          />
        </motion.div>

        {/* Left: Text */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 uppercase text-center md:text-left">
            WHY CHOOSE PRISH?
          </h2>

          <p className="text-gray-700 mb-2 leading-relaxed text-sm sm:text-base">
            Are you seeking financial guidance that goes beyond mere numbers? Look no further than
            PRISH Accounting and Auditing.
          </p>
          <p className="text-gray-700 mb-2 leading-relaxed text-sm sm:text-base">
            We understand that selecting the right Chartered Accountants is crucial for the success
            and prosperity of your business.
          </p>
          <p className="text-gray-700 mb-3 leading-relaxed text-sm sm:text-base">
            Here's why choosing PRISH can be the best decision for you:
          </p>

          <motion.ul
            className="text-gray-800 space-y-2 text-sm sm:text-base"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {["P", "R", "I", "S", "H"].map((char) => (
              <motion.li key={char} variants={itemVariants}>
                <span className="text-blue-900 font-bold text-lg sm:text-xl mr-1">{char}</span>
                {char === "P" && "erfection beyond imagination"}
                {char === "R" && "eliability and Consistency in delivering our promises"}
                {char === "I" && "nnovative Solutions to meet business needs"}
                {char === "S" && "olution Driven Approach to your business challenges"}
                {char === "H" && "ighly qualified and experienced professionals"}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
