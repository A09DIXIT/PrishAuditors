
import React from "react";

const ConcurrentAudit = () => {
  return (
    <section className="pt-0 pb-20 bg-white">
      {/* Banner Image */}
      <div className="w-screen h-[70vh] overflow-hidden">
  <img
    src="/concurrent-autdit.jpg"
    alt="Concurrent Audit Banner"
    className="w-full h-full object-cover rotate-180"
  />
</div>


      {/* Content */}
      <div className="px-6 md:px-16 mt-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0a2d45] mb-6 text-center">
          CONCURRENT AUDIT
        </h2>
        <p className="text-gray-700 text-lg mb-6 text-justify">
          Concurrent Audit is a real-time examination of financial transactions, systems, and processes. It aims to detect and rectify errors immediately and strengthen internal controls. At <strong>PRISH</strong>, we conduct concurrent audits to ensure adherence to regulatory compliance and reduce operational risks.
        </p>

        <h3 className="text-2xl font-semibold text-[#0a2d45] mb-4 mt-8">
          Why Choose Our Concurrent Audit Service?
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li>Continuous monitoring and evaluation of financial transactions</li>
          <li>Timely detection of irregularities and control lapses</li>
          <li>Improved operational efficiency and compliance assurance</li>
          <li>Risk-based audit methodology with a focus on vulnerable areas</li>
          <li>Detailed reports and immediate feedback to management</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0a2d45] mb-4 mt-8">
          Industries We Serve:
        </h3>
        <p className="text-gray-700 text-base mb-4">
          Our concurrent audits are suited for:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li>Banking and Financial Institutions</li>
          <li>Manufacturing and Distribution Companies</li>
          <li>Healthcare Organizations</li>
          <li>Educational Institutions</li>
          <li>Real Estate and Construction Firms</li>
        </ul>

        <p className="text-gray-700 text-lg mt-6 text-justify">
          We use a strategic and systematic approach to concurrent audits, combining industry expertise, compliance frameworks, and technology to provide high-value insights. Strengthen your organization’s financial health and internal governance with <strong>PRISH</strong>'s Concurrent Audit service.
        </p>
      </div>
    </section>
  );
};

export default ConcurrentAudit;
