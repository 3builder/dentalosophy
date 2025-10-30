import Image from "next/image";

export const DoctorsSection = ({ data = null }) => {
  return (
    <div className="mt-10">
      <h2 className="text-4xl text-[#5A5A5A] playfair">
        Tim Dokter Profesional
      </h2>
      <hr className="mt-3 border-1 border-gray opacity-40" />
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
          </div>
        ))}
      </div>
    </div>
  );
};
