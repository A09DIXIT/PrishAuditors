import React, { useEffect } from "react";
import { motion } from "framer-motion";
import WhyChooseUs from "../assets/components/WhyChooseUs/WhyChooseUs";
import VisionMissionValues from "./OurValues";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const OurPeople = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-8 px-4 bg-white">
      {/* About Section */}
      <motion.div
        className="max-w-7xl mx-auto mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/who-we-are.jpeg"
              alt="Who We Are"
              className="rounded-lg shadow-lg w-full object-cover max-h-[420px]"
            />
          </motion.div>


<div className="mb-0">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-4xl uppercase font-medium text-black mb-2">
              About PRISH!
            </h3>
            <h2 className="text-2xl font-bold text-black mb-4 leading-snug">
              One Stop Solution for all your Accounting and Business Needs
            </h2>
            <p className="text-gray-700 mb-3">
             Welcome to PRISH Accounting and Auditing, your trusted partner in navigating the complexities of financial management and compliance. We deliver tailored solutions across Accounting, Auditing & Assurance, Taxation, Mergers & Acquisitions, Management Consultancy, and Company Formation services.
            </p>
            <p className="text-gray-700 mb-3">
              At PRISH Accounting and Auditing, we understand the pivotal role financial integrity plays in the success of your endeavors. Our team of professionals brings forth a wealth of experience and a commitment to excellence, ensuring that your financial objectives are not only met but exceeded.
            </p>
            <p className="text-gray-700">
              Our experienced team ensures your financial goals are exceeded with a deep commitment to excellence and integrity. Whether you're a startup or an established business, our services are customized to fit your unique journey.
            </p>
          </motion.div>
          
        </div>
           </div>
      </motion.div>
      
   

      {/* Why Choose Us Section */}
      <WhyChooseUs />
      <VisionMissionValues />

      
      
    </section>
  );
};

export default OurPeople;
