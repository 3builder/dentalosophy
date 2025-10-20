"use client";
import doctorsData from "@utils/static/doctorsData";
import { motion } from "framer-motion";
import Link from "next/link";

export const DoctorsSection = () => {
  return (
    <div className="grid place-items-center bg-white p-4 py-10 text-center text-gray">
      <p className="text-yellow text-center">DOCTORS</p>
      <p className="text-4xl text-gray text-center mb-3">
        Our dedicated team you can always count on!
      </p>
      <p className="text-gray font-light max-w-3xl">
        Konsultasikan kesehatan gigi kamu ke dokter gigi umum dan dokter gigi
        spesialis berpengalaman yang profesional dari lulusan universitas
        terbaik di Indonesia.
      </p>
      <div className="mb-5 lg:mb-0 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-10">
        {doctorsData.slice(0, 4).map((item, index) => (
          <div key={index} className="text-center ">
            <div className="mb-3 bg-yellow-light rounded-full overflow-hidden">
              <img
                className="mx-auto"
                src={item.image}
                width="225"
                alt="dentalosophy dentist"
              />
            </div>
            <p className="mb-1">{item.name}</p>
            <p className="mb-1 text-gray font-light text-center">
              {item.title}
            </p>
            <p className="mb-1 text-gray font-light text-center">
              {item.location}
            </p>
          </div>
        ))}
      </div>
      <Link href="/doctors" passHref className="mt-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex shadow-lg bg-yellow text-white transition-opacity duration-300 ease py-3 px-10 mx-auto rounded-full items-center"
        >
          <span className="mr-2">Lihat semua dokter </span>
        </motion.button>
      </Link>
    </div>
  );
};
