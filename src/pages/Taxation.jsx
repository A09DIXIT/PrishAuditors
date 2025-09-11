import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

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

/* New: card pop-in */
const cardIn = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: easeOutExpo } },
};

/* Replay intro when user scrolls back to the very top */
const TOP_REPLAY_THRESHOLD = 12;
const AWAY_THRESHOLD = 160;

// Services Array
const services = [
  {
    title: "Value Added Tax (VAT)",
    description:
      "Assisting businesses in the UAE with the VAT registration process, compliance on VAT returns, records, accounting systems and VAT planning.",
    link: "/vat",
    bg: "/1VAT1.jpg",
  },
  {
    title: "UAE Corporate Tax",
    description:
      "Corporate Tax in UAE effective from 1st June 2023. We provide Impact Assessment, Registration, Return Filing, and Consultancy.",
    link: "/corporate-tax",
    bg: "/1UAECT.jpeg",
  },
  {
    title: "Transfer Pricing",
    description:
      "Compliance with UAE and global transfer pricing regulations including documentation, adjustments, and strategic advisory.",
    link: "/transfer-pricing",
    bg: "/1TP1.jpg",
  },
  {
    title: "Tax Residency Certificate (TRC)",
    description:
      "Professional assistance in obtaining UAE TRC to utilize double taxation avoidance agreements for individuals and entities.",
    link: "/trc",
    bg: "/1TRC.jpg",
  },
];

const Taxation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // replay-on-top mechanism
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

  return (
    <div key={replayKey} className="w-full">
      {/* Banner — PURE ZOOM ONLY */}
      <div className="w-screen h-[50vh] overflow-hidden">
        <motion.img
          src="/taxatoin1.webp"
          alt="Taxation Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Intro Section — immediate + replay on top */}
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
            TAXATION SERVICES
          </motion.h1>

          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              Taxation services in the UAE play a crucial role in helping individuals and businesses navigate the complexities of tax laws and regulations, optimize their tax positions, and ensure compliance with tax requirements.
            </motion.p>
            <motion.p variants={slideLtoR}>
              By leveraging the expertise of tax professionals and consultants at <b>PRISH</b>, our clients can effectively manage their taxation risks and obligations while maximizing tax efficiency and compliance procedure.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Grid — card pop-in + overlay text animates */}
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="grid mt-0 md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardIn}
              className="relative rounded-lg overflow-hidden shadow-lg group"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Image (static) */}
              <img
                src={item.bg}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay content (animates) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.45 }}
              >
                <motion.h2
                  className="text-xl font-bold text-white mb-2"
                  variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  className="text-white text-sm mb-3 leading-relaxed"
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
            </motion.div>
          ))}
        </div>
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
    </div>
  );
};

export default Taxation;
