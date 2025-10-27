"use client";
import { motion } from "framer-motion";
import ourTreatmentsData from "@utils/static/ourTreatments";
import Image from "next/image";
import { Button } from "@components/ui/button";
import branchData from "@utils/static/branchData";

const Branch = () => {
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
    <>
      <div className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about1.jpeg"
            alt="Background Dentalosophy"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
        </div>

        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20">
          <div className="text-center md:text-left max-w-lg text-white space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Temukan Cabang Dentalosophy Terdekat
            </h1>
            <p className="text-base text-yellow font-bold md:text-lg text-gray-200">
              Klinik gigi modern dengan dokter berpengalaman dan fasilitas
              lengkap di berbagai kota.
            </p>
          </div>
          <div className="hidden md:block w-1/2 relative h-[300px] lg:h-[400px]">
            <Image
              src="/images/treatments.jpeg"
              alt="Dokter gigi Dentalosophy"
              fill
              className="rounded-2xl shadow-lg object-cover object-center"
            />
          </div>
        </div>
      </div>
      <section className="py-16 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl text-yellow md:text-3xl font-semibold mb-4">
            Cabang Dentalosophy yang Telah Hadir
          </h2>
          <p className="text-gray text-base md:text-lg">
            Dentalosophy kini melayani Anda di beberapa kota besar dengan
            standar layanan dan kenyamanan yang sama di setiap cabangnya.
          </p>
        </div>
      </section>
      <section className="pb-20 ">
        <div className="container mx-auto px-6 flex justify-center">
          {/* <div > */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
          >
            {branchData.map((branch, index) => (
              <motion.div
                variants={listItem}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={index}
                className="w-[280px] cursor-pointer rounded-2xl shadow-md overflow-hidden flex flex-col transition hover:shadow-lg"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={branch.image || "/images/about1.jpeg"}
                    alt={branch.location}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-5 bg-white flex flex-col flex-1 justify-between text-center">
                  <div>
                    <h3 className="text-base chivo font-semibold text-gray-800">
                      {branch.location}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm leading-snug">
                      {branch.address}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* </div> */}
        </div>
      </section>
    </>
    // <div className="px-5 container mx-auto max-w-screen-lg">
    //   <motion.div
    //     initial="offscreen"
    //     whileInView="onscreen"
    //     viewport={{ once: true, amount: 0.6 }}
    //   >
    //     <motion.div variants={revealVariants} className="text-center">
    //       <h2 className="text-yellow xs:text-center">OUR TREATMENTS</h2>
    //       <h3 className="text-4xl text-gray">What is your concern today?</h3>
    //       <h4 className="text-gray font-light">
    //         Lebih dari 5 tahun membantu pasien untuk mendapatkan hasil yang
    //         optimal dalam menjaga kesehatan gigi.
    //       </h4>
    //     </motion.div>
    //   </motion.div>

    //   <motion.div
    //     initial="hidden"
    //     animate="visible"
    //     variants={listVariants}
    //     className=" text-gray"
    //   >
    //     {ourTreatmentsData.map((item, index) => (
    //       <motion.div
    //         variants={listItem}
    //         className="md:flex p-4 rounded-sm my-6 items-center justify-center text-center md:text-left"
    //         key={index}
    //       >
    //         <div
    //           className={
    //             index % 2 == 0
    //               ? "font-medium md:mx-4"
    //               : "order-last font-medium md:mx-4"
    //           }
    //         >
    //           <Image
    //             className="w-20 md:w-40 mx-auto md:mx-0 mb-3 md:mb-0"
    //             src={item.image}
    //             alt={item.title || "Treatment image"}
    //             width={160}
    //             height={160}
    //           />
    //         </div>
    //         <div className="md:mx-4 md:w-1/2">
    //           <p className="text-2xl font-bold">{item.title}</p>
    //           <p className="font-light">{item.description}</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </motion.div>
    // </div>
  );
};

export default Branch;
