"use client";
import { motion } from "framer-motion";
import ourTreatmentsData from "@utils/static/ourTreatments";
import Image from "next/image";

const OurTreatments = () => {
  const revealVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
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
    <div className="px-5 container mx-auto max-w-screen-lg">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.div variants={revealVariants} className="text-center">
          <h2 className="text-yellow xs:text-center">OUR TREATMENTS</h2>
          <h3 className="text-4xl text-gray">What is your concern today?</h3>
          <h4 className="text-gray font-light">
            Lebih dari 5 tahun membantu pasien untuk mendapatkan hasil yang
            optimal dalam menjaga kesehatan gigi.
          </h4>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={listVariants}
        className=" text-gray"
      >
        {ourTreatmentsData.map((item, index) => (
          <motion.div
            variants={listItem}
            className="md:flex p-4 rounded-sm my-6 items-center justify-center text-center md:text-left"
            key={index}
          >
            <div
              className={
                index % 2 == 0
                  ? "font-medium md:mx-4"
                  : "order-last font-medium md:mx-4"
              }
            >
              <Image
                className="w-20 md:w-40 mx-auto md:mx-0 mb-3 md:mb-0"
                src={item.image}
                alt={item.title || "Treatment image"}
                width={160}
                height={160}
              />
            </div>
            <div className="md:mx-4 md:w-1/2">
              <p className="text-2xl font-bold">{item.title}</p>
              <p className="font-light">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurTreatments;
