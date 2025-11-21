"use client";
import { Spinner } from "@components/ui/spinner";
import doctorsData from "@utils/static/doctorsData";
import { useState, useEffect } from "react";
import branchData from "@utils/static/branchData";
import { ContactCard } from "./contactCard";
import { DoctorsSection } from "./doctorSection";
import { TreatmentSection } from "./treatmentSection";
import { Features } from "./features";
import { Testimonials } from "./testimoni";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { useRouter, useParams } from "next/navigation";

const BranchDetail = () => {
  const { slug } = useParams();
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

  const selectedDoctors = doctorsData.filter((doctor) =>
    doctor.branch.some((b) => b.loc === branch?.location)
  );

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
        <h2 className="text-5xl text-emerald mb-4">{branch.headers.title}</h2>
        <p className="text-gray md:max-w-[75%] justify-self-center">
          {branch.headers.description}
        </p>
      </div>
      <ContactCard
        address={branch.address}
        phone={branch.phone}
        openHours={branch.openHours}
        whatsappLink={branch.whatsappLink}
        googlemapLink={branch.googlemapLink}
      />
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
      <Features branch={branch.location} usp={branch.usp}/>
      <Button className="bg-emerald text-white w-[300px] mx-auto mb-4 mt-4 hover:bg-white hover:text-emerald border-2 border-white hover:border-emerald text-sm px-6 py-3">
            <Link
              href={branch.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              KONSULTASI GRATIS VIA WHATSAPP
            </Link>
      </Button>      
      <DoctorsSection
        data={selectedDoctors}
        location={branch?.location}
        doctorsSection={branch.doctorsSection}
      />
      <TreatmentSection
        data={branch.treatment}
        accordionOpen={accordionOpen}
        setAccordionOpen={setAccordionOpen}
      />
      <Testimonials data={branch.testimonialsData}/>
      <div className="mt-14">
        <div className="rounded-xl bg-emerald py-8 flex justify-center items-center">
          <div className="text-center space-y-8">
            <h3 className="text-4xl text-white font-bold chivo">
             {branch.footer.title}
            </h3>
            <p className="mt-0 text-white chivo text-lg md:mx-32">
              {branch.footer.description}
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
                  href={branch.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {branch.phone}
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
