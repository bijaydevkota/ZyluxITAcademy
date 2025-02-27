import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code } from "lucide-react"
import Image from 'next/image'
export default function page() {
  return (
    <div>
        <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#33c6f2] px-3 py-1 text-sm text-white">Our Programs</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#33c6f2]">Cutting-Edge Curriculum</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Designed by industry experts to prepare you for real-world challenges
              </p>
            </div>
          </div>

          <Tabs defaultValue="software" className="mt-12">
            <TabsList className="grid w-full grid-cols-3 mb-8 text-[#33c6f2]">
              <TabsTrigger value="software">Frontend Development</TabsTrigger>
              <TabsTrigger value="cybersecurity">Backend Development</TabsTrigger>
              <TabsTrigger value="data">FullStack Development</TabsTrigger>
            </TabsList>
            <TabsContent value="software" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Frontend Development</h3>
                  <p className="text-muted-foreground">
                    Master front-end technologies with our comprehensive program. 
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <span>Html5 & CSS3</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <span>Modern Javascript Frameworks</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <span>Different Component Library</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/class1.jpg"
                    alt="Software development class"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cybersecurity" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Backend Development</h3>
                  <p className="text-muted-foreground">
                  Master back-end technologies with our comprehensive program.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <span>Database Management</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <span> Server & API Development</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <span>Scalability & Performance</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/class3.jpg"
                    alt="Cybersecurity training session"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="data" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">FullStack Development</h3>
                  <p className="text-muted-foreground">
                  Master front-end and back-end technologies with our comprehensive program.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <span>Frontend & Backend Integration</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <span>Authentication & Securitys</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      <span>Deployment & DevOps</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/class2.jpg"
                    alt="Data science workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
