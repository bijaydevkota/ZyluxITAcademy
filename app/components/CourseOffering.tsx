"use client"
import { motion } from "framer-motion"
import { Code, Server, Globe } from "lucide-react"

const courses = [
  {
    title: "Frontend Development",
    description: "Master modern frontend technologies including React and Next.js",
    icon: Globe,
  },
  {
    title: "Backend Development",
    description: "Build robust server-side applications with Node.js and Express",
    icon: Server,
  },
  {
    title: "Full Stack Development",
    description: "Become a full stack developer with our comprehensive Next.js course",
    icon: Code,
  },
]

const CourseOfferings = () => {
  return (
    <section id="course" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <course.icon className="w-12 h-12 text-[#33c6f2] mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-300">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseOfferings

