import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const TechnologyConsulting = () => {
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
      question: "What are technology consulting services?",
      answer:
        "Technology consulting services involve providing expert advice and support to businesses in leveraging technology to achieve their strategic objectives, improve operations, and drive growth.",
    },
    {
      question: "Why would a business need technology consulting service?",
      answer:
        "Businesses may need technology consulting services to stay competitive in the digital age, optimize their IT infrastructure, implement new technologies, and address specific challenges or opportunities.",
    },
    {
      question: "How can technology consulting services benefit my business?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Improved efficiency and productivity</li>
          <li>Enhanced customer experience</li>
          <li>Increased security and compliance</li>
          <li>Cost savings and return on investment (ROI)</li>
        </ul>
      ),
    },
    {
      question: "How can technology consulting services help with digital transformation?",
      answer:
        "Technology consulting services help businesses embrace digital technologies and processes to enhance customer experience, streamline operations, and drive growth through digital transformation initiatives.",
    },
    {
      question: "Can technology consulting services help with cybersecurity?",
      answer:
        "Yes, technology consulting services can help businesses strengthen their cybersecurity posture through proactive risk assessments, security audits, and implementation of robust security controls and protocols.",
    },
    {
      question: "What role does cloud computing play in technology consulting services?",
      answer:
        "Cloud computing is a key focus area of technology consulting services, enabling businesses to leverage scalable, agile, and cost-effective cloud infrastructure and services for various business needs.",
    },
    {
      question: "How do technology consulting services contribute to cost savings?",
      answer:
        "Technology consulting services contribute to cost savings through optimization of IT infrastructure, automation of processes, and strategic technology investments that deliver a positive return on investment (ROI).",
    },
    {
      question: "How can businesses measure the ROI of technology consulting services?",
      answer:
        "Businesses can measure the ROI of technology consulting services by evaluating improvements in efficiency, productivity, customer satisfaction, security posture, and cost savings achieved through technology initiatives.",
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
          src="/1TECHCONSULt.jpg"
          alt="Technology Consulting Banner"
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
              TECHNOLOGY CONSULTING
            </motion.h1>
            <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
              <p>
                Digital transformation strategy development, technology assessment, and implementation based on the business operations and requirements to ease the compliances. Our core experience in IT helps our clients to reduce extensive manual efforts and generate reports within a click of seconds.
              </p>
              <p>
                We offer comprehensive technology consulting services to help businesses leverage cutting-edge technologies, optimize their IT infrastructure, and drive digital transformation.
              </p>
              <p>
                Our approach is to understand that technology is a critical enabler of business success and it’s collaborative and results-oriented, focusing on delivering innovative solutions that drive business value and competitive advantage.
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
                    title: "IT Strategy and Roadmap:",
                    description:
                      "We help businesses develop IT strategies and roadmaps aligned with their business goals, ensuring that technology investments support their long-term objectives.",
                  },
                  {
                    title: "Digital Transformation:",
                    description:
                      "Our team assists businesses in embracing digital technologies and processes to enhance customer experience, streamline operations, and drive growth.",
                  },
                  {
                    title: "Cybersecurity:",
                    description:
                      "We assess and strengthen cybersecurity posture through proactive risk assessments, security audits, and implementation of robust security controls and protocols.",
                  },
                  {
                    title: "Cloud Computing:",
                    description:
                      "We guide businesses in migrating to the cloud, optimizing cloud infrastructure, and leveraging cloud services for scalability, agility, and cost-efficiency.",
                  },
                  {
                    title: "Data Analytics and Business Intelligence:",
                    description:
                      "We help businesses harness the power of data analytics and business intelligence to gain valuable insights, make informed decisions, and drive innovation.",
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


      {/* Query Form */}
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
    </div>
  );
};

export default TechnologyConsulting;
