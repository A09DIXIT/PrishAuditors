import React, { useState } from "react";

const MysteryAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

   const faqs = [
    {
      question: "How frequently should a mystery audit be conducted?",
      answer:
        "The frequency of mystery audits depends on the business's needs, industry standards, and areas of concern. Some businesses conduct mystery audits quarterly, while others may do so monthly or annually.",
    },
    {
      question: "What industries can benefit from mystery audit services?",
      answer:
        "Mystery audit services can benefit businesses in various industries, including retail, hospitality, healthcare, banking, automotive, and more, where customer service and experience are critical.",
    },
    {
      question: "How can I use the findings from a mystery audit to improve my business?",
      answer: (
        <div>
          <p><strong>Identify Improvement Areas:</strong> Pinpoint specific weaknesses in customer service or operations.</p>
          <p><strong>Employee Training:</strong> Develop targeted training programs based on audit findings.</p>
          <p><strong>Process Enhancements:</strong> Implement changes to streamline operations.</p>
          <p><strong>Performance Measurement:</strong> Track progress over time by comparing audit results.</p>
        </div>
      ),
    },
    {
      question: "What is a mystery audit?",
      answer:
        "A mystery audit, also known as mystery shopping or secret shopping, is a method of evaluating the quality of service and compliance with company standards by sending anonymous evaluators to assess various aspects of a business from a customer's perspective.",
    },
    {
      question: "Why is a mystery audit necessary?",
      answer:
        "A mystery audit is necessary to gain insights into the customer experience, identify areas for improvement, ensure compliance with operational standards, and maintain high service quality.",
    },
    {
      question: "How does a mystery audit differ from other types of audits?",
      answer:
        "While traditional audits focus on financial records and compliance, mystery audits focus on the customer experience, service quality, and adherence to operational procedures from a customer's viewpoint.",
    },
    {
      question: "What are the key objectives of a mystery audit?",
      answer:
        "The primary objectives of a mystery audit are to assess customer service quality, evaluate adherence to operational standards, identify areas for improvement, and enhance overall customer satisfaction.",
    },
    {
      question: "What are the benefits of a mystery audit?",
      answer: (
        <div>
          <p><strong>Customer Experience Improvement:</strong> Enhance the customer experience by identifying and addressing gaps in service quality.</p>
          <p><strong>Operational Efficiency:</strong> Streamline processes and procedures to improve efficiency.</p>
          <p><strong>Employee Development:</strong> Provide targeted training based on audit feedback.</p>
          <p><strong>Quality Control:</strong> Ensure consistency in service delivery across locations.</p>
        </div>
      ),
    },
  ];

  return (
    <section className="pt-0 pb-20 bg-white">
      {/* Banner Image */}
      <div className="w-screen h-[70vh] overflow-hidden mt-10">
        <img
          src="/mystory12.jpg"
          alt="Mystery Audit Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-16 mt-16 max-w-6xl mx-auto">
  <div className="flex flex-col md:flex-row gap-10 items-start">
    {/* Image on the Left */}
    <div className="w-full md:w-1/3">
      <img
        src="/mystory1.jpeg" // Replace with your actual image path
        alt="Mystery Audit Visual"
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>

    {/* Content on the Right */}
    <div className="w-full md:w-1/2">
      <h2 className="text-4xl font-bold text-[#0a2d45] mb-6 text-center md:text-left">
        MYSTERY AUDIT
      </h2>
      <p className="text-gray-700 text-lg mb-6 text-justify">
        Mystery Audit is an essential tool for evaluating the real-time customer experience
        and operational compliance. At <strong>PRISH</strong>, we provide tailored mystery audit services
        that help businesses gain valuable insights into their service quality.
      </p>

      
    </div>
  </div>


  <div className="flex flex-col md:flex-row gap-10 mt-16 items-start">
  {/* Left Side - Text Content */}
  <div className="w-full md:w-1/2 text-left">
    <h3 className="text-2xl font-semibold text-[#0a2d45] mb-4">
      Our Mystery Audit Services Cover:
    </h3>
    <ul className="list-disc pl-5 text-gray-700 text-base space-y-2">
      <li>Customer service assessment</li>
      <li>Operational compliance checks</li>
      <li>Product display and branding analysis</li>
      <li>Staff behavior and process adherence</li>
      <li>Location hygiene and upkeep</li>
    </ul>
  </div>
  

  {/* Right Side - Image */}
  <div className="w-full md:w-1/3">
    <img
      src="/mystory2.jpeg" // Replace with your actual image path
      alt="Mystery Audit Insight"
      className="w-full h-auto rounded-lg shadow-md"
    />
  </div>
</div>

<div><p className="text-gray-700 text-lg mt-6 text-center">
      With <strong>PRISH</strong>, your business can uncover hidden insights and improve performance
      using detailed and unbiased mystery audit reports.
    </p></div>



  {/* FAQ Section */}
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

export default MysteryAudit;
