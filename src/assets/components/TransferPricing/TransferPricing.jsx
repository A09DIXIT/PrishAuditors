import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

const TransferPricing = () => {
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
    question: "What is transfer pricing?",
    answer:
      "Transfer pricing refers to the pricing of goods, services, and intangible assets transferred between related entities within a multinational corporation.",
  },
  {
    question: "Why is transfer pricing important?",
    answer:
      "It ensures that transactions between related parties are conducted at arm's length, preventing tax evasion and ensuring fair taxation and regulatory compliance.",
  },
  {
    question: "What are the risks associated with transfer pricing?",
    answer:
      "Risks include double taxation, penalties for non-compliance, reputational harm, and disputes with tax authorities.",
  },
  {
    question: "What is the arm's length principle?",
    answer:
      "It's an international standard requiring related-party transactions to be priced as if they were between unrelated, independent parties in an open market.",
  },
  {
    question: "What documentation is required for transfer pricing compliance?",
    answer:
      "Typically includes a master file, local file, and country-by-country report outlining the company’s policies, transactions, and financial data.",
  },
  {
    question:
      "Are there any transfer pricing methods used for determining arm's length prices?",
    answer:
      "Yes. Common methods include the CUP method, cost-plus method, resale price method, and transactional net margin method (TNMM).",
  },
  {
    question: "What is the process for implementing a transfer pricing policy?",
    answer:
      "It involves conducting a pricing study, selecting appropriate methods, documenting procedures, and ensuring ongoing compliance.",
  },
  {
    question: "What are the benefits of implementing a transfer pricing policy?",
    answer:
      "Benefits include lower audit risk, tax efficiency, better documentation, operational consistency, and enhanced regulatory compliance.",
  },
  {
    question:
      "How often should transfer pricing policies be reviewed and updated?",
    answer:
      "They should be reviewed regularly, especially when business models, regulations, or market conditions change.",
  },
];

  const services = [
    {
      title: "Transfer Pricing Documentation",
      description:
        "We prepare comprehensive transfer pricing documentation to support the arm's length nature of intercompany transactions, including master files, local files, and country-by-country reports.",
    },
    {
      title: "Transfer Pricing Policy Development",
      description:
        "We assist in developing and implementing transfer pricing policies that align with your business objectives, mitigate risks, and ensure compliance with local regulations.",
    },
    {
      title: "Transfer Pricing Planning",
      description:
        "Our team provides strategic transfer pricing planning to optimize your company's global tax position, minimize disputes with tax authorities, and maximize operational efficiencies.",
    },
    {
      title: "Transfer Pricing Audits and Dispute Resolution",
      description:
        "We represent clients in transfer pricing audits and assist in resolving disputes with tax authorities, including negotiating advanced pricing agreements (APAs) and mutual agreement procedures (MAPs).",
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
          src="/1TP.jpg"
          alt="Transfer Pricing Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 mb-10 sm:px-6 lg:px-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
            TRANSFER PRICING
          </motion.h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              Assisting corporates in complying with transfer pricing regulations
              in the UAE and other jurisdictions, including documentation
              requirements, pricing adjustments, strategic planning, and compliance
              support.
            </p>
            <p>
              We ensure related-party transactions are conducted at arm's length,
              as if between independent parties. Our team provides tailored
              solutions to align your pricing practices with regulations and
              international standards.
            </p>
            <p>
              Our services focus on risk management, compliance, and value creation—
              customized for each client's unique business structure and needs.
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
          {services.map((item, idx) => (
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

export default TransferPricing;
