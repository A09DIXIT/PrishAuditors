import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const faqItems = [
  {
    question: "What is a statutory audit?",
    answer:
      "A statutory audit is a legally mandated examination of a company's financial records, transactions, and statements to ensure accuracy, compliance with accounting standards, and adherence to regulatory requirements."
  },
  {
    question: "Who requires a statutory audit?",
    answer:
      "Statutory audits are typically required for public companies, large private companies, and certain non-profit organizations. The requirement may vary based on the jurisdiction and the company's size and nature of business."
  },
  {
    question: "What are the objectives of a statutory audit?",
    answer:
      "The main objectives of a statutory audit include verifying the accuracy and reliability of financial statements, ensuring compliance with applicable laws and regulations, and providing assurance to stakeholders about the company's financial health and performance."
  },
  {
    question: "How often does a company need to undergo a statutory audit?",
    answer:
      "The frequency of statutory audits varies depending on legal requirements and the company's size and type. In many jurisdictions, annual audits are required, but smaller businesses may undergo audits less frequently."
  },
  {
    question: "What is the role of the auditor in a statutory audit?",
    answer:
      "The auditor's role is to independently examine the company's financial records, transactions, and internal controls. They assess the reliability of financial reporting, identify any material misstatements or errors, and provide an opinion on the fairness and accuracy of the financial statements."
  },
  {
    question: "What are the benefits of a statutory audit for a company?",
    answer:
      "Statutory audits provide benefits such as improved credibility with stakeholders, identification of internal control weaknesses, compliance with legal requirements, enhanced transparency, and accountability."
  },
  {
    question: "How long does a statutory audit typically take?",
    answer:
      "The duration of a statutory audit depends on factors such as the size and complexity of the company, the quality of its financial records, and the scope of the audit. Generally, audits for smaller companies may take a few weeks, while audits for larger organizations may take several months."
  },
  {
    question: "What is the process of a statutory audit?",
    answer:
      "The process typically involves planning, risk assessment, testing of controls and transactions, substantive procedures, communication of findings, and issuing the audit report. The specific steps may vary depending on the auditor's approach and the company's circumstances."
  },
  {
    question: "What documents are required for a statutory audit?",
    answer:
      "Documents required for a statutory audit may include financial statements, bank statements, invoices, receipts, contracts, payroll records, tax returns, and any other relevant financial or accounting records."
  },
  {
    question: "Can a company change its auditor for statutory audits?",
    answer:
      "Yes, a company can change its auditor if necessary. However, the process may involve notifying relevant authorities and ensuring a smooth transition of audit responsibilities."
  }
];

const StatutoryAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          src="/Audit-Assurance.png"
          alt="Statutory Audit Banner"
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
            STATUTORY AUDIT
          </motion.h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              We will be performing a thorough examination of financial records and providing assurance on the accuracy and reliability of your company’s financial statements. It provides assurance tostakeholders, including shareholders, investors, creditors, and regulators, about the accuracy and fairness of the company's financial statements. They help ensure transparency, accountability, and compliance with relevant laws and regulations.
            </p>
            <p>
              Our team of experienced auditors provides comprehensive statutory audit
              services tailored to meet the specific needs of your business.
            </p>
            <p>
              Our approach to statutory audits goes beyond mere compliance. We delve
              deep into your financial records, processes, and controls to provide
              valuable insights that can help you improve your financial management
              practices.
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
              title: "Experienced Professionals:",
              description:
                "Our team consists of highly skilled and experienced auditors with extensive knowledge across various industries.",
            },
            {
              title: "Tailored Solutions:",
              description:
                "We understand that every business is unique. That's why we offer customized audit solutions designed to address your specific requirements.",
            },
            {
              title: "Efficiency and Timeliness:",
              description:
                "We strive to complete audits promptly without compromising on quality, ensuring minimal disruption to your business operations.",
            },
            {
              title: "Comprehensive Reporting:",
              description:
                "Our audit reports are detailed, transparent, and easy to understand, providing you with valuable information to make informed decisions.",
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
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
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

      {/* Send Query Form */}
      <div className="mb-16">
        <motion.div
          className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-[#0d3c58]">
            Send a Query
          </h2>
          <SendQueryForm />
        </motion.div>
      </div>

      {/* Back Button */}
      <div className="mt-10 mb-20 text-center">
        <Link
          to="/services/audit"
          className="inline-block px-6 py-3 bg-[#010507] text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to AUDITING AND ASSURANCE
        </Link>
      </div>
    </section>
  );
};

export default StatutoryAudit;
