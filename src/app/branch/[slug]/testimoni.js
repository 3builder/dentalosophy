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
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 pb-10 px-2 mt-8 gap-10 md:px-32">
          <div className="px-6 py-8 bg-white rounded-2xl shadow-[-5px_5px_4px_rgba(100,204,206,1)]">
            <div className="mb-5">
              <StarRatings
                rating={5}
                starRatedColor="#E4C256"
                numberOfStars={5}
                name="rating"
                starDimension="28px"
                starSpacing="3px"
              />
            </div>
            <p className="text-gray italic">
              “Comfortable place, strategic location in Senopati, and super
              friendly staff and doctors! Treated by Drg. Aqmarina Prallia,
              who&#39;s very friendly and super efficient in working on my
              treatments. Received a thorough explanation as well on how to
              maintain and take care the teeth post treatment. Thanks!”
            </p>
            <div className="mt-4">
              <h3 className="text-2xl text-gray chivo font-bold">Jane Doe</h3>
              <p className="text-lg text-[#64CCCE]">
                Marketing Manager, Jakarta
              </p>
            </div>
          </div>
          <div className="px-6 py-8 bg-white rounded-2xl shadow-[-5px_5px_4px_rgba(100,204,206,1)]">
            <div className="mb-5">
              <StarRatings
                rating={5}
                starRatedColor="#E4C256"
                numberOfStars={5}
                name="rating"
                starDimension="28px"
                starSpacing="3px"
              />
            </div>
            <p className="text-gray italic">
              “Comfortable place, strategic location in Senopati, and super
              friendly staff and doctors! Treated by Drg. Aqmarina Prallia,
              who&#39;s very friendly and super efficient in working on my
              treatments. Received a thorough explanation as well on how to
              maintain and take care the teeth post treatment. Thanks!”
            </p>
            <div className="mt-4">
              <h3 className="text-2xl text-gray chivo font-bold">Jane Doe</h3>
              <p className="text-lg text-[#64CCCE]">
                Marketing Manager, Jakarta
              </p>
            </div>
          </div>
          <div className="px-6 py-8 bg-white rounded-2xl shadow-[-5px_5px_4px_rgba(100,204,206,1)]">
            <div className="mb-5">
              <StarRatings
                rating={5}
                starRatedColor="#E4C256"
                numberOfStars={5}
                name="rating"
                starDimension="28px"
                starSpacing="3px"
              />
            </div>
            <p className="text-gray italic">
              “Comfortable place, strategic location in Senopati, and super
              friendly staff and doctors! Treated by Drg. Aqmarina Prallia,
              who&#39;s very friendly and super efficient in working on my
              treatments. Received a thorough explanation as well on how to
              maintain and take care the teeth post treatment. Thanks!”
            </p>
            <div className="mt-4">
              <h3 className="text-2xl text-gray chivo font-bold">Jane Doe</h3>
              <p className="text-lg text-[#64CCCE]">
                Marketing Manager, Jakarta
              </p>
            </div>
          </div>
          <div className="px-6 py-8 bg-white rounded-2xl shadow-[-5px_5px_4px_rgba(100,204,206,1)]">
            <div className="mb-5">
              <StarRatings
                rating={5}
                starRatedColor="#E4C256"
                numberOfStars={5}
                name="rating"
                starDimension="28px"
                starSpacing="3px"
              />
            </div>
            <p className="text-gray italic">
              “Comfortable place, strategic location in Senopati, and super
              friendly staff and doctors! Treated by Drg. Aqmarina Prallia,
              who&#39;s very friendly and super efficient in working on my
              treatments. Received a thorough explanation as well on how to
              maintain and take care the teeth post treatment. Thanks!”
            </p>
            <div className="mt-4">
              <h3 className="text-2xl text-gray chivo font-bold">Jane Doe</h3>
              <p className="text-lg text-[#64CCCE]">
                Marketing Manager, Jakarta
              </p>
            </div>
          </div>
          <div className="px-6 py-8 bg-white rounded-2xl shadow-[-5px_5px_4px_rgba(100,204,206,1)]">
            <div className="mb-5">
              <StarRatings
                rating={5}
                starRatedColor="#E4C256"
                numberOfStars={5}
                name="rating"
                starDimension="28px"
                starSpacing="3px"
              />
            </div>
            <p className="text-gray italic">
              “Comfortable place, strategic location in Senopati, and super
              friendly staff and doctors! Treated by Drg. Aqmarina Prallia,
              who&#39;s very friendly and super efficient in working on my
              treatments. Received a thorough explanation as well on how to
              maintain and take care the teeth post treatment. Thanks!”
            </p>
            <div className="mt-4">
              <h3 className="text-2xl text-gray chivo font-bold">Jane Doe</h3>
              <p className="text-lg text-[#64CCCE]">
                Marketing Manager, Jakarta
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
