"use client";
import tipsData from "@utils/static/tipsData";
import { motion } from "framer-motion";
import Link from "next/link";

export const Tips = () => {
  return (
    <div className="grid grid-cols-1 bg-yellow-light text-gray">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto">
        <div className="grid p-5 md:p-12">
          <h1 className="text-xl text-yellow mb-5 leading-normal">TIPS</h1>
          <h1 className="text-4xl sm:text-5xl mb-5">Ask Dentalosophy</h1>
          <p className="font-light mb-6">
            Temukan tips seputar kesehatan gigi dan mulut yang akurat dan dapat
            dipercaya langsung dari dokter gigi kami.
          </p>
          <h1 className="underline mb-3">MOST POPULAR TIPS THIS MONTH</h1>
          {tipsData.map((item, index) => (
            <div className="flex items-center gap-4 mb-5" key={index}>
              <div className="text-4xl">{index + 1}</div>
              <div>
                <h3>{item.title}</h3>
                <h4 className="font-light">{item.subTitle}</h4>
              </div>
            </div>
          ))}
          <Link href="/tips" passHref>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="justify-self-center bg-yellow text-white rounded-full py-3 px-4 md:px-20 mt-6 shadow-lg mb-5"
            >
              Temukan Tips Lainnya Disini
            </motion.button>
          </Link>
        </div>
        <img
          className="hidden md:block"
          src="/images/tips-pict.jpg"
          alt="dentalosophy tips"
        />
      </div>
    </div>
  );
};
