import React from "react";

// Service data with images
const services = [
  { title: "Audit & Assurance", link: "/services/audit-assurance", image: "/Audit-Assurance.png" },
  { title: "Taxation", link: "/services/taxation", image: "/Taxation.jpg" },
  { title: "Transfer Pricing", link: "/services/transfer-pricing", image: "Transfer-Pricing.jpg" },
  { title: "Business Advisory", link: "/services/business-advisory", image: "Business-Advisory.avif" },
  { title: "Company Incorporation", link: "/services/company-incorporation", image: "Company-Incorporation.webp" },
  { title: "Accounting & Payroll", link: "/services/accounting-payroll", image: "Accounting-Payroll.avif" },
  { title: "Technology Consulting", link: "/services/technology-consulting", image: "Technology-Consulting.avif" },
  { title: "Other Services", link: "/services/other-services", image: "Other-Services.avif" },
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
