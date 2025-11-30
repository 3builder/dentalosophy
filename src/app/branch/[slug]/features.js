import { CircleCheckBig } from "lucide-react";

export const Features = ({ branch = "", usp = [] }) => {
  return (
    <div className="mt-14">
      <h2 className="text-5xl text-emerald chivo text-center">
        Mengapa Memilih
      </h2>
      <h2 className="text-5xl text-emerald chivo text-center">
        Dentalosophy {branch}
        <span className="text-emerald">?</span>
      </h2>

      <div
        className={`grid grid-cols-1 mt-8 gap-5 ${
          usp.length < 4
            ? "md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
            : "md:grid-cols-4"
        }`}
      >
        {usp.map((item, index) => (
          <div key={index} className="rounded-xl py-8 px-10 bg-white">
            <h5 className="text-lg text-emerald flex items-center font-bold mb-2">
              <CircleCheckBig className="mr-2" />
              {item.title}
            </h5>
            <p className="text-gray text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
