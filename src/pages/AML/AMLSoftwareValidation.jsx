// src/pages/AMLSoftwareValidation.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

/* ===== Easing & Variants (match your other pages) ===== */
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

const AMLSoftwareValidation = () => {
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

  /* ===== Floating blobs + mouse parallax (hero) ===== */
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.8 });
  const smy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.8 });

  // tweak the multipliers (40 / 30) for more/less drift
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

  const faqs = [
    {
      question: "What is AML Screening Software Validation?",
      answer:
        "It's the process of evaluating if the AML screening software is configured correctly to meet compliance needs and deliver accurate results.",
    },
    {
      question: "Why is software validation important in AML compliance?",
      answer:
        "Validation ensures your screening software is catching real threats and not being overloaded with false positives or outdated data.",
    },
    {
      question: "How does software testing differ from validation?",
      answer:
        "Validation checks the configurations, while testing verifies real-time outputs and outcomes after implementation in a live or near-live environment.",
    },
    {
      question: "What if my software shows too many false positives?",
      answer:
        "Our service includes fine-tuning the screening logic and testing the whitelisting process to minimize false alerts.",
    },
    {
      question: "What lists should my AML software screen against?",
      answer:
        "It should include the UN Consolidated List, UAE Local Terrorist List, international sanction databases, and your internal blacklist.",
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
          src="/Technology-Consulting.avif"
          alt="AML Software Banner"
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

      {/* Intro Section — container + stagger + slide (with replay) */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 mt-5 px-6 sm:px-8 lg:px-12 rounded-lg shadow-md"
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
            className="text-black text-4xl font-bold text-center mb-8"
            variants={slideLtoR}
          >
            AML SCREENING SOFTWARE TESTING & VALIDATION
          </motion.h1>

          <motion.div
            className="text-black text-lg space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              AML UAE offers robust AML Screening Software Testing and Validation
              Services to ensure your tools accurately identify sanctioned
              individuals and entities while minimizing false positives.
            </motion.p>
            <motion.p variants={slideLtoR}>
              Proper validation helps configure screening logic, verify data
              sources, integrate real scenarios, and assess compliance readiness.
            </motion.p>
            <motion.p variants={slideRtoL}>
              From configuration review to final testing with real-life cases, we
              assist FIs, DNFBPs, and VASPs in complying with regulatory
              obligations seamlessly.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Key Differentiators */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            Our Key Differentiators
          </h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {[
            "Validating the data source and mapping logic.",
            "Ensuring software settings align with AML compliance.",
            "Using real customer and transaction scenarios for testing.",
            "Pinpointing discrepancies in alerts and outcomes.",
            "Collaborating with your software vendor for fixes.",
            "Re-testing to ensure no new gaps arise.",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
              style={{ willChange: "transform, opacity" }}
            >
              <p className="text-gray-700 text-base">{item}</p>
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
        <motion.h3
          className="text-3xl font-semibold text-center text-[#163c4f] mb-10"
          variants={fadeUp}
        >
          Frequently Asked Questions
        </motion.h3>

        <motion.div className="space-y-4" variants={container}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-${idx}`;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFAQ(idx);
                    }
                  }}
                  className="w-full px-6 py-4 flex justify-between items-center bg-[#0a2d45] text-white font-medium text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  {faq.question}
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
                      className="bg-white px-6 py-4 text-gray-800"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Contact Form Section */}
      <div className="mb-20">
        <motion.div
          className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
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
    </section>
  );
};

export default AMLSoftwareValidation;
