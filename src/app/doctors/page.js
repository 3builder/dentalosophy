"use client";
import { motion } from "framer-motion";
import doctorsData from "@utils/static/doctorsData";
import Link from "next/link";

const Doctors = () => {
  const listVariants = {
    visible: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      transition: {
        when: "afterChildren",
      },
    },
  };
  const listItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  };
  return (
    <div className="px-5 container mx-auto grid mb-20">
      <h1 className="text-4xl text-gray mb-6 text-center">Our Doctors</h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={listVariants}
        className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {doctorsData.map((item, index) => (
          <motion.div
            variants={listItem}
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-center justify-self-center hover:cursor-pointer"
            onClick={() => {
              console.log("klik dokter");
            }}
          >
            <div className="mb-3 rounded-full overflow-hidden">
              <img
                className="mx-auto max-h-[287.23px] w-full"
                src={item.image}
              />
            </div>

            <h3 className="mb-1 font-semibold">{item.name}</h3>
            <h3 className="mb-1 text-gray font-light">{item.title}</h3>
            <h3 className="mb-1 text-gray font-light">{item.location}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Doctors;
