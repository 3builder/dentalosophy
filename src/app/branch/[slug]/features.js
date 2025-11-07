import { CircleCheckBig } from "lucide-react";

export const Features = ({ branch = "" }) => {
  return (
    <div className="mt-14">
      <h2 className="text-5xl text-emerald chivo text-center">
        Mengapa Memilih
      </h2>
      <h2 className="text-5xl text-yellow chivo text-center">
        Dentalosophy {branch}
        <span className="text-emerald">?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-5">
        <div className="rounded-xl py-8 px-10 bg-white">
          <h5 className="text-lg text-emerald flex items-center font-bold mb-2">
            <CircleCheckBig className="mr-2" />
            Material Berkualitas
          </h5>
          <p className="text-gray text-sm">
            Perawatan dengan material gigi terbaik yang higienis
          </p>
        </div>
        <div className="rounded-xl py-8 px-10 bg-white">
          <h5 className="text-lg text-emerald flex items-center font-bold mb-2">
            <CircleCheckBig className="mr-2" />
            Material Berkualitas
          </h5>
          <p className="text-gray text-sm">
            Perawatan dengan material gigi terbaik yang higienis
          </p>
        </div>
        <div className="rounded-xl py-8 px-10 bg-white">
          <h5 className="text-lg text-emerald flex items-center font-bold mb-2">
            <CircleCheckBig className="mr-2" />
            Material Berkualitas
          </h5>
          <p className="text-gray text-sm">
            Perawatan dengan material gigi terbaik yang higienis
          </p>
        </div>
        <div className="rounded-xl py-8 px-10 bg-white">
          <h5 className="text-lg text-emerald flex items-center font-bold mb-2">
            <CircleCheckBig className="mr-2" />
            Material Berkualitas
          </h5>
          <p className="text-gray text-sm">
            Perawatan dengan material gigi terbaik yang higienis
          </p>
        </div>
      </div>
    </div>
  );
};
