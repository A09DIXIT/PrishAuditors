import React, { useState } from "react";
import { Link } from "react-router-dom";

const AMLBanner = () => {
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setGradientPos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full h-[450px] overflow-hidden transition-all duration-200"
      style={{
        background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, rgb(22,60,79), #0f3c5d, #256d85)`
      }}
    >
      {/* Background People Layer */}
      <div className="absolute inset-0 bg-[url('/1teammeeting.jpg')] bg-cover bg-center opacity-30" />

      {/* Diagonal Shape Overlay */}
      <div className="absolute top-0 right-0 w-[250px] md:w-[300px] h-full bg-white opacity-20 transform rotate-[30deg] translate-x-[50%]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16 text-white">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Precision. Integrity. Excellence.
          </h2>
          <p className="text-lg md:text-xl">
            Book a consultation with Prish Auditors to understand regulatory requirements, optimize financial processes, and ensure full compliance. Trusted advisors in Audit, Risk, and Taxation services across India and the UAE.
          </p>
          <Link to="/contact/dubai">
            <button className="px-6 py-3 bg-white text-[rgb(22,60,79)] rounded-full font-semibold hover:bg-gray-100 transition">
              BOOK YOUR CONSULTATION
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AMLBanner;
