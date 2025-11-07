"use client";
import { Spinner } from "@components/ui/spinner";
import doctorsData from "@utils/static/doctorsData";
import { useState, useEffect, use } from "react";
import branchData from "@utils/static/branchData";
import { ContactCard } from "./contactCard";
import { DoctorsSection } from "./doctorSection";
import { TreatmentSection } from "./treatmentSection";
import { Features } from "./features";
import { Testimonials } from "./testimoni";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { useRouter } from "next/navigation";

const BranchDetail = ({ params }) => {
  const { slug } = use(params);
  const router = useRouter();
  const branch = branchData.find(
    (item) => item.slug.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const [isFetching, setIsFetching] = useState(true);
  const [accordionOpen, setAccordionOpen] = useState("");

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
        <h1 className="text-2xl text-yellow mb-4">
          Dentalosophy {branch.location}
        </h1>
        <h2 className="text-5xl text-emerald mb-4">
          Lorem ipsum dolor sit amet?
        </h2>
        <p className="text-gray md:max-w-[75%] justify-self-center">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <ContactCard address={branch.address} phone={branch.phone} />
      <div>
        <div className="relative mt-5 w-full h-[300] md:h-[480px]">
          <Image
            src={"/images/bsd/bsd2.jpg"}
            alt={"cabang"}
            fill
            className="object-cover object-center rounded-xl"
          />
        </div>
      </div>
      <Features branch={branch.location} />
      <DoctorsSection data={doctorsData} />
      <TreatmentSection
        accordionOpen={accordionOpen}
        setAccordionOpen={setAccordionOpen}
      />
      <Testimonials />
      <div className="mt-14">
        <div className="rounded-xl bg-emerald py-8 flex justify-center items-center">
          <div className="text-center space-y-8">
            <h3 className="text-4xl text-white font-bold chivo">
              Siap Untuk Perawatan Gigi Terbaik?
            </h3>
            <p className="mt-0 text-white chivo text-lg md:mx-32">
               Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. 
            </p>
            <div>
              <Button
                onClick={() => {
                  router.push("/#contact-us");
                }}
                size="lg"
                className="px-10 py-5 cursor-pointer bg-yellow hover:bg-white border-2 border-yellow hover:border-yellow hover:text-yellow chivo font-bold"
              >
                <Link href="/#contact-us" scroll={true}>
                  Jadwalkan Konsultasi Hari Ini
                </Link>
              </Button>
            </div>
            <div>
              <p className="text-white chivo">
                Hubungi via WhatsApp:{" "}
                <Link
                  className="font-bold"
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0812-345-6789
                </Link>{" "}
                | Telepon: <span className="font-bold">021-9876-5432</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchDetail;
