"use client";
import Image from "next/image";
import branchData from "@utils/static/branchData";
import { BranchCard } from "./branchCard";
import { useEffect, useState } from "react";

const Branch = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading, setIsLoading]);
  return (
    <>
      <div className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bsd/bsd2.jpg"
            alt="Background Dentalosophy"
            title="Background Dentalosophy"
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
              title="Dokter gigi Dentalosophy"
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
                <BranchCard data={branch} isLoading={isLoading} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Branch;
