import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

/* ===== Shared easing & variants ===== */
const easeOutExpo = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const slideLtoR = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

const slideRtoL = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

/* Scroll replay thresholds */
const TOP_REPLAY_THRESHOLD = 12;
const AWAY_THRESHOLD = 160;

export default function SOPPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

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

  /* ====== FAQ Data ====== */
  const faqItems = [
    {
      question: "What are Standard Operating Procedures (SOP's)?",
      answer:
        "Standard Operating Procedures (SOP's) are documented instructions that outline the steps, responsibilities, and requirements for performing specific tasks or processes within an organization.",
    },
    {
      question: "Why are SOP's important for businesses?",
      answer:
        "SOP's ensure consistency, efficiency, and compliance with established standards. They streamline operations, reduce errors, and improve overall performance.",
    },
    {
      question: "What is the process for developing SOP's with PRISH Consultancy?",
      answer:
        "PRISH Consultancy follows a structured process for developing SOP's — including process analysis, SOP development, training & implementation support, and regular review and revision.",
    },
    {
      question: "What industries can benefit from SOP preparation and development services?",
      answer:
        "SOP development benefits all industries including manufacturing, healthcare, hospitality, retail, and more.",
    },
    {
      question: "How can SOP's benefit my organization?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Consistency – Ensure consistent execution of tasks and processes.</li>
          <li>Efficiency – Streamline operations and reduce errors.</li>
          <li>Compliance – Ensure regulatory compliance and meet industry standards.</li>
          <li>Training & Onboarding – Facilitate training and onboarding of new employees.</li>
        </ul>
      ),
    },
    {
      question: "How often should SOP's be reviewed and updated?",
      answer:
        "SOP's should be reviewed and updated regularly — typically annually or as needed — to reflect any process or regulatory changes.",
    },
    {
      question: "Can SOP's help improve employee performance?",
      answer:
        "Yes, SOP's help improve employee performance by providing clear step-by-step guidance, reducing confusion and errors.",
    },
    {
      question: "What is the difference between SOP's and work instructions?",
      answer:
        "SOP's describe an overall process, while work instructions provide detailed steps for specific tasks within that process.",
    },
  ];

  return (
    <section key={replayKey} className="w-full">
      {/* Banner */}
      <div className="w-screen h-[50vh] overflow-hidden">
        <motion.img
          src="/sops-banner.jpg"
          alt="Standard Operating Procedures Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
        />
      </div>

      {/* INTRO */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 mb-10 sm:px-6 lg:px-8 rounded-lg shadow-md"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4"
            variants={slideLtoR}
          >
            STANDARD OPERATING PROCEDURES (SOP's)
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              This includes a comprehensive range of services such as preparation and development of detailed SOP's with process flowcharts, narratives, and Delegation of Authority (DOA) Matrix. We review and implement SOP's by providing employee training to enhance overall organizational effectiveness.
            </motion.p>
            <motion.p variants={slideLtoR}>
              SOP's are step-by-step documented instructions that guide how specific tasks should be performed, ensuring consistency, efficiency, and compliance within organizations.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our experienced team collaborates closely with clients to develop customized SOP's aligned with industry best practices and regulatory requirements.
            </motion.p>
            <motion.p variants={slideLtoR}>
              We recognize the importance of well-defined SOP's for streamlining operations, ensuring quality, and maintaining compliance. We work with your team to identify improvement areas and develop practical, clear, and easy-to-follow SOP's.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* WHY CHOOSE PRISH */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            Why Choose PRISH?
          </h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {[
            {
              title: "Process Analysis",
              description:
                "We conduct a thorough analysis of your existing processes to identify gaps, inefficiencies, and opportunities for improvement.",
            },
            {
              title: "SOP Development",
              description:
                "Based on our analysis, we develop customized SOP's defining steps, roles, and responsibilities for each process.",
            },
            {
              title: "Training & Implementation Support",
              description:
                "We provide employee training and on-site support to ensure smooth SOP implementation across all teams.",
            },
            {
              title: "Review & Revision",
              description:
                "We periodically review and update SOP's to ensure they remain accurate, relevant, and compliant.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
              variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
            >
              <h4 className="text-xl font-semibold text-[#163c4f] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-base">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FAQ SECTION */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
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
      </motion.div>

      {/* Query Form */}
      <motion.div
        className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Send a Query</h2>
        <SendQueryForm />
      </motion.div>

      {/* Back Button */}
      <div className="mt-18 mb-10 text-center">
        <Link
          to="/services/advisory"
          className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to Advisory
        </Link>
      </div>
    </section>
  );
}
