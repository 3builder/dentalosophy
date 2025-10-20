"use client";
import dynamic from "next/dynamic";
import reviewsData from "@utils/static/reviewsData";
import { useEffect, useRef, useState } from "react";
import { dateUnixFormat } from "@utils/helper/dateUnixFormat";
import { ChevronRight, ChevronLeft } from "lucide-react";
const StarRatingsNoSSR = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

export const Reviews = () => {
  const review = useRef(null);
  const [ratingsData, setratingsData] = useState(reviewsData);
  const [index, setindex] = useState(0);

  useEffect(() => {
    const data = ratingsData.filter((item) => item.text !== "");
    setratingsData(() => data);
    return () => {};
  }, []);

  const prevIndex = (index - 1 + ratingsData.length) % ratingsData.length;
  const nextIndex = (index + 1) % ratingsData.length;

  return (
    <div className="grid grid-cols-1 bg-white p-4 pb-20 text-gray">
      <p className="text-center text-4xl mb-8">What they love about us</p>

      <div
        className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-10 max-w-screen-lg transition duration-250 ease-in-out"
        ref={review}
      >
        <div
          className="opacity-50 hidden md:block hover:cursor-pointer"
          style={{ transform: "scale(0.85)" }}
          onClick={() => {
            review.current.style.opacity = 0;
            setTimeout(() => {
              review.current.style.opacity = 1;
              setindex(index == 0 ? index + ratingsData.length - 1 : index - 1);
            }, 250);
          }}
        >
          <div className="flex gap-2 items-center">
            <div>
              <p className="font-bold">
                {index == 0
                  ? ratingsData[ratingsData.length - 1].author_name
                  : ratingsData[index - 1].author_name}
              </p>
              <p className="text-sm" style={{ opacity: 0.35 }}>
                {dateUnixFormat(ratingsData[prevIndex].time)}
              </p>
            </div>
          </div>

          <StarRatingsNoSSR
            rating={
              index == 0
                ? ratingsData[ratingsData.length - 1].rating
                : ratingsData[index - 1].rating
            }
            starRatedColor="#E8C857"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
          />
          <p className="font-light italic mb-3 mt-2">
            {index == 0
              ? `${ratingsData[ratingsData.length - 1].text.substring(
                  0,
                  50
                )}...`
              : `${ratingsData[index - 1].text.substring(0, 50)}...`}
          </p>
        </div>
        {/* CENTER */}
        <div className="md:col-span-2">
          <div className="flex gap-2 items-center">
            <div>
              <p className="font-bold">{ratingsData[index].author_name}</p>
              <p className="text-sm" style={{ opacity: 0.35 }}>
                {dateUnixFormat(ratingsData[index].time)}
              </p>
            </div>
          </div>
          <StarRatingsNoSSR
            rating={ratingsData[index].rating}
            starRatedColor="#E8C857"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
          />
          <p className="font-light italic mb-3 mt-2">
            {ratingsData[index].text}
          </p>
        </div>
        {/* CENTER */}
        <div
          className="opacity-50 hidden md:block hover:cursor-pointer"
          style={{ transform: "scale(0.85)" }}
          onClick={() => {
            review.current.style.opacity = 0;
            setTimeout(() => {
              review.current.style.opacity = 1;
              setindex(index == ratingsData.length - 1 ? 0 : index + 1);
            }, 250);
          }}
        >
          <div className="flex gap-2 items-center">
            <div>
              <p className="font-bold">
                {index + 1 == ratingsData.length
                  ? ratingsData[ratingsData.length - 1].author_name
                  : ratingsData[index + 1].author_name}
              </p>
              <p className="text-sm" style={{ opacity: 0.35 }}>
                {dateUnixFormat(ratingsData[nextIndex].time)}
              </p>
            </div>
          </div>

          <StarRatingsNoSSR
            rating={
              index + 1 == ratingsData.length
                ? ratingsData[ratingsData.length - 1].rating
                : ratingsData[index + 1].rating
            }
            starRatedColor="#E8C857"
            numberOfStars={5}
            starDimension="15px"
            starSpacing="1px"
          />
          <p className="font-light italic mb-3 mt-2">
            {index + 1 == ratingsData.length
              ? `${ratingsData[ratingsData.length - 1].text.substring(
                  0,
                  50
                )}...`
              : `${ratingsData[index + 1].text.substring(0, 50)}...`}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-6 mx-auto">
        <button
          className="bg-white mt-3 p-2 px-5 text-yellow mx-auto rounded-full hover:scale-150 transition duration-250 ease-in-out"
          onClick={() => {
            review.current.style.opacity = 0;
            setTimeout(() => {
              review.current.style.opacity = 1;
              setindex(index == 0 ? index + ratingsData.length - 1 : index - 1);
            }, 250);
          }}
        >
          <span>
            <ChevronLeft strokeWidth={4} className="cursor-pointer" />
          </span>
        </button>
        <button
          className="bg-white mt-3 p-2 px-5 text-yellow mx-auto rounded-full hover:scale-150 transition duration-250 ease-in-out"
          onClick={() => {
            review.current.style.opacity = 0;
            setTimeout(() => {
              review.current.style.opacity = 1;
              setindex(index == ratingsData.length - 1 ? 0 : index + 1);
            }, 250);
          }}
        >
          <span>
            <ChevronRight strokeWidth={4} className="cursor-pointer" />
          </span>
        </button>
      </div>
    </div>
  );
};
