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

  const faqItems = [
    {
      question: "What is VAT?",
      answer: (
        <>
          Firstly, VAT (Value Added Tax) is a consumption tax, which means that
          it is ultimately paid by the end consumer. Although VAT is charged at
          each step of the ‘supply chain,’ it is the end user who bears the cost.
          <br />
          VAT is collected by businesses and paid forward to the government.
          If a business has paid more VAT than it has collected, it can receive
          a refund from the government.
        </>
      ),
    },
    {
      question: "What is UAE VAT Registration?",
      answer:
        "By VAT Registration, we mean registering the company with the government to submit VAT. Upon approval, the FTA issues a unique VAT identification number.",
    },
    {
      question: "What is the difference between VAT and Sales Tax?",
      answer: (
        <>
          VAT and sales tax are both consumption taxes charged to the end-consumer.
          Differences include:
          <ul className="list-disc pl-5 mt-2">
            <li>Sales tax usually applies only to goods; VAT applies to goods and services.</li>
            <li>Sales tax is imposed only at the final sale; VAT is applied at each step of the supply chain.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Which Companies are Required to Register for VAT in the UAE?",
      answer: (
        <>
          Businesses with taxable supplies/imports over AED 375,000 must register.
          Those above AED 187,500 may register voluntarily.
          <br />
          Non-registration when required can lead to penalties and legal action.
        </>
      ),
    },
    {
      question: "How Much VAT is Charged in the UAE?",
      answer:
        "The standard VAT rate is 5%. Some sectors are exempt or zero-rated (0%) based on FTA regulations.",
    },
    {
      question: "Which sectors are exempt from VAT?",
      answer: (
        <>
          Exempt categories:
          <ul className="list-disc pl-5 mt-2">
            <li>Financial services</li>
            <li>Residential properties</li>
            <li>Bare land</li>
            <li>Local passenger transport</li>
          </ul>
        </>
      ),
    },
    {
      question: "Which are zero-rated sectors?",
      answer: (
        <>
          These are charged 0% VAT and must be properly declared:
          <ul className="list-disc pl-5 mt-2">
            <li>Gold/silver (99% purity)</li>
            <li>International transport and related services</li>
            <li>Certain ships, aircrafts, land transport</li>
            <li>New homes within 3 years of construction</li>
            <li>Certain education & healthcare services</li>
          </ul>
        </>
      ),
    },
    {
      question: "How to Register for VAT in UAE?",
      answer:
        "Submit an online application to the FTA with the required documents. Once approved, a VAT certificate is issued via the applicant’s FTA account.",
    },
    {
      question: "What are the Required Documents for VAT Registration in the UAE?",
      answer: (
        <>
          Required documents:
          <ul className="list-disc pl-5 mt-2">
            <li>Passports & Emirates IDs of owners/partners</li>
            <li>Trade license, MOA, address, branch info</li>
            <li>Bank details with IBAN letter</li>
            <li>Signatory info, turnover estimates</li>
            <li>Customs code & Dubai Customs Letter</li>
            <li>Export/import details, if applicable</li>
          </ul>
        </>
      ),
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
              Assisting businesses in the UAE with VAT registration, compliance
              support (returns, record keeping, accounting), and advisory on
              VAT treatment and planning.
            </p>
            <p>
              Our VAT experts help ensure full compliance with UAE FTA
              regulations and minimize risk or penalties.
            </p>
            <p>
              We customize our VAT services to meet client-specific needs across
              registration, filing, representation, and strategic advisory.
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
                "Our expert advisors guide VAT compliance, including classification of supplies and VAT treatment of transactions.",
            },
            {
              title: "VAT Compliance",
              description:
                "We help businesses prepare and submit VAT returns, maintain records, and comply with filing deadlines.",
            },
            {
              title: "VAT Representation",
              description:
                "We represent clients before the FTA during audits, assessments, and disputes.",
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
          {faqItems.map((item, idx) => (
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
                <span>{item.question}</span>
                <span className="text-xl">
                  {openIndex === idx ? "▲" : "▼"}
                </span>
              </div>
              {openIndex === idx && (
                <div className="px-5 pb-4 text-gray-700 text-base leading-relaxed">
                  {item.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Send Query */}
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
