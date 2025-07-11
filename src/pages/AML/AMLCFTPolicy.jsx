import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";

const AMLCFTPolicy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const faqItems = [
    {
      question: "What is included in an AML/CFT policy manual?",
      answer:
        "It outlines a company’s processes to detect, report, and prevent money laundering and terrorism financing, aligned with regulatory expectations.",
    },
    {
      question: "Is AML compliance mandatory in the UAE?",
      answer:
        "Yes. Every business falling under the scope of UAE regulations must maintain AML/CFT policies, procedures, and controls.",
    },
    {
      question: "How often should AML policies be reviewed?",
      answer:
        "Ideally every 12 months, or immediately after regulatory updates or changes in operations.",
    },
  ];

  const services = [
    {
      title: "Risk Identification",
      description:
        "We analyze business processes to uncover exposure to money laundering or terrorist financing threats.",
    },
    {
      title: "Assessment of Existing AML Policies",
      description:
        "We evaluate your current AML framework and its effectiveness in addressing known risks.",
    },
    {
      title: "Gap Analysis",
      description:
        "We compare existing controls with identified risks to determine compliance and suggest improvements.",
    },
    {
      title: "AML/CFT Framework Creation",
      description:
        "We deliver a custom-built AML/CFT framework tailored to your business model and risk profile.",
    },
  ];

  return (
    <div className="w-full text-[#163c4f]">
      {/* Banner Section */}
      <motion.div
        className="w-full h-[50vh] overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/AML-CFT-2.jpg" // Replace with actual image
          alt="AML Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto mt-10 px-4 pb-10">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.4 },
          }}
        >
          <motion.h2 className="text-4xl text-center font-semibold mb-6 text-[#0a2d45]">
            Anti-Money Laundering (AML/CFT) Policy & Procedures
          </motion.h2>
          <p className="mb-5 text-[#0a2d45] max-w-4xl mx-auto">
            We help UAE businesses stay compliant with AML/CFT regulations by developing formalized policies, procedures, and control frameworks, ensuring operational integrity and legal alignment.
          </p>
          <p className="mb-5 text-[#0a2d45] max-w-4xl mx-auto">
            Our experts analyze your business's unique risks and design documentation tailored to your industry, size, and legal obligations.
          </p>
          <p className="mb-5 text-[#0a2d45] max-w-4xl mx-auto">
            With strong understanding of UAE AML laws, we ensure your organization is shielded from compliance risks while building trust and transparency.
          </p>
        </motion.div>
      </div>

      {/* Our AML Process Section */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            Our AML Compliance Documentation Process
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
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
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d]"
              >
                {item.question}
                <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
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
  

   
      {/* Contact Form */}
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
    </div>
  );
};

export default AMLCFTPolicy;
