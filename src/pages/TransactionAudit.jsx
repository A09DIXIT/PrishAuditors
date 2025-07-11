import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const TransactionAudit = () => {
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
      question: "What is a Transaction Audit?",
      answer:
        "A Transaction Audit is an examination of financial transactions within an organization to ensure accuracy, compliance, and efficiency. It involves reviewing individual transactions to verify their integrity and adherence to internal controls and policies.",
    },
    {
      question: "Why are Transaction Audits important for businesses?",
      answer:
        "Transaction Audits are essential for businesses to ensure the integrity of financial data, identify errors and irregularities, mitigate risks, and maintain compliance with regulations and internal policies.",
    },
    {
      question: "What types of transactions are typically reviewed in a Transaction Audit?",
      answer:
        "In a Transaction Audit, various types of financial transactions are reviewed, including purchases, sales, expenses, payroll transactions, investments, and other financial activities relevant to the organization's operations.",
    },
    {
      question: "How often should businesses conduct Transaction Audits?",
      answer:
        "The frequency of Transaction Audits depends on factors such as the size of the organization, the complexity of its operations, and regulatory requirements. However, it is generally advisable to conduct audits regularly, such as annually or semi-annually, to ensure ongoing compliance and risk management.",
    },
    {
      question: "Can Transaction Audits be customized to meet specific business needs?",
      answer:
        "Yes, Transaction Audits can be tailored to the specific needs and requirements of each business. This service includes addressing the unique challenges and objectives of our clients, ensuring maximum value and effectiveness.",
    },
    {
      question: "How are Transaction Audits conducted?",
      answer:
        "Transaction Audits are conducted through a systematic process that involves planning, data collection, analysis, reporting, and follow-up. The audit team reviews financial records, analyzes transactions, identifies anomalies or discrepancies, and provides recommendations for improvement.",
    },
    {
      question: "How can businesses benefit from transaction Audit services?",
      answer: (
        <div>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Ensure the accuracy, compliance, and efficiency of financial
              transactions.
            </li>
            <li>
              Identify and mitigate risks associated with financial activities.
            </li>
            <li>Enhance internal controls and process efficiency.</li>
            <li>Maintain stakeholder trust and confidence.</li>
          </ul>
        </div>
      ),
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
          src="/1TransactionAudit.webp"
          alt="Transaction Audit Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
      <section className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
        <div className="max-w-8xl mx-auto mt-5 px-4 pb-16">
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
              TRANSACTION AUDIT
            </motion.h1>
            <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
              <p>
                Transaction Audits involve the examination and review of specific financial transactions within an organization to ensure accuracy, compliance, and integrity.
              </p>
              <p>
                Our experienced team conducts thorough audits to identify discrepancies, mitigate risks, and improve financial controls.
              </p>
              <p>
                Our systematic process includes reviewing individual transactions, analyzing trends, and recommending enhancements to optimize financial operations and add value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
                 title: "Transaction Review:",
                 description:
                   "We analyse individual transactions, including purchases, sales, expenses, and payments, to ensure accuracy and completeness.",
               },
               {
                 title: "Compliance Assessment:",
                 description:
                   "We verify transactions against relevant laws, regulations, and internal policies to ensure compliance and mitigate the risk of non-compliance.",
               },
               {
                 title: "Risk Identification:",
                 description:
                   "We identify potential risks associated with transactions, such as fraud, errors, and inefficiencies, and provide recommendations for mitigation.",
               },
               {
                 title: "Process Improvement:",
                 description:
                   "We evaluate transaction processes and controls to identify areas for improvement and recommend enhancements to streamline operations and reduce costs.",
               },
               {
                 title: "Documentation Analysis:",
                 description:
                   "We review supporting documentation, such as invoices, receipts, and contracts, to ensure proper documentation and record-keeping practices.",
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
            <div
              key={index}
              className="border border-[#d6e4ec] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
              >
                {item.question}
                <span className="text-xl">
                  {openIndex === index ? "▲" : "▼"}
                </span>
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

export default TransactionAudit;
