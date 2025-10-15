"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import galleryData from "@utils/static/galleryData";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ComparisonPicture } from "./compare";

const Gallery = () => {
  const [windowSize, setWindowSize] = useState({
    width: 624,
    height: 624,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const imageSize =
    windowSize.width > 624 ? windowSize.width / 4 : windowSize.width;

  return (
    <>
      <h1 className="text-4xl text-gray mb-6 text-center">Gallery</h1>

      <Tabs defaultValue="gallery" className="w-full">
        <TabsList className="mx-auto mb-4 flex justify-center mb-6 bg-transparent">
          <TabsTrigger
            className="px-4 py-4 text-gray-600 chivo text-lg font-medium hover:text-yellow cursor-pointer
                 data-[state=active]:text-white 
                 data-[state=active]:bg-yellow 
                 data-[state=active]:font-bold 
                 transition-all"
            value="gallery"
          >
            Gallery
          </TabsTrigger>
          <TabsTrigger
            className="px-4 py-4 text-gray-600 chivo text-lg font-medium hover:text-yellow cursor-pointer
                 data-[state=active]:text-white 
                 data-[state=active]:bg-yellow 
                 data-[state=active]:font-bold 
                 transition-all"
            value="compare"
          >
            Before/After
          </TabsTrigger>
        </TabsList>

        <TabsContent value="gallery">
          <div
            className={
              windowSize.width > 624
                ? "grid grid-cols-4 overflow-hidden"
                : "grid grid-cols-1 overflow-hidden"
            }
          >
            {galleryData.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden relative group"
                style={{
                  width: imageSize,
                  height: imageSize,
                }}
              >
                <Image
                  onClick={() => console.log("clicked")}
                  src={item.image}
                  alt={item.title ?? "gallery"}
                  fill
                  className="cursor-pointer object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compare">
          <ComparisonPicture />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Gallery;
