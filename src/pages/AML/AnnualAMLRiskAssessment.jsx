// src/pages/AMLScreeningValidation.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const AMLScreeningValidation = () => {
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
      question: "What is an Annual AML/CFT Risk Assessment Report?",
      answer:
        "It is a comprehensive document that evaluates an organization's exposure to money laundering and terrorist financing risks, as required by UAE regulatory authorities.",
    },
    {
      question:
        "Who is required to submit the Annual AML/CFT Risk Assessment Report?",
      answer:
        "All Designated Non-Financial Businesses and Professions (DNFBPs) and Financial Institutions (FIs) operating in the UAE are mandated to prepare and maintain this report annually.",
    },
    {
      question: "What elements are covered in the risk assessment report?",
      answer:
        "The report includes customer risk profiling, product/service risk, geographic risk, channel risk, transaction risk, and mitigation measures taken by the entity.",
    },
    {
      question: "Is the Annual Risk Assessment Report mandatory in the UAE?",
      answer:
        "Yes, the UAE’s AML laws require regulated entities to conduct annual risk assessments and document their findings in a formal report for audit and compliance purposes.",
    },
    {
      question: "What happens if we fail to submit or maintain the report?",
      answer:
        "Non-compliance can lead to hefty fines, regulatory sanctions, or reputational damage. It is critical to ensure timely and accurate reporting.",
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
          src="/1soft.jpg"
          alt="AML Screening Validation"
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

      {/* Gradient Intro — container + stagger + slide (with replay) */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-lg"
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
            className="text-black text-4xl md:text-4xl mb-8 font-bold text-center"
            variants={slideLtoR}
          >
            Annual AML/CFT Risk Assessment Report
          </motion.h1>
          <motion.div
            className="text-gray-800 text-base md:text-lg leading-relaxed space-y-5 max-w-4xl mx-auto text-justify"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              Designated Non-Financial Businesses and Professions (DNFBPs) in UAE
              must file an annual AML/CFT Risk Assessment Report with the Ministry
              of Economy (MOE).
            </motion.p>
            <motion.p variants={slideLtoR}>
              In accordance with Article (44) of Cabinet Decision No. (10) of
              2019, DNFBPs are required to evaluate and report on money laundering
              and terrorism financing risks annually.
            </motion.p>
            <motion.p variants={slideRtoL}>
              The Annual AML/CFT Risk Assessment Report helps the MOE apply a
              risk-based supervisory approach. AML UAE supports DNFBPs, including
              Dealers in Precious Metals and Stones, with expert filing services
              to ensure compliance.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content Section with Cards — stagger + alternating slides */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h3 className="text-3xl font-semibold text-center text-[#0d3c58] mb-10">
            Report Requirements Include:
          </h3>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            "Details of inherent risk, control measures, and mitigation strategy.",
            "Ownership and control information (25%+ beneficial ownership).",
            "Customer base segmentation (residency, PEPs, legal/natural persons).",
            "Business activities including sale of bullion, jewelry, or refining.",
            "Cash and virtual currency transactions above regulatory thresholds.",
            "Geographic risk and transactional volume by country.",
            "Internal AML/CFT policies, board approvals, and compliance officer reporting.",
            "Usage of goAML system and TFS (Targeted Financial Sanctions) checks.",
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideLtoR : slideRtoL}
              className="bg-white border-l-4 border-[#0d3c58] shadow-md rounded-lg p-6"
              style={{ willChange: "transform, opacity" }}
            >
              <p className="text-gray-800 text-base">{item}</p>
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
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Query Form */}
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
    </section>
  );
};

export default AMLScreeningValidation;
