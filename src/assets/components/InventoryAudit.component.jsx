import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "./SendQueryForm/SendQueryForm";

const InventoryAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems  = [
    {
      question: "What is an inventory audit and verification?",
      answer:
        "An inventory audit and verification examines and assesses a company's physical inventory and related accounting records to ensure accuracy, completeness, and reliability.",
    },
    {
      question: "Why is inventory audit and verification necessary?",
      answer:
        "It helps detect discrepancies, prevent theft, and ensure financial reporting is accurate.",
    },
    {
      question: "What are the key objectives of inventory audit and verification?",
      answer:
        "To verify stock accuracy, evaluate internal controls, and identify obsolete or missing inventory.",
    },
    {
      question: "How often should inventory audit and verification be conducted?",
      answer: "Typically annually or quarterly, depending on the nature of the business.",
    },
    {
      question: "What industries can benefit from inventory audit and verification services?",
      answer: "Retail, manufacturing, logistics, and healthcare, among others.",
    },
    {
      question: "How does inventory audit and verification differ from regular audits?",
      answer:
        "Inventory audits focus specifically on stock and inventory management, while regular audits cover all financial and operational areas.",
    },
    {
      question: "What are some common methods used in inventory audit and verification?",
      answer:
        "Physical count, cycle counting, barcode scanning, and stock reconciliation.",
    },
    {
      question: "What are the benefits of inventory audit and verification?",
      answer:
        "Improved accuracy, loss prevention, better decision-making, and compliance.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white text-[#163c4f]">
      {/* Banner Image */}
       <motion.div
              className="w-screen h-[50vh] overflow-hidden"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
        <img
          src="/inventory1.jpeg"
          alt="Inventory Audit and Verification Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>


<div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
<motion.div
        className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02, boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)", transition: { duration: 0.4 } }}
      >
        <motion.h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
       INVENTORY AUDIT & VERIFICATION
        </motion.h1>
        <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
          <p className="text-gray-800 text-lg leading-7 mb-6 text-justify">
            Confirming the existence, completeness, and accuracy of inventory records and assessing the effectiveness of internal controls over the inventory management process and suggesting the process improvement measure. It ensures that the quantity, condition, and value of inventory items are accurately recorded and reported in the financial statements.
          </p>
          <p className="text-gray-800 text-lg leading-7 mb-6 text-justify">
            Our experienced auditors utilize advanced techniques and methodologies to conduct thorough audits that provide valuable insights and recommendations for improving inventory management practices.
          </p>
          <p className="text-gray-800 text-lg leading-7 mb-10 text-justify">
            Our approach is understanding the importance of maintaining accurate inventory records to support informed decision-making and financial reporting. We work closely with your team to develop a customized audit plan that addresses key areas of concern and identifies opportunities for improvement.
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
              title: "Physical Inventory Counts:",
              description:
                "We conduct physical inventory counts to verify the existence, condition, and location of inventory items.",
            },
            {
              title: "Inventory Valuation: ",
              description:
                "Our auditors review inventory valuation methods to ensure compliance with accounting standards and assess the accuracy of inventory values.",
            },
            {
              title: "Inventory Control Procedures:",
              description:
                "We evaluate inventory control procedures and internal controls to identify weaknesses and recommend enhancements to mitigate risks of errors, theft, or fraud.",
            },
            {
              title: "Documentation Review:",
              description:
                "We review inventory documentation, including purchase orders, receiving reports, and sales records, to ensure completeness and accuracy.",
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







      {/* FAQ Accordion */}
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
                  <div
                    key={index}
                    className="border border-[#d6e4ec] rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
                    >
                      {item.question}
                      <span className="text-xl">
                        {openIndex === index ? "▲" : "▼"}
                      </span>
                    </button>
      
                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          key="faq-content"
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

      <div className="mt-18 mb-10 text-center">
              <Link
                to="/services/audit"
                className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
              >
                Back to AUDITING AND ASSURANCE
              </Link>
            </div>
    </div>
  );
};

export default InventoryAudit;
