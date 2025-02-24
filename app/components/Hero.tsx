"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="h-screen relative flex items-center justify-center text-center">
      <Image src="/hero.avif" alt="Technology background" fill style={{ objectFit: "cover" }} priority />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 z-10"
      >
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-[#33c6f2]">Zylux IT Academy</span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Unlock your potential in the world of technology with our cutting-edge courses in frontend and backend
          development.
        </p>
        <Link href={"/Pages/enroll"}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#33c6f2] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#33c6f2]/90 transition-colors"
        >
          Enroll Now
        </motion.button></Link>
      </motion.div>
    </section>
  )
}

export default Hero

