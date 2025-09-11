import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

/* ===== Shared easing & variants (same across pages) ===== */
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

const faqItems = [
  {
    question:
      "What is a RERA Audit, and why is it important for real estate businesses in the UAE?",
    answer:
      "A RERA Audit is an examination of real estate transactions, financial records, and operational processes to ensure compliance with regulations set forth by the Real Estate Regulatory Authority (RERA) in the UAE. It is essential for real estate businesses to maintain transparency, mitigate risks, and comply with regulatory requirements to avoid penalties and legal issues.",
  },
  {
    question: "Who needs to conduct a RERA Audit in the UAE?",
    answer:
      "Real estate developers, brokers, investors, and property management firms in the UAE are required to conduct RERA Audits to ensure compliance with RERA regulations.",
  },
  {
    question: "What are the key areas covered in a RERA Audit in the UAE?",
    answer:
      "A RERA Audit in the UAE typically covers regulatory compliance, financial transparency, project documentation verification, operational process evaluation, and risk assessment.",
  },
  {
    question: "How often should RERA Audits be conducted in the UAE?",
    answer:
      "The frequency of RERA Audits in the UAE depends on various factors such as the size of the real estate project, the scope of operations, and regulatory requirements. However, it is advisable for real estate businesses to conduct RERA Audits regularly to maintain compliance and transparency.",
  },
  {
    question: "What are the benefits of conducting a RERA Audit in the UAE?",
    answer: (
      <div className="space-y-2">
        <p><strong>Compliance Assurance:</strong> RERA Audits help real estate businesses ensure compliance with regulatory requirements, reducing the risk of penalties and legal issues.</p>
        <p><strong>Accuracy and Transparency:</strong> Audits provide assurance regarding the accuracy and transparency of real estate transactions, enhancing stakeholders' confidence.</p>
        <p><strong>Financial Transparency:</strong> Audits promote financial transparency and accountability by ensuring accurate reporting and management of funds in compliance with RERA requirements.</p>
        <p><strong>Operational Efficiency:</strong> Audits help real estate businesses streamline operations, improve internal controls, and enhance overall efficiency.</p>
        <p><strong>Stakeholder Confidence:</strong> Compliance with RERA regulations enhances the confidence and trust of investors, buyers, and other stakeholders in the UAE real estate market.</p>
      </div>
    ),
  },
  {
    question: "How long does a RERA Audit take in the UAE?",
    answer:
      "The duration of a RERA Audit in the UAE depends on the size and complexity of the real estate project, as well as the scope of the audit.",
  },
];

const whyChoose = [
  {
    title: "Regulatory Compliance Assessment",
    description:
      "We assess the compliance of real estate transactions, contracts, and operations with RERA regulations, including registration, escrow account management, project approvals, and sales agreements.",
  },
  {
    title: "Financial Transparency Review",
    description:
      "We examine financial records, including income statements, balance sheets, and cash flow statements, to ensure transparency and accuracy in financial reporting.",
  },
  {
    title: "Project Documentation Verification",
    description:
      "We review project documentation, including contracts, permits, licenses, and approvals, to ensure completeness and compliance with RERA requirements.",
  },
  {
    title: "Operational Process Evaluation",
    description:
      "We evaluate operational processes, such as project management, sales and marketing practices, customer service, and dispute resolution mechanisms, to identify areas for improvement and compliance enhancement.",
  },
  {
    title: "Risk Assessment and Mitigation",
    description:
      "We assess potential risks associated with RERA non-compliance and provide recommendations to mitigate them effectively.",
  },
];

const ReraAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  // Replay animations when returning to the very top
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
        setReplayKey((k) => k + 1); // soft remount to reset animations
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section key={replayKey} className="bg-white w-full">
      {/* Banner — PURE ZOOM ONLY (no left/right movement) */}
      <div className="w-screen h-[50vh] overflow-hidden">
        <motion.img
          src="/1RERA2.avif"
          alt="RERA Audit Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Intro — heading L→R, paragraphs alternate R→L / L→R, list follows */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          variants={container}
          initial="hidden"
          animate="show" /* plays immediately at top & on top return */
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
            transition: { duration: 4 },
          }}
        >
          <motion.h1
            className="text-black text-4xl mb-10 font-semibold text-center"
            variants={slideLtoR}
          >
            RERA AUDIT
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto text-justify"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              Real Estate Regulatory Authority (RERA) is responsible for regulating the real estate sector in the UAE, especially in Dubai. RERA audits are conducted to ensure compliance with regulations, transparency, and fairness in real estate transactions by promoting confidence and trust among investors, buyers, and other stakeholders.
            </motion.p>
            <motion.p variants={slideLtoR}>
              It examines and verifies real estate transactions, financial records, and operational processes to ensure compliance with the regulations set forth by the Real Estate Regulatory Authority.Our experienced team conducts thorough audits to assess regulatory compliance, financial transparency, and operational efficiency.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our approach is to understand the complexities of RERA regulations and the importance of compliance for real estate businesses which is comprehensive, detail-oriented, and aimed at providing actionable insights to our clients.
            </motion.p>
            <motion.p variants={slideLtoR}>
              Our real estate developer and project services include the following:
            </motion.p>
        {/* Two-column bullet list (1 col on mobile, 2 cols on md+) */}
<motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
  variants={container}
>
  {/* Left column (slides R → L) */}
  <motion.ul className="list-disc pl-6 space-y-2" variants={slideRtoL}>
    <li>Accounting for management</li>
    <li>Ensure that all service entity criteria are met.</li>
    <li>Ensure that all applicable tax rules are followed.</li>
    <li>Ensure compliance with trust accounts.</li>
    <li>Conducting an audit of the ESCROW account</li>
    <li>Audit of the entire community</li>
  </motion.ul>

  {/* Right column (slides L → R) */}
  <motion.ul className="list-disc pl-6 space-y-2" variants={slideLtoR}>
    <li>Internal Controls</li>
    <li>Service fee audit</li>
    <li>Verification of unit balance</li>
    <li>Review of the Special Levy</li>
    <li>Budget audits for municipalities and organizations</li>
    <li>Mollak service</li>
  </motion.ul>
</motion.div>

          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose PRISH — alternating slides per card, keeps layout */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-center text-[#163c4f] mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          Why Choose PRISH?
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {whyChoose.map((item, idx, arr) => {
            const isLastOdd = arr.length % 2 !== 0 && idx === arr.length - 1;

            const card = (
              <motion.div
                key={idx}
                className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f] w-full"
                variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.35 }}
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
        </div>
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
                  transition={{ duration: 2, ease: "easeInOut" }}
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

      {/* Query Form — bottom -> top (re-triggers on scroll; replays on top) */}
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

      {/* Back Button */}
      <div className="mt-16 mb-10 text-center">
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

export default ReraAudit;
