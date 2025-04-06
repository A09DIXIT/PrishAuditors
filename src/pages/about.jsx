import React from "react";
import AboutUs from "../assets/components/AboutUs.component/AboutUs.component";



export default function About() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://www.stuaham.com/public/images/banner/main-slider-1-1.jpg')" }}>
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <h1 className="relative text-5xl font-bold z-10">About Us</h1>
      </section>
      

      {/* Marquee Section */}
      <div className="relative bg-[#163c4f] py-3 overflow-hidden shadow-lg">
  <div className="absolute inset-0 bg-opacity-30 backdrop-blur-md"></div> 
  <div className="whitespace-nowrap animate-marquee text-white text-xl font-bold tracking-wide uppercase flex items-center">
    <span className="mx-10">🚀 EMPOWERING BUSINESSES</span>
    <span className="mx-10">🌍 TRANSFORMING INDUSTRIES</span>
    <span className="mx-10">💼 DRIVING SUCCESS</span>
  </div>
  </div>
<AboutUs />
      
      {/* Why Choose Us Section */}
      <section
  className="py-16 px-6 max-w-6xl mx-auto bg-cover bg-center"
>
  <div className="bg-opacity-60 p-10 rounded-lg">
  <h2 className="text-4xl font-bold text-center mb-10" style={{ color: "#163c4f" }}>
      Why Choose STUART & HAMLYN
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ul className="space-y-4 text-lg">
        {[
          "Service at your doorstep - Five Offices in UAE",
          "Advanced IT integration into the profession",
          "Listed in major free zones and banks",
          "30+ Years of experience in the profession"
        ].map((item, index) => (
          <li
            key={index}
            className="p-6 text-white font-semibold text-center rounded-lg shadow-lg bg-cover bg-center"
            style={{
              backgroundImage: "url('https://www.stuaham.com/public/images/shape/shape-66.png')",
              backgroundBlendMode: "overlay",
              backgroundColor: "#163c4f",
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <ul className="space-y-4 text-lg">
        {[
          "Personalized attention & timely assistance",
          "Highest quality of Professional Service",
          "Innovative solutions to meet business needs",
          "1500+ happy clients"
        ].map((item, index) => (
          <li
            key={index}
            className="p-6 text-white font-semibold text-center rounded-lg shadow-lg bg-cover bg-center"
            style={{
              backgroundImage: "url('https://www.stuaham.com/public/images/shape/shape-77.png')",
              backgroundBlendMode: "overlay",
              backgroundColor: "#163c4f",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>


    </div>
  );
}
