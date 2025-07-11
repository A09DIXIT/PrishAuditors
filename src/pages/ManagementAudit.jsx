import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const faqs = [
  {
    question: "What is a management audit?",
    answer:
      "A management audit is a structured review of an organization's management systems, leadership effectiveness, and governance to ensure alignment with strategic goals."
  },
  {
    question: "How does it differ from financial audit?",
    answer:
      "While financial audits focus on records and compliance, management audits assess leadership, structure, decision-making, and operational efficiency."
  },
  {
    question: "Who needs it?",
    answer:
      "Organizations undergoing restructuring, planning leadership transitions, seeking operational optimization, or preparing for external investments benefit greatly."
  },
  {
    question: "How long does it take?",
    answer:
      "Typically 4–8 weeks, depending on scope, organization size, and stakeholder interviews."
  },
];

const ManagementAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white max-w-8xl pb-20 m-0">
      {/* Banner */}
      <motion.div
        className="w-screen h-[50vh] overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/ManagementAudit.jpg"
          alt="Management Audit Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Why Management Audit Matters */}
      <motion.div
        className="relative flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-16 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Text Sidebar on Left */}
        <div className="md:w-1/2 z-10">
          <h3 className="text-3xl font-semibold text-[#0a2d45] mb-4">
            Why Management Audit Matters
          </h3>
          <p className="text-gray-700 text-lg mb-2">
            At Prish Auditors, we conduct management audits not just to evaluate systems but to unlock untapped performance potential across leadership and governance.
          </p>
          <p className="text-gray-700 text-lg mb-2">
            Our audits provide actionable insights that align operational strategies with long-term organizational goals, helping you build a resilient and agile enterprise.
          </p>
          <p className="text-gray-700 text-lg mb-2">
            With a focus on structure, accountability, and strategic execution, we empower decision-makers with clarity, control, and a competitive edge.
          </p>
        </div>

        {/* Image with Overlay */}
        <div className="md:w-1/2 relative ml-10 mt-10 md:mt-0">
          <motion.img
            src="/management-overview.avif"
            alt="Management Audit Overview"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          <motion.div
            className="absolute bottom-6 left-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h4 className="text-2xl font-bold">Comprehensive Insights</h4>
            <p className="text-base mt-2">
              Tailored management reviews for robust governance.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQs */}
      <motion.div
        className="mt-16 px-6 md:px-16 max-w-8xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-[#0a2d45] mb-6 text-center">Frequently Asked Questions</h3>
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className="border rounded-md mb-4 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full px-5 py-4 bg-[#0d3c58] text-white flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span>{openIndex === idx ? "▲" : "▼"}</span>
            </button>
            {openIndex === idx && (
              <div className="px-5 py-4 bg-gray-100 text-gray-700">
                {faq.answer}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="mt-24 px-6 md:px-16 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-[#0a2d45] mb-6">Ready to improve your management?</h3>
        <SendQueryForm />
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          to="/services/audit"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to Auditting and Assurance
        </Link>
      </div>
    </section>
  );
};

export default ManagementAudit;
