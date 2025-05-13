import React, { useState } from "react";

const faqs = [
  {
    question: "What is a statutory audit?",
    answer: "A statutory audit is a legally mandated examination of a company's financial records, transactions, and statements to ensure accuracy, compliance with accounting standards, and adherence to regulatory requirements."
  },
  {
    question: "Who requires a statutory audit?",
    answer: "Companies that meet certain criteria as per regulations require statutory audits."
  },
  {
    question: "What are the objectives of a statutory audit?",
    answer: "To ensure the accuracy and reliability of financial statements, compliance with laws, and to provide assurance to stakeholders."
  },
  {
    question: "How often does a company need to undergo a statutory audit?",
    answer: "Typically, statutory audits are conducted annually, but the frequency may vary depending on jurisdiction and company size."
  },
  {
    question: "What is the role of the auditor in a statutory audit?",
    answer: "The auditor independently examines financial records and provides an opinion on the fairness and accuracy of financial statements."
  },
  {
    question: "What are the benefits of a statutory audit for a company?",
    answer: "Benefits include improved credibility with stakeholders, identification of control weaknesses, and enhanced transparency."
  },
  {
    question: "How long does a statutory audit typically take?",
    answer: "Duration varies by company size and complexity, ranging from weeks for small companies to months for larger organizations."
  },
  {
    question: "What is the process of a statutory audit?",
    answer: "The process involves planning, risk assessment, testing controls, substantive procedures, and issuing the audit report."
  },
  {
    question: "What documents are required for a statutory audit?",
    answer: "Required documents include financial statements, bank records, invoices, contracts, payroll records, and tax returns."
  },
  {
    question: "Can a company change its auditor for statutory audits?",
    answer: "Yes, companies can change auditors but must follow proper notification and transition procedures."
  }
];

const whyChoosePrish = [
  {
    label: "Experienced Professionals:",
    full: "Our team consists of highly skilled and experienced auditors with extensive knowledge across various industries. We bring decades of combined experience in financial auditing and regulatory compliance.",
    short: "Our team consists of highly skilled and experienced auditors..."
  },
  {
    label: "Tailored Solutions:",
    full: "We understand that every business is unique. That's why we offer customized audit solutions designed to address your specific requirements, industry challenges, and growth objectives.",
    short: "We understand that every business is unique..."
  },
  {
    label: "Efficiency and Timeliness:",
    full: "We strive to complete audits promptly without compromising on quality, ensuring minimal disruption to your business operations through streamlined processes and advanced audit tools.",
    short: "We strive to complete audits promptly..."
  },
  {
    label: "Comprehensive Reporting:",
    full: "Our audit reports are detailed, transparent, and easy to understand, providing you with valuable information to make informed decisions. We include actionable recommendations for improvement.",
    short: "Our audit reports are detailed, transparent..."
  }
];

const StatutoryAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedItems, setExpandedItems] = useState(Array(whyChoosePrish.length).fill(false   ));

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const toggleExpand = (idx) => {
    setExpandedItems(prev => {
      const newState = [...prev];
      newState[idx] = !newState[idx];
      return newState;
    });
  };

  return (
    <section className="bg-white w-full">
      {/* Full-Screen Top Image */}
      <div className="w-screen h-[70vh] overflow-hidden">
        <img
          src="/Audit-Assurance.png"
          alt="Statutory Audit Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-20 mt-16 max-w-[1400px] mx-auto pb-20">
        <h1 className="text-4xl font-bold text-[#0a2e4e] mb-8 text-center">
          STATUTORY AUDIT
        </h1>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Images */}
          <div className="flex flex-col gap-6 items-center">
            <img
              src="/Audit-Assurance.png"
              alt="Statutory Audit 1"
              className="w-full max-w-[450px] rounded-lg shadow-lg"
            />
           
          </div>

          {/* Right Text */}
          <div>
            <p className="mb-6 text-gray-700 leading-relaxed text-sm md:text-base text-justify">
              We will be performing a thorough examination of financial records and
              providing assurance on the accuracy and reliability of your company’s
              financial statements...
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed text-sm md:text-base text-justify">
              Our team of experienced auditors provides comprehensive statutory audit
              services tailored to meet the specific needs of your business.
            </p>
            <p className="mb-10 text-gray-700 leading-relaxed text-sm md:text-base text-justify">
              Our approach to statutory audits goes beyond mere compliance...
            </p>

            <h2 className="text-2xl font-semibold text-[#0a2e4e] mb-6">
              WHY CHOOSE PRISH ?
            </h2>
            <ul className="text-gray-700 space-y-6 text-sm md:text-base">
              {whyChoosePrish.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.label}</strong>{" "}
                  {expandedItems[idx] ? item.full : item.short}
                  <button
                    className="ml-2 text-[#0a2e4e] font-semibold underline hover:text-[#f0b323] transition"
                    onClick={() => toggleExpand(idx)}
                  >
                    {expandedItems[idx] ? "Read Less" : "Read More"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#0a2d45] text-white mt-20 px-6 md:px-16 py-12 max-w-6xl mx-auto rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-white mb-8 text-center">
    Frequently Asked Questions
  </h2>
  {faqs.map((faq, idx) => (
    <div key={idx} className="border-b border-white/20">
      <button
        onClick={() => toggleIndex(idx)}
        className="w-full text-left py-4 px-4 flex justify-between items-center focus:outline-none hover:bg-[#0a2d45]/90 transition-colors"
      >
        <span className="text-lg font-medium">{faq.question}</span>
        <span className="text-2xl transform transition-transform duration-300">
          {openIndex === idx ? "▲" : "▼"}
        </span>
      </button>
      {openIndex === idx && (
        <div className="bg-white text-[#0a2d45] px-4 py-4 text-base">
          {faq.answer}
        </div>
      )}
    </div>
  ))}
</div>
    </section>
  );
};

export default StatutoryAudit;
