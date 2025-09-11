import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

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

const AMLCFTPolicy = () => {
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

  const faqItems = [
    {
      question: "What is included in an AML/CFT policy manual?",
      answer:
        "It outlines a company’s processes to detect, report, and prevent money laundering and terrorism financing, aligned with regulatory expectations.",
    },
    {
      question: "Is AML compliance mandatory in the UAE?",
      answer:
        "Yes. Every business falling under the scope of UAE regulations must maintain AML/CFT policies, procedures, and controls.",
    },
    {
      question: "How often should AML policies be reviewed?",
      answer:
        "Ideally every 12 months, or immediately after regulatory updates or changes in operations.",
    },
  ];

  const services = [
    {
      title: "Risk Identification",
      description:
        "We analyze business processes to uncover exposure to money laundering or terrorist financing threats.",
    },
    {
      title: "Assessment of Existing AML Policies",
      description:
        "We evaluate your current AML framework and its effectiveness in addressing known risks.",
    },
    {
      title: "Gap Analysis",
      description:
        "We compare existing controls with identified risks to determine compliance and suggest improvements.",
    },
    {
      title: "AML/CFT Framework Creation",
      description:
        "We deliver a custom-built AML/CFT framework tailored to your business model and risk profile.",
    },
  ];

  return (
    <div key={replayKey} className="w-full text-[#163c4f]">
      {/* Banner — PURE ZOOM ONLY */}
      <div className="w-full h-[50vh] overflow-hidden">
        <motion.img
          src="/AML-CFT-2.jpg"
          alt="AML Banner"
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
            AML/CFT POLICY, CONTROLS, AND PROCEDURES DOCUMENTATION
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto space-y-5 text-[#0a2d45]"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              We help UAE businesses stay compliant with AML/CFT regulations by developing formalized
              policies, procedures, and control frameworks, ensuring operational integrity and legal alignment.
            </motion.p>
            <motion.p variants={slideLtoR}>
              Our experts analyze your business's unique risks and design documentation tailored to your
              industry, size, and legal obligations.
            </motion.p>
            <motion.p variants={slideRtoL}>
              With strong understanding of UAE AML laws, we ensure your organization is shielded from
              compliance risks while building trust and transparency.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Our AML Process — alternating slide cards with stagger */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            Our AML Compliance Documentation Process
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

      {/* FAQ — fade up + accordion with AnimatePresence */}
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
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="border border-[#d6e4ec] rounded-lg overflow-hidden"
              variants={fadeUp}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                {item.question}
                <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key={`faq-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div id={`faq-${index}`} className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base">
                      {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Contact Form — bottom -> top */}
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
  );
};

export default AMLCFTPolicy;
