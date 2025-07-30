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
      " Corporate Tax is a form of direct tax levied on the net income or profit of corporations and other businesses. Corporate Tax is sometimes also referred to as “Corporate Income Tax” or “Business Profits Tax” in other jurisdictions.",
  },
  {
    question: "Why is the UAE introducing Corporate Tax?",
    answer:
      "A competitive Corporate Tax regime based on international best practices is expected to cement the UAE’s position as a leading global hub for business and investment and accelerate the UAE’s development and transformation to achieve its strategic objectives. <br /> Introducing a Corporate Tax regime also reaffirms the UAE’s commitment in meeting international standards for tax transparency and preventing harmful tax practices.",
  },
  {
    question: "Is the UAE the first country to introduce Corporate Tax?",
    answer:
      "Most countries in the world have a comprehensive Corporate Tax regime, including most of the countries in the Middle East.",
  },
  {
    question: "When is the UAE Corporate Tax regime effective?",
    answer:
      <div class="accordion-body">
                  The UAE Corporate Tax regime is effective for Financial Years
                  starting on or after 1 June 2023. Examples:
                  <ul>
                    <li>
                      A Business that has a Financial Year starting on 1 July
                      2023 and ending on 30 June 2024 is subject to UAE
                      Corporate Tax from 1 July 2023 (which is the beginning of
                      the first Financial Year that starts on or after 1 June
                      2023).
                    </li>
                    <li>
                      A Business that has a Financial Year starting on 1 January
                      2023 and ending on 31 December 2023 will become subject to
                      UAE Corporate Tax from 1 January 2024 (which is the
                      beginning of the first Financial Year that starts on or
                      after 1 June 2023).
                    </li>
                  </ul>
                </div>
  },
  {
    question: "Who is subject to UAE Corporate Tax?",
    answer:
       <div class="accordion-body">
                  UAE Corporate Tax applies to juridical persons incorporated in
                  the UAE and to foreign juridical persons that are effectively
                  managed and controlled in the UAE (see question 20: ‘Who is
                  considered a Resident Person for UAE Corporate Tax
                  purposes?’). A foreign juridical person that operates in the
                  UAE through a Permanent Establishment or that has a taxable
                  nexus in the UAE would also be subject to Corporate Tax (see
                  Section M “Foreign persons”).
                  <br />
                  Natural persons will be subject to Corporate Tax only if they
                  are engaged in a Business or Business Activity in the UAE,
                  either directly or through an Unincorporated Partnership or
                  sole proprietorship. Cabinet Decision No. 49 of 2023 specifies
                  further information on what would bring a natural person
                  within the scope of UAE Corporate Tax.
                </div>
  },
  {
    question:
      "Will UAE entities owned by UAE or GCC nationals be subject to UAE Corporate Tax?",
    answer:
      <div class="accordion-body">
                  Yes. The application of UAE Corporate Tax does not
                  differentiate between entities that are locally or
                  internationally owned.
                  <br />
                  Juridical persons that are incorporated or resident in the
                  UAE, or foreign entities that have a Permanent Establishment
                  or taxable nexus in the UAE, will be subject to UAE Corporate
                  Tax irrespective of the residence and nationality of the
                  individual founders or (ultimate) owners of the entity.
                </div>
  },
  {
    question:
      "Will UAE Corporate Tax be applicable to businesses in all Emirates?",
    answer:
      "Yes. The UAE Corporate Tax is a federal tax and will therefore apply across all the Emirates.",
  },
  {
    question:
      "Will I have to pay UAE Corporate Tax alongside Emirate level taxes?",
    answer:
      <div class="accordion-body">
                  Businesses engaged in the extraction of the UAE’s Natural
                  Resources and in certain non-extractive activities that are
                  subject to Emirate level taxation will be outside the scope of
                  UAE Corporate Tax, subject to meeting certain conditions.
                  <br />
                  Other businesses may be subject to both Corporate Tax and
                  Emirate level taxation. Emirate level taxes paid will not be
                  able to be credited against or otherwise reduce the amount of
                  Corporate Tax Payable.
                </div>
  },
  {
    question: "Will UAE Corporate Tax replace VAT in the UAE?",
    answer:
      " No, Corporate Tax and VAT are two different types of taxes. Both will apply in the UAE.",
  },
  {
    question:
      "Will I have to pay UAE Corporate Tax alongside VAT in the UAE?",
    answer:
      " If you are a registered business for VAT, you will have to pay VAT and Corporate Tax separately. If your business is not registered for VAT you may still have to pay Corporate Tax.",
  },
  {
    question: "Will UAE Corporate Tax replace Excise Tax in the UAE?",
    answer:
      "  No, Corporate Tax and Excise Tax are two different types of taxes. Both will apply in the UAE.",
  },
  {
    question:
      "Will I continue to pay service fees to the Federal and Emirate Governments now that the UAE has introduced Corporate Tax?",
    answer:
     <div class="accordion-body">
                  Yes. Applicable service fees will continue to be payable to
                  the Federal or relevant Emirate Government.
                  <br />
                  Business set up, licence renewal and other Government fees and
                  charges that are incurred in the ordinary course of business
                  should generally be deductible expenses for UAE Corporate Tax
                  purposes.
                </div>
  },
  {
    question:
      "Will I need to consider the UAE’s international agreements for UAE Corporate Tax purposes?",
    answer:
       <div class="accordion-body">
                  In-force international agreements (including international
                  agreements for the avoidance of double taxation) to which the
                  UAE is a party should be considered under the UAE Corporate
                  Tax regime.
                  <br />
                  In case of a conflict between the Corporate Tax Law and an
                  international agreement with respect to the right to tax a
                  certain item of income, the relevant international agreement
                  may limit the application of UAE Corporate Tax.
                </div>
  },
  {
    question: "What will be the role of the Federal Tax Authority?",
    answer:
      "The Federal Tax Authority will be responsible for the administration, collection and enforcement of UAE Corporate Tax and other federal taxes. For the purpose of the administration, collection and enforcement of Corporate Tax, the Federal Tax Authority will issue guides, respond to clarifications and provide awareness sessions as required.",
  },
  {
    question: "What will be the role of the Ministry of Finance?",
    answer:
      "The Ministry of Finance is the competent authority for the purposes of bilateral/multilateral tax agreements and the international exchange of information for tax purposes. The Ministry of Finance also has the authority to issue further implementing regulations for UAE Corporate Tax and other federal taxes.", },
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
            UAE CORPORATE TAX
          </motion.h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              Corporate Tax has been introduced for the very first time in UAE with effect from 1st June 2023 and since the emerging law requires a vibrant understanding for our clients, we hereby provide UAE Corporate Tax Impact Assessment and Analysis, Registration, return filing, Corporate Tax Consultancy based on the specific businesses and their operations. UAE Corporate Services encompass a variety of services designed to assist businesses with company formation, compliance, governance, and other corporate matters. These services help businesses establish and maintain their presence in the UAE while ensuring compliance with local regulations.
            </p>
            <p>
              Our expert team provides comprehensive support to help businesses navigate the complex regulatory landscape and achieve their corporate objectives efficiently and effectively.
            </p>
            <p>
              Our approach is to understand the unique challenges and opportunities that businesses face in the UAE. It's tailored to meet the specific needs and objectives of each client. We provide personalized assistance, expert advice, and practical solutions to help businesses succeed in the UAE market.
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
                "We assist businesses with company setup, including choosing the right legal structure, preparing documentation, obtaining necessary licenses, and completing registration with relevant authorities.",
            },
            {
              title: "Corporate Governance",
              description:
                "We guide corporate governance best practices and help businesses establish effective corporate governance frameworks to ensure transparency, accountability, and compliance with regulations.",
            },
            {
              title: "Compliance Management",
              description:
                "Our team helps businesses navigate the complex regulatory environment in the UAE, ensuring compliance with company laws, tax regulations, employment laws, and other applicable regulations.",
            },
            {
              title: "Corporate Restructuring",
              description:
                "We assist businesses with corporate restructuring activities such as mergers, acquisitions, reorganizations, and liquidations, helping them optimize their corporate structure and achieve their strategic objectives.",
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
