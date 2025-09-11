// src/pages/AMLSoftwareSelection.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const AMLSoftwareSelection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  /* ===== Easing & Variants (site-wide consistency) ===== */
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

  /* Replay intro when user scrolls back to the very top */
  const TOP_REPLAY_THRESHOLD = 12;
  const AWAY_THRESHOLD = 160;
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

  /* ===== Floating blobs + mouse parallax (hero) ===== */
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.8 });
  const smy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.8 });

  // tweak multipliers (40 / 30) for more/less drift
  const dot1X = useTransform(smx, (v) => (v - 0.5) * 40);
  const dot1Y = useTransform(smy, (v) => (v - 0.5) * 40);
  const dot2X = useTransform(smx, (v) => (v - 0.5) * -30);
  const dot2Y = useTransform(smy, (v) => (v - 0.5) * -30);

  const handleParallax = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mx.set(Math.min(Math.max(x, 0), 1));
    my.set(Math.min(Math.max(y, 0), 1));
  };

  /* ===== FAQ data (your content) ===== */
  const faqItems = [
    {
      question: "What is AML software?",
      answer:
        "AML software is designed to help businesses detect and prevent money laundering activities by screening transactions, clients, and monitoring financial behavior against regulations.",
    },
    {
      question: "Why is AML software important?",
      answer:
        "It ensures businesses stay compliant with AML/CFT regulations, reduces financial crime risk, and builds credibility with regulatory authorities.",
    },
    {
      question: "Can AML software be customized?",
      answer:
        "Yes, many AML software solutions offer configurable modules for screening, transaction monitoring, reporting, and integration with your systems.",
    },
    {
      question: "How do I choose the right AML software?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Identify your business-specific AML requirements</li>
          <li>Evaluate vendor offerings and feature sets</li>
          <li>Consider implementation cost and support</li>
          <li>Request demos and compare usability</li>
          <li>Choose based on ROI and regulatory coverage</li>
        </ul>
      ),
    },
    {
      question: "Do you provide support in vendor negotiation?",
      answer:
        "Yes, we help negotiate with AML vendors to ensure you get the best deal along with post-implementation support and add-ons.",
    },
  ];

  return (
    <section key={replayKey} className="bg-white">
      {/* Respect reduced motion users */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .aml-blob { display: none; }
        }
      `}</style>

      {/* Banner — zoom-in + floating blobs with mouse parallax */}
      <div
        className="relative w-full h-[50vh] overflow-hidden"
        onMouseMove={handleParallax}
      >
        <motion.img
          src="/1AMLSOFTWARESELECTION.jpeg"
          alt="AML Software Selection"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />

        {/* Floating gradient blobs */}
        <motion.div
          className="aml-blob absolute w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            x: dot1X,
            y: dot1Y,
            top: "-140px",
            right: "-120px",
            background: "#bae6fd",
            filter: "blur(60px)",
            willChange: "transform",
          }}
          initial={{ scale: 0.92 }}
          animate={{ scale: [0.92, 1.04, 0.92] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <motion.div
          className="aml-blob absolute w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            x: dot2X,
            y: dot2Y,
            top: "40%",
            left: "-150px",
            background: "#fde68a",
            filter: "blur(60px)",
            willChange: "transform",
          }}
          initial={{ scale: 1.0 }}
          animate={{ scale: [1.0, 0.95, 1.0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      </div>

      {/* Intro — container + stagger + slide (with replay) */}
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
            className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4"
            variants={slideLtoR}
          >
            AML SOFTWARE SELECTION
          </motion.h1>

          <motion.div
            className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              Selecting the right AML software is essential for complying with
              Anti-Money Laundering and Counter-Financing of Terrorism regulations.
            </motion.p>
            <motion.p variants={slideLtoR}>
              AML UAE assists organizations in the UAE to find the most suitable
              AML software for transaction monitoring, risk assessment, and client
              screening.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our consulting service simplifies software selection by analyzing
              your business requirements, preparing documentation, evaluating
              vendors, and supporting implementation.
            </motion.p>
            <motion.p variants={slideLtoR}>
              The software you select should help reduce costs, enhance compliance
              capabilities, and provide automated updates, reports, and alerts.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose Us — staggered grid with alternating slides */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            Why Choose PRISH for AML Software Selection?
          </h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              title: "Requirement Analysis",
              description:
                "We understand your industry, business size, and compliance needs to define AML goals clearly.",
            },
            {
              title: "Documentation (BRD)",
              description:
                "We prepare a Business Requirements Document (BRD) with detailed features and compliance functions needed.",
            },
            {
              title: "Vendor Evaluation",
              description:
                "We research and shortlist AML software vendors that match your business goals, budget, and compliance level.",
            },
            {
              title: "Demo, Decision & Negotiation",
              description:
                "We help with demos, vendor selection, pricing negotiation, and drafting of the agreement.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
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

      {/* FAQ Section — staggered header + animated open/close + rotating chevron */}
      <motion.section
        className="max-w-8xl mx-auto px-4 pb-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2
          className="text-4xl font-semibold text-center text-[#0a2d45] mb-10"
          variants={fadeUp}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div className="space-y-4" variants={container}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-${index}`;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="border border-[#d6e4ec] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFAQ(index);
                    }
                  }}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  {item.question}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block select-none"
                    aria-hidden
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={panelId}
                      id={panelId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base"
                    >
                      {/* handle string, array, or element answers safely */}
                      {Array.isArray(item.answer) ? (
                        <ul className="list-disc pl-6 space-y-2">
                          {item.answer.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                      ) : typeof item.answer === "string" ? (
                        <p>{item.answer}</p>
                      ) : (
                        item.answer
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Query Form */}
      <div className="mb-10">
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
      </div>
    </section>
  );
};

export default AMLSoftwareSelection;
