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

const AmlHealthCheck = () => {
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
      question: "What is an AML/CFT Health Check?",
      answer:
        "An AML/CFT Health Check is a diagnostic review to assess an organization’s current AML compliance framework and identify any gaps, risks, or areas of non-compliance.",
    },
    {
      question: "Who should conduct an AML Health Check?",
      answer:
        "Entities like Financial Institutions (FIs), DNFBPs, and VASPs operating in the UAE should periodically conduct AML Health Checks to ensure they comply with applicable AML laws.",
    },
    {
      question: "How often should AML Health Checks be performed?",
      answer:
        "It's recommended to perform a Health Check annually or whenever there's a significant change in business operations, regulatory changes, or internal processes.",
    },
    {
      question: "What are the benefits of AML/CFT Health Check services?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Identification of compliance gaps and risk areas</li>
          <li>Assessment of AML/CFT framework effectiveness</li>
          <li>Regulatory preparedness and internal improvement</li>
          <li>Expert guidance for implementing AML best practices</li>
        </ul>
      ),
    },
    {
      question: "What documents are reviewed during the AML Health Check?",
      answer:
        "We review AML/CFT policies, BRA/EWRA reports, STR/SAR logs, KYC/CDD records, internal training logs, and reports from prior independent audits.",
    },
  ];

  return (
    <div key={replayKey} className="bg-white">
      {/* Banner — PURE ZOOM ONLY */}
      <div className="w-full h-[50vh] overflow-hidden">
        <motion.img
          src="/1HEALTHCHECK.avif"
          alt="AML/CFT Health Check Banner"
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
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 mt-5 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
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
            className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4"
            variants={slideLtoR}
          >
            AML/CFT HEALTH CHECK
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              The AML/CFT Health check will help you to understand where your entity stands in terms of applicable AML/CFT guidelines. This quick and easy solution will help your business to know the areas where immediate attention and improvements are required.
            </motion.p>
            <motion.p variants={slideLtoR}>
              We work with FIs, DNFBPs, and VASPs in UAE to understand the current compliance culture and assist them in implementing the proportionate AML compliance framework to mitigate the risks of financial crimes.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our AML Health Check service involves a detailed analysis of the reporting entity’s approach to AML compliance and risk management.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Work Methodology — alternating slide cards with stagger */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            AML/CFT Health Check: Work Methodology
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
            "Kick-off meeting to understand the business, regulatory environment, compliance culture, scope of work, and approach and focus of the AML/CFT Health Check.",
            "Meeting with the AML Compliance Officer to understand the overall compliance framework implemented by the company.",
            "A review of Business Risk Assessment (BRA)/Enterprise Wide Risk Assessment (EWRA).",
            "A review of independent AML auditor’s report.",
            "A review of AML/CFT policies, procedures, and controls.",
            "A review of KYC, Screening, and Risk Assessment methodologies adopted by the entity.",
            "A review of KYC, Screening, and Risk Assessment records maintained by the company.",
            "A review of SAR/STR, HRC, HRCA, DPMSR, REAR, FFR, and PNMR records maintained by the company.",
            "Presentation of the findings to the top management.",
            "A formal AML/CFT Health Check Report detailing the information obtained, the current compliance culture, regulatory requirements, gaps identified, and suggestions for the improvement.",
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

      {/* FAQ — fade up + accordion with AnimatePresence */}
      <motion.h2
        className="text-4xl font-semibold text-center text-[#0a2d45] mb-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
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
                  <div
                    id={`faq-${index}`}
                    className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base"
                  >
                    {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
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

export default AmlHealthCheck;
