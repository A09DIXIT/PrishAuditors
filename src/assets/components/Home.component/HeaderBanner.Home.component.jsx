import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "/banner1.jpg",
    title: "Empower Your Business with Next-Level Solutions",
    description: "Innovative strategies to drive your business forward.",
  },
  {
    image: "/banner2.jpg",
    title: "Seamless Financial Planning",
    description: "Achieve financial success with expert guidance.",
  },
  {
    image: "/banner3.jpg",
    title: "Transform Your Business with Technology",
    description: "Leverage cutting-edge tech to optimize your workflow.",
  },
];

export default function HeaderBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[95vh] overflow-hidden">
      {/* Dynamic Text & Button Section */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4 sm:px-8 md:px-16 lg:px-24 z-10">
        <div className="max-w-3xl space-y-4 sm:space-y-6 text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
              className="bg-black/40 p-4 sm:p-6 md:p-8 rounded-xl"
            >
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight text-white drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center md:justify-start">
          <Link to="/contact/dubai">
  <button className="mt-3 px-5 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 text-white font-semibold rounded-full shadow-md text-sm sm:text-base md:text-lg">
    Get Started →
  </button>
</Link>
          </div>
        </div>
      </div>

      {/* Image Slider Background */}
      <div className="absolute inset-0 w-full h-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
