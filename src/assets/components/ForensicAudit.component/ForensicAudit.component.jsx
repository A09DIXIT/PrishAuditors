import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import bannerImage from "/Inventory-Audit.jpg";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

const ForensicAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
  {
    question: "What is a forensic audit?",
    answer:
      "A forensic audit is an examination and analysis of financial records, transactions, and documentation to uncover fraud, financial irregularities, or misconduct. It involves gathering evidence that can be used in legal proceedings or internal investigations."
  },
  {
    question: "When is a forensic audit necessary?",
    answer:
      "Forensic audits are necessary when there are suspicions or allegations of fraud, embezzlement, corruption, or other financial misconduct within an organization. They are often conducted in response to specific incidents or as a proactive measure to detect and prevent fraud."
  },
  {
    question: "What are the key objectives of a forensic audit?",
    answer:
      "The primary objectives of a forensic audit are to uncover fraudulent activities, gather evidence for legal proceedings, identify the perpetrators, quantify financial losses, and recommend measures to prevent future occurrences."
  },
  {
    question: "How does a forensic audit differ from a regular audit?",
    answer:
      "While regular audits focus on verifying financial statements for accuracy and compliance, forensic audits are more investigative in nature. Forensic audits delve deeper into financial records, transactions, and documentation to uncover fraudulent activities or misconduct."
  },
  {
    question: "What are some common red flags that may indicate the need for a forensic audit?",
    answer:
      "Common red flags that may warrant a forensic audit include unusual or unexplained fluctuations in financial performance, discrepancies in accounting records, missing documentation, suspicious transactions, and whistleblower complaints."
  },
  {
    question: "How long does a forensic audit typically take?",
    answer:
      "The duration of a forensic audit depends on the complexity of the case, the volume of data to be analyzed, and the scope of the investigation. It can range from a few weeks to several months, or even longer for highly complex cases."
  },
  {
    question: "What industries can benefit from forensic audit services?",
    answer:
      "Forensic audit services are valuable to businesses and organizations across various industries, including banking, finance, insurance, healthcare, manufacturing, government agencies, and non-profit organizations."
  },
 {
  question: "What are the benefits of a forensic audit?",
  answer: [
    "Fraud Detection and Prevention: Forensic audits help detect and prevent fraud, protecting the organization from financial losses and reputational damage.",
    "Evidence Gathering: They gather evidence that can be used in legal proceedings or internal disciplinary actions against perpetrators.",
    "Compliance Assurance: Forensic audits ensure compliance with legal and regulatory requirements, reducing the risk of penalties and sanctions.",
    "Stakeholder Confidence: By demonstrating a commitment to integrity and transparency, forensic audits enhance stakeholder confidence in the organization.",
    "Operational Improvement: They identify weaknesses in internal controls and operational processes, leading to improvements in efficiency and effectiveness."
  ]
}

  ];

  return (
  <section className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
      {/* Banner */}
      <motion.div
             className="w-screen h-[50vh] overflow-hidden"
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1 }}
           >
        <img
          src={bannerImage}
          alt="Forensic Audit Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="text-black text-4xl mb-10 font-semibold text-center">
            FORENSIC AUDIT
          </motion.h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
             It will be a specialized examination of financial records, transactions, and documents conducted to identify uncovering fraud, financial misconduct, or irregularities through gathering evidence, analyzing data, and identifying perpetrators of fraudulent activities.It involves detailed analysis, data tracing, and evidence gathering to support legal proceedings or internal investigations.
            </p>
            <p>
             Our team of experienced forensic auditors employs advanced techniques and methodologies to investigate complex financial transactions and uncover hidden risks.
            </p>
            <p>
             Our approach to understanding the critical importance of thorough and accurate forensic audits. It combines technical expertise with investigative skills to uncover discrepancies, identify perpetrators, and provide actionable insights to mitigate future risks.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mt-16 mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-center text-[#163c4f] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose PRISH?
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Fraud Detection",
              description:
                "We utilize advanced data analysis techniques to identify red flags and anomalies that may indicate fraudulent activities within your organization.",
            },
            {
              title: "Evidence Collection",
              description:
                "Our forensic auditors gather and analyze evidence meticulously, ensuring its admissibility and reliability for legal purposes.",
            },
            {
              title: "Interviews & Interrogation",
              description:
                "We conduct interviews and interrogations to gather additional information and insights from relevant personnel, witnesses, and suspects.",
            },
            {
              title: "Expert Testimony",
              description:
                "Our team provides expert testimony and support during legal proceedings, arbitration, or dispute resolution processes.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-[#163c4f] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      
        <motion.h2
          className="text-4xl font-semibold text-center text-[#0a2d45] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4 max-w-8xl mx-auto px-4 pb-20">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-[#d6e4ec] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
              >
                {item.question}
                <span className="text-xl">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="faq-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base">
  {Array.isArray(item.answer) ? (
    <ul className="list-disc pl-6 space-y-2">
      {item.answer.map((line, idx) => (
        <li key={idx}>{line}</li>
      ))}
    </ul>
  ) : (
    <p>{item.answer}</p>
  )}
</div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
    

      {/* Query Form */}
      <motion.div
        className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-[#0d3c58]">
          Send a Query
        </h2>
        <SendQueryForm />
      </motion.div>

      {/* Back Button */}
      <div className="mt-12 text-center">
        <Link
          to="/services/audit"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to Auditing and Assurance
        </Link>
      </div>
    </section>
  );
};

export default ForensicAudit;
