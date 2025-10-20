import doctorsData from "@utils/static/doctorsData";
import { DoctorContent } from "./doctorContent";

export const metadata = {
  title: "Our Doctors - Dentalosophy Klinik Gigi Terbaik Dan Terpercaya",
  description: "Dapatkan perawatan gigi terbaik di Dentalosophy bersama dokter gigi berpengalaman dan terpercaya untuk senyum sehat dan percaya diri.",
};

const Doctors = () => {
  return (
    <div className="px-5 container mx-auto grid mb-20">
      <p className="text-4xl text-gray mb-6 text-center">Our Doctors</p>
      <DoctorContent data={doctorsData} />
    </div>
  );
};

export default Doctors;
