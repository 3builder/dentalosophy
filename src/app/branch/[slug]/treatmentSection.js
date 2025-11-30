import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import treatmentsData from "@utils/static/treatmentsData";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const TreatmentSection = ({
  data = null,
  accordionOpen,
  setAccordionOpen,
}) => {
  return (
    <div className="mt-14">
      <h2 className="text-3xl text-yellow playfair">
        {data.title}
      </h2>
      {/* {data.descriptions.map((description, index) => (
        <p key={index} className="text-gray md:max-w-[80%] mt-2">
          {description}
        </p>
      ))} */}
      <p className="text-gray md:max-w-[80%] mt-2">
        Lebih dari 5 tahun membantu pasien untuk mendapatkan hasil yang optimal dalam menjaga kesehatan gigi.
      </p>      
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_6fr)_minmax(0,_2fr)] items-start gap-x-20 md:pr-8">
        <div className="mt-5">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={accordionOpen}
            onValueChange={setAccordionOpen}
          >
          {treatmentsData.accordionData.map((item, index) => (
            <AccordionItem
              key={item.title ?? index}   // <-- add this
              value={String(index)}
              className={`${
                accordionOpen === String(index) ? "bg-white" : "bg-[#F5F5F5]"
              } border-0 rounded-lg mb-3 shadow-md`}
            >
              <AccordionTrigger
                className={`chivo px-3 !font-bold cursor-pointer ${
                  accordionOpen === String(index) ? "!text-emerald" : "text-gray"
                }`}
              >
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance bg-white rounded-lg pb-0">
                <div className="grid grid-cols-1 chivo text-gray px-3 pb-4 space-y-2">
                  {/* {item.treatments.map((treatment, i) => (
                    <p key={i} className="text-gray">
                      {treatment}
                    </p>
                  ))} */}
                  <p className="text-gray">
                    {item.treatments.join(", ")}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
          </Accordion>
        </div>
        <div className="relative mt-5 w-full max-w-sm mx-auto aspect-square">
          <Carousel
            className="w-full h-full"
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              {(data?.images && data.images.length > 0
                ? data.images
                : [
                    {
                      url: "/images/bsd/bsd2.jpg",
                      alt: "cabang",
                      title: "cabang",
                    },
                  ]
              ).map((img, index) => (
                <CarouselItem
                  key={index}
                  className="relative w-full aspect-square"
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    title={img.title}
                    fill
                    className="object-cover object-center rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};
