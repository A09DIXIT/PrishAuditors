import { useEffect } from "react";
import { Link } from "react-router-dom";
import SendQueryForm from "../assets/components/SendQueryForm/SendQueryForm";
import { motion } from "framer-motion";

export default function RiskAssurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const riskSlides = [
    {
      title: "Internal Audit",
      description:
        "Internal auditing is a vital function within organizations that helps to enhance governance, risk management, and control processes. Conducting an independent assessment, objective assurance and consulting activity designed to add value and improve an organization's operational and financial controls as per the best industry practices.",
      link: "/internal-audit",
      image: "/Internal-Audit.jpg",
    },
    {
      title: "Standard Operating Procedures (SOPs)",
      description:
        "This would include a comprehensive range of services including preparation and development of detailed process SOPs with process flowcharts and narratives with Delegation of Authority (DOA) Matrix, review of established SOPs, implementation of established SOPs by providing employee trainings with an objective of overall organizational effectiveness.",
      link: "/sops",
      image: "/SOP.jpg",
    },
    {
      title: "Risk Control Matrix (RCM)",
      description:
        "Risk Control Matrix (RCM) is a valuable tool for organizations to systematically identify, assess, and manage risks, as well as evaluate the effectiveness of control measures in mitigating those risks. We will be providing a constant support system in developing, reviewing and monitoring RCM based on your business operations for different processes.",
      link: "/rcm",
      image: "/RCM1.jpg",
    },
  ];

  const bannerVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
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

  return (
    <section className="pt-0 pb-20 bg-white relative overflow-hidden">
      {/* Banner */}
      <motion.div
             className="w-screen h-[50vh] overflow-hidden"
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1 }}
           >
        <img
          src="/risk2.jpg"
          alt="Risk Assurance Banner"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Intro */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 mb-10 sm:px-6 lg:px-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.4 },
          }}
        >
          <h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
            RISK ASSURANCE
          </h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              Risk assurance services encompass a range of strategies, processes, and techniques aimed at identifying,
              assessing, mitigating, and monitoring risks that may impact an organization's objectives. PRISH aims to
              provide a range of services from proactively identifying process risks to mitigating and monitoring them
              by controls in place to outperform in the dynamic business environment.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {riskSlides.map((item, index) => {
            const isLastCard = item.title === "Risk Control Matrix (RCM)";
            const card = (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-lg group w-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
               <div className="absolute inset-0 bg-black/70 bg-opacity-70 p-6 flex flex-col justify-end">
  <h2 className="text-2xl font-semibold text-white mb-2 drop-shadow-lg">{item.title}</h2>
  <p className="text-white text-sm mb-3 leading-relaxed drop-shadow-md">{item.description}</p>
  <Link
    to={item.link}
    className="text-blue-300 hover:underline text-sm font-medium"
  >
    Read more →
  </Link>
</div>
              </motion.div>
            );

            return isLastCard ? (
              <div key={index} className="md:col-span-2 flex justify-center">
                <div className="w-full md:w-[48%]">{card}</div>
              </div>
            ) : (
              <div key={index}>{card}</div>
            );
          })}
        </div>
      </motion.div>

      {/* Send Query Form */}
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
