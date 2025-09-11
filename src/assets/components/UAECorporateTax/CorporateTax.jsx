import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
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

export default function CorporateTax() {
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

  const faqs = [
    {
      question: "What is Corporate Tax?",
      answer:
        "Corporate Tax is a form of direct tax levied on the net income or profit of corporations and other businesses. Corporate Tax is sometimes also referred to as “Corporate Income Tax” or “Business Profits Tax” in other jurisdictions.",
    },
    {
      question: "Why is the UAE introducing Corporate Tax?",
      answer: (
        <>
          <p>
            A competitive Corporate Tax regime based on international best practices is expected to cement the UAE’s
            position as a leading global hub for business and investment and accelerate the UAE’s development and
            transformation to achieve its strategic objectives.
          </p>
          <p className="mt-2">
            Introducing a Corporate Tax regime also reaffirms the UAE’s commitment to meeting international standards for
            tax transparency and preventing harmful tax practices.
          </p>
        </>
      ),
    },
    {
      question: "Is the UAE the first country to introduce Corporate Tax?",
      answer:
        "Most countries in the world have a comprehensive Corporate Tax regime, including most of the countries in the Middle East.",
    },
    {
      question: "When is the UAE Corporate Tax regime effective?",
      answer: (
        <div className="space-y-2">
          <p>
            The UAE Corporate Tax regime is effective for Financial Years starting on or after 1 June 2023. Examples:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              A business with a Financial Year starting on 1 July 2023 and ending on 30 June 2024 is subject to UAE
              Corporate Tax from 1 July 2023.
            </li>
            <li>
              A business with a Financial Year starting on 1 January 2023 and ending on 31 December 2023 will become
              subject to UAE Corporate Tax from 1 January 2024.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Who is subject to UAE Corporate Tax?",
      answer: (
        <div className="space-y-2">
          <p>
            UAE Corporate Tax applies to juridical persons incorporated in the UAE and to foreign juridical persons that
            are effectively managed and controlled in the UAE. A foreign juridical person that operates in the UAE
            through a Permanent Establishment or that has a taxable nexus in the UAE would also be subject to Corporate
            Tax.
          </p>
          <p>
            Natural persons are subject to Corporate Tax only if they are engaged in a Business or Business Activity in
            the UAE, either directly or through an Unincorporated Partnership or sole proprietorship (see Cabinet
            Decision No. 49 of 2023 for details).
          </p>
        </div>
      ),
    },
    {
      question:
        "Will UAE entities owned by UAE or GCC nationals be subject to UAE Corporate Tax?",
      answer: (
        <>
          <p>
            Yes. The application of UAE Corporate Tax does not differentiate between entities that are locally or
            internationally owned.
          </p>
          <p className="mt-2">
            Juridical persons incorporated or resident in the UAE, or foreign entities with a Permanent Establishment or
            taxable nexus in the UAE, are subject to UAE Corporate Tax irrespective of the residence or nationality of
            their founders or ultimate owners.
          </p>
        </>
      ),
    },
    {
      question: "Will UAE Corporate Tax be applicable to businesses in all Emirates?",
      answer: "Yes. UAE Corporate Tax is a federal tax and applies across all Emirates.",
    },
    {
      question: "Will I have to pay UAE Corporate Tax alongside Emirate level taxes?",
      answer: (
        <>
          <p>
            Businesses engaged in the extraction of the UAE’s natural resources and in certain non-extractive activities
            that are subject to Emirate-level taxation will be outside the scope of UAE Corporate Tax, subject to meeting
            certain conditions.
          </p>
          <p className="mt-2">
            Other businesses may be subject to both Corporate Tax and Emirate-level taxation. Emirate-level taxes paid
            cannot be credited against, or reduce, the amount of Corporate Tax payable.
          </p>
        </>
      ),
    },
    {
      question: "Will UAE Corporate Tax replace VAT in the UAE?",
      answer: "No. Corporate Tax and VAT are different taxes and both apply in the UAE.",
    },
    {
      question: "Will I have to pay UAE Corporate Tax alongside VAT in the UAE?",
      answer:
        "If you are registered for VAT, you will handle VAT and Corporate Tax separately. Even if you are not registered for VAT, you may still be subject to Corporate Tax.",
    },
    {
      question: "Will UAE Corporate Tax replace Excise Tax in the UAE?",
      answer: "No. Corporate Tax and Excise Tax are different taxes and both apply in the UAE.",
    },
    {
      question:
        "Will I continue to pay service fees to the Federal and Emirate Governments now that the UAE has introduced Corporate Tax?",
      answer: (
        <>
          <p>
            Yes. Applicable service fees will continue to be payable to the Federal or relevant Emirate Government.
          </p>
          <p className="mt-2">
            Business setup, licence renewal and other Government fees and charges incurred in the ordinary course of
            business should generally be deductible expenses for UAE Corporate Tax purposes.
          </p>
        </>
      ),
    },
    {
      question:
        "Will I need to consider the UAE’s international agreements for UAE Corporate Tax purposes?",
      answer: (
        <>
          <p>
            In-force international agreements (including double tax treaties) to which the UAE is a party should be
            considered under the UAE Corporate Tax regime.
          </p>
          <p className="mt-2">
            In case of a conflict between the Corporate Tax Law and an international agreement with respect to the right
            to tax certain income, the international agreement may limit the application of UAE Corporate Tax.
          </p>
        </>
      ),
    },
    {
      question: "What will be the role of the Federal Tax Authority?",
      answer:
        "The Federal Tax Authority is responsible for the administration, collection, and enforcement of UAE Corporate Tax and other federal taxes, including issuing guidance and responding to clarifications.",
    },
    {
      question: "What will be the role of the Ministry of Finance?",
      answer:
        "The Ministry of Finance is the competent authority for bilateral/multilateral tax agreements and the international exchange of information for tax purposes. It can also issue implementing regulations for UAE Corporate Tax and other federal taxes.",
    },
  ];

  return (
    <section key={replayKey} className="w-full bg-white">
      {/* Banner — PURE ZOOM ONLY */}
      <div className="w-screen h-[50vh] overflow-hidden">
        <motion.img
          src="/1UAECORPORATE.avif"
          alt="Corporate Tax Services Banner"
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
            UAE CORPORATE TAX
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              Corporate Tax has been introduced in the UAE with effect from 1 June 2023. We provide Corporate Tax Impact
              Assessment and Analysis, Registration, return filing, and Corporate Tax Consultancy tailored to your
              business and operations.
            </motion.p>
            <motion.p variants={slideLtoR}>
              UAE Corporate Services also cover company formation, compliance, governance, and other matters to help you
              establish and maintain a presence while meeting local regulations.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our expert team supports you in navigating the regulatory landscape efficiently and effectively with
              personalized assistance, expert advice, and practical solutions.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose PRISH — alternating slide directions */}
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
          {[
            {
              title: "Company Formation",
              description:
                "We assist with setup: selecting the right legal structure, documentation, licensing, and registrations with authorities.",
            },
            {
              title: "Corporate Governance",
              description:
                "Guidance on best practices and frameworks that ensure transparency, accountability, and regulatory compliance.",
            },
            {
              title: "Compliance Management",
              description:
                "Navigate UAE company law, tax regulations, employment laws, and other applicable rules with confidence.",
            },
            {
              title: "Corporate Restructuring",
              description:
                "Support for mergers, acquisitions, reorganizations, and liquidations to optimize structure and meet strategic goals.",
            },
          ].map((item, idx) => (
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

      {/* FAQ — fade up + accordion */}
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
                    <div
                      id={`faq-${idx}`}
                      className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base"
                    >
                      {typeof faq.answer === "string" ? <p>{faq.answer}</p> : faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Send Query Form — bottom -> top */}
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

      {/* Back Button */}
      <motion.div
        className="mt-16 mb-10 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Link
          to="/services/taxation"
          className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to TAXATION
        </Link>
      </motion.div>
    </section>
  );
}
