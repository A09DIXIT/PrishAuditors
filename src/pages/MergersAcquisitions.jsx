import React from "react";
import { Link } from "react-router-dom";

const MergersAcquisitions = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="w-screen h-[70vh] overflow-hidden">
        <img
          src="/Other-Services.avif"
          alt="Mergers & Acquisitions Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image Left, Text Right Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/Mergers-Acquisitions.jpeg"
            alt="Mergers Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#163c4f" }}>
            Mergers & Acquisitions
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            Mergers and acquisitions (M&A) in the United Arab Emirates (UAE) have been significant in recent years,
            driven by the country's robust economy, favorable business environment, and strategic location as a global business hub.
          </p>
          <p className="text-gray-700 text-lg">
            We support companies to get ready for mergers from both the buyers’ and sellers’ perspectives.
            The overall M&A process begins with identifying and evaluating the target company, conducting due diligence,
            negotiating terms, closing the deal, and managing post-deal integration.
          </p>
        </div>
      </div>

      {/* Linked Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
        {/* Due Diligence */}
        <div>
          <Link to="/services/Mergers-Acquisitions/due-diligence">
            <h2 className="text-2xl font-semibold mb-3 hover:underline" style={{ color: "#163c4f" }}>
              Due Diligence
            </h2>
          </Link>
          <p className="text-gray-700 text-lg">
            Financial, tax, and legal due diligence services are essential components of the M&A process,
            providing valuable insights and risk assessments to potential buyers or investors. Businesses are inclined
            to engage experienced professionals, and at <strong>PRISH</strong>, we exceed client expectations in conducting
            thorough due diligence and achieving successful outcomes in M&A transactions.
          </p>
        </div>

        {/* Valuation Advisory */}
        <div>
          <Link to="/services/Mergers-Acquisitions/valuation-advisory">
            <h2 className="text-2xl font-semibold mb-3 hover:underline" style={{ color: "#163c4f" }}>
              Valuation Advisory Services
            </h2>
          </Link>
          <p className="text-gray-700 text-lg">
            We provide Valuation Advisory Services covering feasibility studies, fairness opinions, transaction advisory,
            due diligence support, valuation modeling, sensitivity analysis, and expert witness testimony. Our independent
            and objective assessments empower clients to make informed decisions in M&A.
          </p>
        </div>

        {/* Restructuring Services */}
        <div>
          <Link to="/services/Mergers-Acquisitions/restructuring-reorganization">
            <h2 className="text-2xl font-semibold mb-3 hover:underline" style={{ color: "#163c4f" }}>
              Restructuring and Reorganization Services
            </h2>
          </Link>
          <p className="text-gray-700 text-lg">
            These services are essential for businesses facing financial, operational, or strategic challenges.
            Our experienced restructuring professionals guide companies through complex restructuring processes,
            unlocking value and ensuring long-term success and sustainability in dynamic markets.
          </p>
        </div>
      </div>
    </>
  );
};

export default MergersAcquisitions;
