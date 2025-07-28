import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../../assets/components/SendQueryForm/SendQueryForm";
import {
  FileText,
  CloudUpload,
  Users,
  MessageCircle,
  Search,
  Shield,
  CheckCircle2,
  FileSignature,
  UserCheck,
} from "lucide-react";

const KYCAndCDDServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQSection = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const methodologySteps = [
    { icon: <FileText size={32} className="text-purple-600" />, title: "Issuance of Customer Onboarding Kit" },
    { icon: <CloudUpload size={32} className="text-purple-600" />, title: "Data Acquisition on secured and shared cloud-based repository" },
    { icon: <Users size={32} className="text-purple-600" />, title: "Data Processing by qualified AML consultants" },
    { icon: <MessageCircle size={32} className="text-purple-600" />, title: "Client communication for deficiency in data" },
    { icon: <Search size={32} className="text-purple-600" />, title: "Name Screening, Due Diligence, Enhanced Due Diligence" },
    { icon: <Shield size={32} className="text-purple-600" />, title: "Risk Assessment" },
    { icon: <CheckCircle2 size={32} className="text-purple-600" />, title: "Data Review by QC team" },
    { icon: <FileSignature size={32} className="text-purple-600" />, title: "Remedial Measures (SAR/STR/FFR/PNMR/Client Rejection)" },
    { icon: <UserCheck size={32} className="text-purple-600" />, title: "Customer Onboarding Completion" },
  ];

  const servicesOffered = [
    "Customer identification program (CIP)",
    "Customer due diligence (CDD)",
    "Ultimate Beneficial Owner Identification",
    "Enhanced due diligence (EDD)",
    "Risk assessment and customer risk rating (CRR)",
    "Sanctions screening (UAE Local Terrorist List, UNSC, OFAC, EU, etc.)",
    "Politically exposed person screening",
    "Adverse media screening",
    "KYC remediation and renewals",
    "Alert investigations",
    "Customizable due diligence reports",
    "Data auditing, cleansing, and validation",
  ];

  const faqItems = [
    {
      question: "How do you ensure data security during KYC processing?",
      answer: "We use secure, cloud-based repositories with encryption at rest and in transit, ensuring client data is protected at all times.",
    },
    {
      question: "Can you handle high volumes of onboarding requests?",
      answer: "Yes, our scalable processes and qualified AML consultants can manage large volumes efficiently without compromising quality.",
    },
    {
      question: "What is included in Enhanced Due Diligence?",
      answer: "EDD includes deeper investigation into high-risk customers, PEP screening, adverse media checks, and thorough background validation.",
    },
    {
      question: "How fast can onboarding be completed?",
      answer: "On average, onboarding completes within 24–48 hours, depending on complexity and responsiveness of the client.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <motion.div
        className="w-full h-[50vh] overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/1cdd.webp"
          alt="KYC and CDD Services"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Introduction */}
 <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-black text-4xl font-semibold text-center mb-10">
            KYC AND CDD SERVICES
          </h1>
          <div className="text-black-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              AML UAE provides managed KYC and CDD Services to ensure compliance with AML regulatory requirements and reduce operational costs.
            </p>
            <p>
              DNFBPs and FIs in the UAE often struggle with hiring qualified AML professionals. Internal inefficiencies and high fines for non-compliance make outsourced solutions more viable.
            </p>
            <p>
              Our managed KYC and CDD Services allow businesses to lower compliance costs, stay up to date with AML regulations, and identify risks early, while focusing on their core operations.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Services Offered */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-[#163c4f] mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Managed KYC and CDD Services We Offer
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {servicesOffered.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#0d3c58]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 text-base">{service}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Differentiators */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-[#163c4f] mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Key Differentiators
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Expertise in UAE AML Laws",
              description:
                "In-depth knowledge of Federal AML/CFT regulations and local compliance requirements.",
            },
            {
              title: "Tailored AML Programs",
              description:
                "Customized compliance solutions based on business size, type, and risk profile.",
            },
            {
              title: "Experienced Compliance Professionals",
              description:
                "A team with diverse experience in financial crime prevention and regulatory audits.",
            },
            {
              title: "End-to-End Support",
              description:
                "From registration to implementation, audit, and training—everything in one place.",
            },
            {
              title: "Tech-Driven AML Solutions",
              description:
                "We use automation tools to streamline AML workflows and reporting procedures.",
            },
          ].map((item, idx, arr) => {
            const isLastOdd = arr.length % 2 !== 0 && idx === arr.length - 1;
            const card = (
              <motion.div
                key={idx}
                className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#0d3c58] w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold text-[#0d3c58] mb-2">
                  {item.title}
                </h4>
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

      {/* Methodology */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.h3
          className="text-3xl font-semibold text-[#163c4f] mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          KYC and CDD Managed Service Methodology
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {methodologySteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {step.icon}
              <h4 className="text-lg font-semibold text-gray-800 mt-4">
                {step.title}
              </h4>
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
              onClick={() => toggleFAQSection(index)}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-[#0d3c58]">
            Send a Query
          </h2>
          <SendQueryForm />
        </motion.div>
      </div>
    </div>
  );
};

export default KYCAndCDDServices;
