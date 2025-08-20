import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

export default function InternalAudit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Money Laundering?",
      answer:
        "Money laundering is defined as any financial or banking transaction aimed at concealing or changing the source of illegally obtained funds, by passing it through the financial and banking system to make it appear as originating from legitimate sources, and then re-pumping and investing it illegally.",
    },
    {
      question: "What is Terrorist Financing?",
      answer:
        "Terrorism is the unlawful threat of action designed to compel the government or an international organization or intimidate the public or a section of the public to advance a political, religious, or ideological belief or cause. Terrorist Financing (TF), therefore, is where funds are generated through a legitimate source such as donations, or illegal activities such as the drug trade or fraud. These funds are normally used to support the agenda or cause of a terrorist organization.",
    },
    {
      question: "What is the difference between Money Laundering and Terrorist Financing?",
      answer:
        "With TF, the proceeds are used to carry out illegal activities designed to intimidate or cause disruption to public safety and are not necessarily from an illegal source. ML, on the other hand, emphasizes the concealment of the proceeds of criminal activity from detection. With both these crimes, however, the perpetrators seek to mask the nexus between themselves and the sources of their funding.",
    },
    {
      question: "What is Money Laundering and How Does It Work?",
      answer: (
        <>
          <p>Money laundering is the act of concealing the origin of illegally earned money. Let’s say a financial criminal has earned money through drug smuggling, trafficking, etc., and wants to hide the black money from law enforcement bodies. For this, the criminal will devise a strategy and place it in a bank account, or casino or even invest it somewhere. Money laundering works in the following three stages:</p>
          <p><strong>Placement:</strong> This is the first stage where black money is segregated into small amounts and placed in a financial infrastructure like a bank.</p>
          <p><strong>Layering:</strong> Now, black money is transacted multiple times through sales and purchases. For instance, the fraudster might convert some amount of money into bank drafts or invest in real estate as well.</p>
          <p><strong>Integration:</strong> This is the final stage when illegal money is brought into the economy. Integration is done by fake loans, shell companies, bogus invoices, etc.</p>
        </>
      ),
    },
    {
      question: "How to monitor money laundering?",
      answer:
        "By monitoring company information and profiles, screening Sanctions, PEP and Watchlists, tracking negative news about all stakeholders, partners, and suppliers, searching legal databases, and deep diving into the backgrounds of individuals working on the project or partnering with your company.",
    },
    {
      question: "Who is required to comply with the AML/CFT Regulations?",
      answer: (
        <>
          <p>Both domestic and international companies operating in the UAE need to follow AML-CFT Law. There are three main categories of companies that must comply:</p>
          <ul>
            <li>Financial institutions</li>
            <li>Designated non-financial businesses and professions.</li>
          </ul>
        </>
      ),
    },
    {
      question: "What is Designated Non-Financial Businesses and Professions (DNFBPs)?",
      answer: (
        <>
        <p>Following categories of businesses are included in this category:</p>
          <p><strong>Brokers & Real Estate Agents:</strong>Real Estate Firm that carries out transactions with customers involving the buying or selling of real property For example, real estate developers, brokers and agents.</p>
          <p><strong>Dealers in Precious Stones & Metals:</strong>Dealer of precious metals or stones who are are involved in the production of precious metals or precious stones, an intermediate buyer or broker, precious stone cutter and polisher, precious metal refiners, and/or jewelry manufacturer who use precious metals and precious stones to retail sellers to the public or buyers and sellers in the secondary and scrap markets. These include gold, silver, platinum, diamonds etc. For example, jewelry stores.</p>
          <p><strong>Brokers & Real Estate Agents:</strong>Now, black money is transacted multiple times through sales and purchases. For instance, the fraudster might convert some amount of money into bank drafts or invest in real estate as well.</p>
          <p><strong>Independent Legal Professionals & Accountants:</strong>Auditing, accounting or tax consultancy Firm that provide professional services and assurance to third parties on the financial and tax soundness of them and/or their business. For example, chartered accountants, accountants, tax specialists etc.</p>
           <p><strong>Providers of Corporate Service and Trusts:</strong>Trust or Company Service Provider who is involved in providing business services and consulting to third parties.</p>
        </>
      ),
    },
    {
      question: "What is the UAE Central Bank’s role in AML/CFT?",
      answer:
        "The CBUAE established a dedicated department in August 2020 to handle all Anti-Money Laundering and Combatting the Financing of Terrorism matters (AML/CFT), which the Banking Supervision Department handled previously.",
    },
    {
      question: "What is the Financial Action Task Force or FATF?",
      answer:
        "FATF is an inter-governmental body that sets international AML/CFT standards. As a policy-making body, FATF evaluates whether countries’ AML/CFT regimes are sufficient for properly preventing financial crime. Where there are deficiencies cited, FATF may make recommendations to improve a country’s laws and policies, as well as even recommend that certain restrictions are imposed until the country’s laws and regulations, and more importantly, the implementation of them, meet the appropriate standards and are evaluated as effective.",
    },
    {
      question: "What are the main regulations?",
      answer: (
        <>
        <p>There are a variety of laws on AML/CFT activities in the UAE. The most important are:</p>
        <ul>
          <li>Federal Decree-Law No. (20) of 2018 On Anti-Money Laundering and Combating the Financing of Terrorism and Financing of Illegal Organizations (the “AML-CFT Law” or “the Law”)</li>
          <li>Cabinet Decision No. (10) of 2019 Concerning the Implementing Regulation of Decree-Law No. (20) of 2018 On Anti-Money Laundering and Combating the Financing of Terrorism and Illegal Organizations (the “AML-CFT Decision” or “the Cabinet Decision”).</li>
        </ul>
        </>
      ),
    },
    {
      question: "What am I required to do?",
      answer: (
        <ul>
          <li>Identify and verify the identity of your customers and of their beneficial owners, and monitor the transactions of and the business relationship with customers.</li>
          <li>Report suspected money laundering or terrorism financing to the public authorities and take supporting measures, such as ensuring the proper training of personnel and the establishment of appropriate internal preventive policies and procedures.</li>
        </ul>
      ),
    },
    {
      question: "What is an Anti-Money Laundering Program?",
      answer: (
        <>       
        <p>An anti-money laundering (AML) program is a set of procedures designed to guard against someone using the firm to facilitate money laundering or terrorist financing. The main components that must be included are:</p>
        
         <ul>
          <li>Internal policies, procedures, and controls reasonably designed to achieve compliance.</li>
          <li>Appointment of a designated compliance officer to oversee the program’s day-to-day operations.</li>
          <li>Ongoing training program.</li>
          <li>Independent audit; and</li>
          
        </ul>
        <p>Appropriate risk-based procedures for conducting customer due diligence including, but not limited to:</p>
        <ul>
          <li>understanding the nature and the purpose of developing a customer risk profile; and
</li>
<li>conducting ongoing monitoring to detect and report suspicious transactions and on a risk basis to maintain and update customer information including identifying and verifying beneficial owners.</li>
        </ul>
        </>

      ),
    },
    {
      question: "What is the monetary limitation for cash transactions?",
      answer:
        "Transactions with monetary value equal to or exceeding AED 55,000 (single/related) requires entities to carry out appropriate Customer Due Diligence measures and make appropriate reporting as required by the regulation.",
    },
    {
      question: "Who is a Compliance Officer?",
      answer:
        "As per the AML/CFT Law, Financial Institutions and DNFBPs should appoint a Compliance officer in house or outsourced with adequate expertise and knowledge who can implement appropriate policies and procedures and make periodic assessments and reports in relation to entity’s compliance with the AML/CFT law.",
    },
    {
      question: "What is CDD?",
      answer:
        "CDD (Customer Due Diligence) is the process of gathering facts about a customer then checking the details obtained. These measures must involve identifying the customer as well as verifying the identity. The Customer Due Diligence process meets identity verification requirements and further checks can be added to the process to support AML regulatory obligations.",
    },
    {
      question: "What are the Benefits of AML Compliance for Companies?",
      answer:
        "For companies, AML compliance brings in customer trust and ensures that all onboarded parties are legitimate. Be it end-users or intermediaries, Anti-Money Laundering compliance allows every company to avoid potential money laundering and terror financing risks. Moreover, it helps in identifying high-risk entities before they become a problem for the business.",
    },
    {
      question: "How Does AML Compliance Benefit Customers?",
      answer:
        "For customers, it gets a lot easier to trust companies that comply with AML regulations. They can trust the company with the Personally Identifiable Information (PII). Furthermore, end-users know that they are safe from financial criminals.",
    },
    {
      question: "What Happens if a Company Fails to Comply?",
      answer:
        "under AML/CFT Law in UAE there are both temporary and unalterable punishments prescribed in the law ranging from temporary imprisonment to imprisonment for not exceeding 10years and fines ranging from AED 100,000 (one hundred thousand) to AED 50,000,000 (fifty million).",
    },
  ];

  return (
    <section className="pt-0 pb-20 bg-white max-w-8xl mx-auto">
      {/* Banner */}
       <motion.div
              className="w-screen h-[50vh] overflow-hidden"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
        <img
          src="/sefessdcd.jpg"
          alt="AML Compliance Banner"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Intro Section */}
      <div className="px-6 md:px-16 mt-10">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-semibold text-center text-[#0a2d45] mb-6">
            AML (ANTI-MONEY LAUNDERING)
          </h2>
          <p className="text-xl mb-4">
           AML (Anti-Money Laundering) compliance refers to the set of regulations, policies, and procedures that financial institutions and certain businesses must implement to prevent and detect money laundering, terrorist financing, and other illicit activities.
           </p>
          <p className="text-xl mb-4">
          It is another compliance requirement in UAE introduced by Federal Decree-Law No. 20 of 2018 and related regulations issued by various cabinet and ministerial decisions.
          </p>
          <p className="text-xl">
           The goAML software solution was developed by the United Nations Office on Drugs and Crime (UNODC) to support the implementation of anti-money laundering (AML) and counter-terrorism financing (CTF) measures by financial intelligence units (FIUs) and other competent authorities.
          </p>
        </motion.div>
      </div>

      {/* Why Choose PRISH */}
      <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
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
            { title: "AML Registration", description: "We help businesses register under AML regulations." },
            { title: "AML Implementation", description: "We assist in setting up effective AML frameworks." },
            { title: "Development of AML Standard Operating Procedures (SOPs)", description: "We design custom SOPs for efficient AML practices." },
            { title: "Corporate AML Training and Awareness", description: "We educate staff about AML laws and red flags." },
            { title: "Impact Assessment and Analysis of AML on Business", description: "We analyze how AML affects your operations." },
            { title: "AML Auditing", description: "We perform internal audits to ensure compliance." },
            { title: "AML Survey & Reporting", description: "We create reports that demonstrate AML readiness." },
          ].map((item, idx, arr) => {
            const isLastOdd = arr.length % 2 !== 0 && idx === arr.length - 1;
            const card = (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
              >
                <h4 className="text-xl font-semibold text-[#163c4f] mb-2">{item.title}</h4>
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
              onClick={() => toggleFAQ(index)}
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

      {/* Contact Form */}
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
