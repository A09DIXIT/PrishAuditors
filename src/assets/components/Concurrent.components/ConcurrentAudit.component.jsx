import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

export default function ConcurrentAudit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      question: "What is a concurrent audit?",
      answer:
        "A concurrent audit is a real-time examination of financial transactions and processes conducted simultaneously with the occurrence of transactions to ensure accuracy, compliance, and effectiveness of internal controls.",
    },
    {
      question: "Why is concurrent audit necessary?",
      answer:
        "Concurrent audits help organizations maintain control over their financial transactions, detect errors or irregularities promptly, prevent fraud, ensure compliance with regulations, and improve operational efficiency.",
    },
    {
      question: "Who needs concurrent audit services?",
      answer:
        "Concurrent audit services are beneficial for businesses of all sizes and types, particularly those with high transaction volumes or complex financial operations.",
    },
    {
      question: "What are the key objectives of a concurrent audit?",
      answer:
        "The main objectives of a concurrent audit include real-time monitoring of financial transactions, early detection of irregularities or fraud, assessment of compliance with internal policies and regulatory requirements, and improvement of operational efficiency.",
    },
    {
      question: "How does concurrent audit differ from other types of audits?",
      answer:
        "Concurrent audit differs from other audits, such as internal audit and statutory audit, in that it is conducted simultaneously with the occurrence of transactions, providing real-time monitoring and assessment of controls and processes.",
    },
    {
      question: "What are the benefits of concurrent audit services?",
      answer:
        "The benefits of concurrent audit services include fraud prevention, early detection of errors or irregularities, improved operational efficiency, compliance assurance, enhanced stakeholder confidence, and proactive risk management.",
    },
    {
      question: "What does the concurrent audit process involve?",
      answer:
        "The process typically involves planning, risk assessment, real-time monitoring, control testing, detection of irregularities, reporting of findings, and improvement recommendations.",
    },
    {
      question: "How frequently should concurrent audits be conducted?",
      answer:
        "The frequency depends on the organization's size and complexity. In general, they are conducted regularly—often daily or weekly—for timely detection and prevention.",
    },
  ];

  return (
    <section className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
      {/* Banner */}
      <motion.div
             className="w-screen h-[50vh] overflow-hidden"
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1 }}
           >
        <img
          src="/concurrent-autdit.jpg"
          alt="Concurrent Audit Banner"
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
          <motion.h1 className="text-black text-4xl mb-10 font-semibold text-center">
            CONCURRENT AUDIT
          </motion.h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              A concurrent audit is a real-time examination of financial transactions and processes conducted simultaneously with the occurrence of transactions to ensure accuracy, compliance, and effectiveness of internal controls.
            </p>
            <p>
              Our experienced auditors work closely with your team to perform concurrent audits tailored to your organization's unique needs. We understand the importance of timely and proactive oversight of financial operations.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mt-16 mx-auto px-4 pb-20">
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
              title: "Real-time Monitoring",
              description:
                "We provide real-time monitoring of financial transactions, enabling prompt detection of errors, discrepancies, or potential fraud.",
            },
            {
              title: "Risk Assessment",
              description:
                "We conduct thorough risk assessments to identify vulnerabilities and recommend measures to strengthen internal controls.",
            },
            {
              title: "Comprehensive Reporting",
              description:
                "Our reports are detailed and easy to understand, offering practical insights to improve operational efficiency and compliance.",
            },
            {
              title: "Customized Solutions",
              description:
                "Every business is unique, so we tailor our audit procedures and recommendations to meet your specific challenges.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white border-l-4 border-[#163c4f] shadow-md p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
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

      {/* Contact Form */}
      <motion.div
        className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-[#0d3c58]">
          Send a Query
        </h2>
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
          to="/services/audit"
          className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to Auditing & Assurance
        </Link>
      </motion.div>
    </section>
  );
}
