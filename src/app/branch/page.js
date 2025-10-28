"use client";
import { motion } from "framer-motion";
import ourTreatmentsData from "@utils/static/ourTreatments";
import Image from "next/image";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
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
            src="/images/bsd/bsd2.jpg"
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
              src="/images/senopati/senopati6-2.jpg"
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
            Semua Cabang Dentalosophy
          </h2>
          <p className="text-gray text-base md:text-lg">
            Klinik dan ruangan yang bersih, nyaman dan estetik tersebar di
            lokasi-lokasi strategis. Pilih cabang terdekat untuk konsultasi
            kesehatan gigi Anda.
          </p>
        </div>
      </section>
      <section className="pb-20 ">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-stretch sm:justify-items-center items-stretch">
            {branchData.map((branch, index) => (
              <div
                key={index}
                className="w-full sm:w-[280px] cursor-pointer rounded-2xl shadow-md overflow-hidden flex flex-col bg-white transition hover:shadow-lg h-full"
              >
                <div className="relative w-full h-48 overflow-hidden group">
                  <Image
                    src={branch.cover || "/images/about1.jpeg"}
                    alt={branch.location}
                    fill
                    className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-100 group-hover:object-[50%_40%] scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                  {branch.city && (
                    <Badge className="absolute top-2 right-2 font-bold bg-emerald text-black chivo shadow-md">
                      {branch.city}
                    </Badge>
                  )}
                </div>
                <div className="p-5 text-center flex flex-col justify-between flex-1">
                  <div className="text-start flex-1">
                    <h3 className="text-[20px] mb-4 chivo font-semibold text-gray">
                      {branch.location}
                    </h3>

                    <div className="mb-3">
                      <p className="text-gray chivo font-semibold">Alamat</p>
                      <p className="text-gray-400 chivo text-sm leading-snug">
                        {branch.address}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray chivo font-semibold">Telepon</p>
                      <p className="text-gray-400 chivo text-sm leading-snug">
                        {branch.phone}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <Button
                      variant="outline"
                      className="w-full border-emerald text-emerald hover:bg-emerald hover:text-white font-bold cursor-pointer chivo"
                    >
                      Lihat Detail
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Branch;
