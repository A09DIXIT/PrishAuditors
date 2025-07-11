import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const CFOServices = () => {
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
      question: "What are CFO services?",
      answer:
        "CFO services involve providing strategic financial leadership and guidance to businesses, covering functions such as financial planning, analysis, reporting, and decision-making.",
    },
    {
      question: "Why would a business need CFO services?",
      answer:
        "Businesses may need CFO services to gain access to financial expertise, improve decision-making, optimize financial performance, and achieve long-term growth objectives.",
    },
    {
      question: "How can CFO services benefit business?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Access to experienced financial professionals</li>
          <li>Cost savings compared to hiring a full-time CFO</li>
          <li>Improved financial performance and profitability</li>
          <li>Enhanced governance and compliance with financial regulations</li>
        </ul>
      ),
    },
    {
      question: "What specific areas do CFO services cover?",
      answer:
        "CFO services cover a wide range of areas including financial planning, budgeting, forecasting, cash flow management, risk management, financial reporting, and strategic financial advice.",
    },
    {
      question: "How can CFO services help with financial planning and analysis (FP&A)?",
      answer:
        "CFO services help businesses develop comprehensive financial plans, forecasts, and budgets to support strategic decision-making and resource allocation.",
    },
    {
      question: "Can CFO services assist with cash flow management?",
      answer:
        "Yes, CFO services can help businesses optimize cash flow by forecasting cash requirements, managing working capital, and implementing cash management strategies.",
    },
    {
      question: "What role does a CFO play in risk management?",
      answer:
        "A CFO plays a critical role in identifying and mitigating financial risks through robust risk management processes, including scenario analysis, internal controls, and compliance measures.",
    },
    {
      question: "How do CFO services improve financial reporting?",
      answer:
        "CFO services ensure timely and accurate financial reporting, including the preparation of financial statements, management reports, and key performance indicators (KPIs) to monitor business performance.",
    },
    {
      question: "What industries can benefit from CFO services?",
      answer:
        "CFO services are beneficial for businesses across various industries, including manufacturing, technology, healthcare, retail, and professional services.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <motion.div
        className="w-full h-[50vh] overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/CFOServices.webp"
          alt="CFO Services Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
        <div className="max-w-7xl mx-auto mt-10 px-4 pb-10">
          <motion.div
            className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 mt-10 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.4 },
            }}
          >
            <motion.h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
              CFO SERVICES
            </motion.h1>
            <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
              <p>
                Our seasoned finance professionals are members of IIM and ICAI who help you in running your finance function with their expert advice and hands-on involvement. Their niche experience with MNCs can help your business to a better future by getting them as a virtual CFO to revolutionize the finance on your behalf.
              </p>
              <p>
                These services cover a wide range of financial management functions, including financial planning, budgeting, reporting, analysis, and strategic decision-making.
              </p>
              <p>
                Our approach is to understand the critical role that financial management plays in driving business success. It's focused on providing strategic insights, actionable recommendations, and hands-on support to help businesses achieve their financial goals.
              </p>
            </div>
          </motion.div>
        </div>

      {/*Why Choose Us */}
      
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
                  Why Choose PRISH?
                </h3>
              </motion.div>
      
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Financial Planning and Analysis (FP&A):",
                    description:
                      "We assist businesses in developing comprehensive financial plans, forecasts, and budgets to support strategic decision-making and resource allocation.",
                  },
                  {
                    title: "Financial Reporting:",
                    description:
                      "Our team ensures timely and accurate financial reporting, including the preparation of financial statements, management reports, and key performance indicators (KPIs) to monitor business performance.",
                  },
                  {
                    title: "Cash Flow Management:",
                    description:
                      "We help businesses optimize cash flow by forecasting cash requirements, managing working capital, and implementing cash management strategies.",
                  },
                  {
                    title: "Risk Management:",
                    description:
                      "We identify and mitigate financial risks through robust risk management processes, including scenario analysis, internal controls, and compliance measures.",
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
      
            {/* End Why Choose Us */}

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

export default CFOServices;
