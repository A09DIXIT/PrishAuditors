import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

/* ===== Shared easing & variants (consistent across pages) ===== */
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

/* Replay intro when user scrolls back to the very top */
const TOP_REPLAY_THRESHOLD = 12;
const AWAY_THRESHOLD = 160;

export default function VAT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // soft remount key for replay-on-top
  const [replayKey, setReplayKey] = useState(0);
  const wasAwayRef = useRef(false);

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
          Firstly, VAT (Value Added Tax) is a consumption tax, which means that it is ultimately paid by the end consumer.
          Although VAT is charged at each step of the ‘supply chain,’ it is the end user who bears the cost of Value Added Tax.
          <br />
          VAT is collected by the businesses and then they pay it forward to the government. In case a business has paid more
          tax to its suppliers than it has received, it can get a refund from the government. Ultimately, the tax receipts to
          government show ‘value add’ throughout the supply chain.
        </>
      ),
    },
    {
      question: "What is UAE VAT Registration?",
      answer:
        "By VAT Registration, we mean to register the company with the government for submitting Value Added Tax. Upon successful registration, the Federal Tax Authority (FTA) issues a unique VAT identification to the company.",
    },
    {
      question: "What is the difference between VAT and Sales Tax?",
      answer: (
        <>
          VAT and sales tax are both consumption taxes; both are charged to the end consumer. However, there are a few differences:
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Sales tax is generally imposed on transactions involving goods, while VAT applies to both goods and services.</li>
            <li>Sales tax is usually imposed only on the final sale to the end consumer, while VAT is charged at each step of the supply chain.</li>
          </ul>
          In VAT systems, businesses serve as tax collectors on behalf of the government, which helps reduce tax evasion and misreporting.
        </>
      ),
    },
    {
      question: "Which companies are required to register for VAT in the UAE?",
      answer: (
        <>
          Businesses having taxable imports and supplies that exceed AED 375,000 must register for VAT. Businesses exceeding AED 187,500
          can register voluntarily.
          <br />
          If a company fails to register for VAT (when required), it may be liable for penalties and legal consequences.
        </>
      ),
    },
    {
      question: "How much VAT is charged in the UAE?",
      answer:
        "The standard VAT rate is 5% in the UAE. Certain sectors are exempt from VAT, and some supplies are zero-rated (0%).",
    },
    {
      question: "Which sectors are exempt from VAT?",
      answer: (
        <div className="space-y-2">
          <p>The following categories of supplies (within the UAE) are generally exempt from VAT:</p>
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
          <p>If you trade in zero-rated supplies, you will be charged 0% VAT. These supplies must still be reported properly in your VAT returns:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>International transportation and related supplies</li>
            <li>Supplies of certain sea, air, and land means of transportation (e.g., aircraft and ships)</li>
            <li>Investment-grade precious metals (e.g., gold, silver of 99% purity)</li>
            <li>Newly constructed residential properties supplied for the first time within three years of construction</li>
            <li>Certain education services and related goods/services</li>
            <li>Certain healthcare services and related goods/services</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How to register for VAT in UAE?",
      answer:
        "Submit an application with required documents to the FTA. Upon successful submission, the FTA issues a VAT Registration Certificate, downloadable from the applicant’s account.",
    },
    {
      question: "What documents are required for VAT registration in the UAE?",
      answer: (
        <div className="space-y-2">
          <p>Typical documents include (may vary by jurisdiction or activity):</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Passport copies and Emirates IDs of owners/partners (as per the license)</li>
            <li>Trade/Commercial License</li>
            <li>Company address and branch details (if any)</li>
            <li>Memorandum of Association (MOA)</li>
            <li>Bank account details with IBAN letter</li>
            <li>Authorized signatory contact details (email and phone)</li>
            <li>Expected turnover/revenue and taxable expenses for the next 30 days</li>
            <li>Turnover declaration (stamped and signed)</li>
            <li>Customs code with copy of Dubai Customs letter (if applicable)</li>
            <li>GCC export/import details (if applicable)</li>
            <li>Preference for or against Tax Group registration</li>
          </ul>
          <p>Additional documents may be required depending on business activity.</p>
        </div>
      ),
    },
  ];

  return (
    <section key={replayKey} className="w-full">
      {/* Banner — PURE ZOOM ONLY */}
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

      {/* Intro — immediate + replay on top */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 mb-10 sm:px-6 lg:px-8 rounded-lg shadow-md"
          variants={container}
          initial="hidden"
          animate="show"
          viewport={{ once: false }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
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
              Assisting businesses in the UAE with the VAT registration process, providing support and guidance on compliance
              requirements such as filing VAT returns, maintaining VAT records, and implementing VAT accounting systems. We also
              provide VAT Advisory services for the application of VAT to specific transactions, products, and services, VAT
              planning, and optimization.
            </motion.p>
            <motion.p variants={slideLtoR}>
              UAE VAT services encompass a range of activities aimed at helping businesses understand, implement, and manage VAT
              compliance requirements by the regulations set by the Federal Tax Authority (FTA) of the UAE.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our experienced team provides expert guidance and support to ensure compliance with VAT regulations, optimize tax
              efficiency, and mitigate risks associated with VAT implementation and reporting.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose PRISH — alternating slides with container/stagger */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
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
                "We assist businesses with VAT registration, ensuring they meet all requirements and deadlines set by the FTA.",
            },
            {
              title: "VAT Advisory",
              description:
                "Guidance on VAT compliance, supply classification, VAT treatment of transactions, and implications for business operations.",
            },
            {
              title: "VAT Compliance",
              description:
                "We help prepare and submit accurate VAT returns, maintain proper records, and meet filing deadlines to avoid penalties.",
            },
            {
              title: "VAT Representation",
              description:
                "We liaise with the FTA on your behalf during tax audits, assessments, and disputes.",
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

      {/* FAQ — container + fadeUp + AnimatePresence (height 0⇄auto, easeInOut, overflow-hidden) */}
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
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                    style={{ willChange: "height, opacity" }}
                  >
                    <div
                      id={`faq-${index}`}
                      className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base"
                    >
                      {Array.isArray(item.answer) ? (
                        <ul className="list-disc pl-6 space-y-2">
                          {item.answer.map((line, idx) => (
                            <li key={idx}>{line}</li>
                          ))}
                        </ul>
                      ) : typeof item.answer === "string" ? (
                        <p>{item.answer}</p>
                      ) : (
                        item.answer
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
        viewport={{ once: true, amount: 0.25 }}
        style={{ willChange: "transform, opacity" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Send a Query</h2>
        <SendQueryForm />
      </motion.div>

      {/* Back Button */}
      <div className="mt-18 mb-10 text-center">
        <Link
          to="/services/taxation"
          className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to TAXATION
        </Link>
      </div>
    </section>
  );
}
