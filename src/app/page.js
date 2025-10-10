"use client";
import Image from "next/image";
import { HeroSection } from "@components/HeroSection";
import { motion } from "framer-motion";
import { AboutSection } from "@components/AboutSection";

export default function Home() {
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
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div variants={revealVariants}>
          <HeroSection />
        </motion.div>
      </motion.div>
      <AboutSection />
    </>
  );
}
