import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
    });
    const [captchaValue, setCaptchaValue] = useState(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaValue) {
            setError(true);
            return;
        }

        console.log('Form Data Submitted:', formData);
        setSuccess(true);
        setError(false);
    };

    return (
        <section id="contact-form" className="p-10 bg-gray-100 flex justify-center items-center">
            <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg flex flex-wrap overflow-hidden">
                {/* Left Section - Contact Form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-[#163c4f]">Contact Us</h2>
                    {success && <p className="text-green-600 text-center mb-4">Your message was sent successfully!</p>}
                    {error && <p className="text-red-600 text-center mb-4">Please complete the reCAPTCHA.</p>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                            onChange={handleChange} 
                        />
                        <input 
                            type="text" 
                            name="mobile" 
                            placeholder="Mobile Number" 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                            onChange={handleChange} 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                            onChange={handleChange} 
                        />
                        <textarea 
                            name="message" 
                            placeholder="Message" 
                            required 
                            rows="5" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                            onChange={handleChange}
                        ></textarea>

                        <div className="flex justify-center">
                            <ReCAPTCHA sitekey="6LfV8kYpAAAAAE8iGYF1MUtnPN1IBKfyoYSQLGpj" onChange={handleCaptchaChange} />
                        </div>

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

                {/* Right Section - Image */}
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
