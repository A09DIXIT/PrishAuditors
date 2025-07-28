import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: `AML UAE has proved to be a good AML business partner for our business in Dubai. Their AML consultants and technology experts guided us through the entire journey of selecting the right AML software for our business and answered our basic questions like what is AML compliance.`,
    extra: `The sanctions screening software has proven to be highly valuable for our AML compliance requirements, and we are thankful to AML UAE for this.`,
    img: "/prish-icon.png",
    company: "Auditing company",
    title: "CEO",
  },
  {
    text: `PRISH helped us navigate the regulatory AML landscape in the UAE. Their tools and guidance have ensured we remain compliant and audit-ready.`,
    extra: `We appreciate the hands-on support and look forward to more collaborations.`,
    img: "/prish-icon.png",
    company: "Finance Corp",
    title: "Director",
  },
  {
    text: `Choosing PRISH for AML advisory was the best decision. They simplified the implementation process and answered every compliance query patiently.`,
    extra: `Their team’s depth of knowledge in Anti Money Laundering laws is commendable.`,
    img: "/prish-icon.png",
    company: "Risk Solutions Ltd",
    title: "Manager",
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
