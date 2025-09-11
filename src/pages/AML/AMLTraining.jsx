// src/pages/AMLTraining.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const AMLTraining = () => {
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

  /* ===== Content ===== */
  const faqItems = [
    {
      question: "What is AML training?",
      answer:
        "AML training equips employees to detect suspicious transactions, conduct due diligence, and understand money laundering risks.",
    },
    {
      question: "Who should attend AML training?",
      answer:
        "All employees involved in financial processes, KYC, or compliance functions should undergo AML training.",
    },
    {
      question: "Is AML training mandatory?",
      answer:
        "Yes, UAE regulations require regulated entities to conduct regular AML/CFT training for relevant staff.",
    },
    {
      question: "Do you provide customized training?",
      answer:
        "Yes, we tailor our AML training based on your industry, risk exposure, and compliance needs.",
    },
    {
      question: "What topics are covered?",
      answer:
        "Topics include KYC, risk profiling, STR, record-keeping, due diligence, screening, and AML best practices.",
    },
  ];

  // (Unused titles list retained from your original file; safe to remove if you prefer)
  const trainingTopics = [
    "KYC Due Diligence",
    "Screening (UNSC & UAE Sanctions)",
    "Risk Profiling",
    "Enhanced Due Diligence",
    "Suspicious Transaction Reporting (STR)",
    "AML Record Keeping",
    "AML/CFT Awareness",
    "International AML Best Practices",
    "AML Compliance Program Design",
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
          src="/1TRAINING.jpeg"
          alt="AML Training"
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
            AML TRAINING
          </motion.h2>

          <motion.div
            className="space-y-4 max-w-4xl mx-auto text-[#0a2d45]"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              AML/CFT compliance programs require effective training to make your
              staff aware of financial crime risks, laws, and internal protocols.
              Our programs are tailored to UAE’s AML laws and global best practices.
            </motion.p>
            <motion.p variants={slideLtoR}>
              From customer due diligence to suspicious transaction reporting, our
              robust training covers every critical area, preparing your teams to
              remain compliant and proactive.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Topics Covered — grid with stagger; preserves your centering for a lone last card */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          AML Training Topics
        </motion.h3>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {[
            {
              title: "KYC Due Diligence",
              description:
                "Learn how to collect and verify customer identity and maintain secure data records.",
            },
            {
              title: "Screening (UNSC & UAE Sanctions)",
              description:
                "Understand how to screen entities against global and UAE sanctions lists effectively.",
            },
            {
              title: "Risk Profiling",
              description:
                "Develop skills to assess customer and business risk levels using risk-based methodologies.",
            },
            {
              title: "Enhanced Due Diligence",
              description:
                "Identify high-risk cases and gather deeper insights into customer background and financials.",
            },
            {
              title: "Suspicious Transaction Reporting (STR)",
              description:
                "Learn how to detect, document, and report suspicious activity in compliance with UAE law.",
            },
            {
              title: "AML Record Keeping",
              description:
                "Maintain required AML documentation securely for a minimum of 5 years.",
            },
            {
              title: "AML/CFT Awareness",
              description:
                "Understand the UAE regulatory landscape, FATF recommendations, and compliance obligations.",
            },
            {
              title: "International AML Best Practices",
              description:
                "Implement global AML standards and procedures tailored to your industry.",
            },
            {
              title: "AML Compliance Program Design",
              description:
                "Build frameworks, policies, and governance models to ensure full AML compliance.",
            },
          ].map((topic, index, arr) => {
            const isLastOdd = arr.length % 2 !== 0 && index === arr.length - 1;

            const card = (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? slideLtoR : slideRtoL}
                className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f] w-full"
                style={{ willChange: "transform, opacity" }}
              >
                <h4 className="text-xl font-semibold text-[#163c4f] mb-2">
                  {topic.title}
                </h4>
                <p className="text-gray-700">{topic.description}</p>
              </motion.div>
            );

            return isLastOdd ? (
              <div key={`wrap-${index}`} className="md:col-span-2 flex justify-center">
                <div className="md:w-[48%] w-full">{card}</div>
              </div>
            ) : (
              <div key={`wrap-${index}`}>{card}</div>
            );
          })}
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
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Contact Form */}
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

export default AMLTraining;
