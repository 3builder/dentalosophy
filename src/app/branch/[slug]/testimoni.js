import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { useRef } from "react";

export const Testimonials = ({ data = [] }) => {
  return (
    <div className="mt-14 overflow-x-hidden">
      <div>
        <h2 className="text-4xl text-[#5A5A5A] playfair">Testimonial Pasien</h2>
        <hr className="mt-3 border-1 border-gray opacity-40" />
        <div className="">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full md:px-18"
          >
            <CarouselContent className="mt-10 items-stretch pb-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[80%] md:basis-[45%] lg:basis-[30%]"
                >
                  <div className="shadow-lg/20 rounded-xl py-8 px-14 bg-[#FFFDF4]">
                    <p className="text-gray">
                      “Comfortable place, strategic location di Senopati”
                    </p>
                    <h5 className="text-lg text-gray flex items-center font-bold mt-4">
                      -Jane Doe
                    </h5>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute cursor-pointer left-1 top-1/2 -translate-y-1/2 z-10 bg-[#FFFDF4] shadow-md hover:shadow-lg transition hidden md:flex " />
            <CarouselNext className="absolute cursor-pointer right-1 top-1/2 -translate-y-1/2 z-10 bg-[#FFFDF4] shadow-md hover:shadow-lg transition hidden md:flex " />
          </Carousel>
        </div>
      </div>
    </div>
  );
};
