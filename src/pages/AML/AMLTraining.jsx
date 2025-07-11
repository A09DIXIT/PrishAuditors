import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const AMLTraining = () => {
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
      question: "What is AML training?",
      answer: "AML training equips employees to detect suspicious transactions, conduct due diligence, and understand money laundering risks."
    },
    {
      question: "Who should attend AML training?",
      answer: "All employees involved in financial processes, KYC, or compliance functions should undergo AML training."
    },
    {
      question: "Is AML training mandatory?",
      answer: "Yes, UAE regulations require regulated entities to conduct regular AML/CFT training for relevant staff."
    },
    {
      question: "Do you provide customized training?",
      answer: "Yes, we tailor our AML training based on your industry, risk exposure, and compliance needs."
    },
    {
      question: "What topics are covered?",
      answer: "Topics include KYC, risk profiling, STR, record-keeping, due diligence, screening, and AML best practices."
    }
  ];

  const trainingTopics = [
    "KYC Due Diligence",
    "Screening (UNSC & UAE Sanctions)",
    "Risk Profiling",
    "Enhanced Due Diligence",
    "Suspicious Transaction Reporting (STR)",
    "AML Record Keeping",
    "AML/CFT Awareness",
    "International AML Best Practices",
    "AML Compliance Program Design"
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
          src="/1TRAINING.jpeg"
          alt="AML Training"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto mt-10 px-4 pb-10">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl text-center font-semibold mb-6 text-[#0a2d45]">
            AML TRAINING
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto text-[#0a2d45]">
            <p>
              AML/CFT compliance programs require effective training to make your staff aware of financial crime risks, laws, and internal protocols. Our programs are tailored to UAE’s AML laws and global best practices.
            </p>
            <p>
              From customer due diligence to suspicious transaction reporting, our robust training covers every critical area, preparing your teams to remain compliant and proactive.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Topics Covered */}
     <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
  <h3 className="text-3xl font-semibold text-center mb-10">AML Training Topics</h3>
  <div className="grid md:grid-cols-2 gap-8">
    {[
      {
        title: "KYC Due Diligence",
        description:
          "Learn how to collect and verify customer identity and maintain secure data records.",
      },
      {
        title: "Screening (UNSC & UAE Sanctions)",
        description:
          "Understand how to screen entities against global and UAE sanctions lists effectively.",
      },
      {
        title: "Risk Profiling",
        description:
          "Develop skills to assess customer and business risk levels using risk-based methodologies.",
      },
      {
        title: "Enhanced Due Diligence",
        description:
          "Identify high-risk cases and gather deeper insights into customer background and financials.",
      },
      {
        title: "Suspicious Transaction Reporting (STR)",
        description:
          "Learn how to detect, document, and report suspicious activity in compliance with UAE law.",
      },
      {
        title: "AML Record Keeping",
        description:
          "Maintain required AML documentation securely for a minimum of 5 years.",
      },
      {
        title: "AML/CFT Awareness",
        description:
          "Understand the UAE regulatory landscape, FATF recommendations, and compliance obligations.",
      },
      {
        title: "International AML Best Practices",
        description:
          "Implement global AML standards and procedures tailored to your industry.",
      },
      {
        title: "AML Compliance Program Design",
        description:
          "Build frameworks, policies, and governance models to ensure full AML compliance.",
      },
    ].map((topic, index, arr) => {
      const isLastOdd = arr.length % 2 !== 0 && index === arr.length - 1;

      const card = (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f] w-full"
        >
          <h4 className="text-xl font-semibold text-[#163c4f] mb-2">{topic.title}</h4>
          <p className="text-gray-700">{topic.description}</p>
        </motion.div>
      );

      return isLastOdd ? (
        <div key={index} className="md:col-span-2 flex justify-center">
          <div className="md:w-[48%] w-full">{card}</div>
        </div>
      ) : (
        <div key={index}>{card}</div>
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

      {/* Contact Form */}
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

export default AMLTraining;
