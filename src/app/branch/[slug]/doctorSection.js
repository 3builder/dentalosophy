import Image from "next/image";
import { Button } from "@components/ui/button";

export const DoctorsSection = ({ data = null }) => {
  return (
    <div className="mt-14">
      <h2 className="text-3xl text-yellow playfair">
        Tim Dokter Profesional yang Berpengalaman
      </h2>
      <p className="text-gray md:max-w-[80%] mt-2">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <div className="mb-5 lg:mb-0 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-10">
        {data.slice(0, 4).map((item, index) => (
          <div key={index} className="text-center ">
            <div className="mb-3 bg-yellow-light rounded-full overflow-hidden">
              <div className="relative w-full">
                <Image
                  src={item.image}
                  alt={item.title || "doctor image"}
                  width={224}
                  height={287}
                  className="mx-auto max-w-[224.99px] max-h-[287.23px]"
                />
              </div>
            </div>
            <h3 className="mb-1">{item.name}</h3>
            <h4 className="mb-1 text-gray font-light text-center">
              {item.title}
            </h4>
            <h4 className="mb-1 text-gray font-light text-center">
              {item.location}
            </h4>
            <div className="mt-4">
              <Button className="bg-[#64CCCE]/15 text-[#64CCCE] hover:bg-[#64CCCE] hover:text-white rounded-lg chivo px-6 cursor-pointer">
                LIHAT JADWAL
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
