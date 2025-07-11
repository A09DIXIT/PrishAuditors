import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const AMLSoftwareValidation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is AML Screening Software Validation?",
      answer:
        "It's the process of evaluating if the AML screening software is configured correctly to meet compliance needs and deliver accurate results.",
    },
    {
      question: "Why is software validation important in AML compliance?",
      answer:
        "Validation ensures your screening software is catching real threats and not being overloaded with false positives or outdated data.",
    },
    {
      question: "How does software testing differ from validation?",
      answer:
        "Validation checks the configurations, while testing verifies real-time outputs and outcomes after implementation in a live or near-live environment.",
    },
    {
      question: "What if my software shows too many false positives?",
      answer:
        "Our service includes fine-tuning the screening logic and testing the whitelisting process to minimize false alerts.",
    },
    {
      question: "What lists should my AML software screen against?",
      answer:
        "It should include the UN Consolidated List, UAE Local Terrorist List, international sanction databases, and your internal blacklist.",
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
          src="/Technology-Consulting.avif"
          alt="AML Software Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto mt-10 px-4 pb-10">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 mt-5 px-6 sm:px-8 lg:px-12 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-black text-4xl font-bold text-center mb-8">
            AML SCREENING SOFTWARE TESTING & VALIDATION
          </h1>
          <div className="text-black text-lg space-y-4 max-w-6xl mx-auto">
            <p>
              AML UAE offers robust AML Screening Software Testing and Validation Services to ensure your tools accurately identify sanctioned individuals and entities while minimizing false positives.
            </p>
            <p>
              Proper validation helps configure screening logic, verify data sources, integrate real scenarios, and assess compliance readiness.
            </p>
            <p>
              From configuration review to final testing with real-life cases, we assist FIs, DNFBPs, and VASPs in complying with regulatory obligations seamlessly.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Key Differentiators */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            Our Key Differentiators
          </h3>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Validating the data source and mapping logic.",
            "Ensuring software settings align with AML compliance.",
            "Using real customer and transaction scenarios for testing.",
            "Pinpointing discrepancies in alerts and outcomes.",
            "Collaborating with your software vendor for fixes.",
            "Re-testing to ensure no new gaps arise.",
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
      <div className="max-w-8xl mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-center text-[#163c4f] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h3>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-4 flex justify-between items-center bg-[#0a2d45] text-white font-medium text-left rounded-t-lg"
              >
                {faq.question}
               <span className="text-xl">{openIndex === idx ? "▲" : "▼"}</span>
              </button>
              {openIndex === idx && (
                <div className="bg-white px-6 py-4 text-gray-800 rounded-b-lg">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mb-20">
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

export default AMLSoftwareValidation;
