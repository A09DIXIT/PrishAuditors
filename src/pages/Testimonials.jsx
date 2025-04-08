import React from "react";
import CustomerReviews from "../assets/components/CustomerReviews.component/CustomerReviews.component";

const Testimonials = () => {
  return (
    <div>
      {/* Testimonials Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#163c4f]">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          We are proud to support businesses with confidence, accuracy, and insight.
        </p>

        {/* Customer Reviews Component */}
        <CustomerReviews />
      </section>
    </div>
  );
};

export default Testimonials;
