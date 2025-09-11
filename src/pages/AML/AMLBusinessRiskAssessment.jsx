import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

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

const AMLBusinessRiskAssessment = () => {
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
      question: "What is AML Business Risk Assessment (BRA)?",
      answer:
        "AML Business Risk Assessment is a structured approach to identify and evaluate risks related to money laundering and terrorist financing based on a firm’s operations, customers, products, and geography.",
    },
    {
      question: "Is it mandatory for DNFBPs and FIs in UAE to perform BRA?",
      answer:
        "Yes, both Designated Non-Financial Businesses and Professions (DNFBPs) and Financial Institutions (FIs) in the UAE are required to carry out BRA as per the AML regulatory framework.",
    },
    {
      question: "What are other names for Business Risk Assessment?",
      answer:
        "It is also referred to as Enterprise Wide Risk Assessment (EWRA), Firm Wide Risk Assessment (FWRA), ML/TF Risk Assessment, or Business-Wide ML/TF Risk Assessment.",
    },
    {
      question: "What is the foundation of a Risk-Based Approach (RBA)?",
      answer:
        "The Business Risk Assessment is the foundation of RBA. It mandates that higher risks should be mitigated with stronger controls, making BRA a critical element in AML compliance.",
    },
    {
      question: "How often should BRA be conducted?",
      answer:
        "BRA should be reviewed regularly and updated at least annually, or when there are significant changes in the business structure, operations, or regulatory requirements.",
    },
  ];

  return (
    <div key={replayKey} className="bg-white">
      {/* Banner — PURE ZOOM ONLY */}
      <div className="w-full h-[50vh] overflow-hidden">
        <motion.img
          src="/1AMLBusinessRiskAssessment.jpg"
          alt="AML Business Risk Assessment"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Intro — immediate + replay on top */}
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
            className="text-black text-4xl font-semibold text-center mb-10"
            variants={slideLtoR}
          >
            AML BUSINESS RISK ASSESSMENT
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              Designated Non-Financial Businesses and Professions (DNFBPs) and Financial Institutions (FIs) in UAE are required to carry out Anti-Money Laundering (AML) Business Risk Assessment (BRA). It is also referred to as EWRA, FWRA, or ML/TF Risk Assessment.
            </motion.p>
            <motion.p variants={slideLtoR}>
              BRA is the pillar of the Risk-Based Approach (RBA). AML policies, procedures, and controls must align with the results of the Business Risk Assessment.
            </motion.p>
            <motion.p variants={slideRtoL}>
              A Business Risk Assessment conducted using reliable qualitative and quantitative data ensures that AML risks are kept within the organization’s risk appetite.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Methodology Section — alternating slide cards */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            AML Business Risk Assessment Methodology
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
            "We refer to the UAE National Risk Assessment (NRA) issued by NAMLCFTC.",
            "We analyze FATF, MENAFATF, and FSRB findings.",
            "We consider the nature and size of your business operations.",
            "We evaluate the input from your AML Compliance Officer.",
            "We identify and score AML risk factors based on likelihood and impact.",
            "We determine key areas to prioritize for AML/CFT controls and policies.",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
              variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
              style={{ willChange: "transform, opacity" }}
            >
              <p className="text-gray-700 text-base">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Risk Assessment Process Section */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-[#163c4f] mb-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          AML Business Risk Assessment Process
        </motion.h3>

        <motion.p
          className="text-gray-800 text-lg text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          The risk assessment process is continuous and involves identifying risk areas, analyzing their impact, evaluating control effectiveness, and aligning the AML framework accordingly.
        </motion.p>
      </div>

      {/* FAQ Section — fade up + accordion with AnimatePresence */}
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
                      {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
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
        className="mb-10 max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        style={{ willChange: "transform, opacity" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-[#0d3c58]">
          Send a Query
        </h2>
        <SendQueryForm />
      </motion.div>
    </div>
  );
};

export default AMLBusinessRiskAssessment;
