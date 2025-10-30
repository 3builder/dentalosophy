export const Specialist = ({ data = [] }) => {
  return (
    <div className="mt-14">
      <div>
        <h2 className="text-4xl text-[#5A5A5A] playfair">
          Perawatan Yang Tersedia
        </h2>
        <hr className="mt-3 border-1 border-gray opacity-40" />
        <div className="mt-5 flex flex-wrap justify-center gap-x-10 gap-y-3 px-14">
          {data?.length > 0 &&
            data?.map((item, index) => (
              <div key={index} className="my-6">
                <p className="text-gray text-xl">{item}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
