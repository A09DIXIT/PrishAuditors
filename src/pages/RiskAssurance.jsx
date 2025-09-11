import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

/* ==================== Shared easing & variants ==================== */
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

const textStagger = {
  hidden: { opacity: 1 },
  show:   { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

/* Replay animations when user returns to very top */
const TOP_REPLAY_THRESHOLD = 12;
const AWAY_THRESHOLD = 160;

export default function RiskAssurance() {
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

  const riskSlides = [
    {
      title: "Internal Audit",
      description:
        "Internal auditing is a vital function within organizations that helps to enhance governance, risk management, and control processes. Conducting an independent assessment, objective assurance and consulting activity designed to add value and improve an organization's operational and financial controls as per the best industry practices.",
      link: "/internal-audit",
      image: "/Internal-Audit.jpg",
    },
    {
      title: "Standard Operating Procedures (SOPs)",
      description:
        "This would include a comprehensive range of services including preparation and development of detailed process SOPs with process flowcharts and narratives with Delegation of Authority (DOA) Matrix, review of established SOPs, implementation of established SOPs by providing employee trainings with an objective of overall organizational effectiveness.",
      link: "/sops",
      image: "/SOP.jpg",
    },
    {
      title: "Risk Control Matrix (RCM)",
      description:
        "Risk Control Matrix (RCM) is a valuable tool for organizations to systematically identify, assess, and manage risks, as well as evaluate the effectiveness of control measures in mitigating those risks. We will be providing a constant support system in developing, reviewing and monitoring RCM based on your business operations for different processes.",
      link: "/rcm",
      image: "/RCM1.jpg",
    },
  ];

  return (
    <section key={replayKey} className="pt-0 pb-20 bg-white relative overflow-hidden">
      {/* Banner — PURE ZOOM ONLY (no slide) */}
      <div className="w-screen h-[50vh] overflow-hidden">
        <motion.img
          src="/risk2.jpg"
          alt="Risk Assurance Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
          loading="lazy"
        />
      </div>

      {/* Intro — immediate on load and replay on return to top */}
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
        >
          <motion.h1
            className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4"
            variants={slideLtoR}
          >
            RISK ASSURANCE
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              Risk assurance services encompass a range of strategies, processes, and techniques aimed at identifying,
              assessing, mitigating, and monitoring risks that may impact an organization's objectives. PRISH aims to
              provide a range of services from proactively identifying process risks to mitigating and monitoring them
              by controls in place to outperform in the dynamic business environment.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Cards Grid — images static; overlay text animates and is visible */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {riskSlides.map((item, index) => {
            const isLastCard = item.title === "Risk Control Matrix (RCM)";

            const card = (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg group w-full"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Static image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Animated overlay text (ensure on top + readable) */}
                <motion.div
                  className="absolute inset-0 z-10 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  variants={textStagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.45 }}
                >
                  <motion.h2
                    className="text-2xl font-semibold text-white mb-2 drop-shadow-lg"
                    variants={index % 2 === 0 ? slideLtoR : slideRtoL}
                  >
                    {item.title}
                  </motion.h2>

                  <motion.p
                    className="text-white text-sm mb-3 leading-relaxed drop-shadow-md"
                    variants={fadeUp}
                  >
                    {item.description}
                  </motion.p>

                  <motion.div variants={fadeUp}>
                    <Link
                      to={item.link}
                      className="text-blue-300 hover:underline text-sm font-medium"
                    >
                      Read more →
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            );

            return isLastCard ? (
              <div key={index} className="md:col-span-2 flex justify-center">
                <div className="w-full md:w-[48%]">{card}</div>
              </div>
            ) : (
              <div key={index}>{card}</div>
            );
          })}
        </div>
      </div>

      {/* Send Query Form — bottom -> top */}
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
