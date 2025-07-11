import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

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

const SOPs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqItems = [
    {
      question: "What are Standard Operating Procedures (SOPs)?",
      answer:
        "Standard Operating Procedures (SOPs) are documented instructions that outline the steps, responsibilities, and requirements for performing specific tasks or processes within an organization.",
    },
    {
      question: "Why are SOPs important for businesses?",
      answer:
        "SOPs are important for businesses because they ensure consistency, efficiency, and compliance with established standards. They help streamline operations, reduce errors, and improve overall performance.",
    },
    {
      question: "What is the process for developing SOPs with PRISH Consultancy?",
      answer:
        "PRISH Consultancy follows a structured process for developing SOPs, which includes process analysis, SOP development, training and implementation support, and regular review and revision.",
    },
    {
      question: "What industries can benefit from SOP preparation and development services?",
      answer:
        "SOP preparation and development services are beneficial to businesses across various industries, including manufacturing, healthcare, hospitality, retail, and more.",
    },
    {
      question: "How can SOPs benefit my organization?",
      answer: (
        <>
          <p><strong>Consistency:</strong> Ensure consistent execution of tasks and processes.</p>
          <p><strong>Efficiency:</strong> Streamline operations and reduce errors.</p>
          <p><strong>Compliance:</strong> Ensure compliance with regulatory requirements and industry standards.</p>
          <p><strong>Training and Onboarding:</strong> Facilitate training and onboarding of new employees.</p>
        </>
      ),
    },
    {
      question: "How often should SOPs be reviewed and updated?",
      answer:
        "SOPs should be reviewed and updated regularly to ensure they remain current and reflect any changes in processes or regulatory requirements. This could be annually or as needed based on changes in the organization.",
    },
    {
      question: "Can SOPs help improve employee performance?",
      answer:
        "Yes, SOPs can help improve employee performance by providing clear instructions and guidelines for performing tasks, reducing errors, and ensuring consistency in execution.",
    },
    {
      question: "What is the difference between SOPs and work instructions?",
      answer:
        "SOPs provide a comprehensive overview of a process, including the steps, responsibilities, and requirements, while work instructions provide detailed guidance on how to perform specific tasks within a process.",
    },
  ];

  return (
    <section className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
       <motion.div
              className="w-full h-[50vh] overflow-hidden"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
        <img
          src="/sops-banner.jpg"
          alt="SOPs Banner"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>


 <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
      <motion.div
              className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)", transition: { duration: 0.4 } }}
            >
        <motion.h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
          STANDARD OPERATING PROCEDURES (SOPs)
        </motion.h1>
        <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
          <p>
            SOPs are detailed step-by-step guidelines that describe how tasks and processes should be conducted within an organization. These are essential for ensuring consistency, compliance, and operational excellence.
          </p>
          <p>
            At PRISH, we help clients build robust SOPs by understanding internal workflows, defining roles and responsibilities through DOA Matrix, and incorporating regulatory needs.
          </p>
          <p>
            Our approach is consultative — we collaborate with teams, identify bottlenecks, and deliver customized SOPs that are practical, easy to implement, and aligned with industry best practices.
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
                   title: "Process Analysis:",
                   description:
                     "Our team consists of highly skilled and experienced auditors with extensive knowledge across various industries.",
                 },
                 {
                   title: "SOP Development:",
                   description:
                     "Based on our analysis, we develop customized SOPs that outline the steps, responsibilities, and requirements for each process, ensuring clarity and consistency.",
                 },
                 {
                   title: "Training and Implementation Support:",
                   description:
                     "We provide training and support to help your team understand and implement the new SOPs effectively.",
                 },
                 {
                   title: "Review and Revision:",
                   description:
                     "We regularly review and update the SOPs to ensure they remain current and reflect any changes in your processes or regulatory requirements.",
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
    </section>
  );
};

export default SOPs;