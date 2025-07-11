import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const SystemAudit = () => {
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

  const faqItems = [
    {
      question: "What is a System Audit?",
      answer:
        "A System Audit is an evaluation of an organization's information systems, including hardware, software, networks, and procedures, to ensure they are operating effectively, securely, and in compliance with relevant regulations and standards.",
    },
    {
      question: "Why are System Audits important for businesses?",
      answer:
        "System Audits are crucial for businesses to assess the effectiveness, security, and compliance of their information systems. They help identify vulnerabilities, mitigate risks, and ensure the integrity of data and operations.",
    },
    {
      question: "What are the key objectives of a System Audit?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Identifying security vulnerabilities and weaknesses in the IT infrastructure.</li>
          <li>Evaluating compliance with regulatory requirements and industry standards.</li>
          <li>Assessing the effectiveness of internal controls and risk management practices.</li>
          <li>Ensuring the reliability and availability of critical systems and data.</li>
        </ul>
      ),
    },
    {
      question: "What is the process involved in a System Audit?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Planning and scoping: Defining the objectives, scope, and methodology of the audit.</li>
          <li>Data collection: Gathering information about the organization's IT systems, processes, and controls.</li>
          <li>Analysis: Assessing the collected data to identify vulnerabilities, risks, and compliance issues.</li>
          <li>Reporting: Documenting audit findings, recommendations, and action plans for improvement.</li>
          <li>Follow-up: Monitoring the implementation of corrective actions and verifying their effectiveness.</li>
        </ul>
      ),
    },
    {
      question: "What are the benefits of conducting a System Audit?",
      answer: (
        <div className="space-y-3">
          <p><strong>Enhanced Security:</strong> Identifying and addressing security vulnerabilities to protect against cyber threats and data breaches.</p>
          <p><strong>Compliance Assurance:</strong> Ensuring compliance with regulations and standards, reducing the risk of penalties and legal issues.</p>
          <p><strong>Risk Mitigation:</strong> Identifying and mitigating risks to the organization's IT systems and data.</p>
          <p><strong>Operational Efficiency:</strong> Optimizing IT processes and controls to improve efficiency and productivity.</p>
          <p><strong>Stakeholder Confidence:</strong> Demonstrating commitment to security and compliance, enhancing trust with customers, partners, and regulators.</p>
        </div>
      ),
    },
    {
      question: "How often should a System Audit be conducted?",
      answer:
        "The frequency of System Audits depends on factors such as the organization's industry, regulatory requirements, and risk profile. However, it is generally recommended to conduct audits at least annually or whenever significant changes occur in the IT environment.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <motion.div
        className="w-full h-[50vh] overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/1SYSTEMAUDIT.jpg"
          alt="System Audit Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
      <section className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
        <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 mt-10 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.4 },
            }}
          >
            <motion.h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
              SYSTEM AUDIT
            </motion.h1>
            <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
              <p>
                System audits are critical for identifying IT-related risks, enhancing security posture,
                improving operational efficiency, and ensuring compliance with regulatory requirements
                and industry best practices through mitigating IT risks, strengthening IT governance
                frameworks, and safeguarding IT assets and data.
              </p>
              <p>
                Our experienced team conducts thorough audits to identify vulnerabilities, assess controls,
                and provide recommendations for improvement.
              </p>
              <p>
                Our System Audit approach is thorough, systematic, and tailored to the unique needs of each client. We focus on identifying weaknesses, assessing risks, and providing actionable recommendations to enhance the overall security and performance of your systems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
                  title: "Risk Assessment:",
                  description:
                    "We conduct a comprehensive risk assessment to identify potential vulnerabilities, threats, and weaknesses in your information systems.",
                },
                {
                  title: "Controls Evaluation:",
                  description:
                    "We evaluate the effectiveness of existing controls, including access controls, data security measures, and disaster recovery plans, to ensure they are adequate for mitigating identified risks.",
                },
                {
                  title: "Compliance Review:",
                  description:
                    "We review your systems and processes to ensure compliance with relevant regulations, industry standards, and best practices, such as GDPR, HIPAA, ISO 27001, and PCI DSS.",
                },
                {
                  title: "Performance Analysis:",
                  description:
                    "We assess the performance of your systems, including response times, availability, and scalability, to ensure they meet the needs of your organization.",
                },
                 {
                  title: "Documentation Review:",
                  description:
                    "We review documentation related to your information systems, including policies, procedures, and incident response plans, to ensure they are up-to-date and accurately reflect your organization's practices.",
                },
             ].map((item, idx, arr) => {
  const isLastOdd = arr.length % 2 !== 0 && idx === arr.length - 1;

  const card = (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f] w-full"
    >
      <h4 className="text-xl font-semibold text-[#163c4f] mb-2">{item.title}</h4>
      <p className="text-gray-700 text-base">{item.description}</p>
    </motion.div>
  );

  return isLastOdd ? (
    <div key={idx} className="md:col-span-2 flex justify-center">
      <div className="md:w-[48%] w-full">{card}</div>
    </div>
  ) : (
    <div key={idx}>{card}</div>
  );
})}
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
                            to="/services/special-audit"
                            className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
                          >
                            Back to SPECIAL AUDITS
                          </Link>
                        </div>
    </div>
  );
};

export default SystemAudit;
