"use client"

import Image from "next/image"
import { Presentation } from "lucide-react"
import { motion, useAnimation, type PanInfo } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function PortfolioSection() {
  const projects = [
    { id: 1, image: "/class1.jpg" },
    { id: 2, image: "/class5.jpg" },
    { id: 3, image: "/class3.jpg" },
    { id: 4, image: "/class2.jpg" },
    { id: 5, image: "/class1.jpg" },
    { id: 6, image: "/class1.jpg" },
    { id: 7, image: "/class2.jpg" },
    { id: 8, image: "/class2.jpg" },
    { id: 9, image: "/class3.jpg" },
    { id: 10, image: "/class1.jpg" },
    { id: 11, image: "/class2.jpg" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  // Calculate item width based on container width and desired items per view
  const itemsPerView = Math.floor(containerWidth / 300) || 1 // Show 1 item if container is too small
  const itemWidth = containerWidth / itemsPerView
  const maxIndex = Math.max(0, projects.length - itemsPerView)

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    if (info.offset.x < -swipeThreshold && currentIndex < maxIndex) {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    } else {
      // Snap back to current position
      controls.start({ x: -currentIndex * itemWidth })
    }
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    controls.start({ x: -currentIndex * itemWidth })
  }, [currentIndex, itemWidth, controls])

  return (
    <section className="py-12 md:py-24 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-4">
            <Presentation className="h-8 w-8 md:h-10 md:w-10 text-[#33c6f2] border border-[#33c6f2] p-1 rounded" />
          </div>
          <p className="text-[#33c6f2] text-xs md:text-sm tracking-wider uppercase mb-2">CLASSES WE DONE</p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#33c6f2] mb-3">Our recent creative classes</h2>
          <p className="text-[#33c6f2] text-xs md:text-sm">Let&apos;s check some of our perfect classes</p>
        </div>

        <div className="relative" ref={containerRef}>
          <motion.div
            className="flex gap-4"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -itemWidth * maxIndex, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-md overflow-hidden shadow-sm flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
                style={{ width: itemWidth }}
              >
                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt="Class Image" fill className="object-cover" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-[#33c6f2] scale-110" : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}