import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SendQueryForm from '../assets/components/SendQueryForm/SendQueryForm';

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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const RestructuringReorganization = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const highlights = [
    {
      title: "Strategic Assessment",
      desc: "We conduct a comprehensive assessment of the business to identify areas for improvement and develop a strategic roadmap for restructuring and reorganization."
    },
    {
      title: "Operational Review",
      desc: "We analyze existing processes, workflows, and resource allocation to identify inefficiencies and opportunities for optimization."
    },
    {
      title: "Financial Analysis",
      desc: "We evaluate the financial performance of the business to identify areas of financial distress and develop solutions to improve profitability."
    },
    {
      title: "Organizational Design",
      desc: "We work with our clients to redesign their organizational structure, roles, and responsibilities to align with strategic objectives and improve agility and efficiency."
    },
    {
      title: "Change Management",
      desc: "We provide support and guidance to manage the transition process, including communication, training, and stakeholder engagement, to ensure smooth implementation and minimize disruption."
    }
  ];

  // Use highlights as whyChoose data
  const whyChoose = highlights;

  // Render Why Choose cards with last one centered if odd count
  const renderWhyChooseCards = () => {
    const isOdd = whyChoose.length % 2 !== 0;
    return whyChoose.map((item, idx, arr) => {
      const isLastOdd = isOdd && idx === arr.length - 1;

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
          <p className="text-gray-700 text-base">{item.desc}</p>
        </motion.div>
      );

      if (isLastOdd) {
        return (
          <div key={idx} className="md:col-span-2 flex justify-center">
            <div className="md:w-[48%] w-full">{card}</div>
          </div>
        );
      }

      return <div key={idx}>{card}</div>;
    });
  };

const faqItems = [
  {
    question: "What is restructuring and reorganization?",
    answer:
      "Restructuring and reorganization involve making significant changes to a company's organizational structure, processes, and resources to improve performance, adapt to market conditions, or address financial challenges."
  },
  {
    question: "Why would a company need restructuring and reorganization?",
    answer: `
      Companies may need restructuring and reorganization for various reasons, such as:
      <ul>
        <li>Adapting to changes in the market or industry.</li>
        <li>Improving operational efficiency and reducing costs.</li>
        <li>Addressing financial challenges or distress.</li>
        <li>Aligning the organization with strategic objectives.</li>
        <li>Integrating acquisitions or divesting non-core assets.</li>
      </ul>
    `
  },
  {
    question: "What are the key benefits of restructuring and reorganization?",
    answer: `
      <ul>
        <li><strong>Improved Efficiency:</strong> Streamlining processes and reallocating resources can lead to improved operational efficiency and cost savings.</li>
        <li><strong>Enhanced Performance:</strong> Restructuring can refocus the business on core strengths, improving performance and competitiveness.</li>
        <li><strong>Adaptability:</strong> A well-designed organizational structure can make the business more agile and responsive to market changes and opportunities.</li>
        <li><strong>Financial Stability:</strong> Addressing financial challenges and optimizing financial resources can improve cash flow and ensure long-term financial stability.</li>
      </ul>
    `
  },
  {
    question: "What does the restructuring and reorganization process involve?",
    answer: 
    `
      The process typically includes:
      <ul>
        <li>Strategic assessment to identify areas for improvement.</li>
        <li>Operational review to analyze processes, workflows, and resource allocation.</li>
        <li>Financial analysis to evaluate performance and identify financial challenges.</li>
        <li>Organizational design to redesign structure, roles, and responsibilities.</li>
        <li>Change management to manage the transition process and ensure smooth implementation.</li>
      </ul>
    `
  },
  {
    question: "Can restructuring and reorganization services be customized to meet our company's needs?",
    answer:
      "Yes, these services can be customized to meet the unique needs and objectives of each client. Every business is different, and we tailor our approach to ensure maximum effectiveness and value."
  },
  {
    question: "How long does the restructuring and reorganization process take?",
    answer:
      "The duration depends on the size and complexity of the organization, the extent of the changes needed, and other factors."
  }
];


  return (
    <section className="bg-white max-w-8xl">
      <motion.div
             className="w-screen h-[50vh] overflow-hidden"
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1 }}
           >
        <img
          src="/1ReRS.jpg"
          alt="Restructuring and Reorganization"
          className="w-full h-full object-cover"
        />
      </motion.div>

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
          <motion.h1
                      className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4"
                      variants={fadeUpVariant}
                    >
            RESTRUCTURING AND REORGANIZATION SERVICES
          </motion.h1>

          <motion.div
            className="text-gray-800 text-xl space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeInUp}>
              These are the essential services for businesses facing financial, operational, or strategic challenges to adapt, evolve, and thrive in dynamic and competitive markets. We have experienced restructuring professionals in our team who can help companies to navigate complex restructuring processes, unlock value, and position themselves for long-term success and sustainability. It is designed to help businesses adapt to changing market conditions, improve operational efficiency, and maximize value.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Our experienced team provides strategic guidance and hands-on support throughout the restructuring process to achieve sustainable results.
            </motion.p>
            <motion.p variants={fadeInUp}>
             Our approach is to understand that every business is unique and tailor our approach to meet the specific needs and objectives of our clients. We are focusing on identifying opportunities for improvement, implementing strategic changes, and supporting our clients through every stage of the process.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-center text-[#163c4f] mb-10"
        >
          Why Choose PRISH?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {renderWhyChooseCards()}
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.h2
        className="text-3xl font-semibold text-center text-[#0a2d45] mb-10"
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
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
  className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base"
  dangerouslySetInnerHTML={{ __html: item.answer }}
></div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mb-10">
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
    </section>
  );
};

export default RestructuringReorganization;
