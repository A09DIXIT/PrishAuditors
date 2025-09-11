import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

/* ===== Shared easing & variants (consistent across pages) ===== */
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

/* Replay intro when user scrolls back to the very top */
const TOP_REPLAY_THRESHOLD = 12;
const AWAY_THRESHOLD = 160;

export default function InternalAudit() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // soft remount key for replay-on-top
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
    {
      question: "What is an internal audit?",
      answer:
        "An internal audit is an independent, objective assurance and consulting activity designed to add value and improve an organization's operations. It helps organizations accomplish their objectives by evaluating and improving the effectiveness of risk management, control, and governance processes.",
    },
    {
      question: "Why is an internal audit necessary?",
      answer:
        "An internal audit is necessary to assure management and stakeholders that risks are being managed effectively, internal controls are adequate, and the organization is operating efficiently and effectively.",
    },
    {
      question: "How does internal audit differ from external audit?",
      answer:
        "Internal audit is conducted by employees or outsourced to a third-party firm hired by the organization. It focuses on evaluating internal controls and processes to identify areas for improvement. External audit, on the other hand, is conducted by independent auditors to express an opinion on the fairness and accuracy of the financial statements.",
    },
    {
      question: "What are the key objectives of internal audit?",
      answer:
        "The primary objectives of the internal audit include assessing the effectiveness of risk management, control, and governance processes, providing assurance to management and stakeholders, and identifying opportunities for improvement.",
    },
    {
      question: "What are the benefits of internal audit?",
      answer: (
        <>
          <p><strong>Risk Management:</strong> Identify and mitigate risks that could impact the achievement of organizational objectives.</p>
          <p><strong>Operational Efficiency:</strong> Streamline processes and procedures to improve efficiency and reduce costs.</p>
          <p><strong>Compliance Assurance:</strong> Ensure compliance with regulatory requirements and internal policies.</p>
          <p><strong>Strategic Insights:</strong> Provide valuable insights to support informed decision-making and strategic planning.</p>
        </>
      ),
    },
    {
      question: "How can internal audit help my organization?",
      answer:
        "Internal audit helps organizations by providing independent assurance that risks are being managed effectively, controls are in place and working as intended, and operations are efficient and effective. It also provides valuable insights and recommendations for improvement.",
    },
    {
      question: "How often should internal audit be conducted?",
      answer:
        "The frequency of internal audit depends on factors such as the size and complexity of the organization, the industry, and regulatory requirements. It is typically conducted annually or quarterly, but some organizations may choose to conduct audits more frequently.",
    },
    {
      question: "What areas does internal audit cover?",
      answer:
        "Internal audit covers a wide range of areas, including financial reporting, operational processes, compliance with laws and regulations, information technology, risk management, and governance.",
    },
    {
      question: "Can internal audit help with risk management?",
      answer:
        "Yes, internal audit plays a crucial role in risk management by identifying and assessing risks, evaluating the effectiveness of controls to mitigate those risks, and providing recommendations to strengthen controls and reduce risk exposure.",
    },
  ];

  return (
    <section key={replayKey} className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
      {/* Banner — PURE ZOOM ONLY (no left/right movement) */}
      <div className="w-screen h-[50vh] overflow-hidden">
        <motion.img
          src="/sefessdcd.jpg"
          alt="Internal Audit Banner"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Intro — plays immediately on load and when returning to top */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          variants={container}
          initial="hidden"
          animate="show"
          viewport={{ once: false }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.4 },
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.h1
            className="text-black text-4xl mb-10 font-semibold text-center"
            variants={slideLtoR}
          >
            INTERNAL AUDIT
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              Internal auditing is a vital function within organizations that helps to enhance governance, risk management, and control processes. Conducting an independent assessment, objective assurance, and consulting activity designed to add value and improve an organization's operational and financial controls as per the best industry practices.
            </motion.p>
            <motion.p variants={slideLtoR}>
              Our experienced team of internal auditors works closely with clients to assess internal controls, identify areas for improvement, and provide valuable insights to support informed decision-making.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our approach is to recognize that every organization is unique, with its own set of risks, challenges, and opportunities. Our approach to internal audit is tailored to meet the specific needs and objectives of each client. We focus on understanding your business, identifying key risks, and providing practical recommendations to enhance internal controls and processes.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose PRISH — alternating slide directions */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <h3 className="text-3xl font-semibold text-center text-[#163c4f] mb-10">
            Why Choose PRISH?
          </h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            {
              title: "Risk Assessment",
              description:
                "We conduct comprehensive risk assessments to identify and prioritize key risks facing your organization.",
            },
            {
              title: "Internal Control Evaluation",
              description:
                "Our auditors evaluate the design and effectiveness of internal controls to ensure they mitigate identified risks and support the achievement of organizational objectives.",
            },
            {
              title: "Process Improvement",
              description:
                "We identify opportunities for process improvement and efficiency gains to help optimize your organization's operations.",
            },
            {
              title: "Compliance Assurance",
              description:
                "Our internal audit services help ensure compliance with laws, regulations, and internal policies and procedures.",
            },
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
      </div>

      {/* FAQ — fade up + accordion */}
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
            <motion.div
              key={index}
              className="border border-[#d6e4ec] rounded-lg overflow-hidden"
              variants={fadeUp}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                {item.question}
                <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key={`faq-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div id={`faq-${index}`} className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base">
                      {item.answer}
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
        viewport={{ once: true, amount: 0.25 }}
        style={{ willChange: "transform, opacity" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Send a Query</h2>
        <SendQueryForm />
      </motion.div>

      {/* Back Button */}
      <motion.div
        className="mt-16 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Link
          to="/services/risk-assurance"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to Risk Assurance
        </Link>
      </motion.div>
    </section>
  );
}
