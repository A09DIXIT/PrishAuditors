import React, { useState } from 'react';

const faqs = [
  {
    question: 'What type of UAE companies can I start?',
    answer:
      'UAE allows company formation in the free zone, mainland, or offshore. Business setup in the UAE mainland requires a local sponsor and the license is issued by DED. Free zone companies can operate within a limited geographical region and the license is issued by a particular free zone authority. Offshore businesses in UAE allow your company to trade outside the UAE as well as make efforts to safeguard your wealth and assets. Offshore companies get a certificate of incorporation and not a trade license. All types of companies can be started in UAE and more than a thousand activities are allowed by the Economic Department.',
  },
  {
    question: 'How to renew my business license on the mainland?',
    answer:
      'If you want to renew your Dubai commercial license, the applicant should submit the DED registered certificate with the necessary approval from the Ministry of Economy and National Media Company. If you want to renew your Dubai trade license, then you should submit a valid Ejari certificate and other lease contracts.',
  },
  {
    question: 'Why should I start my company in UAE?',
    answer:
      'UAE is a perfectly located biggest market in the world. It serves as a perfect destination to invest in different kinds of business. The business owners are free from taxes, and they can expect exceptional logistics in all the emirates. You don’t have any capital restrictions while starting your business. Financial freedom is an attractive point that brings in employees from foreign districts. UAE has mind-blowing business opportunities; a business setup firm in UAE can guide you through the entire company formation process.',
  },
  {
    question: 'How long will it take to set up a free zone company?',
    answer:
      'Usually, it takes around 3 to 10 days to set up your free zone company; it may differ according to the selected free zone. We make sure that all your documents are legal and attested. Without a consultant, the process may take weeks and become complex. PRISH ensures fast and reliable business setup in UAE-free zones.',
  },
  {
    question: 'How to start an LLC company in UAE?',
    answer:
      'To establish your LLC Company in Dubai mainland or anywhere else in UAE, you have to reserve a trade name and get preliminary approvals. You must obtain an MOA, submit the lease contract to the licensing authority, find a local partner, and rent office space. PRISH offers affordable packages based on your business needs.',
  },
  {
    question: 'What kind of company structure should I choose?',
    answer:
      'This depends on your needs. You can set up as a Sole Establishment, Limited Liability Partnership, LLC, Private Limited, or a Professional Services Company. Structures also vary between mainland, free zone, or offshore.',
  },
  {
    question: 'Do I need to rent an office for my business?',
    answer:
      'Yes. Mainland and free zone companies must have a physical presence. Offshore companies cannot lease UAE office space. Options include co-working desks, flexi-desks, and dedicated PO Boxes depending on the zone and business scale.',
  },
];

const CompanyIncorporation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Banner */}
      <div className="w-screen h-[70vh] overflow-hidden mt-10">
        <img
          src="/CompanyIncorporation.jpg"
          alt="Company Incorporation Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-4 py-30 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#163c4f' }}>
            Company Incorporation Services
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Company incorporation services in the United Arab Emirates (UAE) involve assisting businesses and entrepreneurs
            in establishing legal entities to conduct business activities within the country.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="md:w-1/2">
            <img src="/AccountingBookkeeping1.jpg" alt="Company Incorporation" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg mb-4">
              Based on understanding our clients' requirements, we at <strong>PRISH</strong> advise clients on the most suitable business
              structure, ownership preferences, operating environments such as freezone, mainland, and other regulatory requirements.
            </p>
            <p className="text-gray-700 text-lg">
              Through our professional expertise team members, we navigate the complex legal and regulatory landscape more effectively,
              streamline the incorporation process, and establish a strong legal foundation for operations for our various clients in the country.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: '#163c4f' }}>
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
            <li>Business Structure and Ownership Consultation</li>
            <li>Document Preparation and Submission</li>
            <li>Trade Name Reservation and Approval</li>
            <li>License Application and Processing</li>
            <li>Office Space and Facilities</li>
            <li>Visa and Immigration Services</li>
            <li>Bank Account Opening</li>
            <li>Ongoing Compliance and Support including trademark, copyright, etc.</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#0a2d45] text-white mt-10 px-6 md:px-16 py-12 max-w-6xl mx-auto rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-8 text-center">
        Company Incorporation?
          </h2>

    {faqs.map((faq, index) => (
      <div key={index} className="border-b border-white/20">
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full text-left py-4 px-4 flex justify-between items-center focus:outline-none"
        >
          <span className="text-lg font-medium">{faq.question}</span>
          <span className="text-2xl transform transition-transform duration-300">
            {openIndex === index ? "▲" : "▼"}
          </span>
        </button>
        {openIndex === index && (
          <div className="bg-white text-[#0a2d45] px-4 py-4 text-base">
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
      </div>
    </>
  );
};

export default CompanyIncorporation;
