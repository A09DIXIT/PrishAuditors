import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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

const TransferPricing = () => {
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
      question: "What is transfer pricing?",
      answer:
        "Transfer pricing refers to the pricing of goods, services, and intangible assets transferred between related entities within a multinational corporation.",
    },
    {
      question: "Why is transfer pricing important?",
      answer:
        "Transfer pricing is important because it ensures that transactions between related parties are conducted at arm's length, as if they were between independent parties. This helps to prevent tax evasion, ensure fair taxation, and comply with regulations.",
    },
    {
      question: "What are the risks associated with transfer pricing?",
      answer:
        "The risks associated with transfer pricing include double taxation, penalties for non-compliance, reputational damage, and disputes with tax authorities.",
    },
    {
      question: "What is the arm's length principle?",
      answer:
        "The arm's length principle is the international standard for determining transfer prices, which requires that the price charged for a transaction between related parties be the same as it would be between unrelated parties in an open market.",
    },
    {
      question: "What documentation is required for transfer pricing compliance?",
      answer:
        "Documentation typically includes a master file, local file, and country-by-country report, detailing the company's transfer pricing policies, intercompany transactions, and related financial information.",
    },
    {
      question: "Are there any transfer pricing methods used for determining arm's length prices?",
      answer:
        "Yes, common transfer pricing methods include the comparable uncontrolled price (CUP) method, cost-plus method, resale price method, and transactional net margin method (TNMM), among others.",
    },
    {
      question: "What is the process for implementing a transfer pricing policy?",
      answer:
        "The process typically involves conducting a transfer pricing study to assess intercompany transactions, determining appropriate transfer pricing methods, documenting policies and procedures, and monitoring compliance.",
    },
    {
      question: "What are the benefits of implementing a transfer pricing policy?",
      answer:
        "Benefits include reducing the risk of penalties and assessments from tax authorities, optimizing the company's tax position, improving operational efficiency, and ensuring compliance with regulations.",
    },
    {
      question: "How often should transfer pricing policies be reviewed and updated?",
      answer:
        "Transfer pricing policies should be reviewed and updated regularly to reflect changes in the company's business operations, regulatory requirements, and market conditions.",
    },
  ];

  const services = [
    {
      title: "Transfer Pricing Documentation",
      description:
        "We prepare comprehensive transfer pricing documentation to support the arm's length nature of intercompany transactions, including master files, local files, and country-by-country reports.",
    },
    {
      title: "Transfer Pricing Policy Development",
      description:
        "We assist in developing and implementing transfer pricing policies that align with your business objectives, mitigate risks, and ensure compliance with local regulations.",
    },
    {
      title: "Transfer Pricing Planning",
      description:
        "Our team provides strategic transfer pricing planning to optimize your company's global tax position, minimize disputes with tax authorities, and maximize operational efficiencies.",
    },
    {
      title: "Transfer Pricing Audits and Dispute Resolution",
      description:
        "We represent clients in transfer pricing audits and assist in resolving disputes with tax authorities, including negotiating advanced pricing agreements (APAs) and mutual agreement procedures (MAPs).",
    },
  ];

  return (
    <section key={replayKey} className="w-full bg-white">
      {/* Banner — PURE ZOOM ONLY */}
      <div className="w-screen h-[50vh] overflow-hidden">
        <motion.img
          src="/1TP.jpg"
          alt="Transfer Pricing Banner"
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
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.4 },
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.h1
            className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4"
            variants={slideLtoR}
          >
            TRANSFER PRICING
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              Assisting corporates in complying with transfer pricing regulations in the UAE and other jurisdictions,
              including documentation requirements, pricing adjustments, strategic planning, and compliance support.
            </motion.p>
            <motion.p variants={slideLtoR}>
              We ensure related-party transactions are conducted at arm's length, as if between independent parties. Our
              team provides tailored solutions to align your pricing practices with regulations and international
              standards.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our services focus on risk management, compliance, and value creation—customized for each client's unique
              business structure and needs.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose PRISH — alternating slide directions with container/stagger */}
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
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
              variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
              style={{ willChange: "transform, opacity" }}
            >
              <h4 className="text-xl font-semibold text-[#163c4f] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-base">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FAQ — fade up + accordion with AnimatePresence & auto-height */}
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
          {faqItems.map((faq, idx) => (
            <motion.div
              key={idx}
              className="border border-[#d6e4ec] rounded-lg overflow-hidden"
              variants={fadeUp}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-${idx}`}
              >
                {faq.question}
                <span className="text-xl">{openIndex === idx ? "▲" : "▼"}</span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key={`faq-${idx}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div id={`faq-${idx}`} className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base">
                      {typeof faq.answer === "string" ? <p>{faq.answer}</p> : faq.answer}
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
        className="mt-18 mb-10 text-center"
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
};

export default TransferPricing;

