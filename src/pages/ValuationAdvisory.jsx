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
      desc: 'We provide valuation services for financial reporting purposes, including fair value measurements, purchase price allocations, and impairment testing under ASC 820, ASC 805, and ASC 350.',
    },
    {
      title: 'Transaction Support',
      desc: 'We offer valuation support for various transactions, including mergers, acquisitions, divestitures, joint ventures, and private equity investments.',
    },
    {
      title: 'Litigation Support',
      desc: 'We provide expert witness testimony and litigation support for valuation-related disputes, including shareholder disputes, marital dissolution, economic damages, and bankruptcy.',
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
          <p className="font-semibold">Asset-based valuation: <span className="font-normal">The asset-based valuation considers the basic business assets in order to estimate the value of the overall business enterprise...</span></p>
          <p className="font-semibold">Market-based valuation: <span className="font-normal">Under the Market-based valuation, the marketplace is considered for the business value...</span></p>
          <p className="font-semibold">Income-based valuation: <span className="font-normal">The Income-based valuation method is based on the economic principle of expectation to determine the value of a business...</span></p>
        </div>
      )
    },
    {
      question: "What are the various situations that lead to valuation of business?",
      answer: (
        <div>
          <p className="font-semibold">Funding or financing: <span className="font-normal">Helps in raising funds while negotiating with banks.</span></p>
          <p className="font-semibold">Goodwill impairment: <span className="font-normal">Helps understand impairment loss when purchase value exceeds fair value.</span></p>
          <p className="font-semibold">Buy or sell contracts: <span className="font-normal">Supports decisions related to acquisitions or selling a business.</span></p>
          <p className="font-semibold">Mergers or purchases: <span className="font-normal">Assesses fairness of acquisition price.</span></p>
          <p className="font-semibold">Litigation and ownership disputes: <span className="font-normal">Used by court to resolve valuation-related cases.</span></p>
          <p className="font-semibold">Shareholder oppression cases: <span className="font-normal">Independent valuation for fair settlement.</span></p>
          <p className="font-semibold">Reorganization and bankruptcies: <span className="font-normal">Assists with creditor negotiations and restructuring.</span></p>
          <p className="font-semibold">Business planning: <span className="font-normal">Location and planning factors influence business valuation.</span></p>
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
        <ul className="list-disc pl-5 space-y-1">
          <li>Know the purpose of the valuation</li>
          <li>Review historical and forecasted information</li>
          <li>Analyse balance sheets, income statements and cash flow</li>
          <li>Conduct meetings with management</li>
          <li>Assess budgets, contracts, and market conditions</li>
          <li>Understand the client’s objective and context</li>
          <li>Fix the standard of value and define it</li>
          <li>Check all approaches of value and choose the most appropriate</li>
          <li>Ensure compliance with professional standards</li>
          <li>Provide reliable reports to support financial decisions</li>
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
      <div className="max-w-7xl mx-auto mt-10 px-4 pb-16">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md max-w-8xl mx-auto mt-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          whileHover={{
            scale: 1.01,
            boxShadow: '0px 10px 28px rgba(0, 0, 0, 0.1)',
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
