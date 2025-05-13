import React from 'react';
import { FiX } from 'react-icons/fi';

const downloads = [
  { name: "Company Profile.xlsx", size: "2 Mb", type: "X", link: "/files/company-profile.xlsx" },
  { name: "Service List.docx", size: "1 Mb", type: "W", link: "/files/service-list.docx" },
  { name: "Tax Calculator.xlsx", size: "2 Mb", type: "X", link: "/files/tax-calculator.xlsx" },
  { name: "Brand Guidelines.ai", size: "600 Mb", type: "Ai", link: "/files/brand-guidelines.ai" },
  { name: "Audit Form.xlsx", size: "8 Mb", type: "X", link: "/files/audit-form.xlsx" },
];

const Download = () => {
  return (
<section className="min-h-screen bg-white flex justify-center items-center px-4 pt-28 pb-28">



      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center text-lg font-semibold py-4 rounded-t-xl">
          Company Profile
        </div>

        <ul className="divide-y">
          {downloads.map((file, index) => (
            <li key={index} className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 text-blue-600 font-bold px-3 py-2 rounded-md">
                  {file.type}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-400">{file.size}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href={file.link}
                  download
                  className="text-sm text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full hover:bg-cyan-200 transition"
                >
                  See in folder
                </a>
                <button className="text-gray-400 hover:text-red-500">
                  <FiX />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center py-6">
          <a
            href="#"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:from-blue-600 hover:to-cyan-500 transition"
          >
            download all
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
