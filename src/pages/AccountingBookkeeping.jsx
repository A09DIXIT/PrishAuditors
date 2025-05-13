import React, { useState } from "react";

const AccountingBookkeeping = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const images = ["/AccountingBookkeeping1.jpg"];

  const ImageGroup = () => (
    <div className="grid grid-cols-1 gap-6">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`accounting-${i}`}
          className="w-full rounded-xl shadow-lg object-cover"
        />
      ))}
    </div>
  );

  const faqs = [
    {
      question: "What is the difference between accounting and bookkeeping?",
      answer:
        "Accounting focuses on interpreting, classifying, analyzing, reporting, and summarizing financial data, while bookkeeping is the process of recording financial transactions.",
    },
    {
      question: "Why do businesses need accounting and bookkeeping services?",
      answer:
        "They help businesses track financial performance, ensure compliance with laws, and make informed decisions.",
    },
    {
      question: "What specific tasks are included in accounting and bookkeeping services?",
      answer:
        "Tasks include managing ledgers, reconciling bank statements, processing payroll, preparing financial reports, and ensuring regulatory compliance.",
    },
    {
      question: "How often should I update my accounting records?",
      answer:
        "It’s best to update records weekly or monthly to ensure financial accuracy and timely decision-making.",
    },
    {
      question: "Can outsourcing accounting and bookkeeping services save me time and money?",
      answer:
        "Yes, outsourcing reduces overhead costs and frees up internal resources so you can focus on core business activities.",
    },
    {
      question: "How do I choose the right accounting and bookkeeping service provider?",
      answer:
        "Consider their expertise, technology used, industry experience, pricing model, and client reviews.",
    },
    {
      question: "What are the benefits of outsourcing accounting and bookkeeping services?",
      answer:
        "You gain access to expert knowledge, reduce errors, increase efficiency, and save on staffing costs.",
    },
    {
      question: "Can accounting and bookkeeping services help with tax preparation?",
      answer:
        "Yes, organized financial records make tax filing smoother and ensure compliance with tax regulations.",
    },
    {
      question: "How do businesses measure the ROI of accounting and bookkeeping services?",
      answer:
        "ROI is measured by improved financial accuracy, cost savings, better compliance, and data-driven decision-making.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#163c4f]">
      {/* Banner */}
      <div className="w-screen h-[70vh] overflow-hidden mt-10">
        <img
          src="/AccountingBookkeeping.jpg"
          alt="Risk Assurance Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 py-20 space-y-28 text-lg leading-relaxed">

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-6xl font-bold mb-6">
              ACCOUNTING AND BOOKKEEPING
            </h2>
            <p className="mb-5">
              Accounting and bookkeeping services play a crucial role in helping businesses maintain accurate financial records, comply with regulatory requirements, and make informed financial decisions to support their growth and success.
            </p>
            <p className="mb-5">
              While providing accounting and bookkeeping services, we ensure that financial statements comply with the International Financial Reporting Standards (IFRS) and we are committed to providing the services with the highest standards of integrity and quality.
            </p>
            <p className="mb-5">
              Our team is fully capable with most of accounting software like Tally, QuickBooks, ZOHO, Xero, Microsoft Dynamics 365, SAP, etc. Be it periodic basis accounting or be it backlog accounting; you have PRISH to believe for all your accounting-related needs.
            </p>
            <p>
              Our approach is understanding the importance of accurate financial records for business success. It is proactive, detail-oriented, and focused on delivering high-quality services that meet our clients’ needs.
            </p>
          </div>

          <img
          src="/AccountingBookkeeping2.jpg"
          alt="Risk Assurance Banner"
          className="w-full h-full object-cover"
        />
        </div>

        {/* Section 2: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
        <img
          src="/AccountingBookkeeping3.jpg"
          alt="Risk Assurance Banner"
          className="w-full h-full object-cover"
        />
          <div>
            <h2 className="text-4xl font-bold mb-6">WHY CHOOSE PRISH?</h2>
            <ul className="list-decimal pl-6 space-y-4 text-gray-800">
              <li>
                <strong>Accounts Receivable Management:</strong> Accurate and timely invoicing, credit risk management, collection strategies, and customer account reconciliation.
              </li>
              <li>
                <strong>Accounts Payable Management:</strong> Invoice receipt, payment processing, vendor management, and expense reporting.
              </li>
              <li>
                <strong>Bank Reconciliation:</strong> Transaction matching with bank entries, discrepancy resolution, and reconciliation reports.
              </li>
              <li>
                <strong>General Ledger Maintenance:</strong> Financial transaction recording, reconciliation with subsidiary ledgers, and reporting.
              </li>
              <li>
                <strong>Payroll & Employee Management:</strong> Payroll processing, compliance, attendance, and employee onboarding.
              </li>
              <li>
                <strong>Financial Analysis:</strong> Ratio analysis, forecasting, financial trend comparison, and insights using quantitative tools.
              </li>
              <li>
                <strong>Financial Reporting:</strong> Financial statement preparation, customized reports, consolidation, and stakeholder insights.
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#0a2d45] text-white mt-10 px-6 md:px-16 py-12 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Accounting and Bookkeeping?
          </h2>
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
    </div>
  );
};

export default AccountingBookkeeping;
