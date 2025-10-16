import doctorsData from "@utils/static/doctorsData";
import { DoctorContent } from "./doctorContent";

const Doctors = () => {
  return (
    <div className="px-5 container mx-auto grid mb-20">
      <h1 className="text-4xl text-gray mb-6 text-center">Our Doctors</h1>
      <DoctorContent data={doctorsData} />
    </div>
  );
};

export default Doctors;
