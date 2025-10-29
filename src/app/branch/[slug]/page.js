"use client";
import { Spinner } from "@components/ui/spinner";
import { Button } from "@components/ui/button";
import { useState, useEffect, use } from "react";
import branchData from "@utils/static/branchData";
import { ContactCard } from "./contactCard";

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
      <ContactCard address={branch.address} phone={branch.phone} />
    </div>
  );
};

export default BranchDetail;
