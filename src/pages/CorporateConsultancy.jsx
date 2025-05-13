import React from "react";
import { Link } from "react-router-dom";

const CorporateConsultancy = () => {
  const services = [
    {
      title: "Strategic Planning",
      description:
        "Developing strategic plans for businesses to achieve long-term growth and competitiveness, identifying opportunities for expansion, diversification, or market entry, implementing organizational changes to improve efficiency and effectiveness.",
      image: "/StrategicPlanning.jpg",
      link: "/services/corporate-consulting/strategic-planning",
    },
    {
      title: "Financial Budgeting and Forecasting",
      description:
        "Developing a comprehensive plan for the allocation and budgeting of financial resources over a specific period. Forecasting by predicting future financial outcomes, performance, and cash flows based on historical data, market trends, and other relevant factors.",
      image: "/financialBudgeting.webp",
      link: "/services/corporate-consulting/financial-budgeting",
      reverse: true,
    },
    {
      title: "Fixed Assets Management",
      description:
        "Management and optimization of a company's fixed assets throughout their lifecycle, from acquisition to disposal. Fixed assets SOP review, physical verification, accounting entries and treatment for fixed assets are provided.",
      image: "/fixedAssets.jpg",
      link: "/services/corporate-consulting/fixed-assets",
    },
    {
      title: "Technology Consulting",
      description:
        "Digital transformation strategy development, technology assessment and implementation based on business operations and requirements to ease compliance. Our core experience in IT helps our clients reduce extensive manual efforts and generate reports within seconds.",
      image: "/TechnologyConsulting.jpg",
      link: "/services/corporate-consulting/technology-consulting",
      reverse: true,
    },
    {
      title: "CFO Services",
      description:
        "Our seasoned finance professionals—members of IIM and ICAI—help run your finance function with expert advice and hands-on involvement. Their experience with MNCs can revolutionize your business finances as virtual CFOs.",
      image: "/CFOServices.webp",
      link: "/services/corporate-consulting/cfo-services",
    },
  ];

  return (
    <div className="w-full bg-white text-[#163c4f]">
      {/* Banner */}
      <div className="w-screen h-[70vh] overflow-hidden mt-10">
        <img
          src="/CorporateConsultancy1.jpg"
          alt="Corporate Consultancy Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-20 space-y-28 text-lg leading-relaxed">
        {/* Section 1: Intro Text */}
        <div className="w-full bg-gray-100 py-20 px-8 md:px-8">
  {/* Centered Heading */}
  <h2 className="text-6xl font-bold mb-16 text-center text-[#163c4f]">CORPORATE CONSULTANCY</h2>

  {/* Grid with Text and Image */}
  <div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-14 items-center text-lg leading-relaxed text-[#163c4f]">
    <div>
      <p className="mb-5">
        Corporate consultancy provided by us at <strong>PRISH</strong> involves providing professional advice and guidance to businesses across various aspects of their operations, strategies, and management to outperform with immense effectiveness and efficiency in their operations.
      </p>
      <p>
        Corporate consultancy services are tailored to the specific needs and objectives of each client, helping businesses address challenges, seize opportunities, and achieve sustainable growth and success.
      </p>
    </div>
    <img
      src="/CorporateConsultancy.jpg"
      alt="Corporate Strategy"
      className="w-full h-full object-cover rounded-xl shadow-lg"
    />
  </div>
</div>



        {/* Section 2: Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
              reverse={service.reverse}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description, image, link, reverse }) => (
  <div className="grid md:grid-cols-2 gap-14 items-center">
    <div className={reverse ? "order-last md:order-last" : "order-first md:order-first"}>
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-xl shadow-md"
      />
    </div>
    <div className={reverse ? "order-first md:order-first" : "order-last md:order-last"}>
      <Link to={link}>
        <h3 className="text-3xl font-semibold mb-4 text-[#0a2d45] hover:underline">
          {title}
        </h3>
      </Link>
      <p>{description}</p>
    </div>
  </div>
);

export default CorporateConsultancy;
