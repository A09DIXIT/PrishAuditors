import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const SendQueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_l2rwk0i",        // ✅ SAME AS CONTACT FORM
        "template_2tvvgf7",       // ✅ SAME TEMPLATE
        {
          user_name: formData.name,
          user_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          reply_to: formData.email
        },
        "4qwnvEJOawyN-6Ips"        // ✅ SAME PUBLIC KEY
      );

      setShowPopup(true);
      setError(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

      setTimeout(() => setShowPopup(false), 4000);

    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md relative">

      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          Your query has been sent successfully!
        </div>
      )}

      {/* ❌ ERROR MESSAGE */}
      {error && (
        <div className="mb-4 p-3 text-red-600 bg-red-100 rounded-md text-center">
          Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-md h-32 resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SendQueryForm;
