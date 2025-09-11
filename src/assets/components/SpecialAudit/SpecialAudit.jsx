import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

/* ===== Shared easing & variants ===== */
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

const TOP_REPLAY_THRESHOLD = 12;
const AWAY_THRESHOLD = 160;

const audits = [
  {
    title: "Gold Audit",
    content:
      '"Gold Audit" typically refers to the process of auditing gold and jewelry traders or dealers to ensure compliance with relevant regulations and standards due to the significant role of the gold and jewelry industry in the country\'s economy.',
    path: "/gold-audit",
    image: "/goldAudit1.jpg",
  },
  {
    title: "System Audit",
    content:
      "System audits are critical for identifying IT-related risks, enhancing security posture, improving operational efficiency, and ensuring compliance with regulatory requirements and industry best practices through mitigating IT risks, strengthening IT governance frameworks and safeguarding IT assets and data.",
    path: "/system-audit",
    image: "/systemAudit.avif",
  },
  {
    title: "Transaction Audit",
    content:
      "Transaction Audits will involve the examination and review of specific financial transactions within an organization to ensure accuracy, compliance, and integrity. In this, we will focus on verifying the completeness, validity, and appropriateness of individual transactions recorded in the organization's financial records.",
    path: "/transaction-audit",
    image: "/1T-A.jpg",
  },
  {
    title: "RERA Audit",
    content:
      "Real Estate Regulatory Authority (RERA) is responsible for regulating the real estate sector in UAE, especially in Dubai. RERA audits are conducted to ensure compliance with regulations, transparency and fairness in real estate transactions by promoting confidence and trust among investors, buyers and other stakeholders.",
    path: "/rera-audit",
    image: "/1RERA-AUDIT.webp",
  },
  {
    title: "Sales Tax Certification Audits",
    content:
      "Sales Certification refers to a process whereby companies obtain accreditation to engage in sales activities within specific industries. Obtaining sales certification demonstrates competence, professionalism, and compliance with regulatory standards, enhancing the credibility and trustworthiness of the organization's activities.",
    path: "/sales-tax-certification-audit",
    image: "/1SALES-Audit.jpg",
  },
];

export default function SpecialAudit() {
  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Replay everything when user returns to the very top */
  const [replayKey, setReplayKey] = useState(0);
  const wasAwayRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (y > AWAY_THRESHOLD) wasAwayRef.current = true;
      if (y <= TOP_REPLAY_THRESHOLD && wasAwayRef.current) {
        wasAwayRef.current = false;
        setReplayKey((k) => k + 1); // soft remount -> reset animations
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section key={replayKey} className="bg-white max-w-8xl">
      {/* Banner — PURE ZOOM ONLY (no left/right movement) */}
      <div className="w-screen h-[50vh] overflow-hidden mt-0 relative">
        <motion.img
          src="/Special-Audit123.jpeg"
          alt="Special Audit Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
          loading="lazy"
        />
      </div>

      {/* Intro — heading L→R, text alternates R→L then L→R; plays at top & on top return */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-12 px-4 sm:px-6 lg:px-10 rounded-lg shadow-md"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h2
            className="text-black text-4xl font-semibold text-center mb-6"
            variants={slideLtoR}
          >
            SPECIAL AUDITS
          </motion.h2>

          <motion.div
            className="text-gray-800 text-base md:text-xl leading-relaxed max-w-5xl mx-auto text-center space-y-4"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              Special audits referred to as an extraordinary audit, is a type of audit that is conducted in response to specific circumstances or events that warrant closer examination beyond the scope of regular audits.
            </motion.p>
            <motion.p variants={slideLtoR}>
              It typically involves a detailed examination of specific financial records, transactions, systems or procedures within an organization. Unlike regular audits, which are routine and cover broader aspects of financial reporting, special audits are targeted and focused on particular areas of concern or interest.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Cards Grid — images stay static; overlay text animates */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {audits.map((audit, idx) => {
            const isLast = audit.title === "Sales Tax Certification Audits";

            const card = (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden shadow-lg group"
                style={{ willChange: "transform, opacity" }}
              >
                {/* image is static (no slide) */}
                <img
                  src={audit.image}
                  alt={audit.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
                {/* overlay content animates */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end"
                  variants={container}
                >
                  <motion.h2
                    className="text-xl font-bold text-white mb-2"
                    variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
                  >
                    {audit.title}
                  </motion.h2>
                  <motion.p
                    className="text-white text-sm mb-3 leading-relaxed"
                    variants={fadeUp}
                  >
                    {audit.content}
                  </motion.p>
                  <motion.div variants={fadeUp}>
                    <Link
                      to={audit.path}
                      className="text-blue-300 hover:underline text-sm font-medium"
                    >
                      Read more →
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            );

            return isLast ? (
              <div key={idx} className="md:col-span-2 flex justify-center">
                <div className="w-full md:w-[48%]">{card}</div>
              </div>
            ) : (
              <div key={idx}>{card}</div>
            );
          })}
        </motion.div>
      </div>

      {/* Query Form — bottom -> top (re-triggers on view) */}
      <motion.div
        className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        style={{ willChange: "transform, opacity" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Send a Query</h2>
        <SendQueryForm />
      </motion.div>
    </section>
  );
}
