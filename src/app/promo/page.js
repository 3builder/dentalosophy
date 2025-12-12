import promoData from "@utils/static/promoData";
import { PromoContent } from "./promoContent";

export const metadata = {
  title: "Promo Dentalosophy – Diskon Perawatan Gigi Terbaik",
  robots: "index, follow",
  keywords: "Promo Perawatan Gigi",
  alternates: {
    canonical: "https://www.dentalosophy.id/promo",
  },
  description: "Dapatkan promo menarik untuk perawatan gigi di Dentalosophy. Diskon Veneer, Whitening, Scaling, Implan, dan layanan lainnya hanya disini.",
};

const Promo = () => {
  return (
    <>
      <div className="px-5 container mx-auto max-w-screen-lg">
        <h1 className="text-yellow xs:text-center">PROMO</h1>
        <h2 className="text-4xl text-gray mb-6">
          Get the best dental care with our special promotions
        </h2>

        {promoData.map((item, index) => {
          return (
            <div
              className="grid grid-cols-1 sm:grid-cols-3 text-center sm:text-left my-6 text-gray"
              key={index}
            >
              <PromoContent
                title={item.title}
                alt={item.alt}
                description={item.description}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Promo;
