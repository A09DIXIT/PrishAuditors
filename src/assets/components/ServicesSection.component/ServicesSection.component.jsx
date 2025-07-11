import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  { title: "AUDIT & ASSURANCE", link: "/services/audit", image: "/Audit-Assurance.png" },
  { title: "SPECIAL AUDIT", link: "/services/special-audit", image: "/1Spaecial-audit.jpg" },
  { title: "RISK ASSURANCE", link: "/services/risk-assurance", image: "/tranfer-pri.jpeg" },
  { title: "TAXATION", link: "/services/taxation", image: "/Business-Advisory.avif" },
  { title: "ANTI MONEY LAUNDERING (AML) COMPLIANCES", link: "/services/AntiMoneyLaundering", image: "/Accounting-Payroll.avif" },
  { title: "ACCOUNTING & BOOKKEEPING", link: "/services/AccountingBookkeeping", image: "/Company-Incorporation.webp" },
  { title: "COMPANY INCORPORATION SERVICES", link: "/services/CompanyIncorporation", image: "/CompanyIncorporation.jpg" },
  { title: "CORPORATE CONSULTANCY", link: "/services/corporate-consulting", image: "/Technology-Consulting.avif" },
  { title: "MERGERS & ACQUISITIONS", link: "/services/other", image: "/Other-Services.avif" },
];

const ServicesSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-semibold text-center text-black mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          OUR SERVICES
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={service.link}
                className="relative block rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 text-center">
                    <h3 className="text-black text-xl font-semibold bg-white/50 p-1 rounded">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
