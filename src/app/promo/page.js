import promoData from "@utils/static/promoData";
import { PromoContent } from "./promoContent";

export const metadata = {
  title: "Promo",
  description: "Get the best dental care with our special promotions",
};

const Promo = () => {
  return (
    <>
      <div className="px-5 container mx-auto max-w-screen-lg">
        <p className="text-yellow xs:text-center">PROMO</p>
        <p className="text-4xl text-gray mb-6">
          Get the best dental care with our special promotions
        </p>

        {promoData.map((item, index) => {
          return (
            <div
              className="grid grid-cols-1 sm:grid-cols-3 text-center sm:text-left my-6 text-gray"
              key={index}
            >
              <PromoContent
                title={item.title}
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
