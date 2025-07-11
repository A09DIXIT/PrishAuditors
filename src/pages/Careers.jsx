import React, { useEffect } from "react";



const Careers = () => {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[450px] overflow-hidden rounded-b-xl">
        <img
          src="/1CAREERS1.jpg" // replace with actual image path
          alt="Career Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50" />

        {/* Upload Button */}
        <div className="absolute top-6 right-6 z-10">
          <button className="px-5 py-2 text-sm font-medium border border-white text-white rounded hover:bg-white hover:text-black transition">
            Upload Your CV
          </button>
        </div>

        {/* Heading */}
        <div className="relative bg-black/40 z-10 h-full flex items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Careers at{" "}
            <span className="bg-blue-950 px-2 py-1 rounded">
              PRISH
            </span>
          </h1>
        </div>
      </div>

      {/* Join Our Team Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Join Our Team</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          We’re always on the lookout for talented, driven individuals to help us shape the future of real estate.
          Whether you're just starting out or bringing years of experience, we offer a collaborative environment,
          growth opportunities, and impactful work.
        </p>

        {/* Job Openings */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Job Card 1 */}
          <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sales Executive</h3>
            <p className="text-gray-600 mb-4">
              Looking for passionate individuals with 1+ year of experience in real estate sales. Excellent communication and client-handling skills are a must.
            </p>
            <button className="text-sm font-medium text-blue-600 hover:underline">View Details</button>
          </div>

          {/* Job Card 2 */}
          <div className="border p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Marketing Specialist</h3>
            <p className="text-gray-600 mb-4">
              We're hiring a digital marketing expert who can manage paid campaigns, SEO, and social media to drive leads and build brand awareness.
            </p>
            <button className="text-sm font-medium text-blue-600 hover:underline">View Details</button>
          </div>

          {/* Add more jobs as needed */}
        </div>
      </div>
    </section>
  );
};

export default Careers;
