import Image from "next/image";
import paymentsData from "@utils/static/paymentsData";

export const PaymentOptions = () => {
  return (
    <div className="bg-white py-8">
      <p className="text-3xl mb-1 text-center text-gray">Payment Options</p>
      <div className="relative flex overflow-x-hidden">
        <div className="flex gap-8 w-max animate-marquee px-4">
          {paymentsData.map((item, index) => (
            <div className="relative w-32 h-32" key={`p1-${index}`}>
              <Image
                className="object-contain"
                src={item.logo}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 128px, 256px"
              />
            </div>
          ))}
          {paymentsData.map((item, index) => (
            <div className="relative w-32 h-32" key={`p2-${index}`}>
              <Image
                className="object-contain"
                src={item.logo}
                alt={item.name}
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
