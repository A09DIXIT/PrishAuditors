// src/pages/AccountingBookkeeping.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const AccountingBookkeeping = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  /* ===== Easing & Variants (site-wide) ===== */
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

  /* ===== SLOW-MO INTRO variants (only for the gradient intro block) ===== */
  const introContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.35, delayChildren: 0.25 }, // slower stagger
    },
  };

  const slideLtoRSlow = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 1.25, ease: easeOutExpo } },
  };

  const slideRtoLSlow = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 1.25, ease: easeOutExpo } },
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
      question: "What is the difference between accounting and bookkeeping?",
      answer:
        "Accounting involves interpreting, analysing, and summarizing financial data to provide insights for decision-making, while bookkeeping involves recording financial transactions and maintaining financial records.",
    },
    {
      question: "Why do businesses need accounting and bookkeeping services?",
      answer:
        "Accounting and bookkeeping services help businesses track financial transactions, comply with tax regulations, make informed decisions, and monitor financial health.",
    },
    {
      question: "What specific tasks are included in accounting and bookkeeping services?",
      answer:
        "Accounting services may include financial statement preparation, tax planning, and analysis of financial data, while bookkeeping services typically involve recording transactions, reconciling accounts, and managing accounts payable and accounts receivable.",
    },
    {
      question: "How often should I update my accounting records?",
      answer:
        "It's recommended to update accounting records regularly, ideally on a daily or weekly basis, to ensure accuracy and timely financial reporting.",
    },
    {
      question: "Can outsourcing accounting and bookkeeping services save me time and money?",
      answer:
        "Yes, outsourcing accounting and bookkeeping services can save time and resources for businesses, allowing them to focus on core activities while ensuring accuracy and compliance in financial management.",
    },
    {
      question: "How do I choose the right accounting and bookkeeping service provider?",
      answer:
        "When choosing a service provider, consider factors such as expertise, experience, reputation, services offered, technology used, and pricing.",
    },
    {
      question: "What are the benefits of outsourcing accounting and bookkeeping services?",
      answer:
        "Benefits include improved accuracy and compliance, cost savings, access to expertise, streamlined processes, and enhanced financial reporting.",
    },
    {
      question: "Can accounting and bookkeeping services help with tax preparation?",
      answer:
        "Yes, accounting and bookkeeping services often include tax preparation services, ensuring compliance with tax regulations and optimizing tax efficiency for businesses.",
    },
    {
      question: "How do businesses measure the ROI of accounting and bookkeeping services?",
      answer:
        "Businesses can measure ROI by evaluating improvements in efficiency, productivity, customer satisfaction, security posture, and cost savings achieved through accounting and bookkeeping services.",
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
          src="/accounting1.avif"
          alt="Accounting & Bookkeeping"
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

      {/* Intro — now SLOW-MO */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          variants={introContainer}        // 👈 slower stagger & delay
          initial="hidden"
          animate="show"
          viewport={{ once: false }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.5 }, // slightly slower hover ease-in
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.h1
            className="text-black text-4xl font-semibold text-center mb-10"
            variants={slideLtoRSlow}       // 👈 slower slide
          >
            ACCOUNTING AND BOOKKEEPING
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={introContainer}      // 👈 keep slow stagger for children
          >
            <motion.p variants={slideRtoLSlow}>
              Accounting and bookkeeping services play a crucial role in helping
              businesses maintain accurate financial records, comply with
              regulatory requirements, and make informed financial decisions to
              support their growth and success.
            </motion.p>
            <motion.p variants={slideLtoRSlow}>
              While providing accounting and bookkeeping services, we ensure that
              financial statements comply with the International Financial
              Reporting Standards (IFRS) and we are committed to providing the
              services with the highest standards of integrity and quality.
            </motion.p>
            <motion.p variants={slideRtoLSlow}>
              Our team is fully capable with most of accounting software like
              Tally, QuickBooks, ZOHO, Xero, Microsoft Dynamics 365, SAP, etc.
              Our approach is proactive, detail-oriented, and focused on
              high-quality services that meet client needs.
            </motion.p>
            <motion.p variants={slideLtoRSlow}>
              Our approach is understanding the importance of accurate financial
              records for business success. It is proactive, detail-oriented, and
              focused on delivering high-quality services that meet our clients'
              needs.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose Us — unchanged */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-[#163c4f] mb-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          Why Choose PRISH?
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
              title: "Accounts Receivable Management:",
              description:
                "We ensure accurate and timely invoicing, assess, and manage credit risk, develop customized collection strategies, handle disputes and discrepancies, and accurately apply payments received to the appropriate customer accounts.",
            },
            {
              title: "Accounts Payable Management:",
              description:
                "In this service, we handle the receipt, review of vendor invoices, manage payment processing, maintain vendor accounts, assist with expense reporting, and lastly reconcile accounts payable records with vendor statements.",
            },
            {
              title: "Bank Reconciliation:",
              description:
                "We carefully match each transaction in the company’s accounting records with corresponding bank entries on the bank statement, identify discrepancies, diligently resolve the discrepancies, and provide the reconciliation reports. (SOPs)",
            },
            {
              title: "General Ledger Maintenance:",
              description:
                "We accurately record all financial transactions in the general ledger, do reconciliation with subsidiary ledgers, perform month-end closing procedures, and lastly prepare financial reports.",
            },
            {
              title: "Payroll and Employee Management:",
              description:
                "We handle all aspects of payroll processing, manage employee health insurance programs, ensure compliance with labour laws, help in leave and attendance management, and properly facilitate the onboarding process for new hires.",
            },
            {
              title: "Financial Analysis:",
              description:
                "We analyse financial statements, calculate, and interpret key financial ratios, identify, and analyse financial trends, compare budgeted financial data with actual performance, and use quantitative techniques and historical data to forecast the future.",
            },
            {
              title: "Financial Reporting:",
              description:
                "We prepare the financial statements, provide customized management reporting, ensure financial reports comply with regulatory requirements, offer consolidated financial reporting services to aggregate financial data from multiple entities, and lastly analyse financial data and provide insights to help stakeholders to understand financial statements.",
            },
          ].map((item, idx, arr) => {
            const isLastOdd = arr.length % 2 !== 0 && idx === arr.length - 1;

            const card = (
              <motion.div
                key={idx}
                variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
                className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f] w-full"
                style={{ willChange: "transform, opacity" }}
              >
                <h4 className="text-xl font-semibold text-[#163c4f] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-base">{item.description}</p>
              </motion.div>
            );

            return isLastOdd ? (
              <div key={`wrap-${idx}`} className="md:col-span-2 flex justify-center">
                <div className="md:w-[48%] w-full">{card}</div>
              </div>
            ) : (
              <div key={`wrap-${idx}`}>{card}</div>
            );
          })}
        </motion.div>
      </div>

      {/* FAQ — unchanged */}
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

      {/* Contact Form — unchanged */}
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

export default AccountingBookkeeping;
