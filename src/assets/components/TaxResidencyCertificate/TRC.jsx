import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const TRC = () => {
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

  const faqs = [
    {
      question: "What is a Tax Residency Certificate (TRC)?",
      answer:
        "A Tax Residency Certificate (TRC) is an official document issued by the tax authorities of a country confirming an individual or entity's tax residency status in that country for a specific period.",
    },
    {
      question: "Why is a Tax Residency Certificate (TRC) important?",
      answer:
        "A TRC is important for individuals and businesses to establish their tax residency status in a particular country, which is essential for accessing tax treaty benefits, avoiding double taxation, and complying with regulatory requirements.",
    },
    {
      question: "Who can apply for a Tax Residency Certificate (TRC)?",
      answer:
        "Individuals and businesses that meet the tax residency criteria of a particular country can apply for a TRC. The criteria may vary depending on the country's tax laws and regulations.",
    },
    {
      question: "What are the benefits of obtaining a Tax Residency Certificate (TRC)?",
      answer:
        "The benefits of obtaining a TRC include: Access to tax treaty benefits, such as reduced withholding tax rates on dividends, interest, and royalties. Avoidance of double taxation on income earned in different jurisdictions. Compliance with regulatory requirements, including proof of tax residency for banking and investment purposes. Facilitated business operations and cross-border transactions.",
    },
    {
      question: "What documents are required to apply for a Tax Residency Certificate (TRC)?",
      answer:
        "The documents required for TRC application may include proof of identity, proof of address, evidence of tax payments, and supporting financial documents, depending on the country's requirements.",
    },
    {
      question: "How long does it take to obtain a Tax Residency Certificate (TRC)?",
      answer:
        "The processing time for TRC applications varies depending on the country and the complexity of the application.",
    },
    {
      question: "Can a Tax Residency Certificate (TRC) be used to claim tax treaty benefits?",
      answer:
        "Yes, a TRC serves as proof of tax residency and can be used to claim tax treaty benefits provided under double taxation avoidance agreements between countries.",
    },
    {
      question: "Is a Tax Residency Certificate (TRC) valid indefinitely?",
      answer:
        "TRCs are typically valid for a specific period, such as one year, and may need to be renewed annually or as required by the tax authorities.",
    },
    {
      question: "How can businesses benefit from obtaining a Tax Residency Certificate (TRC)?",
      answer:
        "Businesses can benefit from TRCs by accessing tax treaty benefits, reducing tax liabilities, facilitating cross-border transactions, and ensuring compliance with regulatory requirements in various jurisdictions.",
    },
  ];

  const whyCards = [
    {
      title: "Consultation",
      description:
        "We provide expert consultation to determine eligibility for obtaining a TRC and assess the requirements based on individual or business circumstances.",
    },
    {
      title: "Documentation Assistance",
      description:
        "Our team assists in preparing the required documentation, including application forms, supporting financial documents, and any other necessary paperwork.",
    },
    {
      title: "Application Submission",
      description:
        "We handle the entire application process, including submission to the relevant tax authorities, ensuring completeness and accuracy to expedite the issuance of the TRC.",
    },
    {
      title: "Follow-up and Support",
      description:
        "We follow up with the tax authorities on behalf of our clients and provide ongoing support throughout the application process, addressing any queries or additional requirements that may arise.",
    },
  ];

  return (
    <section key={replayKey} className="w-full bg-white">
      {/* Banner — PURE ZOOM ONLY */}
      <div className="w-screen h-[50vh] overflow-hidden">
        <motion.img
          src="/1TRC.jpg"
          alt="TRC Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Introduction — plays immediately and on replay-to-top */}
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
            TAX RESIDENCY CERTIFICATE (TRC)
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              A tax residency (Domicile) certificate in UAE is issued by the International Financial Relations and
              Organizations Department which permits eligible government entities, companies, and individuals to take
              advantage of agreements of double taxation avoidance. We at PRISH provide professional assistance in
              coordinating with the ministry offices and availing the tax residency (domicile) certificate.
            </motion.p>
            <motion.p variants={slideLtoR}>
              Our expert team offers tailored solutions to ensure compliance with local regulations and facilitate the
              TRC application process efficiently.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our approach is to understand the importance of TRCs for individuals and businesses for various purposes
              such as accessing tax treaty benefits, avoiding double taxation, and complying with regulatory
              requirements. It is designed to streamline the application process and provide clients with the necessary
              support and guidance.
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
          {whyCards.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
              variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
              style={{ willChange: "transform, opacity" }}
            >
              <h4 className="text-xl font-semibold text-[#163c4f] mb-2">{item.title}</h4>
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
          {faqs.map((faq, idx) => (
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
    </section>
  );
};

export default TRC;
