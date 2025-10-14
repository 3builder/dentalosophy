"use client";
import testimonialsData from "@utils/static/testimonialsData";
import { motion } from "framer-motion";
export const Testimonials = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 bg-white p-4 px-16 sm:px-20 pb-20 text-gray">
      <h1 className="text-yellow text-center">TESTIMONIALS</h1>
      <h2 className="text-4xl text-gray  text-center">
        The smiles from our happy patients
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-8"
      >
        {testimonialsData.map((item, index) => (
          <motion.div
            key={index}
            variants={listItem}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-center justify-self-center hover:cursor-pointer"
          >
            <div className="text-center p-3 bg-gray-lightest shadow-md -rotate-3">
              <img src={item.image} alt={item.name} />
              <div className="my-3">@{item.name}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
