import React, { useState, useRef } from 'react';

const faqs = [
  {
    question: "What is a statutory audit?",
    answer: "A statutory audit is a legally mandated examination of a company's financial records..."
  },
  {
    question: "Who requires a statutory audit?",
    answer: "Companies that meet certain criteria as per regulations require statutory audits."
  },
  // Add more FAQs as needed
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, idx) => (
        <div key={idx} className="faq-item">
          <button className="faq-question" onClick={() => toggleIndex(idx)}>
            {faq.question}
            <span className={`arrow ${openIndex === idx ? 'open' : ''}`}>▼</span>
          </button>
          <div className={`faq-answer ${openIndex === idx ? 'open' : ''}`}>
            {openIndex === idx && <p>{faq.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
