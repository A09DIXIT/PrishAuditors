import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { db } from '../../../firebase';
import { ref, push } from 'firebase/database';
import emailjs from '@emailjs/browser';// ...import statements remain same

export default function Footer() {
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => setSubscriberEmail(e.target.value);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subscriberEmail) {
      setError(true);
      return;
    }

    try {
      const contactRef = ref(db, 'contacts');
      await push(contactRef, { email: subscriberEmail });

      await emailjs.send(
        'service_ne60fxo',
        'template_3g7aygq',
        { from_email: subscriberEmail },
        'vWRlgxYx1J6hGdJlp'
      );

      setShowPopup(true);
      setError(false);
      setSubscriberEmail('');
      setTimeout(() => setShowPopup(false), 1000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(true);
    }
  };

  return (
    <footer
      className="relative bg-cover bg-center text-white py-10"
      style={{ backgroundImage: "url('/who-we-are.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Logo */}
          <div className="space-y-4">
            <img src="/white-logo.png" alt="Prish Logo" className="h-15 w-auto " />
            <div>
              <h4 className="text-lg md:text-2xl font-bold mb-1">
                PRISH AUDITORS
                <hr className="w-1/2" />
              </h4>
              <p className="text-gray-200 text-base md:text-xl">
                Your trusted partner in financial <br /> and business advisory.
              </p>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="grid grid-cols-2 gap-5">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg md:text-2xl font-bold mb-3">QUICK LINKS</h4>
              <ul className="flex flex-col space-y-2 text-sm md:text-base text-white">
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/resources/blogs">BLOGS AND NEWS</Link></li>
                <li><Link to="/resources/downloads">RESOURCES</Link></li>
                <li><Link to="/contact">REACH US</Link></li>
                <li><Link to="/careers">CAREERS</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg md:text-2xl font-bold mb-3">SERVICES</h4>
              <ul className="flex flex-col space-y-2 text-sm md:text-base text-white">
                <li><Link to="/services/audit" className="hover:underline">AUDIT & ASSURANCE</Link></li>
                <li><Link to="/services/special-audit" className="hover:underline">SPECIAL AUDIT</Link></li>
                <li><Link to="/services/risk-assurance" className="hover:underline">RISK ASSURANCE</Link></li>
                <li><Link to="/services/taxation" className="hover:underline">TAXATION</Link></li>
                <li>
                  <Link to="/services/AntiMoneyLaundering" className="hover:underline whitespace-nowrap">
                    ANTI MONEY LAUNDERING
                  </Link>
                </li>
                <li>
                  <Link to="/services/AccountingBookkeeping" className="hover:underline whitespace-nowrap">
                    ACCOUNTING & BOOKKEEPING
                  </Link>
                </li>
                <li>
                  <Link to="/services/CompanyIncorporation" className="hover:underline whitespace-nowrap">
                    COMPANY INCORPORATION SERVICES
                  </Link>
                </li>
                <li>
                  <Link to="/services/corporate-consulting" className="hover:underline whitespace-nowrap">
                    CORPORATE CONSULTANCY
                  </Link>
                </li>
                <li>
                  <Link to="/services/other" className="hover:underline whitespace-nowrap">
                    MERGERS & ACQUISITIONS
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe */}
          <div className="space-y-4 w-2/3 mx-auto">
            <h4 className="text-lg md:text-2xl font-bold">JOIN US & INCREASE YOUR BUSINESS</h4>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="w-full p-3 rounded bg-gray-800 text-white text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={subscriberEmail}
              onChange={handleChange}
            />
            <div className="flex justify-start">
              <button
                onClick={handleSubscribe}
                className="px-5 py-3 bg-white text-gray-800 rounded font-semibold hover:bg-gray-600 transition duration-300 text-base"
              >
                Subscribe
              </button>
            </div>
            {showPopup && <p className="text-green-400 mt-2">Subscribed successfully!</p>}
            {error && <p className="text-red-500 mt-2">Subscription failed. Please try again.</p>}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center border-t border-gray-700 pt-5 text-base">
          <p>&copy; 2025 PRISH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
