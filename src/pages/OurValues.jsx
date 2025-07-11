import React, { useEffect } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const VisionMissionValues = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: "🎯",
      title: "INTEGRITY",
      description:
        "We uphold the highest standards of integrity, honesty, and accountability in all our actions.",
    },
    {
      icon: "🤝",
      title: "CLIENT COMMITMENT",
      description:
        "We build lasting relationships by putting our clients’ success and satisfaction first.",
    },
    {
      icon: "📈",
      title: "EXCELLENCE",
      description:
        "We strive for excellence through continuous improvement, innovation, and attention to detail.",
    },
    {
      icon: "💡",
      title: "INSIGHT",
      description:
        "We turn data into insights to empower smarter, faster, and more confident decisions.",
    },
    {
      icon: "👥",
      title: "TEAMWORK",
      description:
        "We value collaboration and believe the best results come from working together.",
    },
    {
      icon: "🚀",
      title: "GROWTH & LEARNING",
      description:
        "We invest in talent, embrace learning, and foster an environment of growth and curiosity.",
    },
  ];

  return (
    <section className="bg-[#e6f0fb] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-[#163c4f]"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          VISION & MISSION
        </motion.h2>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div
            className="bg-white rounded-xl shadow-md border-t-4 border-[#163c4f] p-6"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-[#163c4f] text-xl font-bold flex items-center gap-2 mb-2">
              🚀 OUR MISSION
            </h3>
            <p className="text-gray-700 text-sm">
              Our mission is to empower businesses with insightful financial
              solutions, guiding them towards sustainable growth, informed
              decision-making, and financial stability. Driven by a passion for
              financial empowerment, our mission is to partner with businesses
              of all sizes, providing them with the tools, expertise, and
              support they need to achieve their financial goals and
              aspirations.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-md border-t-4 border-[#163c4f] p-6"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-[#163c4f] text-xl font-bold flex items-center gap-2 mb-2">
              💡 OUR VISION
            </h3>
            <p className="text-gray-700 text-sm">
              Our vision is to lead the evolution of the financial services
              industry, setting new standards of excellence in transparency,
              integrity, and client satisfaction, while championing financial
              literacy and empowerment on a global scale. We aim to be the
              premier partner for businesses worldwide, revolutionizing the way
              they approach finance.
            </p>
          </motion.div>
        </div>

        {/* Vision Image */}
        <motion.div
          className="flex justify-center mb-24"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/11OurValues.jpg"
            alt="Vision"
            className="rounded-xl shadow-xl border-4 border-white w-full max-w-4xl object-cover h-[350px]"
          />
        </motion.div>

        {/* Our Values Section */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-[#163c4f]"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          OUR VALUES
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#163c4f] hover:shadow-lg transition duration-300"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-[#163c4f] text-xl font-bold flex items-center gap-2 mb-2">
                <span className="text-2xl">{item.icon}</span> {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Image */}
        <motion.div
          className="flex justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/1Our-Values.png"
            alt="Our Values"
            className="rounded-xl shadow-xl border-4 border-white w-full max-w-4xl object-cover h-[350px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
