import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

export default function InternalAudit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is an internal audit?",
      answer:
        "An internal audit is an independent, objective assurance and consulting activity designed to add value and improve an organization's operations. It helps organizations accomplish their objectives by evaluating and improving the effectiveness of risk management, control, and governance processes.",
    },
    {
      question: "Why is an internal audit necessary?",
      answer:
        "An internal audit is necessary to assure management and stakeholders that risks are being managed effectively, internal controls are adequate, and the organization is operating efficiently and effectively.",
    },
    {
      question: "How does internal audit differ from external audit?",
      answer:
        "Internal audit is conducted by employees or outsourced to a third-party firm hired by the organization. It focuses on evaluating internal controls and processes to identify areas for improvement. External audit, on the other hand, is conducted by independent auditors to express an opinion on the fairness and accuracy of the financial statements.",
    },
    {
      question: "What are the key objectives of internal audit?",
      answer:
        "The primary objectives of the internal audit include assessing the effectiveness of risk management, control, and governance processes, providing assurance to management and stakeholders, and identifying opportunities for improvement.",
    },
    {
      question: "What are the benefits of internal audit?",
      answer: (
        <>
          <p><strong>Risk Management:</strong> Identify and mitigate risks that could impact the achievement of organizational objectives.</p>
          <p><strong>Operational Efficiency:</strong> Streamline processes and procedures to improve efficiency and reduce costs.</p>
          <p><strong>Compliance Assurance:</strong> Ensure compliance with regulatory requirements and internal policies.</p>
          <p><strong>Strategic Insights:</strong> Provide valuable insights to support informed decision-making and strategic planning.</p>
        </>
      ),
    },
    {
      question: "How can internal audit help my organization?",
      answer:
        "Internal audit helps organizations by providing independent assurance that risks are being managed effectively, controls are in place and working as intended, and operations are efficient and effective. It also provides valuable insights and recommendations for improvement.",
    },
    {
      question: "How often should internal audit be conducted?",
      answer:
        "The frequency of internal audit depends on factors such as the size and complexity of the organization, the industry, and regulatory requirements. It is typically conducted annually or quarterly, but some organizations may choose to conduct audits more frequently.",
    },
    {
      question: "What areas does internal audit cover?",
      answer:
        "Internal audit covers a wide range of areas, including financial reporting, operational processes, compliance with laws and regulations, information technology, risk management, and governance.",
    },
    {
      question: "Can internal audit help with risk management?",
      answer:
        "Yes, internal audit plays a crucial role in risk management by identifying and assessing risks, evaluating the effectiveness of controls to mitigate those risks, and providing recommendations to strengthen controls and reduce risk exposure.",
    },
  ];

  return (
    <section className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
      {/* Banner */}
      <motion.div
        className="w-full h-[50vh] overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/sefessdcd.jpg"
          alt="Internal Audit Banner"
          className="w-full h-full object-cover object-center"
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
          <h1 className="text-black text-4xl mb-10 font-semibold text-center">
            INTERNAL AUDIT
          </h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              Internal auditing is a vital function within organizations that helps to enhance governance, risk management, and control processes.Conducting an independent assessment, objective assurance, and consulting activity designed to add value and improve an organization's operational and financial controls as per the best industry practices.
            </p>
            <p>
             Our experienced team of internal auditors works closely with clients to assess internal controls, identify areas for improvement, and provide valuable insights to support informed decision-making.
            </p>
            <p>
              Our approach is to recognize that every organization is unique, with its own set of risks, challenges, and opportunities. Our approach to internal audit is tailored to meet the specific needs and objectives of each client. We focus on understanding your business, identifying key risks, and providing practical recommendations to enhance internal controls and processes.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us */}
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
          {[
            {
              title: "Risk Assessment",
              description:
                "We conduct comprehensive risk assessments to identify and prioritize key risks facing your organization.",
            },
            {
              title: "Internal Control Evaluation",
              description:
                "Our auditors evaluate the design and effectiveness of internal controls to ensure they mitigate identified risks and support the achievement of organizational objectives.",
            },
            {
              title: "Process Improvement",
              description:
                "We identify opportunities for process improvement and efficiency gains to help optimize your organization's operations.",
            },
            {
              title: "Compliance Assurance",
              description:
                "Our internal audit services help ensure compliance with laws, regulations, and internal policies and procedures.",
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
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              {item.question}
              <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key={`faq-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div id={`faq-${index}`} className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base">
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
      <motion.div
        className="mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <Link
          to="/services/risk-assurance"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to Risk Assurance
        </Link>
      </motion.div>
    </section>
  );
}
