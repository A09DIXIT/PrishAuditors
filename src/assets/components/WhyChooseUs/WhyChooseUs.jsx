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
    <section className="bg-white mt-0 mb-10 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
        {/* Right: Image */}
        <motion.div
          className="w-[800px] h-[300px]"
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
            className="w-full rounded-xl shadow-lg max-h-[400px] object-cover"
          />
        </motion.div>

        {/* Left: Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-4xl md:text-4xl font-semibold text-black mb-4 uppercase">
            WHY CHOOSE PRISH?
          </h2>

          <p className="text-gray-700 mb-2 leading-snug">
            Are you seeking financial guidance that goes beyond mere numbers? Look no further than
            PRISH Accounting and Auditing.
          </p>
          <p className="text-gray-700 mb-2 leading-snug">
            We understand that selecting the right Chartered Accountants is crucial for the success
            and prosperity of your business.
          </p>
          <p className="text-gray-700 mb-3 leading-snug">
            Here's why choosing PRISH can be the best decision for you:
          </p>

          <motion.ul
            className="text-gray-800 space-y-1"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {["P", "R", "I", "S", "H"].map((char, idx) => (
              <motion.li key={char} variants={itemVariants}>
                <span className="text-blue-900 font-bold text-xl">{char}</span>
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
