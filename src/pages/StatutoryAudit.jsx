import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const faqItems = [
  { question: "What is a statutory audit?", answer: "A statutory audit is a legally mandated examination of a company's financial records, transactions, and statements to ensure accuracy, compliance with accounting standards, and adherence to regulatory requirements." },
  { question: "Who requires a statutory audit?", answer: "Statutory audits are typically required for public companies, large private companies, and certain non-profit organizations. The requirement may vary based on the jurisdiction and the company's size and nature of business." },
  { question: "What are the objectives of a statutory audit?", answer: "The main objectives of a statutory audit include verifying the accuracy and reliability of financial statements, ensuring compliance with applicable laws and regulations, and providing assurance to stakeholders about the company's financial health and performance." },
  { question: "How often does a company need to undergo a statutory audit?", answer: "The frequency of statutory audits varies depending on legal requirements and the company's size and type. In many jurisdictions, annual audits are required, but smaller businesses may undergo audits less frequently." },
  { question: "What is the role of the auditor in a statutory audit?", answer: "The auditor's role is to independently examine the company's financial records, transactions, and internal controls. They assess the reliability of financial reporting, identify any material misstatements or errors, and provide an opinion on the fairness and accuracy of the financial statements." },
  { question: "What are the benefits of a statutory audit for a company?", answer: "Statutory audits provide benefits such as improved credibility with stakeholders, identification of internal control weaknesses, compliance with legal requirements, enhanced transparency, and accountability." },
  { question: "How long does a statutory audit typically take?", answer: "The duration of a statutory audit depends on factors such as the size and complexity of the company, the quality of its financial records, and the scope of the audit. Generally, audits for smaller companies may take a few weeks, while audits for larger organizations may take several months." },
  { question: "What is the process of a statutory audit?", answer: "The process typically involves planning, risk assessment, testing of controls and transactions, substantive procedures, communication of findings, and issuing the audit report. The specific steps may vary depending on the auditor's approach and the company's circumstances." },
  { question: "What documents are required for a statutory audit?", answer: "Documents required for a statutory audit may include financial statements, bank statements, invoices, receipts, contracts, payroll records, tax returns, and any other relevant financial or accounting records." },
  { question: "Can a company change its auditor for statutory audits?", answer: "Yes, a company can change its auditor if necessary. However, the process may involve notifying relevant authorities and ensuring a smooth transition of audit responsibilities." }
];

// Easing & variants (shared)
const easeOutExpo = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } }
};

const container = {
  hidden: { opacity: 1 },
  show:   { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } }
};

const slideLtoR = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutExpo } }
};

const slideRtoL = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutExpo } }
};

// Replay thresholds
const TOP_REPLAY_THRESHOLD = 12;
const AWAY_THRESHOLD = 160;

const StatutoryAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Replay everything when returning to the very top
  const [replayKey, setReplayKey] = useState(0);
  const wasAwayRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (y > AWAY_THRESHOLD) wasAwayRef.current = true;
      if (y <= TOP_REPLAY_THRESHOLD && wasAwayRef.current) {
        wasAwayRef.current = false;
        setReplayKey((k) => k + 1); // soft remount
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section key={replayKey} className="bg-white w-full">
      {/* Banner — PURE ZOOM ONLY */}
      <div className="w-screen h-[50vh] overflow-hidden">
        <motion.img
          src="/Audit-Assurance.png"
          alt="Statutory Audit Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Intro Section — plays immediately at top */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          variants={container}
          initial="hidden"
          animate="show"                 // play on load at top
        >
          <motion.h1
            className="text-black text-4xl mb-10 font-semibold text-center"
            variants={slideLtoR}
          >
            STATUTORY AUDIT
          </motion.h1>

          {/* Alternate text L→R and R→L */}
          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              We will be performing a thorough examination of financial records and providing assurance on the accuracy and reliability of your company’s financial statements...
            </motion.p>
            <motion.p variants={slideLtoR}>
              Our team of experienced auditors provides comprehensive statutory audit
              services tailored to meet the specific needs of your business.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our approach to statutory audits goes beyond mere compliance. We delve
              deep into your financial records, processes, and controls...
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose Us (text slides only) */}
      <div className="max-w-6xl mt-16 mx-auto px-4 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}  // retrigger on scroll
        >
          <motion.h3
            className="text-3xl font-semibold text-center text-[#163c4f] mb-10"
            variants={fadeUp}
          >
            Why Choose PRISH?
          </motion.h3>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={container}>
            {[
              { title: "Experienced Professionals:", description: "Our team consists of highly skilled and experienced auditors..." },
              { title: "Tailored Solutions:",        description: "We understand that every business is unique..." },
              { title: "Efficiency and Timeliness:", description: "We strive to complete audits promptly without compromising on quality..." },
              { title: "Comprehensive Reporting:",   description: "Our audit reports are detailed, transparent, and easy to understand..." }
            ].map((itemData, idx) => (
              <motion.div
                key={idx}
                className="bg-white border-l-4 border-[#163c4f] shadow-md p-6 rounded-xl"
                variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
              >
                <h4 className="text-xl font-semibold text-[#163c4f] mb-2">
                  {itemData.title}
                </h4>
                <p className="text-gray-700 text-base">{itemData.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* FAQ — bottom -> top + accordion (re-triggers) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-8xl mx-auto px-4 pb-20"
      >
        <motion.h2
          className="text-4xl font-semibold text-center text-[#0a2d45] mb-10"
          variants={fadeUp}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div className="space-y-4" variants={container}>
          {faqItems.map((itemData, index) => (
            <motion.div
              key={index}
              className="border border-[#d6e4ec] rounded-lg overflow-hidden"
              variants={fadeUp}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
              >
                {itemData.question}
                <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base">
                      {itemData.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Send Query Form — bottom -> top (re-triggers) */}
      <div className="mb-16">
        <motion.div
          className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          style={{ willChange: "transform, opacity" }}
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
          className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to AUDITING AND ASSURANCE
        </Link>
      </div>
    </section>
  );
};

export default StatutoryAudit;
