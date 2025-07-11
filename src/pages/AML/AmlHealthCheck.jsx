import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const AmlHealthCheck = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is an AML/CFT Health Check?",
      answer:
        "An AML/CFT Health Check is a diagnostic review to assess an organization’s current AML compliance framework and identify any gaps, risks, or areas of non-compliance.",
    },
    {
      question: "Who should conduct an AML Health Check?",
      answer:
        "Entities like Financial Institutions (FIs), DNFBPs, and VASPs operating in the UAE should periodically conduct AML Health Checks to ensure they comply with applicable AML laws.",
    },
    {
      question: "How often should AML Health Checks be performed?",
      answer:
        "It's recommended to perform a Health Check annually or whenever there's a significant change in business operations, regulatory changes, or internal processes.",
    },
    {
      question: "What are the benefits of AML/CFT Health Check services?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Identification of compliance gaps and risk areas</li>
          <li>Assessment of AML/CFT framework effectiveness</li>
          <li>Regulatory preparedness and internal improvement</li>
          <li>Expert guidance for implementing AML best practices</li>
        </ul>
      ),
    },
    {
      question: "What documents are reviewed during the AML Health Check?",
      answer:
        "We review AML/CFT policies, BRA/EWRA reports, STR/SAR logs, KYC/CDD records, internal training logs, and reports from prior independent audits.",
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
          src="/1HEALTHCHECK.avif"
          alt="AML/CFT Health Check Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto mt-10 px-4 pb-10">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 mt-5 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
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
            AML/CFT HEALTH CHECK
          </motion.h1>
          <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              The AML/CFT Health check will help you to understand where your entity stands in terms of applicable AML/CFT guidelines. This quick and easy solution will help your business to know the areas where immediate attention and improvements are required.
            </p>
            <p>
              We work with FIs, DNFBPs, and VASPs in UAE to understand the current compliance culture and assist them in implementing the proportionate AML compliance framework to mitigate the risks of financial crimes.
            </p>
            <p>
              Our AML Health Check service involves a detailed analysis of the reporting entity’s approach to AML compliance and risk management.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Work Methodology */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            AML/CFT Health Check: Work Methodology
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Kick-off meeting to understand the business, regulatory environment, compliance culture, scope of work, and approach and focus of the AML/CFT Health Check.",
            "Meeting with the AML Compliance Officer to understand the overall compliance framework implemented by the company.",
            "A review of Business Risk Assessment (BRA)/Enterprise Wide Risk Assessment (EWRA).",
            "A review of independent AML auditor’s report.",
            "A review of AML/CFT policies, procedures, and controls.",
            "A review of KYC, Screening, and Risk Assessment methodologies adopted by the entity.",
            "A review of KYC, Screening, and Risk Assessment records maintained by the company.",
            "A review of SAR/STR, HRC, HRCA, DPMSR, REAR, FFR, and PNMR records maintained by the company.",
            "Presentation of the findings to the top management.",
            "A formal AML/CFT Health Check Report detailing the information obtained, the current compliance culture, regulatory requirements, gaps identified, and suggestions for the improvement.",
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

export default AmlHealthCheck;
