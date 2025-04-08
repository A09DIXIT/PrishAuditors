import React from "react";

const OurValues = () => {
  return (
    <section className="py-26 px-6 max-w-7xl mx-auto bg-cover bg-center">
      <div className="bg-opacity-60 p-10 rounded-lg">

        {/* Centered Heading and Paragraph */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#163c4f" }}>
            Our Core Values at PRISH
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            To optimize our vision, we are guided by core values that shape our actions,
            influence our culture, and inspire our purpose every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* List Section */}
          <div className="grid grid-cols-1 gap-6">
            {[ 
              "We Create Insight – Offering clarity that empowers decisions",
              "We Work as a Team – Collaboration is our strength",
              "We Care for Our Clients – Their goals are our priority",
              "We Act with Integrity – Trust is at the heart of what we do",
              "We Invest in Talent – Empowering people to grow and excel",
              "We Deliver Excellence – Committed to perfection in all we do"
            ].map((item, index) => (
              <div
                key={index}
                className="p-5 text-white font-semibold text-center rounded-lg shadow-lg bg-cover bg-center transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://www.stuaham.com/public/images/shape/shape-66.png')",
                  backgroundBlendMode: "overlay",
                  backgroundColor: "#163c4f",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative w-full h-full flex justify-center">
            <div className="absolute w-52 h-52 bg-[#163c4f] rounded-full opacity-20 animate-ping -top-8 -left-8"></div>
            <div className="absolute w-40 h-40 bg-[#1e293b] rounded-full opacity-20 animate-ping -bottom-6 right-6"></div>
            <img
              src="/OurValues.jpg"
              alt="Our Values"
              className="w-full h-full max-w-xl object-cover rounded-2xl shadow-2xl border-4 border-white relative z-10 transform transition-all duration-300 ease-in-out hover:scale-95 hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
