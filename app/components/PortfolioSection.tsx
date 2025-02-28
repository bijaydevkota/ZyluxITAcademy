import Image from "next/image";
import { ChevronLeft, ChevronRight, Presentation } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";

export default function PortfolioSection() {
  const projects = [
    { id: 1, image: "/class1.jpg", title: "Project 1" },
    { id: 2, image: "/class1.jpg", title: "Project 2" },
    { id: 3, image: "/class1.jpg", title: "Project 3" },
    { id: 4, image: "/class2.jpg", title: "Project 4" },
    { id: 5, image: "/class3.jpg", title: "Project 5" },
    { id: 6, image: "/class1.jpg", title: "Project 6" },
    { id: 7, image: "/class2.jpg", title: "Project 7" },
  ];

  const [scrollX, setScrollX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);

  const itemWidth = 300;
  const maxScroll = -(itemWidth * (projects.length - 1));

  const handleNext = () => {
    if (scrollX > maxScroll) {
      setScrollX((prev) => Math.max(prev - itemWidth, maxScroll));
      setCurrentIndex((prev) => Math.min(prev + 1, projects.length - 1));
      controls.start({ x: Math.max(scrollX - itemWidth, maxScroll) });
    }
  };

  const handlePrev = () => {
    if (scrollX < 0) {
      setScrollX((prev) => Math.min(prev + itemWidth, 0));
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      controls.start({ x: Math.min(scrollX + itemWidth, 0) });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-4">
            <Presentation className="h-10 w-10 text-[#33c6f2] border border-[#33c6f2] p-1 rounded" />
          </div>
          <p className="text-[#33c6f2] text-sm tracking-wider uppercase mb-2">CLASSES WE DONE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#33c6f2] mb-3">Our recent creative classes</h2>
          <p className="text-[#33c6f2] text-sm">Let&apos;s check some of our perfect classes</p>
        </div>

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hidden md:flex"
            aria-label="Previous projects"
            onClick={handlePrev}
            disabled={scrollX === 0}
          >
            <ChevronLeft className={`h-5 w-5 ${scrollX === 0 ? 'text-gray-300' : 'text-[#33c6f2]'}`} />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hidden md:flex"
            aria-label="Next projects"
            onClick={handleNext}
            disabled={scrollX === maxScroll}
          >
            <ChevronRight className={`h-5 w-5 ${scrollX === maxScroll ? 'text-gray-300' : 'text-[#33c6f2]'}`} />
          </button>

          <motion.div
            ref={containerRef}
            className="flex gap-4 pb-6 snap-x overflow-hidden"
            animate={controls}
            transition={{ ease: "easeInOut", duration: 0.8 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="min-w-[260px] md:min-w-[300px] bg-white rounded-md overflow-hidden shadow-sm flex-shrink-0 snap-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative h-[200px] md:h-[240px] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-4">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-[#33c6f2]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
