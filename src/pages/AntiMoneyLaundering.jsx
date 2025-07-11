import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

export default function InternalAudit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Money Laundering?",
      answer:
        "Money laundering is defined as any financial or banking transaction aimed at concealing or changing the source of illegally obtained funds...",
    },
    {
      question: "What is Terrorist Financing?",
      answer:
        "Terrorist Financing (TF) is where funds are generated through legitimate or illegal activities and used to support terrorist causes...",
    },
    {
      question: "What is the difference between Money Laundering and Terrorist Financing?",
      answer:
        "With TF, the source of funds can be legal. ML is focused on hiding illegal origins of money. Both aim to mask funding sources.",
    },
    {
      question: "What is Money Laundering and How Does It Work?",
      answer: (
        <>
          <p>Money laundering is the act of concealing the origin of illegally earned money.</p>
          <p><strong>Placement:</strong> Breaking money into smaller parts and depositing into financial institutions.</p>
          <p><strong>Layering:</strong> Moving money through several transactions to hide its origin.</p>
          <p><strong>Integration:</strong> Reintroducing the cleaned money into the economy through fake loans or companies.</p>
        </>
      ),
    },
    {
      question: "How to monitor money laundering?",
      answer:
        "By monitoring company data, screening PEPs/sanctions lists, and investigating stakeholder backgrounds.",
    },
    {
      question: "Who is required to comply with the AML/CFT Regulations?",
      answer: (
        <>
          <p>All UAE-based companies, especially:</p>
          <ul>
            <li>Financial institutions</li>
            <li>DNFBPs (Designated Non-Financial Businesses and Professions)</li>
          </ul>
        </>
      ),
    },
    {
      question: "What is Designated Non-Financial Businesses and Professions (DNFBPs)?",
      answer: (
        <>
          <p><strong>Brokers & Real Estate Agents</strong></p>
          <p><strong>Precious Stones & Metals Dealers</strong></p>
          <p><strong>Legal & Accounting Professionals</strong></p>
          <p><strong>Corporate Service Providers</strong></p>
        </>
      ),
    },
    {
      question: "What is the UAE Central Bank’s role in AML/CFT?",
      answer:
        "CBUAE has a dedicated AML/CFT department for enforcing compliance since August 2020.",
    },
    {
      question: "What is the Financial Action Task Force or FATF?",
      answer:
        "FATF sets global AML/CFT standards. It evaluates countries' legal systems and enforces compliance.",
    },
    {
      question: "What are the main regulations?",
      answer: (
        <ul>
          <li>Federal Decree-Law No. 20 of 2018</li>
          <li>Cabinet Decision No. 10 of 2019</li>
        </ul>
      ),
    },
    {
      question: "What am I required to do?",
      answer: (
        <ul>
          <li>Identify and verify customers</li>
          <li>Monitor transactions</li>
          <li>Report suspicious activities</li>
          <li>Train employees</li>
        </ul>
      ),
    },
    {
      question: "What is an Anti-Money Laundering Program?",
      answer: (
        <ul>
          <li>Internal policies</li>
          <li>Appointed compliance officer</li>
          <li>Training</li>
          <li>Audits</li>
        </ul>
      ),
    },
    {
      question: "What is the monetary limitation for cash transactions?",
      answer:
        "Any transaction ≥ AED 55,000 requires due diligence and must be reported under AML laws.",
    },
    {
      question: "Who is a Compliance Officer?",
      answer:
        "A designated AML expert within the organization responsible for compliance with AML/CFT laws.",
    },
    {
      question: "What is CDD?",
      answer:
        "Customer Due Diligence ensures you verify and monitor your clients to prevent financial crime.",
    },
    {
      question: "What are the Benefits of AML Compliance for Companies?",
      answer:
        "Legitimacy, customer trust, early risk detection, and regulatory protection.",
    },
    {
      question: "How Does AML Compliance Benefit Customers?",
      answer:
        "Increases trust and protects customer data and finances from fraud and misuse.",
    },
    {
      question: "What Happens if a Company Fails to Comply?",
      answer:
        "Penalties include up to 10 years in jail and fines ranging from AED 100,000 to AED 50 million.",
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
          src="/sefessdcd.jpg"
          alt="AML Compliance Banner"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Intro Section */}
      <div className="px-6 md:px-16 mt-10">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-semibold text-center text-[#0a2d45] mb-6">
            AML (ANTI-MONEY LAUNDERING)
          </h2>
          <p className="text-xl mb-4">
            AML compliance refers to the set of regulations, policies, and procedures that financial institutions and certain businesses must implement to prevent and detect money laundering.
          </p>
          <p className="text-xl mb-4">
            These rules in the UAE are governed by Federal Decree-Law No. 20 of 2018 and related Cabinet decisions.
          </p>
          <p className="text-xl">
            The goAML system from the UNODC helps financial intelligence units (FIUs) monitor compliance.
          </p>
        </motion.div>
      </div>

      {/* Why Choose PRISH */}
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
            { title: "AML Registration", description: "We help businesses register under AML regulations..." },
            { title: "AML Implementation", description: "We assist in setting up effective AML frameworks..." },
            { title: "AML SOPs", description: "We design custom SOPs for efficient AML practices." },
            { title: "Corporate AML Training", description: "We educate staff about AML laws and red flags." },
            { title: "Impact Assessment", description: "We analyze how AML affects your operations." },
            { title: "AML Auditing", description: "We perform internal audits to ensure compliance." },
            { title: "AML Survey & Reporting", description: "We create reports that demonstrate AML readiness." },
          ].map((item, idx, arr) => {
            const isLastOdd = arr.length % 2 !== 0 && idx === arr.length - 1;
            const card = (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
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
    </section>
  );
}
