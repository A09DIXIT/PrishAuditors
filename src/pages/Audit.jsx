import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

// Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Services Data
const services = [
  {
    title: "Statutory Audit",
    description:
      "We will be performing a thorough examination of financial records and providing assurance on the accuracy and reliability of your company’s financial statements.",
    link: "/statutory-audit",
    bg: "/StatutoryAudit.jpg",
  },
  {
    title: "Concurrent Audit",
    description:
      "It would be a real-time examination of financial transactions and processes conducted by us as an internal or external auditor to provide you with the timely feedback and ensure the effectiveness of internal controls and financial records.",
    link: "/concurrent-audit",
    bg: "/1ConcurrentAudit.jpeg",
  },
  {
    title: "Forensic Audit",
    description:
      "It will be a specialized examination of financial records, transactions, and documents conducted with the objective of identifying uncovering fraud, financial misconduct, or irregularities through gathering evidence, analyzing data, and identifying perpetrators of fraudulent activities.",
    link: "/forensic-audit",
    bg: "/1InternalAudit.jpg",
  },
  {
    title: "Inventory audit and verification",
    description:
      "Confirming the existence, completeness, and accuracy of inventory records and to assess the effectiveness of internal controls over inventory management process and suggesting the process improvement measures.",
    link: "/inventory-audit",
    bg: "/1ForensicAudit.jpg",
  },
  {
    title: "Mystery Audit",
    description:
      "Core assessments conducted by us as an independent evaluator to measure and evaluate the quality of service, compliance with policies and procedures, and overall customer experience with your company’s brand.",
    link: "/mystery-audit",
    bg: "/1MnagementAudit.jpeg",
  },
];

const Audit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      className="pt-0 pb-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Top Banner */}
      <motion.div
        className="w-screen h-[50vh] overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/Audit-Assurance.png"
          alt="Audit Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Section */}
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
            AUDITING AND ASSURANCE
          </motion.h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              We at <b>PRISH</b> have our core competence in the field of Audit and Assurance. Each of our audit assignments is customized as per audit statutory requirements governed by IFRS/ IAS. We ensure efficient and dedicated audit planning, execution and reporting supervised and reviewed carefully by our experts.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Grid Cards Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((audit, idx) => {
            const isMysteryAudit = audit.title === "Mystery Audit";

            const card = (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-lg group"
              >
                <img
                  src={audit.bg}
                  alt={audit.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/70 p-6 flex flex-col justify-end">
                  <h2 className="text-2xl font-semibold text-white mb-2 drop-shadow-lg">
                    {audit.title}
                  </h2>
                  <p className="text-white text-sm mb-3 leading-relaxed drop-shadow-md">
                    {audit.description}
                  </p>
                  <Link
                    to={audit.link}
                    className="text-blue-300 hover:underline text-sm font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </motion.div>
            );

            return isMysteryAudit ? (
              <div key={idx} className="md:col-span-2 flex justify-center">
                <div className="w-full md:w-[48%]">{card}</div>
              </div>
            ) : (
              <div key={idx}>{card}</div>
            );
          })}
        </div>
      </motion.div>

      {/* Send Query Form */}
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
    </motion.section>
  );
};

export default Audit;
