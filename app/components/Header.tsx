"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-10 bg-gray-900 bg-opacity-90 backdrop-blur-sm"
    >
       <a href="#course" className='underline p-1 flex justify-center text-white bg-[#33c6f2] cursor-pointer'>View Courses</a>
      
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <p className="text-[#33c6f2] font-bold">Zylux IT Academy</p>
        <ul className="flex space-x-4">
            <motion.li  className="flex gap-4 items-center">
              <a href="#" className="hover:text-[#33c6f2] transition-colors">Home</a>
              <a href="#course" className="hover:text-[#33c6f2] transition-colors">Courses</a>
              <a href="#footer" className="hover:text-[#33c6f2] transition-colors">Contact</a>
              <a href="#" className="bg-[#33c6f2] text-white p-2 rounded-lg hover:opacity-80">Enroll Now</a>
               
              
            </motion.li>
          
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

