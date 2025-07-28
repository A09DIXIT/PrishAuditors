// Navbar.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Top navigation links
const topMenu = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "TEAM", href: "/ourteam" },
  { name: "BLOG & NEWS", href: "/resources/blogs" },
  { name: "REACH US", href: "/contact" },
  { name: "CAREERS", href: "/careers" },
];

// Services menu
const servicesMenu = [
  {
    name: "AUDIT & ASSURANCE",
    href: "/services/audit",
    submenu: [
      { name: "STATUTORY AUDIT", href: "/statutory-audit" },
      { name: "CONCURRENT AUDIT", href: "/concurrent-audit" },
      { name: "FORENSIC AUDIT", href: "/forensic-audit" },
      { name: "INVENTORY AUDIT AND VERIFICATION", href: "/inventory-audit" },
      { name: "MYSTERY AUDIT", href: "/mystery-audit" },
    ],
  },
  {
    name: "SPECIAL AUDIT",
    href: "/services/special-audit",
    submenu: [
      { name: "GOLD AUDIT", href: "/gold-audit" },
      { name: "SYSTEM AUDIT", href: "/system-audit" },
      { name: "TRANSACTION AUDIT", href: "/transaction-audit" },
      { name: "RERA AUDIT", href: "/rera-audit" },
      { name: "SALES TAX CERTIFICATION AUDITS", href: "/sales-tax-certification-audit" },
    ],
  },
  {
    name: "RISK ASSURANCE",
    href: "/services/risk-assurance",
    submenu: [
      { name: "INTERNAL AUDIT", href: "/internal-audit" },
      { name: "STANDARD OPERATING PROCEDURES (SOP's)", href: "/sops" },
      { name: "RISK CONTROL MATRIX (RCM)", href: "/rcm" },
    ],
  },
  {
    name: "TAXATION",
    href: "/services/taxation",
    submenu: [
      { name: "VALUE ADDED TAX (VAT)", href: "/vat" },
      { name: "UAE CORPORATE TAX", href: "/corporate-tax" },
      { name: "TRANSFER PRICING", href: "/transfer-pricing" },
      { name: "TAX RESIDENCY CERTIFICATE (TRC)", href: "/trc" },
    ],
  },
  {
    name: "ANTI-MONEY LAUNDERING",
    href: "/services/antimoneylaundering",
    submenu: [
      { name: "AML/CFT POLICY, CONTROLS, AND PROCEDURES DOCUMENTATION", href: "/aml-cft-policy" },
      { name: "IN-HOUSE AML COMPLIANCE DEPARTMENT SETUP", href: "/inhouseamlcompliance" },
      { name: "AML TRAINING", href: "/amltraining" },
      { name: "AML SOFTWARE SELECTION", href: "/amlsoftwareselection" },
      { name: "ANNUAL AML/CFT RISK ASSESSMENT REPORT", href: "/annualamlriskassessment" },
      { name: "AML/CFT HEALTH CHECK", href: "/amlhealthcheck" },
      { name: "AML BUSINESS RISK ASSESSMENT", href: "/amlbusinessriskassessment" },
      { name: "AML SCREENING SOFTWARE TESTING AND VALIDATION SERVICES", href: "/amlsoftwarevalidation" },
      { name: "AML REGULATORY REPORTING SERVICES", href: "/amlregulatoryreporting" },
      { name: "MANAGED KYC AND CUSTOMER DUE DILIGENCE SERVICES", href: "/kycandcddservices" },
    ],
  },
  { name: "ACCOUNTING & BOOKKEEPING", href: "/services/accountingbookkeeping" },
  { name: "COMPANY INCORPORATION", href: "/services/companyincorporation" },
  {
    name: "CORPORATE CONSULTANCY",
    href: "/services/corporate-consulting",
    submenu: [
      { name: "STRATEGIC PLANNING", href: "/corporate-consulting/strategic-planning" },
      { name: "FIXED ASSETS MANAGEMENT", href: "/corporate-consulting/fixed-assets" },
      { name: "TECHNOLOGY CONSULTING", href: "/corporate-consulting/technology-consulting" },
      { name: "CFO SERVICES", href: "/corporate-consulting/cfo-services" },
      { name: "FINANCIAL BUDGETING AND FORECASTING", href: "/corporate-consulting/financial-budgeting" },
    ],
  },
  {
    name: "MERGERS & ACQUISITIONS",
    href: "/services/mergers-acquisitions",
    submenu: [
      { name: "DUE DILIGENCE", href: "/mergers-acquisitions/due-diligence" },
      { name: "RESTRUCTURING AND REORGANIZATION SERVICES", href: "/mergers-acquisitions/restructuring-reorganization" },
      { name: "VALUATION ADVISORY SERVICES", href: "/mergers-acquisitions/valuation-advisory" },
    ],
  },
];

