export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-10"
      style={{ backgroundImage: "url('who-we-are.jpeg)" }} // ✅ Replace with your image path
    >
      {/* Optional Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Text Section */}
          <div className="flex items-start gap-4">
            <img src="/prish.png" alt="Prish Logo" className="h-12 w-auto" />
            <div>
              <h4 className="text-xl font-bold mb-2">Prish Auditors</h4>
              <p className="text-gray-300">Your trusted partner in financial and business advisory.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-3">Quick Links</h4>
            <ul className="text-lg font-medium space-y-2">
              <li>About Us</li>
              <li>News</li>
              <li>Blog</li>
              <li>Downloads</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-xl font-bold mb-3">Services</h4>
            <ul className="space-y-2">
              <li>Audit & Assurance</li>
              <li>Taxation</li>
              <li>Transfer Pricing</li>
              <li>Business Advisory & Consulting</li>
              <li>Company Incorporation Services</li>
              <li>Accounting & Payroll Services</li>
              <li>Technology Consulting</li>
              <li>Other Services</li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Join Us & Increase Your Business</h4>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-start">
              <button className="px-5 py-3 bg-white text-gray-800 rounded font-semibold hover:bg-gray-300 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center border-t border-gray-700 pt-5">
          <p>&copy; 2025 PRISH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
