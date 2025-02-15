import Banner from "@/components/About/Banner";
import HealthcareHero from "@/components/About/HealthcareHero";
import MedicalServices from "@/components/About/MedicalServices";
import StatsSection from './../components/About/StateSection';

export default function About() {
  return (
    <div>
    <Banner/>
    <HealthcareHero />
    <MedicalServices />
    <StatsSection />
    </div>
  )
}
