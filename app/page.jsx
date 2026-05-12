import { Hero } from "../components/Hero";
import { SpecialistSection } from "../components/SpecialistSection";
import { ValueProps } from "../components/ValueProps";
import { Process } from "../components/Process";
import { Testimonial } from "../components/Testimonial";
import { ServiceAreas } from "../components/ServiceAreas";
import { ContactSection } from "../components/ContactSection";

export const metadata = {
  title: "SM Plumbing & Property Services — Specialist Bathroom Installations, Essex",
  description: "Specialist bathroom fitter covering Basildon, Brentwood, Billericay, Hornchurch and Chelmsford. Full project management, fixed-price quotes, 12-month guarantee.",
};

export default function HomePage() {
  return (
    <main>
      <Hero variant="overlay"/>
      <SpecialistSection/>
      <ValueProps/>
      <Process/>
      <Testimonial/>
      <ServiceAreas/>
      <ContactSection/>
    </main>
  );
}
