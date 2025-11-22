"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { DetailPromoModal } from "./detailPromo";

export const PromoContent = ({ image, title, alt, description }) => {
  return (
    <>
      <div className="sm:mr-6 cursor-pointer mb-3 sm:mb-0">
        <Image
          src={image}
          alt={alt}
          title={title}
          width={800}
          height={450}
        />
      </div>
      <div className="sm:col-span-2">
        <h2 className="text-lg hover:cursor-pointer hover:text-emerald font-bold transition duration-200 ease-in-out">
          {title}
        </h2>
        <h3 className="font-light my-2">{description}</h3>

        <DetailPromoModal
          image={image}
          alt={alt}
          title={title}
          description={description}
        />
      </div>
    </>
  );
};
