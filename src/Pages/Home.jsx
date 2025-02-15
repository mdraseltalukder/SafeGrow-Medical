import Call from '@/components/Home/Call'
import Care from '@/components/Home/Care'
import { TestimonialSlider } from '@/components/Home/Carousel'
import DoctorsSection from '@/components/Home/DocorsCare'
import { HealthEducation } from '@/components/Home/Education'
import Gallery from '@/components/Home/Gallery'
import HealthSection from '@/components/Home/HealthSection'
import Hero from '@/components/Home/Hero'
import TeethBrush from '@/components/Home/TeethBrush'

export default function Home() {
  return (
    <div>
        <Hero />
        <Gallery/>
        <Care/>
        <DoctorsSection/>
        <HealthSection/>
        <Call />
        <TeethBrush />
        <TestimonialSlider />
        <HealthEducation />
    </div>
  )
}
