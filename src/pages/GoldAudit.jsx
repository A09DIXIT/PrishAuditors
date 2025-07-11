import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const GoldAudit = () => {
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

  const faqItems  = [
    {
      question: "What is a gold audit, and why is it necessary for businesses?",
      answer:
        "A gold audit is the process of examining and verifying gold-related transactions, inventory, and financial records to ensure compliance, accuracy, and transparency in gold trading activities. Businesses must maintain integrity, mitigate risks, and comply with regulatory requirements.",
    },
    {
      question: "What types of businesses can benefit from gold audit services?",
      answer:
        "Gold audit services are beneficial for a wide range of businesses involved in the gold industry, including jewelry manufacturers, bullion dealers, refineries, and mining companies.",
    },
    {
      question: "What does a gold audit typically involve?",
      answer:
        "A gold audit typically involves transaction verification, inventory inspection, compliance review, risk assessment, and fraud detection to ensure the accuracy, transparency, and compliance of gold trading activities.",
    },
    {
      question: "How often should businesses conduct gold audits?",
      answer:
        "The frequency of gold audits depends on the size and nature of the business, as well as regulatory requirements. However, it is advisable for businesses to conduct regular audits to maintain compliance and ensure the integrity of their gold trading activities.",
    },
    {
      question: "What are the benefits of conducting a gold audit?",
      answer: (
        <div className="space-y-3">
          <p><strong>Compliance Assurance:</strong> Gold audits help businesses ensure compliance with regulatory requirements, reducing the risk of penalties and legal issues.</p>
          <p><strong>Accuracy and Transparency:</strong> Audits provide assurance regarding the accuracy and transparency of gold transactions, enhancing stakeholders' confidence.</p>
          <p><strong>Risk Mitigation:</strong> By identifying and addressing potential risks, audits help businesses mitigate financial and reputational risks associated with gold trading.</p>
          <p><strong>Operational Efficiency:</strong> Audits streamline gold trading operations, improve internal controls, and enhance overall efficiency.</p>
        </div>
      ),
    },
    {
      question: "How can businesses prepare for a gold audit?",
      answer:
        "Businesses can prepare for a gold audit by maintaining accurate records, implementing robust internal controls, and ensuring compliance with regulatory requirements.",
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
          src="/1GOLDAUDIT.png"
          alt="Gold Audit Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
      <section className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
      
        <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
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
              GOLD AUDIT
            </motion.h1>
            <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
              <p>
                "Gold Audit" typically refers to the process of auditing gold and jewelry traders or dealers to ensure compliance with relevant regulations and standards due to the significant role of the gold and jewelry industry in the country's economy.
              </p>
              <p>
                Our experienced team conducts thorough audits to ensure compliance with regulations, reporting accuracy, and gold transaction transparency.
              </p>
              <p>
                Our approach is to understand the importance of accuracy and integrity in gold transactions. Our gold audit services are designed to provide businesses with assurance regarding the authenticity, quality, and compliance of their gold-related activities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

     {/* Why Choose PRISH Section */}
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
        title: "Transaction Verification",
        description:
          "We verify gold transactions to ensure accuracy, completeness, and compliance with regulatory requirements.",
      },
      {
        title: "Inventory Inspection",
        description:
          "We conduct physical inspections of gold inventory to verify quantities, qualities, and valuations.",
      },
      {
        title: "Compliance Review",
        description:
          "We review gold-related documentation and records to ensure compliance with regulatory standards, including AML and KYC regulations.",
      },
      {
        title: "Risk Assessment",
        description:
          "We assess potential risks associated with gold transactions and provide recommendations to mitigate them effectively.",
      },
      {
        title: "Fraud Detection",
        description:
          "We use advanced techniques to detect and prevent fraud in gold trading activities, safeguarding our clients' interests.",
      },
   ].map((item, idx, arr) => {
  const isLastOdd = arr.length % 2 !== 0 && idx === arr.length - 1;

  const card = (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f] w-full"
    >
      <h4 className="text-xl font-semibold text-[#163c4f] mb-2">{item.title}</h4>
      <p className="text-gray-700 text-base">{item.description}</p>
    </motion.div>
  );

  return isLastOdd ? (
    <div key={idx} className="md:col-span-2 flex justify-center">
      <div className="md:w-[48%] w-full">{card}</div>
    </div>
  ) : (
    <div key={idx}>{card}</div>
  );
})}
  </div>
</div>


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
       <div className="mt-18 mb-10 text-center">
                    <Link
                      to="/services/special-audit"
                      className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
                    >
                      Back to SPECIAL AUDITS
                    </Link>
                  </div>
    </div>
  );
};

export default GoldAudit;
