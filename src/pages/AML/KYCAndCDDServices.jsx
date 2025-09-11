// src/pages/KYCAndCDDServices.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";
import {
  FileText,
  CloudUpload,
  Users,
  MessageCircle,
  Search,
  Shield,
  CheckCircle2,
  FileSignature,
  UserCheck,
} from "lucide-react";

const KYCAndCDDServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQSection = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  /* ===== Easing & Variants (consistent site-wide) ===== */
  const easeOutExpo = [0.16, 1, 0.3, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOutExpo },
    },
  };

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };

  const slideLtoR = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: easeOutExpo },
    },
  };

  const slideRtoL = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: easeOutExpo },
    },
  };

  /* Replay intro when user scrolls back to the very top */
  const TOP_REPLAY_THRESHOLD = 12;
  const AWAY_THRESHOLD = 160;
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

  /* ===== Content arrays (unchanged) ===== */
  const methodologySteps = [
    { icon: <FileText size={32} className="text-purple-600" />, title: "Issuance of Customer Onboarding Kit" },
    { icon: <CloudUpload size={32} className="text-purple-600" />, title: "Data Acquisition on secured and shared cloud-based repository" },
    { icon: <Users size={32} className="text-purple-600" />, title: "Data Processing by qualified AML consultants" },
    { icon: <MessageCircle size={32} className="text-purple-600" />, title: "Client communication for deficiency in data" },
    { icon: <Search size={32} className="text-purple-600" />, title: "Name Screening, Due Diligence, Enhanced Due Diligence" },
    { icon: <Shield size={32} className="text-purple-600" />, title: "Risk Assessment" },
    { icon: <CheckCircle2 size={32} className="text-purple-600" />, title: "Data Review by QC team" },
    { icon: <FileSignature size={32} className="text-purple-600" />, title: "Remedial Measures (SAR/STR/FFR/PNMR/Client Rejection)" },
    { icon: <UserCheck size={32} className="text-purple-600" />, title: "Customer Onboarding Completion" },
  ];

  const servicesOffered = [
    "Customer identification program (CIP)",
    "Customer due diligence (CDD)",
    "Ultimate Beneficial Owner Identification",
    "Enhanced due diligence (EDD)",
    "Risk assessment and customer risk rating (CRR)",
    "Sanctions screening (UAE Local Terrorist List, UNSC, OFAC, EU, etc.)",
    "Politically exposed person screening",
    "Adverse media screening",
    "KYC remediation and renewals",
    "Alert investigations",
    "Customizable due diligence reports",
    "Data auditing, cleansing, and validation",
  ];

  const faqItems = [
    {
      question: "How do you ensure data security during KYC processing?",
      answer:
        "We use secure, cloud-based repositories with encryption at rest and in transit, ensuring client data is protected at all times.",
    },
    {
      question: "Can you handle high volumes of onboarding requests?",
      answer:
        "Yes, our scalable processes and qualified AML consultants can manage large volumes efficiently without compromising quality.",
    },
    {
      question: "What is included in Enhanced Due Diligence?",
      answer:
        "EDD includes deeper investigation into high-risk customers, PEP screening, adverse media checks, and thorough background validation.",
    },
    {
      question: "How fast can onboarding be completed?",
      answer:
        "On average, onboarding completes within 24–48 hours, depending on complexity and responsiveness of the client.",
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
          src="/1cdd.webp"
          alt="KYC and CDD Services"
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

      {/* Introduction — container + stagger + slide (with replay) */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 rounded-lg shadow-md"
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
            className="text-black text-4xl font-semibold text-center mb-10"
            variants={slideLtoR}
          >
            KYC AND CDD SERVICES
          </motion.h1>
          <motion.div
            className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              AML UAE provides managed KYC and CDD Services to ensure compliance
              with AML regulatory requirements and reduce operational costs.
            </motion.p>
            <motion.p variants={slideLtoR}>
              DNFBPs and FIs in the UAE often struggle with hiring qualified AML
              professionals. Internal inefficiencies and high fines for
              non-compliance make outsourced solutions more viable.
            </motion.p>
            <motion.p variants={slideRtoL}>
              Our managed KYC and CDD Services allow businesses to lower
              compliance costs, stay up to date with AML regulations, and
              identify risks early, while focusing on their core operations.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Offered — staggered grid with alternating slides */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-[#163c4f] mb-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          Managed KYC and CDD Services We Offer
        </motion.h3>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {servicesOffered.map((service, idx) => (
            <motion.div
              key={idx}
              variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#0d3c58]"
              style={{ willChange: "transform, opacity" }}
            >
              <p className="text-gray-700 text-base">{service}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Key Differentiators — staggered grid; keeps your centering for odd last card */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-[#163c4f] mb-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          Key Differentiators
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
              title: "Expertise in UAE AML Laws",
              description:
                "In-depth knowledge of Federal AML/CFT regulations and local compliance requirements.",
            },
            {
              title: "Tailored AML Programs",
              description:
                "Customized compliance solutions based on business size, type, and risk profile.",
            },
            {
              title: "Experienced Compliance Professionals",
              description:
                "A team with diverse experience in financial crime prevention and regulatory audits.",
            },
            {
              title: "End-to-End Support",
              description:
                "From registration to implementation, audit, and training—everything in one place.",
            },
            {
              title: "Tech-Driven AML Solutions",
              description:
                "We use automation tools to streamline AML workflows and reporting procedures.",
            },
          ].map((item, idx, arr) => {
            const isLastOdd = arr.length % 2 !== 0 && idx === arr.length - 1;

            const card = (
              <motion.div
                key={idx}
                variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
                className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#0d3c58] w-full"
                style={{ willChange: "transform, opacity" }}
              >
                <h4 className="text-xl font-semibold text-[#0d3c58] mb-2">
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

      {/* Methodology — staggered cards */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-[#163c4f] mb-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          KYC and CDD Managed Service Methodology
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {methodologySteps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              style={{ willChange: "transform, opacity" }}
            >
              {step.icon}
              <h4 className="text-lg font-semibold text-gray-800 mt-4">
                {step.title}
              </h4>
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
                  onClick={() => toggleFAQSection(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFAQSection(index);
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
      <div className="mb-10">
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

export default KYCAndCDDServices;
