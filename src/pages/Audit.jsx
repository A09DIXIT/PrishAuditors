import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Audit.css";

const Audit = () => {
  return (
    <section className="pt-0 pb-20 bg-white">
      {/* Full Screen Top Image */}
      <div className="w-screen h-[70vh] overflow-hidden">
        <img
          src="/Audit-Assurance.png"
          alt="Audit Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text & Service Section */}
      <div className="px-6 md:px-16 mt-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0a2d45] mb-6 text-center">
          AUDITING AND ASSURANCE
        </h2>
        <p className="text-gray-700 text-lg mb-8 text-center">
          We at <b>PRISH</b> have our core competence in the field of Audit and Assurance. Each of our audit
          assignments is customized as per audit statutory requirements governed by IFRS/ IAS. We ensure efficient
          and dedicated audit planning, execution and reporting supervised and reviewed carefully by our experts.
        </p>

        {services.map((service, idx) => (
          <ServiceContent key={idx} service={service} />
        ))}
      </div>
    </section>
  );
};

const ServiceContent = ({ service }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mb-6">
      <Link to={service.link}>
        <h4 className="text-xl font-semibold text-[#0a2d45] hover:underline">
          {service.title}
        </h4>
      </Link>
      <p className="text-gray-600 text-base mb-3">
        {showMore ? service.description : `${service.description.substring(0, 100)}...`}
      </p>
      <button
        onClick={() => setShowMore(!showMore)}
        className="bg-[#0a2e4e] hover:bg-[#2e2e44] text-white font-semibold text-sm md:text-base py-2 px-4 transition duration-300"
      >
        {showMore ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

const services = [
  {
    title: "Statutory Audit",
    description: "We will be performing a thorough examination of financial records and providing assurance on the accuracy and reliability of your company’s financial statements.",
    link: "/statutory-audit",
  },
  {
    title: "Concurrent Audit",
    description: "It would be a real-time examination of financial transactions and processes conducted by us as an internal or external auditor to provide you with timely feedback and ensure the effectiveness of internal controls and financial records.",
    link: "/concurrent-audit",
  },
  {
    title: "Forensic Audit",
    description: "It will be a specialized examination of financial records, transactions, and documents conducted with the objective of identifying fraud, financial misconduct, or irregularities.",
    link: "/forensic-audit",
  },
  {
    title: "Inventory audit and verification",
    description: "Confirming the existence, completeness, and accuracy of inventory records and assessing the effectiveness of internal controls over inventory management.",
    link: "/inventory-audit",
  },
  {
    title: "Mystery Audit",
    description: "Core assessments conducted by us as an independent evaluator to measure and evaluate the quality of service, compliance with policies, and overall customer experience.",
    link: "/mystery-audit",
  },
];

export default Audit;
