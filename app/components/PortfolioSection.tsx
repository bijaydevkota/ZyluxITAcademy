"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Presentation } from "lucide-react"
import { motion, useAnimation, type PanInfo } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function PortfolioSection() {
  const projects = [
    { id: 1, image: "/class1.jpg", title: "Project 1" },
    { id: 2, image: "/class1.jpg", title: "Project 2" },
    { id: 3, image: "/class1.jpg", title: "Project 3" },
    { id: 4, image: "/class2.jpg", title: "Project 4" },
    { id: 5, image: "/class3.jpg", title: "Project 5" },
    { id: 6, image: "/class1.jpg", title: "Project 6" },
    { id: 7, image: "/class2.jpg", title: "Project 7" },
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

  const itemWidth = Math.min(260, containerWidth - 32) // 32px for padding
  const itemsPerView = Math.floor(containerWidth / itemWidth)
  const maxIndex = Math.max(0, projects.length - itemsPerView)

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    if (info.offset.x < -swipeThreshold && currentIndex < maxIndex) {
      handleNext()
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      handlePrev()
    } else {
      // Snap back to current position
      controls.start({ x: -currentIndex * itemWidth })
    }
  }

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      const nextIndex = Math.min(currentIndex + 1, maxIndex)
      setCurrentIndex(nextIndex)
      controls.start({ x: -nextIndex * itemWidth })
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = Math.max(currentIndex - 1, 0)
      setCurrentIndex(prevIndex)
      controls.start({ x: -prevIndex * itemWidth })
    }
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
            className="flex gap-4 overflow-hidden"
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
                className="bg-white rounded-md overflow-hidden shadow-sm flex-shrink-0"
                style={{ width: itemWidth }}
              >
                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-[#33c6f2] scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className={`mx-2 bg-white rounded-full p-2 shadow-md ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Previous projects"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4 text-[#33c6f2]" />
          </button>
          <button
            className={`mx-2 bg-white rounded-full p-2 shadow-md ${
              currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Next projects"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="h-4 w-4 text-[#33c6f2]" />
          </button>
        </div>
      </div>
    </section>
  )
}

