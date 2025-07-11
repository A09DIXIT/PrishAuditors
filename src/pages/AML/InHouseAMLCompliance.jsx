import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const InHouseAMLCompliance = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const faqItems = [
    {
      question: "Why is an in-house AML department important?",
      answer: "It ensures proactive compliance, reduces risk of penalties, and fosters a strong compliance culture aligned with UAE AML laws."
    },
    {
      question: "Who leads the compliance department?",
      answer: "An AML Compliance Officer, appointed with board approval, is responsible for managing compliance functions and reporting."
    },
    {
      question: "Is this required for small businesses too?",
      answer: "Yes, any entity exposed to financial transactions or ML/TF risk must implement AML controls regardless of size."
    },
    {
      question: "What qualifications should the AML Compliance Officer have?",
      answer: "The officer should have knowledge of AML laws, risk assessment, and experience in regulatory compliance frameworks."
    },
    {
      question: "How long does it take to set up an AML compliance department?",
      answer: "Depending on the size and complexity of your business, it may take a few weeks to fully implement policies and hire or train the team."
    },
    {
      question: "Can the setup be customized for our industry?",
      answer: "Yes, we tailor the AML framework, policies, and monitoring systems based on your sector-specific risks and regulations."
    }
  ];

  return (
    <div className="w-full bg-white text-[#163c4f]">
      {/* Banner */}
      <motion.div
        className="w-full h-[50vh] overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/1legislation-background.jpg"
          alt="In-house AML Compliance Department"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto mt-10 px-4 pb-10">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl text-center font-semibold mb-6 text-[#0a2d45]">
            IN-HOUSE AML COMPLIANCE DEPARTMENT SETUP
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto text-[#0a2d45]">
            <p>
              We help UAE businesses with setting up an in-house AML compliance department in line with evolving AML/CFT laws. From understanding regulatory requirements to building internal frameworks, we guide you at every step to ensure compliance and mitigate money laundering risks.
            </p>
            <p>
              Our expert team ensures your compliance structure is timely, relevant, and effective by transforming your approach from reactive to proactive.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Our Process */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Process for Setup</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {["Study AML Requirements", "Appoint AML Compliance Officer", "Define Rules & Responsibilities", "Set Up Compliance Department"].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
            >
              <h4 className="text-xl font-semibold mb-2">{step}</h4>
              <p className="text-gray-700">
                {index === 0 && `We begin by understanding your organization’s AML risk profile and explaining the strategic need for a compliance department to top management.`}
                {index === 1 && `We assist in appointing a dedicated AML compliance officer with authority and support from leadership, including team structuring if needed.`}
                {index === 2 && `Our experts guide you in drafting a compliance code of conduct, policies, and SOPs aligned with UAE AML regulations and international standards.`}
                {index === 3 && `We implement the department with tools and monitoring mechanisms that detect, prevent, and report suspicious activities effectively.`}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
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

      {/* Contact */}
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
  );
};

export default InHouseAMLCompliance;
