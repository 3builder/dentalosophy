import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import Image from "next/image";

export const TreatmentSection = ({
  data = null,
  accordionOpen,
  setAccordionOpen,
}) => {
  return (
    <div className="mt-14">
      <h2 className="text-3xl text-yellow playfair">
        Perawatan Gigi dari Masalah ke Solusi
      </h2>
      <p className="text-gray md:max-w-[80%] mt-2">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_6fr)_minmax(0,_2fr)] items-start gap-x-20 md:pr-8">
        <div className="mt-5">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="1"
            onValueChange={setAccordionOpen}
          >
            <AccordionItem
              value="1"
              className={`${
                accordionOpen === "1" ? "bg-white" : "bg-[#F5F5F5]"
              } border-0 rounded-lg mb-3 shadow-md`}
            >
              <AccordionTrigger
                className={`chivo px-3 !font-bold cursor-pointer ${
                  accordionOpen === "1" ? "!text-emerald" : "text-gray"
                }`}
              >
                Perawatan Estetik
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance bg-white rounded-lg pb-0">
                <div className="grid grid-cols-2 chivo text-gray px-3 pb-4 space-y-2">
                  <p className="text-gray">
                    Teeth Whitening / Dental Bleaching, Veneers, and Gum
                    Bleaching (Memutihkan gigi), Veneer, Gum Bleaching
                    (Mencerahkan warna gusi)
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="2"
              className={`${
                accordionOpen === "2" ? "bg-white" : "bg-[#F5F5F5]"
              } border-0 rounded-lg mb-3 shadow-md`}
            >
              <AccordionTrigger
                className={`chivo px-3 !font-bold cursor-pointer ${
                  accordionOpen === "2" ? "!text-emerald" : "text-gray"
                }`}
              >
                Perawatan Gigi Tiruan
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance bg-white rounded-lg pb-0">
                <div className="grid grid-cols-2 chivo text-gray px-3 pb-4">
                  <p className="text-gray">
                    Teeth Whitening / Dental Bleaching, Veneers, and Gum
                    Bleaching (Memutihkan gigi), Veneer, Gum Bleaching
                    (Mencerahkan warna gusi)
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="3"
              className={`${
                accordionOpen === "3" ? "bg-white" : "bg-[#F5F5F5]"
              } border-0 rounded-lg mb-3 shadow-md`}
            >
              <AccordionTrigger
                className={`chivo px-3 !font-bold cursor-pointer ${
                  accordionOpen === "3" ? "!text-emerald" : "text-gray"
                }`}
              >
                Penambalan Gigi dan Perawatan Saluran Akar
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance bg-white rounded-lg pb-0">
                <div className="grid grid-cols-2 chivo text-gray px-3 pb-4">
                  <p className="text-gray">
                    Teeth Whitening / Dental Bleaching, Veneers, and Gum
                    Bleaching (Memutihkan gigi), Veneer, Gum Bleaching
                    (Mencerahkan warna gusi)
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="4"
              className={`${
                accordionOpen === "4" ? "bg-white" : "bg-[#F5F5F5]"
              } border-0 rounded-lg mb-3 shadow-md`}
            >
              <AccordionTrigger
                className={`chivo px-3 !font-bold cursor-pointer ${
                  accordionOpen === "4" ? "!text-emerald" : "text-gray"
                }`}
              >
                Perawatan Gigi Anak
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance bg-white rounded-lg pb-0">
                <div className="grid grid-cols-2 chivo text-gray px-3 pb-4">
                  <p className="text-gray">
                    Teeth Whitening / Dental Bleaching, Veneers, and Gum
                    Bleaching (Memutihkan gigi), Veneer, Gum Bleaching
                    (Mencerahkan warna gusi)
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
