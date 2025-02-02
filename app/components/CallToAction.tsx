"use client"
import { motion } from "framer-motion"

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#33c6f2]">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-gray-900"
        >
          Ready to Start Your IT Journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-900"
        >
          Join Zylux IT Academy today and transform your career in technology.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 hover:text-black transition-colors"
        >
          Enroll Now
        </motion.button>
      </div>
    </section>
  )
}

export default CallToAction

