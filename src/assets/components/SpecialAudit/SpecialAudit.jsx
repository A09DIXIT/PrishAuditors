import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const bannerVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
};

const audits = [
  {
    title: "Gold Audit",
    content:
      '"Gold Audit" typically refers to the process of auditing gold and jewelry traders or dealers to ensure compliance with relevant regulations and standards due to the significant role of the gold and jewelry industry in the country\'s economy.',
    path: "/gold-audit",
    image: "/goldAudit1.jpg",
  },
  {
    title: "System Audit",
    content:
      "System audits are critical for identifying IT-related risks, enhancing security posture, improving operational efficiency, and ensuring compliance with regulatory requirements and industry best practices through mitigating IT risks, strengthening IT governance frameworks and safeguarding IT assets and data.",
    path: "/system-audit",
    image: "/systemAudit.avif",
  },
  {
    title: "Transaction Audit",
    content:
      "Transaction Audits will involve the examination and review of specific financial transactions within an organization to ensure accuracy, compliance, and integrity. In this, we will focus on verifying the completeness, validity, and appropriateness of individual transactions recorded in the organization's financial records.",
    path: "/transaction-audit",
    image: "/1T-A.jpg",
  },
  {
    title: "RERA Audit",
    content:
      "Real Estate Regulatory Authority (RERA) is responsible for regulating the real estate sector in UAE, especially in Dubai. RERA audits are conducted to ensure compliance with regulations, transparency and fairness in real estate transactions by promoting confidence and trust among investors, buyers and other stakeholders.",
    path: "/rera-audit",
    image: "/1RERA-AUDIT.webp",
  },
  {
    title: "Sales Tax Certification Audits",
    content:
      "Sales Certification refers to a process whereby companies obtain accreditation to engage in sales activities within specific industries. Obtaining sales certification demonstrates competence, professionalism, and compliance with regulatory standards, enhancing the credibility and trustworthiness of the organization's activities.",
    path: "/sales-tax-certification-audit",
    image: "/1SALES-Audit.jpg",
  },
];

export default function SpecialAudit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white max-w-8xl">
      {/* Banner */}
      <motion.div
        className="w-screen h-[50vh] overflow-hidden mt-0 relative"
        initial="hidden"
        animate="visible"
        variants={bannerVariants}
      >
        <img
          src="/Special-Audit123.jpeg"
          alt="Special Audit Banner"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Intro Text */}
     <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-12 px-4 sm:px-6 lg:px-10 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 className="text-black text-4xl font-semibold text-center mb-6">
            SPECIAL AUDITS
          </motion.h2>
          <p className="text-gray-800 text-base md:text-xl leading-relaxed max-w-5xl mx-auto text-center">
            Special audits referred to as an extraordinary audit, is a type of audit that is conducted in response to specific circumstances or events that warrant closer examination beyond the scope of regular audits. It typically involves a detailed examination of specific financial records, transactions, systems or procedures within an organization. Unlike regular audits, which are routine and cover broader aspects of financial reporting, special audits are targeted and focused on particular areas of concern or interest.
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {audits.map((audit, idx) => {
            const isLast = audit.title === "Sales Tax Certification Audits";

            const card = (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-lg group"
              >
                <img
                  src={audit.image}
                  alt={audit.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <h2 className="text-xl font-bold text-white mb-2">
                    {audit.title}
                  </h2>
                  <p className="text-white text-sm mb-3 leading-relaxed">
                    {audit.content}
                  </p>
                  <Link
                    to={audit.path}
                    className="text-blue-300 hover:underline text-sm font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </motion.div>
            );

            return isLast ? (
              <div key={idx} className="md:col-span-2 flex justify-center">
                <div className="w-full md:w-[48%]">{card}</div>
              </div>
            ) : (
              <div key={idx}>{card}</div>
            );
          })}
        </div>
      </motion.div>

      {/* Query Form */}
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
}
