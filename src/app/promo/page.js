"use client";
import promoData from "@utils/static/promoData";
import { motion } from "framer-motion";
import Image from "next/image";

const Promo = () => {
  return (
    <>
      <div className="px-5 container mx-auto max-w-screen-lg">
        <h1 className="text-yellow xs:text-center">PROMO</h1>
        <h2 className="text-4xl text-gray mb-6">
          Get the best dental care with our special promotions
        </h2>

        {promoData.map((item, index) => {
          return (
            <div
              className="grid grid-cols-1 sm:grid-cols-3 text-center sm:text-left my-6 text-gray"
              key={index}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="sm:mr-6 cursor-pointer mb-3 sm:mb-0"
                onClick={() => {
                  console.log("klik promo");
                }}
              >
                <Image src={item.image} alt={item.title || "Promo image"} width={800} height={450} />
              </motion.div>
              <div className="sm:col-span-2">
                <h2
                  className="text-lg hover:cursor-pointer hover:text-emerald transition duration-200 ease-in-out"
                  onClick={() => {
                    console.log("klik promo");
                  }}
                >
                  {item.title}
                </h2>
                <p className="font-light my-2">{item.description}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 py-1 bg-emerald text-white mt-4 rounded cursor-pointer"
                  onClick={() => {
                    console.log("klik promo");
                  }}
                >
                  Lihat promo
                </motion.button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Promo;
