import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SendQueryForm from "../SendQueryForm/SendQueryForm";

const VAT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const faqItems = [
    {
      question: "What is VAT?",
      answer: (
        <>
          Firstly, VAT (Value Added Tax) is a consumption tax,
                  whichmeans that it is ultimately paid by the end consumer.
                  Although, VAT is charged at each step of the ‘supply chain,’
                  it is the end user who bears the cost of Value Added Tax.
                  <br />
                  VAT is collected by the businesses and then they pay it
                  forward to the government. In case, a business has paid more
                  tax to its suppliers than it has received, it can get a refund
                  from the government. Ultimately, the tax receipts to
                  government show ‘value add’ throughout the supply chain.
        </>
      ),
    },
    {
      question: "What is UAE VAT Registration?",
      answer:
        "By VAT Registration, we mean to register the company with the government for submitting Value Added Tax. Upon successful registration, the concerned tax authority in the UAE, namely Federal Tax Authority (FTA) issues a unique VAT identification to the company.",
    },
    {
      question: "What is the difference between VAT and Sales Tax?",
      answer: (
        <>
          VAT and sales tax are both consumption taxes; these both are
                  charged from the end-consumer. However, there are a few
                  differences
                  <ul>
                    <li>
                      Sales tax is generally imposed on transactions involving
                      goods, while VAT is applied on goods as well as services.
                    </li>
                    <li>
                      Furthermore, sales tax is imposed only on the final sale
                      to end-consumer. However, VAT is charged on each step of
                      the ‘supply chain.’
                    </li>
                  </ul>
                  In VAT (Value Added Tax) based systems, businesses serve as
                  tax-collectors on behalf of government, which helps reduce
                  tax-evasion and misreporting.
        </>
      ),
    },
    {
      question: "Which Companies are Required to Register for VAT in the UAE?",
      answer: (
        <>
          The businesses having taxable imports and supplies that exceed
                  the amount of 375,000 AED must register for VAT. Besides,
                  companies exceeding the amount of 187,500 AED can also
                  register for VAT voluntarily; it is not mandatory for them to
                  register.
                  <br />
                  In case a company fails to register for VAT, they become
                  liable to pay penalties and face legal consequences.
        </>
      ),
    },
    {
      question: "How Much VAT is Charged in the UAE?",
      answer:
        "The standard rate of VAT is 5% (Five Percent) in the UAE. However, there are a few sectors that are exempt from VAT. Additionally, there are also zero-rated supplies that are rated at 0% instead of 5%.",
    },
    {
      question: "Which sectors are exempt from VAT?",
      answer: (
        <>
          <div class="accordion-body">
                  The following categories of supplies are exempt from VAT.
                  These supplies should be traded within The United Arab
                  Emirates.
                  <ul>
                    <li>Financial Services</li>
                    <li>Residential properties</li>
                    <li>Bare land</li>
                    <li>Local passenger transport</li>
                  </ul>
                </div>
        </>
      ),
    },
    {
      question: "Which are zero-rated sectors?",
      answer: (
        <>
         <div class="accordion-body">
                  If you are trading in zero-rated supplies, you will be charged
                  0% VAT. However, it’s important to remember that these
                  supplies must be declared properly in VAT returns submitted
                  during every tax period. The following supplies are charged
                  with 0% VAT.
                  <ul>
                    <li>
                      Precious metals, such as gold and silver. Which are 99%
                      pure and available in tradable form.
                    </li>
                    <li>International transportation, and related supplies.</li>
                    <li>
                      Supplies of certain sea, air, and land means of
                      transportation (such as aircrafts and ships).
                    </li>
                    <li>
                      Certain investment grade precious metals (e.g. gold,
                      silver, of 99% purity).
                    </li>
                    <li>
                      Newly constructed residential properties, that are
                      supplied for the first time within three years of their
                      construction.
                    </li>
                    <li>
                      Supply of certain education services, and the related
                      goods and services.
                    </li>
                    <li>
                      Supply of certain healthcare services, and the of related
                      goods and services.
                    </li>
                  </ul>
                </div>
        </>
      ),
    },
    {
      question: "How to Register for VAT in UAE?",
      answer:
        "To register for VAT, an application – along with required documents – is forwarded to the Federal Tax Authority (FTA). Upon successful submission of the request, FTA will issue a VAT Registration Certificate, which can be downloaded online from the applicant’s account.",
    },
    {
      question: "What are the Required Documents for VAT Registration in the UAE?",
      answer: (
        <>
          <div class="accordion-body">
                  The companies registering for VAT in the UAE are required to
                  submit the following documents for the registration process:
                  <ul>
                    <li>
                      Passport Copies – of business partners/owners (As
                      mentioned on business license)
                    </li>
                    <li>
                      Emirates ID – of business partners/owners (As mentioned on
                      the license)
                    </li>
                    <li>Business License - (Trade/Commercial License)</li>
                    <li>Complete Address of the company</li>
                    <li>Details of any branches of the company if any</li>
                    <li>Memorandum of Association (MOA)</li>
                    <li>Company’s bank account details – with IBAN letter</li>
                    <li>
                      Contact details of the authorized signatory, including
                      email and phone number
                    </li>
                    <li>Details of any branches, if applicable</li>
                    <li>
                      Expected turnover, revenue and taxable expenses for the
                      next 30 days
                    </li>
                    <li>
                      Turnover Declaration – with stamp and signature by the
                      owner or the manager.
                    </li>
                    <li>
                      Custom code – along with a copy of Dubai Customs Letter.
                    </li>
                    <li>GCC export or import details – if applicable</li>
                    <li>
                      Preference for or against registration as a Tax Group
                    </li>
                  </ul>
                  Depending upon the jurisdictions or business activities, some
                  additional documents may also be required for the VAT
                  Registration process.
                </div>
        </>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Banner */}
      <motion.div
        className="w-screen h-[50vh] overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/VAT1.jpg"
          alt="VAT Services Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Introduction */}
      <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 mb-10 sm:px-6 lg:px-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.4 },
          }}
        >
          <motion.h1 className="text-black text-4xl md:text-4xl mb-10 font-semibold text-center px-4">
            VALUE ADDED TAX (VAT)
          </motion.h1>
          <div className="text-gray-700 text-base md:text-xl leading-relaxed space-y-4 max-w-6xl mx-auto">
            <p>
              Assisting businesses in the UAE with the VAT registration process,
              providing support and guidance on compliance requirements such as
              filing VAT returns, maintaining VAT records, and implementing VAT
              accounting systems. We also provide VAT Advisory services for the
              application of VAT to specific transactions, products, and
              services, VAT planning, and optimization.UAE VAT services
              encompass a range of activities aimed at helping businesses
              understand, implement, and manage VAT compliance requirements by
              the regulations set by the Federal Tax Authority (FTA) of the UAE.
            </p>
            <p>
             Our experienced team provides expert guidance and support to
              ensure compliance with VAT regulations, optimize tax efficiency,
              and mitigate risks associated with VAT implementation and
              reporting.
            </p>
            <p>
              Our approach is to understand the complexities of VAT regulations
              and the challenges businesses face in complying with them. Our
              approach to UAE VAT services is tailored to meet the specific
              needs and objectives of each client. We provide a comprehensive
              range of services, including VAT registration, advisory,
              compliance, and representation.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Choose PRISH Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            Why Choose PRISH?
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "VAT Registration",
              description:
                "We assist businesses with VAT registration, ensuring they meet all requirements and deadlines set by the FTA.",
            },
            {
              title: "VAT Advisory",
              description:
                "Our expert advisors guide VAT compliance, including the classification of supplies, the VAT treatment of transactions, and implications for business operations.",
            },
            {
              title: "VAT Compliance",
              description:
                " We help businesses prepare and submit accurate VAT returns, maintain proper records, and comply with filing deadlines to avoid penalties.",
            },
            {
              title: "VAT Representation",
              description:
                "Our team can act as a liaison between businesses and the FTA, representing clients during tax audits, assessments, and disputes.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
            >
              <h4 className="text-xl font-semibold text-[#163c4f] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 max-w-8xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
            Frequently Asked Questions
          </h3>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md border border-[#163c4f]/20"
            >
              <div
                onClick={() => toggleFAQ(idx)}
                className="flex justify-between items-center cursor-pointer px-5 py-4 font-medium text-[#f5fafd] text-lg bg-[#0d3c58] rounded-t-lg hover:bg-[#0d3c58] transition"
              >
                <span>{item.question}</span>
                <span className="text-xl">
                  {openIndex === idx ? "▲" : "▼"}
                </span>
              </div>
              {openIndex === idx && (
                <div className="px-5 pb-4 text-gray-700 text-base leading-relaxed">
                  {item.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Send Query */}
        <div className="mt-10">
          <motion.div
            className="max-w-4xl mx-auto w-full px-6 py-12 bg-[#f8f9fa] shadow-xl rounded-xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center">Send a Query</h2>
            <SendQueryForm />
          </motion.div>

          <div className="mt-18 mb-10 text-center">
            <Link
              to="/services/taxation"
              className="inline-block px-6 py-3 bg-[#0d3c58] text-white rounded-md hover:bg-blue-700 transition"
            >
              Back to TAXATION
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VAT;
