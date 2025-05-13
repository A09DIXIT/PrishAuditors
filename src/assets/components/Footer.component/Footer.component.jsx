import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-10"
      style={{ backgroundImage: "url('/who-we-are.jpeg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo & Text */}
          <div className="flex items-start gap-4">
            <img src="/prish.png" alt="Prish Logo" className="h-12 w-auto" />
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-2">Prish Auditors</h4>
              <p className="text-gray-200 text-sm md:text-base">
                Your trusted partner in financial and business advisory.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-3">Quick Links</h4>
            <ul className="text-sm md:text-base space-y-2">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/news">News and Blog</Link></li>
              <li><Link to="/downloads">Downloads</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-3">Services</h4>
            <ul className="text-sm md:text-base space-y-2">
              <li><Link to="/services/audit-assurance">Audit & Assurance</Link></li>
              <li><Link to="/services/taxation">Taxation</Link></li>
              <li><Link to="/services/transfer-pricing">Transfer Pricing</Link></li>
              <li><Link to="/services/business-consulting">Business Advisory & Consulting</Link></li>
              <li><Link to="/services/company-incorporation">Company Incorporation Services</Link></li>
              <li><Link to="/services/accounting-payroll">Accounting & Payroll Services</Link></li>
              <li><Link to="/services/tech-consulting">Technology Consulting</Link></li>
              <li><Link to="/services/other">Other Services</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-bold">Join Us & Increase Your Business</h4>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-start">
              <button className="px-5 py-3 bg-white text-gray-800 rounded font-semibold hover:bg-gray-300 transition duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center border-t border-gray-700 pt-5 text-sm">
          <p>&copy; 2025 PRISH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
