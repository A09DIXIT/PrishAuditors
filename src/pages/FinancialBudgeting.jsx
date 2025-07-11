import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const FinancialBudgeting = () => {
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

    question: "What is financial budgeting?",
    answer:
      "Financial budgeting is the process of creating a detailed plan for a company's financial activities, including revenues, expenses, and cash flows, typically for a specific period, such as a fiscal year.",
    expanded: true,
  },
  {
   
    question: "What is financial forecasting?",
    answer:
      "Financial forecasting involves predicting future financial performance based on historical data, market trends, and assumptions, providing insights into potential revenue, expenses, and cash flow.",
  },
  {
  
    question: "Why is financial budgeting and forecasting important for businesses?",
    answer:
      "Financial budgeting and forecasting are important for businesses because they help in planning and managing finances effectively, making informed decisions, and setting realistic goals and targets.",
  },
 {
    question: "What are the key benefits of financial budgeting and forecasting services?",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Improved decision-making based on accurate financial data and insights</li>
        <li>Efficient allocation of resources to maximize profitability</li>
        <li>Identification and mitigation of potential risks through scenario analysis</li>
        <li>Facilitation of strategic planning by aligning short-term actions with long-term goals</li>
      </ul>
    ),
  },
  {
   
    question: "What factors are considered during financial forecasting?",
    answer:
      "Financial forecasting considers various factors such as historical financial data, market trends, industry benchmarks, economic conditions, and business-specific variables to predict future performance.",
  },
  {
  
    question: "How often should businesses update their financial budgets and forecasts?",
    answer:
      "Financial budgets and forecasts should be updated regularly, typically on a quarterly or annual basis, to reflect changes in business conditions, market dynamics, and strategic priorities.",
  },
  {
  
    question: "Can financial budgeting and forecasting help in identifying growth opportunities?",
    answer:
      "Yes, financial budgeting and forecasting can help businesses identify growth opportunities by highlighting areas of potential revenue growth, cost savings, and investment opportunities.",
  },
  {
   
    question: "How does financial budgeting and forecasting contribute to risk management?",
    answer:
      "Financial budgeting and forecasting contribute to risk management by identifying potential risks and uncertainties, enabling businesses to develop contingency plans and mitigate adverse impacts on financial performance.",
  },
  {
   
    question: "How do financial budgeting and forecasting services add value to businesses?",
    answer:
      "Financial budgeting and forecasting services add value to businesses by providing insights and tools for effective financial planning, decision-making, and performance management, ultimately leading to improved profitability and sustainable growth.",
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
          src="/1FINANCIALBUDGETING.jpg"
          alt="Financial Budgeting Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
<div className="max-w-7xl mx-auto mt-10 px-4 pb-10">
          <motion.div
            className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 mt-5 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
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
              FINANCIAL BUDGETING
            </motion.h1>
            <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
              <p>
                Developing a comprehensive plan for the allocation and budgeting of financial resources over a specific period. The budget serves as a roadmap for guiding financial decision-making and performance evaluation.
              </p>
              <p>
                Forecasting by predicting future financial outcomes, performance, and cash flows based on historical data, market trends, and other relevant factors. It helps businesses plan and manage their finances effectively.
              </p>
              <p>
                Our expert team provides tailored solutions to assist organizations in developing accurate budgets, forecasting future financial performance, and making informed strategic decisions.
              </p>
              <p>
                Our approach is to understand that financial budgeting and forecasting are critical components of business planning and decision-making. It’s collaborative and data-driven, focusing on developing realistic budgets and forecasts that align with our client's goals and objectives.
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
                   title: "Budget Preparation:",
                   description:
                     "We assist businesses in creating detailed budgets that outline expected revenues, expenses, and cash flows for the upcoming period.",
                 },
                 {
                   title: "Financial Forecasting:",
                   description:
                     "Our team develops financial forecasts that project future performance based on historical data, market trends, and assumptions.",
                 },
                 {
                   title: "Scenario Analysis:",
                   description:
                     "We conduct scenario analysis to assess the potential impact of different variables and events on the company's financial performance.",
                 },
                 {
                   title: "Performance Monitoring:",
                   description:
                     "We help businesses monitor their actual financial performance against budgeted and forecasted figures, identifying variances and making necessary adjustments.",
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

export default FinancialBudgeting;
