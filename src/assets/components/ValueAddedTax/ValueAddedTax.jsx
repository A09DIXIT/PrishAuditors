import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

const VAT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const faqs = [
    {
      question: "What is VAT?",
      answer:
        "VAT (Value Added Tax) is a consumption tax ultimately paid by the end consumer. Though charged at each step of the supply chain, the burden falls on the end user. Businesses collect and forward VAT to the government. If input tax exceeds output tax, refunds can be claimed.",
    },
    {
      question: "What is UAE VAT Registration?",
      answer:
        "VAT Registration refers to registering a business with the UAE Federal Tax Authority. Upon successful registration, a unique VAT identification number is issued.",
    },
    {
      question: "What is the difference between VAT and Sales Tax?",
      answer:
        "VAT applies to both goods and services at each supply chain step, while sales tax is applied only at the final sale and generally only on goods.",
    },
    {
      question: "Which Companies are Required to Register for VAT in the UAE?",
      answer:
        "Companies with taxable imports and supplies exceeding AED 375,000 must register. Those above AED 187,500 may register voluntarily.",
    },
    {
      question: "How Much VAT is Charged in the UAE?",
      answer:
        "The standard VAT rate in the UAE is 5%. However, certain sectors are either exempt or zero-rated.",
    },
    {
      question: "Which sectors are exempt from VAT?",
      answer:
        "Financial services, residential properties, bare land, and local passenger transport are exempt from VAT within the UAE.",
    },
    {
      question: "Which are zero-rated sectors?",
      answer:
        "Sectors charged with 0% VAT include certain exports, international transport, select education and healthcare services, and specific precious metals.",
    },
    {
      question: "How to Register for VAT in UAE?",
      answer:
        "Businesses must submit an application with required documents to the Federal Tax Authority. A VAT registration certificate is then issued.",
    },
    {
      question: "What are the Required Documents for VAT Registration in the UAE?",
      answer:
        "Documents include passport and Emirates ID copies, trade license, MOA, bank details, custom code, turnover declaration, and more depending on business activity.",
    },
  ];

  return (
    <div className="w-full">
      {/* Banner */}
       <motion.div
              className="w-screen h-[50vh] overflow-hidden"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
        <img
          src="/VAT1.jpg"
          alt="VAT Services Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Introduction */}
        <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 mb-10 sm:px-6 lg:px-8 rounded-lg shadow-md"
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
            VALUE ADDED TAX (VAT)
          </motion.h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              Assisting businesses in the UAE with the VAT registration process,
              providing support and guidance on compliance requirements such as
              filing VAT returns, maintaining VAT records, and implementing VAT
              accounting systems. We also provide VAT Advisory services for the
              application of VAT to specific transactions, products, and services,
              VAT planning, and optimization.
            </p>
            <p>
              UAE VAT services encompass a range of activities aimed at helping
              businesses understand, implement, and manage VAT compliance
              requirements by the regulations set by the Federal Tax Authority
              (FTA) of the UAE.
            </p>
            <p>
              Our experienced team provides expert guidance and support to ensure
              compliance with VAT regulations, optimize tax efficiency, and
              mitigate risks associated with VAT implementation and reporting.
            </p>
            <p>
              Our approach is to understand the complexities of VAT regulations
              and the challenges businesses face in complying with them. Our
              approach to UAE VAT services is tailored to meet the specific needs
              and objectives of each client. We provide a comprehensive range of
              services, including VAT registration, advisory, compliance, and
              representation.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Choose PRISH Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
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
              title: "VAT Registration",
              description:
                "We assist businesses with VAT registration, ensuring they meet all requirements and deadlines set by the FTA.",
            },
            {
              title: "VAT Advisory",
              description:
                "Our expert advisors guide VAT compliance, including the classification of supplies, the VAT treatment of transactions, and implications for business operations.",
            },
            {
              title: "VAT Compliance",
              description:
                "We help businesses prepare and submit accurate VAT returns, maintain proper records, and comply with filing deadlines to avoid penalties.",
            },
            {
              title: "VAT Representation",
              description:
                "Our team can act as a liaison between businesses and the FTA, representing clients during tax audits, assessments, and disputes.",
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

      {/* FAQ Section */}
      <div className="mt-16 max-w-8xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            Frequently Asked Questions
          </h3>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md border border-[#163c4f]/20"
            >
              <div
                onClick={() => toggleFAQ(idx)}
                className="flex justify-between items-center cursor-pointer px-5 py-4 font-medium text-[#f5fafd] text-lg bg-[#0d3c58] rounded-t-lg hover:bg-[#0d3c58] transition"
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {openIndex === idx ? "▲" : "▼"}
                </span>
              </div>
              {openIndex === idx && (
                <div className="px-5 pb-4 text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
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
          <div className="mt-18 mb-10 text-center">
            <Link
              to="/services/taxation"
              className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
            >
              Back to TAXATION
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VAT;
