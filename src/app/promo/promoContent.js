"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { DetailPromoModal } from "./detailPromo";

export const PromoContent = ({ image, title, description }) => {
  return (
    <>
      <div className="sm:mr-6 cursor-pointer mb-3 sm:mb-0">
        <Image
          src={image}
          alt={title || "Promo image"}
          width={800}
          height={450}
        />
      </div>
      <div className="sm:col-span-2">
        <h2 className="text-lg hover:cursor-pointer hover:text-emerald font-bold transition duration-200 ease-in-out">
          {title}
        </h2>
        <p className="font-light my-2">{description}</p>

        <DetailPromoModal
          image={image}
          title={title}
          description={description}
        />
      </div>
    </>
  );
};
