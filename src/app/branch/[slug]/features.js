import { CircleCheckBig } from "lucide-react";

export const Features = () => {
  return (
    <div className="mt-14">
      <h2 className="text-5xl text-yellow chivo md:mx-28">
        Mengapa Memilih
        <br />
        Dentalosophy Senopati?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-5">
        <div className="border-1 border-yellow rounded-xl py-8 px-14 bg-white">
          <h5 className="text-2xl text-yellow flex items-center font-bold mb-2">
            <CircleCheckBig className="mr-2" />
            Material Berkualitas
          </h5>
          <p className="text-gray">
            Perawatan dengan material gigi terbaik yang higienis
          </p>
        </div>
        <div className="border-1 border-yellow rounded-xl py-8 px-14 bg-white">
          <h5 className="text-2xl text-yellow flex items-center font-bold mb-2">
            <CircleCheckBig className="mr-2" />
            Material Berkualitas
          </h5>
          <p className="text-gray">
            Perawatan dengan material gigi terbaik yang higienis
          </p>
        </div>
        <div className="border-1 border-yellow rounded-xl py-8 px-14 bg-white">
          <h5 className="text-2xl text-yellow flex items-center font-bold mb-2">
            <CircleCheckBig className="mr-2" />
            Material Berkualitas
          </h5>
          <p className="text-gray">
            Perawatan dengan material gigi terbaik yang higienis
          </p>
        </div>
      </div>
    </div>
  );
};
