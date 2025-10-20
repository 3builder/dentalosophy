"use client";

import { motion } from "framer-motion";
import { Link as LinkScroll } from "react-scroll";

export const HeroSection = () => {
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
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div variants={revealVariants}>
        <div className="px-5 container mx-auto grid md:space-x-16 mb-20">
          <div className="grid auto-rows-max my-auto">
            <p className="text-5xl text-emerald font-rufina leading-snug mb-3">
              Get the beautiful and healthy smile you've always wanted.
            </p>
            <p className="text-3xl text-yellow mb-10">
              with affordable price!
            </p>
            <p className="text-gray font-light mb-6">
              Lebih dari 5 tahun membantu pasien untuk mendapatkan hasil yang
              optimal dalam menjaga kesehatan gigi dan membentuk senyum yang
              sempurna.
            </p>
            <LinkScroll
              className="justify-self-center md:justify-self-start"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-3 px-4 md:px-20 bg-yellow text-yellow-light text-center rounded-full shadow-lg"
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </LinkScroll>
          </div>

          <div className="col-start-2 hidden md:block">
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <img
                className="rounded-tr-full rounded-br-full rounded-bl-full"
                src="/images/pict_1.jpeg"
                alt="dentalosophy hero"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
