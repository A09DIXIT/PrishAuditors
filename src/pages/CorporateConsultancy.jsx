import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

// Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Services Grid Data
const services = [
  {
    title: "Strategic Planning",
    description:
      "Developing strategic plans for businesses to achieve long-term growth and competitiveness, identifying opportunities for expansion, diversification, or market entry, implementing organizational changes to improve efficiency and effectiveness",
    image: "/StrategicPlanning.jpg",
    link: "/corporate-consulting/strategic-planning",
  },
  {
    title: "Financial Budgeting and Forecasting",
    description:
      "Developing a comprehensive plan for the allocation and budgeting of financial resources over a specific period. The budget serves as a roadmap for guiding financial decision-making and performance evaluation. Forecasting by predicting future financial outcomes, performance, and cash flows based on historical data, market trends, and other relevant factors.",
    image: "/financialBudgeting.webp",
    link: "/corporate-consulting/financial-budgeting",
  },
  {
    title: "Fixed Assets Management",
    description:
      "Management and optimization of a company's fixed assets throughout their lifecycle, from acquisition to disposal. Fixed assets SOP review, physical verification, accounting entries and treatment for fixed assets are provided.",
    image: "/fixedAssets.jpg",
    link: "/corporate-consulting/fixed-assets",
  },
  {
    title: "Technology Consulting",
    description:
      "Digital transformation strategy development, Technology assessment and implementation based on the business operations and requirements to ease the compliances. Our core experience in IT helps our clients to reduce extensive manual efforts and generating reports within a click of seconds.",
    image: "/TechnologyConsulting.jpg",
    link: "/corporate-consulting/technology-consulting",
  },
  {
    title: "CFO Services",
    description:
      "Our seasoned finance professional are members of IIM and ICAI who helps you in running your finance function with his expert advice and hands on involvement. Their niche experience with MNCs can help your business to a better future through getting them as a virtual CFO to revolutionize the finance on your behalf.",
    image: "/CFOServices.webp",
    link: "/corporate-consulting/cfo-services",
  },
];

const CorporateConsultancy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      className="pt-0 pb-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Banner */}
      <motion.div
        className="w-full h-[50vh] overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/CorporateConsultancy1.jpg"
          alt="Corporate Consultancy Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Introduction */}
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
          <h2 className="text-4xl md:text-4xl font-semibold mb-10 text-center">
            CORPORATE CONSULTANCY
          </h2>
          <div className="text-xl leading-relaxed space-y-4 text-gray-700 max-w-6xl mx-auto">
            <p>
             Corporate consultancy provided by us at PRISH involves providing professional advice and guidance to businesses across various aspects of their operations, strategies, and management to outperform with immense effectiveness and efficiency in their operations.
            </p>
            <p>
             Corporate consultancy services are tailored to the specific needs and objectives of each client, helping businesses address challenges, seize opportunities, and achieve sustainable growth and success.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Grid Cards Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
      >
        <div className="grid md:grid-cols-2 gap-8">
         {services.map((service, idx) => {
  const isCenteredService = service.title === "CFO Services";

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
        src={service.image}
        alt={service.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
        <h2 className="text-xl font-bold text-white mb-2">
          {service.title}
        </h2>
        <p className="text-white text-sm mb-3">{service.description}</p>
        <Link
          to={service.link}
          className="text-blue-300 hover:underline text-sm font-medium"
        >
          Read more →
        </Link>
      </div>
    </motion.div>
  );

  return isCenteredService ? (
    <div key={idx} className="md:col-span-2 flex justify-center">
      <div className="w-full md:w-[48%]">{card}</div>
    </div>
  ) : (
    <div key={idx}>{card}</div>
  );
})}

        </div>
      </motion.div>

      {/* Send Query Form */}
      <motion.div
        className="mt-24 px-6 md:px-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </motion.section>
  );
};

export default CorporateConsultancy;
