import aboutData from "@utils/static/aboutData";

export const AboutSection = () => {
  return (
    <div className="px-5 container mx-auto mb-10 max-w-screen-xl" id="about">
      <h2 className="text-center text-3xl text-yellow mb-5 leading-normal">
        Why Dentalosophy?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray">
        {aboutData.map((item, index) => {
          return (
            <div key={index} className="text-center justify-self-center mb-14">
              <div className="h-56 w-56 mx-auto mb-5">
                <img
                  className="h-full w-full object-cover object-center rounded-full ring ring-emerald ring-offset-4 ring-offset-yellow-light"
                  src={item.image}
                  title={item.seo.title}
                  alt={item.seo.alt}
                />
              </div>

              <p className="font-[600] mb-2">{item.title}</p>
              <p className="text-[14px] font-light">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
