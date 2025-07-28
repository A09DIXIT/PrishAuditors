import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SendQueryForm from '../assets/components/SendQueryForm/SendQueryForm';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
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
    question: "What type of UAE companies can I start?",
    answer: (
      <>
        UAE allows company formation in the free zone, mainland, or offshore. Business setup in the UAE mainland requires a local sponsor and the license is issued by DED.
        <br />
        Free zone companies can operate within a limited geographical region and the license is issued by a particular free zone authority.
        <br />
        Offshore businesses in UAE allow your company to trade outside the UAE as well as make efforts to safeguard your wealth and assets. Offshore companies get a certificate of incorporation and not a trade license.
        <br />
        All types of companies can be started in UAE and more than a thousand activities are allowed by the Economic Department.
      </>
    ),
  },
  {
    question: "How to renew my business license on the mainland?",
    answer: (
      <>
        If you want to renew your Dubai commercial license, the applicant should submit the DED registered certificate with the necessary approval from the Ministry of Economy and National Media Company. If you want to renew your Dubai trade license, then you should submit a valid Ejari certificate and other lease contracts.
      </>
    ),
  },
  {
    question: "Why should I start my company in UAE?",
    answer: <>UAE is a perfectly located biggest market in the world. It serves as a perfect destination to invest in different kinds of business. The business owners are free from taxes, and they can expect exceptional logistics in all the emirates. You don’t have any capital restrictions while starting your business. Financial freedom is an attractive point that brings in employees from foreign districts.
UAE has mind-blowing business opportunities; a business setup firm in UAE can guide you through the entire company formation process.</>,
  },
  {
    question: "How long will it take to set up a free zone company?",
    answer: <>Being a trustworthy and professional business consultant, we ensure fast and reliable business setup in UAE-free zones. Usually, it takes around 3 to 10 days to set up your free zone company; it may differ according to the selected free zone. We make sure that all your documents are legal and that concerned authorities have attested to them.
If you’re not consulting a business consultant, it will take up to a few weeks and it becomes difficult to clear all the legal procedures. So, consider PRISH for your free zone business setup.</>,
  },
  {
    question: "How to start an LLC company in UAE?",
    answer: <>To establish your LLC Company in Dubai mainland or anywhere else in UAE, you have to reserve a trade name and other necessary preliminary approvals from concerned authorities. You get an MOA from the company and also, submit the lease contract to the licensing authority. Also, find a local partner and rented office space to start your business.
PRISH offer few inclusive and affordable packages according to your business setup requirements.</>,
  },
  {
    question: "What kind of company structure should I choose?",
    answer: <>This depends on your needs, as well as the needs of your business. You could set up your company as a Sole Establishment (this is the same as a Sole Proprietorship), as a Limited Liability Partnership, a Limited Liability Company, a Private Limited Company, or a Professional Services Company.
You also have the option of setting up your company on the mainland, in a free zone (only limited liability company structures are permitted here), or offshore.</>,
  },
  {
    question: "Do I need to rent an office for my business?",
    answer: <>A physical presence is mandatory for companies established on the mainland and in free zones. However, an offshore company is not permitted to lease office space in the UAE.
The good news is that there is affordable office space for everyone. If you want to keep your initial costs down, you could look at renting an office or any number of dedicated desks in a co-working space on the mainland. These are all fully furnished and ready to move in. In a free zone, you need to rent at least a desk in a shared office space. The added advantage is that some free zones allow you to rent a flexi-desk, that is a desk you will be using for say, ten hours in a week. You still get your dedicated PO Box so that you have a unique address.</>,
  },
];

const CompanyIncorporation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white text-[#163c4f]">
      {/* Banner */}
      <motion.div
        className="w-full h-[50vh] overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <img
          src="/CompanyIncorporation.jpg"
          alt="Company Incorporation Banner"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Section */}
       <div className="px-6 md:px-16 mt-10 max-w-8xl mx-auto">
                   <motion.div
                     className="bg-gradient-to-br from-[#0d3c58] via-[#fce4ec] to-[#fff3e0] py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     whileHover={{
                       scale: 1.02,
                       boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
                       transition: { duration: 0.4 },
                     }}
                   >
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-semibold mb-8 text-center text-[#0a2d45]">
              COMPANY INCORPORATION SERVICES
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Based on understanding our clients' requirements, we at <strong className="text-[#0a2d45]">PRISH</strong> advise clients on the most suitable business structure, ownership preferences, operating environments such as freezone, mainland, and other regulatory requirements.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Through our professional expertise team members, we navigate the complex legal and regulatory landscape more effectively, streamline the incorporation process, and establish a strong legal foundation for operations for our various clients in the country.
            </p>
          </div>
        </motion.div>
      </div>


       <div className="max-w-6xl mt-10 mx-auto px-4 pb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-semibold text-[#163c4f] mb-6 text-center">
                  Why Choose PRISH for AML Risk Assessment Filing?
                </h3>
              </motion.div>
      
              <div className="grid md:grid-cols-2 gap-8">
                {["Business Structure and Ownership Consultation",
                "Document Preparation and Submission",
                  "Trade Name Reservation and Approval",
                  "License Application and Processing",
                  "Office Space and Facilities",
                "Visa and Immigration Services",
              "Bank Account Opening",
            "Ongoing Compliance and Support including trademark, copyright, etc."].map((text, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#163c4f]"
                  >
                    <p className="text-gray-700 text-base">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
      

      
      {/* FAQ Section */}
      <motion.h2
             className="text-4xl font-semibold text-center text-[#0a2d45] mb-10"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
             Frequently Asked Questions
           </motion.h2>
     
           <div className="space-y-4 max-w-8xl mx-auto px-4 pb-20">
             {faqItems.map((item, index) => (
               <div key={index} className="border border-[#d6e4ec] rounded-lg overflow-hidden">
                 <button
                   onClick={() => toggleFAQ(index)}
                   className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-[#0d3c58] text-white hover:bg-[#09293d]"
                 >
                   {item.question}
                   <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
                 </button>
                 <AnimatePresence initial={false}>
                   {openIndex === index && (
                     <motion.div
                       key="content"
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: "auto" }}
                       exit={{ opacity: 0, height: 0 }}
                       transition={{ duration: 0.3 }}
                     >
                       <div className="px-6 py-4 text-gray-700 bg-[#f9fbfc] text-base">
                         {item.answer}
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             ))}
           </div>
     

      {/* Contact Form */}
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
    </div>
  );
};

export default CompanyIncorporation;
