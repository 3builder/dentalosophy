import Image from "next/image";
import partnersData from "@utils/static/partnersData";

export const Partners = () => {
  return (
    <div className="bg-white py-8">
      <h2 className="text-3xl mb-1 text-center text-gray">
        Supportive Partners
      </h2>
      <div className="relative flex overflow-x-hidden">
        <div className="flex gap-8 w-max animate-marquee px-4">
          {partnersData.map((item, index) => (
            <div className="relative w-32 h-32" key={`p1-${index}`}>
              <Image
                className="object-contain"
                src={item.logo}
                alt={item.seo.alt}
                title={item.seo.title}
                fill
                sizes="(max-width: 768px) 128px, 256px"
              />
            </div>
          ))}
          {partnersData.map((item, index) => (
            <div className="relative w-32 h-32" key={`p2-${index}`}>
              <Image
                className="object-contain"
                src={item.logo}
                alt={item.seo.alt}
                title={item.seo.title}
                fill
                sizes="(max-width: 768px) 128px, 256px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
