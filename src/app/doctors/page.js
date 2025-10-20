import doctorsData from "@utils/static/doctorsData";
import { DoctorContent } from "./doctorContent";

export const metadata = {
  title: "Meet Our Dentists",
  description: "Professional dental care with a personal touch.",
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
