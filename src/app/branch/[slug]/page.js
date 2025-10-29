"use client";
import { Spinner } from "@components/ui/spinner";
import { Button } from "@components/ui/button";
import { useState, useEffect, use } from "react";
import branchData from "@utils/static/branchData";

const BranchDetail = ({ params }) => {
  const { slug } = use(params);
  const branch = branchData.find(
    (item) => item.slug.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (isFetching) {
      setTimeout(() => {
        setIsFetching(false);
      }, 2000);
    }
  }, [isFetching, setIsFetching]);

  useEffect(() => {
    const prevBg = document.body.style.background;
    document.body.style.background = "#F3FFFB";
    return () => {
      document.body.style.background = prevBg || "";
    };
  }, []);

  if (isFetching) {
    return (
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center">
        <Spinner className="size-10 text-emerald" />
        <p className="mt-3 text-gray">Loading...</p>
      </div>
    );
  }
  return (
    <div className="px-5 container mx-auto grid mb-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl text-emerald mb-4">
          Dentalosophy {branch.location}
        </h1>
        <p className="text-gray">
          Perawatan gigi berkualitas dengan{" "}
          <span className="italic">personalized approach</span> di jantung{" "}
          {branch.city}
        </p>
      </div>
      <div className="bg-[#FFFDF4] px-8 py-6 w-full rounded-xl shadow-sm border border-[#F3EED9]">
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr] items-start md:items-center gap-x-32 gap-y-6">
          {/* Kolom Alamat */}
          <div className="flex items-start md:col-span-1">
            <div className="mr-10">
              <h5 className="text-black font-bold">Alamat Lengkap</h5>
              <p className="chivo text-gray">{branch.address}</p>
            </div>
          </div>

          {/* Kolom Telepon */}
          <div className="flex items-start md:col-span-1">
            <div className="md:mx-20">
              <h5 className="text-black font-bold">Telepon</h5>
              <p className="chivo text-gray">{branch.phone}</p>
            </div>
          </div>

          {/* Kolom Tombol */}
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
    </div>
  );
};

export default BranchDetail;
