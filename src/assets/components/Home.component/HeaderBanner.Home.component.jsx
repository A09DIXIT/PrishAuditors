import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { 
    image: "/banner1.jpg", 
    title: "Empower Your Business with Next-Level Solutions", 
    description: "Innovative strategies to drive your business forward." 
  },
  { 
    image: "/banner2.jpg", 
    title: "Seamless Financial Planning", 
    description: "Achieve financial success with expert guidance." 
  },
  { 
    image: "/banner3.jpg", 
    title: "Transform Your Business with Technology", 
    description: "Leverage cutting-edge tech to optimize your workflow." 
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
    <div className="relative w-full h-[85vh] md:h-[90vh] lg:h-[95vh] overflow-hidden">
      {/* Dynamic Text & Button Section */}
      <div className="absolute inset-y-0 left-10 md:left-20 lg:left-28 flex items-center z-10">
        <div className="max-w-2xl space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
              className="bg-black/20 p-6 rounded-lg"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg text-gray-200">{slides[currentSlide].description}</p>
            </motion.div>
          </AnimatePresence>

          <button className="px-5 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-transform duration-300 transform hover:scale-105 text-white font-semibold rounded-full shadow-lg text-lg">
            Get Started →
          </button>
          
        </div>
      </div>

      {/* Image Slider in Background */}
      <div className="absolute inset-0 w-full h-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full">
              <img 
                src={slide.image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}