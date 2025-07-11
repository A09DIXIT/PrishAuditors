import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

const TRC = () => {
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
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };


  
  const faqs = [
    {
      question: "What is a Tax Residency Certificate (TRC)?",
      answer:
        "A Tax Residency Certificate (TRC) is an official document issued by the tax authorities of a country confirming an individual or entity's tax residency status in that country for a specific period.",
    },
    {
      question: "Why is a Tax Residency Certificate (TRC) important?",
      answer:
        "A TRC is important for individuals and businesses to establish their tax residency status in a particular country, which is essential for accessing tax treaty benefits, avoiding double taxation, and complying with regulatory requirements.",
    },
    {
      question: "Who can apply for a Tax Residency Certificate (TRC)?",
      answer:
        "Individuals and businesses that meet the tax residency criteria of a particular country can apply for a TRC. The criteria may vary depending on the country's tax laws and regulations.",
    },
    {
      question: "What are the benefits of obtaining a Tax Residency Certificate (TRC)?",
      answer:
        "The benefits of obtaining a TRC include: Access to tax treaty benefits, such as reduced withholding tax rates on dividends, interest, and royalties. Avoidance of double taxation on income earned in different jurisdictions. Compliance with regulatory requirements, including proof of tax residency for banking and investment purposes. Facilitated business operations and cross-border transactions.",
    },
    {
      question: "What documents are required to apply for a Tax Residency Certificate (TRC)?",
      answer:
        "The documents required for TRC application may include proof of identity, proof of address, evidence of tax payments, and supporting financial documents, depending on the country's requirements.",
    },
    {
      question: "How long does it take to obtain a Tax Residency Certificate (TRC)?",
      answer:
        "The processing time for TRC applications varies depending on the country and the complexity of the application.",
    },
    {
      question: "Can a Tax Residency Certificate (TRC) be used to claim tax treaty benefits?",
      answer:
        "Yes, a TRC serves as proof of tax residency and can be used to claim tax treaty benefits provided under double taxation avoidance agreements between countries.",
    },
    {
      question: "Is a Tax Residency Certificate (TRC) valid indefinitely?",
      answer:
        "TRCs are typically valid for a specific period, such as one year, and may need to be renewed annually or as required by the tax authorities.",
    },
    {
      question: "How can businesses benefit from obtaining a Tax Residency Certificate (TRC)?",
      answer:
        "Businesses can benefit from TRCs by accessing tax treaty benefits, reducing tax liabilities, facilitating cross-border transactions, and ensuring compliance with regulatory requirements in various jurisdictions.",
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
          src="/1TRC.jpg"
          alt="TRC Banner"
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
          whileHover={{ scale: 1.02, boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)", transition: { duration: 0.4 } }}
        >
          <motion.h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
            TAX RESIDENCY CERTIFICATE (TRC)
          </motion.h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              A tax residency (Domicile) certificate in UAE is issued by the International Financial Relations and Organizations Department which permits eligible government entities, companies, and individuals to take advantage of agreements of double taxation avoidance. We at PRISH provide professional assistance in coordinating with the ministry offices and availing the tax residency (domicile) certificate.
            </p>
            <p>
              Our expert team offers tailored solutions to ensure compliance with local regulations and facilitate the TRC application process efficiently.
            </p>
            <p>
              Our approach is to understand the importance of TRCs for individuals and businesses for various purposes such as accessing tax treaty benefits, avoiding double taxation, and complying with regulatory requirements. It is designed to streamline the application process and provide clients with the necessary support and guidance.
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
          {["Consultation", "Documentation Assistance", "Application Submission", "Follow-up and Support"].map((title, i) => {
            const desc = [
              "We provide expert consultation to determine eligibility for obtaining a TRC and assess the requirements based on individual or business circumstances.",
              "Our team assists in preparing the required documentation, including application forms, supporting financial documents, and any other necessary paperwork.",
              "We handle the entire application process, including submission to the relevant tax authorities, ensuring completeness and accuracy to expedite the issuance of the TRC.",
              "We follow up with the tax authorities on behalf of our clients and provide ongoing support throughout the application process, addressing any queries or additional requirements that may arise."
            ];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
              >
                <h4 className="text-xl font-semibold text-[#163c4f] mb-2">{title}</h4>
                <p className="text-gray-700 text-base">{desc[i]}</p>
              </motion.div>
            );
          })}
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
        </div>
      </div>
    </div>
  );
};

export default TRC;
