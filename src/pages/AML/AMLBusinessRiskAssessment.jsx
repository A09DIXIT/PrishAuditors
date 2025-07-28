import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const AMLBusinessRiskAssessment = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is AML Business Risk Assessment (BRA)?",
      answer:
        "AML Business Risk Assessment is a structured approach to identify and evaluate risks related to money laundering and terrorist financing based on a firm’s operations, customers, products, and geography.",
    },
    {
      question: "Is it mandatory for DNFBPs and FIs in UAE to perform BRA?",
      answer:
        "Yes, both Designated Non-Financial Businesses and Professions (DNFBPs) and Financial Institutions (FIs) in the UAE are required to carry out BRA as per the AML regulatory framework.",
    },
    {
      question: "What are other names for Business Risk Assessment?",
      answer:
        "It is also referred to as Enterprise Wide Risk Assessment (EWRA), Firm Wide Risk Assessment (FWRA), ML/TF Risk Assessment, or Business-Wide ML/TF Risk Assessment.",
    },
    {
      question: "What is the foundation of a Risk-Based Approach (RBA)?",
      answer:
        "The Business Risk Assessment is the foundation of RBA. It mandates that higher risks should be mitigated with stronger controls, making BRA a critical element in AML compliance.",
    },
    {
      question: "How often should BRA be conducted?",
      answer:
        "BRA should be reviewed regularly and updated at least annually, or when there are significant changes in the business structure, operations, or regulatory requirements.",
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
          src="/1AMLBusinessRiskAssessment.jpg"
          alt="AML Business Risk Assessment"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
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
          <motion.h1 className="text-black text-4xl font-semibold text-center mb-10">
            AML BUSINESS RISK ASSESSMENT
          </motion.h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              Designated Non-Financial Businesses and Professions (DNFBPs) and Financial Institutions (FIs) in UAE are required to carry out Anti-Money Laundering (AML) Business Risk Assessment (BRA). It is also referred to as EWRA, FWRA, or ML/TF Risk Assessment.
            </p>
            <p>
              BRA is the pillar of the Risk-Based Approach (RBA). AML policies, procedures, and controls must align with the results of the Business Risk Assessment.
            </p>
            <p>
              A Business Risk Assessment conducted using reliable qualitative and quantitative data ensures that AML risks are kept within the organization’s risk appetite.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Methodology Section */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            AML Business Risk Assessment Methodology
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "We refer to the UAE National Risk Assessment (NRA) issued by NAMLCFTC.",
            "We analyze FATF, MENAFATF, and FSRB findings.",
            "We consider the nature and size of your business operations.",
            "We evaluate the input from your AML Compliance Officer.",
            "We identify and score AML risk factors based on likelihood and impact.",
            "We determine key areas to prioritize for AML/CFT controls and policies.",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
            >
              <p className="text-gray-700 text-base">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Risk Assessment Process Section */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-[#163c4f] mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          AML Business Risk Assessment Process
        </motion.h3>

        <motion.p
          className="text-gray-800 text-lg text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          The risk assessment process is continuous and involves identifying risk areas, analyzing their impact, evaluating control effectiveness, and aligning the AML framework accordingly.
        </motion.p>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-[#0d3c58]">
            Send a Query
          </h2>
          <SendQueryForm />
        </motion.div>
      </div>
    </div>
  );
};

export default AMLBusinessRiskAssessment;
