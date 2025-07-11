import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const slides = [
  { image: "/1new-banner.png" },
  { image: "/1banner1.png" },
  { image: "/1BANNER12.png" },
];

export default function HeaderBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
  <div className="relative w-full h-auto sm:min-h-[65vh] overflow-hidden">
    {/* Background Slider */}
    <div className="w-full h-auto sm:absolute sm:inset-0 sm:h-full z-0">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            {/* Responsive image wrapper */}
            <div className="w-full aspect-[16/9] sm:aspect-auto sm:h-full">
              <motion.img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 5, ease: "easeInOut" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  
  
        {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4 sm:px-8 md:px-16 lg:px-24 z-10">
        <div className="max-w-2xl space-y-4 sm:space-y-5 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-black/70 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg"
          >
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight text-white drop-shadow-lg">
              More Than Just Advice!
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-100 font-medium">
              PRISH Accounting and Auditing is an emerging firm of professional Chartered Accountants known for their excellence through expertise in the field of Accounting, Auditing & Assurance, Taxation, Mergers & Acquisitions, Management Consultancy and Company Formation services.
            </p>
            <Link to="/contact/dubai">
              <button className="mt-4 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all transform hover:scale-105 text-white font-semibold rounded-full shadow-md text-sm sm:text-base">
                Get Started →
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
