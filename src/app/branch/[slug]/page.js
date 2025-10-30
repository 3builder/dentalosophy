"use client";
import { Spinner } from "@components/ui/spinner";
import { Button } from "@components/ui/button";
import { useState, useEffect, use } from "react";
import branchData from "@utils/static/branchData";
import { ContactCard } from "./contactCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

const BranchDetail = ({ params }) => {
  const { slug } = use(params);
  const branch = branchData.find(
    (item) => item.slug.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const [isFetching, setIsFetching] = useState(true);
  const [accordionOpen, setAccordionOpen] = useState("");

  useEffect(() => {
    if (isFetching) {
      setTimeout(() => {
        setIsFetching(false);
      }, 2000);
    }
  }, [isFetching, setIsFetching]);

  useEffect(() => {
    const prevBg = document.body.style.background;
    document.body.style.background = "#F3FFFB";
    return () => {
      document.body.style.background = prevBg || "";
    };
  }, []);

  if (isFetching) {
    return (
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center">
        <Spinner className="size-10 text-emerald" />
        <p className="mt-3 text-gray">Loading...</p>
      </div>
    );
  }

  return (
    <div className="px-5 container mx-auto grid mb-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl text-emerald mb-4">
          Dentalosophy {branch.location}
        </h1>
        <p className="text-gray">
          Perawatan gigi berkualitas dengan{" "}
          <span className="italic">personalized approach</span> di jantung{" "}
          {branch.city}
        </p>
      </div>
      <ContactCard address={branch.address} phone={branch.phone} />
      <div>
        <div className="relative mt-5 w-full h-[300] md:h-[480px]">
          <Image
            src={"/images/bsd/bsd2.jpg"}
            alt={"cabang"}
            fill
            className="object-cover object-center rounded-xl"
          />
        </div>
        <Link
          href={"/branch"}
          className="text-base text-emerald flex mt-5 chivon font-bold hover:underline"
        >
          <ArrowLeft className="mr-1" />
          Kembali ke semua cabang
        </Link>
      </div>
      <div className="mt-10">
        <h2 className="text-4xl text-[#5A5A5A] playfair">Jam Operasional</h2>
        <hr className="mt-3 border-1 border-gray opacity-40" />
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_6fr)_minmax(0,_2fr)] items-start gap-x-20 md:pr-8">
          <div className="mt-5">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="weekday"
              onValueChange={setAccordionOpen}
            >
              <AccordionItem
                value="weekday"
                className="border-0 bg-[#FFFDF4] rounded-lg mb-3 shadow-md"
              >
                <AccordionTrigger
                  className={`chivo px-3 !font-bold cursor-pointer ${
                    accordionOpen === "weekday" ? "!text-emerald" : "text-gray"
                  }`}
                >
                  SENIN - JUMAT
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance bg-white rounded-lg pb-0">
                  <div className="grid grid-cols-2 chivo text-gray p-4 space-y-2">
                    <p>SENIN</p>
                    <p className="font-bold text-black justify-self-end">
                      09:00 - 19:00
                    </p>
                    <p>SELASA</p>
                    <p className="font-bold text-black justify-self-end">
                      09:00 - 19:00
                    </p>
                    <p>RABU</p>
                    <p className="font-bold text-black justify-self-end">
                      09:00 - 19:00
                    </p>
                    <p>KAMIS</p>
                    <p className="font-bold text-black justify-self-end">
                      09:00 - 19:00
                    </p>
                    <p>JUMAT</p>
                    <p className="font-bold text-black justify-self-end">
                      09:00 - 19:00
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="sabtu"
                className="border-0 bg-[#FFFDF4] rounded-lg mb-3 shadow-md"
              >
                <AccordionTrigger
                  className={`chivo px-3 !font-bold cursor-pointer ${
                    accordionOpen === "sabtu" ? "!text-emerald" : "text-gray"
                  }`}
                >
                  SABTU
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance bg-white rounded-lg pb-0">
                  <div className="grid grid-cols-2 chivo text-gray p-4">
                    <p>SABTU</p>
                    <p className="font-bold text-black justify-self-end">
                      09:00 - 14:00
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="minggu"
                className="border-0 bg-[#FFFDF4] rounded-lg mb-3 shadow-md"
              >
                <AccordionTrigger
                  className={`chivo px-3 !font-bold cursor-pointer ${
                    accordionOpen === "minggu" ? "!text-emerald" : "text-gray"
                  }`}
                >
                  MINGGU
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance bg-white rounded-lg pb-0">
                  <div className="grid grid-cols-2 chivo text-gray p-4">
                    <p>MINGGU</p>
                    <p className="font-bold text-black justify-self-end">
                      09:00 - 14:00
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="relative mt-5 w-full aspect-square">
            <Image
              src={"/images/bsd/bsd2.jpg"}
              alt={"cabang"}
              fill
              className="object-cover object-center rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchDetail;
