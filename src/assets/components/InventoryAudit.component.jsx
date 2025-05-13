import React, { useState } from "react";

const InventoryAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is an inventory audit and verification?",
      answer:
        "An inventory audit and verification examines and assesses a company's physical inventory and related accounting records to ensure accuracy, completeness, and reliability.",
    },
    {
      question: "Why is inventory audit and verification necessary?",
      answer:
        "It helps detect discrepancies, prevent theft, and ensure financial reporting is accurate.",
    },
    {
      question: "What are the key objectives of inventory audit and verification?",
      answer:
        "To verify stock accuracy, evaluate internal controls, and identify obsolete or missing inventory.",
    },
    {
      question: "How often should inventory audit and verification be conducted?",
      answer: "Typically annually or quarterly, depending on the nature of the business.",
    },
    {
      question: "What industries can benefit from inventory audit and verification services?",
      answer: "Retail, manufacturing, logistics, and healthcare, among others.",
    },
    {
      question: "How does inventory audit and verification differ from regular audits?",
      answer:
        "Inventory audits focus specifically on stock and inventory management, while regular audits cover all financial and operational areas.",
    },
    {
      question: "What are some common methods used in inventory audit and verification?",
      answer:
        "Physical count, cycle counting, barcode scanning, and stock reconciliation.",
    },
    {
      question: "What are the benefits of inventory audit and verification?",
      answer:
        "Improved accuracy, loss prevention, better decision-making, and compliance.",
    },
  ];

  return (
    <section className="pt-10 pb-20 bg-white">
      {/* Banner Image */}
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src="/inventory1.jpeg"
          alt="Inventory Audit and Verification Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-16 mt-16 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a2d45] mb-6">
          Inventory Audit & Verification
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-10">
          Our <strong>Inventory Audit and Verification</strong> service ensures your inventory records reflect the
          actual stock in hand through systematic examination and reconciliation. We help businesses verify
          physical inventory, evaluate internal controls, and uncover discrepancies to minimize losses
          and enhance operational efficiency.
        </p>

        <div className="text-left md:text-center">
          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg leading-8 inline-block text-left">
            <li>Physical verification of inventory at warehouses, retail outlets, or distribution centers</li>
            <li>Cross-verification with stock ledgers, purchase records, and sales reports</li>
            <li>Evaluation of internal controls for stock handling and movement</li>
            <li>Identification of obsolete, slow-moving, or damaged inventory</li>
            <li>Comprehensive audit reports with actionable recommendations</li>
          </ul>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-[#0a2d45] text-white mt-20 px-6 md:px-16 py-12 max-w-6xl mx-auto rounded-lg shadow-lg">
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
    </section>
  );
};

export default InventoryAudit;
