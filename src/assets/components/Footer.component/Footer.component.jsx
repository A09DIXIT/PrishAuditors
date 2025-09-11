import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";
import { ref, push } from "firebase/database";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSubscriberEmail(e.target.value);
    if (error) setError("");
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!subscriberEmail) {
      setError("Email cannot be empty.");
      return;
    }

    if (!isValidEmail(subscriberEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const contactRef = ref(db, "contacts");
      await push(contactRef, { email: subscriberEmail });

      await emailjs.send(
        "service_ne60fxo",
        "template_3g7aygq",
        { from_email: subscriberEmail },
        "vWRlgxYx1J6hGdJlp"
      );

      setShowPopup(true);
      setError("");
      setSubscriberEmail("");

      setTimeout(() => setShowPopup(false), 3000);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Subscription failed. Please try again.");
      setShowPopup(false);
    }
  };

  // Directional animation variants
  const fromTop = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };

  const fromBottom = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // For list items (nice little stagger & lift)
  const listFromTop = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };
  const listFromBottom = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref: footerRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative bg-cover bg-center text-white py-3 md:py-4 lg:py-5 mt-0"
      style={{ backgroundImage: "url('/dubai-banner.jpeg')" }}
    >
      <div className="absolute inset-0 bg-blue-900/80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo & Social — from TOP to BOTTOM */}
          <motion.div
            className="space-y-3 text-center md:text-left"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fromTop}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <img
              src="/white-logo.png"
              alt="Prish Logo"
              className="h-12 w-auto mx-auto md:mx-0"
            />
            <h4 className="text-lg font-bold mb-1">
              PRISH AUDITORS
              <hr className="w-1/3 border-white mx-auto md:mx-0 mt-1" />
            </h4>
            <p className="text-gray-200 text-xs md:text-sm leading-relaxed">
              Your trusted partner in financial <br /> and business advisory.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-3 mt-3 text-base">
              
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/prish-accounting-auditing-llc/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/971567244122"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </motion.div>

          {/* Quick Links & Services (two columns) */}
          <div className="grid grid-cols-2 gap-6 text-center md:text-left">
            {/* Quick Links — from BOTTOM to TOP */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { transition: { when: "afterChildren" } },
                visible: {
                  transition: { staggerChildren: 0.12, when: "beforeChildren" },
                },
              }}
            >
              <h4 className="text-base font-bold mb-2">QUICK LINKS</h4>
              <motion.ul className="space-y-1 text-xs md:text-sm">
                {[
                  { to: "/about", text: "ABOUT US" },
                  { to: "/resources/blogs", text: "BLOGS AND NEWS" },
                  { to: "/resources/downloads", text: "RESOURCES" },
                  { to: "/contact", text: "REACH US" },
                  { to: "/careers", text: "CAREERS" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listFromBottom}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Link to={item.to}>{item.text}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Services — from TOP to BOTTOM */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { transition: { when: "afterChildren" } },
                visible: {
                  transition: { staggerChildren: 0.12, when: "beforeChildren" },
                },
              }}
            >
              <h4 className="text-base font-bold mb-2">SERVICES</h4>
              <motion.ul className="space-y-1 text-xs md:text-sm">
                {[
                  { to: "/services/audit", text: "AUDIT & ASSURANCE" },
                  { to: "/services/special-audit", text: "SPECIAL AUDIT" },
                  { to: "/services/risk-assurance", text: "RISK ASSURANCE" },
                  { to: "/services/taxation", text: "TAXATION" },
                  { to: "/services/AntiMoneyLaundering", text: "ANTI MONEY LAUNDERING" },
                  { to: "/services/AccountingBookkeeping", text: "ACCOUNTING & BOOKKEEPING" },
                  { to: "/services/CompanyIncorporation", text: "COMPANY INCORPORATION" },
                  { to: "/services/corporate-consulting", text: "CORPORATE CONSULTANCY" },
                  { to: "/services/mergers-acquisitions", text: "MERGERS & ACQUISITIONS" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listFromTop}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Link to={item.to}>{item.text}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Subscribe (kept simple fade on enter; tell me if you want a direction) */}
          <motion.div
            className="space-y-3 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            <h4 className="text-base md:text-lg font-bold leading-snug">
              JOIN US & GROW YOUR BUSINESS
            </h4>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="w-full p-2 rounded bg-gray-800 text-white text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={subscriberEmail}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-gray-800 rounded font-semibold hover:bg-gray-600 transition duration-300 text-xs md:text-sm"
              >
                Subscribe
              </button>
            </form>
            {showPopup && <p className="text-green-400 text-xs">Subscribed successfully!</p>}
            {error && <p className="text-red-500 text-xs">{error}</p>}
          </motion.div>
        </div>

        {/* Bottom Text */}
        <div className="mt-5 text-center border-t border-gray-700 pt-3 text-xs md:text-sm">
          <p>&copy; 2025 PRISH. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
