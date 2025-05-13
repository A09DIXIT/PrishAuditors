import React from "react";

const AntiMoneyLaundering = () => {
  const images = ["/amlc1.jpg"];

  const ImageGroup = () => (
    <div className="grid grid-cols-1 gap-6">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`amlc-${i}`}
          className="w-full rounded-xl shadow-lg object-cover"
        />
      ))}
    </div>
  );

  return (
    <div className="w-full bg-white text-[#163c4f]">
      {/* Banner */}
      <div className="w-screen h-[70vh] overflow-hidden mt-10">
        <img
          src="/aml.webp"
          alt="AML Compliance Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-20 space-y-28 text-lg leading-relaxed">
        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-6xl font-bold mb-6">AML (Anti-Money Laundering)</h2>
            <p className="mb-5">
              AML (Anti-Money Laundering) compliance refers to the set of regulations, policies,
              and procedures that financial institutions and certain businesses must implement to
              prevent and detect money laundering, terrorist financing, and other illicit activities.
            </p>
            <p className="mb-5">
              It is another compliance requirement in UAE introduced by Federal Decree-Law No. 20
              of 2018 and related regulations issued by various cabinet and ministerial decisions.
            </p>
            <p>
              The goAML software solution was developed by the United Nations Office on Drugs and
              Crime (UNODC) to support the implementation of anti-money laundering (AML) and
              counter-terrorism financing (CTF) measures by financial intelligence units (FIUs)
              and other competent authorities.
            </p>
          </div>

          <img
          src="/aml2.jpeg"
          alt="AML Compliance Banner"
          className="w-full h-full object-cover"
        />
        </div>

        {/* Section 2: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
        <img
          src="/aml1.jpeg"
          alt="AML Compliance Banner"
          className="w-full h-full object-cover"
        />
          <div>
            <h2 className="text-4xl font-bold mb-6">WHY CHOOSE PRISH?</h2>
            <ul className="list-decimal pl-6 space-y-4 text-gray-800">
              <li><strong>AML Registration</strong></li>
              <li><strong>AML Implementation</strong></li>
              <li><strong>Development of AML Standard Operating Procedures (SOPs)</strong></li>
              <li><strong>Corporate AML Training and Awareness</strong></li>
              <li><strong>Impact Assessment and Analysis of AML on Business</strong></li>
              <li><strong>AML Auditing</strong></li>
              <li><strong>AML Survey and Reporting</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiMoneyLaundering;
