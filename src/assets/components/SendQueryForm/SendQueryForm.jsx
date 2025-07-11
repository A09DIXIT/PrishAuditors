import React, { useState } from "react";

const SendQueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }

    // ✅ For now, just log data (replace this with your API/Firebase call)
    console.log("Form submitted:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      
      {submitted && (
        <div className="mb-4 p-3 text-green-600 bg-green-100 rounded-md text-center">
          Your query has been submitted successfully!
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
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your name"
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
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Optional"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-md h-32 resize-none focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SendQueryForm;
