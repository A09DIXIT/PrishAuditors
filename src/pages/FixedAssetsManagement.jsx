import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const FixedAssetsManagement = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const faqItems = [
    {
      question: "What are fixed assets?",
      answer:
        "Fixed assets are long-term tangible assets that a business owns and uses in its operations, such as buildings, machinery, equipment, and vehicles.",
    },
    {
      question: "Why is fixed assets management important for businesses?",
      answer:
        "Fixed assets management ensures efficient utilization of assets, accurate financial reporting, compliance with accounting standards, and optimization of asset lifecycle.",
    },
    {
      question: "What does fixed assets management involve?",
      answer:
        "It involves tracking, maintaining, and optimizing fixed assets throughout their lifecycle, including acquisition, depreciation, maintenance, and disposal.",
    },
    {
      question: "What are the benefits of fixed assets management services?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Improved asset utilization and productivity</li>
          <li>Accurate financial reporting and compliance</li>
          <li>Cost savings through optimized maintenance and replacement strategies</li>
          <li>Reduced risk of errors, penalties, and financial misstatements</li>
        </ul>
      ),
    },
    {
      question: "How does fixed assets management help in optimizing asset lifecycle?",
      answer:
        "It ensures proper maintenance, timely replacements, and efficient utilization—maximizing the value of assets over time.",
    },
    {
      question: "Can fixed assets management services help in reducing costs?",
      answer:
        "Yes, by identifying cost-saving opportunities, minimizing asset downtime, and optimizing maintenance and replacement schedules.",
    },
    {
      question: "What types of businesses can benefit from fixed assets management services?",
      answer:
        "Industries like manufacturing, construction, healthcare, hospitality, and transportation can all benefit from these services.",
    },
    {
      question: "How often should fixed assets be evaluated and updated?",
      answer:
        "They should be evaluated and updated regularly—at least annually—to ensure accurate reporting and compliance.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <motion.div
        className="w-full h-[50vh] overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/1FixedAssetsManagement.jpg"
          alt="Fixed Assets Management Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
     
        <div className="max-w-7xl mx-auto mt-10 px-4 pb-10">
          <motion.div
            className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 mt-10 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.4 },
            }}
          >
            <motion.h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
              FIXED ASSETS MANAGEMENT
            </motion.h1>
            <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
              <p>
                Management and optimization of a company's fixed assets throughout their lifecycle, from acquisition to disposal. Fixed assets SOP review, physical verification, accounting entries, and treatment for fixed assets are provided. It helps businesses efficiently track, manage, and optimize their fixed assets.
              </p>
              <p>
                Our expert team provides tailored solutions to streamline processes, improve accuracy, and maximize the value of fixed assets throughout their lifecycle.
              </p>
              <p>
                Our approach is to understand the importance of effective fixed assets management for businesses to optimize their operations and financial performance. It includes assessing each client's unique needs and challenges and providing customized solutions that drive efficiency and value.
              </p>
            </div>
          </motion.div>
        </div>
     

      {/*Why Choose Us */}
      
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
                  Why Choose PRISH?
                </h3>
              </motion.div>
      
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Asset Tracking and Identification:",
                    description:
                      "We assist businesses in accurately tracking and identifying all fixed assets, including tagging and labelling assets for easy identification.",
                  },
                  {
                    title: "Maintenance and Depreciation Management:",
                    description:
                      "Our team helps businesses manage maintenance schedules, calculate depreciation, and ensure compliance with accounting standards such as GAAP or IFRS.",
                  },
                  {
                    title: "Inventory and Valuation:",
                    description:
                      "We conduct regular inventories and valuations of fixed assets to ensure accurate financial reporting and compliance with regulatory requirements.",
                  },
                  {
                    title: "Asset Disposal and Replacement:",
                    description:
                      "We provide guidance on asset disposal strategies, including sale, donation, or scrapping, and assist in planning for asset replacements to optimize the asset lifecycle.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
                  >
                    <h4 className="text-xl font-semibold text-[#163c4f] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-base">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
      
            {/* End Why Choose Us */}

      {/* FAQ Section */}
     <motion.h2
            className="text-4xl font-semibold text-center text-[#0a2d45] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
    
          <div className="space-y-4 max-w-8xl mx-auto px-4 pb-20">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-[#d6e4ec] rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d]"
                >
                  {item.question}
                  <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
    

      {/* Query Form */}
      <div className="mb-10">
           <motion.div
        className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Send a Query</h2>
        <SendQueryForm />
      </motion.div>
      </div>
    </div>
  );
};

export default FixedAssetsManagement;
