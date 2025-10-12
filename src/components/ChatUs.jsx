"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const ChatUs = () => {
  return (
    <div className="fixed bottom-6 right-6 text-gray">
      <a href="https://linktr.ee/DentalosophyContact">
        <p className="bg-yellow-light rounded-full p-1 py-0 mb-1 hidden md:block">
          Chat us!
        </p>
        <motion.div
          className="text-center mx-auto rounded-full z-50 shadow-md w-12 h-12"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src="/images/WA-logo.png"
            width="50"
            height="50"
            alt="WhatsApp Dentalosophy"
          />
        </motion.div>
      </a>
    </div>
  );
};
