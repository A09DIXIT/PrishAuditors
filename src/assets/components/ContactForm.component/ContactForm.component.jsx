import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { ref, push } from 'firebase/database';
import emailjs from '@emailjs/browser';

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

            await emailjs.send(
                'service_ne60fxo',
                'template_3g7aygq',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    mobile: formData.mobile
                },
                'vWRlgxYx1J6hGdJlp'
            );

            setShowPopup(true);
            setError(false);
            setFormData({ name: '', mobile: '', email: '', message: '' });

            setTimeout(() => setShowPopup(false), 3000);
        } catch (err) {
            console.error("Error submitting form:", err);
            setError(true);
        }
    };

    
      //Scroll on top
      useEffect(() => {
          window.scrollTo(0, 0);
        }, [])

    return (
        <>

       
            <section id="contact-form" className="p-5 bg-gray-100 flex justify-center items-center relative">
                {showPopup && (
                    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-100 ease-in-out">
                        <div className="bg-green-500 text-white px-10 py-6 rounded-lg shadow-md animate-fade-in-out">
                            Thanks for your interest! We will contact you soon.
                        </div>
                    </div>
                )}

                <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg flex flex-wrap overflow-hidden">
                    {/* Left Form */}
                    <div className="w-full md:w-2/5 p-8 flex flex-col justify-center">
                        <h2 className="text-4xl font-semibold text-center mb-6 mt-6 text-[#163c4f]">Contact Us</h2>
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
                                    className="bg-[#163c4f] text-white px-6 py-3 rounded-lg 
                                        hover:bg-[#0f2f3c] active:scale-95 active:shadow-inner 
                                        transition-all duration-150 ease-in-out"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side - Background Image with Info */}
                    <div className="w-full md:w-3/5 relative h-[550px] md:h-auto">
                        <img
                            src="/pro-contact.webp"
                            alt="Contact Us"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-opacity-60 flex flex-col justify-center p-8 text-white space-y-6">
                            <div>
                                <h3 className="text-xl font-bold border-b border-white inline-block pb-6 mb-2">
                                    HEAD OFFICE ADDRESS
                                </h3>
                                <h4 className="text-xl font-semibold">PRISH Accounting & Auditing LLC</h4>
                                <p className="text-lg leading-6 mt-1">
                                    Office - 20, 3rd floor, Dhanguard Business Centre, Burjuman, Near Burjuman Metro Exit -3, Dubai - 302001<br />
                                    Phone: +971-56 724 4122
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold border-b border-white inline-block pb-1 mb-2">
                                    OPENING HOURS
                                </h3>
                                <p className="text-sm">Monday to Saturday | 9:00 AM to 6:00 PM</p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    <a
                                        href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2851.996120349445!2d55.3005273!3d25.2552288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bd09856be8d%3A0xed30649d0ebea22d!2sDhanGuard%20-%20Business%20Setup%20and%20Banking%20Consultants%20-%20Dubai%2C%20UAE!5e1!3m2!1sen!2sin!4v1749794864870!5m2!1sen!2sin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                                            Get Direction
                                        </button>
                                    </a>
                                    <a href="tel:+971554338822" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                                            Call us
                                        </button>
                                    </a>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@prishauditors.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                                            Email us
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Embedded Google Map */}
             <div className="mt-4 max-w-8xl mx-auto px-0 mb-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2851.996120349445!2d55.3005273!3d25.2552288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bd09856be8d%3A0xed30649d0ebea22d!2sDhanGuard%20-%20Business%20Setup%20and%20Banking%20Consultants%20-%20Dubai%2C%20UAE!5e1!3m2!1sen!2sin!4v1749794864870!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[450px] border-0"
                    ></iframe>
                </div>
            </div>
            
        </>
    );
};

export default ContactForm;
