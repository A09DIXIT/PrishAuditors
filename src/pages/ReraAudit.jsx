import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const faqItems = [
  {
    question:
      "What is a RERA Audit, and why is it important for real estate businesses in the UAE?",
    answer:
      "A RERA Audit ensures compliance with regulations set by the Real Estate Regulatory Authority (RERA). It promotes transparency, mitigates risks, and helps avoid legal issues.",
  },
  {
    question: "Who needs to conduct a RERA Audit in the UAE?",
    answer:
      "Real estate developers, brokers, investors, and property management firms must conduct RERA audits to ensure regulatory compliance.",
  },
  {
    question: "What are the key areas covered in a RERA Audit in the UAE?",
    answer:
      "These include regulatory compliance, financial transparency, project documentation, operational evaluations, and risk assessments.",
  },
  {
    question: "How often should RERA Audits be conducted in the UAE?",
    answer:
      "It varies based on project size and regulatory requirements. Regular audits are advisable to maintain compliance.",
  },
  {
    question: "What are the benefits of conducting a RERA Audit in the UAE?",
    answer: (
      <div className="space-y-2">
        <p><strong>Compliance Assurance:</strong> Ensures adherence to RERA regulations.</p>
        <p><strong>Accuracy and Transparency:</strong> Boosts trust in transactions.</p>
        <p><strong>Financial Transparency:</strong> Validates fund management practices.</p>
        <p><strong>Operational Efficiency:</strong> Identifies inefficiencies and improves control.</p>
        <p><strong>Stakeholder Confidence:</strong> Gains investor and buyer trust.</p>
      </div>
    ),
  },
  {
    question: "How long does a RERA Audit take in the UAE?",
    answer:
      "It depends on the project's size, scope, and complexity. Typically, it ranges from a few days to weeks.",
  },
];

const whyChoose = [
  {
    title: "Regulatory Compliance Assessment",
    description:
      "We assess transactions, contracts, and operations to ensure alignment with RERA standards, including registration and escrow compliance.",
  },
  {
    title: "Financial Transparency Review",
    description:
      "We review income statements, balance sheets, and cash flows for financial accuracy and transparency.",
  },
  {
    title: "Project Documentation Verification",
    description:
      "We verify permits, contracts, and licenses to confirm compliance with RERA and government mandates.",
  },
  {
    title: "Operational Process Evaluation",
    description:
      "We assess all real estate functions including marketing, project delivery, and customer management.",
  },
  {
    title: "Risk Assessment and Mitigation",
    description:
      "We identify critical risks and provide practical steps to avoid legal penalties and reputational damage.",
  },
];

const ReraAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white w-full">
      {/* Banner Section */}
      <motion.div
        className="w-screen h-[50vh] overflow-hidden"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/1RERA2.avif"
          alt="RERA Audit Banner"
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
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.4 },
          }}
        >
          <motion.h1 className="text-black text-4xl mb-10 font-semibold text-center">
            RERA AUDIT
          </motion.h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto text-justify">
            <p>
              RERA regulates UAE’s real estate sector, especially in Dubai. Our RERA audits ensure developers and projects follow legal, financial, and operational standards — promoting transparency and investor confidence.
            </p>
            <p>
              We conduct complete audits covering project records, ESCROW accounts, compliance documents, and operational risks to enhance performance and reduce penalties.
            </p>
            <p>
              Our offerings include Accounting for Management, ESCROW Audits, Service Fee Reviews, Internal Controls, Community Audits, and Mollak Compliance.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Choose PRISH */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-center text-[#163c4f] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose PRISH?
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {whyChoose.map((item, idx, arr) => {
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
                <h4 className="text-xl font-semibold text-[#163c4f] mb-2">
                  {item.title}
                </h4>
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
              <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
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

      {/* Back Button */}
      <div className="mt-16 mb-10 text-center">
        <Link
          to="/services/audit"
          className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to AUDITING AND ASSURANCE
        </Link>
      </div>
    </section>
  );
};

export default ReraAudit;
