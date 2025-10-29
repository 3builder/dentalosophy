import { Button } from "@components/ui/button";

export const ContactCard = ({
  address = "",
  phone = "",
  maps = "",
  call = "",
}) => {
  return (
    <div className="bg-[#FFFDF4] px-8 py-6 w-full rounded-xl shadow-sm border border-[#F3EED9]">
      <div className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr] items-start  gap-x-32 gap-y-6">
        <div className="flex items-start md:col-span-1">
          <div className="mr-10">
            <h5 className="text-black font-bold">Alamat Lengkap</h5>
            <p className="chivo text-gray">{address}</p>
          </div>
        </div>
        <div className="flex items-start md:col-span-1">
          <div className="md:mx-20">
            <h5 className="text-black font-bold">Telepon</h5>
            <p className="chivo text-gray">{phone}</p>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-3 md:col-span-1">
          <Button className="bg-white w-full hover:bg-emerald text-emerald hover:text-white font-bold border-2 border-emerald hover:border-white cursor-pointer rounded-full text-sm px-6">
            Lihat di Maps
          </Button>
          <Button className="bg-emerald hover:bg-white w-full text-white hover:text-emerald font-bold border-2 border-white hover:border-emerald cursor-pointer rounded-full text-sm px-6">
            Hubungi Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};
