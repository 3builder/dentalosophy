"use client";

import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import treatmentsDataHome from "@utils/static/treatmentsDataHome";
import { CircleCheck } from "lucide-react";

export const TreatmentSection = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 bg-emerald-light py-5">
      <div className="w-4/5 justify-self-start lg:w-full">
        <img
          className="rounded-t-full rounded-br-full w-full"
          src="/images/treatments.jpeg"
          alt="dentalosophy treatments"
        />
      </div>
      <div className="mt-10 p-4">
        <div>
          <h1 className="text-yellow xs:text-center">OUR TREATMENTS</h1>
          <h2 className="text-4xl text-gray md:w-4/5 lg:w-4/5">
            What is your concern today?
          </h2>
          <h3 className="text-gray font-light md:w-4/5">
            Lebih dari 5 tahun membantu pasien untuk mendapatkan hasil yang
            optimal dalam menjaga kesehatan gigi.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 sm:justify-items-stretch gap-6 text-gray lg:-ml-32 p-2 mt-10">
          {treatmentsDataHome.slice(0, 3).map((item, index) => (
            <Link href="/our-treatments" key={index} className="" passHref>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white p-4 rounded-lg cursor-pointer mb-3 shadow-xl"
              >
                <h4 className="font-bold chivo mb-2 text-center">
                  {item.title}
                </h4>
                {item.treatments.map((treatment, i) => (
                  <div className="font-light flex items-center" key={i}>
                    <CircleCheck
                      strokeWidth={2}
                      className="text-white fill-gray-500 mr-2 h-5 w-5 flex-shrink-0"
                    />
                    <h5 className="">{treatment}</h5>
                  </div>
                ))}
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:justify-items-stretch gap-6 lg:-ml-32 text-gray p-2">
          {treatmentsDataHome.slice(3, 5).map((item, index) => (
            <Link href="/our-treatments" key={index} passHref>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white p-4 rounded-lg cursor-pointer mb-3 shadow-xl"
              >
                <h4 className="font-bold chivo mb-2 text-center">
                  {item.title}
                </h4>
                {item.treatments.map((treatment, i) => (
                  <div className="font-light flex items-center" key={i}>
                    <CircleCheck
                      strokeWidth={2}
                      className="text-white fill-gray-500 mr-2 h-5 w-5 flex-shrink-0"
                    />
                    <h5 className="">{treatment}</h5>
                  </div>
                ))}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
