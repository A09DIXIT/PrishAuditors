import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const faqItems = [
  {
    question:
      "What is a RERA Audit, and why is it important for real estate businesses in the UAE?",
    answer:
      "A RERA Audit is an examination of real estate transactions, financial records, and operational processes to ensure compliance with regulations set forth by the Real Estate Regulatory Authority (RERA) in the UAE. It is essential for real estate businesses to maintain transparency, mitigate risks, and comply with regulatory requirements to avoid penalties and legal issues.",
  },
  {
    question: "Who needs to conduct a RERA Audit in the UAE?",
    answer:
      "Real estate developers, brokers, investors, and property management firms in the UAE are required to conduct RERA Audits to ensure compliance with RERA regulations.",
  },
  {
    question: "What are the key areas covered in a RERA Audit in the UAE?",
    answer:
      "A RERA Audit in the UAE typically covers regulatory compliance, financial transparency, project documentation verification, operational process evaluation, and risk assessment.",
  },
  {
    question: "How often should RERA Audits be conducted in the UAE?",
    answer:
      "The frequency of RERA Audits in the UAE depends on various factors such as the size of the real estate project, the scope of operations, and regulatory requirements. However, it is advisable for real estate businesses to conduct RERA Audits regularly to maintain compliance and transparency.",
  },
  {
    question: "What are the benefits of conducting a RERA Audit in the UAE?",
    answer: (
      <div className="space-y-2">
        <p><strong>Compliance Assurance:</strong> RERA Audits help real estate businesses ensure compliance with regulatory requirements, reducing the risk of penalties and legal issues.</p>
        <p><strong>Accuracy and Transparency:</strong> Audits provide assurance regarding the accuracy and transparency of real estate transactions, enhancing stakeholders' confidence.</p>
        <p><strong>Financial Transparency:</strong> Audits promote financial transparency and accountability by ensuring accurate reporting and management of funds in compliance with RERA requirements.</p>
        <p><strong>Operational Efficiency:</strong> Audits help real estate businesses streamline operations, improve internal controls, and enhance overall efficiency.</p>
        <p><strong>Stakeholder Confidence:</strong> Compliance with RERA regulations enhances the confidence and trust of investors, buyers, and other stakeholders in the UAE real estate market.</p>
      </div>
    ),
  },
  {
    question: "How long does a RERA Audit take in the UAE?",
    answer:
      "The duration of a RERA Audit in the UAE depends on the size and complexity of the real estate project, as well as the scope of the audit.",
  },
];


const whyChoose = [
  {
    title: "Regulatory Compliance Assessment",
    description:
      "We assess the compliance of real estate transactions, contracts, and operations with RERA regulations, including registration, escrow account management, project approvals, and sales agreements.",
  },
  {
    title: "Financial Transparency Review",
    description:
      "We examine financial records, including income statements, balance sheets, and cash flow statements, to ensure transparency and accuracy in financial reporting.",
  },
  {
    title: "Project Documentation Verification",
    description:
      "We review project documentation, including contracts, permits, licenses, and approvals, to ensure completeness and compliance with RERA requirements.",
  },
  {
    title: "Operational Process Evaluation",
    description:
      "We evaluate operational processes, such as project management, sales and marketing practices, customer service, and dispute resolution mechanisms, to identify areas for improvement and compliance enhancement.",
  },
  {
    title: "Risk Assessment and Mitigation",
    description:
      "We assess potential risks associated with RERA non-compliance and provide recommendations to mitigate them effectively.",
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
             Real Estate Regulatory Authority (RERA) is responsible for regulating the real estate sector in the UAE, especially in Dubai. RERA audits are conducted to ensure compliance with regulations, transparency, and fairness in real estate transactions by promoting confidence and trust among investors, buyers, and other stakeholders.
            </p>
            <p>
             It examines and verifies real estate transactions, financial records, and operational processes to ensure compliance with the regulations set forth by the Real Estate Regulatory Authority.Our experienced team conducts thorough audits to assess regulatory compliance, financial transparency, and operational efficiency.
            </p>
            <p>
Our approach is to understand the complexities of RERA regulations and the importance of compliance for real estate businesses which is comprehensive, detail-oriented, and aimed at providing actionable insights to our clients.
            </p>
            <p>Our real estate developer and project services include the following:</p>
            <ul>
              <li>Accounting for management</li>
              <li>Ensure that all service entity criteria are met.</li>
              <li>Ensure that all applicable tax rules are followed.</li>
              <li>Ensure compliance with trust accounts.</li>
              <li>Conducting an audit of the ESCROW account</li>
              <li>Audit of the entire community</li>
              <li>Internal Controls</li>
                            <li>Service fee audit</li>
              <li>Verification of unit balance</li>
              <li>Review of the Special Levy</li>
              <li>Budget audits for municipalities and organizations</li>
              <li>Mollak service</li>

            </ul>
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
