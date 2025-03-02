"use client"
import Hero from "./components/Hero"
import CourseOfferings from "./components/CourseOffering"
import ContactForm from "./components/Contactus"
import { AccordionDemo } from "./components/faq"
import PortfolioSection from "./components/PortfolioSection"

import Status from "./components/Status"
import Values from "./components/Values"
import MarqueeDemo from "./components/marquee-demo"
import { IconCloudDemo } from "./components/Technology"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CourseOfferings />
      <PortfolioSection/>
      <Status/>
      <Values/>
      <IconCloudDemo/>
      <AccordionDemo/>
      <MarqueeDemo/>
      <ContactForm/>
    </main>
  )
}