// Line breaker
const breakAfterTwoWords = (text) => {
  const targets = [
    "RESTRUCTURING AND REORGANIZATION SERVICES",
    "VALUATION ADVISORY SERVICES",
  ];
  if (targets.includes(text.toUpperCase())) {
    const words = text.split(" ");
    return (
      <span className="inline-block leading-tight text-sm">
        <span className="block">{words.slice(0, 2).join(" ")}</span>
        <span className="block">{words.slice(2).join(" ")}</span>
      </span>
    );
  }
  return text;
};

// Desktop Dropdown Nav
const ExtendedNav = ({ activeServiceIndex, setActiveServiceIndex }) => (
  <div className="w-full bg-white transition-all duration-300">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="hidden md:flex justify-center space-x-4 text-sm font-bold text-gray-800 h-18 items-center relative">
        {servicesMenu.map((service, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveServiceIndex(index)}
            onMouseLeave={() => setActiveServiceIndex(null)}
          >
            <Link
              to={service.href}
              className="inline-flex items-center px-2 py-2 hover:text-indigo-600"
            >
              {service.name}
             {service.submenu && (
  service.name === "TAXATION" ? (
    <svg
      className="ml-2 w-3 h-3 text-gray-600 group-hover:text-indigo-600 transition duration-200"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Custom icon path for Taxation dropdown */}
        <path d="M5.6 7.5L10 12l4.5-4.5z" />
    </svg>
  ) : (
    <svg
      className="ml-2 w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition duration-200"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Default dropdown icon */}
      <path d="M5.6 7.5L10 12l4.5-4.5z" />
    </svg>
  )
)}

            </Link>
            {service.submenu && activeServiceIndex === index && (
              <div className="absolute -left-10 top-full mt-0 bg-white border border-gray-200 rounded-md shadow-lg min-w-[220px] z-50">
                {service.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.href}
                    className="block px-4 py-2 text-gray-500 hover:bg-indigo-50 hover:text-indigo-700 whitespace-nowrap"
                  >
                    {breakAfterTwoWords(subItem.name)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Main Navbar
export default function Navbar() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServiceOpenIndex, setMobileServiceOpenIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileMenuOpen]);

  const toggleMobileSubmenu = (index) => {
    setMobileServiceOpenIndex(mobileServiceOpenIndex === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServiceOpenIndex(null);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src="/prish.png" alt="Logo" className="h-20 w-60" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-8 font-semibold text-gray-700 text-base">
              {topMenu.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  className="hover:text-indigo-600 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {!scrolled && (
        <ExtendedNav
          activeServiceIndex={activeServiceIndex}
          setActiveServiceIndex={setActiveServiceIndex}
        />
      )}

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 shadow-lg max-h-screen overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
            <div className="flex flex-col space-y-2 border-b border-gray-200 pb-4">
              {topMenu.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className="text-black font-bold hover:text-indigo-600 transition px-2 py-2 rounded"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-1">
              {servicesMenu.map((service, index) => (
                <div key={index} className="border-b border-gray-200">
                  <div
                    onClick={() =>
                      service.submenu ? toggleMobileSubmenu(index) : closeMobileMenu()
                    }
                    className="flex justify-between items-center cursor-pointer px-2 py-2 font-bold text-gray-800 hover:text-indigo-600"
                  >
                    <Link
                      to={service.href}
                      onClick={(e) => {
                        if (service.submenu) e.preventDefault();
                        else closeMobileMenu();
                      }}
                      className="flex-1"
                    >
                      {service.name}
                    </Link>
                    {service.submenu && (
                      <button
                        onClick={() => toggleMobileSubmenu(index)}
                        aria-label="Toggle submenu"
                        className="ml-2"
                        type="button"
                      >
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-300 ${
                            mobileServiceOpenIndex === index ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  {service.submenu && mobileServiceOpenIndex === index && (
                    <div className="pl-6 pb-2 space-y-1">
                      {service.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          onClick={closeMobileMenu}
                          className="block px-2 py-1 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded"
                        >
                          {breakAfterTwoWords(subItem.name)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
