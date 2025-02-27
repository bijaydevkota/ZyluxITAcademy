import Image from "next/image"
import { ChevronLeft, ChevronRight, Presentation } from "lucide-react"

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      image: "/class1.jpg",
      title: "Project 1",
    },
    {
      id: 2,
      image: "/class1.jpg",
      title: "Project 2",
    },
    {
      id: 3,
      image: "/class1.jpg",
      title: "Project 3",
    },
    {
      id: 4,
      image: "/class2.jpg",
      title: "Project 4",
    },
    {
      id: 5,
      image: "/class3.jpg",
      title: "Project 5",
    },
    {
      id: 6,
      image: "/class1.jpg",
      title: "Project 6",
    },
    {
      id: 7,
      image: "/class2.jpg",
      title: "Project 7",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-100">
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
          {/* Carousel Navigation */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hidden md:flex"
            aria-label="Previous projects"
          >
            <ChevronLeft className="h-5 w-5 text-[#33c6f2]" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hidden md:flex"
            aria-label="Next projects"
          >
            <ChevronRight className="h-5 w-5 text-[#33c6f2]" />
          </button>

          {/* Projects Grid/Carousel */}
          <div className="flex overflow-x-auto gap-4 pb-6 snap-x scrollbar-hide">
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-[260px] md:min-w-[300px] bg-white rounded-md overflow-hidden shadow-sm flex-shrink-0 snap-center"
              >
                <div className="relative h-[200px] md:h-[240px] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  )
}

