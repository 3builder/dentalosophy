"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@components/ui/dialog";
import { motion } from "framer-motion";
import { Button } from "@components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { CircleX } from "lucide-react";

export const DetailPromoModal = ({ title, description, image }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 py-1 bg-emerald text-white mt-4 rounded cursor-pointer"
        >
          Lihat Promo
        </motion.button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[450px] p-0 overflow-hidden rounded-2xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white"
        >
          <DialogClose asChild>
            <button
              className="absolute top-3 right-3 text-gray-400 cursor-pointer transition"
              aria-label="Tutup"
            >
              <CircleX
                strokeWidth={2}
                fill="black"
                className="text-white h-7 w-7 [&>circle]:stroke-none"
              />
            </button>
          </DialogClose>

          <DialogHeader className="p-0">
            <Image
              src={image}
              alt={title || "Promo image"}
              width={800}
              height={450}
              className="rounded-t-2xl object-cover w-full h-auto"
            />
          </DialogHeader>

          <div className="p-6 text-center sm:text-left">
            <DialogTitle className="text-2xl font-bold text-gray-800 mb-3">
              {title}
            </DialogTitle>
            <DialogDescription className="text-gray-600 leading-relaxed text-sm">
              {description}
            </DialogDescription>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
