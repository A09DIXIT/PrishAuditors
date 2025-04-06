import React from "react";

const OurVision = () => {
  return (
    <section className="py-40 px-6 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Content Section */}
        <div className="md:pl-12 text-gray-800">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Elevating Professional Excellence
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our commitment to excellence drives us to redefine the standards of professional services,
            ensuring innovation, integrity, and global impact.
          </p>
          <ul className="space-y-4 text-lg font-medium text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span> Leveraging technology for seamless operations
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span> Expanding our global footprint
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span> Leadership that inspires progress
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span> Personalized solutions for every client
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">✔</span> Upholding the highest quality standards
            </li>
          </ul>
        </div>
        
        {/* Image Section */}
        <div className="relative flex justify-center">
        <div className="absolute w-40 h-40 bg-gray-700 rounded-full opacity-40 animate-pulse -top-6 -left-5"></div>
<div className="absolute w-32 h-32 bg-blue-900 rounded-full opacity-40 animate-pulse -bottom- right-5"></div>

          <img src="/reading.jpg" alt="Our Vision" className="w-full max-w-lg h-120 object-cover rounded-xl shadow-xl border-4 border-white 
             relative z-10 transform transition-all duration-300 ease-in-out 
             hover:scale-90 hover:opacity-80"
/>


        </div>
      </div>
    </section>
  );
};

export default OurVision;
