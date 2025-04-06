import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import AboutUs from "../assets/components/AboutUs.component/AboutUs.component";

const teamMembers = [
  {
    name: "CA. JOSEPH PHILIP",
    designation: ["BCom, FCA, MBA", "Managing Partner"],
    image: "/Taxation.jpg", // Ensure correct path
    profileLink: "https://www.stuaham.com/our-people/CA.-JOSEPH-PHILIP.html",
    linkedin: "https://www.linkedin.com/in/ca-joseph-philip-bcom-fca-mba-700aa0101/",
    facebook: "https://www.facebook.com/jppooppallil",
  },

  {
    name: "CA. JOSEPH PHILIP",
    designation: ["BCom, FCA, MBA", "Managing Partner"],
    image: "/Taxation.jpg", // Ensure correct path
    profileLink: "https://www.stuaham.com/our-people/CA.-JOSEPH-PHILIP.html",
    linkedin: "https://www.linkedin.com/in/ca-joseph-philip-bcom-fca-mba-700aa0101/",
    facebook: "https://www.facebook.com/jppooppallil",
  },

  {
    name: "CA. JOSEPH PHILIP",
    designation: ["BCom, FCA, MBA", "Managing Partner"],
    image: "/Taxation.jpg", // Ensure correct path
    profileLink: "https://www.stuaham.com/our-people/CA.-JOSEPH-PHILIP.html",
    linkedin: "https://www.linkedin.com/in/ca-joseph-philip-bcom-fca-mba-700aa0101/",
    facebook: "https://www.facebook.com/jppooppallil",
  },

  {
    name: "CA. JOSEPH PHILIP",
    designation: ["BCom, FCA, MBA", "Managing Partner"],
    image: "/Taxation.jpg", // Ensure correct path
    profileLink: "https://www.stuaham.com/our-people/CA.-JOSEPH-PHILIP.html",
    linkedin: "https://www.linkedin.com/in/ca-joseph-philip-bcom-fca-mba-700aa0101/",
    facebook: "https://www.facebook.com/jppooppallil",
  },

  {
    name: "CA. JOSEPH PHILIP",
    designation: ["BCom, FCA, MBA", "Managing Partner"],
    image: "/Taxation.jpg", // Ensure correct path
    profileLink: "https://www.stuaham.com/our-people/CA.-JOSEPH-PHILIP.html",
    linkedin: "https://www.linkedin.com/in/ca-joseph-philip-bcom-fca-mba-700aa0101/",
    facebook: "https://www.facebook.com/jppooppallil",
  },

  {
    name: "CA. AJITH ABRAHAM JACOB",
    designation: ["BSc., FCA, CPA, CMA", "Senior Partner"],
    image: "/Taxation.jpg",
    profileLink: "https://www.stuaham.com/our-people/CA.-AJITH-ABRAHAM-JACOB.html",
    linkedin: "https://www.linkedin.com/in/ca-ajith-abraham-jacob-fca-cpa-cma-74632223/",
    facebook: "https://www.facebook.com/ajith.jacob.777?mibextid=LQQJ4d",
  },
];

const OurPeople = () => {
  return (
    <section className="py-28 px-4 bg-gray-50">
      <AboutUs />
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <a href={member.profileLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
              </a>
              <h4 className="text-xl font-semibold text-gray-900">
                <a
                  href={member.profileLink}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {member.name}
                </a>
              </h4>
              <div className="text-gray-600 mt-2">
                {member.designation.map((title, i) => (
                  <p key={i} className="text-sm">{title}</p>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-2xl hover:scale-110 transition-transform"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 text-2xl hover:scale-110 transition-transform"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
