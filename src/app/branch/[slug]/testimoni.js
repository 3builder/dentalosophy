import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { useRef } from "react";
import StarRatings from "react-star-ratings";

export const Testimonials = ({ data = [] }) => {
  return (
    <div className="mt-14 overflow-x-hidden">
      <div>
        <h2 className="text-3xl text-yellow playfair">
          Dengar Apa Kata Pasien Kami
        </h2>
        <p className="text-gray md:max-w-[80%] mt-2">
          Pengalaman nyata pasien tentang perawatan nyaman, bersih, dan profesional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 pb-10 px-2 mt-8 gap-10 md:px-32">
        {data.map((item, index) => (
          <div
            key={item.id ?? index}
            className="px-6 py-8 bg-white rounded-2xl shadow-[-5px_5px_4px_rgba(100,204,206,1)]"
          >
            <div className="mb-5">
              <StarRatings
                rating={item.rate}
                starRatedColor="#E4C256"
                numberOfStars={5}
                name="rating"
                starDimension="28px"
                starSpacing="3px"
              />
            </div>
            <p className="text-gray italic">
              {item.comment}
            </p>
            <div className="mt-4">
              <h3 className="text-2xl text-gray chivo font-bold">{item.name}</h3>
              {/* <p className="text-lg text-[#64CCCE]">
                {item.profession}
              </p> */}
            </div>
          </div>
        ) ) 
        }
        </div>
      </div>
    </div>
  );
};




