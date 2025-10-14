import { HeroSection } from "@components/HeroSection";
import { AboutSection } from "@components/AboutSection";
import { Partners } from "@components/PartnersSection";
import { TreatmentSection } from "@components/TreatmentSection";
import { DoctorsSection } from "@components/DoctorsSection";
import { PaymentOptions } from "@components/PaymentOptionsSection";
import { Testimonials } from "@components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Partners />
      <TreatmentSection />
      <DoctorsSection />
      <PaymentOptions />
      <Testimonials />
    </>
  );
}
