import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

const CorporateTax = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
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
    question: "What is Corporate Tax?",
    answer:
      "Corporate Tax is a form of direct tax levied on the net income or profit of corporations and other businesses. It is also referred to as 'Corporate Income Tax' or 'Business Profits Tax' in other jurisdictions.",
  },
  {
    question: "Why is the UAE introducing Corporate Tax?",
    answer:
      "A competitive Corporate Tax regime based on international best practices strengthens the UAE’s position as a global business hub and supports its strategic goals. It also affirms the UAE’s commitment to international tax transparency.",
  },
  {
    question: "Is the UAE the first country to introduce Corporate Tax?",
    answer:
      "No, most countries—including those in the Middle East—already have Corporate Tax regimes in place.",
  },
  {
    question: "When is the UAE Corporate Tax regime effective?",
    answer:
      "It is effective for financial years starting on or after 1 June 2023. For example:\n• A business with a financial year from 1 July 2023 to 30 June 2024 is subject from 1 July 2023.\n• A business with a year starting 1 January 2023 is subject from 1 January 2024.",
  },
  {
    question: "Who is subject to UAE Corporate Tax?",
    answer:
      "UAE-incorporated juridical persons, foreign juridical persons effectively managed in the UAE, and foreign entities with a UAE Permanent Establishment or taxable nexus. Natural persons are subject only if engaged in business activities.",
  },
  {
    question:
      "Will UAE entities owned by UAE or GCC nationals be subject to UAE Corporate Tax?",
    answer:
      "Yes. All juridical persons resident or incorporated in the UAE, or with a permanent establishment or taxable nexus, are subject regardless of ownership.",
  },
  {
    question:
      "Will UAE Corporate Tax be applicable to businesses in all Emirates?",
    answer:
      "Yes. Corporate Tax is a federal tax and applies uniformly across all Emirates.",
  },
  {
    question:
      "Will I have to pay UAE Corporate Tax alongside Emirate level taxes?",
    answer:
      "Yes, for some businesses. However, entities involved in natural resource extraction and certain exempt activities may only pay Emirate-level tax. Emirate taxes can't offset Corporate Tax liabilities.",
  },
  {
    question: "Will UAE Corporate Tax replace VAT in the UAE?",
    answer:
      "No. Both Corporate Tax and VAT will apply separately in the UAE.",
  },
  {
    question:
      "Will I have to pay UAE Corporate Tax alongside VAT in the UAE?",
    answer:
      "Yes. If you're VAT-registered, you'll need to pay both taxes separately. Non-VAT businesses may still be liable for Corporate Tax.",
  },
  {
    question: "Will UAE Corporate Tax replace Excise Tax in the UAE?",
    answer:
      "No. Corporate Tax and Excise Tax are separate taxes and both will remain applicable.",
  },
  {
    question:
      "Will I continue to pay service fees to the Federal and Emirate Governments now that the UAE has introduced Corporate Tax?",
    answer:
      "Yes. Service fees (e.g., license renewal, registration) will still apply. These may be deductible business expenses for Corporate Tax purposes.",
  },
  {
    question:
      "Will I need to consider the UAE’s international agreements for UAE Corporate Tax purposes?",
    answer:
      "Yes. International tax treaties and agreements (like double taxation agreements) may override aspects of the UAE’s Corporate Tax law.",
  },
  {
    question: "What will be the role of the Federal Tax Authority?",
    answer:
      "The FTA will handle the administration, collection, and enforcement of Corporate Tax, including issuing guides and clarifications.",
  },
  {
    question: "What will be the role of the Ministry of Finance?",
    answer:
      "The Ministry oversees tax treaties, international tax cooperation, and can issue regulations for the Corporate Tax regime.",
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
          src="/1UAECORPORATE.avif"
          alt="Corporate Tax Services Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto mt-10 px-4 pb-10">
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
            UAE CORPORATE TAX
          </motion.h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              Corporate Tax has been introduced for the very first time in UAE with effect from 1st June 2023. Since the emerging law requires a vibrant understanding for our clients, we provide UAE Corporate Tax Impact Assessment and Analysis, Registration, return filing, and Corporate Tax Consultancy based on specific business operations.
            </p>
            <p>
              UAE Corporate Services encompass a variety of services designed to assist businesses with company formation, compliance, governance, and other corporate matters.
            </p>
            <p>
              Our expert team provides comprehensive support to help businesses navigate the complex regulatory landscape and achieve their corporate objectives efficiently and effectively.
            </p>
            <p>
              Our approach is tailored to the specific needs and objectives of each client. We provide personalized assistance, expert advice, and practical solutions to help businesses succeed in the UAE market.
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
              title: "Company Formation",
              description:
                "We assist businesses with company setup, selecting legal structures, documentation, licenses, and registrations.",
            },
            {
              title: "Corporate Governance",
              description:
                "We guide businesses on best practices and frameworks for transparency, accountability, and legal compliance.",
            },
            {
              title: "Compliance Management",
              description:
                "We help businesses comply with UAE laws related to tax, employment, and company operations, minimizing legal risks.",
            },
            {
              title: "Corporate Restructuring",
              description:
                "We support businesses during mergers, acquisitions, and reorganizations to achieve strategic goals efficiently.",
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
   

        {/* Form + Navigation */}
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

export default CorporateTax;
