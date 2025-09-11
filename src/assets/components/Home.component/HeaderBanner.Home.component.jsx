import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const slides = [
  { image: "/1new-banner.png" },
  { image: "/1banner1.png" },
  { image: "/1.jpg" }
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
    <div className="relative w-full overflow-hidden">
      {/* Slider for Images */}
      <Slider {...settings} className="!overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className="relative !w-full">
            {/* Background Image */}
            <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[65vh]">
              <motion.img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeInOut" }}
              />
            </div>
            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </Slider>

      {/* Text Block */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4 sm:px-8 md:px-16 lg:px-24 z-20">
        <div className="max-w-2xl space-y-4 sm:space-y-6 text-center md:text-left">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-white drop-shadow-xl">
              More Than Just Advice!
            </h1>

            <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium drop-shadow-md leading-relaxed">
              PRISH Accounting and Auditing is an emerging firm of professional
              Chartered Accountants known for excellence in Accounting, Auditing
              & Assurance, Taxation, Mergers & Acquisitions, Management
              Consultancy and Company Formation services.
            </p>

            <Link to="/contact/dubai">
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 
                  hover:from-purple-600 hover:to-blue-500 transition-all transform hover:scale-105 
                  text-white font-semibold rounded-full shadow-lg text-sm sm:text-base"
              >
                Get Started →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
