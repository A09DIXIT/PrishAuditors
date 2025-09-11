// src/pages/InHouseAMLCompliance.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const InHouseAMLCompliance = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  /* ===== Easing & Variants (consistent site-wide) ===== */
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

  /* ===== FAQ content ===== */
  const faqItems = [
    {
      question: "Why is an in-house AML department important?",
      answer:
        "It ensures proactive compliance, reduces risk of penalties, and fosters a strong compliance culture aligned with UAE AML laws.",
    },
    {
      question: "Who leads the compliance department?",
      answer:
        "An AML Compliance Officer, appointed with board approval, is responsible for managing compliance functions and reporting.",
    },
    {
      question: "Is this required for small businesses too?",
      answer:
        "Yes, any entity exposed to financial transactions or ML/TF risk must implement AML controls regardless of size.",
    },
    {
      question: "What qualifications should the AML Compliance Officer have?",
      answer:
        "The officer should have knowledge of AML laws, risk assessment, and experience in regulatory compliance frameworks.",
    },
    {
      question: "How long does it take to set up an AML compliance department?",
      answer:
        "Depending on the size and complexity of your business, it may take a few weeks to fully implement policies and hire or train the team.",
    },
    {
      question: "Can the setup be customized for our industry?",
      answer:
        "Yes, we tailor the AML framework, policies, and monitoring systems based on your sector-specific risks and regulations.",
    },
  ];

  return (
    <section key={replayKey} className="w-full bg-white text-[#163c4f]">
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
          src="/1legislation-background.jpg"
          alt="In-house AML Compliance Department"
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
          <motion.h2
            className="text-4xl text-center font-semibold mb-6 text-[#0a2d45]"
            variants={slideLtoR}
          >
            IN-HOUSE AML COMPLIANCE DEPARTMENT SETUP
          </motion.h2>
          <motion.div
            className="space-y-4 max-w-4xl mx-auto text-[#0a2d45]"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              We help UAE businesses with setting up an in-house AML compliance
              department in line with evolving AML/CFT laws. From understanding
              regulatory requirements to building internal frameworks, we guide you
              at every step to ensure compliance and mitigate money laundering risks.
            </motion.p>
            <motion.p variants={slideLtoR}>
              Our expert team ensures your compliance structure is timely, relevant,
              and effective by transforming your approach from reactive to proactive.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Our Process — staggered grid with alternating slides */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          Our Process for Setup
        </motion.h3>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {[
            "Study AML Requirements",
            "Appoint AML Compliance Officer",
            "Define Rules & Responsibilities",
            "Set Up Compliance Department",
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideLtoR : slideRtoL}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
              style={{ willChange: "transform, opacity" }}
            >
              <h4 className="text-xl font-semibold mb-2">{step}</h4>
              <p className="text-gray-700">
                {index === 0 &&
                  `We begin by understanding your organization’s AML risk profile and explaining the strategic need for a compliance department to top management.`}
                {index === 1 &&
                  `We assist in appointing a dedicated AML compliance officer with authority and support from leadership, including team structuring if needed.`}
                {index === 2 &&
                  `Our experts guide you in drafting a compliance code of conduct, policies, and SOPs aligned with UAE AML regulations and international standards.`}
                {index === 3 &&
                  `We implement the department with tools and monitoring mechanisms that detect, prevent, and report suspicious activities effectively.`}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FAQ — staggered header + animated open/close + rotating chevron */}
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
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Contact */}
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
    </section>
  );
};

export default InHouseAMLCompliance;
