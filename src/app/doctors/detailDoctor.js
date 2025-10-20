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
import Image from "next/image";
import { CircleX } from "lucide-react";

export const DetailDoctorModal = ({ data }) => {
  const listItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          variants={listItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center justify-self-center hover:cursor-pointer"
        >
          <div className="mb-3 rounded-full overflow-hidden">
            <div className="relative w-full">
              <Image
                src={data.image}
                alt={data.title || "Promo image"}
                width={224}
                height={287}
                className="mx-auto max-w-[224.99px] max-h-[287.23px]"
              />
            </div>
          </div>

          <h3 className="mb-1 font-semibold">{data.name}</h3>
          <h3 className="mb-1 text-gray font-light">{data.title}</h3>
          <h3 className="mb-1 text-gray font-light">{data.location}</h3>
        </motion.div>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[600px] p-0 overflow-hidden rounded-2xl max-h-[85vh] flex flex-col"
      >
        <DialogClose asChild>
          <button
            className="absolute top-3 right-3 z-10 text-gray-400 cursor-pointer transition"
            aria-label="Tutup"
          >
            <CircleX
              strokeWidth={2}
              fill="black"
              className="text-white h-7 w-7 [&>circle]:stroke-none"
            />
          </button>
        </DialogClose>
        <div className="overflow-y-auto flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white flex flex-col h-full"
          >
            <DialogHeader className="p-0 flex justify-center bg-white shrink-0">
              <div className="w-full flex justify-center">
                <Image
                  src={data.image}
                  alt={data.title || "Promo image"}
                  width={450}
                  height={200}
                  className="rounded-t-2xl object-contain w-[190px] h-auto"
                />
              </div>
            </DialogHeader>

            <div className="p-6">
              <DialogTitle className="font-bold text-center text-gray-800 mb-1">
                {data.name}
              </DialogTitle>
              <div className="text-center mb-5">
                <p>{data.title}</p>
                <p>{data.location}</p>
              </div>
              <DialogDescription
                asChild
                className="text-gray-600 leading-relaxed text-sm"
              >
                <div>
                  <div className="mb-4">
                    {data?.educations?.length > 0 && (
                      <>
                        <p className="mb-1 font-bold chivo">PENDIDIKAN</p>
                        <ul className="space-y-2">
                          {data?.educations?.map((edu, i) => (
                            <li
                              key={i}
                              className="relative pl-6 before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-yellow before:absolute before:left-0 before:top-1.5"
                            >
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <div className="mb-4">
                    {data?.certificate?.length > 0 && (
                      <>
                        <p className="mb-1 font-bold chivo">SERTIFIKASI</p>
                        <ul className="space-y-2">
                          {data?.certificate?.map((edu, i) => (
                            <li
                              key={i}
                              className="relative pl-6 before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-yellow before:absolute before:left-0 before:top-1.5"
                            >
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <div className="mb-4">
                    {data?.achievements?.length > 0 && (
                      <>
                        <p className="mb-1 font-bold chivo">PRESTASI</p>
                        <ul className="space-y-2">
                          {data?.achievements?.map((edu, i) => (
                            <li
                              key={i}
                              className="relative pl-6 before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-yellow before:absolute before:left-0 before:top-1.5"
                            >
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  <div className="mb-4">
                    {data?.seminar?.length > 0 && (
                      <>
                        <p className="mb-1 font-bold chivo">SEMINAR</p>
                        <ul className="space-y-2">
                          {data?.seminar?.map((edu, i) => (
                            <li
                              key={i}
                              className="relative pl-6 before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-yellow before:absolute before:left-0 before:top-1.5"
                            >
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  <div className="mb-4">
                    {data?.specialists?.length > 0 && (
                      <>
                        <p className="mb-1 font-bold chivo">KEAHLIAN</p>
                        <ul className="space-y-2">
                          {data?.specialists?.map((edu, i) => (
                            <li
                              key={i}
                              className="relative pl-6 before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-yellow before:absolute before:left-0 before:top-1.5"
                            >
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </DialogDescription>
            </div>

            {/* <DialogFooter className="flex justify-end gap-3 p-4 border-t bg-gray-50">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="cursor-pointer border-yellow border-2 text-yellow hover:text-white hover:border-white hover:bg-yellow chivo font-bold"
                >
                  Tutup
                </Button>
              </DialogClose>
            </DialogFooter> */}
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
