import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const AccountingBookkeeping = () => {
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

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const faqItems = [
    {
      question: "What is the difference between accounting and bookkeeping?",
      answer:
        " Accounting involves interpreting, analysing, and summarizing financial data to provide insights for decision-making, while bookkeeping involves recording financial transactions and maintaining financial records.",
    },
    {
      question: "Why do businesses need accounting and bookkeeping services?",
      answer:
        "Accounting and bookkeeping services help businesses track financial transactions, comply with tax regulations, make informed decisions, and monitor financial health.",
    },
    {
      question: "What specific tasks are included in accounting and bookkeeping services?",
      answer:
        "Accounting services may include financial statement preparation, tax planning, and analysis of financial data, while bookkeeping services typically involve recording transactions, reconciling accounts, and managing accounts payable and accounts receivable.", },
    {
      question: "How often should I update my accounting records?",
      answer:
        " It's recommended to update accounting records regularly, ideally on a daily or weekly basis, to ensure accuracy and timely financial reporting.",
    },
    {
      question: "Can outsourcing accounting and bookkeeping services save me time and money?",
      answer:
        "Yes, outsourcing accounting and bookkeeping services can save time and resources for businesses, allowing them to focus on core activities while ensuring accuracy and compliance in financial management.",
    },
    {
      question: "How do I choose the right accounting and bookkeeping service provider?",
      answer:
        "When choosing a service provider, consider factors such as expertise, experience, reputation, services offered, technology used, and pricing.",
    },
    {
      question: "What are the benefits of outsourcing accounting and bookkeeping services?",
      answer:
        "Benefits include improved accuracy and compliance, cost savings, access to expertise, streamlined processes, and enhanced financial reporting.",
    },
    {
      question: "Can accounting and bookkeeping services help with tax preparation?",
      answer:
        " Yes, accounting and bookkeeping services often include tax preparation services, ensuring compliance with tax regulations and optimizing tax efficiency for businesses.",
    },
    {
      question: "How do businesses measure the ROI of accounting and bookkeeping services?",
      answer:
        "Businesses can measure ROI by evaluating improvements in efficiency, productivity, customer satisfaction, security posture, and cost savings achieved through accounting and bookkeeping services.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#163c4f]">
        <motion.div
              className="w-full h-[50vh] overflow-hidden"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/accounting1.avif"
                alt="Mystery Audit Banner"
                className="w-full h-full object-cover"
              />
            </motion.div>
      
      {/* Intro Section with Gradient Background (No Image) */}
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
        <h1 className="text-black text-4xl font-semibold text-center mb-10">
          ACCOUNTING AND BOOKKEEPING
        </h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
        <p>
          Accounting and bookkeeping services play a crucial role in helping businesses maintain accurate financial records, comply with regulatory requirements, and make informed financial decisions to support their growth and success.
        </p>
       <p>
          While providing accounting and bookkeeping services, we ensure that financial statements comply with the International Financial Reporting Standards (IFRS) and we are committed to providing the services with the highest standards of integrity and quality.
        </p>
       <p>
          Our team is fully capable with most of accounting software like Tally, QuickBooks, ZOHO, Xero, Microsoft Dynamics 365, SAP, etc. Our approach is proactive, detail-oriented, and focused on high-quality services that meet client needs.
        </p>
        <p>Our approach is understanding the importance of accurate financial records for business success. It is proactive, detail-oriented, and focused on delivering high-quality services that meet our clients' needs.</p>
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
                    title: "Accounts Receivable Management:",
                    description:
                      "We ensure accurate and timely invoicing, assess, and manage credit risk, develop customized collection strategies, handle disputes and discrepancies, and accurately apply payments received to the appropriate customer accounts.",
                  },
                  {
                    title: "Accounts Payable Management:",
                    description:
                      "In this service, we handle the receipt, review of vendor invoices, manage payment processing, maintain vendor accounts, assist with expense reporting, and lastly reconcile accounts payable records with vendor statements.",
                  },
                  {
                    title: "Bank Reconciliation:",
                    description:
                      "We carefully match each transaction in the company’s accounting records with corresponding bank entries on the bank statement, identify discrepancies, diligently resolve the discrepancies, and provide the reconciliation reports. (SOPs)",
                  },
                  {
                    title: "General Ledger Maintenance:",
                    description:
                      "We accurately record all financial transactions in the general ledger, do reconciliation with subsidiary ledgers, perform month-end closing procedures, and lastly prepare financial reports.",
                  },
 {
                    title: "Payroll and Employee Management:",
                    description:
                      "We handle all aspects of payroll processing, manage employee health insurance programs, ensure compliance with labour laws, help in leave and attendance management, and properly facilitate the onboarding process for new hires.",
                  },
                   {
                    title: "Financial Analysis:",
                    description:
                      "We analyse financial statements, calculate, and interpret key financial ratios, identify, and analyse financial trends, compare budgeted financial data with actual performance, and use quantitative techniques and historical data to forecast the future.",
                  },
                   {
                    title: "Financial Reporting:",
                    description:
                      "We prepare the financial statements, provide customized management reporting, ensure financial reports comply with regulatory requirements, offer consolidated financial reporting services to aggregate financial data from multiple entities, and lastly analyse financial data and provide insights to help stakeholders to understand financial statements.",
                  },
                  
].map((item, idx, arr) => {
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

export default AccountingBookkeeping;
