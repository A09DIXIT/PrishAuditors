import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

/* ========== Shared easing & variants ========== */
const easeOutExpo = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

const container = {
  hidden: { opacity: 1 },
  show:   { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const slideLtoR = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

const slideRtoL = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

// Page fade (no horizontal slide)
const pageVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: easeOutExpo } },
  exit:    { opacity: 0, transition: { duration: 0.3, ease: easeOutExpo } },
};

/* ========== Data ========== */
const services = [
  {
    title: "Statutory Audit",
    description:
      "We will be performing a thorough examination of financial records and providing assurance on the accuracy and reliability of your company’s financial statements.",
    link: "/statutory-audit",
    bg: "/StatutoryAudit.jpg",
  },
  {
    title: "Concurrent Audit",
    description:
      "It would be a real-time examination of financial transactions and processes conducted by us as an internal or external auditor to provide you with the timely feedback and ensure the effectiveness of internal controls and financial records.",
    link: "/concurrent-audit",
    bg: "/1ConcurrentAudit.jpeg",
  },
  {
    title: "Forensic Audit",
    description:
      "It will be a specialized examination of financial records, transactions, and documents conducted with the objective of identifying uncovering fraud, financial misconduct, or irregularities through gathering evidence, analyzing data, and identifying perpetrators of fraudulent activities.",
    link: "/forensic-audit",
    bg: "/1InternalAudit.jpg",
  },
  {
    title: "Inventory audit and verification",
    description:
      "Confirming the existence, completeness, and accuracy of inventory records and to assess the effectiveness of internal controls over inventory management process and suggesting the process improvement measures.",
    link: "/inventory-audit",
    bg: "/1ForensicAudit.jpg",
  },
  {
    title: "Mystery Audit",
    description:
      "Core assessments conducted by us as an independent evaluator to measure and evaluate the quality of service, compliance with policies and procedures, and overall customer experience with your company’s brand.",
    link: "/mystery-audit",
    bg: "/1MnagementAudit.jpeg",
  },
];

const TOP_REPLAY_THRESHOLD = 12;
const AWAY_THRESHOLD = 160;

const Audit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Replay animations when user returns to the very top
  const [replayKey, setReplayKey] = useState(0);
  const wasAwayRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (y > AWAY_THRESHOLD) wasAwayRef.current = true;
      if (y <= TOP_REPLAY_THRESHOLD && wasAwayRef.current) {
        wasAwayRef.current = false;
        setReplayKey((k) => k + 1); // remount -> reset animations
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.section
      key={replayKey}
      className="pt-0 pb-20 bg-white"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Top Banner — pure zoom (no slide) */}
      <div className="w-screen h-[40vh] md:h-[50vh] overflow-hidden">
        <motion.img
          src="/Audit-Assurance.png"
          alt="Audit Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.0, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Intro — plays immediately at top; also replays when returning to top */}
      <div className="px-4 sm:px-6 md:px-16 mt-8 md:mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          variants={container}
          initial="hidden"
          animate="show"               // play on load at top
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.4 },
          }}
        >
          <motion.h1
            className="text-black text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-10 font-semibold text-center px-2 sm:px-4"
            variants={slideLtoR}
            style={{ willChange: "transform, opacity" }}
          >
            AUDITING AND ASSURANCE
          </motion.h1>

          <motion.p
            className="text-gray-700 text-sm sm:text-base md:text-xl leading-relaxed max-w-6xl mx-auto text-center"
            variants={slideRtoL}
            style={{ willChange: "transform, opacity" }}
          >
            We at <b>PRISH</b> have our core competence in the field of Audit
            and Assurance. Each of our audit assignments is customized as per
            audit statutory requirements governed by IFRS/ IAS. We ensure
            efficient and dedicated audit planning, execution and reporting
            supervised and reviewed carefully by our experts.
          </motion.p>
        </motion.div>
      </div>

      {/* Services Grid — images stay still; only text animates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((audit, idx) => {
            const isMysteryAudit = audit.title === "Mystery Audit";

            const card = (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden shadow-lg group"
                style={{ willChange: "transform, opacity" }}
              >
                {/* image is plain — no motion */}
                <img
                  src={audit.bg}
                  alt={audit.title}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* overlay content (text only) */}
                <motion.div
                  className="absolute inset-0 bg-black/70 p-4 sm:p-6 flex flex-col justify-end"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.45 }}
                >
                  <motion.h2
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 drop-shadow-lg"
                    variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
                  >
                    {audit.title}
                  </motion.h2>

                  <motion.p
                    className="text-white text-xs sm:text-sm md:text-base mb-3 leading-relaxed drop-shadow-md"
                    variants={fadeUp}
                  >
                    {audit.description}
                  </motion.p>

                  <motion.div variants={fadeUp}>
                    <Link
                      to={audit.link}
                      className="text-blue-300 hover:underline text-xs sm:text-sm font-medium"
                    >
                      Read more →
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            );

            return isMysteryAudit ? (
              <div key={idx} className="md:col-span-2 flex justify-center">
                <div className="w-full md:w-[48%]">{card}</div>
              </div>
            ) : (
              <div key={idx}>{card}</div>
            );
          })}
        </div>
      </div>

      {/* Send Query Form — bottom -> top, retriggers on view */}
      <motion.div
        className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        style={{ willChange: "transform, opacity" }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
          Send a Query
        </h2>
        <SendQueryForm />
      </motion.div>
    </motion.section>
  );
};

export default Audit;
