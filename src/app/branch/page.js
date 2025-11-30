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
            src="/images/bsd/bsd4.jpg"
            alt="Background Dentalosophy"
            title="Background Dentalosophy"
            fill
            priority
            className="object-cover object-center blur-[3px]"
          />
          <div className="absolute inset-0 bg-white/40 md:bg-white/30" />
        </div>

        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-center py-20">
          <div className="text-center text-black ">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Semua Cabang Dentalosophy
            </h1>
            <p className="text-base text-black font-bold md:text-lg text-black-200">
              Klinik dan ruangan yang bersih, nyaman dan estetik tersebar di
            lokasi-lokasi strategis. <br />Pilih cabang terdekat untuk konsultasi
            kesehatan gigi Anda.
            </p>
          </div>
        </div>
      </div>
      <section className="py-16 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
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
