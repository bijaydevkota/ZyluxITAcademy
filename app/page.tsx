"use client"
import Hero from "./components/Hero"
import CourseOfferings from "./components/CourseOffering"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import ContactForm from "./components/Contactus"
import { AccordionDemo } from "./components/faq"
import Testomonial from "./components/testomonial"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero />
      <CourseOfferings />
      <AccordionDemo/>
      <Testomonial/>
      <ContactForm/>
      <Footer />  
      <CallToAction />
    </main>
  )
}

