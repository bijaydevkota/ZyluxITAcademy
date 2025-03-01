

import { Badge } from "@/components/ui/badge"
import {  ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 ">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 lg:py-32  text-[#33c6f2] overflow-hidden w-11/12 mx-auto mt-24 md:mt-8">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-no-repeat bg-cover"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <Badge className="px-3 py-1 text-sm bg-[#33c6f2] text-white " variant="outline">
              Empowering Tech Innovators Since 2023
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              About <span className="text-primary">Zylux</span> IT Academy
            </h1>
            <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl">
              Where technology meets education to create the next generation of digital pioneers
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="w-full mx-auto py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#33c6f2] text-white px-3 py-1 text-sm text-primary">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#33c6f2]">Transforming Tech Education</h2>
              <p className="text-muted-foreground md:text-xl">
                At Zylux IT Academy, we believe in a hands-on approach to learning technology. Our mission is to bridge
                the gap between theoretical knowledge and practical industry requirements, creating professionals who
                are ready to innovate from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                
                  <Link href="/Pages/courses" className="bg-[#33c6f2] text-white px-4 py-2 flex rounded-full">
                    Explore Our Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                
                  <Link href="/Pages/contact"  className="bg-[#33c6f2] text-white px-4 py-2 rounded-full">Get in Touch</Link>
                
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/class2.jpg"
                alt="Students collaborating on a tech project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    <hr />
    </div>
  )
}

