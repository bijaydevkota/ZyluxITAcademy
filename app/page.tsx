"use client"
import Hero from "./components/Hero"
import CourseOfferings from "./components/CourseOffering"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import ContactForm from "./components/Contactus"
import { AccordionDemo } from "./components/faq"
import Testomonial from "./components/testomonial"
import PortfolioSection from "./components/PortfolioSection"

import Status from "./components/Status"
import Values from "./components/Values"

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <CourseOfferings />
      <PortfolioSection/>
      <Status/>
      <Values/>
      <AccordionDemo/>
      <Testomonial/>
      <ContactForm/>
      
      
    </main>
  )
}

