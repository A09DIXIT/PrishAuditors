import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const AMLScreeningValidation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 const faqItems = [
  {
    question: "What is an Annual AML/CFT Risk Assessment Report?",
    answer:
      "It is a comprehensive document that evaluates an organization's exposure to money laundering and terrorist financing risks, as required by UAE regulatory authorities.",
  },
  {
    question: "Who is required to submit the Annual AML/CFT Risk Assessment Report?",
    answer:
      "All Designated Non-Financial Businesses and Professions (DNFBPs) and Financial Institutions (FIs) operating in the UAE are mandated to prepare and maintain this report annually.",
  },
  {
    question: "What elements are covered in the risk assessment report?",
    answer:
      "The report includes customer risk profiling, product/service risk, geographic risk, channel risk, transaction risk, and mitigation measures taken by the entity.",
  },
  {
    question: "Is the Annual Risk Assessment Report mandatory in the UAE?",
    answer:
      "Yes, the UAE’s AML laws require regulated entities to conduct annual risk assessments and document their findings in a formal report for audit and compliance purposes.",
  },
  {
    question: "What happens if we fail to submit or maintain the report?",
    answer:
      "Non-compliance can lead to hefty fines, regulatory sanctions, or reputational damage. It is critical to ensure timely and accurate reporting.",
  },
];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Banner */}
      <motion.div
        className="w-full h-[50vh] overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/1soft.jpg"
          alt="AML Screening Validation"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Intro */}
    <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="text-black text-4xl md:text-4xl mb-8 font-bold text-center">
            Annual AML/CFT Risk Assessment Report
          </motion.h1>
          <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-5 max-w-4xl mx-auto text-justify">
            <p>
              Designated Non-Financial Businesses and Professions (DNFBPs) in UAE must file an annual AML/CFT Risk Assessment Report with the Ministry of Economy (MOE).
            </p>
            <p>
              In accordance with Article (44) of Cabinet Decision No. (10) of 2019, DNFBPs are required to evaluate and report on money laundering and terrorism financing risks annually.
            </p>
            <p>
              The Annual AML/CFT Risk Assessment Report helps the MOE apply a risk-based supervisory approach. AML UAE supports DNFBPs, including Dealers in Precious Metals and Stones, with expert filing services to ensure compliance.
            </p>
          </div>
        </motion.div>
      </div>

    {/* Main Content Section with Cards */}
<div className="max-w-6xl mx-auto px-4 py-16">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h3 className="text-3xl font-semibold text-center text-[#0d3c58] mb-10">
      Report Requirements Include:
    </h3>

    <div className="grid gap-6 md:grid-cols-2">
      {[
        "Details of inherent risk, control measures, and mitigation strategy.",
        "Ownership and control information (25%+ beneficial ownership).",
        "Customer base segmentation (residency, PEPs, legal/natural persons).",
        "Business activities including sale of bullion, jewelry, or refining.",
        "Cash and virtual currency transactions above regulatory thresholds.",
        "Geographic risk and transactional volume by country.",
        "Internal AML/CFT policies, board approvals, and compliance officer reporting.",
        "Usage of goAML system and TFS (Targeted Financial Sanctions) checks.",
       
      ].map((item, index) => (
        <motion.div
          key={index}
          className="bg-white border-l-4 border-[#0d3c58] shadow-md rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <p className="text-gray-800 text-base">{item}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
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

export default AMLScreeningValidation;
