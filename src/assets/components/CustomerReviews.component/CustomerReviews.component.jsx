import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    name: "Mr. Geradus A.",
    img: "https://www.primeestates.ae/customerslist/6569d5ddb42aa_sw_testimonial-user1.png",
    review:
      "I can't speak highly enough of my experience with Prime Estates. They are an outstanding agency to work with. They are skilled listeners and negotiators with very in-depth knowledge of the real estate market.",
  },
  {
    name: "Mr. Mark E.",
    img: "https://www.primeestates.ae/customerslist/661781cab0b69_sw_ann.jpg",
    review:
      "I had an amazing experience with Prime Estates, my property advisor in Dubai. Their professionalism, knowledge, and patience were outstanding throughout the buying process. Highly recommended!",
  },
  {
    name: "Mr. Hamid C.",
    img: "https://www.primeestates.ae/customerslist/6569d630e77ae_sw_testimonialuser2.png",
    review:
      "After an amazing experience as an investor, it was a natural choice to go with Prime Estates for investment and property management. Very professional and kind with valuable advice.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-black text-white py-17">
      <div className="container mx-auto px-4">
        <span className="block w-0 h-1 bg-blue-500 mx-auto mb-3"></span>
        <h2 className="text-3xl font-bold text-center">Customer Reviews</h2>
        <p className="text-center text-gray-400 mt-2">GENUINE & AUTHENTIC WORDS</p>
        <span className="block w-20 h-2 bg-blue-400 mx-auto mb-5"></span>

        <div className="relative max-w-3xl mx-auto">
          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button className="swiper-button-prev bg-gray-700 p-8 rounded-full text-white">
              <FaChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button className="swiper-button-next bg-gray-700 p-8 rounded-full text-white">
              <FaChevronRight size={20} />
            </button>
          </div>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1} // Always show 1 slide at a time
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="w-full"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="p-8">
                <div className="bg-gray-900 shadow-lg rounded-lg p-8 text-center min-h-[250px] flex flex-col justify-center">
                  <figure className="flex flex-col items-center">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="w-24 h-24 rounded-full mb-3"
                    />
                    <h5 className="text-lg font-semibold text-white">{review.name}</h5>
                  </figure>
                  <p className="text-gray-300 mt-4">{review.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
