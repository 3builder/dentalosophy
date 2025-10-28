import Image from "next/image";
import { Skeleton } from "@components/ui/skeleton";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";

export const BranchCard = ({ data = {}, isLoading = false }) => {
  return (
    <>
      <div className="relative w-full h-48 overflow-hidden group">
        {isLoading ? (
          <Skeleton className="h-[300px] w-full" />
        ) : (
          <>
            <Image
              src={data.cover || "/images/about1.jpeg"}
              alt={data.location}
              fill
              className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-100 group-hover:object-[50%_40%] scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
            {data.city && (
              <Badge className="absolute top-2 right-2 font-bold bg-emerald text-black chivo shadow-md">
                {data.city}
              </Badge>
            )}
          </>
        )}
      </div>
      <div className="p-5 text-center flex flex-col justify-between flex-1">
        <div className="text-start flex-1">
          {isLoading ? (
            <div className="space-y-2 mb-3">
              <Skeleton className="h-4 w-[100px] mb-3" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-[50%]" />
            </div>
          ) : (
            <>
              <h3 className="text-[20px] mb-4 chivo font-semibold text-gray">
                {data.location}
              </h3>
              <div className="mb-3">
                <p className="text-gray chivo font-semibold">Alamat</p>
                <p className="text-gray-400 chivo text-sm leading-snug">
                  {data.address}
                </p>
              </div>

              <div>
                <p className="text-gray chivo font-semibold">Telepon</p>
                <p className="text-gray-400 chivo text-sm leading-snug">
                  {data.phone}
                </p>
              </div>
            </>
          )}
        </div>

        <div className="mt-auto pt-4">
          {isLoading ? (
            <Skeleton className="h-[30px] w-full" />
          ) : (
            <Button
              variant="outline"
              className="w-full border-emerald text-emerald hover:bg-emerald hover:text-white font-bold cursor-pointer chivo"
            >
              Lihat Detail
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
