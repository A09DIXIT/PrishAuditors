import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

/* ===== JS-friendly easing & variants (same as your example) ===== */
const easeOutExpo = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } }
};

const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } }
};

const slideLtoR = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutExpo } }
};

const slideRtoL = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutExpo } }
};

/* Replay when returning to the very top */
const TOP_REPLAY_THRESHOLD = 12;
const AWAY_THRESHOLD = 160;

export default function ConcurrentAudit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

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

  const faqItems = [
    {
      question: "What is VAT?",
      answer:
        "Firstly, VAT (Value Added Tax) is a consumption tax, whichmeans that it is ultimately paid by the end consumer. Although, VAT is charged at each step of the ‘supply chain,’ it is the end user who bears the cost of Value Added Tax.\n\nVAT is collected by the businesses and then they pay it forward to the government. In case, a business has paid more tax to its suppliers than it has received, it can get a refund from the government. Ultimately, the tax receipts to government show ‘value add’ throughout the supply chain.",
    },
    {
      question: "What is UAE VAT Registration?",
      answer:
        "By VAT Registration, we mean to register the company with the government for submitting Value Added Tax. Upon successful registration, the concerned tax authority in the UAE, namely Federal Tax Authority (FTA) issues a unique VAT identification to the company.",
    },
    {
      question: "What is the difference between VAT and Sales Tax?",
      answer:
        "VAT and sales tax are both consumption taxes; these both are charged from the end-consumer. However, there are a few differences:\n\n- Sales tax is generally imposed on transactions involving goods, while VAT is applied on goods as well as services.\n- Furthermore, sales tax is imposed only on the final sale to end-consumer. However, VAT is charged on each step of the ‘supply chain.’\n\nIn VAT (Value Added Tax) based systems, businesses serve as tax-collectors on behalf of government, which helps reduce tax-evasion and misreporting.",
    },
    {
      question: "Which Companies are Required to Register for VAT in the UAE?",
      answer:
        "The businesses having taxable imports and supplies that exceed the amount of 375,000 AED must register for VAT. Besides, companies exceeding the amount of 187,500 AED can also register for VAT voluntarily; it is not mandatory for them to register.\n\nIn case a company fails to register for VAT, they become liable to pay penalties and face legal consequences.",
    },
    {
      question: "How Much VAT is Charged in the UAE?",
      answer:
        "The standard rate of VAT is 5% (Five Percent) in the UAE. However, there are a few sectors that are exempt from VAT. Additionally, there are also zero-rated supplies that are rated at 0% instead of 5%.",
    },
    {
      question: "Which sectors are exempt from VAT?",
      answer:
        "The following categories of supplies are exempt from VAT. These supplies should be traded within The United Arab Emirates.\n\n- Financial Services\n- Residential properties\n- Bare land\n- Local passenger transport",
    },
    {
      question: "Which are zero-rated sectors?",
      answer:
        "If you are trading in zero-rated supplies, you will be charged 0% VAT. However, it’s important to remember that these supplies must be declared properly in VAT returns submitted during every tax period. The following supplies are charged with 0% VAT.\n\n- Precious metals, such as gold and silver. Which are 99% pure and available in tradable form.\n- International transportation, and related supplies.\n- Supplies of certain sea, air, and land means of transportation (such as aircrafts and ships).\n- Certain investment grade precious metals (e.g. gold, silver, of 99% purity).\n- Newly constructed residential properties, that are supplied for the first time within three years of their construction.\n- Supply of certain education services, and the related goods and services.\n- Supply of certain healthcare services, and the of related goods and services.",
    },
    {
      question: "How to Register for VAT in UAE?",
      answer:
        "To register for VAT, an application – along with required documents – is forwarded to the Federal Tax Authority (FTA). Upon successful submission of the request, FTA will issue a VAT Registration Certificate, which can be downloaded online from the applicant’s account.",
    },
    {
      question: "What are the Required Documents for VAT Registration in the UAE?",
      answer:
        "The companies registering for VAT in the UAE are required to submit the following documents for the registration process:\n\n- Passport Copies – of business partners/owners (As mentioned on business license)\n- Emirates ID – of business partners/owners (As mentioned on the license)\n- Business License - (Trade/Commercial License)\n- Complete Address of the company\n- Details of any branches of the company if any\n- Memorandum of Association (MOA)\n- Company’s bank account details – with IBAN letter\n- Contact details of the authorized signatory, including email and phone number\n- Details of any branches, if applicable\n- Expected turnover, revenue and taxable expenses for the next 30 days\n- Turnover Declaration – with stamp and signature by the owner or the manager.\n- Custom code – along with a copy of Dubai Customs Letter.\n- GCC export or import details – if applicable\n- Preference for or against registration as a Tax Group\n\nDepending upon the jurisdictions or business activities, some additional documents may also be required for the VAT Registration process.",
    },
  ];

  return (
    <section key={replayKey} className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
      {/* Banner — PURE ZOOM ONLY (no left/right movement) */}
      <div className="w-screen h-[50vh] overflow-hidden">
        <motion.img
          src="/1-Con-curr.jpeg"
          alt="Concurrent Audit Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08, transformOrigin: "center center" }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: easeOutExpo }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
      </div>

      {/* Intro Section — plays immediately at top */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          variants={container}
          initial="hidden"
          animate="show"                 // play on load at top
        >
          <motion.h1
            className="text-black text-4xl mb-10 font-semibold text-center"
            variants={slideLtoR}
          >
            CONCURRENT AUDIT
          </motion.h1>

          {/* Alternate text L→R and R→L */}
          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={container}
          >
            <motion.p variants={slideRtoL}>
              It would be a real-time examination of financial transactions and processes conducted by us as an internal or external auditor to provide you with the timely feedback and ensure the effectiveness of internal controls and financial records.Unlike traditional audits, which are retrospective, concurrent audits are conducted concurrently with the transactions being processed.
            </motion.p>
            <motion.p variants={slideLtoR}>
              Our approach to understand the importance of timely and proactive oversight of your financial operations. Our experienced auditors work closely with your team to perform concurrent audits that are tailored to your organization's unique requirements.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose Us (text slides only) */}
      <div className="max-w-6xl mt-16 mx-auto px-4 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}  // retrigger on scroll
        >
          <motion.h3
            className="text-3xl font-semibold text-center text-[#163c4f] mb-10"
            variants={fadeUp}
          >
            Why Choose PRISH?
          </motion.h3>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={container}>
            {[
              {
                title: "Real-time Monitoring",
                description:
                  "We provide real-time monitoring of financial transactions, enabling prompt detection of errors, discrepancies, or potential fraud.",
              },
              {
                title: "Risk Assessment",
                description:
                  "We conduct thorough risk assessments to identify vulnerabilities and recommend measures to strengthen internal controls.",
              },
              {
                title: "Comprehensive Reporting",
                description:
                  "Our reports are detailed and easy to understand, offering practical insights to improve operational efficiency and compliance.",
              },
              {
                title: "Customized Solutions",
                description:
                  "Every business is unique, so we tailor our audit procedures and recommendations to meet your specific challenges.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white border-l-4 border-[#163c4f] shadow-md p-6 rounded-xl"
                variants={idx % 2 === 0 ? slideLtoR : slideRtoL}
              >
                <h4 className="text-xl font-semibold text-[#163c4f] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-base">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* FAQ Section — bottom -> top reveal + accordion (re-triggers) */}
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
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="border border-[#d6e4ec] rounded-lg overflow-hidden"
              variants={fadeUp}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
              >
                {item.question}
                <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Contact Form — bottom -> top (re-triggers) */}
      <div className="mb-16">
        <motion.div
          className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-[#0d3c58]">
            Send a Query
          </h2>
          <SendQueryForm />
        </motion.div>
      </div>

      {/* Back Button — bottom -> top (re-triggers) */}
      <motion.div
        className="mt-10 mb-20 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Link
          to="/services/audit"
          className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to Auditing & Assurance
        </Link>
      </motion.div>
    </section>
  );
}
