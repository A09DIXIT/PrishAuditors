import React, { useState } from 'react';
import { db } from '../../../firebase';
import { ref, push } from 'firebase/database';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
    });
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const contactRef = ref(db, 'contacts');
            await push(contactRef, formData);
            setShowPopup(true);
            setError(false);
            setFormData({ name: '', mobile: '', email: '', message: '' });

            // Hide after 1 second
            setTimeout(() => setShowPopup(false), 3000);
        } catch (err) {
            console.error("Error saving to Firebase:", err);
            setError(true);
        }
    };

    return (
        <section id="contact-form" className="p-10 bg-gray-100 flex justify-center items-center relative">
            {/* Smooth Success Popup */}
            {showPopup && (
                <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out">
                    <div className="bg-green-500 text-white px-10 py-6 rounded-lg shadow-md animate-fade-in-out">
                        Thanks for your interest! We will contact you soon.
                    </div>
                </div>
            )}

            <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg flex flex-wrap overflow-hidden">
                {/* Left Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-[#163c4f]">Contact Us</h2>
                    {error && (
                        <p className="text-red-600 text-center mb-4">
                            Something went wrong. Please try again.
                        </p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Name"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            placeholder="Mobile Number"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            placeholder="Message"
                            required
                            rows="5"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                            onChange={handleChange}
                        ></textarea>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#163c4f] text-white px-6 py-3 rounded-lg hover:bg-[#0f2f3c] transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 relative">
                    <img
                        src="pro-contact.webp"
                        alt="Contact Us"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
