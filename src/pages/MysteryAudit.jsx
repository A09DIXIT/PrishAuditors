import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

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

const MysteryAudit = () => {
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
        setReplayKey((k) => k + 1); // soft remount -> reset animations
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const faqItems = [
    {
      question: "What is a mystery audit?",
      answer:
        "A mystery audit, also known as mystery shopping or secret shopping, is a method of evaluating the quality of service and compliance with company standards by sending anonymous evaluators to assess various aspects of a business from a customer's perspective.",
    },
    {
      question: "Why is a mystery audit necessary?",
      answer:
        "A mystery audit is necessary to gain insights into the customer experience, identify areas for improvement, ensure compliance with operational standards, and maintain high service quality.",
    },
    {
      question: "How does a mystery audit differ from other types of audits?",
      answer:
        "While traditional audits focus on financial records and compliance, mystery audits focus on the customer experience, service quality, and adherence to operational procedures from a customer's viewpoint.",
    },
    {
      question: "What are the key objectives of a mystery audit?",
      answer:
        "The primary objectives of a mystery audit are to assess customer service quality, evaluate adherence to operational standards, identify areas for improvement, and enhance overall customer satisfaction.",
    },
    {
      question: "What are the benefits of a mystery audit?",
      answer: [
        "Customer Experience Improvement: Enhance the customer experience by identifying and addressing gaps in service quality.",
        "Operational Efficiency:  Streamline processes and procedures to improve efficiency and reduce costs.",
        "Employee Training and Development:  Provide targeted training and coaching based on feedback from mystery audits to improve employee performance.",
        "Quality Control: Ensure consistency in service delivery and maintain high standards across all locations."
      ],
    },
    {
      question: "How frequently should a mystery audit be conducted?",
      answer:
        "The frequency of mystery audits depends on the business's needs, industry standards, and areas of concern. Some businesses conduct mystery audits quarterly, while others may do so monthly or annually.",
    },
    {
      question: "What industries can benefit from mystery audit services?",
      answer:
        "Mystery audit services can benefit businesses in various industries, including retail, hospitality, healthcare, banking, automotive, and more, where customer service and experience are critical.",
    },
    {
      question: "How can I use the findings from a mystery audit to improve my business?",
      answer:
        "The findings from a mystery audit can be used to identify specific areas for improvement, develop targeted training programs for employees, implement process enhancements, and measure progress over time.",
    },
  ];

  return (
    <section key={replayKey} className="w-full bg-white min-h-screen">
      {/* Banner — PURE ZOOM ONLY (no left/right movement) */}
      <div className="w-full h-[50vh] overflow-hidden">
        <motion.img
          src="/mystory12.jpg"
          alt="Mystery Audit Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Intro Section — plays immediately at top & on top return */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br max-w-8xl from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 mt-10 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          variants={container}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.02, boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)", transition: { duration: 0.4 } }}
        >
          <motion.h1
            className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4"
            variants={slideLtoR}
          >
            MYSTERY AUDIT
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              Core assessments are conducted by us as an independent evaluator to measure and evaluate the quality of service, compliance with policies and procedures, and overall customer experience with your company’s brand.
            </motion.p>
            <motion.p variants={slideLtoR}>
              Mystery audit, also known as mystery shopping or secret shopping, involves sending trained evaluators to assess the quality of service and compliance with company standards from a customer's perspective. It provides unbiased feedback on various aspects of your business, including customer service, product quality, and adherence to operational procedures.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our professional mystery audit services are designed to provide valuable insights into the customer experience, operational efficiency, and compliance with service standards. Our mystery audits are conducted discreetly and objectively to assess various aspects of your business, helping you identify areas for improvement and enhance overall performance.
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
              {
                title: "Objective Assessment:",
                description:
                  "Our trained evaluators conduct anonymous visits or interactions with your business to provide unbiased assessments of customer service quality and compliance with operational standards.",
              },
              {
                title: "Comprehensive Reporting:",
                description:
                  "We provide detailed reports and actionable insights based on the findings of our mystery audits, highlighting strengths, weaknesses, and areas for improvement.",
              },
              {
                title: "Customized Evaluation Criteria:",
                description:
                  "We tailor our mystery audits to focus on specific aspects of your business, such as customer service, cleanliness, product knowledge, sales techniques, and adherence to policies and procedures.",
              },
              {
                title: "Benchmarking:",
                description:
                  "Our mystery audit services can be used to benchmark performance across multiple locations or against industry standards, helping you identify best practices and areas for differentiation.",
              },
            ].map((item, idx) => (
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
        </motion.div>
      </div>

      {/* FAQ — bottom -> top reveal + accordion; re-triggers on view */}
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
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="space-y-4 max-w-8xl mx-auto px-4 pb-20"
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
              <span className="text-xl">
                {openIndex === index ? "▲" : "▼"}
              </span>
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

      {/* Query Form — bottom -> top (re-triggers) */}
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

      {/* Back Button — bottom -> top (re-triggers) */}
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
    </section>
  );
};

export default MysteryAudit;
