import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const StrategicPlanning = () => {
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
      question: "What is strategic planning?",
      answer:
        "Strategic planning is the process of defining an organization's direction and making decisions on allocating resources to pursue its objectives effectively.",
    },
    {
      question: "Why is strategic planning important for businesses?",
      answer:
        "Strategic planning is important for businesses because it provides a roadmap for achieving long-term goals, helps in making informed decisions, and ensures alignment across the organization.",
    },
    {
      question: "What are the key components of strategic planning?",
      answer:
        "Key components of strategic planning include defining the vision and mission, conducting market analysis, setting goals and objectives, developing strategies, and creating action plans.",
    },
    {
      question: "What are the benefits of strategic planning for businesses?",
      answer: (
        <div>
          <p>The benefits of strategic planning for businesses include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Clear direction and focus on long-term goals</li>
            <li>Improved decision-making based on data and analysis</li>
            <li>Resource optimization and efficient allocation of resources</li>
            <li>Adaptability to changing market conditions</li>
            <li>Enhanced performance and profitability</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How often should strategic planning be reviewed and updated?",
      answer:
        "Strategic planning should be reviewed and updated regularly to ensure that it remains relevant and effective in guiding the organization toward its goals. This could be annually or more frequently depending on the business environment.",
    },
    {
      question:
        "Can strategic planning help in overcoming challenges and seizing opportunities?",
      answer:
        "Yes, strategic planning helps businesses anticipate and overcome challenges by providing a structured approach to problem-solving and risk management. It also enables businesses to identify and capitalize on opportunities for growth and innovation.",
    },
    {
      question: "Is strategic planning only for large businesses?",
      answer:
        "No, strategic planning is beneficial for businesses of all sizes. It helps small and medium-sized enterprises (SMEs) to compete effectively, adapt to market changes, and achieve sustainable growth.",
    },
    {
      question: "How does strategic planning contribute to organizational alignment?",
      answer:
        "Strategic planning ensures that all stakeholders in the organization are aligned with the same goals and objectives, promoting teamwork, collaboration, and a shared sense of purpose.",
    },
    {
      question:
        "How can strategic planning improve the overall performance of a business?",
      answer:
        "Strategic planning improves the overall performance of a business by providing a clear roadmap for success, ensuring efficient resource allocation, fostering innovation and adaptability, and driving continuous improvement.",
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
          src="/1STRATGIC.jpeg"
          alt="Mystery Audit Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
     
        <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
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
            <motion.h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
              STRATEGIC PLANNING
            </motion.h1>
            <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
              <p>
                Developing strategic plans for businesses to achieve long-term growth and competitiveness, identifying opportunities for expansion, diversification, or market entry, and implementing organizational changes to improve efficiency and effectiveness.It involves analysing the current state, setting goals, and developing strategies to achieve those goals effectively.
              </p>
              <p>
                Our experienced team collaborates closely with clients to develop customized strategies that align with their vision, objectives, and market dynamics.
              </p>
              <p>
                Our approach is to understand that strategic planning is critical for businesses to thrive in today's competitive environment which includes collaborative, data-driven, and focused on delivering tangible results. We work closely with clients to understand their unique challenges, opportunities, and aspirations, and develop practical strategies that drive growth and profitability.
              </p>
            </div>
          </motion.div>
        </div>

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
                    title: "Vision and Mission Development:",
                    description:
                      "We help businesses articulate their vision and mission, defining their purpose and guiding principles.",
                  },
                  {
                    title: "Market Analysis:",
                    description:
                      "We conduct thorough market analysis to identify trends, opportunities, and potential threats, helping businesses make informed strategic decisions.",
                  },
                  {
                    title: "SWOT Analysis:",
                    description:
                      "We conduct a SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis to assess internal capabilities and external factors affecting the business.",
                  },
                  {
                    title: "Goal Setting:",
                    description:
                      "We work with clients to set clear, achievable goals and objectives that align with their vision and mission.",
                  },
                   {
                    title: "Strategy Development:",
                    description:
                      "Based on the analysis and goal setting, we develop tailored strategies and action plans to achieve desired outcomes.",
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

export default StrategicPlanning;
