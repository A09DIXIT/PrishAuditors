import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: `We truly value our partnership with Prish. Their team is honest, responsive, and supportive, always there when we need them. Their professionalism and deep expertise in both their field and the gold industry are second to none. Thanks to their unwavering integrity and exceptional service, our finance and accounting operations have flourished.`,
    img: "/Lamer-Gems.jpeg",
    company: "Lamer Gems Jewellery Trading LLC",
    title: "Owner",
  },
  {
    text: `it has been a great experience working with Shubham Jain the Co - founder and head of buisness The Prish accounting & Auditing Co The team has been handling all the matters very professionally related to Accounts and have been very Co operative and helpful 
I wish them all the best have a successful career in future 
Zahid Qureshi`,
    img: "/AL-AZAH.jpeg",
    company: "AL AZAH GOLD & DIAMONDS",
    title: "Manager",
  },
  {
    text: `We have been working with PRISH Auditors for a year now across all our businesses, and the experience has been nothing short of exceptional. From handling our AML compliance to managing our tax filings and financial audits, their team has consistently demonstrated deep industry knowledge, professionalism, and unwavering reliability.`,
    extra: `What sets PRISH apart is their proactive approach - they are always on their toes, quick to respond, and genuinely invested in our success. Their guidance has been instrumental in keeping our operations compliant and efficient, especially in a highly regulated sector like ours. Beyond their technical expertise, they are trustworthy, approachable, and a pleasure to work with.`,
    img: "/prish-icon.png",
    company: "Swar Gold Ind LLC",
    title: "Owner",
  },
];

const CustomerReviews = () => {
  const [bgPosition, setBgPosition] = useState("50% 50%");

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBgPosition(`${x}% ${y}%`);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${bgPosition}, #e0d4ff, #f3ecff, #c7e2ff)`,
        transition: "background-position 0.2s ease",
      }}
    >
      {/* Left Content - Slider */}
      <div className="lg:w-1/2 w-full z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          TESTIMONIALS
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-start mb-4">
                <div className="text-blue-900 mr-4 text-4xl">
                  <FaQuoteLeft size={40} />
                </div>
                <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <p>{review.text}</p>
                  <p className="mt-2">{review.extra}</p>
                </div>
              </div>

              <div className="flex items-center mt-6 space-x-4">
                <img
                  src={review.img}
                  alt="Client"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="items-center">
                  <p className="text-blue-900 font-semibold text-sm">{review.company}</p>
                  <p className="text-yellow-600 font-semibold text-sm">{review.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Image with scroll-triggered animation */}
      <motion.div
        className="lg:w-1/3 w-full mt-10 lg:mt-0 z-10"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="rounded-lg overflow-hidden shadow-md border">
          <img
            src="/testimonials.png"
            alt="Testimonial Team"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CustomerReviews;
