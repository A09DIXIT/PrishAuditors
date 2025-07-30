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
                Prish ensures the IT and business project implementations are becoming more complex and interwoven with the rapid advancements in technology globally. Organizations need help in building their capacity to deliver the right projects on time, with the right benefits. A substantial hurdle that organizations fail to navigate over in their projects is that of on-time delivery, closely followed by meeting the planned objectives and aligning them with stakeholder expectations.
              </p>
              <p>
                Companies need to understand that in order to ensure success, each phase of a project requires meticulous attention and planning. However, most organizations do not have the specialized resources to guarantee this. At JRB, our consultants are experts in all areas of IT project management and are driven by a keen desire to help our clients achieve optimal output through project efficacy.
              </p>
            </div>
          </motion.div>
        </div>
   
{/* ERP & Software Implementation Section */}
<div className="px-6 md:px-16 mt-12 max-w-8xl mx-auto">
  <motion.div
    className="bg-gradient-to-br from-[#e0f7fa] via-[#fff3e0] to-[#fce4ec] py-14 px-6 rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <motion.h2 className="text-[#0a2d45] text-3xl md:text-4xl font-bold mb-6 text-center">
      ERP & Software Implementations
    </motion.h2>
    <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-4 max-w-6xl mx-auto">
      <p>
        Our IT project advisory services are aimed to ensure your projects are conceptualized, guided, and delivered on time, every time. Our tried and tested methodologies ensure minimal risk of project failure through streamlined process definition, helping our clients unlock the true potential of their business.
      </p>
      <p>
        If history has shown us anything, it has been the unparalleled success of those who lead and establish market trends over those who follow such pioneers. This is not to say that all businesses have to be trendsetters – but the right steps have to be taken at the right time, within the parameters of the economic conditions at the time, in order to ensure the success of any project.
      </p>
      <p>
        Our team of experts supports organizations by guiding them at each stage of an IT project from initiation to closure – so no matter which stage of a project you are in, you will be in safe hands.
      </p>

      <ul className="list-disc pl-6 space-y-1">
        <li>Identifying and documenting your business requirements</li>
        <li>Vetting software contracts and negotiating with the software service providers</li>
        <li>Preparing a Request for Proposal (RFP) or Request for Information (RFI)</li>
        <li>Planning your software project</li>
        <li>Organizing and evaluating software demos</li>
        <li>IT Project Management</li>
        <li>Evaluating software and service providers</li>
        <li>Obtaining support services after an IT Project completion</li>
        <li>Selecting the most suitable vendor for your project</li>
      </ul>
    </div>
  </motion.div>
</div>

{/* AML Software Section */}
<div className="px-6 md:px-16 mt-12 max-w-8xl mx-auto">
  <motion.div
    className="bg-gradient-to-br from-[#ede7f6] via-[#f3e5f5] to-[#fff] py-14 px-6 rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <motion.h2 className="text-[#0a2d45] text-3xl md:text-4xl font-bold mb-6 text-center">
      AML Screening & Compliance Software
    </motion.h2>
    <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-4 max-w-6xl mx-auto">
      <p>
        Through our channel partners, we deliver professional services for the Anti Money Laundering (AML) compliance screening tool to comply with the relevant regulatory requirements and to safeguard a business from the risks of money laundering and terrorist financing.
      </p>
      <p>
        We understand the risks our clients face and offer solutions addressing key elements of compliance, including:
      </p>

      <ul className="list-disc pl-6 space-y-1">
        <li>Screening</li>
        <li>Risk Based Assessment</li>
        <li>On-Going Monitoring</li>
        <li>Reporting</li>
      </ul>
    </div>
  </motion.div>
</div>


      {/* Query Form */}
      <div className="mb-10 mt-15">
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
