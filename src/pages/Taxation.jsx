import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";

// Services Array
const services = [
  {
    title: "Value Added Tax (VAT)",
    description:
      "Assisting businesses in the UAE with the VAT registration process, compliance on VAT returns, records, accounting systems and VAT planning.",
    link: "/vat",
    bg: "/1VAT1.jpg",
  },
  {
    title: "UAE Corporate Tax",
    description:
      "Corporate Tax in UAE effective from 1st June 2023. We provide Impact Assessment, Registration, Return Filing, and Consultancy.",
    link: "/corporate-tax",
    bg: "/1UAECT.jpeg",
  },
  {
    title: "Transfer Pricing",
    description:
      "Compliance with UAE and global transfer pricing regulations including documentation, adjustments, and strategic advisory.",
    link: "/transfer-pricing",
    bg: "/1TP1.jpg",
  },
  {
    title: "Tax Residency Certificate (TRC)",
    description:
      "Professional assistance in obtaining UAE TRC to utilize double taxation avoidance agreements for individuals and entities.",
    link: "/trc",
    bg: "/1TRC.jpg",
  },
];

// Animation Variants
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

const Taxation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          src="/taxatoin1.webp"
          alt="Taxation Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto mt-10 px-4 pb-16">
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
          <h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
            TAXATION SERVICES
          </h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              Taxation services in the UAE play a crucial role in helping individuals and businesses navigate the complexities of tax laws and regulations, optimize their tax positions, and ensure compliance with tax requirements.
            </p>
            <p>
              By leveraging the expertise of tax professionals and consultants at <b>PRISH</b>, our clients can effectively manage their taxation risks and obligations while maximizing tax efficiency and compliance procedure.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
      >
        <div className="grid mt-0 md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                src={item.bg}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <h2 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-white text-sm mb-3">{item.description}</p>
                <Link
                  to={item.link}
                  className="text-blue-300 hover:underline text-sm font-medium"
                >
                  Read more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Query Form */}
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
  );
};

export default Taxation;
