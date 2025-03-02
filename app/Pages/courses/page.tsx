import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Code } from "lucide-react"
import Image from "next/image"

export default function Page() {
  return (
    <div>
      <section className="w-full mx-auto py-8 md:py-24">
        <div className="container px-4 md:px-6 mt-28 md:mt-14 w-full mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#33c6f2] px-3 py-1 text-sm text-white">Our Programs</div>
              <h2 className="text-2xl font-bold tracking-tighter md:text-4xl text-[#33c6f2]">
                Cutting-Edge Curriculum
              </h2>
              <p className="max-w-[700px] text-muted-foreground text-sm md:text-xl">
                Designed by industry experts to prepare you for real-world challenges
              </p>
            </div>
          </div>

          <Tabs defaultValue="software" className="mt-8 md:mt-12">
            <div className="w-full overflow-x-auto pb-2">
              <TabsList className="flex w-full md:grid md:grid-cols-3 mb-6 md:mb-8 text-[#33c6f2]">
                <TabsTrigger value="software" className="flex-1 whitespace-nowrap">
                  <span className="block md:hidden">Frontend</span>
                  <span className="hidden md:block">Frontend Development</span>
                </TabsTrigger>
                <TabsTrigger value="cybersecurity" className="flex-1 whitespace-nowrap">
                  <span className="block md:hidden">Backend</span>
                  <span className="hidden md:block">Backend Development</span>
                </TabsTrigger>
                <TabsTrigger value="data" className="flex-1 whitespace-nowrap">
                  <span className="block md:hidden">FullStack</span>
                  <span className="hidden md:block">FullStack Development</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="software" className="space-y-4">
              <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12 items-start md:items-center">
                <div className="space-y-4 order-2 md:order-1">
                  <h3 className="text-xl md:text-2xl font-bold">Frontend Development</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Master front-end technologies with our comprehensive program.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Code className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" />
                      <span className="text-sm md:text-base">Html5 & CSS3</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" />
                      <span className="text-sm md:text-base">Modern Javascript Frameworks</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" />
                      <span className="text-sm md:text-base">Different Component Library</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl order-1 md:order-2">
                  <Image src="/class1.jpg" alt="Software development class" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cybersecurity" className="space-y-4">
              <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12 items-start md:items-center">
                <div className="space-y-4 order-2 md:order-1">
                  <h3 className="text-xl md:text-2xl font-bold">Backend Development</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Master back-end technologies with our comprehensive program.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Code className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" />
                      <span className="text-sm md:text-base">Database Management</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" />
                      <span className="text-sm md:text-base">Server & API Development</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" />
                      <span className="text-sm md:text-base">Scalability & Performance</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl order-1 md:order-2">
                  <Image src="/class3.jpg" alt="Cybersecurity training session" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-4">
              <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12 items-start md:items-center">
                <div className="space-y-4 order-2 md:order-1">
                  <h3 className="text-xl md:text-2xl font-bold">FullStack Development</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Master front-end and back-end technologies with our comprehensive program.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Code className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" />
                      <span className="text-sm md:text-base">Frontend & Backend Integration</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" />
                      <span className="text-sm md:text-base">Authentication & Security</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" />
                      <span className="text-sm md:text-base">Deployment & DevOps</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl order-1 md:order-2">
                  <Image src="/class2.jpg" alt="Data science workshop" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

