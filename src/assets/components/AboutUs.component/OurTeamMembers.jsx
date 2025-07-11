import React from "react";

const teamMembers = [
  {
    name: "Anjali Sharma",
    role: "Senior Accountant",
    image: "/1TransactionAudit.webp",
  },
  {
    name: "Rahul Mehta",
    role: "Auditing Expert",
    image: "/1TransactionAudit.webp",
  },
  {
    name: "Pooja Sinha",
    role: "Compliance Officer",
    image: "/1TransactionAudit.webp",
  },
  {
    name: "Vikram Joshi",
    role: "Tax Consultant",
    image: "/1TransactionAudit.webp",
  },
];

const OurTeamMembers = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
          Meet Our Team Members
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md p-5 text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamMembers;
