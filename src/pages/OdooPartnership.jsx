import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

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

export default function OdooPartnership() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // soft remount key for replay-on-top
  const [replayKey, setReplayKey] = useState(0);
  const wasAwayRef = useRef(false);

  // hero image source + graceful fallback (files should be in /public)
  const [heroSrc, setHeroSrc] = useState("/1partner-odoo.jpg");

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

  const highlights = [
    {
      title: "Official Odoo Channel Partnership",
      desc: "We’re recognized to consult, implement, and extend Odoo modules—end-to-end.",
    },
    {
      title: "Tailored ERP at Great Value",
      desc: "Right-sized configurations and customizations that fit your process and budget.",
    },
    {
      title: "Rapid, Smooth Onboarding",
      desc: "Thanks to Odoo’s seamless support and our proven deployment playbooks.",
    },
    {
      title: "Scalable & Integrated Stack",
      desc: "From CRM to Accounting, Inventory to HR—Odoo grows with your business.",
    },
  ];

  const modules = [
    "CRM",
    "Sales",
    "Accounting",
    "Inventory",
    "Manufacturing",
    "HR & Payroll",
    "Projects",
    "Helpdesk",
    "Purchasing",
    "Website & eCommerce",
    "Marketing Automation",
    "Studio / Custom Apps",
  ];

  const steps = [
    { step: "01", title: "Discovery & Fitment", desc: "Process walkthroughs, gap-fit analysis, and success criteria." },
    { step: "02", title: "Solution Design", desc: "Module mapping, data model, and customization blueprint." },
    { step: "03", title: "Build & Configure", desc: "Tailored modules, integrations, and initial data setup." },
    { step: "04", title: "UAT & Training", desc: "Hands-on user testing and role-based enablement." },
    { step: "05", title: "Go-Live & Support", desc: "Hypercare, enhancements, and continuous optimization." },
  ];

  const faqs = [
    {
      q: "What does the PRISH × Odoo partnership mean for me?",
      a: "You get a certified team, priority access to Odoo resources, best practices, and a streamlined path from scoping to go-live—lower risk and faster time-to-value.",
    },
    {
      q: "Can you customize Odoo to match our exact processes?",
      a: "Absolutely. We tailor modules, add custom objects, build reports/dashboards, and integrate with your other systems using Odoo Studio or bespoke development.",
    },
    {
      q: "How fast can we go live?",
      a: "Depends on scope. Simple module sets can be delivered quickly; multi-module rollouts follow a phased roadmap. We’ll recommend the leanest path based on your goals.",
    },
  ];

  return (
    <section key={replayKey} className="pt-0 pb-20 bg-white">
      {/* ===== Hero: Zoom banner with subtle overlay and badges ===== */}
      <div className="relative w-screen h-[65vh] overflow-hidden">
        <picture>
          {/* If you have a WebP in /public, it will be preferred */}
          <source srcSet="/1parterner-odoo.jpeg" type="image/webp" />
          <motion.img
            src={heroSrc}
            onError={() => setHeroSrc("/1parterner-odoo.jpeg")} // fallback to jpeg if jpg fails
            alt="PRISH × Odoo Partnership"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "center 35%", willChange: "transform" }}
            initial={{ scale: 1.06, transformOrigin: "center center" }}
            animate={{ scale: 1 }}
            transition={{ duration: 5.5, ease: easeOutExpo }}
            loading="eager"
            decoding="async"
            fetchpriority="high"
            draggable="false"
          />
        </picture>

        {/* gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />

        {/* floating blurred blobs (AMLUAE-style ambiance) */}
        <div className="pointer-events-none">
          <div className="absolute -top-10 -left-10 w-56 h-56 bg-[#0d3c58] opacity-30 rounded-full blur-3xl" />
          <div className="absolute -bottom-8 right-10 w-64 h-64 bg-fuchsia-300 opacity-25 rounded-full blur-3xl" />
        </div>

        {/* hero content */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div className="max-w-5xl text-center" variants={container} initial="hidden" animate="show">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-white text-sm mb-4 border border-white/20"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Official Channel Partner
            </motion.div>

            <motion.h1 variants={slideLtoR} className="text-white text-3xl md:text-5xl font-semibold leading-tight">
              PRISH × Odoo Partnership
            </motion.h1>

            <motion.p variants={slideRtoL} className="text-white/90 mt-4 md:text-lg max-w-3xl mx-auto">
              Innovative, scalable, and integrated ERP solutions—implemented with care, precision, and speed.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-3">
              <a
                href="#query"
                className="px-5 py-2.5 rounded-md bg-[#0d3c58] text-white font-medium hover:bg-[#0b334a] transition"
              >
                Send a Query
              </a>
              <a
                href="mailto:info@prish.ae"
                className="px-5 py-2.5 rounded-md bg-white text-[#0d3c58] font-medium hover:bg-slate-50 transition"
              >
                Email Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ===== Intro block (exact content provided) ===== */}
      <div className="relative px-6 md:px-16 mt-10 max-w-7xl mx-auto">
        {/* subtle background blobs */}
        <div className="absolute -z-10 -top-10 right-0 w-48 h-48 bg-amber-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute -z-10 bottom-0 left-0 w-64 h-64 bg-sky-200 rounded-full blur-3xl opacity-30" />

        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-12 px-4 sm:px-6 lg:px-10 rounded-lg shadow-md"
          variants={container}
          initial="hidden"
          animate="show"
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.4 },
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.h2 variants={slideLtoR} className="text-black text-3xl md:text-4xl font-semibold text-center mb-6">
            Exciting News! 🚀
          </motion.h2>

          <motion.div
            variants={container}
            className="text-[#0a2d45] text-base md:text-[18px] leading-relaxed space-y-4 max-w-5xl mx-auto"
          >
            <motion.p variants={slideRtoL}>
              At PRISH, we are always looking to elevate our technology consulting domain, and we are thrilled to
              announce our partnership with ODOO as a channel partner!
            </motion.p>
            <motion.p variants={slideLtoR}>
              This collaboration marks a significant step forward in delivering innovative and seamless business
              solutions in terms of ERP solutions to our clients.
            </motion.p>
            <motion.p variants={slideRtoL}>
              A special shoutout to the entire Odoo team for making the onboarding process incredibly smooth. Your
              support and expertise have set the stage for a promising journey ahead.
            </motion.p>
            <motion.p variants={slideLtoR}>
              We look forward to leveraging this partnership to create cutting-edge, integrated solutions that drive
              growth and success.
            </motion.p>
            <motion.p variants={fadeUp} className="font-medium">
              Feel free to connect with our super talented team to get your ERP customized at the best prices and
              effective solutions tailored as per your needs!! 🤝🏻
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== Highlights ===== */}
      <div className="max-w-7xl mt-12 mx-auto px-6 md:px-16 pb-8">
        <motion.h3
          className="text-3xl font-semibold text-center text-[#163c4f] mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          Why this Partnership Matters
        </motion.h3>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {highlights.map((h, index) => (
            <motion.div
              key={h.title}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
              variants={index % 2 === 0 ? slideLtoR : slideRtoL}
              style={{ willChange: "transform, opacity" }}
            >
              <h4 className="text-xl font-semibold text-[#163c4f] mb-2">{h.title}</h4>
              <p className="text-gray-700 text-base">{h.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== Modules / Solutions ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-16">
        <motion.h3
          className="text-3xl font-semibold text-center text-[#163c4f] mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          Solutions We Deliver with Odoo
        </motion.h3>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {modules.map((m) => (
            <motion.div
              key={m}
              variants={fadeUp}
              className="group bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0d3c58] group-hover:scale-110 transition" />
                <p className="text-gray-800 font-medium">{m}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== Implementation Approach (timeline cards) ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-6">
        <motion.h3
          className="text-3xl font-semibold text-center text-[#163c4f] mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          Our Implementation Approach
        </motion.h3>

        <motion.div
          className="grid md:grid-cols-5 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {steps.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition"
            >
              <div className="text-[#0d3c58] font-semibold text-sm">{s.step}</div>
              <div className="text-lg font-semibold mt-1 text-[#163c4f]">{s.title}</div>
              <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== FAQ (accordion with AnimatePresence) ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-8xl mx-auto px-6 md:px-16 pb-16"
      >
        <motion.h3 className="text-3xl font-semibold text-center text-[#163c4f] mb-8" variants={fadeUp}>
          Frequently Asked Questions
        </motion.h3>

        <motion.div className="space-y-4" variants={container}>
          {faqs.map((item, index) => (
            <motion.div key={index} className="border border-[#d6e4ec] rounded-lg overflow-hidden" variants={fadeUp}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                {item.q}
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
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ===== CTA / Query Form ===== */}
      <motion.div
        id="query"
        className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        style={{ willChange: "transform, opacity" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Send a Query</h2>
        <SendQueryForm />
        <p className="text-center text-sm text-gray-600 mt-3">
          Prefer email? Write to us at{" "}
          <a className="underline" href="mailto:info@prish.ae">
            info@prish.ae
          </a>
        </p>
      </motion.div>
    </section>
  );
}
