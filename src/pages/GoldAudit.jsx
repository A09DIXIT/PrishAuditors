import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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

const GoldAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // Replay animations when user returns to the very top
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

  const faqItems  = [
    {
      question: "What is a gold audit, and why is it necessary for businesses?",
      answer:
        "A gold audit is the process of examining and verifying gold-related transactions, inventory, and financial records to ensure compliance, accuracy, and transparency in gold trading activities. Businesses must maintain integrity, mitigate risks, and comply with regulatory requirements.",
    },
    {
      question: "What types of businesses can benefit from gold audit services?",
      answer:
        "Gold audit services are beneficial for a wide range of businesses involved in the gold industry, including jewelry manufacturers, bullion dealers, refineries, and mining companies.",
    },
    {
      question: "What does a gold audit typically involve?",
      answer:
        "A gold audit typically involves transaction verification, inventory inspection, compliance review, risk assessment, and fraud detection to ensure the accuracy, transparency, and compliance of gold trading activities.",
    },
    {
      question: "How often should businesses conduct gold audits?",
      answer:
        "The frequency of gold audits depends on the size and nature of the business, as well as regulatory requirements. However, it is advisable for businesses to conduct regular audits to maintain compliance and ensure the integrity of their gold trading activities.",
    },
    {
      question: "What are the benefits of conducting a gold audit?",
      answer: (
        <div className="space-y-3">
          <p><strong>Compliance Assurance:</strong> Gold audits help businesses ensure compliance with regulatory requirements, reducing the risk of penalties and legal issues.</p>
          <p><strong>Accuracy and Transparency:</strong> Audits provide assurance regarding the accuracy and transparency of gold transactions, enhancing stakeholders' confidence.</p>
          <p><strong>Risk Mitigation:</strong> By identifying and addressing potential risks, audits help businesses mitigate financial and reputational risks associated with gold trading.</p>
          <p><strong>Operational Efficiency:</strong> Audits streamline gold trading operations, improve internal controls, and enhance overall efficiency.</p>
        </div>
      ),
    },
    {
      question: "How can businesses prepare for a gold audit?",
      answer:
        "Businesses can prepare for a gold audit by maintaining accurate records, implementing robust internal controls, and ensuring compliance with regulatory requirements.",
    },
  ];

  return (
    <div key={replayKey} className="bg-white">
      {/* Banner — PURE ZOOM ONLY (no left/right movement) */}
      <div className="w-full h-[50vh] overflow-hidden">
        <motion.img
          src="/12gold-audit.png"
          alt="Gold Audit Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Intro Section — plays immediately at top & on top return */}
      <section className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
        <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
            variants={container}
            initial="hidden"
            animate="show"
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
              GOLD AUDIT
            </motion.h1>

            {/* Alternate text R→L then L→R */}
            <motion.div
              className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
              variants={container}
            >
              <motion.p variants={slideRtoL}>
                "Gold Audit" typically refers to the process of auditing gold and jewelry traders or dealers to ensure compliance with relevant regulations and standards due to the significant role of the gold and jewelry industry in the country's economy.
              </motion.p>
              <motion.p variants={slideLtoR}>
                Our experienced team conducts thorough audits to ensure compliance with regulations, reporting accuracy, and gold transaction transparency.
              </motion.p>
              <motion.p variants={slideRtoL}>
                Our approach is to understand the importance of accuracy and integrity in gold transactions. Our gold audit services are designed to provide businesses with assurance regarding the authenticity, quality, and compliance of their gold-related activities.
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
                title: "Transaction Verification",
                description:
                  "We verify gold transactions to ensure accuracy, completeness, and compliance with regulatory requirements.",
              },
              {
                title: "Inventory Inspection",
                description:
                  "We conduct physical inspections of gold inventory to verify quantities, qualities, and valuations.",
              },
              {
                title: "Compliance Review",
                description:
                  "We review gold-related documentation and records to ensure compliance with regulatory standards, including AML and KYC regulations.",
              },
              {
                title: "Risk Assessment",
                description:
                  "We assess potential risks associated with gold transactions and provide recommendations to mitigate them effectively.",
              },
              {
                title: "Fraud Detection",
                description:
                  "We use advanced techniques to detect and prevent fraud in gold trading activities, safeguarding our clients' interests.",
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
        className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl mb-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        style={{ willChange: "transform, opacity" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Send a Query</h2>
        <SendQueryForm />
      </motion.div>

      {/* Back Button — bottom -> top (re-triggers) */}
      <motion.div
        className="mt-18 mb-10 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Link
          to="/services/special-audit"
          className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to SPECIAL AUDITS
        </Link>
      </motion.div>
    </div>
  );
};

export default GoldAudit;
