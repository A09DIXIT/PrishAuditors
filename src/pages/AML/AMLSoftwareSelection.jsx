import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const AMLSoftwareSelection = () => {
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
      question: "What is AML software?",
      answer:
        "AML software is designed to help businesses detect and prevent money laundering activities by screening transactions, clients, and monitoring financial behavior against regulations.",
    },
    {
      question: "Why is AML software important?",
      answer:
        "It ensures businesses stay compliant with AML/CFT regulations, reduces financial crime risk, and builds credibility with regulatory authorities.",
    },
    {
      question: "Can AML software be customized?",
      answer:
        "Yes, many AML software solutions offer configurable modules for screening, transaction monitoring, reporting, and integration with your systems.",
    },
    {
      question: "How do I choose the right AML software?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Identify your business-specific AML requirements</li>
          <li>Evaluate vendor offerings and feature sets</li>
          <li>Consider implementation cost and support</li>
          <li>Request demos and compare usability</li>
          <li>Choose based on ROI and regulatory coverage</li>
        </ul>
      ),
    },
    {
      question: "Do you provide support in vendor negotiation?",
      answer:
        "Yes, we help negotiate with AML vendors to ensure you get the best deal along with post-implementation support and add-ons.",
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
          src="/1AMLSOFTWARESELECTION.jpeg" // 🔁 Replace with your actual banner path
          alt="AML Software Selection"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
            AML SOFTWARE SELECTION
          </motion.h1>
          <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              Selecting the right AML software is essential for complying with Anti-Money Laundering and Counter-Financing of Terrorism regulations.
            </p>
            <p>
              AML UAE assists organizations in the UAE to find the most suitable AML software for transaction monitoring, risk assessment, and client screening.
            </p>
            <p>
              Our consulting service simplifies software selection by analyzing your business requirements, preparing documentation, evaluating vendors, and supporting implementation.
            </p>
            <p>
              The software you select should help reduce costs, enhance compliance capabilities, and provide automated updates, reports, and alerts.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            Why Choose PRISH for AML Software Selection?
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Requirement Analysis",
              description:
                "We understand your industry, business size, and compliance needs to define AML goals clearly.",
            },
            {
              title: "Documentation (BRD)",
              description:
                "We prepare a Business Requirements Document (BRD) with detailed features and compliance functions needed.",
            },
            {
              title: "Vendor Evaluation",
              description:
                "We research and shortlist AML software vendors that match your business goals, budget, and compliance level.",
            },
            {
              title: "Demo, Decision & Negotiation",
              description:
                "We help with demos, vendor selection, pricing negotiation, and drafting of the agreement.",
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

export default AMLSoftwareSelection;
