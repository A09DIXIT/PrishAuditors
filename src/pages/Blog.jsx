import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Blog.css';

const blogPosts = [
  {
    title: "Understanding Tax Filing for Businesses: A Complete Guide",
    image: "/dubai1.jpg",
    link: "#",
    excerpt: `Learn the essential steps in filing taxes for businesses, including common mistakes to avoid and how to ensure compliance with tax laws.`,
  },
  {
    title: "Top Accounting Practices for Small Businesses in 2025",
    image: "/dubai1.jpg",
    link: "#",
    excerpt: `Discover the best accounting practices for small businesses to help with growth, efficiency, and long-term success in the modern business environment.`,
  },
  {
    title: "How to Maximize Deductions During Tax Season",
    image: "/dubai1.jpg",
    link: "#",
    excerpt: `Maximizing deductions can significantly lower your tax liability. This post breaks down strategies and tips for tax season that can benefit individuals and businesses alike.`,
  },
];

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => <ul className="custom-dots mt-4">{dots}</ul>,
    customPaging: i => <div className="dot"></div>,
  };


  
    //Scroll on top
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Blog Slider Section */}
        <Slider {...settings}>
          {blogPosts.map((post, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-10 p-4 md:p-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full md:w-1/2 rounded-[40px] shadow-lg object-cover"
                />
                <div className="w-full md:w-1/2 pt-4 md:pt-0">
                  <h2 className="text-3xl font-bold text-black mb-4">{post.title}</h2>
                  <p className="text-gray-700 text-base leading-relaxed mb-6 pr-2">
                    {post.excerpt}{' '}
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 font-medium hover:underline"
                    >
                      Read more
                    </a>
                  </p>

                  {/* Search Box */}
                  <form action="#" method="get" className="relative w-full max-w-md">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search Blog"
                      className="w-full pl-6 pr-32 py-3 rounded-full bg-[#f5f5f5] text-gray-700 border-none shadow-md placeholder-gray-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="absolute top-1 right-1 bottom-1 px-6 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Recent Posts Section */}
        {/* Recent Posts Section */}
<div className="mt-20">
  <h2 className="text-3xl font-bold text-center text-black mb-12">Recent Posts</h2>
  <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        date: "18 Apr 2025",
        author: "Admin",
        title: "Why Accurate Bookkeeping Is Crucial for Your Business",
        excerpt:
          "Proper bookkeeping is essential for business success. It ensures accurate financial reporting, simplifies tax filing, and helps you make informed business decisions...",
        image: "/dubai5.jpg",
        link: "#",
      },
      {
        date: "12 Apr 2025",
        author: "Admin",
        title: "Top Tax-Saving Strategies for Small Businesses in 2025",
        excerpt:
          "Discover the most effective tax-saving methods including expense tracking, choosing the right business structure, and making the most of deductions and credits...",
        image: "/dubai4.jpg",
        link: "#",
      },
      {
        date: "05 Apr 2025",
        author: "Admin",
        title: "The Role of Internal Audits in Strengthening Financial Health",
        excerpt:
          "Internal audits help detect fraud, improve internal controls, and ensure compliance. Learn how regular audits contribute to long-term financial stability...",
        image: "/dubai5.jpg",
        link: "#",
      },
    ].map((post, idx) => (
      <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>📅 {post.date}</span>
            <span>👤 {post.author}</span>
          </div>
          <h3 className="text-lg font-semibold text-black mb-2">{post.title}</h3>
          <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
          <a href={post.link} className="text-red-600 text-sm font-medium hover:underline">
            Read More
          </a>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Concurrent Audit Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mt-20 p-4 md:p-6">
          <div className="w-full md:w-1/2">
            <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">Audit Services</p>
            <h2 className="text-3xl font-bold text-black mb-4">
              Concurrent Audit: Enhancing Financial Integrity and Risk Management
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Concurrent audit is a systematic examination of financial transactions on a continuous basis to ensure accuracy,
              compliance, and timely detection of irregularities. At Prish Auditors, we help organizations strengthen internal
              controls, minimize risks, and improve financial transparency through meticulous concurrent auditing practices.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Our audit professionals assess day-to-day operations, identify gaps, and suggest corrective actions that align
              with your business objectives and regulatory standards.
              <a
                href="https://www.prishauditors.com/concurrent-audit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-medium hover:underline ml-1"
              >
                Read more.
              </a>
            </p>
          </div>
          <img
            src="/dubai3.jpg"
            alt="Concurrent Audit"
            className="w-full md:w-1/2 max-h-[400px] rounded-[30px] shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
