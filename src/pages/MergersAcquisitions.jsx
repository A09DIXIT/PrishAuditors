import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const bannerVariants = {
  hidden: { scale: 1.05, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
};

const MergersAcquisitions = () => {
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

  const services = [
    {
      title: "Due Diligence",
      description: `Financial, tax, and legal due diligence services are essential components of the mergers and acquisitions (M&A) process, providing valuable insights and risk assessments to potential buyers or investors. Thus, businesses are inclined towards engaging experienced professionals and we at PRISH stand beyond our clients expectation in conducting a thorough due diligence and achieving successful outcomes in M&A transactions.`,
      link: "/Mergers-Acquisitions/due-diligence",
      bg: "/1DueDiligence.webp",
    },
    {
      title: "Valuation Advisory Services",
      description: `Valuation Advisory services encompass a range of consulting and advisory services related to business and asset valuation. These services provided by us includes valuation feasibility studies, fairness opinions, transaction advisory, due diligence support, valuation modelling, sensitivity analysis, and expert witness testimony. We provide independent, objective assessments and recommendations to help our clients make informed decisions for mergers & acquisitions.`,
      link: "/Mergers-Acquisitions/valuation-advisory",
      bg: "/1ValuationAdvisory.jpg", // ← Add your image path here
    },
    {
      title: "Restructuring and Reorganization Services",
      description: `These are the essential services for businesses facing financial, operational, or strategic challenges to adapt, evolve, and thrive in dynamic and competitive markets. We have experienced restructuring professionals in our team who can help companies to navigate complex restructuring processes, unlock value, and position themselves for long-term success and sustainability.`,
      link: "/Mergers-Acquisitions/restructuring-reorganization",
      bg: "/1Restructuring.jpeg", // ← Add your image path here
    },
  ];

  return (
    <div className="w-full">
      {/* Banner */}
      <motion.div
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        className="w-screen h-[50vh] overflow-hidden"
      >
        <img
          src="/merges.avif"
          alt="Mergers & Acquisitions Banner"
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
            className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4"
            variants={fadeUpVariant}
          >
            MERGERS & ACQUISITIONS
          </motion.h1>
          <motion.div
            className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            <motion.p variants={fadeUpVariant}>
              Mergers and acquisitions (M&A) in the United Arab Emirates (UAE) have been significant in recent years,
              driven by the country's robust economy, favorable business environment, and strategic location as a global business hub.
            </motion.p>
            <motion.p variants={fadeUpVariant}>
              We support companies to get ready for mergers from both the buyers’ and sellers’ perspectives. The overall M&A process begins
              with identifying and evaluating the target company, conducting due diligence, negotiating terms, closing the deal, and managing
              post-deal integration.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Grid */}
       <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-7xl mx-auto px-6 md:px-12 py-10"
            >
              <div className="grid md:grid-cols-2 gap-8">
               {services.map((audit, idx) => {
  const isCentered = audit.title === "Restructuring and Reorganization Services";

  const card = (
    <motion.div
      key={idx}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative rounded-lg overflow-hidden shadow-lg group w-full"
    >
      <img
        src={audit.bg}
        alt={audit.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
        <h2 className="text-xl font-bold text-white mb-2">{audit.title}</h2>
        <p className="text-white text-sm mb-3">{audit.description}</p>
        <Link
          to={audit.link}
          className="text-blue-300 hover:underline text-sm font-medium"
        >
          Read more →
        </Link>
      </div>
    </motion.div>
  );

  return isCentered ? (
    <div key={idx} className="md:col-span-2 flex justify-center">
      <div className="w-full md:w-[48%]">{card}</div>
    </div>
  ) : (
    <div key={idx}>{card}</div>
  );
})}
              </div>
            </motion.div>

      {/* SendQueryForm */}
      <div className="mt-20 mb-10">
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
  );
};

export default MergersAcquisitions;
