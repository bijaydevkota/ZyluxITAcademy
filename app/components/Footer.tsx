"use client"
import { motion } from "framer-motion"
import { Facebook, InstagramIcon, Mail} from "lucide-react"


const Footer = () => {


  const icons=[
    {
      icon:<Facebook/>,
      href:"https://www.facebook.com/zyluxitacademy",
      target:"_blank"
    },

    {
      icon:<InstagramIcon/>,
      href:"https://www.instagram.com/zyluxitacademy/"
      
    },


    {
      icon:<Mail/>,
      href:"#"
 
    },
  ]
  return (
    <footer id="footer" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-2">Zylux IT Academy</h3>
            <p className="text-gray-400">Empowering the next generation of tech professionals</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3 mb-6 md:mb-0"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Courses", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#33c6f2] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/3"
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {icons.map((item, index) => (
                <a key={index} href={item.href} className="hover:text-[#33c6f2] transition-colors">
                 {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zylux IT Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

