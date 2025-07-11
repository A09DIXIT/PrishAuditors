import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

// Animation variant
const fadeIn = (direction = "up", delay = 0.2) => {
  return {
    hidden: { opacity: 0, y: direction === "up" ? 40 : 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeInOut",
      },
    },
  };
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
    question: "What is a Risk Control Matrix (RCM)?",
    answer:
      "A Risk Control Matrix (RCM) is a tool used to document the key risks facing an organization and the controls in place to mitigate those risks. It provides a structured framework for identifying, assessing, and monitoring risks across different areas of the business.",
  },
  {
    question: "Why is a Risk Control Matrix (RCM) important?",
    answer:
      "An RCM is important because it helps organizations identify and assess risks systematically, ensure appropriate controls are in place to mitigate those risks and provide assurance to management and stakeholders that risks are being managed effectively.",
  },
  {
    question: "How does an RCM help in risk management?",
    answer:
      "An RCM helps in risk management by providing a clear overview of key risks and the controls in place to mitigate them. It allows organizations to prioritize risks, allocate resources effectively, and monitor the effectiveness of controls over time.",
  },
  {
    question: "How can develop a Risk Control Matrix (RCM)?",
    answer:
      "By identifying key risks, assess existing controls, and design effective risk management strategies.",
  },
  {
    question: "What are the benefits of using a Risk Control Matrix (RCM)?",
    answer: (
      <ul className="space-y-2 list-disc pl-5">
        <li><strong>Improved risk management:</strong> Gain a clear understanding of key risks and implement effective controls to mitigate them.</li>
        <li><strong>Enhanced compliance:</strong> Ensure compliance with regulatory requirements and internal policies by implementing appropriate controls.</li>
        <li><strong>Efficient resource allocation:</strong> Allocate resources more effectively by focusing on high-priority risks.</li>
        <li><strong>Enhanced decision-making:</strong> Make informed decisions by having timely and accurate information on risks and controls.</li>
      </ul>
    ),
  },
  {
    question: "How often should an organization update its Risk Control Matrix (RCM)?",
    answer:
      "An organization should update its RCM regularly to reflect changes in the business environment, such as new risks, changes in regulations, or updates to control measures. It is typically reviewed and updated annually or as needed.",
  },
  {
    question: "Can an RCM help improve operational efficiency?",
    answer:
      "Yes, an RCM can help improve operational efficiency by identifying areas where controls can be streamlined or enhanced to reduce costs, improve productivity, and mitigate risks more effectively.",
  },
  {
    question: "Is an RCM only beneficial for large organizations?",
    answer:
      "No, an RCM can benefit organizations of all sizes. Small and medium-sized enterprises (SMEs) can use an RCM to identify and manage risks effectively, ensure compliance with regulations, and enhance operational efficiency.",
  },
];

const RiskControlMatrix = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white text-[#163c4f]">
      {/* Banner */}
     <motion.div
            className="w-screen h-[50vh] overflow-hidden"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
        <img
          src="/RiskControlMatrixbanner.jpg"
          alt="Risk Control Matrix Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main Content */}
       <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        {/* Section 1 - Intro without image */}
        <motion.div
                className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02, boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)", transition: { duration: 0.4 } }}
              >
          <h2 className="text-4xl font-semibold mb-6 text-center text-[#0a2d45]">
            RISK CONTROL MATRIX (RCM)
          </h2>
           <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
          <p className="mb-5 text-[#0a2d45]">
            Risk Control Matrix (RCM) is a valuable tool for organizations to systematically identify, assess, and manage risks, as well as evaluate the effectiveness of control measures in mitigating those risks. We will be providing a constant support system in developing, reviewing, and monitoring RCM based on your business operations for different processes.
          </p>
          <p className="mb-5 text-[#0a2d45]">
            Our experienced team of risk management professionals works closely with clients to develop customized RCMs tailored to their specific needs and objectives.
          </p>
          <p className="text-[#0a2d45]">
            Our approach is to understand the importance of effective risk management in achieving organizational objectives and protecting value and accordingly tailor the services to meet the unique needs and risk profiles of each client. We work closely with your team to develop RCMs that are practical, actionable, and aligned with your business goals.
          </p>
          </div>
        </motion.div>

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
                      title: "Risk Identification:",
                      description:
                        "We work with you to identify and prioritize key risks facing your organization across various areas such as operations, finance, compliance, and strategic initiatives.",
                    },
                    {
                      title: "Control Assessment:",
                      description:
                        "Our team evaluates the effectiveness of existing controls to mitigate identified risks and identifies gaps or weaknesses that may require remediation.",
                    },
                    {
                      title: "Control Design:",
                      description:
                        " We assist in designing and implementing new controls or enhancements to existing controls to address identified risks and improve overall risk management.",
                    },
                    {
                      title: "Monitoring and Reporting:",
                      description:
                        "We help establish monitoring mechanisms to track the effectiveness of controls and provide regular reporting on risk management activities to management and stakeholders.",
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
          <div key={index} className="border border-[#d6e4ec] rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(index)}
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
                  animate={{ opacity: 1, height: 'auto' }}
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
        {/* Form and Back Button */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.5)}
        >
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
          <div className="mt-12 text-center">
            <Link
              to="/services/risk-assurance"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Back to Risk Assurance
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RiskControlMatrix;
