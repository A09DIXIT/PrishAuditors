import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

/* ===== Shared easing & variants ===== */
const easeOutExpo = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

const container = {
  hidden: { opacity: 1 },
  show:   { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const slideLtoR = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

const slideRtoL = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

const TOP_REPLAY_THRESHOLD = 12;
const AWAY_THRESHOLD = 160;

const TransactionAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // Replay all animations when the user returns to the very top
  const [replayKey, setReplayKey] = useState(0);
  const wasAwayRef = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (y > AWAY_THRESHOLD) wasAwayRef.current = true;
      if (y <= TOP_REPLAY_THRESHOLD && wasAwayRef.current) {
        wasAwayRef.current = false;
        setReplayKey((k) => k + 1); // soft remount -> reset animations
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <p>PRISH Consultancy offers comprehensive Transaction Audit services designed to help businesses:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ensure the accuracy, compliance, and efficiency of financial transactions.</li>
            <li>Identify and mitigate risks associated with financial activities.</li>
            <li>Enhance internal controls and process efficiency.</li>
            <li>Maintain stakeholder trust and confidence.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div key={replayKey} className="bg-white">
      {/* Banner — PURE ZOOM ONLY (no left/right movement) */}
      <div className="w-full h-[50vh] overflow-hidden">
        <motion.img
          src="/1TransactionAudit.webp"
          alt="Transaction Audit Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Intro Section — heading L→R, text alternates R→L then L→R then R→L */}
      <section className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
        <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 mt-10 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
            variants={container}
            initial="hidden"
            animate="show" /* plays immediately at top & on top return */
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.4 },
            }}
          >
            <motion.h1
              className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4"
              variants={slideLtoR}
            >
              TRANSACTION AUDIT
            </motion.h1>

            <motion.div
              className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
              variants={container}
            >
              <motion.p variants={slideRtoL}>
                Transaction Audits will involve the examination and review of specific financial transactions within an organization to ensure accuracy, compliance, and integrity. In this, we will focus on verifying the completeness, validity, and appropriateness of individual transactions recorded in the organization's financial records. It aims to ensure the integrity of financial data and processes.
              </motion.p>
              <motion.p variants={slideLtoR}>
                Our experienced team conducts thorough audits to identify discrepancies, mitigate risks, and improve financial controls.
              </motion.p>
              <motion.p variants={slideRtoL}>
                Our approach is to take a systematic approach to Transaction Audits. Our process involves reviewing individual transactions, analysing patterns and trends, and identifying areas for improvement. We focus on enhancing financial controls, reducing risks, and optimizing processes to add value to your organization.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose PRISH — text slides only; retriggers on scroll */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h3
            className="text-3xl font-semibold text-[#163c4f] mb-6 text-center"
            variants={fadeUp}
          >
            Why Choose PRISH?
          </motion.h3>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={container}>
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
                  className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f] w-full"
                  variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
                  style={{ willChange: "transform, opacity" }}
                >
                  <h4 className="text-xl font-semibold text-[#163c4f] mb-2">
                    {item.title}
                  </h4>
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
          </motion.div>
        </motion.div>
      </div>

      {/* FAQ — bottom -> top reveal + accordion; retriggers on view */}
      <motion.h2
        className="text-4xl font-semibold text-center text-[#0a2d45] mb-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.div
        className="space-y-4 max-w-8xl mx-auto px-4 pb-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            className="border border-[#d6e4ec] rounded-lg overflow-hidden"
            variants={fadeUp}
          >
            <button
              onClick={() => toggleFAQ(index)}
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
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Query Form — bottom -> top (re-triggers) */}
      <motion.div
        className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        style={{ willChange: "transform, opacity" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Send a Query</h2>
        <SendQueryForm />
      </motion.div>
    </div>
  );
};

export default TransactionAudit;
