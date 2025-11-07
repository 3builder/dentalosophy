import { Button } from "@components/ui/button";
import { MapPin, Phone } from "lucide-react";

export const ContactCard = ({
  address = "",
  phone = "",
  maps = "",
  call = "",
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
          <div className="flex justify-between">
            <h6>SENIN - JUMAT</h6>
            <p className="chivo text-gray">10:00 - 20:00</p>
          </div>
          <div className="flex justify-between">
            <h6>SABTU</h6>
            <p className="chivo text-gray">10:00 - 18:00</p>
          </div>
          <div className="flex justify-between">
            <h6>MINGGU</h6>
            <p className="chivo text-gray">By appointment</p>
          </div>
        </div>
        <div className="flex flex-col items-end md:col-span-1 space-y-3">
          <Button className="bg-emerald text-white w-full hover:bg-white hover:text-emerald border-2 border-white hover:border-emerald rounded-full text-sm px-6">
            Hubungi Sekarang
          </Button>
          <Button className="bg-white text-emerald w-full hover:bg-emerald hover:text-white border-2 border-emerald hover:border-white rounded-full text-sm px-6">
            Lihat di Maps
          </Button>
        </div>
      </div>
    </div>
  );
};
