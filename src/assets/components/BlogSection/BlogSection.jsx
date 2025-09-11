import React from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogs = [
  {
    id: 1,
    title: "Common VAT Compliance Issues And How To Avoid Them",
    image: "/1BLoog.jpg", // ✅ Replace with your blog image path
    date: "March 12, 2025",
    category: "Tax Consultancy",
    link: "/blogs/vat-compliance",
  },
  {
    id: 2,
    title: "Corporate tax planning: Strategies for minimizing your tax liability",
    image: "/1Blo.jpg",
    date: "March 11, 2025",
    category: "Corporate Tax",
    link: "/blogs/corporate-tax-planning",
  },
  {
    id: 3,
    title: "How Can Accounting Firms Help Achieve Financial Recovery For A Struggling Business?",
    image: "/1BloO.jpg",
    date: "March 10, 2025",
    category: "Finance",
    link: "/blogs/financial-recovery",
  },
];

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-lg p-2 rounded-full"
    onClick={onClick}
  >
    <ArrowRight className="w-5 h-5 text-gray-700" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-lg p-2 rounded-full"
    onClick={onClick}
  >
    <ArrowLeft className="w-5 h-5 text-gray-700" />
  </div>
);

const BlogSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Never Miss Our Valuable Insights
          </h2>
          <a
            href="/resources/blogs"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            View All Blogs
          </a>
        </div>

        <Slider {...settings}>
          {blogs.map((blog) => (
            <div key={blog.id} className="px-3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <span className="text-xs text-green-600 font-semibold uppercase">
                    {blog.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 text-gray-800 hover:text-blue-600 transition">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
                  <a
                    href={blog.link}
                    className="inline-block mt-3 text-sm font-medium text-blue-600 hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogSection;
