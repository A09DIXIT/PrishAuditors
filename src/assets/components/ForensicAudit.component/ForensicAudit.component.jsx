import React, { useState } from "react";
import bannerImage from "/Inventory-Audit.jpg";

const ForensicAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
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
        "Common red flags include unusual or unexplained fluctuations in financial performance, discrepancies in accounting records, missing documentation, suspicious transactions, and whistleblower complaints."
    },
    {
      question: "How long does a forensic audit typically take?",
      answer:
        "The duration depends on the complexity of the case, the volume of data to be analyzed, and the scope of the investigation. It can range from a few weeks to several months."
    },
    {
      question: "What industries can benefit from forensic audit services?",
      answer:
        "Industries such as banking, finance, insurance, healthcare, manufacturing, government agencies, and non-profit organizations benefit from forensic audit services."
    },
    {
      question: "What are the benefits of a forensic audit?",
      answer: (
        <div>
          <p><strong>Fraud Detection and Prevention:</strong> Helps detect and prevent fraud, protecting from financial losses.</p>
          <p><strong>Evidence Gathering:</strong> Provides evidence for legal or disciplinary actions.</p>
          <p><strong>Compliance Assurance:</strong> Ensures compliance with legal and regulatory norms.</p>
          <p><strong>Stakeholder Confidence:</strong> Boosts trust by promoting transparency.</p>
          <p><strong>Operational Improvement:</strong> Improves internal controls and efficiency.</p>
        </div>
      )
    }
  ];

  return (
    <section className="pt-0 pb-20 bg-white">
      {/* Banner Image */}
      <div className="w-screen h-[70vh] overflow-hidden mt-10">
        <img
          src={bannerImage}
          alt="Forensic Audit Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-16 mt-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0a2d45] mb-6 text-center">
          FORENSIC AUDIT
        </h2>
        <p className="text-gray-700 text-lg mb-6 text-justify">
          A Forensic Audit is a specialized review and investigation into financial records and transactions to detect and prevent fraud, corruption, and financial misrepresentation. At <strong>PRISH</strong>, our forensic audits combine accounting, auditing, and investigative skills to uncover the truth in complex financial situations.
        </p>

        <h3 className="text-2xl font-semibold text-[#0a2d45] mb-4 mt-8">
          Our Forensic Audit Services Include:
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li>Detection and investigation of financial fraud</li>
          <li>Litigation support and expert witness testimony</li>
          <li>Asset tracing and recovery</li>
          <li>Review of internal controls and risk management systems</li>
          <li>Analysis of financial anomalies and suspicious transactions</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0a2d45] mb-4 mt-8">
          When is a Forensic Audit Needed?
        </h3>
        <p className="text-gray-700 text-base mb-4">
          Forensic audits are crucial when:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li>There are allegations of embezzlement, bribery, or financial misconduct</li>
          <li>Legal disputes require financial analysis or evidence</li>
          <li>Companies suspect internal fraud or collusion</li>
          <li>Due diligence is required for mergers or acquisitions</li>
        </ul>

        <p className="text-gray-700 text-lg mt-6 text-justify">
          At <strong>PRISH</strong>, we ensure confidentiality, objectivity, and accuracy in all forensic audit assignments. Our expertise helps businesses and legal professionals uncover facts and take informed decisions in high-stakes scenarios.
        </p>

        {/* FAQ Section with Custom Styling */}
        <h3 className="text-3xl font-semibold text-[#0a2d45] mt-16 mb-6 text-center">Frequently Asked Questions (FAQs)</h3>
        <div className="bg-[#0a2d45] text-white mt-10 px-6 md:px-16 py-12 max-w-6xl mx-auto rounded-lg shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/20">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 px-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-2xl transform transition-transform duration-300">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <div className="bg-white text-[#0a2d45] px-4 py-4 text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForensicAudit;
