import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "./SendQueryForm/SendQueryForm";

/* ===== Shared easing & variants ===== */
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

const TOP_REPLAY_THRESHOLD = 12;
const AWAY_THRESHOLD = 160;

const InventoryAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // Replay all animations whenever user returns to the very top
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
        setReplayKey((k) => k + 1);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const faqItems = [
    { question: "What is an inventory audit and verification?", answer: "An inventory audit and verification examine and assess a company's physical inventory and related accounting records to ensure accuracy, completeness, and reliability." },
    { question: "Why is inventory audit and verification necessary?", answer: "Inventory audit and verification are necessary to ensure that the quantity, condition, and value of inventory items are accurately recorded and reported in the financial statements. It helps prevent errors, fraud, and discrepancies in inventory management." },
    { question: "What are the key objectives of inventory audit and verification?", answer: "The main objectives of inventory audit and verification include verifying the existence and condition of inventory items, ensuring accurate valuation of inventory, identifying discrepancies or errors, and improving inventory management practices." },
    { question: "How often should inventory audit and verification be conducted?", answer: "The frequency of inventory audits and verification depends on factors such as the industry, the business size, and the risk of inventory-related issues. Typically, it is conducted annually or quarterly." },
    { question: "What industries can benefit from inventory audit and verification services?", answer: "Inventory audit and verification services are beneficial to businesses across various industries including retail, manufacturing, distribution, wholesale, and logistics." },
    { question: "How does inventory audit and verification differ from regular audits?", answer: "While regular audits focus on verifying financial statements for accuracy and compliance, inventory audits and verification specifically focus on the accuracy and reliability of inventory records, physical counts, and valuation methods." },
    { question: "What are some common methods used in inventory audit and verification?", answer: "Common methods used in inventory audit and verification include physical inventory counts, examination of supporting documentation such as purchase orders and receiving reports, review of inventory control procedures, and testing of inventory valuation methods." },
    { question: "What are the benefits of inventory audit and verification?", answer: ["Accurate Financial Reporting: Ensures accurate reporting of inventory values in financial statements.","Risk Mitigation: Helps identify and mitigate risks of inventory shrinkage, obsolescence, and misstatement.","Compliance Assurance: Ensures compliance with regulatory requirements and accounting standards.","Operational Efficiency: Identifies opportunities for process improvement and efficiency gains in inventory management."] }
  ];

  return (
    // key causes a soft remount when user returns to top -> all animations reset
    <div key={replayKey} className="w-full bg-white text-[#163c4f]">
      {/* Banner — PURE ZOOM ONLY */}
      <div className="w-screen h-[50vh] overflow-hidden">
        <motion.img
          src="/inventory1.jpeg"
          alt="Inventory Audit and Verification Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Intro Section — plays immediately at top AND on top return */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          variants={container}
          initial="hidden"
          animate="show"                 // immediate on top
          viewport={{ once: false }}
          whileHover={{ scale: 1.02, boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)", transition: { duration: 0.4 } }}
        >
          <motion.h1
            className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4"
            variants={slideLtoR}
          >
            INVENTORY AUDIT & VERIFICATION
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p className="text-gray-800 text-lg leading-7 mb-6 text-justify" variants={slideRtoL}>
              Confirming the existence, completeness, and accuracy of inventory records and assessing the effectiveness of internal controls over the inventory management process and suggesting the process improvement measure. It ensures that the quantity, condition, and value of inventory items are accurately recorded and reported in the financial statements.
            </motion.p>
            <motion.p className="text-gray-800 text-lg leading-7 mb-6 text-justify" variants={slideLtoR}>
              Our experienced auditors utilize advanced techniques and methodologies to conduct thorough audits that provide valuable insights and recommendations for improving inventory management practices.
            </motion.p>
            <motion.p className="text-gray-800 text-lg leading-7 mb-10 text-justify" variants={slideRtoL}>
              Our approach is understanding the importance of maintaining accurate inventory records to support informed decision-making and financial reporting. We work closely with your team to develop a customized audit plan that addresses key areas of concern and identifies opportunities for improvement.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose Us — re-triggers on view; also replays on top via remount */}
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
              { title: "Physical Inventory Counts:", description: "We conduct physical inventory counts to verify the existence, condition, and location of inventory items." },
              { title: "Inventory Valuation: ", description: "Our auditors review inventory valuation methods to ensure compliance with accounting standards and assess the accuracy of inventory values." },
              { title: "Inventory Control Procedures:", description: "We evaluate inventory control procedures and internal controls to identify weaknesses and recommend enhancements to mitigate risks of errors, theft, or fraud." },
              { title: "Documentation Review:", description: "We review inventory documentation, including purchase orders, receiving reports, and sales records, to ensure completeness and accuracy." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
                variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
                style={{ willChange: "transform, opacity" }}
              >
                <h4 className="text-xl font-semibold text-[#163c4f] mb-2">{item.title}</h4>
                <p className="text-gray-700 text-base">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* FAQ — same pattern, re-triggers on view & top */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-8xl mx-auto px-4 pb-20"
      >
        <motion.h2 className="text-4xl font-semibold text-center text-[#0a2d45] mb-10" variants={fadeUp}>
          Frequently Asked Questions
        </motion.h2>

        <motion.div className="space-y-4" variants={container}>
          {faqItems.map((item, index) => (
            <motion.div key={index} className="border border-[#d6e4ec] rounded-lg overflow-hidden" variants={fadeUp}>
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
                      {Array.isArray(item.answer) ? (
                        <ul className="list-disc pl-6 space-y-2">
                          {item.answer.map((line, idx) => (
                            <li key={idx}>{line}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{item.answer}</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Query Form — bottom -> top */}
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

      {/* Back Button — bottom -> top */}
      <motion.div
        className="mt-18 mb-10 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Link
          to="/services/audit"
          className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to AUDITING AND ASSURANCE
        </Link>
      </motion.div>
    </div>
  );
};

export default InventoryAudit;
