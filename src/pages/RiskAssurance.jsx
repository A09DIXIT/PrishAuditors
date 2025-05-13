import { Link } from "react-router-dom";

export default function RiskAssurance() {
  return (
    <section className="pt-0 pb-20 bg-white">
      {/* Banner Image */}
      <div className="w-screen h-[70vh] overflow-hidden mt-10">
        <img
          src="/risk2.jpg"
          alt="Risk Assurance Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* First Content Section */}
      <div className="container px-8 md:px-20 mt-16 mx-auto w-full">


        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Text Left */}
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-5xl font-bold text-[#0a2d45] mb-8 text-center md:text-left">
              RISK ASSURANCE
            </h1>
            <p className="text-gray-700 text-xl mb-8 text-justify leading-relaxed">
              Risk assurance services encompass a range of strategies, processes, and techniques aimed at identifying,
              assessing, mitigating, and monitoring risks that may impact an organization’s objectives. PRISH aims to provide
              a range of services from proactively identifying process risks to mitigating and monitoring them by controls in
              place to outperform in the dynamic business environment.
            </p>

            <h3 className="text-2xl font-semibold text-[#0a2d45] mb-2">Internal Audit</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Internal auditing is a vital function within organizations that helps to enhance governance, risk management,
              and control processes. Conducting an independent assessment, objective assurance and consulting activity
              designed to add value and improve an organization’s operational and financial controls as per the best industry
              practices.{" "}
              <Link to="/services/risk-assurance/internal-audit" className="text-blue-600 hover:underline">
                Read more
              </Link>
            </p>
          </div>

          {/* Image Right */}
          <div className="w-full md:w-1/3">
            <img
              src="/risk.jpeg"
              alt="Risk Assurance"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row gap-10 mt-20 items-start">
          {/* Image Left */}
          <div className="w-full md:w-1/3">
            <img
              src="/risk.jpeg"
              alt="RCM"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Text Right */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-[#0a2d45] mb-2">Standard Operating Procedures (SOPs)</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              This would include a comprehensive range of services including preparation and development of detailed process
              SOPs with process flowcharts and narratives with Delegation of Authority (DOA) Matrix, review of established
              SOPs, implementation of established SOPs by providing employee trainings with an objective of overall
              organizational effectiveness.{" "}
              <Link to="/services/risk-assurance/sops" className="text-blue-600 hover:underline">
                Read more
              </Link>
            </p>

            <h3 className="text-2xl font-semibold text-[#0a2d45] mb-2">Risk Control Matrix (RCM)</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Risk Control Matrix (RCM) is a valuable tool for organizations to systematically identify, assess, and manage
              risks, as well as evaluate the effectiveness of control measures in mitigating those risks. We will be
              providing a constant support system in developing, reviewing and monitoring RCM based on your business
              operations for different processes.{" "}
              <Link to="/services/risk-assurance/rcm" className="text-blue-600 hover:underline">
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
