import Image from "next/image";
import { Button } from "@components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

export const DoctorsSection = ({
  data = null,
  doctorsSection = null,
  location = "",
}) => {
  const getSchedulesByLocation = (doctor, location) => {
    const branch = doctor.branch.find(
      (b) => b.loc.toLowerCase() === location.toLowerCase()
    );
    return branch?.schedules || [];
  };
  return (
    <div className="mt-14">
      <h2 className="text-3xl text-yellow playfair">{doctorsSection.title}</h2>
      <p className="text-gray md:max-w-[80%] mt-2">
        {doctorsSection.description}
      </p>
      <div className="mb-5 lg:mb-0 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-10">
        {data.map((item, index) => {
          const schedules = getSchedulesByLocation(item, location);
          return (
            <div key={index} className="text-center ">
              <div className="mb-3 bg-yellow-light rounded-full overflow-hidden">
                <div className="relative w-full">
                  <Image
                    src={item.image}
                    alt={item.seo.alt}
                    title={item.seo.title}
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
                <Accordion type="single" collapsible className="mt-4 w-full">
                  <AccordionItem value={`item-${index}`}>
                    {/* <div className="flex justify-center"> */}
                    <AccordionTrigger
                      hasChevron={false}
                      className="w-[200px] bg-[#64CCCE]/15 text-[#64CCCE] 
                      hover:bg-[#64CCCE] hover:text-white 
                      rounded-none chivo px-6 py-2 cursor-pointer 
                      justify-center"
                    >
                      LIHAT JADWAL
                    </AccordionTrigger>
                    {/* </div> */}
                    <AccordionContent>
                      <div className="shadow-md border-l-4 border-emerald py-4 px-4 md:px-6 grid grid-cols-2 text-left text-gray-700 bg-gray-50">
                        {schedules.length > 0 ? (
                          schedules.map((schedule, i) => (
                            <div key={i} className="mb-2">
                              <p className="font-bold text-lg text-yellow chivo">
                                {schedule.day}
                              </p>
                              {schedule.time.map((t, j) => (
                                <p key={j} className="text-gray text-lg">
                                  {t}
                                </p>
                              ))}
                            </div>
                          ))
                        ) : (
                          <p>Tidak ada jadwal untuk lokasi ini.</p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
