import React from 'react';        


const AboutUs = () => {
    return (
        <section className="container mx-auto py-16 px-8 md:px-16">
            <div className="who-we-grid flex flex-wrap justify-center md:justify-between items-center">
                
                {/* Left Section - Enlarged Image */}
                <div className="who-left w-full md:w-1/2 mb-6 md:mb-0 relative group">
                    <img 
                        src="/who-we-are.jpeg" 
                        alt="Who We Are" 
                        className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                </div>
  
                {/* Right Section - Text */}
                <div className="who-right w-full md:w-1/2 md:pl-8 text-[#163c4f]">
                    <span className="singleLine block w-36 h-1 bg-[#163c4f] mb-4"></span>
                    <h2 className="text-4xl font-semibold mb-3 text-[#163c4f]">ABOUT US</h2>
                    <h3 className="text-2xl font-bold text-[#163c4f] mb-6">One Stop Solution for all your Accounting and Business Needs</h3>
                    
                    {/* Smooth Hover Effect on Text */}
                    <div 
                        className="text-lg leading-relaxed overflow-y-auto max-h-[300px] p-4 transition-transform duration-500 ease-in-out hover:scale-105"
                        style={{
                            scrollbarWidth: 'none', // Hide scrollbar for Firefox
                            msOverflowStyle: 'none'  // Hide scrollbar for IE/Edge
                        }}
                    >
                        {/* Hide scrollbar for Webkit Browsers */}
                        <style>
                            {`
                            .scrollable-text::-webkit-scrollbar {
                                display: none; /* Hide scrollbar for Webkit (Chrome, Safari) */
                            }
                            `}
                        </style>

                        <p className="mb-4">
                            Welcome to PRISH Accounting and Auditing, your trusted partner in navigating the complexities of financial management and compliance. As a distinguished Chartered Accountant firm, we specialize in delivering tailored solutions to meet your business needs with precision and expertise in the field of <b>Accounting, </b><b>Auditing & Assurance, Taxation, Mergers & Acquisitions, Management</b><b>Consultancy and Company Formation services</b>.
                        </p>
                        <p className="mb-4">
                            At PRISH Accounting and Auditing, we understand the pivotal role financial integrity plays in the success of your endeavors. Our team of professionals brings forth a wealth of experience and a commitment to excellence, ensuring that your financial objectives are not only met but exceeded.
                        </p>
                        <p className="mb-4">
                            Whether you're a budding startup, an established corporation, or an individual seeking personalized financial guidance, we offer a comprehensive suite of services designed to optimize your financial performance and foster sustainable growth. <b>From auditing and taxation to strategic advisory and risk management</b>, we provide holistic solutions tailored to your unique circumstances.
                        </p>
                        <p className="mb-4">
                            Driven by a dedication to professionalism, integrity, and innovation, we strive to provide you ‘More Than Just Advise’ by aiming to be your trusted advisors, empowering you to make informed decisions and achieve your aspirations with confidence. Experience the difference with PRISH. Let us be the cornerstone of your financial success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
