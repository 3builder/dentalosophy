import doctorsData from "@utils/static/doctorsData";
import { DoctorContent } from "./doctorContent";

export const metadata = {
  title: "Dokter Gigi Terbaik Dan Profesional | Dentalosophy",
  robots: "index, follow",
  alternates: {
    canonical: "https://dentalosophy.id/doctors",
  },
  description: "Dokter gigi berpengalaman dan terpercaya di Dentalosophy. Perawatan gigi terbaik untuk hasil maksimal dan senyum yang lebih sehat serta percaya diri.",
  keywords: "Dokter Gigi",
};

const Doctors = () => {
  return (
    <div className="px-5 container mx-auto grid mb-20">
      <h1 className="text-4xl text-gray mb-6 text-center">Our Doctors</h1>
      <DoctorContent data={doctorsData} />
    </div>
  );
};

export default Doctors;
