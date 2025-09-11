// src/pages/CompanyIncorporation.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

/* ===== Easing & Variants (site-wide consistency) ===== */
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

/* ===== FAQ data (your content) ===== */
const faqItems = [
  {
    question: "What type of UAE companies can I start?",
    answer: (
      <>
        UAE allows company formation in the free zone, mainland, or offshore. Business setup in the UAE mainland requires a local sponsor and the license is issued by DED.
        <br />
        Free zone companies can operate within a limited geographical region and the license is issued by a particular free zone authority.
        <br />
        Offshore businesses in UAE allow your company to trade outside the UAE as well as make efforts to safeguard your wealth and assets. Offshore companies get a certificate of incorporation and not a trade license.
        <br />
        All types of companies can be started in UAE and more than a thousand activities are allowed by the Economic Department.
      </>
    ),
  },
  {
    question: "How to renew my business license on the mainland?",
    answer: (
      <>
        If you want to renew your Dubai commercial license, the applicant should submit the DED registered certificate with the necessary approval from the Ministry of Economy and National Media Company. If you want to renew your Dubai trade license, then you should submit a valid Ejari certificate and other lease contracts.
      </>
    ),
  },
  {
    question: "Why should I start my company in UAE?",
    answer: (
      <>
        UAE is a perfectly located biggest market in the world. It serves as a perfect destination to invest in different kinds of business. The business owners are free from taxes, and they can expect exceptional logistics in all the emirates. You don’t have any capital restrictions while starting your business. Financial freedom is an attractive point that brings in employees from foreign districts.
        UAE has mind-blowing business opportunities; a business setup firm in UAE can guide you through the entire company formation process.
      </>
    ),
  },
  {
    question: "How long will it take to set up a free zone company?",
    answer: (
      <>
        Being a trustworthy and professional business consultant, we ensure fast and reliable business setup in UAE-free zones. Usually, it takes around 3 to 10 days to set up your free zone company; it may differ according to the selected free zone. We make sure that all your documents are legal and that concerned authorities have attested to them.
        If you’re not consulting a business consultant, it will take up to a few weeks and it becomes difficult to clear all the legal procedures. So, consider PRISH for your free zone business setup.
      </>
    ),
  },
  {
    question: "How to start an LLC company in UAE?",
    answer: (
      <>
        To establish your LLC Company in Dubai mainland or anywhere else in UAE, you have to reserve a trade name and other necessary preliminary approvals from concerned authorities. You get an MOA from the company and also, submit the lease contract to the licensing authority. Also, find a local partner and rented office space to start your business.
        PRISH offer few inclusive and affordable packages according to your business setup requirements.
      </>
    ),
  },
  {
    question: "What kind of company structure should I choose?",
    answer: (
      <>
        This depends on your needs, as well as the needs of your business. You could set up your company as a Sole Establishment (this is the same as a Sole Proprietorship), as a Limited Liability Partnership, a Limited Liability Company, a Private Limited Company, or a Professional Services Company.
        You also have the option of setting up your company on the mainland, in a free zone (only limited liability company structures are permitted here), or offshore.
      </>
    ),
  },
  {
    question: "Do I need to rent an office for my business?",
    answer: (
      <>
        A physical presence is mandatory for companies established on the mainland and in free zones. However, an offshore company is not permitted to lease office space in the UAE.
        The good news is that there is affordable office space for everyone. If you want to keep your initial costs down, you could look at renting an office or any number of dedicated desks in a co-working space on the mainland. These are all fully furnished and ready to move in. In a free zone, you need to rent at least a desk in a shared office space. The added advantage is that some free zones allow you to rent a flexi-desk, that is a desk you will be using for say, ten hours in a week. You still get your dedicated PO Box so that you have a unique address.
      </>
    ),
  },
];

const CompanyIncorporation = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

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
          src="/CompanyIncorporation.jpg"
          alt="Company Incorporation Banner"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
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

      {/* Intro — container + stagger + slide (with replay) */}
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
          <motion.div
            className="max-w-6xl mx-auto px-4 md:px-0"
            variants={container}
          >
            <motion.h1
              className="text-4xl font-semibold mb-8 text-center text-[#0a2d45]"
              variants={slideLtoR}
            >
              COMPANY INCORPORATION SERVICES
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 leading-relaxed mb-4"
              variants={slideRtoL}
            >
              Company incorporation services in the United Arab Emirates (UAE)
              involve assisting businesses and entrepreneurs in establishing legal
              entities to conduct business activities within the country.
            </motion.p>

            <motion.p
              className="text-xl text-gray-700 leading-relaxed mb-4"
              variants={slideLtoR}
            >
              Based on understanding our clients' requirements, we at{" "}
              <strong className="text-[#0a2d45]">PRISH</strong> advise clients on
              the most suitable business structure, ownership preferences, operating
              environments such as freezone, mainland, and other regulatory
              requirements.
            </motion.p>

            <motion.p
              className="text-xl text-gray-700 leading-relaxed mb-6"
              variants={slideRtoL}
            >
              Through our professional expertise team members, we navigate the
              complex legal and regulatory landscape more effectively, streamline
              the incorporation process, and establish a strong legal foundation
              for operations for our various clients in the country.
            </motion.p>

            <motion.ul
              className="list-disc pl-6 text-lg text-gray-800 space-y-2"
              variants={container}
            >
              {[
                "Business Structure and Ownership Consultation",
                "Document Preparation and Submission",
                "Trade Name Reservation and Approval",
                "License Application and Processing",
                "Office Space and Facilities",
                "Visa and Immigration Services",
                "Bank Account Opening",
                "Ongoing Compliance and Support including trademark, copyright etc.",
              ].map((li, i) => (
                <motion.li key={i} variants={fadeUp}>
                  {li}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
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
          className="text-4xl font-semibold text-center text-[#0a2d45] mb-10 mt-10"
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

      {/* Contact Form */}
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

export default CompanyIncorporation;
