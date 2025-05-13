import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // ✅ Import Link

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    submenu: [
      { name: "About Us", href: "/about" },
      { name: "Our People", href: "/about/OurPeople" },
      { name: "Our Vision", href: "/about/OurVision" },
      { name: "Our Values", href: "/about/OurValues" },
    ],
  },
  {
    name: "Our Services",
    submenu: [
      { name: "AUDIT & ASSURANCE", href: "/services/audit" },
      { name: "SPECIAL AUDITS", href: "/services/taxation" },
      { name: "RISK ASSURANCE", href: "/services/risk-assurance" },
      { name: "TAXATION", href: "/services/taxation" },
      { name: "ACCOUNTING & BOOKKEEPING", href: "/services/AccountingBookkeeping" },
      { name: "Anti Money Laundering (AML) Compliances", href: "/services/AntiMoneyLaundering" },
      { name: "Corporate Consultancy", href: "/services/corporate-consulting" },
      { name: "Company Incorporation Services", href: "/services/CompanyIncorporation" },
      { name: "Mergers & Acquisitions", href: "/services/other" },
    ],
  },
  {
    name: "Resources",
    submenu: [
      { name: "Blogs and News", href: "/resources/blogs" },
      
      { name: "Downloads", href: "/resources/downloads" },
    ],
  },
  {
    name: "Contact",
    submenu: [
      { name: "Dubai", href: "/contact/dubai" },
    ],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 w-full h-23 z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent backdrop-blur-md shadow-lg" : "bg-white shadow-md"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-24 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
  <a href="/">
    <img src="/prish.png" alt="Logo" className="h-17 w-auto cursor-pointer" />
  </a>
</div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navigation.map((item, index) =>
                  item.submenu ? (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="text-black text-xl font-semibold hover:text-gray-700 px-4 py-2 transition duration-300">
                        {item.name}
                      </button>
                      {activeDropdown === index && (
                        <div className="absolute left-0 w-60 bg-white shadow-lg rounded-md py-3 z-10">
                          {item.submenu.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              to={sub.href}
                              className="block px-5 py-3 text-black text-base hover:bg-gray-200 transition duration-200"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={index}
                      to={item.href}
                      className="text-black text-lg font-semibold hover:text-gray-700 px-4 py-2 transition duration-300"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setOpenMenu(!openMenu)}
                  className="text-black focus:outline-none">
                  {openMenu ? (
                    <XMarkIcon className="w-7 h-7" />
                  ) : (
                    <Bars3Icon className="w-7 h-7" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {openMenu && (
            <div className="md:hidden bg-white shadow-md p-5">
              {navigation.map((item, index) =>
                item.submenu ? (
                  <div key={index}>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="block w-full text-left px-5 py-3 text-black text-lg font-semibold hover:bg-gray-200 transition duration-200"
                    >
                      {item.name}
                    </button>
                    {activeDropdown === index && (
                      <div className="pl-5 bg-gray-50">
                        {item.submenu.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            to={sub.href}
                            className="block px-5 py-3 text-black text-base hover:bg-gray-200 transition duration-200"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={item.href}
                    className="block px-5 py-3 text-black text-lg font-semibold hover:bg-gray-200 transition duration-200"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          )}
        </>
      )}
    </Disclosure>
  );
}
