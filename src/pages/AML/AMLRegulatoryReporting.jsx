// src/pages/AMLRegulatoryReporting.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

/* ===== Shared easing & variants (consistent across pages) ===== */
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

const AMLRegulatoryReporting = () => {
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

  // parallax offsets (tweak the 40 / 30 for more/less drift)
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

  const faqItems = [
    {
      question: "What is AML Regulatory Reporting?",
      answer:
        "It refers to mandatory reports submitted by regulated entities to meet AML obligations — such as suspicious activity reports, DPMSR, REAR, and others.",
    },
    {
      question: "Who needs to submit AML regulatory reports?",
      answer:
        "Entities like financial institutions, DNFBPs, VASPs, real estate firms, auditors, and dealers in precious metals and stones are all obligated to file AML reports.",
    },
    {
      question: "What if I miss a report deadline?",
      answer:
        "Failure to comply may result in penalties or increased scrutiny. We help clients respond quickly and accurately even under tight timelines.",
    },
    {
      question: "Can you help with custom surveys from regulators?",
      answer:
        "Yes. We assist in drafting responses, collecting required data, and ensuring your replies meet regulatory standards.",
    },
  ];

  const reportTypes = [
    "DPMSR Submission",
    "Suspicious Activity Report",
    "Suspicious Transaction Report",
    "Monthly AML Officer Reports",
    "Real Estate Activity Report (REAR)",
    "Funds Freeze Report",
    "Partial Name Match Report",
    "High-Risk Country Transaction (HRC) Report",
    "High-Risk Country Activity (HRCA) Report",
    "Annual AML/CFT Risk Assessment",
  ];

  const industries = [
    "Banks",
    "Financial Companies",
    "Insurance Providers",
    "Auditors & Accountants",
    "Real Estate Agents & Brokers",
    "Dealers in Precious Metals & Stones (DPMS)",
    "Company & Trust Service Providers",
    "Lawyers, Notaries & Legal Professionals",
    "Virtual Asset Service Providers (VASPs)",
  ];

  return (
    <section key={replayKey} className="bg-white">
      {/* Small CSS hook to respect reduced motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .aml-blob { display: none; }
        }
      `}</style>

      {/* Banner — PURE ZOOM + floating blobs with parallax */}
      <div
        className="relative w-full h-[50vh] overflow-hidden"
        onMouseMove={handleParallax}
      >
        <motion.img
          src="/1REGULATORYREPORTING.jpg"
          alt="AML Regulatory Reporting"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />

        {/* Floating gradient blobs (like amluae) */}
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

      {/* Intro — immediate + replay on top */}
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
            AML REGULATORY REPORTING
          </motion.h1>

          <motion.div
            className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              We help you meet AML Regulatory Reporting requirements – whether it’s a scheduled submission, urgent request, or last-minute compliance.
            </motion.p>
            <motion.p variants={slideLtoR}>
              From Suspicious Transaction Reports to DPMSR, Real Estate Activity Reports, Funds Freeze, and more – we handle end-to-end reporting.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Grid — alternating slide with stagger */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] text-center mb-10">
            Types of AML Reports We Support
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
            "DPMSR Submission",
            "Suspicious Activity Report",
            "Suspicious Transaction Report",
            "Monthly AML Officer Reports",
            "Real Estate Activity Report (REAR)",
            "Funds Freeze Report",
            "Partial Name Match Report",
            "High-Risk Country Transaction (HRC) Report",
            "High-Risk Country Activity (HRCA) Report",
            "Annual AML/CFT Risk Assessment",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
              variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
              style={{ willChange: "transform, opacity" }}
            >
              <p className="text-gray-700 text-base">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Industries Served — grid with stagger (fadeUp tiles) */}
      <div className="bg-[#f9fafb] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h3
            className="text-3xl font-semibold text-center text-[#163c4f] mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            Industries We Serve
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            {[
              "Banks",
              "Financial Companies",
              "Insurance Providers",
              "Auditors & Accountants",
              "Real Estate Agents & Brokers",
              "Dealers in Precious Metals & Stones (DPMS)",
              "Company & Trust Service Providers",
              "Lawyers, Notaries & Legal Professionals",
              "Virtual Asset Service Providers (VASPs)",
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow p-4 rounded-md border border-gray-200"
                variants={fadeUp}
              >
                <p className="text-gray-800 font-medium">{industry}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FAQ — fadeUp + stagger + rotating chevron + AnimatePresence */}
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
          {[
            {
              question: "What is AML Regulatory Reporting?",
              answer:
                "It refers to mandatory reports submitted by regulated entities to meet AML obligations — such as suspicious activity reports, DPMSR, REAR, and others.",
            },
            {
              question: "Who needs to submit AML regulatory reports?",
              answer:
                "Entities like financial institutions, DNFBPs, VASPs, real estate firms, auditors, and dealers in precious metals and stones are all obligated to file AML reports.",
            },
            {
              question: "What if I miss a report deadline?",
              answer:
                "Failure to comply may result in penalties or increased scrutiny. We help clients respond quickly and accurately even under tight timelines.",
            },
            {
              question: "Can you help with custom surveys from regulators?",
              answer:
                "Yes. We assist in drafting responses, collecting required data, and ensuring your replies meet regulatory standards.",
            },
          ].map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className="border border-[#d6e4ec] rounded-lg overflow-hidden"
                variants={fadeUp}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                >
                  {item.question}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: easeOutExpo }}
                    className="inline-block"
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`faq-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        id={`faq-${index}`}
                        className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base"
                      >
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
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Query Form — bottom -> top */}
      <motion.div
        className="mb-10 max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
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

export default AMLRegulatoryReporting;
