import React from "react";
import { useNavigate } from "react-router-dom";

const Taxation = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Gold Audit",
      short: "Auditing gold and jewelry businesses for compliance.",
      full: `Gold Audit typically refers to the process of auditing gold and jewelry traders or dealers to ensure compliance with relevant regulations and standards due to the significant role of the gold and jewelry industry in the country's economy.`,
      path: "/gold-audit",
    },
    {
      title: "System Audit",
      short: "Reviewing IT systems for security and compliance.",
      full: `System audits are critical for identifying IT-related risks, enhancing security posture, improving operational efficiency, and ensuring compliance with regulatory requirements and industry best practices.`,
      path: "/system-tax-audit",
    },
    {
      title: "Transaction Audit",
      short: "Ensuring financial transactions are accurate and valid.",
      full: `Transaction Audits involve the examination and review of specific financial transactions within an organization to ensure accuracy, compliance, and integrity.`,
      path: "/transaction-audit",
    },
    {
      title: "RERA Audit",
      short: "Auditing real estate transactions under RERA.",
      full: `RERA audits are conducted to ensure compliance with regulations, transparency, and fairness in real estate transactions by promoting confidence and trust among stakeholders.`,
      path: "/rera-audit",
    },
    {
      title: "Sales Tax Certification Audits",
      short: "Certification for tax compliance in sales.",
      full: `Sales Certification refers to a process whereby companies obtain accreditation to engage in sales activities within specific industries, enhancing credibility and compliance.`,
      path: "/sales-tax-audit",
    },
  ];

  return (
    <div className="w-full">
      {/* Full Screen Banner Image */}
      <div className="w-screen h-[60vh] overflow-hidden mb-16">
        <img
          src="/taxatoin1.webp"
          alt="Taxation Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#163c4f] uppercase mb-6">TAXATION SERVICES</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Taxation services are essential for ensuring compliance with financial regulations and optimizing fiscal performance. 
            At PRISH, we provide tailored taxation services that help businesses navigate complex tax environments.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="rounded-lg shadow-xl overflow-hidden h-full">
            <img 
              src="/Taxation.jpg" 
              alt="Taxation Services" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Services List */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="border-l-4 border-[#163c4f] pl-6 py-4 cursor-pointer hover:bg-gray-50 transition duration-200 group"
                onClick={() => navigate(service.path)}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-[#163c4f] mb-2 group-hover:text-[#1f4e66] transition duration-200">
                    {service.title}
                  </h3>
                  <span className="text-[#163c4f] group-hover:text-[#1f4e66] transition duration-200">
                    →
                  </span>
                </div>
                <p className="text-gray-600">{service.short}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taxation;
