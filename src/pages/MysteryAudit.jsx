import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const MysteryAudit = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems  = [
{
      question: "What is a mystery audit?",
      answer:
        "A mystery audit, also known as mystery shopping or secret shopping, is a method of evaluating the quality of service and compliance with company standards by sending anonymous evaluators to assess various aspects of a business from a customer's perspective.",
    },

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

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
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

  return (
    <section className="w-full bg-white min-h-screen">
      {/* Banner Image */}
      <motion.div
        className="w-full h-[50vh] overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/mystory12.jpg"
          alt="Mystery Audit Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>



<div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
 <motion.div
        className="bg-gradient-to-br max-w-8xl from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16  mt-10 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02, boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)", transition: { duration: 0.4 } }}
      >
        <motion.h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
          MYSTERY AUDIT
        </motion.h1>
        <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
          <p>
            Core assessments are conducted by us as an independent evaluator to measure and evaluate the quality of service, compliance with policies and procedures, and overall customer experience with your company’s brand.
          </p>
          <p>
            Mystery audit, also known as mystery shopping or secret shopping, involves sending trained evaluators to assess the quality of service and compliance with company standards from a customer's perspective. It provides unbiased feedback on various aspects of your business, including customer service, product quality, and adherence to operational procedures.
          </p>
          <p>
            Our professional mystery audit services are designed to provide valuable insights into the customer experience, operational efficiency, and compliance with service standards. Our mystery audits are conducted discreetly and objectively to assess various aspects of your business, helping you identify areas for improvement and enhance overall performance.
          </p>
        </div>
</motion.div>
</div>


{/*Why Choose Us */}

<div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            Why Choose PRISH?
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Objective Assessment:",
              description:
                "Our trained evaluators conduct anonymous visits or interactions with your business to provide unbiased assessments of customer service quality and compliance with operational standards.",
            },
            {
              title: "Comprehensive Reporting:",
              description:
                "We provide detailed reports and actionable insights based on the findings of our mystery audits, highlighting strengths, weaknesses, and areas for improvement.",
            },
            {
              title: "Customized Evaluation Criteria:",
              description:
                "We tailor our mystery audits to focus on specific aspects of your business, such as customer service, cleanliness, product knowledge, sales techniques, and adherence to policies and procedures.",
            },
            {
              title: "Benchmarking:",
              description:
                "Our mystery audit services can be used to benchmark performance across multiple locations or against industry standards, helping you identify best practices and areas for differentiation.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
            >
              <h4 className="text-xl font-semibold text-[#163c4f] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* End Why Choose Us */}
      

      

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
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
     <motion.div
        className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Send a Query</h2>
        <SendQueryForm />
      </motion.div>
      <div className="mt-18 mb-10 text-center">
                    <Link
                      to="/services/audit"
                      className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
                    >
                      Back to AUDITING AND ASSURANCE
                    </Link>
                  </div>
    </section>
  );
};

export default MysteryAudit;
