"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#33c6f2] text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8"
        >
          Ready to Start Your IT Journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Join Zylux IT Academy today and transform your career in technology.
        </motion.p>
        <Link href={"/Pages/enroll"}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#33c6f2] px-8 py-3 rounded-full text-lg font-semibold transition-colors"
        >
          Enroll Now
        </motion.button>
        </Link>
      </div>
    </section>
  )
}

export default CallToAction

