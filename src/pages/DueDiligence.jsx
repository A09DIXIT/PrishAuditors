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

const bannerVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const DueDiligence = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUpLocal = {
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

  const whyChoose = [
    {
      title: 'Financial Due Diligence',
      desc: 'We assess the financial health, performance, and risks of a business by reviewing financial statements, cash flow projections, and other financial data.',
    },
    {
      title: 'Legal Due Diligence',
      desc: 'We review legal documents, contracts, and obligations to identify legal risks including litigation, regulatory compliance, and contractual obligations.',
    },
    {
      title: 'Commercial Due Diligence',
      desc: 'We evaluate market dynamics, competitors, and growth opportunities to assess the commercial viability and risks of a business or investment.',
    },
    {
      title: 'Vendor Due Diligence',
      desc: 'We assess suppliers to ensure reliability, quality, and compliance with contractual and regulatory requirements.',
    },
    {
      title: 'Customer Due Diligence',
      desc: 'We verify the identity and background of customers to prevent fraud, comply with AML laws, and assess creditworthiness.',
    },
  ];

  const faqItems = [
    {
      question: "What is due diligence, and why is it important for businesses?",
      answer:
        "Due diligence is the process of investigating and assessing the background, financial status, legal standing, and other relevant factors of a business, individual, or entity before entering a transaction or business relationship. It is important for businesses to mitigate risks, make informed decisions, and ensure compliance with regulations.",
    },
    {
      question: "What types of due diligence services does PRISH Consultancy offer?",
      answer:
        "PRISH Consultancy offers a range of due diligence services, including financial due diligence, legal due diligence, commercial due diligence, vendor due diligence, and customer due diligence.",
    },
    {
      question: "When should businesses conduct due diligence?",
      answer:
        "Due diligence should be conducted before entering into any significant business transaction, such as mergers and acquisitions, partnerships, investments, contracts, or hiring key personnel. It is also essential for ongoing monitoring and compliance purposes.",
    },
    {
      question: "How does PRISH Consultancy perform due diligence?",
      answer:
        "PRISH Consultancy performs due diligence through a systematic and thorough process that includes gathering and analyzing relevant information, conducting interviews and site visits, reviewing documentation, and providing comprehensive reports with findings and recommendations.",
    },
    {
      question: "What are the benefits of outsourcing due diligence services to PRISH Consultancy?",
      answer:
        "Outsourcing due diligence services to PRISH Consultancy allows businesses to access specialized expertise, save time and resources, ensure thorough and unbiased assessments, and receive actionable insights to support decision-making.",
    },
    {
      question: "Can due diligence services help prevent fraud and financial crime?",
      answer:
        "Yes, due diligence services help businesses identify red flags, irregularities, and potential risks of fraud or financial crime, allowing them to take preventive measures and make informed decisions to protect their interests.",
    },
    {
      question: "How long does due diligence typically take?",
      answer:
        "The timeframe for due diligence depends on the complexity of the transaction, the scope of the investigation, and the availability of information. PRISH Consultancy works efficiently to complete due diligence projects within agreed timelines.",
    },
    {
      question: "How can businesses ensure confidentiality and integrity during the due diligence process?",
      answer:
        "PRISH Consultancy adheres to strict confidentiality and ethical standards in all our engagements. We prioritize client confidentiality and ensure that sensitive information is handled securely and responsibly throughout the due diligence process.",
    },
    {
      question: "Can PRISH Consultancy customize due diligence services based on specific needs?",
      answer:
        "Yes, PRISH Consultancy offers tailored due diligence services to meet the unique requirements of each client and transaction. We work closely with clients to understand their objectives and develop customized solutions accordingly.",
    },
    {
      question: "How do I get started with due diligence services from PRISH Consultancy?",
      answer:
        "You can get started by contacting PRISH Consultancy for a consultation to discuss your due diligence needs and objectives. Our team will work with you to develop a tailored plan to address your specific requirements.",
    },
  ];

  // Render Why Choose cards with last one centered if odd count
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
          className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f] w-full"
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

  return (
    <section className="bg-white max-w-8xl">
      {/* Banner Section */}
      <motion.div
        className="relative h-[50vh] w-full overflow-hidden"
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/1DUE-DILI.jpeg"
          alt="Due Diligence Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
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
            variants={fadeInUpLocal}
          >
            DUE DILIGENCE
          </motion.h1>

          <div className="text-black text-base md:text-xl leading-relaxed space-y-5">
            {[
              "Financial, tax, and legal due diligence services are essential components of the mergers and acquisitions (M&A) process, providing valuable insights and risk assessments to potential buyers or investors. Thus, businesses are inclined towards engaging experienced professionals and we at PRISH stand beyond our client's expectations in conducting thorough due diligence and achieving successful outcomes in M&A transactions.",
              "Our experienced team conducts thorough investigations and assessments to provide valuable insights and recommendations tailored to our client's specific needs.",
              "Our approach is to understand the importance of due diligence in protecting our clients' interests and ensuring the success of their business endeavors. We are detail-oriented, compliance-focused, and deliver high-quality due diligence reports that provide actionable insights.",
            ].map((text, i) => (
              <motion.p key={i} custom={i + 1} variants={fadeInUpLocal}>
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
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {renderWhyChooseCards()}
        </motion.div>
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

      <div className="mb-10">
        <motion.div
          className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
          variants={fadeInUpLocal}
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

export default DueDiligence;
