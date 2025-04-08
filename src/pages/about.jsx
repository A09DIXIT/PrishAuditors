import React from "react";
import AboutUs from "../assets/components/AboutUs.component/AboutUs.component";

export default function About() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.stuaham.com/public/images/banner/main-slider-1-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <h1 className="relative text-5xl font-bold z-10">About Us</h1>
      </section>

      {/* Marquee Section */}
      <div className="relative bg-[#163c4f] py-3 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-opacity-30 backdrop-blur-md"></div>
        <div className="whitespace-nowrap animate-marquee text-white text-xl font-bold tracking-wide uppercase flex items-center">
          <span className="mx-10">🚀 Empowering Businesses</span>
          <span className="mx-10">🌍 Transforming Industries</span>
          <span className="mx-10">💼 Driving Success</span>
        </div>
      </div>

      {/* About Us Content */}
      <AboutUs />

      {/* Why Choose PRISH Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto bg-cover bg-center">
        <div className="bg-opacity-60 p-10 rounded-lg">
          <h2
            className="text-4xl font-bold text-center mb-10"
            style={{ color: "#163c4f" }}
          >
            Why Choose PRISH?
          </h2>

          <p className="text-center text-lg mb-10 max-w-3xl mx-auto text-gray-700">
            Are you seeking financial guidance that goes beyond mere numbers?
            Look no further than PRISH Accounting and Auditing. We understand
            that selecting the right Chartered Accountants is crucial for the
            success and prosperity of your business. Here's why choosing PRISH
            can be the best decision for you:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              [
                "Perfection beyond imagination – Every detail matters",
                "Reliable & consistent – We deliver what we promise",
                "Innovative solutions – Tailored to your business needs",
                "Solution-driven approach – We solve, not just serve",
              ],
              [
                "Expert team – Highly qualified & experienced",
                "Ethical practices – Transparent and trustworthy service",
                "Client-first support – Communication that builds trust",
                "Complete financial care – All services under one roof",
              ],
            ].map((column, i) => (
              <ul key={i} className="space-y-4 text-lg">
                {column.map((item, index) => (
                  <li
                    key={index}
                    className="p-6 text-white font-semibold text-center rounded-lg shadow-lg bg-cover bg-center transition-transform duration-300 hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://www.stuaham.com/public/images/shape/shape-66.png')",
                      backgroundBlendMode: "overlay",
                      backgroundColor: "#163c4f",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
