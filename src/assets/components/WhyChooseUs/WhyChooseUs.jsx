import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ✅ Typing Hook — re-runs when key changes
const useTypingText = (text = "", speed = 30, restartKey = "") => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text || typeof text !== "string") return;

    let index = 0;
    let interval;

    const startTyping = () => {
      interval = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));

        if (index >= text.length) clearInterval(interval);
      }, speed);
    };

    setDisplayedText("");
    startTyping();

    return () => clearInterval(interval);
  }, [text, speed, restartKey]);

  return displayedText;
};

// ✅ One animated item
const TypingListItem = ({ char, rest, restartKey }) => {
  const typedText = useTypingText(rest, 30, restartKey);

  return (
    <motion.li
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="text-sm sm:text-base"
    >
      <span className="text-blue-900 font-bold text-lg sm:text-xl mr-1">{char}</span>
      {typedText}
    </motion.li>
  );
};

// ✅ Full section
const WhyChooseUs = () => {
  const [restartKey, setRestartKey] = useState(Date.now());

  const items = [
    { char: "P", rest: "erfection beyond imagination" },
    { char: "R", rest: "eliability and Consistency in delivering our promises" },
    { char: "I", rest: "nnovative Solutions to meet business needs" },
    { char: "S", rest: "olution Driven Approach to your business challenges" },
    { char: "H", rest: "ighly qualified and experienced professionals" },
  ];

  const handleMouseEnter = () => {
    setRestartKey(Date.now()); // Update key to trigger retyping
  };

  return (
    <section
      className="bg-white mt-0 mb-10 py-10 px-4 sm:px-6"
      onMouseEnter={handleMouseEnter}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse gap-10 md:gap-16 items-center">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src="/1WCU.jpg"
            alt="Why Choose PRISH"
            className="w-full h-auto rounded-xl shadow-lg object-cover max-h-[300px] sm:max-h-[400px]"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4 uppercase text-center md:text-left">
            WHY CHOOSE PRISH?
          </h2>

          <p className="text-gray-700 mb-2 leading-relaxed text-sm sm:text-base">
            Are you seeking financial guidance that goes beyond mere numbers? Look no further than
            PRISH Accounting and Auditing.
          </p>
          <p className="text-gray-700 mb-2 leading-relaxed text-sm sm:text-base">
            We understand that selecting the right Chartered Accountants is crucial for the success
            and prosperity of your business.
          </p>
          <p className="text-gray-700 mb-3 leading-relaxed text-sm sm:text-base">
            Here's why choosing PRISH can be the best decision for you:
          </p>

          {/* Typing items */}
          <ul className="text-gray-800 space-y-2">
            {items.map(({ char, rest }, index) => (
              <TypingListItem
                key={index}
                char={char}
                rest={rest}
                restartKey={restartKey + index} // unique key per line
              />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
