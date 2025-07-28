import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const whyChoose = [
  {
    title: "Process Evaluation",
    description:
      "We assess sales processes, including invoicing, recording, and reporting, to ensure compliance with sales tax regulations.",
  },
  {
    title: "Documentation Review",
    description:
      "We examine sales tax documentation such as invoices, receipts, and tax returns to verify accuracy and completeness.",
  },
  {
    title: "Compliance Verification",
    description:
      "We verify compliance with sales tax regulations, including tax rates, exemptions, and filing requirements, to ensure accurate reporting and remittance.",
  },
  {
    title: "Internal Control Assessment",
    description:
      "We evaluate internal controls related to sales tax processes to identify weaknesses and recommend enhancements to prevent errors and fraud.",
  },
  {
    title: "Audit Report and Recommendations",
    description:
      "We provide a comprehensive audit report with findings and recommendations to help businesses improve their sales tax processes and achieve certification from tax authorities.",
  },
];

 const faqItems = [
    {
      question: "What is a Sales Certification Audit?",
      answer:
        "A Sales Certification Audit is an examination of sales processes, documentation, and reporting to ensure compliance with sales tax regulations and obtain certification from tax authorities.",
    },
    {
      question: "Why is a Sales Certification Audit important for businesses?",
      answer:
        "A Sales Certification Audit is important for businesses to ensure compliance with sales tax regulations, avoid penalties, and gain credibility with customers, suppliers, and investors.",
    },
    {
      question: "What does a Sales Certification Audit involve?",
      answer:
        "A Sales Certification Audit involves evaluating sales transactions, reviewing documentation, assessing internal controls, and ensuring compliance with sales tax regulations.",
    },
    {
      question: "How often should businesses conduct Sales Certification Audits?",
      answer:
        "The frequency of Sales Certification Audits depends on the size of the business, the volume of sales, and regulatory requirements. However, it is recommended to conduct audits regularly to maintain compliance.",
    },
    {
      question: "What are the benefits of conducting a Sales Certification Audit?",
      answer: (
        <>
          <p className="submenu-sub-header">
            Compliance Assurance:
            <span className="text">
              {" "}
              Audits help ensure compliance with sales tax regulations, reducing the risk of penalties and legal issues.
            </span>
          </p>
          <p className="submenu-sub-header">
            Accuracy and Efficiency:
            <span className="text">
              {" "}
              By identifying errors and inefficiencies, audits improve accuracy and efficiency in sales tax reporting.
            </span>
          </p>
          <p className="submenu-sub-header">
            Cost Savings:
            <span className="text">
              {" "}
              Audits help businesses avoid overpayment or underpayment of sales taxes, leading to cost savings.
            </span>
          </p>
          <p className="submenu-sub-header">
            Certification Readiness:
            <span className="text">
              {" "}
              Audits prepare businesses for sales tax certification, enhancing credibility with tax authorities and stakeholders.
            </span>
          </p>
        </>
      ),
    },
  ];

const SalesTaxCertificationAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleIndex = (idx) => {
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

  return (
    <section className="bg-white w-full">
      {/* Banner */}
      <motion.div
        className="w-screen h-[50vh] overflow-hidden"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/1ST1.avif"
          alt="Sales Tax Audit Banner"
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
          <h1 className="text-black text-4xl mb-10 font-semibold text-center">
            SALES TAX CERTIFICATION AUDIT
          </h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto text-justify">
            <p>
             Sales Certification refers to a process whereby companies obtain accreditation to engage in sales activities within specific industries. Obtaining sales certification demonstrates competence, professionalism, and compliance with regulatory standards, enhancing the credibility and trustworthiness of the organization's activities. Our experienced team conducts thorough audits to assess sales processes, documentation, and reporting, ensuring accuracy and compliance.
            </p>
            <p>
             Our process involves evaluating sales transactions, reviewing documentation, and assessing internal controls to ensure compliance and identify areas for improvement.
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
                <h4 className="text-xl font-semibold text-[#163c4f] mb-2">{item.title}</h4>
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
              onClick={() => toggleIndex(index)}
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

export default SalesTaxCertificationAudit;
