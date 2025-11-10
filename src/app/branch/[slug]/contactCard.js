import { Button } from "@components/ui/button";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const ContactCard = ({
  address = "",
  phone = "",
  maps = null,
  openHours = [],
  contactLink= ""
}) => {
  return (
    <div className="bg-[#FFFDF4] px-8 py-6 w-full rounded-xl shadow-sm border border-[#F3EED9]">
      <div className="grid grid-cols-1 md:grid-cols-[auto_minmax(300px,1fr)_auto] items-start gap-x-32 gap-y-6">
        <div className="md:col-span-1">
          <div className="flex space-x-2 md:space-x-4 md:mr-10">
            <MapPin className="shrink-0 hidden md:block" />
            <div>
              <h5 className="text-black font-bold">Alamat Lengkap</h5>
              <p className="chivo text-gray">{address}</p>
            </div>
          </div>
          <div className="flex space-x-2 md:space-x-4 mt-5">
            <Phone className="mt-1 hidden md:block" size="18" />
            <div>
              <h5 className="text-black font-bold">Telepon</h5>
              <p className="chivo text-gray">{phone}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:col-span-1 w-full">
          <h5 className="text-black font-bold mb-2">Jam Operasional</h5>
          {openHours.map((hour, index) => (
            <div className="flex justify-between" key={index}>
              <h6>{hour.day}</h6>
              <p className="chivo text-gray">{hour.time}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col self-center md:col-span-1 space-y-3">
          <Button className="bg-emerald text-white w-full hover:bg-white hover:text-emerald border-2 border-white hover:border-emerald rounded-full text-sm px-6">
            <Link
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Sekarang
            </Link>
          </Button>
          <Button className="bg-white text-emerald w-full hover:bg-emerald hover:text-white border-2 border-emerald hover:border-white rounded-full text-sm px-6">
            <Link
              href={`https://www.google.com/maps?q=${maps.lat},${maps.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat di Maps
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
