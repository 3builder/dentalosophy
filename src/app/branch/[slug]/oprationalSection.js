import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import Image from "next/image";

export const OprationalSection = ({
  data = null,
  accordionOpen,
  setAccordionOpen,
}) => {
  return (
    <div className="mt-14">
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
  );
};
