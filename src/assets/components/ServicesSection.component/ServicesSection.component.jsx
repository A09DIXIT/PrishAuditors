import React from "react";

// Service data with images
const services = [
  { title: "AUDIT & ASSURANCE", link: "/services/audit", image: "/Audit-Assurance.png" },
  { title: "SPECIAL AUDITS", link: "/services/taxation", image: "/Taxation.jpg" },
  { title: "RISK ASSURANCE", link: "/services/risk-assurance", image: "/tranfer-pri.jpeg" },
  { title: "TAXATION", link: "/services/taxation", image: "/Business-Advisory.avif" },
  { title: "ACCOUNTING & BOOKKEEPING", link: "/services/AccountingBookkeeping", image: "/Company-Incorporation.webp" },
  { title: "Anti Money Laundering (AML) Compliances", link: "/services/accounting-payroll", image: "/Accounting-Payroll.avif" },
  { title: "Corporate Consultancy", link: "/services/technology-consulting", image: "/Technology-Consulting.avif" },
  { title: "Company Incorporation Services", link: "/services/CompanyIncorporation", image: "/CompanyIncorporation.jpg" },
  { title: "Mergers & Acquisitions", link: "/services/Mergers-Acquisitions", image: "/Other-Services.avif" },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Centered Heading */}
        <h2 className="text-3xl font-bold text-center text-black mb-10">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              href={service.link}
              key={index}
              className="relative block rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image with hover effect */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-105"
                />

                {/* Title always visible (no background) */}
                <div className="absolute bottom-0 left-0 right-0 text-center">
                <h3 className="text-black text-xl font-semibold bg-white/50 p-1 rounded">{service.title}</h3>



                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
