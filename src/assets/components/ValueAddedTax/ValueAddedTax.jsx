import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

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

export default function VAT() {
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
      question: "What is VAT?",
      answer: (
        <>
          Firstly, VAT (Value Added Tax) is a consumption tax, which means it is ultimately paid by the end consumer.
          Although VAT is charged at each step of the supply chain, it is the end user who bears the cost of VAT.
          <br />
          VAT is collected by businesses and then remitted to the government. If a business has paid more tax to its
          suppliers than it has received, it can obtain a refund from the government. Ultimately, tax receipts reflect
          the “value add” throughout the supply chain.
        </>
      ),
    },
    {
      question: "What is UAE VAT Registration?",
      answer:
        "VAT Registration means registering the company with the government for VAT filings. Upon successful registration, the Federal Tax Authority (FTA) issues a unique VAT identification to the company.",
    },
    {
      question: "What is the difference between VAT and Sales Tax?",
      answer: (
        <>
          VAT and sales tax are both consumption taxes charged to the end consumer. Key differences:
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Sales tax commonly applies to goods only, while VAT applies to goods and services.</li>
            <li>Sales tax is usually charged only on the final sale; VAT is levied at each step of the supply chain.</li>
          </ul>
          In VAT systems, businesses act as tax collectors for the government, which reduces tax evasion and misreporting.
        </>
      ),
    },
    {
      question: "Which companies are required to register for VAT in the UAE?",
      answer: (
        <>
          Businesses with taxable supplies and imports exceeding AED 375,000 must register for VAT.
          Those exceeding AED 187,500 may register voluntarily.
          <br />
          Failure to register (when required) can lead to penalties and legal consequences.
        </>
      ),
    },
    {
      question: "How much VAT is charged in the UAE?",
      answer:
        "The standard VAT rate is 5% in the UAE. Some sectors are exempt from VAT, and some supplies are zero-rated at 0%.",
    },
    {
      question: "Which sectors are exempt from VAT?",
      answer: (
        <div className="space-y-2">
          <p>The following UAE supplies are generally exempt from VAT:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Financial services</li>
            <li>Residential properties</li>
            <li>Bare land</li>
            <li>Local passenger transport</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Which are zero-rated sectors?",
      answer: (
        <div className="space-y-2">
          <p>These supplies are typically zero-rated (0%) but must still be reported in VAT returns:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>International transportation and related supplies</li>
            <li>Supplies of certain sea, air, and land means of transportation (e.g., aircraft & ships)</li>
            <li>Investment-grade precious metals (e.g., gold/silver of 99% purity)</li>
            <li>Newly constructed residential properties supplied for the first time within three years</li>
            <li>Certain education services and related goods/services</li>
            <li>Certain healthcare services and related goods/services</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How to register for VAT in UAE?",
      answer:
        "Submit an application with the required documents to the FTA. After approval, the FTA issues a VAT Registration Certificate (downloadable from the applicant’s account).",
    },
    {
      question: "What are the required documents for VAT registration in the UAE?",
      answer: (
        <div className="space-y-2">
          <p>Commonly required documents (may vary by activity/jurisdiction):</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Passport copies & Emirates IDs of owners/partners (as per license)</li>
            <li>Trade/Commercial License</li>
            <li>Company address & branch details (if any)</li>
            <li>Memorandum of Association (MOA)</li>
            <li>Bank account details with IBAN letter</li>
            <li>Authorized signatory contact details (email & phone)</li>
            <li>Expected turnover/revenue & taxable expenses for the next 30 days</li>
            <li>Turnover declaration (stamped & signed)</li>
            <li>Customs code with supporting letter (if applicable)</li>
            <li>GCC export/import details (if applicable)</li>
            <li>Preference for/against Tax Group registration</li>
          </ul>
          <p>Additional documents may be requested depending on your business activity.</p>
        </div>
      ),
    },
  ];

  return (
    <section key={replayKey} className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
      {/* Banner — PURE ZOOM ONLY (no left/right movement) */}
      <div className="w-screen h-[50vh] overflow-hidden">
        <motion.img
          src="/VAT1.jpg"
          alt="VAT Services Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Intro — plays immediately on load and when returning to top */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 mb-10 sm:px-6 lg:px-8 rounded-lg shadow-md"
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
            VALUE ADDED TAX (VAT)
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              Assisting businesses in the UAE with VAT registration, filing VAT returns, maintaining VAT records, and
              implementing VAT accounting systems. We also provide VAT advisory on specific transactions, products, and
              services, plus VAT planning and optimization.
            </motion.p>
            <motion.p variants={slideLtoR}>
              UAE VAT services help businesses understand, implement, and manage VAT compliance in line with the Federal
              Tax Authority (FTA) regulations.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our team provides guidance to ensure compliance with VAT regulations, optimize tax efficiency, and mitigate
              risks associated with VAT implementation and reporting.
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
              title: "VAT Registration",
              description:
                "We assist with VAT registration, ensuring all FTA requirements and deadlines are met.",
            },
            {
              title: "VAT Advisory",
              description:
                "Guidance on VAT compliance, supply classification, and VAT treatment of transactions.",
            },
            {
              title: "VAT Compliance",
              description:
                "Preparation and submission of accurate VAT returns, record-keeping, and on-time filings.",
            },
            {
              title: "VAT Representation",
              description:
                "We liaise with the FTA during audits, assessments, and disputes on your behalf.",
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

      {/* FAQ — fade up + accordion (AnimatePresence with height auto) */}
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
                    <div
                      id={`faq-${index}`}
                      className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base"
                    >
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
          to="/services/taxation"
          className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to TAXATION
        </Link>
      </motion.div>
    </section>
  );
}
