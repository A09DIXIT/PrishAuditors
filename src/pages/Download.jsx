import React from "react";
import { FiDownload, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

// Updated downloads list (Excel changed to PDF)
const downloads = [
  { name: "Company Profile.pdf", size: "2 Mb", type: "PDF", link: "/files/company-profile.pdf" },
  { name: "Service List.docx", size: "1 Mb", type: "DOCX", link: "/files/service-list.docx" },
  { name: "Tax Calculator.pdf", size: "2 Mb", type: "PDF", link: "/files/tax-calculator.pdf" },
  { name: "Brand Guidelines.ai", size: "600 Mb", type: "AI", link: "/files/brand-guidelines.ai" },
  { name: "Audit Form.pdf", size: "8 Mb", type: "PDF", link: "/files/audit-form.pdf" },
];

const Download = () => {
  return (
    <section
      className="min-h-screen pt-28 pb-20 px-6 md:px-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/1resourses1.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0"></div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-4xl font-semibold text-white">RESOURCES</h1>
            <p className="text-white mt-4 font-semibold text-xl">
              Access our latest resources, reports, and official documents.
            </p>
          </div>
        </motion.div>

        {/* Download Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {downloads.map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition p-6 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold rounded-full">
                  {file.type}
                </span>
                <div>
                  <p className="text-lg font-medium text-gray-800">{file.name}</p>
                  <p className="text-sm text-gray-500">{file.size}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={file.link}
                  download
                  className="flex items-center gap-1 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm transition"
                >
                  <FiDownload className="text-base" /> Download
                </a>
                <button className="text-gray-400 hover:text-red-500">
                  <FiX />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download All Button */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full text-base font-semibold shadow"
          >
            <FiDownload className="text-lg" /> Download All Files
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
