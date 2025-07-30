import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SendQueryForm from '../assets/components/SendQueryForm/SendQueryForm';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ValuationAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whyChoose = [
    {
      title: 'Business Valuation',
      desc: 'We determine the value of businesses for mergers and acquisitions, shareholder transactions, financial reporting, tax planning, and strategic decision-making.',
    },
    {
      title: 'Asset Valuation',
      desc: 'We assess the value of tangible and intangible assets, including real estate, machinery, equipment, intellectual property, and goodwill.',
    },
    {
      title: 'Financial Reporting Valuation',
      desc: 'We provide valuation services for financial reporting purposes, including fair value measurements, purchase price allocations, and impairment testing under accounting standards such as ASC 820 (formerly FAS 157), ASC 805 (formerly SFAS 141R), and ASC 350 (formerly FAS 142).',
    },
    {
      title: 'Transaction Support',
      desc: 'We offer valuation support for various transactions, including mergers, acquisitions, divestitures, joint ventures, and private equity investments.',
    },
    {
      title: 'Litigation Support',
      desc: 'We provide expert witness testimony and litigation support services for disputes involving valuation matters, including shareholder disputes, marital dissolution, economic damages, and bankruptcy proceedings.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Render Why Choose Cards with last card centered if odd count
  const renderWhyChooseCards = () => {
    const isOdd = whyChoose.length % 2 !== 0;
    return whyChoose.map((item, idx, arr) => {
      const isLastOdd = isOdd && idx === arr.length - 1;

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
          <p className="text-gray-700 text-base">{item.desc}</p>
        </motion.div>
      );

      if (isLastOdd) {
        return (
          <div key={idx} className="md:col-span-2 flex justify-center">
            <div className="md:w-[48%] w-full">{card}</div>
          </div>
        );
      }

      return <div key={idx}>{card}</div>;
    });
  };

  const faqItems = [
    {
      question: "What are the approaches that can be adopted for business valuation?",
      answer: (
        <div>
          <p className="font-semibold">Asset-based valuation: <span className="font-normal">The asset-based valuation considers the basic business assets in order to estimate the value of the overall business enterprise. This technique is good for corporations, but it will be challenging if applied to a sole proprietorship, because, since the assets belong to the same owner, it will be difficult to separate the same for personal use and business purposes.</span></p>
          <p className="font-semibold">Market-based valuation: <span className="font-normal">Under the Market-based valuation, the marketplace is considered for the business value. It compares the value of one’s business to another similar business which is sold recently.</span></p>
          <p className="font-semibold">Income-based valuation: <span className="font-normal">The Income-based valuation method is based on the economic principle of expectation to determine the value of a business, i.e. the real value of a business lies in building wealth for the future. Based on this fact, an evaluator ascertains the upcoming cash flow by examining the records and assesses the upcoming financial risk.
All these approaches may bring different estimates of value for the same asset at the same time. If you want to know the real estimate, you have to use all these approaches to reach a conclusion.</span></p>
        </div>
      )
    },
    {
      question: "What are the various situations that lead to valuation of business?",
      answer: (
        <div>
          <p>A Businesses valuation is done based on various reasons, of which some of the common reasons are discussed below: -</p>
          <p className="font-semibold">Funding or financing: <span className="font-normal">An objective of your business will help you raise funds for your business while negotiating with banks.</span></p>
          <p className="font-semibold">Goodwill impairment: <span className="font-normal">Goodwill impairment happens when the purchase value is greater than its implied fair value. A goodwill valuation will help you understand the impairment loss of the business.</span></p>
          <p className="font-semibold">Buy or sell contracts: <span className="font-normal">A business valuation will make sure that you reach the right decision on whether to sell your business or grow your business through acquisition.</span></p>
          <p className="font-semibold">Mergers or purchases: <span className="font-normal">At the time of buying or merging with another company, a business valuation will help you determine if the price you have to pay is a fair one or not.</span></p>
          <p className="font-semibold">Litigation and ownership disputes: <span className="font-normal">If there is a court case against the value of the business, it will be settled by the court based on the valuation of the business.</span></p>
          <p className="font-semibold">Shareholder oppression cases: <span className="font-normal">An independent valuation of the business is required for a fair settlement of ownership issues once any one of the owners decides to quit.</span></p>
          <p className="font-semibold">Reorganization and bankruptcies: <span className="font-normal">A valuation report provides your company with certification that can assist with creditor negotiations and provide the basis for a financial restructuring plan at the time of bankruptcy.</span></p>
          <p className="font-semibold">Business planning: <span className="font-normal">Your company’s location is a major factor when it comes to valuation because if you are in a prime location, it can be a major advantage for your business.</span></p>
        </div>
      )
    },
    {
      question: "What are the tools that can be used in business valuation?",
      answer: (
        <div>
          <p className="font-semibold">Ratio Analysis: <span className="font-normal">Assessment of financial statement items including GP Ratio, NP Ratio, ROI, etc.</span></p>
          <p className="font-semibold">Comparative financial ratio analysis: <span className="font-normal">Compare financial ratios with competitors.</span></p>
          <p className="font-semibold">Analysis of going concern concept: <span className="font-normal">Evaluates if the business will remain operational in the foreseeable future.</span></p>
        </div>
      )
    },
    {
      question: "What are the general valuation procedures that need to be followed?",
      answer: (
       <ul className="list-disc pl-6 space-y-2 text-gray-700">
  <li>Know the purpose of the action</li>
  <li>Review historical and forecasted information</li>
  <li>Analyse balance sheets, income statements and cash flow</li>
  <li>Conduct meetings with management and discuss company history, operations, employees, customers and competitors and other relevant items</li>
  <li>Analyse and compare company performance to similar businesses within the industry</li>
  <li>Assess the budgets, leases, sales contracts, purchase agreements, customer lists, local and national economies and management capabilities.</li>
  <li>Know the client and the client’s use of the valuation</li>
  <li>Fix the standard of value and its definition</li>
  <li>Determine whether discounts and premiums are to be considered</li>
  <li>Collect information about the industry and economy</li>
  <li>Check all approaches of value and select the most appropriate method</li>
  <li>Put into practice the approaches to value through the various methodologies</li>
  <li>Ensure compliance with professional standards, if pertinent</li>
  <li>Provide authentic and accurate reports for getting your financial decisions well-done.</li>
</ul>

      )
    }
  ];

  return (
    <section className="bg-white max-w-8xl">
      {/* Banner */}
       <motion.div
              className="w-screen h-[50vh] overflow-hidden"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
        <img
          src="/1VAS.jpg"
          alt="Valuation Advisory Banner"
          className="w-full h-full object-cover"
        />
     
      </motion.div>

      {/* Intro */}
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
          <motion.h1
            className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center"
            custom={0}
            variants={fadeInUp}
          >
            VALUATION ADVISORY SERVICES
          </motion.h1>

          <div className="text-black text-base md:text-xl leading-relaxed space-y-5">
            {[
              `Valuation Advisory services encompass a range of consulting and advisory services related to business and asset valuation. These services provided by us include valuation feasibility studies, fairness opinions, transaction advisory, due diligence support, valuation modelling, sensitivity analysis, and expert witness testimony.`,
              `We provide independent, objective assessments and recommendations to help our clients make informed decisions for mergers & acquisitions. It involves the estimation of the economic value of assets, securities, or businesses, including tangible assets like real estate or machinery, intangible assets like patents or trademarks, and entire businesses for transactions, financial reporting, tax purposes, litigation support, and strategic planning.`,
              `Our experienced team offers expert guidance and analysis to help businesses determine the value of their assets, securities, and businesses for various purposes.`,
              `We understand that accurate and reliable valuations are essential for making informed business decisions. Our valuation experts utilize industry-leading methodologies and tools to conduct thorough analyses and provide unbiased opinions on value.`,
            ].map((text, i) => (
              <motion.p key={i} custom={i + 1} variants={fadeInUp}>
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-center text-[#163c4f] mb-10"
        >
          Why Choose PRISH?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {renderWhyChooseCards()}
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-4xl font-semibold text-center text-[#0a2d45] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-[#d6e4ec] rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d] transition-colors"
              >
                {item.question}
                <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
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
      </div>

      {/* Send Query Section */}
      <div className="mb-10">
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
    </section>
  );
};

export default ValuationAdvisory;
