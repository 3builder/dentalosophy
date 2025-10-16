"use client";
import { motion } from "framer-motion";
import { DetailDoctorModal } from "./detailDoctor";

export const DoctorContent = ({ data = [] }) => {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
    >
      {data.map((item, index) => (
        <DetailDoctorModal key={index} data={item} />
      ))}
    </motion.div>
  );
};
