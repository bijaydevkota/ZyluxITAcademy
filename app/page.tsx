import Header from "./components/Header"
import Hero from "./components/Hero"
import CourseOfferings from "./components/CourseOffering"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">

     
      <Header />
      <Hero />
      <CourseOfferings />
    
      <Footer />  
      <CallToAction />
    </main>
  )
}

