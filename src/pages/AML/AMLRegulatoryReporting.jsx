import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const AMLRegulatoryReporting = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is AML Regulatory Reporting?",
      answer:
        "It refers to mandatory reports submitted by regulated entities to meet AML obligations — such as suspicious activity reports, DPMSR, REAR, and others.",
    },
    {
      question: "Who needs to submit AML regulatory reports?",
      answer:
        "Entities like financial institutions, DNFBPs, VASPs, real estate firms, auditors, and dealers in precious metals and stones are all obligated to file AML reports.",
    },
    {
      question: "What if I miss a report deadline?",
      answer:
        "Failure to comply may result in penalties or increased scrutiny. We help clients respond quickly and accurately even under tight timelines.",
    },
    {
      question: "Can you help with custom surveys from regulators?",
      answer:
        "Yes. We assist in drafting responses, collecting required data, and ensuring your replies meet regulatory standards.",
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
          src="/1REGULATORYREPORTING.jpg"
          alt="AML Regulatory Reporting"
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
        >
          <motion.h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
            AML REGULATORY REPORTING
          </motion.h1>
          <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              We help you meet AML Regulatory Reporting requirements – whether it’s a scheduled submission, urgent request, or last-minute compliance.
            </p>
            <p>
              From Suspicious Transaction Reports to DPMSR, Real Estate Activity Reports, Funds Freeze, and more – we handle end-to-end reporting.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <h3 className="text-3xl font-semibold text-[#163c4f] text-center mb-10">
          Types of AML Reports We Support
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "DPMSR Submission",
            "Suspicious Activity Report",
            "Suspicious Transaction Report",
            "Monthly AML Officer Reports",
            "Real Estate Activity Report (REAR)",
            "Funds Freeze Report",
            "Partial Name Match Report",
            "High-Risk Country Transaction (HRC) Report",
            "High-Risk Country Activity (HRCA) Report",
            "Annual AML/CFT Risk Assessment",
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

      {/* Industries Served */}
      <div className="bg-[#f9fafb] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center text-[#163c4f] mb-8">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {["Banks", "Financial Companies", "Insurance Providers", "Auditors & Accountants", "Real Estate Agents & Brokers", "Dealers in Precious Metals & Stones (DPMS)", "Company & Trust Service Providers", "Lawyers, Notaries & Legal Professionals", "Virtual Asset Service Providers (VASPs)"].map(
              (industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white shadow p-4 rounded-md border border-gray-200"
                >
                  <p className="text-gray-800 font-medium">{industry}</p>
                </motion.div>
              )
            )}
          </div>
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

export default AMLRegulatoryReporting;
